import { useState } from 'react'

import bw1 from '../assets/images/blackwork/tatto4.jpeg'
import bw2 from '../assets/images/blackwork/tatto5.jpeg'
import bw3 from '../assets/images/blackwork/tatto6.jpeg'

import fl1 from '../assets/images/fineline/tatto2.jpeg'
import fl2 from '../assets/images/fineline/tatto7.PNG'
import fl3 from '../assets/images/fineline/tatto8.PNG'

import ou1 from '../assets/images/others/tatto1.jpeg'
import ou2 from '../assets/images/others/tatto3.jpeg'

const categorias = [
  {
    id: 'fineline',
    label: 'Fine Line',
    fotos: [fl1, fl2, fl3],
  },
  {
    id: 'blackwork',
    label: 'Blackwork',
    fotos: [bw1, bw2, bw3],
  },
]

export default function Portfolio({ onAbrirModal }) {
  const [ativa, setAtiva] = useState('fineline')
  const [fotoAtiva, setFotoAtiva] = useState(0)

  const categoriaAtual = categorias.find((c) => c.id === ativa)

  const handleCategoria = (id) => {
    setAtiva(id)
    setFotoAtiva(0)
  }

  const mensagem = encodeURIComponent("Olá Delakay! Vim pelo site e gostaria de fazer um orçamento.")
  
  return (
    <section className="py-6 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <p className="text-amber-400 tracking-[0.3em] text-sm uppercase mb-4">
            Portfólio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Especialidades
          </h2>
        </div>

        {/* Abas */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categorias.map((c) => (
            <button
              key={c.id}
              onClick={() => handleCategoria(c.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                ativa === c.id
                  ? 'bg-amber-400 text-zinc-950'
                  : 'border border-zinc-700 text-zinc-400 hover:border-amber-400 hover:text-amber-400'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        
        {/* Foto principal — proporção 1:1 em todos os tamanhos */}
        <div className="relative aspect-square max-w-2xl mx-auto rounded-2xl overflow-hidden mb-4">
          <img
            key={fotoAtiva}
            src={categoriaAtual.fotos[fotoAtiva]}
            alt={`Tatuagem ${categoriaAtual.label}`}
            className="w-full h-full object-cover"
          />

          {/* Setas */}
          {categoriaAtual.fotos.length > 1 && (
            <>
              <button
                onClick={() => setFotoAtiva((prev) => (prev - 1 + categoriaAtual.fotos.length) % categoriaAtual.fotos.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-zinc-950/70 hover:bg-zinc-950 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
              >
                ←
              </button>
              <button
                onClick={() => setFotoAtiva((prev) => (prev + 1) % categoriaAtual.fotos.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-zinc-950/70 hover:bg-zinc-950 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* Miniaturas */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categoriaAtual.fotos.map((foto, i) => (
            <button
              key={i}
              onClick={() => setFotoAtiva(i)}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                fotoAtiva === i ? 'border-amber-400' : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img src={foto} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">

          <a
            href={`https://wa.me/5511974585154?text=${mensagem}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            Quero uma assim
          </a>
        </div>

      </div>
    </section>
  )
}