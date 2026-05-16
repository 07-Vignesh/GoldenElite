import React from "react";
import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";

const gold = "#C9A84C";
const black = "#0A0A0A";
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
  headerLeft: {},
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
    maxWidth: "440px",
  },

  // ── Divider ──
  divider: {
    height: "0.5px",
    background: `linear-gradient(to right, ${borderGold}, transparent)`,
    marginBottom: "48px",
  },

  // ── Content stack ──
  stack: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};

const InterviewPage = async () => {
  const assessments = await getAssessments();

  return (
    <div style={s.page}>
      <div style={s.container}>

        {/* ── Header ── */}
        <div style={s.header}>
          <div style={s.headerLeft}>
            <div style={s.eyebrow}>
              <div style={s.eyebrowLine} />
              <span style={s.eyebrowText}>Career Tools</span>
            </div>

            <h1 style={s.heading}>
              Interview{" "}
              <span style={s.headingAccent}>Preparation</span>
            </h1>

            <p style={s.subheading}>
              Track your progress, review past assessments, and sharpen
              your skills with AI-powered mock interviews.
            </p>
          </div>
        </div>

        <div style={s.divider} />

        {/* ── Content ── */}
        <div style={s.stack}>
          <StatsCards assessments={assessments} />
          <PerformanceChart assessments={assessments} />
          <QuizList assessments={assessments} />
        </div>

      </div>
    </div>
  );
};

export default InterviewPage;