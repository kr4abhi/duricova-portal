const trustPoints = [
  ['fa-passport', 'Vietnam Decree 84', 'MARD import permit pathway'],
  ['fa-shield-halved', 'Malaysia MAQIS', 'DOA biosecurity aligned'],
  ['fa-vial-circle-check', 'NABL lab tested', 'Quality checked per lot'],
]

export default function HeroSection({ onRequestSample, onOpenModal }) {
  return (
    <>
      <div className="export-ticker"><div className="container ticker-inner"><span className="ticker-tag">EXPORT DESK</span><p><strong>Nagpur plant:</strong> Container slots available · Freight estimates for Ho Chi Minh, Port Klang & Chittagong · Latest sample lot DUR-2026-B12</p></div></div>
      <section className="hero" id="top"><div className="hero-pattern" />
        <div className="container hero-grid">
          <div className="hero-copy"><span className="eyebrow eyebrow-gold"><i className="fa-solid fa-award" /> Export-ready organic inputs</span>
            <h1>Better soil, shipped with <span>precision.</span></h1>
            <p className="hero-lede">High-density vermicompost granules engineered for reliable handling, efficient container loads, and international agricultural distributors.</p>
            <div className="hero-actions"><button className="button button-gold button-large" onClick={onRequestSample}>Request a 2.5 kg sample <i className="fa-solid fa-arrow-right" /></button><a className="button button-glass button-large" href="#tools"><i className="fa-solid fa-calculator" /> Estimate freight</a></div>
            <div className="hero-stats"><div><strong>2–4 mm</strong><span>Granule size</span></div><div><strong>22–24 MT</strong><span>20 ft FCL payload</span></div><div><strong>≤ 15%</strong><span>Target moisture</span></div></div>
          </div>
          <div className="product-showcase"><div className="showcase-topline"><span>EXPORT SPECIFICATION</span><span className="live-dot">AVAILABLE</span></div>
            <div className="granule-art" aria-hidden="true"><span /><span /><span /><span /><span /><i className="fa-solid fa-seedling" /></div>
            <h2>DURICOVA® Granules 3.0</h2><p className="showcase-subtitle">Homogeneous granules · low dust · free flowing</p>
            <div className="showcase-specs"><div><span>Granule size</span><strong>2.0–4.0 mm</strong></div><div><span>Bulk density</span><strong>0.75–0.90 t/m³</strong></div><div><span>Packaging</span><strong>25 kg PP + LDPE liner</strong></div><div><span>Quality process</span><strong className="text-green">Lot-based QC</strong></div></div>
            <button className="button button-glass showcase-button" onClick={() => onOpenModal('coa', { batch: 'DUR-2026-B12' })}><i className="fa-solid fa-file-contract" /> Inspect sample batch COA</button>
          </div>
        </div>
        <div className="container trust-grid">{trustPoints.map(([icon, title, description]) => <div className="trust-item" key={title}><i className={`fa-solid ${icon}`} /><div><strong>{title}</strong><span>{description}</span></div></div>)}</div>
      </section>
    </>
  )
}