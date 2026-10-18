const blocks = [
  { x: 64, y: 64, w: 190, h: 118 },
  { x: 286, y: 64, w: 92, h: 52 },
  { x: 286, y: 130, w: 92, h: 52 },
]

function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">YYJ GRAPHICS ENGINE</p>
          <h1>Architectural Graphics Engine</h1>
        </div>
        <span className="status">SVG READY</span>
      </header>

      <section className="workspace">
        <aside className="panel">
          <h2>CONTENT</h2>
          <button type="button">Import SVG</button>
          <div className="rule" />
          <p className="label">Diagram Family</p>
          <p>Figure-ground comparison</p>
          <p className="label">Theme</p>
          <p>YYJ Thesis 2026</p>
        </aside>

        <section className="canvas-wrap" aria-label="SVG preview canvas">
          <svg
            className="canvas"
            viewBox="0 0 720 440"
            role="img"
            aria-label="Simple architectural SVG placeholder"
          >
            <rect width="720" height="440" fill="white" />
            <text x="42" y="42" className="svg-title">EVENT / LEGACY</text>
            <g id="GEOMETRY_PRIMARY">
              {blocks.map((b, i) => (
                <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill="black" />
              ))}
            </g>
            <g id="GEOMETRY_SECONDARY" opacity="0.35">
              <rect x="446" y="64" width="78" height="52" fill="black" />
              <rect x="544" y="64" width="78" height="52" fill="black" />
              <rect x="446" y="130" width="78" height="52" fill="black" />
              <rect x="544" y="130" width="78" height="52" fill="black" />
            </g>
            <path d="M395 123 H425" stroke="black" strokeWidth="2" />
            <path d="M425 123 l-8 -5 v10 z" fill="black" />
            <text x="64" y="220" className="svg-label">EVENT</text>
            <text x="446" y="220" className="svg-label">LEGACY</text>
          </svg>
        </section>

        <aside className="panel">
          <h2>COMPOSITION</h2>
          <p className="label">Background</p>
          <p>White</p>
          <p className="label">Palette</p>
          <p>Monochrome analytical</p>
          <p className="label">Scale</p>
          <p>Same scale</p>
          <button type="button">Export SVG</button>
        </aside>
      </section>
    </main>
  )
}

export default App
