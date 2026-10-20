import { useEffect } from 'react'
import { useLanguage } from '../useLanguage.js'

const specs = {
  granulated: { title: 'granulated', size: '2.0–4.0 mm', rows: [['specProcess', 'specProcessGranulated'], ['specForm', 'specFormGranulated'], ['specMoisture', 'specMoistureGranulated'], ['specDensity', 'specDensityGranulated'], ['recommendedUse', 'useGranulated']] },
  pellets: { title: 'pellets', size: '4.0–6.0 mm', rows: [['specProcess', 'specProcessPellets'], ['specForm', 'specFormPellets'], ['specMoisture', 'specMoisturePellets'], ['specDensity', 'specDensityPellets'], ['recommendedUse', 'usePellets']] },
}

export default function Modal({ modal, onClose }) {
  const { t } = useLanguage()
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
        <button className="modal-close" aria-label={t('closeMenu')} onClick={onClose}><i className="fa-solid fa-xmark" /></button>
        {modal.type === 'coa' && <><span className="eyebrow">{t('samplePreview')}</span><h2 id="modal-title">{t('certificate')}</h2><p className="modal-lede">{t('lotReference')}: <strong>{modal.batch}</strong></p><div className="coa-preview"><div><span>{t('product')}</span><strong>{t('granulated')}</strong></div><div><span>{t('lotReference')}</span><strong>{modal.batch}</strong></div><div><span>{t('moisture')}</span><strong>{t('sampleValue')}</strong></div><div><span>{t('carbon')}</span><strong>{t('carbonSample')}</strong></div><div><span>{t('microbial')}</span><strong>{t('referLot')}</strong></div></div><p className="demo-note"><i className="fa-solid fa-triangle-exclamation" /> {t('demoCoaWarning')}</p></>}
        {modal.type === 'spec' && spec && <><span className="eyebrow">{t('productDetails')}</span><h2 id="modal-title">{t(spec.title)} · {spec.size}</h2><div className="modal-spec-list">{spec.rows.map(([label, value]) => <div key={label}><strong>{t(label)}</strong><span>{t(value)}</span></div>)}</div><p className="demo-note">{t('indicativeValues')}</p></>}
        {modal.type === 'map' && <><span className="eyebrow">{t('location')}</span><h2 id="modal-title">Nagpur, Maharashtra</h2><div className="map-placeholder"><i className="fa-solid fa-location-dot" /><strong>21.1458° N, 79.0882° E</strong><span>{t('nagpurIndia')}</span></div><p className="modal-lede">{t('locationText')}</p></>}
      </section>
    </div>
  )
}