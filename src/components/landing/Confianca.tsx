import { motion } from "motion/react";
import { ArrowRight, Star, Ticket, ShieldCheck, CalendarDays } from "lucide-react";
import { img } from "@/lib/assets";
import { Reveal, RevealGroup, fadeUp } from "@/components/motion-primitives";
import { ElfsightEmbed } from "@/components/landing/ElfsightEmbed";

const TRUST = [
  { Icon: Star, title: "5.0 no Google", body: "+120 avaliações" },
  { Icon: Ticket, title: "Agência oficial", body: "do Folianópolis" },
  { Icon: ShieldCheck, title: "Cadastur", body: "Empresa registrada e regularizada" },
  { Icon: CalendarDays, title: "Desde 2015", body: "levando foliões aos maiores eventos" },
];

export function Confianca() {
  return (
    <section className="bg-orange py-20 md:py-24">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-white/75 uppercase">
              Confiança
            </p>
            <h2 className="mt-4 max-w-[16ch] text-[clamp(1.7rem,3.6vw,2.3rem)] leading-[1.2] font-bold text-white">
              Quem viaja com o Retiro,{" "}
              <span className="font-normal text-white/60">volta todo ano.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="ml-auto max-w-[46ch] text-[0.85rem] leading-[1.85] text-white/85 md:text-right">
              Mais de 120 avaliações 5 estrelas no Google e milhares de foliões que confiam na gente
              para viver os melhores eventos do Brasil.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4" delay={0.08}>
          {TRUST.map(({ Icon, title, body }) => (
            <motion.div key={title} variants={fadeUp}>
              <Icon className="size-5 text-white" strokeWidth={1.6} />
              <p className="mt-4 text-[0.66rem] font-semibold tracking-[0.14em] text-white uppercase">
                {title}
              </p>
              <p className="mt-2 max-w-[24ch] text-[0.82rem] leading-[1.7] text-white/85">{body}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <ElfsightEmbed className="mt-12" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6">
            <img src={img.retiroLogo} alt="Retiro Folia" loading="lazy" className="h-14 w-auto" />
            <a href="https://share.google/vjDD2E4Fqg62C2iB9" className="btn-ink" target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">Clique aqui e confira todas as avaliações</span>
              <span className="sm:hidden">Ver avaliações</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative mt-14 h-[150px] overflow-hidden rounded-[28px] bg-[#090909] md:h-[190px]">
            <img
              src={img.friends}
              alt="Amigas se divertindo durante a micareta"
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-[center_35%] opacity-50"
            />
            <div
              className="absolute inset-0 opacity-[0.55]"
              style={{ background: "linear-gradient(90deg, #000000 0%, #A161F6 100%)" }}
            />
          </div>
        </Reveal>


        <div className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-white/75 uppercase">
              Sobre a empresa
            </p>
            <h2 className="mt-4 text-[clamp(1.7rem,3.6vw,2.3rem)] font-bold text-white">
              Sobre o Retiro Folia
            </h2>
            <div className="mt-6 space-y-5 text-[0.85rem] leading-[1.9] text-white/88">
              <p>
                Desde 2015, o Retiro Folia transforma os maiores eventos do Brasil em experiências
                completas e sem preocupação. Somos uma agência de Curitiba, registrada no CADASTUR,
                especializada em excursões para festivais e micaretas —do Oktoberfest de Blumenau ao
                Folianópolis.
              </p>
              <p>
                Nossa missão é simples: você só pensa em curtir, a gente cuida de todo o resto.
                Transporte, hospedagem, festas, logística e uma equipe de apoio dedicada, presente
                do embarque ao retorno. É por isso que, ano após ano, milhares de foliões escolhem
                viajar com a gente — e voltam na edição seguinte.
              </p>
              <p>
                No Folianópolis 2026, entregamos a maior e mais inesquecível edição da Micareta mais
                bonita do Brasil.
              </p>
            </div>
            <a href="https://wa.me/554136188363" className="btn-outline-light mt-8">
              Quero viajar com o Retiro <ArrowRight className="size-3.5" />
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={img.team}
                alt="Equipe do Retiro Folia no Folianópolis"
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
