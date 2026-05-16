"use client";

import mentors from "../../data/mentors";
import MentorCard from "../../components/ui/mentor-card";

const gold = "#C9A84C";
const black = "#0A0A0A";
const surface = "#111111";
const border = "#2A2A2A";
const borderGold = "#3A2E10";
const textSecondary = "#999999";

const s = {
  page: {
    minHeight: "100vh",
    background: black,
    color: "#FFFFFF",
    fontFamily: "'Arial', sans-serif",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "120px 24px 80px",
  },

  // ── Header ──
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
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    fontFamily: "'Georgia', serif",
    marginBottom: "14px",
    lineHeight: 1.15,
  },
  subheading: {
    fontSize: "15px",
    color: textSecondary,
    maxWidth: "480px",
    margin: "0 auto 32px",
    lineHeight: 1.7,
  },

  // ── Count strip ──
  countStrip: {
    display: "inline-flex",
    alignItems: "center",
    gap: "24px",
    background: surface,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    padding: "10px 28px",
  },
  countItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  countDivider: {
    width: "0.5px",
    height: "20px",
    background: border,
  },
  countNum: {
    fontSize: "18px",
    fontWeight: 700,
    color: gold,
    fontFamily: "'Georgia', serif",
    lineHeight: 1,
  },
  countLabel: {
    fontSize: "10px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: textSecondary,
    fontWeight: 600,
  },

  // ── Divider ──
  divider: {
    height: "0.5px",
    background: `linear-gradient(to right, transparent, ${borderGold}, transparent)`,
    marginBottom: "48px",
  },

  // ── Grid ──
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "12px",
  },
};

const MentorsPage = () => {
  const totalIndustries = [
    ...new Set(mentors.flatMap((m) => m.professional_background?.industries ?? [])),
  ].length;

  const avgRating =
    mentors.reduce((sum, m) => sum + (m.social_proof?.rating ?? 0), 0) /
    mentors.length;

  return (
    <div style={s.page}>
      <div style={s.container}>

        {/* ── Header ── */}
        <div style={s.header}>
          <div style={s.eyebrow}>
            <div style={s.eyebrowLine} />
            <span style={s.eyebrowText}>Expert Network</span>
            <div style={s.eyebrowLine} />
          </div>

          <h1 style={s.heading}>Meet Our Mentors</h1>

          <p style={s.subheading}>
            Learn from industry experts who have guided hundreds of
            professionals to success.
          </p>

          {/* Stats strip */}
          <div style={s.countStrip}>
            <div style={s.countItem}>
              <div>
                <div style={s.countNum}>{mentors.length}</div>
                <div style={s.countLabel}>Mentors</div>
              </div>
            </div>
            <div style={s.countDivider} />
            <div style={s.countItem}>
              <div>
                <div style={s.countNum}>{totalIndustries}</div>
                <div style={s.countLabel}>Industries</div>
              </div>
            </div>
            <div style={s.countDivider} />
            <div style={s.countItem}>
              <div>
                <div style={s.countNum}>{avgRating.toFixed(1)}</div>
                <div style={s.countLabel}>Avg. Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div style={s.divider} />

        {/* ── Grid ── */}
        <div style={s.grid}>
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default MentorsPage;