import heroImg from '../assets/images/hero.jpg'

export default function Hero({ onAbrirModal }) {

const mensagem = encodeURIComponent("Olá Kayt! Vim pelo site e gostaria de fazer um orçamento.")
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      
      {/* Bg */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 to-zinc-850" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6">
        <p className="text-amber-400 tracking-[0.3em] text-sm uppercase">
          Tatuadora
        </p>

        <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-white">
          Kayt Mello
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-md">
          Fine line e blackwork <br/>em  <strong>São Paulo</strong> e <strong>Santa Catarina</strong>
        </p>

        <a
            href={`https://wa.me/5511974585154?text=${mensagem}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
            Fazer orçamento
        </a>
        <button
            onClick={onAbrirModal}
            className="text-zinc-400 hover:text-amber-400 text-sm underline underline-offset-4 transition-colors"
        >
            Prefere descrever sua ideia?
        </button>
      </div>

    </section>
  )
}