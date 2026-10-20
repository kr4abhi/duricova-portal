const products = [
  {
    id: 'granulated', badge: 'PRIMARY EXPORT GRADE', ref: 'DUR-GR-30',
    title: 'Granulated Vermicompost', size: '2.0–4.0 mm',
    description: 'Uniform, free-flowing bio-organic granules designed for fertilizer spreaders and efficient long-distance shipping.',
    packaging: '25 kg PP woven + LDPE liner', density: '0.82–0.88 t/m³', load: 'Up to 24 MT / 20 ft FCL',
  },
  {
    id: 'pellets', badge: 'PLANTATION GRADE', ref: 'DUR-PL-50',
    title: 'Enriched Bio-Organic Pellets', size: '4.0–6.0 mm',
    description: 'Extruded pellets enriched with humic substances and beneficial soil microbes for plantation and orchard use.',
    packaging: '1,000 kg UV-stabilized FIBC', density: '0.78–0.84 t/m³', load: 'Up to 22 MT / 20 ft FCL',
  },
]

const specs = [
  ['Moisture content', '≤ 15.0% target', '12.5–14.8% typical'],
  ['Organic carbon', '≥ 12.0%', '14.2–16.5% typical'],
  ['C : N ratio', '< 20 : 1', '13.5 : 1–15.2 : 1 typical'],
  ['Total nitrogen', '≥ 1.0%', '1.2–1.6% typical'],
  ['Heavy metals', 'Applicable FCO limits', 'Lot-specific report'],
  ['Pathogens / weed seeds', 'Applicable FCO limits', 'Lot-specific report'],
]

export default function ProductSection({ onOpenModal, onSelectProduct }) {
  return (
    <section className="section product-section" id="products"><div className="container">
      <div className="section-heading"><span className="eyebrow">PRODUCT RANGE</span><h2>Made for practical, large-scale agriculture.</h2><p>Product details and typical specifications for initial export discussions.</p></div>
      <div className="product-grid">{products.map((product, index) => <article className="product-card" key={product.id}>
        <div className={`product-visual product-visual-${index + 1}`}><span>{index === 0 ? 'GRANULATED' : 'PELLETIZED'}</span><i className={`fa-solid ${index === 0 ? 'fa-seedling' : 'fa-leaf'}`} /></div>
        <div className="product-content"><div className="product-meta"><span className="product-badge">{product.badge}</span><span className="product-ref">{product.ref}</span></div>
          <h3>{product.title}<span>{product.size}</span></h3><p>{product.description}</p>
          <dl className="product-specs"><div><dt>Packaging</dt><dd>{product.packaging}</dd></div><div><dt>Bulk density</dt><dd>{product.density}</dd></div><div><dt>Container load</dt><dd>{product.load}</dd></div></dl>
          <div className="product-actions"><button className="button button-outline" onClick={() => onOpenModal('spec', { product: product.id })}>View technical details</button><a className="button button-gold" href="#quote" onClick={() => onSelectProduct(`${product.title} (${product.size})`)}>Request quote</a></div>
        </div>
      </article>)}</div>
      <div className="spec-table-wrap"><div className="spec-table-heading"><div><span className="eyebrow">QUALITY SNAPSHOT</span><h3>Typical product specification</h3></div><span>Confirm final values against lot COA</span></div>
        <table className="spec-table"><thead><tr><th>Parameter</th><th>Target reference</th><th>Typical batch</th></tr></thead><tbody>{specs.map(([parameter, target, typical]) => <tr key={parameter}><th scope="row">{parameter}</th><td>{target}</td><td>{typical}</td></tr>)}</tbody></table>
      </div>
    </div></section>
  )
}