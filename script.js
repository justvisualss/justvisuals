:root {
  --bg: #08111d;
  --bg-elevated: rgba(17, 24, 39, 0.9);
  --panel: rgba(15, 23, 42, 0.9);
  --panel-border: rgba(148, 163, 184, 0.22);
  --text: #edf6ff;
  --muted: #99a9bf;
  --shadow: rgba(15, 23, 42, 0.38);
  --white-alt: #f8fafc;
  --color-one: #7c3aed;
  --color-two: #0ea5e9;
  --color-three: #22c55e;
  --color-four: #f59e0b;
  --color-five: #f97316;
  --accent: linear-gradient(135deg, var(--color-one), var(--color-three));
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 58, 237, 0.18), transparent 28%),
    radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.16), transparent 26%),
    var(--bg);
  color: var(--text);
}

button {
  font: inherit;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 26px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: -0.08em;
  background: linear-gradient(135deg, var(--color-one), var(--color-two));
  box-shadow: 0 18px 30px rgba(124, 58, 237, 0.28);
}

.eyebrow {
  margin: 0 0 4px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 10px;
  color: var(--muted);
}

.eyebrow.muted {
  opacity: 0.8;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

h1 {
  font-size: clamp(1.4rem, 1.7vw, 2.1rem);
  letter-spacing: -0.06em;
}

.top-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn,
.ghost-btn,
.mock-btn {
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 0.8rem 1.1rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.primary-btn,
.mock-btn.primary {
  background: linear-gradient(135deg, var(--color-one), var(--color-two));
  color: var(--white-alt);
  box-shadow: 0 18px 28px rgba(59, 130, 246, 0.26);
}

.secondary-btn,
.ghost-btn,
.mock-btn.secondary {
  background: rgba(15, 23, 42, 0.64);
  border-color: var(--panel-border);
  color: var(--text);
}

.primary-btn:hover,
.secondary-btn:hover,
.ghost-btn:hover,
.mock-btn:hover {
  transform: translateY(-1px);
}

.app-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 22px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 24px;
  padding: 22px;
  box-shadow: 0 22px 46px var(--shadow);
  backdrop-filter: blur(14px);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 18px;
}

.panel-header.compact {
  margin-bottom: 16px;
}

.chip {
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text);
  font-size: 0.75rem;
  font-weight: 600;
}

.hero-copy {
  margin-bottom: 18px;
  color: var(--muted);
  line-height: 1.6;
  max-width: 60ch;
}

.palette-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.palette-card {
  border-radius: 18px;
  min-height: 180px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.palette-card:hover {
  transform: translateY(-2px);
}

.swatch {
  height: 132px;
  width: 100%;
  display: block;
  cursor: pointer;
}

.swatch-meta {
  padding: 0.8rem 0.9rem 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background: rgba(8, 17, 29, 0.5);
}

.swatch-meta strong {
  font-size: 0.78rem;
  letter-spacing: 0.04em;
}

.swatch-meta span {
  font-size: 0.72rem;
  color: var(--muted);
}

.gradient-surface {
  height: 200px;
  border-radius: 20px;
  background: linear-gradient(135deg, var(--color-one), var(--color-two), var(--color-three));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 18px 24px rgba(15, 23, 42, 0.3);
  margin-bottom: 18px;
}

.mock-window {
  background: rgba(9, 15, 24, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  overflow: hidden;
}

.window-topbar {
  display: flex;
  gap: 8px;
  padding: 12px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.window-topbar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.window-topbar span:nth-child(1) { background: #f87171; }
.window-topbar span:nth-child(2) { background: #fbbf24; }
.window-topbar span:nth-child(3) { background: #4ade80; }

.mock-content {
  padding: 18px;
}

.mini-card {
  border-radius: 14px;
  padding: 14px 16px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
  border: 1px solid rgba(255,255,255,0.06);
}

.card-one {
  background: linear-gradient(135deg, var(--color-one), rgba(255,255,255,0.08));
}

.mini-label {
  display: block;
  font-size: 0.68rem;
  color: rgba(255,255,255,0.74);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.mini-card h4 {
  font-size: 1.05rem;
  letter-spacing: -0.04em;
}

.cta-row {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}

.mock-btn {
  flex: 1;
  padding: 0.8rem 1rem;
}

.metric-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.metric-row > div {
  padding: 12px 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255,255,255,0.07);
}

.metric-row strong {
  display: block;
  font-size: 1.05rem;
  margin-bottom: 4px;
}

.metric-row span {
  color: var(--muted);
  font-size: 0.72rem;
}

.typography-panel {
  margin-top: 24px;
}

.type-sample {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 20px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 18px;
  padding: 18px;
}

.sample-kicker {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  margin-bottom: 10px;
}

.type-sample h4 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.sample-body {
  max-width: 58ch;
  color: var(--muted);
  line-height: 1.7;
  font-size: 1rem;
  align-self: center;
}

@media (max-width: 840px) {
  .app-grid,
  .type-sample {
    grid-template-columns: 1fr;
  }

  .palette-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {
  .page-shell {
    padding: 22px 14px 32px;
  }

  .panel {
    padding: 16px;
  }

  .palette-grid {
    grid-template-columns: 1fr;
  }

  .top-actions {
    width: 100%;
  }

  .top-actions button {
    flex: 1;
  }
}
