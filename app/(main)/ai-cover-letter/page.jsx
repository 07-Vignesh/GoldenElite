import { getCoverLetters } from "@/actions/cover-letter";
import Link from "next/link";
import CoverLetterList from "./_components/cover-letter-list";

const gold = "#C9A84C";
const goldLight = "#E8C96A";
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
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "100px 24px 80px",
  },

  // ── Header ──
  header: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: "56px",
    gap: "24px",
    flexWrap: "wrap",
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
    marginBottom: "10px",
  },
  headingAccent: {
    color: gold,
  },
  subheading: {
    fontSize: "14px",
    color: textSecondary,
    lineHeight: 1.7,
    maxWidth: "400px",
  },

  // ── CTA Button ──
  createBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "9px",
    padding: "13px 28px",
    background: gold,
    color: "#000000",
    border: "none",
    borderRadius: "2px",
    fontSize: "11px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    flexShrink: 0,
    alignSelf: "flex-start",
    transition: "background 0.2s, transform 0.1s",
  },

  // ── Divider ──
  divider: {
    height: "0.5px",
    background: `linear-gradient(to right, ${borderGold}, transparent)`,
    marginBottom: "48px",
  },

  // ── Empty state ──
  empty: {
    textAlign: "center",
    padding: "80px 24px",
    background: surface,
    border: `0.5px solid ${border}`,
    borderRadius: "4px",
  },
  emptyIcon: {
    width: "48px",
    height: "48px",
    background: "#0A0A0A",
    border: `0.5px solid ${borderGold}`,
    borderRadius: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    fontSize: "20px",
  },
  emptyTitle: {
    fontSize: "16px",
    fontWeight: 600,
    fontFamily: "'Georgia', serif",
    marginBottom: "8px",
    color: "#EEEEEE",
  },
  emptyText: {
    fontSize: "13px",
    color: textMuted,
    marginBottom: "28px",
    lineHeight: 1.6,
  },
};

export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div style={s.page}>
      <div style={s.container}>

        {/* ── Header ── */}
        <div style={s.header}>
          <div>
            <div style={s.eyebrow}>
              <div style={s.eyebrowLine} />
              <span style={s.eyebrowText}>AI Writing Tool</span>
            </div>

            <h1 style={s.heading}>
              My Cover{" "}
              <span style={s.headingAccent}>Letters</span>
            </h1>

            <p style={s.subheading}>
              Create and manage AI-crafted cover letters tailored to each
              role you apply for.
            </p>
          </div>

          <CreateButton />
        </div>

        <div style={s.divider} />

        {/* ── List ── */}
        {coverLetters?.length === 0 ? (
          <div style={s.empty}>
            <div style={s.emptyIcon}>✦</div>
            <div style={s.emptyTitle}>No cover letters yet</div>
            <p style={s.emptyText}>
              Create your first AI-powered cover letter to get started.
            </p>
            <CreateButton />
          </div>
        ) : (
          <CoverLetterList coverLetters={coverLetters} />
        )}

      </div>
    </div>
  );
}

function CreateButton() {
  return (
    <Link href="/ai-cover-letter/new" style={s.createBtn}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 1v10M1 6h10"
          stroke="#000"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      Create New
    </Link>
  );
}