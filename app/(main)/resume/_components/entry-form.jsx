// app/resume/_components/entry-form.jsx
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, parse } from "date-fns";
import { entrySchema } from "@/app/lib/schema";
import { improveWithAI } from "@/actions/resume";
import { toast } from "sonner";
import useFetch from "@/hooks/use-fetch";

const gold = "#C9A84C";
const goldLight = "#E8C96A";
const black = "#0A0A0A";
const surface = "#111111";
const surfaceAlt = "#181818";
const surfaceHover = "#1E1E1E";
const border = "#2A2A2A";
const borderGold = "#3A2E10";
const textSecondary = "#999999";
const textMuted = "#666666";
const errorRed = "#E05555";

const s = {
  wrap: { display: "flex", flexDirection: "column", gap: "10px" },

  // ── Entry card (existing) ──
  entryCard: {
    background: surface,
    border: `0.5px solid ${border}`,
    borderLeft: `2px solid ${borderGold}`,
    borderRadius: "4px",
    padding: "16px 20px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "16px",
  },
  entryBody: { flex: 1 },
  entryTitle: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#EEEEEE",
    marginBottom: "4px",
    fontFamily: "'Georgia', serif",
  },
  entryOrg: { color: gold },
  entryDates: {
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: textMuted,
    marginBottom: "8px",
    fontWeight: 600,
  },
  entryDesc: {
    fontSize: "13px",
    color: textSecondary,
    lineHeight: 1.65,
    whiteSpace: "pre-wrap",
  },
  deleteBtn: {
    background: "transparent",
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    width: "28px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: textMuted,
    flexShrink: 0,
    transition: "border-color 0.2s, color 0.2s",
    padding: 0,
  },

  // ── Add form card ──
  formCard: {
    background: surface,
    border: `0.5px solid ${border}`,
    borderTop: `2px solid ${gold}`,
    borderRadius: "4px",
    padding: "24px 24px 20px",
  },
  formTitle: {
    fontSize: "11px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: gold,
    fontWeight: 600,
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  formTitleLine: { flex: 1, height: "0.5px", background: borderGold },

  // ── Field ──
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
    marginBottom: "14px",
  },
  fieldWrap: { display: "flex", flexDirection: "column", gap: "5px" },
  fieldLabel: {
    fontSize: "10px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: textMuted,
    fontWeight: 600,
  },
  input: (focused, hasError) => ({
    background: surfaceAlt,
    border: `0.5px solid ${hasError ? errorRed : focused ? gold : border}`,
    borderRadius: "2px",
    padding: "10px 12px",
    color: "#FFFFFF",
    fontSize: "13px",
    fontFamily: "'Arial', sans-serif",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  }),
  textarea: (focused, hasError) => ({
    background: surfaceAlt,
    border: `0.5px solid ${hasError ? errorRed : focused ? gold : border}`,
    borderRadius: "2px",
    padding: "10px 12px",
    color: "#FFFFFF",
    fontSize: "13px",
    fontFamily: "'Arial', sans-serif",
    outline: "none",
    resize: "vertical",
    minHeight: "110px",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  }),
  errorMsg: { fontSize: "11px", color: errorRed, letterSpacing: "0.04em" },

  // ── Checkbox row ──
  checkRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "14px",
  },
  checkLabel: { fontSize: "13px", color: textSecondary, cursor: "pointer" },

  // ── AI improve button ──
  aiBtn: (disabled) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    padding: "8px 16px",
    background: disabled ? "#1A1A1A" : "#0A0A0A",
    border: `0.5px solid ${disabled ? border : borderGold}`,
    borderRadius: "2px",
    color: disabled ? textMuted : gold,
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "border-color 0.2s, color 0.2s",
    marginBottom: "20px",
  }),

  // ── Footer ──
  footer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    paddingTop: "16px",
    borderTop: `0.5px solid ${border}`,
  },
  cancelBtn: {
    padding: "10px 20px",
    background: "transparent",
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    color: textSecondary,
    fontSize: "11px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",
  },
  addBtn: (hover) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 20px",
    background: hover ? goldLight : gold,
    color: "#000",
    border: "none",
    borderRadius: "2px",
    fontSize: "11px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s",
  }),

  // ── Add trigger button ──
  triggerBtn: (hover) => ({
    width: "100%",
    padding: "13px",
    background: "transparent",
    border: `0.5px dashed ${hover ? gold : border}`,
    borderRadius: "4px",
    color: hover ? gold : textMuted,
    fontSize: "11px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "border-color 0.2s, color 0.2s",
    marginTop: "4px",
  }),
};

const formatDisplayDate = (dateString) => {
  if (!dateString) return "";
  const date = parse(dateString, "yyyy-MM", new Date());
  return format(date, "MMM yyyy");
};

function FocusInput({ hasError, type = "text", disabled, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      type={type}
      disabled={disabled}
      style={{ ...s.input(focused, hasError), opacity: disabled ? 0.4 : 1 }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function FocusTextarea({ hasError, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...props}
      style={s.textarea(focused, hasError)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

export function EntryForm({ type, entries, onChange }) {
  const [isAdding, setIsAdding] = useState(false);
  const [addBtnHover, setAddBtnHover] = useState(false);
  const [triggerHover, setTriggerHover] = useState(false);
  const [deleteHover, setDeleteHover] = useState(null);

  const { register, handleSubmit: handleValidation, formState: { errors }, reset, watch, setValue } = useForm({
    resolver: zodResolver(entrySchema),
    defaultValues: {
      title: "", organization: "", startDate: "", endDate: "", description: "", current: false,
    },
  });

  const current = watch("current");
  const description = watch("description");

  const { loading: isImproving, fn: improveWithAIFn, data: improvedContent, error: improveError } = useFetch(improveWithAI);

  useEffect(() => {
    if (improvedContent && !isImproving) {
      setValue("description", improvedContent);
      toast.success("Description improved successfully!");
    }
    if (improveError) toast.error(improveError.message || "Failed to improve description");
  }, [improvedContent, improveError, isImproving, setValue]);

  const handleAdd = handleValidation((data) => {
    onChange([...entries, {
      ...data,
      startDate: formatDisplayDate(data.startDate),
      endDate: data.current ? "" : formatDisplayDate(data.endDate),
    }]);
    reset();
    setIsAdding(false);
  });

  const handleDelete = (index) => onChange(entries.filter((_, i) => i !== index));

  const handleImproveDescription = async () => {
    if (!description) { toast.error("Please enter a description first"); return; }
    await improveWithAIFn({ current: description, type: type.toLowerCase() });
  };

  return (
    <div style={s.wrap}>

      {/* ── Existing entries ── */}
      {entries.map((item, index) => (
        <div key={index} style={s.entryCard}>
          <div style={s.entryBody}>
            <div style={s.entryTitle}>
              {item.title} <span style={s.entryOrg}>@ {item.organization}</span>
            </div>
            <div style={s.entryDates}>
              {item.current ? `${item.startDate} — Present` : `${item.startDate} — ${item.endDate}`}
            </div>
            <div style={s.entryDesc}>{item.description}</div>
          </div>
          <button
            type="button"
            style={{
              ...s.deleteBtn,
              borderColor: deleteHover === index ? errorRed : border,
              color: deleteHover === index ? errorRed : textMuted,
            }}
            onClick={() => handleDelete(index)}
            onMouseEnter={() => setDeleteHover(index)}
            onMouseLeave={() => setDeleteHover(null)}
          >
            <XIcon />
          </button>
        </div>
      ))}

      {/* ── Add form ── */}
      {isAdding && (
        <div style={s.formCard}>
          <div style={s.formTitle}>
            Add {type}
            <div style={s.formTitleLine} />
          </div>

          {/* Title + Organization */}
          <div style={s.grid2}>
            <div style={s.fieldWrap}>
              <label style={s.fieldLabel}>Title / Position</label>
              <FocusInput placeholder="e.g. Software Engineer" {...register("title")} hasError={!!errors.title} />
              {errors.title && <span style={s.errorMsg}>{errors.title.message}</span>}
            </div>
            <div style={s.fieldWrap}>
              <label style={s.fieldLabel}>Organization / Company</label>
              <FocusInput placeholder="e.g. Google" {...register("organization")} hasError={!!errors.organization} />
              {errors.organization && <span style={s.errorMsg}>{errors.organization.message}</span>}
            </div>
          </div>

          {/* Dates */}
          <div style={s.grid2}>
            <div style={s.fieldWrap}>
              <label style={s.fieldLabel}>Start Date</label>
              <FocusInput type="month" {...register("startDate")} hasError={!!errors.startDate} />
              {errors.startDate && <span style={s.errorMsg}>{errors.startDate.message}</span>}
            </div>
            <div style={s.fieldWrap}>
              <label style={s.fieldLabel}>End Date</label>
              <FocusInput type="month" {...register("endDate")} disabled={current} hasError={!!errors.endDate} />
              {errors.endDate && <span style={s.errorMsg}>{errors.endDate.message}</span>}
            </div>
          </div>

          {/* Current checkbox */}
          <div style={s.checkRow}>
            <input
              type="checkbox"
              id="current"
              {...register("current")}
              onChange={(e) => {
                setValue("current", e.target.checked);
                if (e.target.checked) setValue("endDate", "");
              }}
              style={{ accentColor: gold, width: "14px", height: "14px", cursor: "pointer" }}
            />
            <label htmlFor="current" style={s.checkLabel}>
              Current {type}
            </label>
          </div>

          {/* Description */}
          <div style={{ ...s.fieldWrap, marginBottom: "12px" }}>
            <label style={s.fieldLabel}>Description</label>
            <FocusTextarea
              placeholder={`Describe your ${type.toLowerCase()}...`}
              {...register("description")}
              hasError={!!errors.description}
            />
            {errors.description && <span style={s.errorMsg}>{errors.description.message}</span>}
          </div>

          {/* AI Improve */}
          <button
            type="button"
            style={s.aiBtn(isImproving || !description)}
            onClick={handleImproveDescription}
            disabled={isImproving || !description}
          >
            {isImproving ? <><SpinIcon /> Improving...</> : <><SparkleIcon /> Improve with AI</>}
          </button>

          {/* Footer */}
          <div style={s.footer}>
            <button
              type="button"
              style={s.cancelBtn}
              onClick={() => { reset(); setIsAdding(false); }}
            >
              Cancel
            </button>
            <button
              type="button"
              style={s.addBtn(addBtnHover)}
              onClick={handleAdd}
              onMouseEnter={() => setAddBtnHover(true)}
              onMouseLeave={() => setAddBtnHover(false)}
            >
              <PlusIcon />
              Add Entry
            </button>
          </div>
        </div>
      )}

      {/* ── Trigger ── */}
      {!isAdding && (
        <button
          type="button"
          style={s.triggerBtn(triggerHover)}
          onClick={() => setIsAdding(true)}
          onMouseEnter={() => setTriggerHover(true)}
          onMouseLeave={() => setTriggerHover(false)}
        >
          <PlusIcon color={triggerHover ? gold : textMuted} />
          Add {type}
        </button>
      )}
    </div>
  );
}

// ── Inline SVG icons ──
function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function PlusIcon({ color = "#000" }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1v10M1 6h10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M6.5 1l1.2 3.8L11.5 6.5l-3.8 1.2L6.5 11.5 5.3 7.7 1.5 6.5l3.8-1.2z" stroke={gold} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}
function SpinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ animation: "spin 1s linear infinite" }}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <circle cx="6.5" cy="6.5" r="5" stroke={gold} strokeWidth="1.4" strokeDasharray="18 12" strokeLinecap="round" />
    </svg>
  );
}