import Link from "next/link";
import CoverLetterGenerator from "../_components/cover-letter-generator";

const gold = "#C9A84C";
const black = "#0A0A0A";
const borderGold = "#3A2E10";
const textSecondary = "#999999";
const textMuted = "#666666";

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
    padding: "100px 24px 80px",
  },

  // ── Back link ──
  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "11px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: textMuted,
    textDecoration: "none",
    fontWeight: 600,
    marginBottom: "40px",
    transition: "color 0.2s",
  },

  // ── Header ──
  header: {
    marginBottom: "48px",
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  eyebrowLine: {
    width: "32px",
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
    fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    fontFamily: "'Georgia', serif",
    lineHeight: 1.1,
    marginBottom: "12px",
  },
  headingAccent: {
    color: gold,
  },
  subheading: {
    fontSize: "15px",
    color: textSecondary,
    lineHeight: 1.7,
    maxWidth: "480px",
  },

  // ── Divider ──
  divider: {
    height: "0.5px",
    background: `linear-gradient(to right, ${borderGold}, transparent)`,
    marginBottom: "48px",
  },
};

export default function NewCoverLetterPage() {
  return (
    <div style={s.page}>
      <div style={s.container}>

        {/* ── Back Link ── */}
        <Link href="/ai-cover-letter" style={s.backLink}>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path
              d="M13 5H1M5 1L1 5l4 4"
              stroke={textMuted}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Cover Letters
        </Link>

        {/* ── Header ── */}
        <div style={s.header}>
          <div style={s.eyebrow}>
            <div style={s.eyebrowLine} />
            <span style={s.eyebrowText}>AI Writing Tool</span>
          </div>

          <h1 style={s.heading}>
            Create Cover{" "}
            <span style={s.headingAccent}>Letter</span>
          </h1>

          <p style={s.subheading}>
            Generate a tailored cover letter for your job application using
            AI — personalized to the role and your background.
          </p>
        </div>

        <div style={s.divider} />

        {/* ── Generator ── */}
        <CoverLetterGenerator />

      </div>
    </div>
  );
}