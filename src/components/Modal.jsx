import { useEffect } from 'react'

const specs = {
  granulated: { title: 'Granulated Vermicompost · 2.0–4.0 mm', rows: [['Process', 'Vacuum pan granulation with organic binder technology'], ['Physical form', 'Dark brown, spherical, free-flowing granules'], ['Moisture', 'Typical target 12–15%; confirm against lot report'], ['Bulk density', 'Approximately 0.85 t/m³; batch and handling dependent'], ['Recommended use', 'Horticulture, paddy, sugarcane, and greenhouse crops']] },
  pellets: { title: 'Enriched Bio-Organic Pellets · 4.0–6.0 mm', rows: [['Process', 'Cold extrusion compression'], ['Physical form', 'Cylindrical pellets; confirm strength by product lot'], ['Bulk density', 'Approximately 0.80 t/m³; batch and handling dependent'], ['Enrichment', 'Humic substances and beneficial microbes; confirm formulation'], ['Recommended use', 'Plantation crops, orchards, and commercial agriculture']] },
}

export default function Modal({ modal, onClose }) {
  useEffect(() => {
    if (!modal) return undefined
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    document.body.classList.add('modal-open')
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.classList.remove('modal-open') }
  }, [modal, onClose])

  if (!modal) return null
  const spec = specs[modal.product]

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" aria-label="Close dialog" onClick={onClose}><i className="fa-solid fa-xmark" /></button>
        {modal.type === 'coa' && <><span className="eyebrow">SAMPLE LOT PREVIEW</span><h2 id="modal-title">Certificate of Analysis</h2><p className="modal-lede">Batch: <strong>{modal.batch}</strong></p><div className="coa-preview"><div><span>Product</span><strong>Granulated vermicompost</strong></div><div><span>Lot reference</span><strong>{modal.batch}</strong></div><div><span>Moisture</span><strong>14.2% · sample value</strong></div><div><span>Organic carbon</span><strong>15.1% · sample value</strong></div><div><span>Microbial / pathogen screen</span><strong>Refer to verified lot report</strong></div></div><p className="demo-note"><i className="fa-solid fa-triangle-exclamation" /> Demonstration content only—not an official or authenticated lab certificate.</p></>}
        {modal.type === 'spec' && spec && <><span className="eyebrow">PRODUCT DETAILS</span><h2 id="modal-title">{spec.title}</h2><div className="modal-spec-list">{spec.rows.map(([label, value]) => <div key={label}><strong>{label}</strong><span>{value}</span></div>)}</div><p className="demo-note">Values are indicative. Request product-specific documentation and verify the final lot COA before purchase.</p></>}
        {modal.type === 'map' && <><span className="eyebrow">PLANT LOCATION</span><h2 id="modal-title">Nagpur, Maharashtra</h2><div className="map-placeholder"><i className="fa-solid fa-location-dot" /><strong>21.1458° N, 79.0882° E</strong><span>Nagpur Industrial Area, India</span></div><p className="modal-lede">Contact the export desk to coordinate facility visits and shipment logistics.</p></>}
      </section>
    </div>
  )
}