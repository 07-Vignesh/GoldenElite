"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getBookedMentors, cancelBooking } from "@/actions/mentor-booking";

const gold = "#C9A84C";
const black = "#0A0A0A";
const surface = "#111111";
const border = "#2A2A2A";
const textSecondary = "#999999";

const s = {
  page: {
    minHeight: "100vh",
    background: black,
    color: "#FFFFFF",
    fontFamily: "'Arial', sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "120px 24px 80px",
  },
  header: {
    textAlign: "center",
    marginBottom: "64px",
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "20px",
  },
  eyebrowLine: {
    width: "40px",
    height: "1px",
    background: gold,
  },
  eyebrowText: {
    fontSize: "11px",
    letterSpacing: "0.22em",
    color: gold,
    textTransform: "uppercase",
    fontWeight: 600,
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    fontFamily: "'Georgia', serif",
    marginBottom: "16px",
  },
  description: {
    fontSize: "15px",
    color: textSecondary,
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "24px",
    marginBottom: "40px",
  },
  card: {
    background: surface,
    border: `0.5px solid ${border}`,
    borderRadius: "8px",
    padding: "24px",
    transition: "all 0.3s ease",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    borderRadius: "4px",
    objectFit: "cover",
    marginBottom: "16px",
  },
  cardName: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "8px",
  },
  cardMentorTitle: {
    fontSize: "13px",
    color: gold,
    marginBottom: "12px",
  },
  cardDetails: {
    fontSize: "12px",
    color: textSecondary,
    marginBottom: "16px",
    lineHeight: 1.6,
  },
  cardActions: {
    display: "flex",
    gap: "10px",
    marginTop: "16px",
  },
  actionBtn: {
    flex: 1,
    padding: "10px 16px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  viewBtn: {
    background: gold,
    color: black,
  },
  cancelBtn: {
    background: "transparent",
    color: textSecondary,
    border: `0.5px solid ${border}`,
  },
  emptyState: {
    textAlign: "center",
    padding: "60px 24px",
  },
  emptyIcon: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  emptyText: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "8px",
  },
  emptySubtext: {
    fontSize: "14px",
    color: textSecondary,
    marginBottom: "24px",
  },
};

export default function BookedMentorsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [canceling, setCanceling] = useState(null);

  useEffect(() => {
    fetchBookedMentors();
  }, []);

  const fetchBookedMentors = async () => {
    try {
      const result = await getBookedMentors();
      if (result.success) {
        setBookings(result.bookings);
      } else {
        toast.error(result.error || "Failed to fetch bookings");
      }
    } catch (error) {
      toast.error("Error loading booked mentors");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (bookingId) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;

    setCanceling(bookingId);
    try {
      const result = await cancelBooking(bookingId);
      if (result.success) {
        toast.success("Booking cancelled successfully");
        setBookings(bookings.filter((b) => b.id !== bookingId));
      } else {
        toast.error(result.error || "Failed to cancel booking");
      }
    } catch (error) {
      toast.error("Error canceling booking");
    } finally {
      setCanceling(null);
    }
  };

  return (
    <div style={s.page}>
      <div style={s.container}>
        {/* Header */}
        <div style={s.header}>
          <div style={s.eyebrow}>
            <div style={s.eyebrowLine} />
            <span style={s.eyebrowText}>Your Mentorships</span>
            <div style={s.eyebrowLine} />
          </div>
          <h1 style={s.heading}>Booked Mentors</h1>
          <p style={s.description}>
            Manage your mentor sessions and stay connected with your mentors
          </p>
        </div>

        {/* Bookings Grid or Empty State */}
        {loading ? (
          <div style={s.emptyState}>
            <p style={{ color: textSecondary }}>Loading your bookings...</p>
          </div>
        ) : bookings.length > 0 ? (
          <div style={s.cardsGrid}>
            {bookings.map((booking) => (
              <div
                key={booking.id}
                style={s.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(201, 168, 76, 0.15)";
                  e.currentTarget.style.borderColor = gold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = border;
                }}
              >
                {booking.mentorDetails?.profile_picture_url && (
                  <Image
                    src={booking.mentorDetails.profile_picture_url}
                    alt={booking.mentorName}
                    width={350}
                    height={200}
                    style={s.cardImage}
                  />
                )}

                <h3 style={s.cardName}>{booking.mentorName}</h3>

                {booking.mentorDetails?.professional_background && (
                  <p style={s.cardMentorTitle}>
                    {booking.mentorDetails.professional_background.current_position} @{" "}
                    {booking.mentorDetails.professional_background.organization}
                  </p>
                )}

                <div style={s.cardDetails}>
                  <strong>Your Details:</strong>
                  <div>Name: {booking.studentName}</div>
                  <div>Education: {booking.studentEducation}</div>
                  <div>Contact: {booking.studentContact}</div>
                  <div style={{ marginTop: "8px", color: gold }}>
                    Status: <strong>{booking.status}</strong>
                  </div>
                  <div style={{ marginTop: "8px", fontSize: "11px" }}>
                    Booked on: {new Date(booking.createdAt).toLocaleDateString()}
                  </div>
                </div>

                <div style={s.cardActions}>
                  <Link href={`/mentors/${booking.mentorId}`} style={{ flex: 1 }}>
                    <button
                      style={{
                        ...s.actionBtn,
                        ...s.viewBtn,
                        width: "100%",
                      }}
                    >
                      View Profile
                    </button>
                  </Link>
                  <button
                    style={{
                      ...s.actionBtn,
                      ...s.cancelBtn,
                    }}
                    onClick={() => handleCancel(booking.id)}
                    disabled={canceling === booking.id}
                  >
                    {canceling === booking.id ? "Canceling..." : "Cancel"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={s.emptyState}>
            <div style={s.emptyIcon}>📋</div>
            <h2 style={s.emptyText}>No Booked Mentors Yet</h2>
            <p style={s.emptySubtext}>Start your mentorship journey by booking a mentor</p>
            <Link href="/mentors">
              <button
                style={{
                  ...s.actionBtn,
                  ...s.viewBtn,
                  padding: "12px 24px",
                }}
              >
                Browse Mentors
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
