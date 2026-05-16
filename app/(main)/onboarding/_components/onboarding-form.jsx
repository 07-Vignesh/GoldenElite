"use client";

import { useState, useEffect } from "react";
import { Loader2, ChevronDown } from "lucide-react";

// Mock data for demo
const mockIndustries = [
  {
    id: "tech",
    name: "Technology",
    subIndustries: ["Software Engineering", "Data Science", "AI/ML", "DevOps", "Product Management"],
  },
  {
    id: "finance",
    name: "Finance",
    subIndustries: ["Investment Banking", "Asset Management", "FinTech", "Risk Management"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    subIndustries: ["Clinical Research", "Health IT", "Biotech", "Pharmaceuticals"],
  },
  {
    id: "marketing",
    name: "Marketing",
    subIndustries: ["Digital Marketing", "Brand Strategy", "Growth", "Content"],
  },
];

export default function OnboardingForm({ industries = mockIndustries }) {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [formData, setFormData] = useState({
    industry: "",
    subIndustry: "",
    experience: "",
    skills: "",
    bio: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Staggered entrance
    const timer = setTimeout(() => setStep(1), 100);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const e = {};
    if (!formData.industry) e.industry = "Please select an industry";
    if (!formData.subIndustry) e.subIndustry = "Please select a specialization";
    if (!formData.experience) e.experience = "Experience is required";
    if (!formData.skills) e.skills = "At least one skill is required";
    if (!formData.bio) e.bio = "Bio is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    alert("Profile completed successfully!");
  };

  const SelectField = ({ id, label, value, placeholder, options, open, setOpen, onSelect, error }) => (
    <div className="field-group">
      <label className="field-label" htmlFor={id}>
        <span className="label-line" />
        {label}
      </label>
      <div className="select-wrapper" style={{ position: "relative" }}>
        <button
          type="button"
          className={`select-trigger ${open ? "open" : ""} ${error ? "errored" : ""}`}
          onClick={() => setOpen(!open)}
          id={id}
        >
          <span className={value ? "selected-val" : "placeholder-val"}>
            {value || placeholder}
          </span>
          <ChevronDown size={16} className={`chevron ${open ? "rotated" : ""}`} />
        </button>
        {open && (
          <div className="dropdown-menu">
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={`dropdown-item ${value === opt.label ? "active" : ""}`}
                onClick={() => {
                  onSelect(opt);
                  setOpen(false);
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ob-root {
          min-height: 100vh;
          background: #080808;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 16px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Ambient glow bg */
        .ob-root::before {
          content: '';
          position: fixed;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(ellipse, rgba(197,160,80,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Decorative corner lines */
        .corner-tl, .corner-br {
          position: fixed;
          width: 120px;
          height: 120px;
          pointer-events: none;
          opacity: 0.3;
        }
        .corner-tl { top: 24px; left: 24px; border-top: 1px solid #c5a050; border-left: 1px solid #c5a050; }
        .corner-br { bottom: 24px; right: 24px; border-bottom: 1px solid #c5a050; border-right: 1px solid #c5a050; }

        .ob-card {
          width: 100%;
          max-width: 560px;
          background: #0e0e0e;
          border: 1px solid rgba(197,160,80,0.2);
          position: relative;
          padding: 52px 48px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ob-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Top gold bar */
        .ob-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #c5a050, #e8c97a, #c5a050, transparent);
        }

        .card-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .eyebrow-line {
          height: 1px;
          width: 32px;
          background: #c5a050;
        }
        .eyebrow-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: #c5a050;
          text-transform: uppercase;
        }

        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          color: #f5f0e8;
          line-height: 1.15;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .card-title span {
          background: linear-gradient(135deg, #c5a050, #e8c97a, #c5a050);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-desc {
          font-size: 14px;
          color: #888;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .ob-form { display: flex; flex-direction: column; gap: 28px; }

        .field-group { display: flex; flex-direction: column; gap: 8px; }

        .field-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #a08050;
        }
        .label-line {
          display: inline-block;
          width: 20px;
          height: 1px;
          background: #c5a050;
          flex-shrink: 0;
        }

        .ob-input {
          width: 100%;
          background: rgba(197,160,80,0.04);
          border: 1px solid rgba(197,160,80,0.15);
          color: #f0ebe0;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          padding: 14px 18px;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          -webkit-appearance: none;
        }
        .ob-input::placeholder { color: #444; }
        .ob-input:focus {
          border-color: rgba(197,160,80,0.5);
          background: rgba(197,160,80,0.07);
          box-shadow: 0 0 0 3px rgba(197,160,80,0.06);
        }
        .ob-input.errored { border-color: rgba(180,80,80,0.5); }

        .ob-textarea {
          resize: vertical;
          min-height: 110px;
          line-height: 1.6;
        }

        /* Select */
        .select-trigger {
          width: 100%;
          background: rgba(197,160,80,0.04);
          border: 1px solid rgba(197,160,80,0.15);
          color: #f0ebe0;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .select-trigger:hover,
        .select-trigger.open {
          border-color: rgba(197,160,80,0.5);
          background: rgba(197,160,80,0.07);
        }
        .select-trigger.errored { border-color: rgba(180,80,80,0.5); }
        .placeholder-val { color: #444; }
        .selected-val { color: #f0ebe0; }

        .chevron { color: #c5a050; transition: transform 0.2s; flex-shrink: 0; }
        .chevron.rotated { transform: rotate(180deg); }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 4px);
          left: 0; right: 0;
          background: #141414;
          border: 1px solid rgba(197,160,80,0.25);
          z-index: 50;
          max-height: 220px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #c5a050 #1a1a1a;
        }
        .dropdown-item {
          width: 100%;
          padding: 12px 18px;
          text-align: left;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #aaa;
          background: none;
          border: none;
          cursor: pointer;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: background 0.15s, color 0.15s;
        }
        .dropdown-item:hover { background: rgba(197,160,80,0.08); color: #f0ebe0; }
        .dropdown-item.active { color: #e8c97a; background: rgba(197,160,80,0.1); }

        .input-hint {
          font-size: 12px;
          color: #555;
          margin-top: 2px;
        }
        .error-msg {
          font-size: 12px;
          color: #c06060;
          margin-top: 2px;
        }

        .divider {
          height: 1px;
          background: rgba(197,160,80,0.08);
          margin: 4px 0;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #c5a050, #e8c97a, #c5a050);
          background-size: 200% 200%;
          border: none;
          color: #080808;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          margin-top: 8px;
          position: relative;
          overflow: hidden;
        }
        .submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.1);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .submit-btn:hover::after { opacity: 1; }
        .submit-btn:hover { box-shadow: 0 4px 24px rgba(197,160,80,0.3); }
        .submit-btn:active { transform: scale(0.99); }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .submit-btn:disabled:hover::after { opacity: 0; }

        .btn-inner { display: flex; align-items: center; justify-content: center; gap: 8px; }

        .step-dots {
          display: flex;
          gap: 6px;
          align-items: center;
          margin-top: 24px;
          justify-content: center;
        }
        .dot {
          width: 24px; height: 2px;
          background: rgba(197,160,80,0.2);
          transition: background 0.3s;
        }
        .dot.filled { background: #c5a050; }

        @media (max-width: 560px) {
          .ob-card { padding: 36px 24px; }
          .card-title { font-size: 28px; }
        }
      `}</style>

      <div className="ob-root">
        <div className="corner-tl" />
        <div className="corner-br" />

        <div className={`ob-card ${step >= 1 ? "visible" : ""}`}>
          <div className="card-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Professional Setup</span>
          </div>

          <h1 className="card-title">
            Complete Your <span>Profile</span>
          </h1>
          <p className="card-desc">
            Select your industry to get personalized career insights and recommendations.
          </p>

          <form className="ob-form" onSubmit={handleSubmit}>
            {/* Industry */}
            <SelectField
              id="industry"
              label="Industry"
              value={formData.industry ? industries.find(i => i.id === formData.industry)?.name : ""}
              placeholder="Select an industry"
              options={industries.map(i => ({ value: i.id, label: i.name }))}
              open={industryOpen}
              setOpen={setIndustryOpen}
              onSelect={(opt) => {
                setFormData(f => ({ ...f, industry: opt.value, subIndustry: "" }));
                setSelectedIndustry(industries.find(i => i.id === opt.value));
                setErrors(e => ({ ...e, industry: undefined }));
              }}
              error={errors.industry}
            />

            {/* Sub Industry */}
            {formData.industry && (
              <SelectField
                id="subIndustry"
                label="Specialization"
                value={formData.subIndustry}
                placeholder="Select your specialization"
                options={(selectedIndustry?.subIndustries || []).map(s => ({ value: s, label: s }))}
                open={subOpen}
                setOpen={setSubOpen}
                onSelect={(opt) => {
                  setFormData(f => ({ ...f, subIndustry: opt.value }));
                  setErrors(e => ({ ...e, subIndustry: undefined }));
                }}
                error={errors.subIndustry}
              />
            )}

            <div className="divider" />

            {/* Experience */}
            <div className="field-group">
              <label className="field-label" htmlFor="experience">
                <span className="label-line" />
                Years of Experience
              </label>
              <input
                id="experience"
                type="number"
                min="0"
                max="50"
                placeholder="Enter years of experience"
                className={`ob-input ${errors.experience ? "errored" : ""}`}
                value={formData.experience}
                onChange={e => {
                  setFormData(f => ({ ...f, experience: e.target.value }));
                  setErrors(er => ({ ...er, experience: undefined }));
                }}
              />
              {errors.experience && <p className="error-msg">{errors.experience}</p>}
            </div>

            {/* Skills */}
            <div className="field-group">
              <label className="field-label" htmlFor="skills">
                <span className="label-line" />
                Skills
              </label>
              <input
                id="skills"
                type="text"
                placeholder="e.g., Python, JavaScript, Project Management"
                className={`ob-input ${errors.skills ? "errored" : ""}`}
                value={formData.skills}
                onChange={e => {
                  setFormData(f => ({ ...f, skills: e.target.value }));
                  setErrors(er => ({ ...er, skills: undefined }));
                }}
              />
              <p className="input-hint">Separate multiple skills with commas</p>
              {errors.skills && <p className="error-msg">{errors.skills}</p>}
            </div>

            {/* Bio */}
            <div className="field-group">
              <label className="field-label" htmlFor="bio">
                <span className="label-line" />
                Professional Bio
              </label>
              <textarea
                id="bio"
                placeholder="Tell us about your professional background..."
                className={`ob-input ob-textarea ${errors.bio ? "errored" : ""}`}
                value={formData.bio}
                onChange={e => {
                  setFormData(f => ({ ...f, bio: e.target.value }));
                  setErrors(er => ({ ...er, bio: undefined }));
                }}
              />
              {errors.bio && <p className="error-msg">{errors.bio}</p>}
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              <span className="btn-inner">
                {loading ? (
                  <>
                    <Loader2 size={15} className="spin" style={{ animation: "spin 1s linear infinite" }} />
                    Saving...
                  </>
                ) : (
                  "Complete Profile"
                )}
              </span>
            </button>
          </form>

          {/* Progress dots */}
          <div className="step-dots">
            {[0,1,2,3].map(i => (
              <div key={i} className={`dot ${i === 0 ? "filled" : ""}`} />
            ))}
          </div>
        </div>

        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    </>
  );
}