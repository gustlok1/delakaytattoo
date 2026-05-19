const depoimentos = [
  {
    nome: "Bianca Ventura",
    iniciais: "BV",
    texto: "A Kayt deixa a gente completamente à vontade para falar, sugerir, ajustar. O clima do estúdio é leve, acolhedor, e o dia foi simplesmente muito gostoso de viver. Saí com tatuagens que amo, mas principalmente com a sensação de ter feito parte de algo criativo e afetivo.",
  },
  {
    nome: "Cauã Meneghesso",
    iniciais: "CM",
    texto: "Excelente trabalho, ambiente muito tranquilo e acolhedor, rápida e conversa bastante assim acaba sendo até que rápido a sessão. Recomendo muito e vou fazer mais pelo decorrer do tempo.",
  },
  // {
  //   nome: "Pall",
  //   iniciais: "PA",
  //   texto: "Sem dúvidas, uma profissional de outro nível. O atendimento é super atencioso e o ambiente tem uma energia incrível. Sobre os traços? A precisão é absurda e o resultado ficou perfeito. Uma artista completa que entrega ótimas técnicas e cuidado em cada detalhe.",
  // },
  // {
  //   nome: "Victor José",
  //   iniciais: "VJ",
  //   texto: "Trabalho sensacional, local com fácil acesso, organização excelente, profissional super atenciosa e receptiva, higiene impecável, só pontos de qualidades a serem citados, voltarei mais vezes, gostei muito.",
  // },
]
const mensagem = encodeURIComponent("Olá Delakay! Vim pelo site e gostaria de fazer um orçamento.")

export default function Depoimentos({ onAbrirModal }) {
  return (
    <section className="py-24 px-6 bg-zinc-950">

      {/* Cabeçalho */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-amber-400 tracking-[0.3em] text-sm uppercase mb-4">
          Depoimentos
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          O que dizem os clientes
        </h2>
      </div>

      {/* Grid de cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {depoimentos.map((d) => (
          <div
            key={d.nome}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4"
          >
            {/* Estrelas */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Texto */}
            <p className="text-zinc-400 text-sm leading-relaxed flex-1">
              "{d.texto}"
            </p>

            {/* Avatar + nome */}
            <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
              <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-zinc-950 font-semibold text-xs">
                {d.iniciais}
              </div>
              <span className="text-white text-sm font-medium">{d.nome}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Link Google + CTA */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="https://share.google/gAQ1QRjyuLP4sOBL8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2"
        >
          Ver todas as avaliações no Google
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>



      <a
        href={`https://wa.me/5511974585154?text=${mensagem}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold px-8 py-4 rounded-full transition-all duration-300"
      >
        Fale comigo
      </a>
      </div>

    </section>
  )
}