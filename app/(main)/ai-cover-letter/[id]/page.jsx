import Link from "next/link";
import { getCoverLetter } from "@/actions/cover-letter";
import CoverLetterPreview from "../_components/cover-letter-preview";

const gold = "#C9A84C";
const black = "#0A0A0A";
const surface = "#111111";
const border = "#2A2A2A";
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
  headingAt: {
    fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
    fontWeight: 400,
    color: textSecondary,
    fontFamily: "'Georgia', serif",
    marginBottom: "6px",
    letterSpacing: "0.01em",
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    fontFamily: "'Georgia', serif",
    lineHeight: 1.1,
    marginBottom: "6px",
  },
  headingAccent: {
    color: gold,
  },
  headingCompany: {
    display: "block",
    fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
    fontWeight: 400,
    color: textSecondary,
    fontFamily: "'Georgia', serif",
    marginTop: "4px",
    letterSpacing: "-0.01em",
  },

  // ── Meta strip ──
  metaStrip: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: surface,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    padding: "7px 16px",
    marginTop: "18px",
  },
  metaDot: {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: gold,
    flexShrink: 0,
  },
  metaText: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: textMuted,
    fontWeight: 600,
  },

  // ── Divider ──
  divider: {
    height: "0.5px",
    background: `linear-gradient(to right, ${borderGold}, transparent)`,
    marginBottom: "48px",
  },
};

export default async function EditCoverLetterPage({ params }) {
  const { id } = await params;
  const coverLetter = await getCoverLetter(id);

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
            <span style={s.eyebrowText}>Cover Letter Preview</span>
          </div>

          <h1 style={s.heading}>
            <span style={s.headingAccent}>{coverLetter?.jobTitle}</span>
            <span style={s.headingCompany}>
              at {coverLetter?.companyName}
            </span>
          </h1>

          <div style={s.metaStrip}>
            <div style={s.metaDot} />
            <span style={s.metaText}>AI Generated · Ready to Export</span>
          </div>
        </div>

        <div style={s.divider} />

        {/* ── Preview ── */}
        <CoverLetterPreview content={coverLetter?.content} />

      </div>
    </div>
  );
}