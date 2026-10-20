import { useState } from 'react'
import { getFreightEstimate, PORTS } from '../utils/freight.js'
import { useLanguage } from '../useLanguage.js'

const lots = ['DUR-2026-B08', 'DUR-2026-B09', 'DUR-2026-B12']

export default function ExportTools({ onOpenModal, onAttachEstimate }) {
  const { t } = useLanguage()
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
      setBatchError(t('batchError'))
      return
    }
    setBatchError('')
    onOpenModal('coa', { batch: normalized })
  }

  return (
    <section className="section tools-section" id="tools">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">{t('toolbox')}</span><h2>{t('toolsTitle')}</h2><p>{t('toolsText')}</p></div>
        <div className="tool-tabs" role="tablist" aria-label={t('navTools')}>
          <button role="tab" aria-selected={tab === 'coa'} className={tab === 'coa' ? 'is-active' : ''} onClick={() => setTab('coa')}><i className="fa-solid fa-qrcode" /> {t('batchLookup')}</button>
          <button role="tab" aria-selected={tab === 'freight'} className={tab === 'freight' ? 'is-active' : ''} onClick={() => setTab('freight')}><i className="fa-solid fa-calculator" /> {t('freightEstimator')}</button>
        </div>
        {tab === 'coa' ? (
          <div className="tool-panel coa-panel" role="tabpanel">
            <div className="tool-icon"><i className="fa-solid fa-microscope" /></div><h3>{t('coaLookup')}</h3>
            <p>{t('batchPrompt')}</p>
            <div className="lot-chips">{lots.map((lot) => <button key={lot} onClick={() => { setBatch(lot); setBatchError('') }}>{lot}{lot.endsWith('B12') ? t('latest') : ''}</button>)}</div>
            <form className="batch-search" onSubmit={(event) => { event.preventDefault(); verify() }}>
              <label className="sr-only" htmlFor="batch-number">{t('batchLabel')}</label><input id="batch-number" value={batch} onChange={(event) => setBatch(event.target.value)} placeholder="e.g. DUR-2026-B08" />
              <button className="button button-forest" type="submit"><i className="fa-solid fa-magnifying-glass" /> {t('verify')}</button>
            </form>
            {batchError && <p className="field-error" role="alert">{batchError}</p>}
            <p className="demo-note"><i className="fa-solid fa-circle-info" /> {t('sampleNotice')}</p>
          </div>
        ) : (
          <div className="estimator-layout" role="tabpanel">
            <div className="estimator-controls">
              <div className="field-group"><label htmlFor="tonnage">{t('orderVolume')} <strong>{tonnage} MT</strong></label><input id="tonnage" type="range" min="20" max="500" step="10" value={tonnage} onChange={(event) => setTonnage(event.target.value)} /><div className="range-labels"><span>20 MT</span><span>500 MT</span></div></div>
              <div className="estimator-selects">
                <div className="field-group"><label htmlFor="port">{t('dischargePort')}</label><select id="port" value={portIndex} onChange={(event) => setPortIndex(Number(event.target.value))}>{PORTS.map((item, index) => <option value={index} key={item.name}>{item.name} (${item.rate}/FCL)</option>)}</select></div>
                <div className="field-group"><label htmlFor="currency">{t('displayCurrency')}</label><select id="currency" value={currency} onChange={(event) => setCurrency(event.target.value)}><option value="USD">USD · US Dollar</option><option value="INR">INR · Indian Rupee</option><option value="VND">VND · Vietnamese Dong</option></select></div>
                <div className="field-group field-span"><label htmlFor="package-size">{t('packagingChoice')}</label><select id="package-size" value={packageSize} onChange={(event) => setPackageSize(event.target.value)}><option value="25kg">{t('bag25')}</option><option value="1000kg">{t('fibc')}</option></select></div>
              </div>
              <div className="comparison-card"><div className="comparison-heading"><strong>{t('containerCompare')}</strong><span>{t('illustrativeCapacity')}</span></div><div className="comparison-line"><span>DURICOVA®</span><strong>{estimate.durableContainers} {t('containers')} · 24 MT/FCL</strong></div><div className="meter"><span /></div><div className="comparison-line"><span>{t('refined')}</span><strong>{estimate.conventionalContainers} {t('containers')} · 14 MT/FCL</strong></div><div className="meter meter-muted"><span /></div></div>
            </div>
            <div className="estimate-card"><div className="estimate-card-top"><span>{t('estimatedAnalysis')}</span><i className="fa-solid fa-chart-line" /></div><div className="estimate-stats"><div><span>{t('containersSaved')}</span><strong>{estimate.containersSaved} FCL</strong><small>{t('vsUnrefined')}</small></div><div><span>{t('freightDifference')}</span><strong className="saving-value">{estimate.freightSavings}</strong><small>~{estimate.savingsPercent}% {t('fewerContainers')}</small></div></div><div className="estimate-details"><div><span>{t('shipmentVolume')}</span><strong>{tonnage} MT</strong></div><div><span>{t('packageEstimate')}</span><strong>{estimate.bagCount} {estimate.packageLabel}</strong></div><div><span>{t('estimatedFreight')}</span><strong>{estimate.totalFreight}</strong></div></div><button className="button button-gold estimate-button" onClick={() => onAttachEstimate(estimate)}>{t('addEstimate')} <i className="fa-solid fa-arrow-right" /></button><p className="estimate-disclaimer">{t('freightDisclaimer')}</p></div>
          </div>
        )}
      </div>
    </section>
  )
}