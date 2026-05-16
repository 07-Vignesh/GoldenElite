"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./performance-chart.css";

/* ── Custom tooltip ── */
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="pc-tooltip">
      <p className="pc-tooltip-score">{payload[0].value}%</p>
      <p className="pc-tooltip-date">{payload[0].payload.date}</p>
    </div>
  );
};

/* ── Derived stats (pure, no side-effects) ── */
const getStats = (data) => {
  if (!data.length) return { latest: "—", best: "—", avg: "—" };
  const scores = data.map((d) => d.score);
  return {
    latest: `${scores[scores.length - 1]}%`,
    best: `${Math.max(...scores)}%`,
    avg: `${Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)}%`,
  };
};

export default function PerformanceChart({ assessments }) {
  const [chartData, setChartData] = useState([]);

  // Unchanged logic
  useEffect(() => {
    if (assessments) {
      const formattedData = assessments.map((assessment) => ({
        date: format(new Date(assessment.createdAt), "MMM dd"),
        score: assessment.quizScore,
      }));
      setChartData(formattedData);
    }
  }, [assessments]);

  const stats = getStats(chartData);

  return (
    <div className="pc-card">
      {/* Header */}
      <div className="pc-header">
        <span className="pc-eyebrow">Analytics</span>
        <h2 className="pc-title">Performance Trend</h2>
        <p className="pc-desc">Your quiz scores over time</p>
      </div>

      <div className="pc-body">
        {/* Stat pills */}
        <div className="pc-stat-row">
          <div className="pc-stat">
            <span className="pc-stat-value gold">{stats.latest}</span>
            <span className="pc-stat-label">Latest</span>
          </div>
          <div className="pc-stat">
            <span className="pc-stat-value">{stats.best}</span>
            <span className="pc-stat-label">Best</span>
          </div>
          <div className="pc-stat">
            <span className="pc-stat-value">{stats.avg}</span>
            <span className="pc-stat-label">Average</span>
          </div>
        </div>

        {/* Chart or empty state */}
        {chartData.length === 0 ? (
          <div className="pc-empty">
            <div className="pc-empty-line" />
            No assessment data yet
            <div className="pc-empty-line" />
          </div>
        ) : (
          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                <defs>
                  <linearGradient id="scoreGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"   stopColor="#c9a84c" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#e8d5a3" stopOpacity={1} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(201,168,76,0.08)"
                  vertical={false}
                />

                {/* Avg reference line */}
                {chartData.length > 1 && (
                  <ReferenceLine
                    y={Math.round(chartData.reduce((a, b) => a + b.score, 0) / chartData.length)}
                    stroke="rgba(201,168,76,0.25)"
                    strokeDasharray="4 4"
                    strokeWidth={1}
                  />
                )}

                <XAxis
                  dataKey="date"
                  tick={{ fill: "rgba(245,240,232,0.35)", fontSize: 11, fontFamily: "DM Sans" }}
                  axisLine={{ stroke: "rgba(201,168,76,0.12)" }}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: "rgba(245,240,232,0.35)", fontSize: 11, fontFamily: "DM Sans" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />

                <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(201,168,76,0.2)", strokeWidth: 1 }} />

                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="url(#scoreGradient)"
                  strokeWidth={2.5}
                  dot={{ fill: "#c9a84c", strokeWidth: 0, r: 4 }}
                  activeDot={{ fill: "#faf7f2", stroke: "#c9a84c", strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}