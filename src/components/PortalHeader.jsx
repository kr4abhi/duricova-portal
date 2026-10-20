import { useState } from 'react'

const links = [['About', '#about'], ['Products', '#products'], ['Export tools', '#tools'], ['Compliance', '#compliance'], ['Request a quote', '#quote']]

export default function PortalHeader({ onOpenModal }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState('EN')
  const [currency, setCurrency] = useState('USD')

  return (
    <>
      <div className="utility-bar"><div className="container utility-inner">
        <div className="utility-contact"><span className="desk-label"><i className="fa-solid fa-headset" /> Export desk</span><a href="tel:+919152555379">+91 9152 555 379</a><a href="mailto:hj@duricova.in">hj@duricova.in</a><span className="hs-code">HS Code 3101.00.99</span></div>
        <div className="utility-selectors">
          <label><i className="fa-solid fa-globe" /><span className="sr-only">Language</span><select value={language} onChange={(event) => setLanguage(event.target.value)}><option value="EN">EN · English</option><option value="VI">VI · Tiếng Việt</option><option value="MS">MS · Bahasa Melayu</option></select></label>
          <label><i className="fa-solid fa-coins" /><span className="sr-only">Currency</span><select value={currency} onChange={(event) => setCurrency(event.target.value)}><option value="USD">USD · $</option><option value="INR">INR · ₹</option><option value="VND">VND · ₫</option></select></label>
        </div>
      </div></div>
      <header className="site-header"><div className="container header-inner">
        <a className="brand" href="#top" aria-label="DURICOVA Organics home"><span className="brand-mark"><i className="fa-solid fa-seedling" /></span><span><strong>DURICOVA<span className="brand-reg">®</span></strong><small>ORGANICS · BY MANNIVA SOILTECH</small></span></a>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <button className="button button-outline nav-coa" onClick={() => onOpenModal('coa', { batch: 'DUR-2026-B12' })}><i className="fa-solid fa-shield-halved" /> Verify batch</button>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} /></button>
      </div></header>
    </>
  )
}