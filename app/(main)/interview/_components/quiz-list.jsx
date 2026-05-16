"use client";

import { useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuizResult from "./quiz-result";
import "./quiz-list.css";

/* ── Score colour helper ── */
const getScoreClass = (score) => {
  if (score >= 75) return "ql-score-high";
  if (score >= 50) return "ql-score-mid";
  return "ql-score-low";
};

export default function QuizList({ assessments }) {
  const router = useRouter();
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <>
      {/* ── Outer card ── */}
      <div className="ql-card">

        {/* Header */}
        <div className="ql-header">
          <div className="ql-header-text">
            <span className="ql-eyebrow">History</span>
            <h2 className="ql-title">Recent Quizzes</h2>
            <p className="ql-desc">Review your past quiz performance</p>
          </div>
          <button className="ql-btn" onClick={() => router.push("/interview/mock")}>
            Start New Quiz
          </button>
        </div>

        {/* Body */}
        <div className="ql-body">
          {!assessments?.length ? (
            <div className="ql-empty">
              <div className="ql-empty-line" />
              No quizzes taken yet
              <div className="ql-empty-line" />
            </div>
          ) : (
            assessments.map((assessment, i) => (
              <div
                key={assessment.id}
                className="ql-row"
                onClick={() => setSelectedQuiz(assessment)}
              >
                {/* Row top */}
                <div className="ql-row-top">
                  <span className="ql-row-title">
                    Quiz {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="ql-row-date">
                    {format(new Date(assessment.createdAt), "MMM dd, yyyy · HH:mm")}
                  </span>
                </div>

                {/* Score badge */}
                <div className="ql-row-meta">
                  <span className={`ql-score-badge ${getScoreClass(assessment.quizScore)}`}>
                    <span className="ql-score-dot" />
                    {assessment.quizScore.toFixed(1)}%
                  </span>
                </div>

                {/* Improvement tip */}
                {assessment.improvementTip && (
                  <p className="ql-tip">{assessment.improvementTip}</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Detail dialog — unchanged props ── */}
      <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
        <DialogContent className="ql-dialog-content">
          <DialogHeader>
            <DialogTitle className="ql-dialog-title">
              {selectedQuiz
                ? `Quiz ${String(assessments.indexOf(selectedQuiz) + 1).padStart(2, "0")}`
                : ""}
            </DialogTitle>
          </DialogHeader>
          <QuizResult
            result={selectedQuiz}
            hideStartNew
            onStartNew={() => router.push("/interview/mock")}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}