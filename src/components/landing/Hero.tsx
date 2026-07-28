import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { img } from "@/lib/assets";
import { easeOut } from "@/components/motion-primitives";

const NAV = [
  { label: "Experiência", href: "#experiencia" },
  { label: "O que inclui", href: "#incluso" },
  { label: "Festas", href: "#festas" },
  { label: "Roteiro", href: "#roteiro" },
  { label: "FAQ", href: "#faq" },
];

const PILLS = [
  { k: "Data", v: "30/OUT — 02/NOV" },
  { k: "Local", v: "FLORIANÓPOLIS · SC" },
  { k: "Edição", v: "19ª · A MICARETA MAIS BONITA DO BRASIL" },
];

export function Hero() {
  return (
    <header className="relative isolate flex min-h-[664px] flex-col overflow-hidden bg-ink-deep lg:h-[664px] lg:min-h-0">
      <motion.img
        src={img.heroBg}
        alt="Multidão em frente ao palco do Folianópolis com fogos de artifício"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: easeOut }}
      />
      {/* light focus on the left */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_95%_at_18%_38%,oklch(0.108_0.036_300/12%)_0%,oklch(0.108_0.036_300/58%)_38%,oklch(0.06_0.02_300/88%)_78%,oklch(0.05_0.018_300/95%)_100%)]" />
      {/* overall darkening + bottom blend */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.05_0.018_300/72%)_0%,oklch(0.05_0.018_300/45%)_40%,oklch(0.06_0.02_300/70%)_72%,oklch(0.164_0.048_305)_100%)]" />
      {/* right side falloff */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,transparent_0%,oklch(0.05_0.018_300/35%)_55%,oklch(0.05_0.018_300/72%)_100%)]" />

      {/* top bar */}
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
        className="shell relative z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 lg:flex lg:justify-between"
      >
        <a href="#top" className="flex min-w-0 shrink-0 items-center">
          <img src={img.retiroLogo} alt="Retiro Folia" className="h-8 w-auto md:h-9" />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="eyebrow transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="https://wa.me/554136188363" className="btn-orange shrink-0">
          Garantir minha vaga <ArrowRight className="size-3.5" />
        </a>
      </motion.nav>

      {/* pills */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } } }}
        className="shell relative z-10 mt-8 flex flex-wrap justify-center gap-2"
      >
        {PILLS.map((p) => (
          <motion.div
            key={p.k}
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="relative flex flex-col justify-center gap-1 rounded-full border border-white/25 bg-ink-deep/55 px-6 py-2.5 backdrop-blur-md transition-colors hover:border-white/45"
          >
            <span className="eyebrow text-[0.6rem] leading-none">{p.k}</span>
            <span className="text-[0.72rem] leading-none font-semibold tracking-[0.08em] text-foreground">
              {p.v}
            </span>
          </motion.div>
        ))}

      </motion.div>

      {/* headline row — fills the space between pills and header bottom */}
      <div className="relative z-10 flex flex-1 items-center">
        {/* vertical rail */}
        <div className="absolute top-1/2 left-4 hidden -translate-y-1/2 xl:block">
          <span className="eyebrow block [writing-mode:vertical-rl] rotate-180 text-[0.6rem]">
            Agência oficial · +120 avaliações Google
          </span>
        </div>

        <div className="shell flex w-full flex-col items-center justify-center gap-10 py-14 text-center lg:flex-row lg:items-center lg:text-left lg:py-0">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.45 } } }}
              className="max-w-[16ch] text-[clamp(2.6rem,7.6vw,4.6rem)] leading-[0.99] font-bold text-foreground"
            >
              {["Seja o maior", "protagonista", "da sua folia."].map((line) => (
                <span key={line} className="block -mb-[0.18em] overflow-hidden pb-[0.18em]">
                  <motion.span
                    variants={{ hidden: { y: "105%" }, show: { y: 0 } }}
                    transition={{ duration: 0.85, ease: easeOut }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
            <p className="mt-4 whitespace-nowrap text-[12px] font-normal leading-snug tracking-[1.98px] text-white/80">
              EXCURSÃO &/OU PACOTES COMPLETOS
            </p>
          </div>

          <motion.img
            src={img.folianopolisHalloween}
            alt="Logo Halloween Folianópolis 2026"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.7 }}
            className="w-[62%] max-w-[330px] self-center drop-shadow-[0_16px_40px_oklch(0_0_0/60%)] lg:ml-auto"
          />
        </div>
      </div>

    </header>
  );
}
