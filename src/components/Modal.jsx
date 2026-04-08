import { useState } from 'react'

export default function Modal({ aberto, onFechar }) {
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({
    nome: '',
    ideia: '',
    local: '',
    whatsapp: ''
  })

  if (!aberto) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleEnviar = async (e) => {
    e.preventDefault()
    setEnviando(true)

    const dados = {
      access_key: 'a32315c9-c7ab-4054-bde3-5776a284e5bc',
      subject: 'Novo orçamento — Delakay',
      ...form
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    })

    if (res.ok) {
      setEnviado(true)
    }

    setEnviando(false)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onFechar}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={onFechar}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          ✕
        </button>

        {enviado ? (
          // Tela de sucesso
          <div className="text-center flex flex-col items-center gap-4 py-6">
            <p className="text-amber-400 text-4xl">✓</p>
            <h2 className="text-white text-xl font-semibold">
              Mensagem enviada!
            </h2>
            <p className="text-zinc-400 text-sm">
              A Delakay vai entrar em contato pelo seu WhatsApp em breve.
            </p>
            <button
              onClick={onFechar}
              className="mt-2 text-amber-400 hover:text-amber-300 text-sm transition-colors"
            >
              Fechar
            </button>
          </div>
        ) : (
          // Formulário
          <>
            <h2 className="text-white text-xl font-semibold mb-1">
              Fazer orçamento
            </h2>
            <p className="text-zinc-500 text-sm mb-6">
              Descreva sua ideia e a Delakay entra em contato.
            </p>

            <form onSubmit={handleEnviar} className="flex flex-col gap-4">
              <input
                name="nome"
                placeholder="Seu nome"
                required
                onChange={handleChange}
                className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
              <textarea
                name="ideia"
                placeholder="Descreva sua ideia de tatuagem"
                required
                rows={3}
                onChange={handleChange}
                className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
              />
              <input
                name="local"
                placeholder="Tamanho e local do corpo (ex: 10cm, antebraço)"
                onChange={handleChange}
                className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
              <input
                name="whatsapp"
                placeholder="Seu WhatsApp (com DDD)"
                required
                onChange={handleChange}
                className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />

              <button
                type="submit"
                disabled={enviando}
                className="mt-2 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-zinc-950 font-semibold py-3 rounded-full transition-all duration-300"
              >
                {enviando ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}