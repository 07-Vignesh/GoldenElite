"use client";
import React from "react";
import { useState } from "react";
import mentors from "../../../data/mentors";
import Image from "next/image";
import { toast } from "sonner";
import { bookMentor } from "@/actions/mentor-booking";


const gold = "#C9A84C";
const goldLight = "#E8C96A";
const black = "#0A0A0A";
const surface = "#111111";
const surfaceAlt = "#181818";
const border = "#2A2A2A";
const borderGold = "#3A2E10";
const textMuted = "#666666";
const textSecondary = "#999999";

const s = {
  page: {
    minHeight: "100vh",
    background: black,
    color: "#FFFFFF",
    fontFamily: "'Arial', sans-serif",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "120px 24px 80px",
  },

  // ── Header ──
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "56px",
  },
  avatarRing: {
    padding: "3px",
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${gold}, #6B4E12, ${gold})`,
    marginBottom: "24px",
  },
  avatar: {
    borderRadius: "50%",
    display: "block",
    border: `3px solid ${black}`,
  },
  verifiedBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: gold,
    background: "#0A0A0A",
    border: `0.5px solid ${borderGold}`,
    borderRadius: "2px",
    padding: "5px 12px",
    marginBottom: "16px",
    fontWeight: 600,
  },
  verifiedDot: {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: gold,
  },
  name: {
    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    fontFamily: "'Georgia', serif",
    marginBottom: "8px",
  },
  position: {
    fontSize: "15px",
    color: "#CCCCCC",
    lineHeight: 1.6,
    marginBottom: "6px",
  },
  meta: {
    fontSize: "12px",
    color: textMuted,
    letterSpacing: "0.08em",
    marginBottom: "28px",
  },
  bookBtn: {
    padding: "14px 36px",
    background: gold,
    color: "#000",
    border: "none",
    borderRadius: "2px",
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    fontWeight: 700,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    transition: "background 0.2s, transform 0.1s",
  },

  // ── Sections ──
  section: {
    background: surface,
    border: `0.5px solid ${border}`,
    borderRadius: "4px",
    padding: "28px 32px",
    marginBottom: "12px",
  },
  sectionLabel: {
    fontSize: "11px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: gold,
    fontWeight: 600,
    marginBottom: "18px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  sectionLabelLine: {
    flex: 1,
    height: "0.5px",
    background: borderGold,
  },
  bodyText: {
    fontSize: "14px",
    color: "#BBBBBB",
    lineHeight: 1.7,
    marginBottom: "16px",
  },

  // Skills
  skillsWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "4px",
  },
  skillPill: {
    fontSize: "12px",
    letterSpacing: "0.06em",
    color: "#AAAAAA",
    background: surfaceAlt,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    padding: "5px 12px",
  },

  // Mentorship details grid
  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  detailItem: {
    background: surfaceAlt,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    padding: "14px 16px",
  },
  detailLabel: {
    fontSize: "10px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: textMuted,
    marginBottom: "6px",
    fontWeight: 600,
  },
  detailValue: {
    fontSize: "13px",
    color: "#DDDDDD",
    lineHeight: 1.5,
  },

  // Education
  eduItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    padding: "16px 0",
    borderBottom: `0.5px solid ${border}`,
  },
  eduIcon: {
    width: "36px",
    height: "36px",
    background: "#0A0A0A",
    border: `0.5px solid ${borderGold}`,
    borderRadius: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: "14px",
  },
  eduDegree: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#EEEEEE",
    marginBottom: "2px",
  },
  eduInstitution: {
    fontSize: "12px",
    color: textSecondary,
    letterSpacing: "0.04em",
  },
  eduYear: {
    marginLeft: "auto",
    fontSize: "11px",
    color: gold,
    letterSpacing: "0.1em",
    flexShrink: 0,
  },

  // Rating
  ratingRow: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "24px",
  },
  ratingNum: {
    fontSize: "40px",
    fontWeight: 700,
    color: gold,
    fontFamily: "'Georgia', serif",
    lineHeight: 1,
  },
  ratingStars: {
    display: "flex",
    gap: "4px",
  },
  ratingSub: {
    fontSize: "11px",
    color: textMuted,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginTop: "2px",
  },
  testimonialItem: {
    background: surfaceAlt,
    border: `0.5px solid ${border}`,
    borderLeft: `2px solid ${borderGold}`,
    borderRadius: "2px",
    padding: "14px 18px",
    fontSize: "13px",
    color: "#AAAAAA",
    lineHeight: 1.65,
    marginBottom: "10px",
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
  },

  // Contact
  contactRow: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "14px 0",
    borderBottom: `0.5px solid ${border}`,
    fontSize: "14px",
    color: "#CCCCCC",
  },
  contactIcon: {
    width: "32px",
    height: "32px",
    background: surfaceAlt,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: gold,
    fontSize: "13px",
    flexShrink: 0,
  },
  contactLabel: {
    fontSize: "10px",
    color: textMuted,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "2px",
    fontWeight: 600,
  },
  contactLink: {
    color: gold,
    textDecoration: "none",
    fontSize: "13px",
  },

  // Modal overlay
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    padding: "24px",
  },
  modal: {
    background: "#0E0E0E",
    border: `0.5px solid ${border}`,
    borderTop: `2px solid ${gold}`,
    borderRadius: "4px",
    padding: "36px 32px",
    width: "100%",
    maxWidth: "440px",
  },
  modalEyebrow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
  },
  modalTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    fontFamily: "'Georgia', serif",
    marginBottom: "28px",
    textAlign: "center",
  },
  modalInput: {
    width: "100%",
    background: surfaceAlt,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    padding: "13px 14px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif",
    outline: "none",
    marginBottom: "12px",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  },
  modalInputLabel: {
    fontSize: "10px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: textMuted,
    fontWeight: 600,
    marginBottom: "6px",
    display: "block",
  },
  modalFieldWrap: {
    marginBottom: "16px",
  },
  modalActions: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginTop: "8px",
  },
  confirmBtn: {
    padding: "13px",
    background: gold,
    color: "#000",
    border: "none",
    borderRadius: "2px",
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s",
  },
  cancelBtn: {
    padding: "13px",
    background: "transparent",
    color: textSecondary,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",
    transition: "border-color 0.2s, color 0.2s",
  },
};

function SectionLabel({ children }) {
  return (
    <div style={s.sectionLabel}>
      {children}
      <div style={s.sectionLabelLine} />
    </div>
  );
}

function StarRating({ rating }) {
  return (
    <div style={s.ratingStars}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"
            fill={i <= Math.round(rating) ? gold : "#2A2A2A"}
          />
        </svg>
      ))}
    </div>
  );
}

const MentorProfilePage = ({ params }) => {
   const { id } = React.use(params);
  const mentor = mentors.find((m) => m.id === id);
  const [showForm, setShowForm] = useState(false);
  const [bookingData, setBookingData] = useState({ name: "", education: "", contact: "" });
  const [focusedField, setFocusedField] = useState(null);
  const [btnHover, setBtnHover] = useState(false);

  if (!mentor) {
    return (
      <div style={{ ...s.page, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: textMuted, letterSpacing: "0.1em", fontSize: "13px", textTransform: "uppercase" }}>
          Mentor not found
        </p>
      </div>
    );
  }

  const handleChange = (field, value) =>
    setBookingData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await bookMentor(id, bookingData);
      
      if (result.success) {
        toast.success("Mentor booked successfully!");
        setShowForm(false);
        setBookingData({ name: "", education: "", contact: "" });
      } else {
        toast.error(result.error || "Failed to book mentor");
      }
    } catch (error) {
      toast.error("An error occurred while booking the mentor");
    }
  };

  return (
    <div style={s.page}>
      <div style={s.container}>

        {/* ── Header ── */}
        <div style={s.header}>
          <div style={s.avatarRing}>
            <Image
              src={mentor.profile_picture_url}
              alt={mentor.name}
              width={140}
              height={140}
              style={s.avatar}
            />
          </div>

          {mentor.metadata?.public_figure && (
            <div style={s.verifiedBadge}>
              <div style={s.verifiedDot} />
              Verified Public Figure
            </div>
          )}

          <h1 style={s.name}>{mentor.name}</h1>
          <p style={s.position}>
            {mentor.professional_background.current_position}<br />
            <span style={{ color: gold }}>{mentor.professional_background.organization}</span>
          </p>
          <p style={s.meta}>
            {mentor.location} &nbsp;·&nbsp; {mentor.gender}
          </p>

          <button
            style={{
              ...s.bookBtn,
              background: btnHover ? goldLight : gold,
              transform: btnHover ? "translateY(-1px)" : "none",
            }}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            onClick={() => setShowForm(true)}
          >
            Book This Mentor
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5h12M9 1l4 4-4 4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* ── Professional Background ── */}
        <div style={s.section}>
          <SectionLabel>Professional Background</SectionLabel>
          <p style={s.bodyText}>
            {mentor.professional_background.years_of_experience}+ years of experience across{" "}
            {mentor.professional_background.industries.join(", ")}.
          </p>
          <div style={s.skillsWrap}>
            {mentor.professional_background.skills.map((skill, i) => (
              <span key={i} style={s.skillPill}>{skill}</span>
            ))}
          </div>
        </div>

        {/* ── Mentorship Details ── */}
        <div style={s.section}>
          <SectionLabel>Mentorship Details</SectionLabel>
          <div style={{ ...s.detailsGrid, marginBottom: "16px" }}>
            <div style={s.detailItem}>
              <div style={s.detailLabel}>Expertise</div>
              <div style={s.detailValue}>{mentor.mentorship_details.areas_of_expertise.join(", ")}</div>
            </div>
            <div style={s.detailItem}>
              <div style={s.detailLabel}>Mentorship Mode</div>
              <div style={s.detailValue}>{mentor.mentorship_details.preferred_mentorship_mode}</div>
            </div>
            <div style={s.detailItem}>
              <div style={s.detailLabel}>Languages</div>
              <div style={s.detailValue}>{mentor.mentorship_details.languages.join(", ")}</div>
            </div>
            <div style={s.detailItem}>
              <div style={s.detailLabel}>Mentorship Style</div>
              <div style={s.detailValue}>{mentor.mentorship_details.mentorship_style}</div>
            </div>
          </div>
          <div style={s.detailItem}>
            <div style={s.detailLabel}>Availability</div>
            <div style={s.detailValue}>{mentor.mentorship_details.availability.join(" · ")}</div>
          </div>
        </div>

        {/* ── Education ── */}
        <div style={s.section}>
          <SectionLabel>Education</SectionLabel>
          {mentor.education.map((edu, i) => (
            <div key={i} style={{ ...s.eduItem, borderBottom: i === mentor.education.length - 1 ? "none" : `0.5px solid ${border}` }}>
              <div style={s.eduIcon}>🎓</div>
              <div style={{ flex: 1 }}>
                <div style={s.eduDegree}>{edu.degree}</div>
                <div style={s.eduInstitution}>{edu.institution}</div>
              </div>
              <div style={s.eduYear}>{edu.year}</div>
            </div>
          ))}
        </div>

        {/* ── Testimonials & Rating ── */}
        <div style={s.section}>
          <SectionLabel>Testimonials & Rating</SectionLabel>
          <div style={s.ratingRow}>
            <div style={s.ratingNum}>{mentor.social_proof.rating}</div>
            <div>
              <StarRating rating={mentor.social_proof.rating} />
              <div style={s.ratingSub}>out of 5</div>
            </div>
          </div>
          {mentor.social_proof.testimonials.map((t, i) => (
            <div key={i} style={s.testimonialItem}>"{t}"</div>
          ))}
        </div>

        {/* ── Contact ── */}
        <div style={s.section}>
          <SectionLabel>Contact & Links</SectionLabel>
          <div style={{ ...s.contactRow }}>
            <div style={s.contactIcon}>✉</div>
            <div>
              <div style={s.contactLabel}>Email</div>
              <span>{mentor.contact.email}</span>
            </div>
          </div>
          <div style={s.contactRow}>
            <div style={s.contactIcon}>☎</div>
            <div>
              <div style={s.contactLabel}>Phone</div>
              <span>{mentor.contact.phone}</span>
            </div>
          </div>
          <div style={{ ...s.contactRow }}>
            <div style={s.contactIcon}>in</div>
            <div>
              <div style={s.contactLabel}>LinkedIn</div>
              <a href={mentor.contact.linkedin_url} target="_blank" style={s.contactLink}>
                View LinkedIn Profile →
              </a>
            </div>
          </div>
          {mentor.contact.website && (
            <div style={{ ...s.contactRow, borderBottom: "none" }}>
              <div style={s.contactIcon}>⊕</div>
              <div>
                <div style={s.contactLabel}>Website</div>
                <a href={mentor.contact.website} target="_blank" style={s.contactLink}>
                  Visit Website →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Booking Modal ── */}
      {showForm && (
        <div style={s.overlay} onClick={(e) => e.target === e.currentTarget && setShowForm(false)}>
          <div style={s.modal}>
            <div style={{ ...s.modalEyebrow, justifyContent: "center", marginBottom: "8px" }}>
              <div style={{ width: "24px", height: "1px", background: gold }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.18em", color: gold, textTransform: "uppercase", fontWeight: 600 }}>
                Book Session
              </span>
              <div style={{ width: "24px", height: "1px", background: gold }} />
            </div>

            <div style={s.modalTitle}>Book Mentor Session</div>

            <form onSubmit={handleSubmit}>
              {[
                { field: "name", label: "Full Name", placeholder: "Your full name" },
                { field: "education", label: "Education", placeholder: "Your current education level" },
                { field: "contact", label: "Contact Number", placeholder: "Your phone number" },
              ].map(({ field, label, placeholder }) => (
                <div key={field} style={s.modalFieldWrap}>
                  <label style={s.modalInputLabel}>{label}</label>
                  <input
                    style={{
                      ...s.modalInput,
                      borderColor: focusedField === field ? gold : border,
                      marginBottom: 0,
                    }}
                    placeholder={placeholder}
                    value={bookingData[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
              ))}

              <div style={s.modalActions}>
                <button type="submit" style={s.confirmBtn}>
                  Confirm Booking
                </button>
                <button
                  type="button"
                  style={s.cancelBtn}
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorProfilePage;