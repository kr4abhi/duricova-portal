import { useState } from 'react'
import { useLanguage } from '../useLanguage.js'

const initialForm = { name: '', company: '', email: '', phone: '', country: 'Vietnam', port: '', volume: '100', product: '', sample: false, privateLabel: false, cif: true, notes: '' }

export default function InquirySection({ quote, setQuote }) {
  const { t } = useLanguage()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState('')
  const values = { ...form, ...quote, port: quote.port || form.port, product: quote.product || form.product }
  const update = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    if (['product', 'port', 'volume', 'sample', 'cif', 'notes'].includes(name)) {
      setQuote((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    }
    setSubmitted('')
  }

  const submit = (event) => {
    event.preventDefault()
    const reference = `DUR-INQ-${Math.floor(100000 + Math.random() * 900000)}`
    setSubmitted(t('submitNotice').replace('{reference}', reference))
    setForm(initialForm)
    setQuote({ product: '', port: '', volume: '100', sample: false, cif: true, notes: '' })
  }

  return (
    <section className="section inquiry-section" id="quote"><div className="container inquiry-container"><div className="inquiry-card">
      <div className="inquiry-intro"><span className="eyebrow">{t('inquiryEyebrow')}</span><h2>{t('inquiryTitle')}</h2><p>{t('inquiryIntro')}</p>
        <div className="inquiry-contact"><span><i className="fa-solid fa-envelope" /> <a href="mailto:hj@duricova.in">hj@duricova.in</a></span><span><i className="fa-solid fa-phone" /> <a href="tel:+919152555379">+91 9152 555 379</a></span></div>
      </div>
      <form className="inquiry-form" onSubmit={submit}>
        <div className="form-grid form-grid-2">
          <div className="field-group"><label htmlFor="full-name">{t('fullName')} <span>*</span></label><input id="full-name" name="name" autoComplete="name" required value={form.name} onChange={update} placeholder={t('yourName')} /></div>
          <div className="field-group"><label htmlFor="company">{t('company')} <span>*</span></label><input id="company" name="company" autoComplete="organization" required value={form.company} onChange={update} placeholder={t('companyPlaceholder')} /></div>
          <div className="field-group"><label htmlFor="email">{t('businessEmail')} <span>*</span></label><input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update} placeholder="you@company.com" /></div>
          <div className="field-group"><label htmlFor="phone">{t('phone')} <span>*</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={update} placeholder={t('phonePlaceholder')} /></div>
          <div className="field-group"><label htmlFor="country">{t('importCountry')} <span>*</span></label><select id="country" name="country" required value={form.country} onChange={update}><option>Vietnam</option><option>Malaysia</option><option>Bangladesh</option><option>Thailand</option><option>Indonesia</option><option>United Arab Emirates</option><option value="Other">{t('otherCountry')}</option></select></div>
          <div className="field-group"><label htmlFor="quote-port">{t('targetPort')} <span>*</span></label><input id="quote-port" name="port" required value={values.port} onChange={update} placeholder={t('portPlaceholder')} /></div>
          <div className="field-group"><label htmlFor="quote-volume">{t('annualVolume')} <span>*</span></label><input id="quote-volume" name="volume" type="number" min="20" required value={values.volume} onChange={update} /></div>
          <div className="field-group"><label htmlFor="quote-product">{t('productInterest')}</label><select id="quote-product" name="product" value={values.product} onChange={update}><option value="">{t('selectProduct')}</option><option value="granulated">{t('granulated')} (2.0–4.0 mm)</option><option value="pellets">{t('pellets')} (4.0–6.0 mm)</option></select></div>
        </div>
        <fieldset className="requirements"><legend>{t('requirements')}</legend><label><input type="checkbox" name="sample" checked={values.sample} onChange={update} /> {t('sampleRequest')}</label><label><input type="checkbox" name="privateLabel" checked={form.privateLabel} onChange={update} /> {t('privateLabel')}</label><label><input type="checkbox" name="cif" checked={values.cif} onChange={update} /> {t('cif')}</label></fieldset>
        <div className="field-group"><label htmlFor="notes">{t('projectNotes')}</label><textarea id="notes" name="notes" rows="4" value={values.notes} onChange={update} placeholder={t('notesPlaceholder')} /></div>
        <button type="submit" className="button button-forest submit-button">{t('prepareInquiry')} <i className="fa-solid fa-arrow-right" /></button>
        {submitted && <p className="form-success" role="status">{submitted}</p>}
      </form>
    </div></div></section>
  )
}