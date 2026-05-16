"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BriefcaseIcon,
  LineChart,
  TrendingUp,
  TrendingDown,
  Brain,
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import "./dashboard-view.css";

/* ── helpers (unchanged logic) ── */
const getDemandLevelColor = (level) => {
  switch (level.toLowerCase()) {
    case "high":   return "dv-demand-high";
    case "medium": return "dv-demand-medium";
    case "low":    return "dv-demand-low";
    default:       return "dv-demand-default";
  }
};

const getOutlookClass = (outlook) => {
  switch (outlook.toLowerCase()) {
    case "positive": return "dv-color-positive";
    case "neutral":  return "dv-color-neutral";
    case "negative": return "dv-color-negative";
    default:         return "dv-color-default";
  }
};

const getOutlookIcon = (outlook) => {
  switch (outlook.toLowerCase()) {
    case "positive": return TrendingUp;
    case "negative": return TrendingDown;
    default:         return LineChart;
  }
};

/* ── Custom tooltip ── */
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const colors = { "Min Salary (K)": "#6b7280", "Median Salary (K)": "#c9a84c", "Max Salary (K)": "#faf7f2" };
  return (
    <div className="dv-tooltip">
      <p className="dv-tooltip-label">{label}</p>
      {payload.map((item) => (
        <div key={item.name} className="dv-tooltip-row">
          <span className="dv-tooltip-dot" style={{ background: colors[item.name] || "#c9a84c" }} />
          <span>{item.name}: <strong style={{ color: "var(--hp-cream)" }}>${item.value}K</strong></span>
        </div>
      ))}
    </div>
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const DashboardView = ({ insights }) => {
  // Transform salary data for chart (unchanged)
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min / 1000,
    max: range.max / 1000,
    median: range.median / 1000,
  }));

  const OutlookIcon = getOutlookIcon(insights.marketOutlook);
  const outlookClass = getOutlookClass(insights.marketOutlook);

  const lastUpdatedDate    = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
  const nextUpdateDistance = formatDistanceToNow(new Date(insights.nextUpdate), { addSuffix: true });

  return (
    <div className="dv-root">

      {/* ── Header ── */}
      <div className="dv-header">
        <span className="dv-badge">Last updated: {lastUpdatedDate}</span>
      </div>

      {/* ── KPI Cards ── */}
      <div className="dv-overview-grid">

        {/* Market Outlook */}
        <div className="dv-kpi">
          <div className="dv-kpi-header">
            <span className="dv-kpi-label">Market Outlook</span>
            <div className="dv-kpi-icon">
              <OutlookIcon size={14} className={outlookClass} />
            </div>
          </div>
          <div className={`dv-kpi-value ${outlookClass}`}>
            {insights.marketOutlook}
          </div>
          <span className="dv-kpi-sub">Next update {nextUpdateDistance}</span>
        </div>

        {/* Industry Growth */}
        <div className="dv-kpi">
          <div className="dv-kpi-header">
            <span className="dv-kpi-label">Industry Growth</span>
            <div className="dv-kpi-icon">
              <TrendingUp size={14} style={{ color: "var(--hp-gold)" }} />
            </div>
          </div>
          <div className="dv-kpi-value">
            {insights.growthRate.toFixed(1)}%
          </div>
          <div className="dv-progress-track">
            <div
              className="dv-progress-fill"
              style={{ width: `${Math.min(insights.growthRate, 100)}%` }}
            />
          </div>
        </div>

        {/* Demand Level */}
        <div className="dv-kpi">
          <div className="dv-kpi-header">
            <span className="dv-kpi-label">Demand Level</span>
            <div className="dv-kpi-icon">
              <BriefcaseIcon size={14} style={{ color: "var(--hp-gold)" }} />
            </div>
          </div>
          <div className="dv-kpi-value">{insights.demandLevel}</div>
          <div className={`dv-demand-dot ${getDemandLevelColor(insights.demandLevel)}`} />
        </div>

        {/* Top Skills */}
        <div className="dv-kpi">
          <div className="dv-kpi-header">
            <span className="dv-kpi-label">Top Skills</span>
            <div className="dv-kpi-icon">
              <Brain size={14} style={{ color: "var(--hp-gold)" }} />
            </div>
          </div>
          <div className="dv-skills-wrap">
            {insights.topSkills.map((skill) => (
              <span key={skill} className="dv-chip">{skill}</span>
            ))}
          </div>
        </div>

      </div>

      {/* ── Salary Chart ── */}
      <div className="dv-chart-card">
        <div className="dv-card-header">
          <p className="dv-card-title">Salary Ranges by Role</p>
          <p className="dv-card-desc">
            Displaying minimum, median, and maximum salaries (in thousands)
          </p>
        </div>
        <div className="dv-card-body">
          <div style={{ height: 380 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData} barGap={4}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(201,168,76,0.1)"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "rgba(245,240,232,0.4)", fontSize: 11, fontFamily: "DM Sans" }}
                  axisLine={{ stroke: "rgba(201,168,76,0.15)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "rgba(245,240,232,0.4)", fontSize: 11, fontFamily: "DM Sans" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `$${v}K`}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(201,168,76,0.04)" }} />
                <Bar dataKey="min"    fill="#374151" name="Min Salary (K)"    radius={[2,2,0,0]} />
                <Bar dataKey="median" fill="#c9a84c" name="Median Salary (K)" radius={[2,2,0,0]} />
                <Bar dataKey="max"    fill="#faf7f2" name="Max Salary (K)"    radius={[2,2,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ── Trends + Recommended Skills ── */}
      <div className="dv-bottom-grid">

        {/* Key Trends */}
        <div className="dv-panel">
          <div className="dv-card-header" style={{ padding: 0, marginBottom: 20 }}>
            <p className="dv-card-title">Key Industry Trends</p>
            <p className="dv-card-desc">Current trends shaping the industry</p>
          </div>
          <ul className="dv-trend-list">
            {insights.keyTrends.map((trend, index) => (
              <li key={index} className="dv-trend-item">
                <span className="dv-trend-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="dv-trend-text">{trend}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Skills */}
        <div className="dv-panel">
          <div className="dv-card-header" style={{ padding: 0, marginBottom: 20 }}>
            <p className="dv-card-title">Recommended Skills</p>
            <p className="dv-card-desc">Skills to consider developing</p>
          </div>
          <div className="dv-rec-wrap">
            {insights.recommendedSkills.map((skill) => (
              <span key={skill} className="dv-chip-outline">{skill}</span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default DashboardView;