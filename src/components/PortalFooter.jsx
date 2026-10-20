export default function PortalFooter({ onOpenModal }) {
  return (
    <footer className="site-footer"><div className="container">
      <div className="footer-main"><div className="footer-brand"><a className="brand brand-inverse" href="#top"><span className="brand-mark"><i className="fa-solid fa-seedling" /></span><span><strong>DURICOVA<span className="brand-reg">®</span></strong><small>ORGANICS · BY MANNIVA SOILTECH</small></span></a><p>Bio-organic soil inputs for agricultural partners. Contact the export team to discuss product information and destination requirements.</p><span className="footer-hs">HS classification shown for reference: 3101.00.99</span></div>
        <div className="footer-column"><h3>Explore</h3><a href="#products">Products</a><a href="#tools">Freight estimator</a><a href="#compliance">Export documentation</a><a href="#quote">Request a quote</a></div>
        <div className="footer-column"><h3>Contact</h3><a href="mailto:hj@duricova.in">hj@duricova.in</a><a href="tel:+919152555379">+91 9152 555 379</a><span>Nagpur, Maharashtra, India</span><button onClick={() => onOpenModal('map')}>Plant location details</button></div>
      </div>
      <div className="footer-bottom"><span>© 2026 MANNIVA Soiltech Pvt. Ltd. · DURICOVA®</span><span>Product and compliance information should be verified before purchase.</span></div>
    </div></footer>
  )
}