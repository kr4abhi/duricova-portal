import { useState } from 'react'
import { getFreightEstimate, PORTS } from '../utils/freight.js'

const lots = ['DUR-2026-B08', 'DUR-2026-B09', 'DUR-2026-B12']

export default function ExportTools({ onOpenModal, onAttachEstimate }) {
  const [tab, setTab] = useState('coa')
  const [batch, setBatch] = useState('DUR-2026-B12')
  const [batchError, setBatchError] = useState('')
  const [tonnage, setTonnage] = useState(100)
  const [portIndex, setPortIndex] = useState(0)
  const [currency, setCurrency] = useState('USD')
  const [packageSize, setPackageSize] = useState('25kg')
  const estimate = getFreightEstimate({ tonnage: Number(tonnage), port: PORTS[portIndex], currency, packageSize })

  const verify = () => {
    const normalized = batch.trim().toUpperCase()
    if (!normalized) {
      setBatchError('Enter a batch or lot number to continue.')
      return
    }
    setBatchError('')
    onOpenModal('coa', { batch: normalized })
  }

  return (
    <section className="section tools-section" id="tools">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">B2B EXPORT TOOLBOX</span><h2>Plan your next shipment with confidence.</h2><p>Check sample lot information or estimate container requirements and freight.</p></div>
        <div className="tool-tabs" role="tablist" aria-label="Export tools">
          <button role="tab" aria-selected={tab === 'coa'} className={tab === 'coa' ? 'is-active' : ''} onClick={() => setTab('coa')}><i className="fa-solid fa-qrcode" /> Batch quality lookup</button>
          <button role="tab" aria-selected={tab === 'freight'} className={tab === 'freight' ? 'is-active' : ''} onClick={() => setTab('freight')}><i className="fa-solid fa-calculator" /> Freight estimator</button>
        </div>
        {tab === 'coa' ? (
          <div className="tool-panel coa-panel" role="tabpanel">
            <div className="tool-icon"><i className="fa-solid fa-microscope" /></div><h3>Certificate of Analysis lookup</h3>
            <p>Enter the lot number printed on your DURICOVA® export sack. Choose a sample lot to preview the demo report.</p>
            <div className="lot-chips">{lots.map((lot) => <button key={lot} onClick={() => { setBatch(lot); setBatchError('') }}>{lot}{lot.endsWith('B12') ? ' · Latest' : ''}</button>)}</div>
            <form className="batch-search" onSubmit={(event) => { event.preventDefault(); verify() }}>
              <label className="sr-only" htmlFor="batch-number">Batch or lot number</label><input id="batch-number" value={batch} onChange={(event) => setBatch(event.target.value)} placeholder="e.g. DUR-2026-B08" />
              <button className="button button-forest" type="submit"><i className="fa-solid fa-magnifying-glass" /> Verify batch</button>
            </form>
            {batchError && <p className="field-error" role="alert">{batchError}</p>}
            <p className="demo-note"><i className="fa-solid fa-circle-info" /> Sample lot results are illustrative and not connected to a live lab database.</p>
          </div>
        ) : (
          <div className="estimator-layout" role="tabpanel">
            <div className="estimator-controls">
              <div className="field-group"><label htmlFor="tonnage">Target order volume <strong>{tonnage} MT</strong></label><input id="tonnage" type="range" min="20" max="500" step="10" value={tonnage} onChange={(event) => setTonnage(event.target.value)} /><div className="range-labels"><span>20 MT</span><span>500 MT</span></div></div>
              <div className="estimator-selects">
                <div className="field-group"><label htmlFor="port">Discharge port</label><select id="port" value={portIndex} onChange={(event) => setPortIndex(Number(event.target.value))}>{PORTS.map((item, index) => <option value={index} key={item.name}>{item.name} (${item.rate}/FCL)</option>)}</select></div>
                <div className="field-group"><label htmlFor="currency">Display currency</label><select id="currency" value={currency} onChange={(event) => setCurrency(event.target.value)}><option value="USD">USD · US Dollar</option><option value="INR">INR · Indian Rupee</option><option value="VND">VND · Vietnamese Dong</option></select></div>
                <div className="field-group field-span"><label htmlFor="package-size">Packaging choice</label><select id="package-size" value={packageSize} onChange={(event) => setPackageSize(event.target.value)}><option value="25kg">25 kg bags</option><option value="1000kg">1,000 kg FIBC jumbo sacks</option></select></div>
              </div>
              <div className="comparison-card"><div className="comparison-heading"><strong>Container load comparison</strong><span>Illustrative capacity</span></div><div className="comparison-line"><span>DURICOVA®</span><strong>{estimate.durableContainers} containers · 24 MT/FCL</strong></div><div className="meter"><span /></div><div className="comparison-line"><span>Unrefined compost</span><strong>{estimate.conventionalContainers} containers · 14 MT/FCL</strong></div><div className="meter meter-muted"><span /></div></div>
            </div>
            <div className="estimate-card"><div className="estimate-card-top"><span>ESTIMATED FREIGHT ANALYSIS</span><i className="fa-solid fa-chart-line" /></div><div className="estimate-stats"><div><span>Containers saved*</span><strong>{estimate.containersSaved} FCL</strong><small>vs. unrefined cargo</small></div><div><span>Potential freight difference*</span><strong className="saving-value">{estimate.freightSavings}</strong><small>~{estimate.savingsPercent}% fewer containers</small></div></div><div className="estimate-details"><div><span>Shipment volume</span><strong>{tonnage} metric tons</strong></div><div><span>Packaging estimate</span><strong>{estimate.bagCount} {estimate.packageLabel}</strong></div><div><span>Estimated freight*</span><strong>{estimate.totalFreight}</strong></div></div><button className="button button-gold estimate-button" onClick={() => onAttachEstimate(estimate)}>Add estimate to quote <i className="fa-solid fa-arrow-right" /></button><p className="estimate-disclaimer">*Indicative only. Port charges and final rates require confirmation from your freight provider.</p></div>
          </div>
        )}
      </div>
    </section>
  )
}