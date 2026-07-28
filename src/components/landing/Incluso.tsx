import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { img } from "@/lib/assets";
import { Reveal, RevealGroup, fadeUp } from "@/components/motion-primitives";

const INCLUSO = [
  ["Transporte rodoviário", "com saída de Curitiba e São Paulo (opcional)"],
  ["Hospedagem", "com café da manhã e open bar de chopp 24h"],
  ["Ingresso Folianópolis", "(opcional, via link promocional exclusivo)"],
  ["Kit Folião", "com brindes exclusivos"],
  ["2 almoços", "(sexta e domingo)"],
  ["2 pool parties exclusivas", "com open bar (sexta e domingo)"],
  ["1 festa na escuna", "com open bar (sábado)"],
  ["Guias + equipe de apoio", "Retiro Folia"],
  ["Entretenimento", "nas pool parties"],
  ["Traslados ida e volta", "para o evento — com open bar na ida"],
];


export function Incluso() {
  return (
    <section id="incluso" className="scroll-mt-24 py-16 md:py-20">
      <div className="shell">
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <Reveal>
            <p className="eyebrow">O que está incluso</p>
            <h2 className="mt-4 text-[clamp(1.7rem,3.6vw,2.3rem)] leading-[1.2] font-bold">
              Um pacote completo,
              <br />
              <span className="font-normal text-white/45">do começo ao fim.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.06} className="hidden md:flex md:items-center md:justify-center">
            <img
              src={img.dividerTornEdge}
              alt=""
              aria-hidden="true"
              className="h-5 w-[300px]"
            />
          </Reveal>

          <Reveal delay={0.1} className="md:text-right">
            <p className="max-w-[36ch] text-[0.85rem] leading-[1.85] text-muted-foreground md:ml-auto">

              Tudo que você precisa para curtir os 3 dias de Micareta sem se preocupar com nada.
            </p>
            <a href="https://wa.me/554136188363" className="btn-orange mt-5">
              Quero esse pacote <ArrowRight className="size-3.5" />
            </a>
          </Reveal>
        </div>


        <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2" delay={0.06}>
          {INCLUSO.map(([title, sub]) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="panel flex items-start gap-4 px-5 py-5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.04]"
            >
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-white text-ink-deep">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <div className="min-w-0">
                <h3 className="text-[0.85rem] font-bold">{title}</h3>
                <p className="mt-1 text-[0.75rem] text-muted-foreground">{sub}</p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

const FESTAS = [
  {
    tag: "Festa 1",
    when: "Sexta · 30/10",
    title: "Feijuca Fantasy",
    body: "Festa à fantasia na piscina com feijoada e open bar completo. O esquenta perfeito para abrir a folia em grande estilo.",
    src: img.festa1,
  },
  {
    tag: "Festa 2",
    when: "Sábado · 31/10",
    title: "Halloween Travessuras",
    body: "Festa em alto mar na escuna, com open bar. Uma experiência única, navegando por Floripa no clima de Halloween.",
    src: img.festa2,
  },
  {
    tag: "Festa 3",
    when: "Domingo · 01/11",
    title: "Pool Parmê",
    body: "Festa do abadá na piscina com parmegiana e open bar. O encerramento à altura da Micareta mais bonita do Brasil.",
    src: img.festa3,
  },
];

export function Festas() {
  return (
    <section id="festas" className="scroll-mt-24 py-16 md:py-20">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <p className="eyebrow">Benefícios exclusivos</p>
            <h2 className="mt-4 max-w-[16ch] text-[clamp(1.7rem,3.6vw,2.3rem)] leading-[1.2] font-bold">
              3 festas que só quem viaja{" "}
              <span className="font-normal text-white/45">com a gente vive.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:text-right">
            <p className="ml-auto max-w-[42ch] text-[0.85rem] leading-[1.85] text-muted-foreground">
              Nossos esquentas exclusivos já estão inclusos no valor do seu pacote.
              <br />
              <strong className="font-semibold text-foreground">
                Programação dos dias 30, 31/10 e 01/11.
              </strong>
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3" delay={0.12}>
          {FESTAS.map((f) => (
            <motion.article
              key={f.title}
              variants={fadeUp}
              className="panel group overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img
                  src={f.src}
                  alt={f.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.08]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/25 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.14em] uppercase">
                    {f.tag}
                  </span>
                  <span className="text-[0.65rem] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                    {f.when}
                  </span>
                </div>
                <h3 className="mt-5 text-[1.1rem] font-bold">{f.title}</h3>
                <p className="mt-4 text-[0.82rem] leading-[1.85] text-muted-foreground">{f.body}</p>
              </div>
            </motion.article>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="relative mt-6 overflow-hidden rounded-[28px]">
            <img
              src={img.stripCrowd}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 size-full object-cover opacity-50"
            />
            <div className="absolute inset-0 opacity-[0.55] bg-[linear-gradient(90deg,#EE6E19_0%,rgba(66,81,215,0.58)_100%)]" />
            <div className="relative px-7 py-5 md:px-8">
              <p className="eyebrow text-[0.62rem]">Nota sobre o open bar</p>
              <p className="mt-1.5 text-[0.9rem] leading-[1.5] font-normal text-foreground">
                Open bar de: cerveja/chopp, vodka, gin, refrigerante, energético, água, drinks
                especiais e caipirinhas de abacaxi, limão e melancia.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
