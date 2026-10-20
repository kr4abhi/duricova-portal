import { useLanguage } from '../useLanguage.js'

export default function HeroSection({ onRequestSample, onOpenModal }) {
  const { t } = useLanguage()
  const trustPoints = [
    ['fa-passport', t('trustVietnam'), t('trustVietnamSub')],
    ['fa-shield-halved', t('trustMalaysia'), t('trustMalaysiaSub')],
    ['fa-vial-circle-check', t('trustNabl'), t('trustNablSub')],
  ]

  return (
    <>
      <div className="export-ticker"><div className="container ticker-inner"><span className="ticker-tag">{t('exportDesk')}</span><p><strong>{t('nagpur')}</strong> {t('ticker')}</p></div></div>
      <section className="hero" id="top"><div className="hero-pattern" />
        <div className="container hero-grid">
          <div className="hero-copy"><span className="eyebrow eyebrow-gold"><i className="fa-solid fa-award" /> {t('exportReady')}</span>
            <h1>{t('heroTitle')} <span>{t('precision')}</span></h1>
            <p className="hero-lede">{t('heroText')}</p>
            <div className="hero-actions"><button className="button button-gold button-large" onClick={onRequestSample}>{t('requestSample')} <i className="fa-solid fa-arrow-right" /></button><a className="button button-glass button-large" href="#tools"><i className="fa-solid fa-calculator" /> {t('estimateFreight')}</a></div>
            <div className="hero-stats"><div><strong>2–4 mm</strong><span>{t('granuleSize')}</span></div><div><strong>22–24 MT</strong><span>{t('payload')}</span></div><div><strong>≤ 15%</strong><span>{t('targetMoisture')}</span></div></div>
          </div>
          <div className="product-showcase"><div className="showcase-topline"><span>{t('exportSpec')}</span><span className="live-dot">{t('available')}</span></div>
            <div className="granule-art" aria-hidden="true"><span /><span /><span /><span /><span /><i className="fa-solid fa-seedling" /></div>
            <h2>DURICOVA® Granules 3.0</h2><p className="showcase-subtitle">{t('lowDust')}</p>
            <div className="showcase-specs"><div><span>{t('granuleSize')}</span><strong>2.0–4.0 mm</strong></div><div><span>{t('bulkDensity')}</span><strong>0.75–0.90 t/m³</strong></div><div><span>{t('packaging')}</span><strong>25 kg PP + LDPE liner</strong></div><div><span>{t('qualityProcess')}</span><strong className="text-green">{t('lotQc')}</strong></div></div>
            <button className="button button-glass showcase-button" onClick={() => onOpenModal('coa', { batch: 'DUR-2026-B12' })}><i className="fa-solid fa-file-contract" /> {t('inspectCoa')}</button>
          </div>
        </div>
        <div className="container trust-grid">{trustPoints.map(([icon, title, description]) => <div className="trust-item" key={title}><i className={`fa-solid ${icon}`} /><div><strong>{title}</strong><span>{description}</span></div></div>)}</div>
      </section>
    </>
  )
}