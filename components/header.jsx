"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const Header = () => {
  return (
    <>
      <style>{`
        .header-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 50;
          border-bottom: 1px solid rgba(197, 160, 80, 0.18);
          background: rgba(8, 8, 8, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        /* top gold line */
        .header-root::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c5a050, #e8c97a, #c5a050, transparent);
          z-index: 1;
        }

        .header-nav {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        /* ── Logo ── */
        .header-logo {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        /* ── Right side actions ── */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        /* ── Industry Insights button — desktop only ── */
        .btn-insight-desktop {
          display: none;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: transparent;
          border: 1px solid rgba(197, 160, 80, 0.3);
          color: rgba(245, 240, 232, 0.92);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.03em;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        .btn-insight-desktop:hover {
          border-color: #c5a050;
          color: #e8c97a;
          background: rgba(197, 160, 80, 0.06);
        }

        /* ── Industry Insights icon — mobile only ── */
        .btn-insight-mobile {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(197, 160, 80, 0.3);
          background: transparent;
          color: rgba(245, 240, 232, 0.75);
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
          flex-shrink: 0;
          webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        .btn-insight-mobile:hover {
          border-color: #c5a050;
          color: #e8c97a;
        }

        /* ── Growth Tools trigger ── */
        .btn-growth {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: linear-gradient(135deg, #c5a050, #e8c97a, #c5a050);
          border: none;
          color: #080808;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .btn-growth:hover {
          opacity: 0.9;
          box-shadow: 0 4px 20px rgba(197, 160, 80, 0.3);
        }

        .btn-growth-label {
          display: none;
        }

        /* ── Dropdown ── */
        .dropdown-content-gold {
          background: #0e0e0e !important;
          border: 1px solid rgba(197, 160, 80, 0.2) !important;
          border-radius: 0 !important;
          padding: 4px !important;
          min-width: 170px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.7) !important;
        }
        .dropdown-item-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          color: rgba(245, 240, 232, 0.7);
          font-size: 13px;
          font-weight: 400;
          text-decoration: none;
          border-bottom: 1px solid rgba(197, 160, 80, 0.07);
          transition: color 0.2s, background 0.2s;
          cursor: pointer;
          width: 100%;
        }
        .dropdown-item-link:last-child { border-bottom: none; }
        .dropdown-item-link:hover {
          color: #e8c97a;
          background: rgba(197, 160, 80, 0.07);
        }

        /* ── Sign In button ── */
        .btn-signin {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          background: transparent;
          border: 1px solid rgba(197, 160, 80, 0.35);
          color: rgba(245, 240, 232, 0.8);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.04em;
          cursor: pointer;
          white-space: nowrap;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
           webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        .btn-signin:hover {
          border-color: #c5a050;
          color: #e8c97a;
          background: rgba(197, 160, 80, 0.06);
        }

        /* ── Tablet (768px+): show text labels ── */
        @media (min-width: 768px) {
          .header-nav { padding: 0 28px; height: 72px; gap: 16px; }
          .btn-insight-desktop { display: inline-flex; }
          .btn-insight-mobile { display: none; }
          .btn-growth { padding: 9px 18px; font-size: 13px; }
          .btn-growth-label { display: inline; }
          .header-actions { gap: 10px; }
        }

        /* ── Desktop (1024px+) ── */
        @media (min-width: 1024px) {
          .header-nav { padding: 0 40px; }
          .btn-growth { padding: 10px 22px; }
          .btn-insight-desktop { padding: 9px 20px; }
        }
      `}</style>

      <header className="header-root">
        <nav className="header-nav">

          {/* Logo */}
          <Link href="/" className="header-logo">
  <Image
    src="/GoldenElitelogo.png"
    alt="GoldenElite AI Logo"
    width={400}
    height={350}
    style={{ height: '110px', width: 'auto', objectFit: 'contain' }}
    priority
  />
</Link>

          {/* Right Actions */}
          <div className="header-actions">
            <SignedIn>

              {/* Industry Insights — desktop text version */}
              <Link href="/dashboard" className="btn-insight-desktop">
                <LayoutDashboard size={14} />
                Industry Insights
              </Link>

              {/* Industry Insights — mobile icon only */}
              <Link href="/dashboard" className="btn-insight-mobile">
                <LayoutDashboard size={15} />
              </Link>

              {/* Growth Tools Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="btn-growth">
                    <StarsIcon size={13} />
                    <span className="btn-growth-label">Growth Tools</span>
                    <ChevronDown size={12} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="dropdown-content-gold">
                  <DropdownMenuItem asChild>
                    <Link href="/resume" className="dropdown-item-link">
                      <FileText size={14} />
                      Build Resume
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/ai-cover-letter" className="dropdown-item-link">
                      <PenBox size={14} />
                      Cover Letter
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/interview" className="dropdown-item-link">
                      <GraduationCap size={14} />
                      Interview Prep
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/booked-mentors" className="dropdown-item-link">
                      <Users size={14} />
                      Booked Mentors
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </SignedIn>

            <SignedOut>
              <SignInButton>
                <button className="btn-signin">Sign In</button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9",
                    userButtonPopoverCard: "shadow-xl",
                    userPreviewMainIdentifier: "font-semibold",
                  },
                }}
                fallbackRedirectUrl="/"
              />
            </SignedIn>
          </div>

        </nav>
      </header>
    </>
  );
}

export default Header;