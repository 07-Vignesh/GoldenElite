"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import mentors from "@/data/mentors";

// Helper function to get or create user
async function getOrCreateUser(clerkUser) {
  if (!clerkUser) throw new Error("User not authenticated");

  let user = await db.user.findUnique({
    where: { clerkUserId: clerkUser.id },
  });

  if (!user) {
    user = await db.user.create({
      data: {
        clerkUserId: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress || "",
        name: clerkUser.firstName || clerkUser.username || "User",
        imageUrl: clerkUser.imageUrl,
      },
    });
  }

  return user;
}

// Book a mentor
export async function bookMentor(mentorId, bookingData) {
  try {
    const clerkUser = await currentUser();
    const dbUser = await getOrCreateUser(clerkUser);

    // Get mentor info from static data
    const mentor = mentors.find((m) => m.id === mentorId);
    if (!mentor) {
      throw new Error("Mentor not found");
    }

    // Create booking in database
    const booking = await db.mentorBooking.create({
      data: {
        userId: dbUser.id,
        mentorId: mentorId,
        mentorName: mentor.name,
        studentName: bookingData.name,
        studentEducation: bookingData.education,
        studentContact: bookingData.contact,
        status: "pending",
      },
    });

    return { success: true, booking };
  } catch (error) {
    console.error("Error booking mentor:", error);
    return { success: false, error: error.message };
  }
}

// Get user's booked mentors
export async function getBookedMentors() {
  try {
    const clerkUser = await currentUser();
    const dbUser = await getOrCreateUser(clerkUser);

    const bookings = await db.mentorBooking.findMany({
      where: {
        userId: dbUser.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Enrich bookings with mentor details from static data
    const enrichedBookings = bookings.map((booking) => {
      const mentorDetails = mentors.find((m) => m.id === booking.mentorId);
      return {
        ...booking,
        mentorDetails,
      };
    });

    return { success: true, bookings: enrichedBookings };
  } catch (error) {
    console.error("Error fetching booked mentors:", error);
    return { success: false, error: error.message };
  }
}

// Cancel a booking
export async function cancelBooking(bookingId) {
  try {
    const clerkUser = await currentUser();
    const dbUser = await getOrCreateUser(clerkUser);

    const booking = await db.mentorBooking.findUnique({
      where: { id: bookingId },
    });

    if (!booking || booking.userId !== dbUser.id) {
      throw new Error("Booking not found or unauthorized");
    }

    await db.mentorBooking.delete({
      where: { id: bookingId },
    });

    return { success: true };
  } catch (error) {
    console.error("Error canceling booking:", error);
    return { success: false, error: error.message };
  }
}
