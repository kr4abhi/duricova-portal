import { useState } from 'react'
import PortalHeader from './components/PortalHeader.jsx'
import HeroSection from './components/HeroSection.jsx'
import ExportTools from './components/ExportTools.jsx'
import ProductSection from './components/ProductSection.jsx'
import ComplianceSection from './components/ComplianceSection.jsx'
import InquirySection from './components/InquirySection.jsx'
import PortalFooter from './components/PortalFooter.jsx'
import Modal from './components/Modal.jsx'
import './App.css'

function App() {
  const [modal, setModal] = useState(null)
  const [quote, setQuote] = useState({ product: '', port: '', volume: '100', sample: false, cif: true, notes: '' })

  const openModal = (type, data = {}) => setModal({ type, ...data })
  const attachEstimate = (estimate) => {
    setQuote((current) => ({ ...current, port: estimate.port, volume: String(estimate.tonnage), cif: true }))
    document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' })
  }
  const requestSample = () => {
    setQuote((current) => ({ ...current, sample: true }))
    document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <PortalHeader onOpenModal={openModal} />
      <main>
        <HeroSection onRequestSample={requestSample} onOpenModal={openModal} />
        <ExportTools onOpenModal={openModal} onAttachEstimate={attachEstimate} />
        <ProductSection onOpenModal={openModal} onSelectProduct={(product) => setQuote((current) => ({ ...current, product }))} />
        <ComplianceSection />
        <InquirySection quote={quote} setQuote={setQuote} />
      </main>
      <PortalFooter onOpenModal={openModal} />
      <a className="whatsapp-float" href="https://wa.me/919152555379?text=Hello%20DURICOVA%20Export%20Desk%2C%20I%20am%20interested%20in%20an%20export%20quotation." target="_blank" rel="noreferrer" aria-label="Chat with the export desk on WhatsApp">
        <i className="fa-brands fa-whatsapp" aria-hidden="true" /><span>Chat with export desk</span>
      </a>
      <Modal modal={modal} onClose={() => setModal(null)} />
    </>
  )
}

export default App