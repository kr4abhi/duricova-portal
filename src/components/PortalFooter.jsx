import { useLanguage } from '../useLanguage.js'

export default function PortalFooter({ onOpenModal }) {
  const { t } = useLanguage()
  return (
    <footer className="site-footer"><div className="container">
      <div className="footer-main"><div className="footer-brand"><a className="brand brand-inverse" href="#top"><span className="brand-mark"><i className="fa-solid fa-seedling" /></span><span><strong>DURICOVA<span className="brand-reg">®</span></strong><small>ORGANICS · BY MANNIVA SOILTECH</small></span></a><p>{t('contactEmail')}</p><span className="footer-hs">{t('hsReference')}</span></div>
        <div className="footer-column"><h3>{t('explore')}</h3><a href="#products">{t('navProducts')}</a><a href="#tools">{t('freightCalc')}</a><a href="#compliance">{t('exportDocs')}</a><a href="#quote">{t('navQuote')}</a></div>
        <div className="footer-column"><h3>{t('contact')}</h3><a href="mailto:hj@duricova.in">hj@duricova.in</a><a href="tel:+919152555379">+91 9152 555 379</a><span>Nagpur, Maharashtra, India</span><button onClick={() => onOpenModal('map')}>{t('plantLocation')}</button></div>
      </div>
      <div className="footer-bottom"><span>© 2026 MANNIVA Soiltech Pvt. Ltd. · DURICOVA®</span><span>{t('footerDisclaimer')}</span></div>
    </div></footer>
  )
}