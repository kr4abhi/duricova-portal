const markets = [
  { flag: '🇻🇳', country: 'Vietnam', authority: 'MARD · Decree 84/2019', tag: 'IMPORT PATHWAY', text: 'Export documentation can be prepared for review against applicable fertilizer registration and import permit requirements.', details: [['Product category', 'Organic fertilizer'], ['Documentation', 'Available on request']] },
  { flag: '🇲🇾', country: 'Malaysia', authority: 'MAQIS · DOA', tag: 'MARKET REVIEW', text: 'Coordinate with the importer to confirm current quarantine, permit, and product registration requirements before shipment.', details: [['Import permit', 'Importer to confirm'], ['Documentation', 'Available on request']] },
  { flag: '🇧🇩', country: 'Bangladesh', authority: 'DAE · Import requirements', tag: 'MARKET REVIEW', text: 'Confirm current fertilizer import approvals, tariff classification, and customs requirements with the local importer.', details: [['Port options', 'Chittagong / Benapole'], ['Documentation', 'Available on request']] },
]

export default function ComplianceSection() {
  return (
    <section className="section compliance-section" id="compliance"><div className="container">
      <div className="section-heading section-heading-light"><span className="eyebrow">EXPORT DOCUMENTATION</span><h2>Prepare for your destination market.</h2><p>Requirements change by product, shipment, and destination. Confirm local rules with your importer and authorities before booking.</p></div>
      <div className="market-grid">{markets.map((market) => <article className="market-card" key={market.country}><div className="market-top"><span className="market-flag">{market.flag}</span><span className="market-tag">{market.tag}</span></div><h3>{market.country}</h3><span className="market-authority">{market.authority}</span><p>{market.text}</p><dl>{market.details.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><a href="#quote" className="market-link">Ask about documentation <i className="fa-solid fa-arrow-right" /></a></article>)}</div>
      <p className="compliance-note"><i className="fa-solid fa-circle-info" /> This portal is informational, not legal or customs advice. Verify current import eligibility, duties, permits, and certification claims with relevant authorities.</p>
    </div></section>
  )
}