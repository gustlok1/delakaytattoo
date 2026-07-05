import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Portfolio from './components/Portfolio'
import Depoimentos from './components/Depoimentos'
import Footer from './components/Footer'
import Modal from './components/Modal'
import WhatsappButton from './components/WhatsappButton'
import { useState } from 'react'

function App() {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <main className="bg-zinc-950 text-white">
      <Hero onAbrirModal={() => setModalAberto(true)} />
      <Portfolio onAbrirModal={() => setModalAberto(true)} />
      <Sobre />
      <Depoimentos onAbrirModal={() => setModalAberto(true)} />
      <Footer />
      <Modal aberto={modalAberto} onFechar={() => setModalAberto(false)} />
      <WhatsappButton />
    </main>
  )
}

export default App