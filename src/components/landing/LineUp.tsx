import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { img, artists } from "@/lib/assets";
import { Reveal, RevealGroup, fadeUp } from "@/components/motion-primitives";

export function LineUp() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1276px] px-5 md:px-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-white/10 shadow-[var(--glow-ring)]">
            <img
              src={img.lineupBg}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-ink-deep/72" />

            <div className="relative px-6 py-14 md:px-12 md:py-20">
              <div className="grid gap-6 md:grid-cols-2 md:items-end">
                <div>
                  <p className="eyebrow">Line up</p>
                  <h2 className="mt-4 max-w-[14ch] text-[clamp(1.7rem,3.6vw,2.3rem)] leading-[1.2] font-bold">
                    Artistas que&nbsp;
                    <br />
                    sobem no palco
                  </h2>
                </div>
                <p className="max-w-[42ch] text-[0.85rem] leading-[1.85] text-muted-foreground md:ml-auto md:text-right">
                  Espaço reservado para as fotos e nomes dos artistas confirmados da 19ª edição.
                </p>
              </div>

        <RevealGroup
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          delay={0.07}
          amount={0.15}
        >
          {artists.map((a) => (
            <motion.figure key={a.name} variants={fadeUp} className="group">
              <div className="relative aspect-square w-[min(382px,100%)] overflow-hidden rounded-2xl">
                      <img
                        src={a.src}
                        alt={a.name}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.07]"
                        style={
                          a.objectPosition
                            ? { objectPosition: a.objectPosition }
                            : undefined
                        }
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.55]"
                        style={{
                          background:
                            "linear-gradient(90deg, #EE6E19 0%, rgba(66,81,215,0.58) 100%)",
                        }}
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.55]"
                        style={{
                          background: "linear-gradient(90deg, #000000 0%, #A161F6 100%)",
                        }}
                      />
                    </div>
                    <figcaption className="mt-3 text-[0.68rem] font-medium tracking-[0.16em] text-white/75 uppercase">
                      {a.name}
                    </figcaption>
                  </motion.figure>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const ROTEIRO = [
  {
    tag: "Embarque · 30/10 (Sex)",
    title: "Concentração 03h00 · Saída 03h30",
    body: "Av. Sen. Salgado Filho, 25 — Portão 1, Estacionamento PUC/PR, Curitiba.",
  },
  {
    tag: "3 dias de folia · 30, 31/10 e 01/11",
    title: "Paraíso Palace Hotel",
    body: "Hospedagem com pool parties, festa na escuna, almoços, open bar 24h e toda a programação do Retiro Folia.",
  },
  {
    tag: "Retorno · 02/11 (Seg)",
    title: "Saída de Florianópolis às 12h00",
    body: "O fim de mais uma odisseia — nos vemos em 2027!",
  },
];

export function Roteiro() {
  return (
    <section id="roteiro" className="scroll-mt-24 py-16 md:py-20">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Roteiro</p>
          <div className="mt-4 flex items-center gap-10">
            <h2 className="text-[clamp(1.7rem,3.6vw,2.3rem)] leading-[1.2] font-bold">
              Como funciona
              <br />
              <span className="font-normal text-white/45">a sua viagem</span>
            </h2>
            <img
              src={img.dividerTornEdge}
              alt=""
              aria-hidden="true"
              className="hidden h-5 w-[300px] shrink-0 lg:ml-auto lg:block"
            />
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3" delay={0.12}>
          {ROTEIRO.map((r) => (
            <motion.article
              key={r.title}
              variants={fadeUp}
              className="rounded-3xl bg-orange p-7 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <p className="text-[0.62rem] font-semibold tracking-[0.14em] text-white/80 uppercase">
                {r.tag}
              </p>
              <h3 className="mt-4 text-[1.05rem] leading-[1.3] font-bold text-white">{r.title}</h3>
              <p className="mt-4 text-[0.82rem] leading-[1.85] text-white/85">{r.body}</p>
            </motion.article>
          ))}
        </RevealGroup>

        <RevealGroup
          className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.4fr_0.4fr] md:items-stretch"
          delay={0.1}
        >
          <motion.div variants={fadeUp} className="overflow-hidden rounded-3xl">
            <img
              src={img.hotel}
              alt="Piscina do Paraíso Palace Hotel"
              loading="lazy"
              className="size-full min-h-[240px] object-cover transition-transform duration-[1.1s] hover:scale-[1.05]"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl bg-surface-2 p-8 md:p-10"
          >
            <p className="eyebrow">Hospedagem</p>
            <h3 className="mt-4 text-[clamp(1.15rem,2.2vw,1.4rem)] leading-[1.3] font-bold">
              Paraíso Palace Hotel — o QG do Retiro Folia
            </h3>
            <p className="mt-5 max-w-[52ch] text-[0.85rem] leading-[1.9] text-muted-foreground">
              Nossa casa em Floripa e palco das pool parties, da recepção e de toda a programação.
              Open bar de chopp 24h, café da manhã, piscina, salão de jogos, Wi-Fi gratuito e
              ar-condicionado nos quartos. Opções de quartos single, duplo e triplo.
            </p>
            <a href="https://wa.me/554136188363" className="btn-orange mt-8">
              Quero reservar minha vaga <ArrowRight className="size-3.5" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="overflow-hidden rounded-3xl">
            <img
              src={img.neonGirl}
              alt="Foliã sorrindo durante a festa"
              loading="lazy"
              className="size-full min-h-[240px] object-cover transition-transform duration-[1.1s] hover:scale-[1.05]"
            />
          </motion.div>
        </RevealGroup>
      </div>
    </section>
  );
}
