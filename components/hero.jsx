"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Root ── */
        .hero-root {
          width: 100%;
          padding-top: 152px;
          padding-bottom: 0;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        /* Ambient glow */
        .hero-root::before {
          content: '';
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 560px;
          background: radial-gradient(ellipse, rgba(197,160,80,0.08) 0%, transparent 68%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 24px;
        }

        /* ── Badge / Eyebrow ── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px 6px 8px;
          border: 1px solid rgba(197,160,80,0.3);
          background: rgba(197,160,80,0.06);
          margin-bottom: 32px;
        }
        .hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c5a050;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        .hero-badge-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c5a050;
        }

        /* ── Heading ── */
        .hero-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.8rem, 6.5vw, 5.8rem);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.025em;
          color: #f5f0e8;
          margin-bottom: 10px;
          max-width: 920px;
        }

        .hero-heading-line2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.8rem, 6.5vw, 5.8rem);
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.025em;
          margin-bottom: 28px;
          max-width: 920px;
          /* gold gradient */
          background: linear-gradient(135deg, #c5a050 0%, #f0d878 40%, #c5a050 70%, #e8c97a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Tagline ── */
        .hero-tagline {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: clamp(0.95rem, 2vw, 1.25rem);
          font-weight: 700;
          color: rgba(197,160,80,0.7);
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }

        /* ── Sub description ── */
        .hero-sub {
          max-width: 580px;
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.92rem, 1.5vw, 1.05rem);
          font-weight: 300;
          line-height: 1.85;
          color: rgba(245, 240, 232, 0.5);
          margin-bottom: 20px;
        }

        /* ── Feature pills ── */
        .hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 44px;
          max-width: 640px;
        }
        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border: 1px solid rgba(197,160,80,0.18);
          background: rgba(197,160,80,0.04);
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.06em;
          color: rgba(245,240,232,0.55);
        }
        .hero-pill-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #c5a050;
          flex-shrink: 0;
        }

        /* ── CTA Buttons ── */
        .hero-btns {
          display: flex;
          align-items: center;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 80px;
        }

        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 38px;
          background: linear-gradient(135deg, #c5a050, #e8c97a, #c5a050);
          background-size: 200%;
          border: none;
          color: #080808;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: box-shadow 0.25s, transform 0.2s, opacity 0.2s;
          position: relative;
          overflow: hidden;
        }
        .btn-hero-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .btn-hero-primary:hover::after { opacity: 1; }
        .btn-hero-primary:hover {
          box-shadow: 0 8px 36px rgba(197,160,80,0.45);
          transform: translateY(-2px);
        }

        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 38px;
          background: transparent;
          border: 1px solid rgba(197,160,80,0.35);
          color: rgba(245,240,232,0.8);
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
        }
        .btn-hero-secondary:hover {
          border-color: #c5a050;
          color: #e8c97a;
          background: rgba(197,160,80,0.07);
          transform: translateY(-2px);
        }

        /* ── Image ── */
        .hero-image-wrapper {
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
          position: relative;
          perspective: 1600px;
        }

        .hero-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          transform: perspective(1400px) rotateX(8deg);
          transform-origin: top center;
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
          background: #080808;
          border-radius: 16px;
          box-shadow:
            0 48px 96px rgba(0,0,0,0.6),
            0 0 0 1px rgba(197,160,80,0.18);
        }
        .hero-image.scrolled {
          transform: perspective(1400px) rotateX(0deg);
        }

        .hero-image-frame {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(197,160,80,0.22);
          z-index: 3;
          pointer-events: none;
          border-radius: 16px;
        }
        .hero-image-fade {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 35%;
          background: linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0) 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* Decorative vertical lines */
        .hero-vline {
          position: absolute;
          top: 152px;
          width: 1px;
          height: 280px;
          background: linear-gradient(to bottom, transparent, rgba(197,160,80,0.15), transparent);
          pointer-events: none;
          z-index: 0;
        }
        .hero-vline.left  { left: 32px; }
        .hero-vline.right { right: 32px; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .hero-root { padding-top: 110px; }
          .hero-vline { display: none; }
          .hero-btns { gap: 10px; margin-bottom: 52px; }
          .btn-hero-primary,
          .btn-hero-secondary { padding: 12px 24px; font-size: 11px; }
          .hero-pills { gap: 6px; }
          .hero-pill { font-size: 10px; padding: 4px 10px; }
        }

        @media (max-width: 480px) {
          .hero-heading { font-size: 2.1rem; }
          .hero-heading-line2 { font-size: 2.1rem; }
          .hero-sub { font-size: 0.9rem; }
          .hero-btns { flex-direction: column; width: 100%; }
          .btn-hero-primary,
          .btn-hero-secondary { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="hero-root">
        <div className="hero-vline left" />
        <div className="hero-vline right" />

        <div className="hero-inner">

          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">Premium AI Career Platform</span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            Empowering Careers.
          </h1>
          <h1 className="hero-heading-line2">
            Elevating Futures.
          </h1>

          {/* Tagline */}
          <p className="hero-tagline">
            "Where AI Meets Expert Mentorship"
          </p>

          {/* Sub */}
          <p className="hero-sub">
            GoldenElite AI combines advanced artificial intelligence with expert mentorship
            to deliver personalized career guidance, smart resume creation, interview
            preparation, and real-world skill development — all in one premium platform.
          </p>

          {/* Feature pills */}
          <div className="hero-pills">
            {[
              "AI Resume Builder",
              "Cover Letter Generator",
              "Interview Prep",
              "Career Insights",
              "Expert Mentors",
              "Skill Development",
            ].map((f) => (
              <span key={f} className="hero-pill">
                <span className="hero-pill-dot" />
                {f}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-btns">
            <Link href="/find-mentor" className="btn-hero-primary">
              Find Your Mentor
            </Link>
            <Link href="/mentors" className="btn-hero-secondary">
              Explore Platform
            </Link>
          </div>

          {/* Banner Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-frame" />
            <div ref={imageRef} className="hero-image">
              <Image
                src="/GoldenElite.png"
                fill
                alt="GoldenElite AI Dashboard"
                priority
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
              <div className="hero-image-fade" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HeroSection;