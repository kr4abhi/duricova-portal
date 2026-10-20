import { useState } from 'react'

const initialForm = { name: '', company: '', email: '', phone: '', country: 'Vietnam', port: '', volume: '100', product: '', sample: false, privateLabel: false, cif: true, notes: '' }

export default function InquirySection({ quote, setQuote }) {
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
    setSubmitted(`Demo inquiry prepared. Reference: ${reference}. Connect this form to your business email or CRM before launch to transmit it.`)
    setForm(initialForm)
    setQuote({ product: '', port: '', volume: '100', sample: false, cif: true, notes: '' })
  }

  return (
    <section className="section inquiry-section" id="quote"><div className="container inquiry-container"><div className="inquiry-card">
      <div className="inquiry-intro"><span className="eyebrow">B2B EXPORT INQUIRY</span><h2>Let’s discuss your next order.</h2><p>Share the destination and volume you have in mind. The form currently runs as a local demo and does not send or store submissions.</p>
        <div className="inquiry-contact"><span><i className="fa-solid fa-envelope" /> <a href="mailto:hj@duricova.in">hj@duricova.in</a></span><span><i className="fa-solid fa-phone" /> <a href="tel:+919152555379">+91 9152 555 379</a></span></div>
      </div>
      <form className="inquiry-form" onSubmit={submit}>
        <div className="form-grid form-grid-2">
          <div className="field-group"><label htmlFor="full-name">Full name <span>*</span></label><input id="full-name" name="name" autoComplete="name" required value={form.name} onChange={update} placeholder="Your name" /></div>
          <div className="field-group"><label htmlFor="company">Company <span>*</span></label><input id="company" name="company" autoComplete="organization" required value={form.company} onChange={update} placeholder="Company or trading name" /></div>
          <div className="field-group"><label htmlFor="email">Business email <span>*</span></label><input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update} placeholder="you@company.com" /></div>
          <div className="field-group"><label htmlFor="phone">Phone / WhatsApp <span>*</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={update} placeholder="+ country code" /></div>
          <div className="field-group"><label htmlFor="country">Import country <span>*</span></label><select id="country" name="country" required value={form.country} onChange={update}><option>Vietnam</option><option>Malaysia</option><option>Bangladesh</option><option>Thailand</option><option>Indonesia</option><option>United Arab Emirates</option><option>Other</option></select></div>
          <div className="field-group"><label htmlFor="quote-port">Target discharge port <span>*</span></label><input id="quote-port" name="port" required value={values.port} onChange={update} placeholder="e.g. Ho Chi Minh" /></div>
          <div className="field-group"><label htmlFor="quote-volume">Estimated annual volume (MT) <span>*</span></label><input id="quote-volume" name="volume" type="number" min="20" required value={values.volume} onChange={update} /></div>
          <div className="field-group"><label htmlFor="quote-product">Product interest</label><select id="quote-product" name="product" value={values.product} onChange={update}><option value="">Select a product</option><option>Granulated Vermicompost (2.0–4.0 mm)</option><option>Enriched Bio-Organic Pellets (4.0–6.0 mm)</option></select></div>
        </div>
        <fieldset className="requirements"><legend>Additional requirements</legend><label><input type="checkbox" name="sample" checked={values.sample} onChange={update} /> Request a 2.5 kg sample</label><label><input type="checkbox" name="privateLabel" checked={form.privateLabel} onChange={update} /> Discuss private-label packaging</label><label><input type="checkbox" name="cif" checked={values.cif} onChange={update} /> Include CIF freight discussion</label></fieldset>
        <div className="field-group"><label htmlFor="notes">Project notes</label><textarea id="notes" name="notes" rows="4" value={values.notes} onChange={update} placeholder="Crop use, packaging, timing, or other details" /></div>
        <button type="submit" className="button button-forest submit-button">Prepare inquiry <i className="fa-solid fa-arrow-right" /></button>
        {submitted && <p className="form-success" role="status">{submitted}</p>}
      </form>
    </div></div></section>
  )
}