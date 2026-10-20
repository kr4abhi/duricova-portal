import { useLanguage } from '../useLanguage.js'

const markets = [
  { flag: '🇻🇳', country: 'Vietnam', authority: 'MARD · Decree 84/2019', tag: 'importPathway', text: 'vietnamText', details: [['productCategory', 'organicFertilizer'], ['documentation', 'availableOnRequest']] },
  { flag: '🇲🇾', country: 'Malaysia', authority: 'MAQIS · DOA', tag: 'marketReview', text: 'malaysiaText', details: [['importPermit', 'importerConfirm'], ['documentation', 'availableOnRequest']] },
  { flag: '🇧🇩', country: 'Bangladesh', authority: 'DAE · Import requirements', tag: 'marketReview', text: 'bangladeshText', details: [['portOptions', 'chittagong'], ['documentation', 'availableOnRequest']] },
]

export default function ComplianceSection() {
  const { t } = useLanguage()
  return (
    <section className="section compliance-section" id="compliance"><div className="container">
      <div className="section-heading section-heading-light"><span className="eyebrow">{t('documentation')}</span><h2>{t('complianceTitle')}</h2><p>{t('complianceText')}</p></div>
      <div className="market-grid">{markets.map((market) => <article className="market-card" key={market.country}><div className="market-top"><span className="market-flag">{market.flag}</span><span className="market-tag">{t(market.tag)}</span></div><h3>{market.country}</h3><span className="market-authority">{market.authority}</span><p>{t(market.text)}</p><dl>{market.details.map(([label, value]) => <div key={label}><dt>{t(label)}</dt><dd>{t(value)}</dd></div>)}</dl><a href="#quote" className="market-link">{t('askDocuments')} <i className="fa-solid fa-arrow-right" /></a></article>)}</div>
      <p className="compliance-note"><i className="fa-solid fa-circle-info" /> {t('complianceDisclaimer')}</p>
    </div></section>
  )
}