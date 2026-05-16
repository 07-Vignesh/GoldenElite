"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import MDEditor from "@uiw/react-md-editor";
import { saveResume } from "@/actions/resume";
import { EntryForm } from "./entry-form";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/nextjs";
import { entriesToMarkdown } from "@/app/lib/helper";
import { resumeSchema } from "@/app/lib/schema";
import html2pdf from "html2pdf.js/dist/html2pdf.min.js";

const gold = "#C9A84C";
const goldLight = "#E8C96A";
const black = "#0A0A0A";
const surface = "#111111";
const surfaceAlt = "#181818";
const border = "#2A2A2A";
const borderGold = "#3A2E10";
const textSecondary = "#999999";
const textMuted = "#666666";
const errorRed = "#E05555";

const s = {
  page: {
    background: black,
    color: "#FFFFFF",
    fontFamily: "'Arial', sans-serif",
    minHeight: "100vh",
    padding: "0 0 80px",
  },

  // ── Top bar ──
  topBar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "40px",
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  eyebrowLine: { width: "28px", height: "1px", background: gold },
  eyebrowText: {
    fontSize: "11px",
    letterSpacing: "0.22em",
    color: gold,
    textTransform: "uppercase",
    fontWeight: 600,
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    fontFamily: "'Georgia', serif",
    lineHeight: 1.1,
  },
  headingAccent: { color: gold },
  actions: { display: "flex", gap: "10px", alignItems: "center" },

  // ── Buttons ──
  btnGold: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "11px 22px",
    background: gold,
    color: "#000",
    border: "none",
    borderRadius: "2px",
    fontSize: "11px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s",
  },
  btnGhost: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "11px 22px",
    background: "transparent",
    color: textSecondary,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    fontSize: "11px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",
    transition: "border-color 0.2s, color 0.2s",
  },
  btnLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 0",
    background: "transparent",
    color: gold,
    border: "none",
    fontSize: "12px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",
    marginBottom: "12px",
  },

  // ── Divider ──
  divider: {
    height: "0.5px",
    background: `linear-gradient(to right, ${borderGold}, transparent)`,
    marginBottom: "36px",
  },

  // ── Tabs ──
  tabList: {
    display: "flex",
    gap: "0",
    borderBottom: `0.5px solid ${border}`,
    marginBottom: "32px",
  },
  tab: (active) => ({
    padding: "10px 24px",
    background: "transparent",
    border: "none",
    borderBottom: active ? `2px solid ${gold}` : "2px solid transparent",
    color: active ? gold : textMuted,
    fontSize: "11px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",
    transition: "color 0.2s, border-color 0.2s",
    marginBottom: "-0.5px",
  }),

  // ── Form sections ──
  formSection: {
    background: surface,
    border: `0.5px solid ${border}`,
    borderRadius: "4px",
    padding: "24px 28px",
    marginBottom: "12px",
  },
  sectionLabel: {
    fontSize: "11px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: gold,
    fontWeight: 600,
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  sectionLabelLine: {
    flex: 1,
    height: "0.5px",
    background: borderGold,
  },

  // ── Grid ──
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
  },

  // ── Field ──
  fieldWrap: { display: "flex", flexDirection: "column", gap: "6px" },
  fieldLabel: {
    fontSize: "10px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: textMuted,
    fontWeight: 600,
  },
  input: {
    background: surfaceAlt,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    padding: "11px 13px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  },
  inputError: {
    background: surfaceAlt,
    border: `0.5px solid ${errorRed}`,
    borderRadius: "2px",
    padding: "11px 13px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    background: surfaceAlt,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    padding: "11px 13px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif",
    outline: "none",
    resize: "vertical",
    minHeight: "120px",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  },
  errorMsg: {
    fontSize: "12px",
    color: errorRed,
    letterSpacing: "0.04em",
  },

  // ── Warning banner ──
  warning: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "#1A1200",
    border: `0.5px solid #5A4000`,
    borderRadius: "2px",
    padding: "12px 16px",
    marginBottom: "16px",
  },
  warningIcon: {
    color: gold,
    fontSize: "16px",
    flexShrink: 0,
  },
  warningText: {
    fontSize: "13px",
    color: "#CCAA44",
    lineHeight: 1.5,
  },

  // ── MD Editor wrapper ──
  editorWrap: {
    border: `0.5px solid ${border}`,
    borderRadius: "4px",
    overflow: "hidden",
  },
};

function SectionLabel({ children }) {
  return (
    <div style={s.sectionLabel}>
      {children}
      <div style={s.sectionLabelLine} />
    </div>
  );
}

const FocusInput = ({ hasError, style, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{ ...style, borderColor: focused ? gold : (hasError ? errorRed : border) }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

function FocusTextarea({ ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...props}
      style={{ ...s.textarea, borderColor: focused ? gold : border }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

export default function ResumeBuilder({ initialContent }) {
  const [activeTab, setActiveTab] = useState("edit");
  const [previewContent, setPreviewContent] = useState(initialContent);
  const { user } = useUser();
  const [resumeMode, setResumeMode] = useState("preview");
  const [isGenerating, setIsGenerating] = useState(false);
  const [saveBtnHover, setSaveBtnHover] = useState(false);
  const [dlBtnHover, setDlBtnHover] = useState(false);

  const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      contactInfo: {},
      summary: "",
      skills: "",
      experience: [],
      education: [],
      projects: [],
    },
  });

  const { loading: isSaving, fn: saveResumeFn, data: saveResult, error: saveError } = useFetch(saveResume);

  const formValues = watch();

  useEffect(() => { if (initialContent) setActiveTab("preview"); }, [initialContent]);

  useEffect(() => {
    if (activeTab === "edit") {
      const newContent = getCombinedContent();
      setPreviewContent(newContent ? newContent : initialContent);
    }
  }, [formValues, activeTab]);

  useEffect(() => {
    if (saveResult && !isSaving) toast.success("Resume saved successfully!");
    if (saveError) toast.error(saveError.message || "Failed to save resume");
  }, [saveResult, saveError, isSaving]);

  const getContactMarkdown = () => {
    const { contactInfo } = formValues;
    const parts = [];
    if (contactInfo.email) parts.push(`📧 ${contactInfo.email}`);
    if (contactInfo.mobile) parts.push(`📱 ${contactInfo.mobile}`);
    if (contactInfo.linkedin) parts.push(`💼 [LinkedIn](${contactInfo.linkedin})`);
    if (contactInfo.github) parts.push(`🌐 [GitHub](${contactInfo.github})`);
    return parts.length > 0
      ? `## <div align="center">${user.fullName}</div>\n\n<div align="center">\n\n${parts.join(" | ")}\n\n</div>`
      : "";
  };

  const getCombinedContent = () => {
    const { summary, skills, experience, education, projects } = formValues;
    return [
      getContactMarkdown(),
      summary && `## Professional Summary\n\n${summary}`,
      skills && `## Skills\n\n${skills}`,
      entriesToMarkdown(experience, "Work Experience"),
      entriesToMarkdown(education, "Education"),
      entriesToMarkdown(projects, "Projects"),
    ].filter(Boolean).join("\n\n");
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const element = document.getElementById("resume-pdf");
      const opt = {
        margin: [15, 15],
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("PDF generation error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const formattedContent = previewContent.replace(/\n/g, "\n").replace(/\n\s*\n/g, "\n\n").trim();
      await saveResumeFn(previewContent);
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  return (
    <div data-color-mode="dark" style={s.page}>

      {/* ── Top bar ── */}
      <div style={s.topBar}>
        <div>
          <div style={s.eyebrow}>
            <div style={s.eyebrowLine} />
            <span style={s.eyebrowText}>AI Resume Tool</span>
          </div>
          <h1 style={s.heading}>
            Resume <span style={s.headingAccent}>Builder</span>
          </h1>
        </div>

        <div style={s.actions}>
          <button
            style={{ ...s.btnGhost, borderColor: dlBtnHover ? gold : border, color: dlBtnHover ? gold : textSecondary }}
            onClick={generatePDF}
            disabled={isGenerating}
            onMouseEnter={() => setDlBtnHover(true)}
            onMouseLeave={() => setDlBtnHover(false)}
          >
            {isGenerating ? (
              <><SpinIcon /> Generating...</>
            ) : (
              <><DownloadIcon /> Download PDF</>
            )}
          </button>

          <button
            style={{ ...s.btnGold, background: saveBtnHover ? goldLight : gold }}
            onClick={handleSubmit(onSubmit)}
            disabled={isSaving}
            onMouseEnter={() => setSaveBtnHover(true)}
            onMouseLeave={() => setSaveBtnHover(false)}
          >
            {isSaving ? (
              <><SpinIcon color="#000" /> Saving...</>
            ) : (
              <><SaveIcon /> Save</>
            )}
          </button>
        </div>
      </div>

      <div style={s.divider} />

      {/* ── Tabs ── */}
      <div style={s.tabList}>
        <button style={s.tab(activeTab === "edit")} onClick={() => setActiveTab("edit")}>
          Form Editor
        </button>
        <button style={s.tab(activeTab === "preview")} onClick={() => setActiveTab("preview")}>
          Markdown Preview
        </button>
      </div>

      {/* ── Edit tab ── */}
      {activeTab === "edit" && (
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Contact */}
          <div style={s.formSection}>
            <SectionLabel>Contact Information</SectionLabel>
            <div style={s.grid2}>
              {[
                { name: "contactInfo.email", label: "Email", type: "email", placeholder: "your@email.com", err: errors.contactInfo?.email },
                { name: "contactInfo.mobile", label: "Mobile Number", type: "tel", placeholder: "+1 234 567 8900", err: errors.contactInfo?.mobile },
                { name: "contactInfo.linkedin", label: "LinkedIn URL", type: "url", placeholder: "https://linkedin.com/in/…", err: errors.contactInfo?.linkedin },
                { name: "contactInfo.github", label: "GitHub Profile", type: "url", placeholder: "https://github.com/…", err: errors.contactInfo?.github },
              ].map(({ name, label, type, placeholder, err }) => (
                <div key={name} style={s.fieldWrap}>
                  <label style={s.fieldLabel}>{label}</label>
                  <FocusInput
                    {...register(name)}
                    type={type}
                    placeholder={placeholder}
                    hasError={!!err}
                    style={err ? s.inputError : s.input}
                  />
                  {err && <span style={s.errorMsg}>{err.message}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div style={s.formSection}>
            <SectionLabel>Professional Summary</SectionLabel>
            <Controller
              name="summary"
              control={control}
              render={({ field }) => (
                <FocusTextarea {...field} placeholder="Write a compelling professional summary..." />
              )}
            />
            {errors.summary && <span style={{ ...s.errorMsg, marginTop: "6px", display: "block" }}>{errors.summary.message}</span>}
          </div>

          {/* Skills */}
          <div style={s.formSection}>
            <SectionLabel>Skills</SectionLabel>
            <Controller
              name="skills"
              control={control}
              render={({ field }) => (
                <FocusTextarea {...field} placeholder="List your key skills..." />
              )}
            />
            {errors.skills && <span style={{ ...s.errorMsg, marginTop: "6px", display: "block" }}>{errors.skills.message}</span>}
          </div>

          {/* Experience */}
          <div style={s.formSection}>
            <SectionLabel>Work Experience</SectionLabel>
            <Controller
              name="experience"
              control={control}
              render={({ field }) => (
                <EntryForm type="Experience" entries={field.value} onChange={field.onChange} />
              )}
            />
            {errors.experience && <span style={{ ...s.errorMsg, marginTop: "6px", display: "block" }}>{errors.experience.message}</span>}
          </div>

          {/* Education */}
          <div style={s.formSection}>
            <SectionLabel>Education</SectionLabel>
            <Controller
              name="education"
              control={control}
              render={({ field }) => (
                <EntryForm type="Education" entries={field.value} onChange={field.onChange} />
              )}
            />
            {errors.education && <span style={{ ...s.errorMsg, marginTop: "6px", display: "block" }}>{errors.education.message}</span>}
          </div>

          {/* Projects */}
          <div style={s.formSection}>
            <SectionLabel>Projects</SectionLabel>
            <Controller
              name="projects"
              control={control}
              render={({ field }) => (
                <EntryForm type="Project" entries={field.value} onChange={field.onChange} />
              )}
            />
            {errors.projects && <span style={{ ...s.errorMsg, marginTop: "6px", display: "block" }}>{errors.projects.message}</span>}
          </div>
        </form>
      )}

      {/* ── Preview tab ── */}
      {activeTab === "preview" && (
        <div>
          <button
            style={s.btnLink}
            onClick={() => setResumeMode(resumeMode === "preview" ? "edit" : "preview")}
          >
            {resumeMode === "preview" ? (
              <><EditIcon /> Edit Markdown</>
            ) : (
              <><MonitorIcon /> Show Preview</>
            )}
          </button>

          {resumeMode !== "preview" && (
            <div style={s.warning}>
              <span style={s.warningIcon}>⚠</span>
              <span style={s.warningText}>
                You will lose edited markdown if you update the form data.
              </span>
            </div>
          )}

          <div style={s.editorWrap}>
            <MDEditor
              value={previewContent}
              onChange={setPreviewContent}
              height={800}
              preview={resumeMode}
            />
          </div>

          <div style={{ display: "none" }}>
            <div id="resume-pdf">
              <MDEditor.Markdown
                source={previewContent}
                style={{ background: "white", color: "black" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Inline SVG icons (no lucide dependency) ──
function SaveIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M11 1H2a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3l-2-2z" stroke="#000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 1v4H4V1M4 7h6" stroke="#000" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1v8M4 6l3 3 3-3M1 10v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SpinIcon({ color = "currentColor" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ animation: "spin 1s linear infinite" }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="7" cy="7" r="5.5" stroke={color} strokeWidth="1.5" strokeDasharray="20 15" strokeLinecap="round" />
    </svg>
  );
}
function EditIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M9 2l2 2-7 7H2v-2L9 2z" stroke={gold} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MonitorIcon() {
  return (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
      <rect x="1" y="1" width="12" height="8" rx="1" stroke={gold} strokeWidth="1.3" />
      <path d="M4 12h6M7 9v3" stroke={gold} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}