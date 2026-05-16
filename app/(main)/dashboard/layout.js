import { Suspense } from "react";
import { BarLoader } from "react-spinners";

export default function Layout({ children }) {
  return (
    <>
      <style>{`
        .dashboard-root {
          min-height: 100vh;
          padding: 120px 32px 80px;
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
        }

        .dashboard-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(197, 160, 80, 0.15);
          position: relative;
        }

        /* gold left accent bar */
        .dashboard-header::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, #c5a050, #e8c97a);
        }

        .dashboard-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .dashboard-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c5a050;
        }
        .dashboard-eyebrow::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #c5a050;
        }

        .dashboard-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #f5f0e8 0%, #c5a050 50%, #e8c97a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        /* Loader bar */
        .dashboard-loader {
          width: 100%;
          margin-top: 16px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .dashboard-root { padding: 100px 20px 60px; }
          .dashboard-header { margin-bottom: 32px; flex-direction: column; align-items: flex-start; gap: 0; }
        }
      `}</style>

      <div className="dashboard-root">
        <div className="dashboard-header">
          <div className="dashboard-title-wrap">
            <span className="dashboard-eyebrow">AI-Powered Analytics</span>
            <h1 className="dashboard-title">Industry Insights</h1>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="dashboard-loader">
              <BarLoader width="100%" color="#c5a050" />
            </div>
          }
        >
          {children}
        </Suspense>
      </div>
    </>
  );
}