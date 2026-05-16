"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const gold = "#C9A84C";
const goldLight = "#E8C96A";
const goldDark = "#A07830";
const black = "#0A0A0A";
const surface = "#111111";
const surfaceAlt = "#181818";
const border = "#2A2A2A";
const borderGold = "#3A2E10";
const textMuted = "#666666";
const textSecondary = "#999999";

const styles = {
  page: {
    minHeight: "100vh",
    background: black,
    color: "#FFFFFF",
    fontFamily: "'Georgia', 'Times New Roman', serif",
  },
  container: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "120px 24px 80px",
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "20px",
  },
  eyebrowLine: {
    width: "40px",
    height: "1px",
    background: gold,
  },
  eyebrowText: {
    fontSize: "11px",
    letterSpacing: "0.2em",
    color: gold,
    textTransform: "uppercase",
    fontFamily: "'Arial', sans-serif",
    fontWeight: 500,
  },
  heading: {
    fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "12px",
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
  },
  subheading: {
    textAlign: "center",
    color: textSecondary,
    fontSize: "15px",
    marginBottom: "56px",
    fontFamily: "'Arial', sans-serif",
    fontWeight: 400,
    letterSpacing: "0.01em",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },
  section: {
    background: surface,
    border: `0.5px solid ${border}`,
    borderRadius: "4px",
    padding: "28px 32px",
    marginBottom: "12px",
    position: "relative",
  },
  sectionNumber: {
    position: "absolute",
    top: "28px",
    right: "32px",
    fontSize: "11px",
    letterSpacing: "0.15em",
    color: gold,
    fontFamily: "'Arial', sans-serif",
    fontWeight: 600,
  },
  sectionTitle: {
    fontSize: "13px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: gold,
    marginBottom: "20px",
    fontFamily: "'Arial', sans-serif",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  sectionTitleLine: {
    flex: 1,
    height: "0.5px",
    background: borderGold,
    maxWidth: "60px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  fieldRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },
  label: {
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: textMuted,
    marginBottom: "6px",
    fontFamily: "'Arial', sans-serif",
    fontWeight: 500,
  },
  inputWrap: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    background: surfaceAlt,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    padding: "12px 14px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    background: surfaceAlt,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    padding: "12px 14px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif",
    outline: "none",
    resize: "vertical",
    minHeight: "90px",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  },
  select: {
    background: surfaceAlt,
    border: `0.5px solid ${border}`,
    borderRadius: "2px",
    padding: "12px 14px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontFamily: "'Arial', sans-serif",
    outline: "none",
    appearance: "none",
    cursor: "pointer",
    width: "100%",
    boxSizing: "border-box",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A84C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
    transition: "border-color 0.2s",
  },
  submitSection: {
    marginTop: "8px",
    paddingTop: "0",
  },
  submitBtn: {
    width: "100%",
    padding: "18px 32px",
    background: gold,
    color: "#000000",
    border: "none",
    borderRadius: "2px",
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    fontFamily: "'Arial', sans-serif",
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s, transform 0.1s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },
  divider: {
    height: "1px",
    background: `linear-gradient(to right, transparent, ${borderGold}, transparent)`,
    margin: "0 0 32px",
  },
};

const Field = ({ label, children }) => (
  <div style={styles.inputWrap}>
    {label && <div style={styles.label}>{label}</div>}
    {children}
  </div>
);

const StyledInput = ({ placeholder, onChange, label }) => {
  const [focused, setFocused] = useState(false);
  return (
    <Field label={label}>
      <input
        style={{
          ...styles.input,
          borderColor: focused ? gold : border,
        }}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Field>
  );
};

const StyledSelect = ({ placeholder, options, onChange, label }) => {
  const [focused, setFocused] = useState(false);
  return (
    <Field label={label}>
      <select
        style={{
          ...styles.select,
          borderColor: focused ? gold : border,
        }}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        defaultValue=""
      >
        <option value="" disabled style={{ color: "#666" }}>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value} style={{ background: "#181818" }}>
            {o.label}
          </option>
        ))}
      </select>
    </Field>
  );
};

const StyledTextarea = ({ placeholder, onChange, label }) => {
  const [focused, setFocused] = useState(false);
  return (
    <Field label={label}>
      <textarea
        style={{
          ...styles.textarea,
          borderColor: focused ? gold : border,
        }}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Field>
  );
};

const SectionTitle = ({ number, children }) => (
  <div style={{ ...styles.sectionTitle, justifyContent: "space-between" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ color: gold }}>{children}</span>
    </div>
    <span style={{ color: gold, opacity: 0.5, fontSize: "10px", letterSpacing: "0.2em" }}>
      {number}
    </span>
  </div>
);

const FindMentorPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [hovering, setHovering] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(
      `/mentor-matches?data=${encodeURIComponent(JSON.stringify(formData))}`
    );
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.eyebrow}>
          <div style={styles.eyebrowLine} />
          <span style={styles.eyebrowText}>Mentorship Program</span>
          <div style={styles.eyebrowLine} />
        </div>

        <h1 style={styles.heading}>Find Your Mentor</h1>
        <p style={styles.subheading}>
          Complete your profile to be matched with industry experts
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Personal */}
          <div style={styles.section}>
            <SectionTitle number="01">Personal Information</SectionTitle>
            <div style={styles.fieldGroup}>
              <StyledInput
                label="Full Name"
                placeholder="Enter your full name"
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
          </div>

          {/* Education */}
          <div style={styles.section}>
            <SectionTitle number="02">Education Details</SectionTitle>
            <div style={styles.fieldGroup}>
              <StyledSelect
                label="Current Level"
                placeholder="Current Education Level"
                options={[
                  { value: "high-school", label: "High School" },
                  { value: "undergraduate", label: "Undergraduate" },
                  { value: "postgraduate", label: "Postgraduate" },
                ]}
                onChange={(v) => handleChange("educationLevel", v)}
              />
              <div style={styles.fieldRow}>
                <StyledInput
                  label="Field of Study"
                  placeholder="e.g. Computer Science"
                  onChange={(e) => handleChange("fieldOfStudy", e.target.value)}
                />
                <StyledInput
                  label="Year of Study"
                  placeholder="e.g. 2nd year B.Tech"
                  onChange={(e) => handleChange("yearOfStudy", e.target.value)}
                />
              </div>
              <StyledInput
                label="Academic Performance (optional)"
                placeholder="e.g. CGPA 8.5 / First Class"
                onChange={(e) => handleChange("academicPerformance", e.target.value)}
              />
            </div>
          </div>

          {/* Skills */}
          <div style={styles.section}>
            <SectionTitle number="03">Skills & Proficiency</SectionTitle>
            <div style={styles.fieldGroup}>
              <StyledInput
                label="Technical Skills"
                placeholder="e.g. Python, React, Machine Learning"
                onChange={(e) => handleChange("technicalSkills", e.target.value)}
              />
              <StyledInput
                label="Soft Skills"
                placeholder="e.g. Leadership, Communication"
                onChange={(e) => handleChange("softSkills", e.target.value)}
              />
              <StyledSelect
                label="Proficiency Level"
                placeholder="Select proficiency level"
                options={[
                  { value: "beginner", label: "Beginner" },
                  { value: "intermediate", label: "Intermediate" },
                  { value: "advanced", label: "Advanced" },
                ]}
                onChange={(v) => handleChange("skillLevel", v)}
              />
            </div>
          </div>

          {/* Interests */}
          <div style={styles.section}>
            <SectionTitle number="04">Interests</SectionTitle>
            <div style={styles.fieldGroup}>
              <StyledInput
                label="Academic Interests"
                placeholder="e.g. AI, Robotics, Bioinformatics"
                onChange={(e) => handleChange("academicInterests", e.target.value)}
              />
              <StyledInput
                label="Career Interests"
                placeholder="e.g. Research, Product Management"
                onChange={(e) => handleChange("careerInterests", e.target.value)}
              />
            </div>
          </div>

          {/* Goals */}
          <div style={styles.section}>
            <SectionTitle number="05">Future Goals</SectionTitle>
            <div style={styles.fieldGroup}>
              <StyledTextarea
                label="Short-term Goals"
                placeholder="What do you want to achieve in the next 6–12 months?"
                onChange={(e) => handleChange("shortTermGoals", e.target.value)}
              />
              <StyledTextarea
                label="Long-term Goals"
                placeholder="Where do you see yourself in 5 years?"
                onChange={(e) => handleChange("longTermGoals", e.target.value)}
              />
            </div>
          </div>

          {/* Mentor Style */}
          <div style={styles.section}>
            <SectionTitle number="06">Preferred Mentor Style</SectionTitle>
            <div style={styles.fieldGroup}>
              <StyledSelect
                label="Mentorship Approach"
                placeholder="Select mentor style"
                options={[
                  { value: "hands-on", label: "Hands-on — Active involvement & collaboration" },
                  { value: "advisory", label: "Advisory — Strategic guidance & feedback" },
                  { value: "motivational", label: "Motivational — Inspiration & accountability" },
                ]}
                onChange={(v) => handleChange("mentorStyle", v)}
              />
            </div>
          </div>

          {/* Submit */}
          <div style={styles.submitSection}>
            <button
              type="submit"
              style={{
                ...styles.submitBtn,
                background: hovering ? goldLight : gold,
                transform: hovering ? "translateY(-1px)" : "none",
              }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Find Matching Mentors
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M9 1l4 4-4 4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindMentorPage;