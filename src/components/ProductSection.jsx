import { useLanguage } from '../useLanguage.js'

const products = [
  {
    id: 'granulated', badge: 'primaryGrade', ref: 'DUR-GR-30', title: 'granulated',
    description: 'granulatedText', packaging: 'packagingGranulated', density: 'densityGranulated', load: 'loadGranulated',
  },
  {
    id: 'pellets', badge: 'plantationGrade', ref: 'DUR-PL-50', title: 'pellets',
    description: 'pelletsText', packaging: 'packagingPellets', density: 'densityPellets', load: 'loadPellets',
  },
]

const specs = [
  ['moisture', 'targetMoistureSpec', 'moistureRange'],
  ['carbon', 'targetCarbon', 'carbonRange'],
  ['cnRatio', 'targetCn', 'cnRange'],
  ['nitrogen', 'targetNitrogen', 'nitrogenRange'],
  ['heavyMetals', 'applicableLimits', 'lotReport'],
  ['pathogens', 'applicableLimits', 'lotReport'],
]

export default function ProductSection({ onOpenModal, onSelectProduct }) {
  const { t } = useLanguage()
  return (
    <section className="section product-section" id="products"><div className="container">
      <div className="section-heading"><span className="eyebrow">{t('productRange')}</span><h2>{t('productsTitle')}</h2><p>{t('productsText')}</p></div>
      <div className="product-grid">{products.map((product, index) => <article className="product-card" key={product.id}>
        <div className={`product-visual product-visual-${index + 1}`}><span>{t(index === 0 ? 'granulatedShort' : 'pelletized')}</span><i className={`fa-solid ${index === 0 ? 'fa-seedling' : 'fa-leaf'}`} /></div>
        <div className="product-content"><div className="product-meta"><span className="product-badge">{t(product.badge)}</span><span className="product-ref">{product.ref}</span></div>
          <h3>{t(product.title)}<span>{index === 0 ? '2.0–4.0 mm' : '4.0–6.0 mm'}</span></h3><p>{t(product.description)}</p>
          <dl className="product-specs"><div><dt>{t('packaging')}</dt><dd>{t(product.packaging)}</dd></div><div><dt>{t('bulkDensity')}</dt><dd>{t(product.density)}</dd></div><div><dt>{t('containerLoad')}</dt><dd>{t(product.load)}</dd></div></dl>
          <div className="product-actions"><button className="button button-outline" onClick={() => onOpenModal('spec', { product: product.id })}>{t('viewDetails')}</button><a className="button button-gold" href="#quote" onClick={() => onSelectProduct(product.id)}>{t('requestQuote')}</a></div>
        </div>
      </article>)}</div>
      <div className="spec-table-wrap"><div className="spec-table-heading"><div><span className="eyebrow">{t('qualitySnapshot')}</span><h3>{t('typicalSpec')}</h3></div><span>{t('confirmCoa')}</span></div>
        <table className="spec-table"><thead><tr><th>{t('parameter')}</th><th>{t('targetRef')}</th><th>{t('typicalBatch')}</th></tr></thead><tbody>{specs.map(([parameter, target, typical]) => <tr key={parameter}><th scope="row">{t(parameter)}</th><td>{t(target)}</td><td>{t(typical)}</td></tr>)}</tbody></table>
      </div>
    </div></section>
  )
}