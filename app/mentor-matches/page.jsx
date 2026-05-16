"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { matchMentors } from "@/actions/mentor-matching";
import mentors from "@/data/mentors";
import MentorCard from "@/components/ui/mentor-card";

const gold = "#C9A84C";
const goldLight = "#E8C96A";
const black = "#0A0A0A";
const surface = "#111111";
const surfaceAlt = "#181818";
const surfaceHover = "#1E1E1E";
const border = "#2A2A2A";
const borderGold = "#3A2E10";
const textMuted = "#666666";
const textSecondary = "#999999";

const styles = {
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

  // Loading
  loaderWrap: {
    position: "fixed",
    inset: 0,
    background: black,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
  },
  loaderBar: {
    width: "200px",
    height: "2px",
    background: "#1A1A1A",
    borderRadius: "1px",
    overflow: "hidden",
    position: "relative",
  },
  loaderBarFill: {
    position: "absolute",
    top: 0,
    left: "-50%",
    width: "50%",
    height: "100%",
    background: gold,
    animation: "slide 1.2s ease-in-out infinite",
  },
  loaderText: {
    fontSize: "11px",
    letterSpacing: "0.2em",
    color: textMuted,
    textTransform: "uppercase",
  },

  // Eyebrow
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "32px",
  },
  eyebrowLine: {
    width: "32px",
    height: "1px",
    background: gold,
  },
  eyebrowText: {
    fontSize: "11px",
    letterSpacing: "0.2em",
    color: gold,
    textTransform: "uppercase",
    fontWeight: 600,
  },

  // Summary card
  summaryCard: {
    background: surface,
    border: `0.5px solid ${border}`,
    borderLeft: `2px solid ${gold}`,
    borderRadius: "4px",
    padding: "28px 32px",
    marginBottom: "56px",
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "24px",
    alignItems: "start",
  },
  summaryLabel: {
    fontSize: "11px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: gold,
    marginBottom: "10px",
    fontWeight: 600,
  },
  summaryText: {
    fontSize: "15px",
    color: "#CCCCCC",
    lineHeight: 1.7,
    fontFamily: "'Georgia', serif",
  },
  summaryBadge: {
    background: "#0A0A0A",
    border: `0.5px solid ${borderGold}`,
    borderRadius: "2px",
    padding: "8px 16px",
    textAlign: "center",
    whiteSpace: "nowrap",
  },
  summaryBadgeNum: {
    fontSize: "24px",
    fontWeight: 700,
    color: gold,
    display: "block",
    lineHeight: 1.2,
    fontFamily: "'Georgia', serif",
  },
  summaryBadgeLabel: {
    fontSize: "10px",
    letterSpacing: "0.15em",
    color: textMuted,
    textTransform: "uppercase",
  },

  // Section header
  sectionHeader: {
    marginBottom: "32px",
  },
  sectionTitle: {
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    fontFamily: "'Georgia', serif",
    marginBottom: "6px",
  },
  sectionSub: {
    fontSize: "13px",
    color: textSecondary,
    letterSpacing: "0.02em",
  },

  // Grid
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "16px",
  },

  // Match card wrapper
  matchWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },

  // Score badge on card
  scoreStrip: {
    background: surface,
    border: `0.5px solid ${border}`,
    borderTop: "none",
    borderRadius: "0 0 4px 4px",
    padding: "0 24px 24px",
  },
  scoreDivider: {
    height: "0.5px",
    background: border,
    margin: "0 0 20px",
  },
  scoreRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  scoreLabel: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: textMuted,
    fontWeight: 600,
  },
  scoreValue: {
    fontSize: "22px",
    fontWeight: 700,
    color: gold,
    fontFamily: "'Georgia', serif",
  },
  progressTrack: {
    height: "3px",
    background: "#1A1A1A",
    borderRadius: "1.5px",
    marginBottom: "20px",
    overflow: "hidden",
  },
  reasonLabel: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: textMuted,
    fontWeight: 600,
    marginBottom: "8px",
  },
  reasonText: {
    fontSize: "13px",
    color: "#AAAAAA",
    lineHeight: 1.65,
    marginBottom: "20px",
  },
  suggestionsLabel: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: gold,
    fontWeight: 600,
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  suggestionsLine: {
    flex: 1,
    height: "0.5px",
    background: borderGold,
  },
  suggestionsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },
  suggestionItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    fontSize: "13px",
    color: "#BBBBBB",
    lineHeight: 1.5,
  },
  suggestionBullet: {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: gold,
    flexShrink: 0,
    marginTop: "6px",
  },
};

function GoldLoader() {
  return (
    <div style={styles.loaderWrap}>
      <style>{`
        @keyframes slide {
          0% { left: -50%; }
          100% { left: 100%; }
        }
      `}</style>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
        <div style={{ width: "24px", height: "1px", background: gold }} />
        <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: gold, textTransform: "uppercase", fontWeight: 600 }}>
          Matching
        </span>
        <div style={{ width: "24px", height: "1px", background: gold }} />
      </div>
      <div style={styles.loaderBar}>
        <div style={styles.loaderBarFill} />
      </div>
      <span style={styles.loaderText}>Finding your ideal mentors</span>
    </div>
  );
}

function ScoreBar({ score }) {
  return (
    <div style={styles.progressTrack}>
      <div
        style={{
          height: "100%",
          width: `${score}%`,
          background: `linear-gradient(to right, ${gold}, ${goldLight})`,
          borderRadius: "1.5px",
          transition: "width 1s ease",
        }}
      />
    </div>
  );
}

export default function MentorMatchesPage() {
  return (
    <Suspense fallback={<GoldLoader />}>
      <MentorMatchesContent />
    </Suspense>
  );
}

function MentorMatchesContent() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  const studentData = JSON.parse(searchParams.get("data"));

  useEffect(() => {
    async function fetchMatches() {
      const res = await matchMentors(studentData);
      setResult(res);
      setLoading(false);
    }
    fetchMatches();
  }, []);

  if (loading) return <GoldLoader />;

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes slide {
          0% { left: -50%; }
          100% { left: 100%; }
        }
        ::placeholder { color: #444; }
        * { box-sizing: border-box; }
      `}</style>

      <div style={styles.container}>

        {/* Eyebrow */}
        <div style={styles.eyebrow}>
          <div style={styles.eyebrowLine} />
          <span style={styles.eyebrowText}>Mentor Matches</span>
        </div>

        {/* Student Summary */}
        <div style={styles.summaryCard}>
          <div>
            <div style={styles.summaryLabel}>Student Profile Summary</div>
            <p style={styles.summaryText}>{result.studentSummary}</p>
          </div>
          <div style={styles.summaryBadge}>
            <span style={styles.summaryBadgeNum}>{result.matches.length}</span>
            <span style={styles.summaryBadgeLabel}>Matches</span>
          </div>
        </div>

        {/* Recommended Mentors */}
        <div style={styles.sectionHeader}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <div style={{ width: "24px", height: "1px", background: gold }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: gold, textTransform: "uppercase", fontWeight: 600 }}>
              Recommended
            </span>
          </div>
          <h2 style={styles.sectionTitle}>Your Mentor Matches</h2>
          <p style={styles.sectionSub}>Ranked by compatibility with your profile and goals</p>
        </div>

        <div style={styles.grid}>
          {result.matches.map((match, idx) => {
            const mentor = mentors.find((m) => m.id === match.mentorId);
            return (
              <div key={mentor.id} style={styles.matchWrap}>
                {/* Existing MentorCard — unchanged */}
                <MentorCard mentor={mentor} />

                {/* Gold details strip */}
                <div style={styles.scoreStrip}>
                  <div style={styles.scoreDivider} />

                  {/* Match Score */}
                  <div style={styles.scoreRow}>
                    <span style={styles.scoreLabel}>Match Score</span>
                    <span style={styles.scoreValue}>{match.matchScore}%</span>
                  </div>
                  <ScoreBar score={match.matchScore} />

                  {/* Why this mentor */}
                  <div style={styles.reasonLabel}>Why this mentor</div>
                  <p style={styles.reasonText}>{match.reason}</p>

                  {/* Career Suggestions */}
                  <div style={styles.suggestionsLabel}>
                    Career Suggestions
                    <div style={styles.suggestionsLine} />
                  </div>
                  <ul style={styles.suggestionsList}>
                    {match.careerSuggestions.map((tip, i) => (
                      <li key={i} style={styles.suggestionItem}>
                        <div style={styles.suggestionBullet} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}