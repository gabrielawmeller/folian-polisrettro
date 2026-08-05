import { motion } from "motion/react";
import { ArrowRight, BusFront, PartyPopper } from "lucide-react";
import { img } from "@/lib/assets";
import { Reveal, RevealGroup, fadeUp, easeOut } from "@/components/motion-primitives";

const MARQUEE = [
  "Timbalada",
  "Léo Santana",
  "Claudia Leitte",
  "Banda Eva",
  "É O Tchan",
  "Tomate",
  "Xanddy Harmonia",
  "Psirico",
  "Bell Marques",
];

export function Intro() {
  return (
    <section className="relative overflow-hidden pt-20 pb-6 md:pt-24">
      <div className="shell grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <Reveal className="border-white/10 pr-0 md:border-r md:pr-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-[1.05rem] font-medium tracking-[0.02em] text-orange uppercase md:text-[1.15rem]">
              A única micareta
            </p>
            <div className="flex flex-wrap items-center justify-center gap-0">
              <span className="rounded-full border border-orange/70 px-5 py-1.5 text-[1.05rem] font-bold text-orange md:text-[1.15rem]">
                100%
              </span>
              <span className="-ml-px rounded-full border border-orange/70 px-6 py-1.5 text-[1.05rem] font-bold tracking-[0.01em] text-orange uppercase md:text-[1.15rem]">
                Axé do Brasil
              </span>
            </div>

            <p className="text-[1.05rem] font-medium text-orange uppercase md:text-[1.15rem]">
              Chega na sua 19ª edição 🎃
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="max-w-[42ch] text-[0.95rem] leading-[1.85] text-muted-foreground">
            <strong className="font-semibold text-foreground">O Retiro Folia</strong> leva você para
            viver os 3 dias mais inesquecíveis do ano em Florianópolis, com transporte, hospedagem,
            festas open bar e a estrutura que só o Retiro oferece.
          </p>
        </Reveal>
      </div>

      {/* marquee */}
      <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <motion.div
          className="flex w-max gap-16 pr-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, ease: "linear", repeat: Infinity }}
        >
          {[...MARQUEE, ...MARQUEE].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-medium whitespace-nowrap text-white/22 md:text-white/12"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Experiencia() {
  return (
    <section id="experiencia" className="scroll-mt-24 overflow-hidden pt-20 pb-24 md:pt-28">
      <div className="shell">
        <div className="grid items-start gap-6 md:grid-cols-[1fr_auto]">
          <Reveal>
            <h2 className="text-[clamp(2.25rem,5.2vw,4rem)] leading-[1.02] font-bold tracking-[-0.02em]">
              A sua experiência
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[32ch] text-[0.875rem] leading-[1.7] text-muted-foreground md:text-right">
              O maior espetáculo do ano vai começar e você não vai querer ficar de fora.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2">
          <motion.article
            variants={fadeUp}
            className="relative min-h-[420px] overflow-hidden rounded-4xl bg-[#08070c] p-8 md:min-h-[560px] md:p-12"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 55% at 78% 18%, oklch(0.32 0.09 300 / 55%) 0%, transparent 70%)",
              }}
            />
            <div className="relative flex h-full flex-col justify-center gap-8 md:flex-row md:items-center">
              <div className="md:w-[46%]">
                <p className="eyebrow">Experiência</p>
                <h3 className="mt-4 text-[clamp(1.4rem,2.4vw,1.75rem)] leading-[1.25] font-bold">
                  Não é só
                  <br />
                  uma viagem.
                </h3>
              </div>
              <div className="space-y-6 text-[0.875rem] leading-[1.75] text-muted-foreground md:w-[54%]">
                <p>
                  São 3 dias de programação non-stop, integrando foliões do Brasil e do mundo
                  inteiro, com ambiente 24h de open bar e muita diversão.
                </p>
                <p>Tudo isso com a comodidade e a segurança que só o Retiro entrega.</p>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={fadeUp}
            className="group relative min-h-[420px] overflow-hidden rounded-4xl md:mr-[calc(min(1160px,100vw)/2_-_50vw_-_2rem)] md:min-h-[560px] md:rounded-r-none"
          >
            <img
              src={img.expArtist}
              alt="Artista cantando no palco do Folianópolis"
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-[#090909]/[51%]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_45%,oklch(0.15_0.05_270/62%)_100%)]" />
            <div className="relative flex h-full flex-col items-end justify-center gap-5 p-8 text-right md:p-12 md:pr-[calc(50vw_-_min(1160px,100vw)/2_+_2rem)]">

              <p className="eyebrow">Experiência</p>
              <h3 className="max-w-[11ch] text-[clamp(1.5rem,2.9vw,2.1rem)] leading-[1.12] font-bold">
                É a sua melhor experiência no Folia.
              </h3>
              <a href="https://wa.me/554136188363" className="btn-orange whitespace-nowrap">
                Quero viver essa experiência <ArrowRight className="size-3.5" />
              </a>
            </div>
          </motion.article>
        </RevealGroup>
      </div>
    </section>
  );
}

const CUIDA = [
  {
    icon: BusFront,
    title: "Embarque tranquilo",
    body: "Você só precisa chegar. A gente organiza o transporte, os traslados, o open bar já na ida para o Folianópolis e toda a logística para você começar a curtir desde o primeiro quilômetro.",
  },
  {
    icon: PartyPopper,
    title: "Na folia",
    body: "Pool parties exclusivas, festa em alto mar na escuna, almoços, brindes e uma equipe de apoio inteira para que sua única preocupação seja aproveitar.",
  },
];

export function CuidaDeTudo() {
  return (
    <section className="pb-20">
      <div className="shell">
        <Reveal>
          <div className="relative z-10 overflow-hidden rounded-[64px] bg-orange px-7 pt-14 pb-7 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -top-24 -left-24 size-[420px] rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -top-40 left-10 size-[420px] rounded-full border border-white/10" />

            <div className="relative grid gap-12 md:grid-cols-[1fr_minmax(0,430px)] md:items-start md:gap-16">
              <div className="flex h-full flex-col items-start justify-start gap-6 md:min-h-[420px] md:justify-between md:gap-6">
                <h2 className="max-w-[11ch] text-[clamp(2.1rem,4.6vw,3.3rem)] leading-[1.08] font-normal text-white">
                  Do embarque à folia,{" "}
                  <span className="font-extrabold">a gente cuida de tudo</span>
                </h2>
                <img
                  src={img.retiroLogo}
                  alt="Retiro Folia"
                  loading="lazy"
                  className="h-14 w-auto md:h-[70px]"
                />
              </div>

              <RevealGroup className="space-y-6">
                {CUIDA.map((c) => (
                  <motion.div
                    key={c.title}
                    variants={fadeUp}
                    className="rounded-2xl border border-white/35 p-6 transition-colors duration-300 hover:bg-white/8 md:p-7"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/45 text-white">
                        <c.icon className="size-4" strokeWidth={1.75} />
                      </span>
                      <h3 className="text-[0.95rem] font-semibold text-white">{c.title}</h3>
                    </div>
                    <p className="mt-4 text-[0.83rem] leading-[1.95] text-white/85">{c.body}</p>
                  </motion.div>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="relative z-0 -mt-16 h-[calc(130px+64px)] overflow-hidden rounded-b-[64px] md:h-[calc(170px+64px)]"
        >
          <img
            src={img.stripCrowd}
            alt="Público do Folianópolis com os braços erguidos"
            loading="lazy"
            className="size-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(9,9,9,0.35) 0%, rgba(9,9,9,0.80) 60%, rgba(9,9,9,0.95) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(9,9,9,0.85) 0%, rgba(9,9,9,0.35) 45%, rgba(14,6,27,0.9) 100%)",
            }}
          />
          <img
            src={img.folianopolisHalloween}
            alt="Folianópolis 2026 Halloween"
            loading="lazy"
            className="absolute top-[calc(50%_+_32px)] right-6 w-32 -translate-y-1/2 md:right-14 md:w-36"
          />
        </motion.div>
      </div>
    </section>
  );
}
