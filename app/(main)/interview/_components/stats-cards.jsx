"use client";

import { Brain, Target, Trophy } from "lucide-react";
import "./stats-cards.css";

export default function StatsCards({ assessments }) {
  // Unchanged logic
  const getAverageScore = () => {
    if (!assessments?.length) return 0;
    const total = assessments.reduce((sum, a) => sum + a.quizScore, 0);
    return (total / assessments.length).toFixed(1);
  };

  const getLatestAssessment = () => {
    if (!assessments?.length) return null;
    return assessments[0];
  };

  const getTotalQuestions = () => {
    if (!assessments?.length) return 0;
    return assessments.reduce((sum, a) => sum + a.questions.length, 0);
  };

  const avg    = getAverageScore();
  const latest = getLatestAssessment()?.quizScore.toFixed(1) || 0;
  const total  = getTotalQuestions();

  const cards = [
    {
      label: "Average Score",
      sub: "Across all assessments",
      value: `${avg}%`,
      icon: Trophy,
      accent: true,
    },
    {
      label: "Questions Practiced",
      sub: "Total questions",
      value: total,
      icon: Brain,
      accent: false,
    },
    {
      label: "Latest Score",
      sub: "Most recent quiz",
      value: `${latest}%`,
      icon: Target,
      accent: false,
    },
  ];

  return (
    <div className="sc-grid">
      {cards.map(({ label, sub, value, icon: Icon, accent }, i) => (
        <div key={i} className={`sc-card${accent ? " sc-card--accent" : ""}`}>
          {/* Index watermark */}
          <span className="sc-watermark">0{i + 1}</span>

          <div className="sc-top">
            <span className="sc-label">{label}</span>
            <div className="sc-icon-wrap">
              <Icon size={14} className="sc-icon" />
            </div>
          </div>

          <div className="sc-value">{value}</div>
          <p className="sc-sub">{sub}</p>

          {/* Bottom sweep line */}
          <div className="sc-sweep" />
        </div>
      ))}
    </div>
  );
}