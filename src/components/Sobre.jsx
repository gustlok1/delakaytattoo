import kayt from '../assets/images/kayt.webp'
import { whatsappLink } from '../config'


export default function Sobre() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Foto */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src={kayt}
              alt="Kayt, tatuadora"
              className="w-full h-full object-cover"
              loading='lazy'
            />
          </div>
          {/* Detalhe decorativo */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-amber-400 rounded-2xl -z-0" />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-6">
          <p className="text-amber-400 tracking-[0.3em] text-sm uppercase">
            Sobre mim
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Oláá, serei a sua tatuadora a partir de agora :)
          </h2>

          <div className="text-zinc-400 leading-relaxed flex flex-col gap-4">
            <p>
              Me chamo Catarine, mas pode me chamar de Kayt. Tatuo há mais de 10 anos
              e me especializei em fine line e blackwork, estilos que exigem precisão
              e paciência, e é onde eu me encontrei como artista.
            </p>
            <p>
              Sempre amei desenhar e é isso que me faz entregar não só uma tatuagem
              bem feita, mas a melhor pra você.
            </p>
          </div>

          {/* Especialidades */}
          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 text-sm">
              Fine Line
            </span>
            <span className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 text-sm">
              Blackwork
            </span>
            <span className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 text-sm">
              +10 anos de experiência
            </span>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block self-start bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            Fazer orçamento
          </a>
        </div>

      </div>
    </section>
  )
}