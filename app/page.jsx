import React from "react";
import HeroSection from "@/components/hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { ArrowRight, Github, Linkedin, Mail, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid-background" />

      <div className="page-root">

        {/* ── HERO ── */}
        <HeroSection />

        {/* ── FEATURES ── */}
        <section className="hp-section features-section">
          <div className="container mx-auto px-4 md:px-8">
            <div className="features-header">
              <span className="section-eyebrow">What We Offer</span>
              <h2 className="display-heading features-heading">
                Powerful Features for<br />Your Career Growth
              </h2>
              <p className="features-subtext">
                Everything you need to build, prepare, and accelerate your professional journey — powered by AI.
              </p>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon-wrap">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="hp-section stats-section">
          <div className="container mx-auto px-4 md:px-8">
            <div className="stats-eyebrow">Platform in Numbers</div>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Industries Covered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Interview Questions</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">AI Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="hp-section how-section">
          <div className="container mx-auto px-4 md:px-8">
            <div className="how-header">
              <span className="section-eyebrow">The Process</span>
              <h2 className="display-heading how-heading">How It Works</h2>
              <p className="how-subtext">
                Four simple steps to accelerate your career growth and land your dream role.
              </p>
            </div>
            <div className="how-grid">
              {howItWorks.map((item, index) => (
                <div key={index} className="how-step">
                  <span className="step-number">0{index + 1}</span>
                  <div className="step-icon-ring">{item.icon}</div>
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="hp-section testimonials-section">
          <div className="container mx-auto px-4 md:px-8">
            <div className="testimonials-header">
              <span className="section-eyebrow">Social Proof</span>
              <h2 className="display-heading testimonials-heading">
                What Our Users Say
              </h2>
              <p className="testimonials-subtext">
                Professionals who transformed their careers with GoldenElite AI.
              </p>
            </div>
            <div className="testimonials-grid">
              {testimonial.map((item, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-avatar-wrap">
                    <Image
                      width={48}
                      height={48}
                      src={item.image}
                      alt={item.author}
                      className="testimonial-avatar"
                    />
                    <div>
                      <p className="testimonial-author">{item.author}</p>
                      <p className="testimonial-role">{item.role}</p>
                      <p className="testimonial-company">{item.company}</p>
                    </div>
                  </div>
                  <p className="testimonial-quote">{item.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="hp-section faq-section">
          <div className="container mx-auto px-4 md:px-8">
            <div className="faq-inner">
              <div className="faq-header">
                <span className="section-eyebrow">Got Questions?</span>
                <h2 className="display-heading faq-heading">
                  Frequently Asked Questions
                </h2>
                <p className="faq-subtext">
                  Everything you need to know about GoldenElite AI and how it can elevate your career.
                </p>
              </div>
              <Accordion type="single" collapsible className="faq-accordion w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="hp-section cta-section">
          <div className="cta-inner">
            <p className="cta-eyebrow">Start Today — It's Free</p>
            <h2 className="cta-heading">
              Ready to Elevate<br />Your Career?
            </h2>
            <p className="cta-subtext">
              Join thousands of professionals advancing their careers with
              AI-powered guidance, expert mentorship, and personalized insights.
            </p>
            <div className="cta-btn-wrap">
              <Link href="/dashboard" className="cta-btn">
                Start Your Journey Today
                <ArrowRight size={16} />
              </Link>
              <p className="cta-footnote">No credit card required · Get started in 2 minutes</p>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="site-footer">
          <div className="footer-topline" />

          <div className="footer-inner">
            <div className="container mx-auto px-4 md:px-8">
              <div className="footer-grid">

                {/* Brand */}
                <div className="footer-brand">
                  <div className="footer-logo-text">GoldenElite <span>AI</span></div>
                  <p className="footer-brand-tagline">"Empowering Careers. Elevating Futures."</p>
                  <p className="footer-brand-desc">
                    A premium AI-powered career development and mentorship platform
                    built to help students and professionals build successful futures.
                  </p>
                </div>

                {/* Platform Links */}
                <div className="footer-col">
                  <h4 className="footer-col-title">Platform</h4>
                  <ul className="footer-links">
                    <li><Link href="/dashboard" className="footer-link">Industry Insights</Link></li>
                    <li><Link href="/resume" className="footer-link">Resume Builder</Link></li>
                    <li><Link href="/ai-cover-letter" className="footer-link">Cover Letter</Link></li>
                    <li><Link href="/interview" className="footer-link">Interview Prep</Link></li>
                    <li><Link href="/find-mentor" className="footer-link">Find a Mentor</Link></li>
                  </ul>
                </div>

                {/* Developer */}
                <div className="footer-col">
                  <h4 className="footer-col-title">Built By</h4>
                  <p className="footer-dev-name">Vikneshwaran</p>
                  <p className="footer-dev-role">Full Stack Developer</p>
                  <div className="footer-social">
                    <a href="https://github.com/07-Vignesh" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                      <Github size={15} />
                      <span>07-Vignesh</span>
                    </a>
                    <a href="https://www.linkedin.com/in/viknesh-waran/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                      <Linkedin size={15} />
                      <span>viknesh-waran</span>
                    </a>
                    <a href="mailto:2006vigneshvicky@gmail.com" className="footer-social-link">
                      <Mail size={15} />
                      <span>2006vigneshvicky@gmail.com</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <div className="container mx-auto px-4 md:px-8">
              <div className="footer-bottom-inner">
                <p className="footer-copy">
                  © {new Date().getFullYear()} GoldenElite AI. All rights reserved.
                </p>
                <p className="footer-made">
                  <Code2 size={13} />
                  Crafted with passion by <strong>Vikneshwaran</strong>
                </p>
              </div>
            </div>
          </div>
        </footer>

      </div>

      <style>{`
        /* ── Section extras ── */
        .features-subtext {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: rgba(245, 240, 232, 0.45);
          max-width: 520px;
          margin: 14px auto 0;
          line-height: 1.7;
          text-align: center;
        }
        .stats-eyebrow {
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(10,10,15,0.5);
          margin-bottom: 48px;
        }
        .testimonials-subtext {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          color: rgba(245, 240, 232, 0.45);
          max-width: 460px;
          margin: 14px auto 0;
          line-height: 1.7;
          text-align: center;
        }
        .cta-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(10,10,15,0.55);
          margin-bottom: 16px;
        }
        .cta-footnote {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(10,10,15,0.45);
          margin-top: 16px;
          letter-spacing: 0.02em;
        }

        /* ══════════════════════
           FOOTER
        ══════════════════════ */
        .site-footer {
          position: relative;
          background: rgba(6, 6, 6, 0.98);
          border-top: 1px solid rgba(197, 160, 80, 0.15);
          z-index: 1;
        }

        .footer-topline {
          height: 1px;
          background: linear-gradient(90deg, transparent, #c5a050, #e8c97a, #c5a050, transparent);
        }

        .footer-inner {
          padding-top: 56px;
          padding-bottom: 44px;
        }

        /* 3-col desktop grid */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.4fr;
          gap: 56px;
        }

        /* Brand */
        .footer-logo-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 900;
          color: #f5f0e8;
          letter-spacing: -0.01em;
          margin-bottom: 10px;
        }
        .footer-logo-text span {
          background: linear-gradient(135deg, #c5a050, #e8c97a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-brand-tagline {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 0.85rem;
          color: rgba(197, 160, 80, 0.7);
          margin-bottom: 14px;
        }
        .footer-brand-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          line-height: 1.75;
          color: rgba(245, 240, 232, 0.35);
          max-width: 300px;
        }

        /* Col titles */
        .footer-col-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c5a050;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(197,160,80,0.15);
        }

        /* Links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(245, 240, 232, 0.42);
          text-decoration: none;
          transition: color 0.2s, padding-left 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .footer-link::before {
          content: '';
          display: inline-block;
          width: 12px;
          height: 1px;
          background: rgba(197,160,80,0.25);
          transition: width 0.2s, background 0.2s;
          flex-shrink: 0;
        }
        .footer-link:hover { color: #e8c97a; }
        .footer-link:hover::before { width: 20px; background: #c5a050; }

        /* Dev */
        .footer-dev-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #f5f0e8;
          margin-bottom: 3px;
        }
        .footer-dev-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(197,160,80,0.55);
          margin-bottom: 18px;
        }

        /* Social */
        .footer-social {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(245, 240, 232, 0.42);
          text-decoration: none;
          transition: color 0.2s;
          word-break: break-all;
        }
        .footer-social-link svg {
          color: rgba(197,160,80,0.45);
          transition: color 0.2s;
          flex-shrink: 0;
        }
        .footer-social-link:hover { color: #e8c97a; }
        .footer-social-link:hover svg { color: #c5a050; }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid rgba(197, 160, 80, 0.07);
          padding: 18px 0;
        }
        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(245, 240, 232, 0.22);
        }
        .footer-made {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(245, 240, 232, 0.22);
        }
        .footer-made svg { color: rgba(197,160,80,0.35); flex-shrink: 0; }
        .footer-made strong { color: rgba(197,160,80,0.65); font-weight: 500; }

        /* ── RESPONSIVE ── */

        /* Tablet: 2-col */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .footer-brand-desc { max-width: 100%; }
        }

        /* Large mobile: stack all */
        @media (max-width: 600px) {
          .footer-inner {
            padding-top: 40px;
            padding-bottom: 32px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-brand { grid-column: auto; }
          .footer-brand-desc { max-width: 100%; }
          .footer-logo-text { font-size: 1.3rem; }

          /* Divider between sections on mobile */
          .footer-col {
            padding-top: 24px;
            border-top: 1px solid rgba(197, 160, 80, 0.08);
          }
          .footer-social-link { font-size: 11px; }
           .footer-bottom-inner {
           flex-direction: column;
            align-items: center;
            gap: 6px;
  }
  .footer-made { justify-content: center; }
  .footer-copy { text-align: center; }
}
        }

        /* Small mobile */
        @media (max-width: 400px) {
          .footer-bottom-inner {
            flex-direction: column;
             align-items: center;      /* ← was flex-start */
             justify-content: center;  /* ← add this */
             gap: 6px;
             text-align: center;
          }
          .footer-made { font-size: 11px; }
          .footer-copy { font-size: 11px; }
        }
      `}</style>
    </>
  );
}