import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { img } from "@/lib/assets";
import { Reveal, easeOut } from "@/components/motion-primitives";

const FAQ: Array<
  | { q: string; a: string; image?: never }
  | { q: string; image: string; imageAlt: string; a?: never }
> = [
  {
    q: "Quais as datas e horários da viagem?",
    a: "A saída de Curitiba é dia 30/10 (sexta), com concentração às 03h00 e saída às 03h30, do Estacionamento da PUC/PR (Portão 1). O retorno de Florianópolis é dia 02/11 (segunda) às 12h00.",
  },
  {
    q: "O que está incluso no pacote?",
    a: "Transporte (opcional), traslados ida e volta com open bar na ida, hospedagem com café da manhã e open bar de chopp 24h, 2 almoços, 2 pool parties exclusivas, 1 festa na escuna, kit folião com brindes, guias e equipe de apoio e entretenimento.",
  },
  {
    q: "O ingresso do Folianópolis está incluso?",
    a: "O ingresso é opcional e adquirido através do nosso link promocional exclusivo, com código de desconto. Fazemos a entrega dos abadás diretamente no hotel.",
  },
  {
    q: "Onde fica a hospedagem?",
    a: "No Paraíso Palace Hotel, o QG oficial do Retiro Folia em Florianópolis. É lá que acontecem as pool parties, a recepção e a programação. Conta com open bar de chopp 24h, café da manhã, piscina, salão de jogos, Wi-Fi e ar-condicionado.",
  },
  {
    q: "Quais os tipos de quarto e valores?",
    a: "Há opções de quarto single, duplo e triplo, em duas modalidades de pacote (Receptivo ou com Saída de Curitiba). Os valores começam em R$ 1.799 por pessoa (quarto triplo, receptivo). Fale com a gente para o valor da sua configuração.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Aceitamos PIX e cartão de crédito. No cartão, parcelamos em até 12x (com juros). No PIX, você parcela sem juros até a data do evento. As vagas e quartos só são reservados mediante pagamento.",
  },
  {
    q: "Posso cancelar?",
    a: "Sim. Para cancelamentos, aplicam-se as regras e condições especificadas em contrato. Fale com a nossa equipe para entender os detalhes.",
  },
  {
    q: "Preciso comprar o abadá separado?",
    a: "Sim. Os abadás devem ser adquiridos diretamente pelo link promocional, com o nosso código de desconto. A entrega é feita diretamente no hotel.",
  },
  {
    q: "Quais são os valores?",
    image: "/faq-valores.png",
    imageAlt: "Tabela de valores Retiro Folia — Nossos valores sem abadá",
  },
];

function FaqRow({
  item,
  index,
}: {
  item: (typeof FAQ)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const { q } = item;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.55, ease: easeOut, delay: index * 0.04 }}
      className="hairline-b"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full min-h-11 items-center justify-between gap-6 py-5 text-left transition-colors hover:text-orange"
      >
        <span className="text-[0.9rem] font-semibold">{q}</span>
        <ChevronDown
          className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden"
          >
            {"image" in item ? (
              <div className="flex justify-center pb-6">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full max-w-xl rounded-2xl"
                />
              </div>
            ) : (
              <p className="pb-6 text-[0.83rem] leading-[1.9] text-muted-foreground">
                {item.a}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CtaFaq() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24">
      <div className="shell">
        <Reveal>
          <div
            id="cta"
            className="scroll-mt-24 grid gap-8 rounded-4xl px-7 py-12 md:grid-cols-[1.5fr_auto] md:items-center md:px-12 md:py-14"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            <div>
              <h2 className="max-w-[18ch] text-[clamp(1.5rem,3.2vw,2.05rem)] leading-[1.2] font-bold text-white">
                Pronto para viver o Folianópolis 2026?
              </h2>
              <p className="mt-5 max-w-[64ch] text-[0.82rem] leading-[1.8] text-white/85">
                As vagas são limitadas e o pacote parcela no PIX sem juros até o evento.
                <br />
                <strong className="font-semibold text-white">
                  Fale agora com a nossa equipe e garanta o seu lugar na folia.
                </strong>
              </p>
            </div>
            <a href="https://wa.me/554136188363" className="btn-ink justify-self-start md:justify-self-end">
              Falar no WhatsApp <ArrowRight className="size-3.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-24">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,3.6vw,2.3rem)] font-bold">Perguntas frequentes</h2>
          </Reveal>
          <div className="mt-8 border-t border-border">
            {FAQ.map((item, i) => (
              <FaqRow key={item.q} item={item} index={i} />
            ))}
          </div>
        </div>

        <Reveal delay={0.05}>
          <div className="relative mt-20 overflow-hidden rounded-4xl">
            <img
              src={img.finalCta}
              alt="Vista aérea da Micareta Folianópolis à noite"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.16_0.05_305/72%),oklch(0.16_0.05_305/78%))]" />
            <div className="relative flex flex-col items-center px-6 py-24 text-center md:py-32">
              <p className="eyebrow">Última chamada</p>
              <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,5.6vw,3.5rem)] leading-[1.05] font-bold text-white">
                Sua folia inesquecível
                <br />
                <span className="font-normal italic text-white/90">começa aqui.</span>
              </h2>
              <p className="mt-6 max-w-[62ch] text-[0.85rem] leading-[1.8] text-white/85">
                A 19ª edição da Micareta mais bonita do Brasil te espera. Garanta sua vaga no
                Folianópolis 2026 com o Retiro Folia e viva 3 dias que você vai querer repetir todo
                ano.
              </p>
              <a href="https://wa.me/554136188363" className="btn-orange mt-8">
                Quero reservar minha vaga <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-deep pt-16">
      <div className="shell grid gap-10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <Reveal>
          <img src={img.retiroLogo} alt="Retiro Folia" loading="lazy" className="h-9 w-auto" />
          <p className="mt-6 max-w-[42ch] text-[0.85rem] leading-[1.85] text-muted-foreground">
            Agência de Curitiba especializada em excursões para os maiores festivais e micaretas do
            Brasil.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/25 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
              Cadastur
            </span>
            <span className="rounded-full border border-white/25 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
              +18
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="eyebrow">Contato</p>
          <ul className="mt-5 space-y-4 text-[0.83rem] text-muted-foreground">
            <li>WhatsApp (41) 3618-8363</li>
            <li>@retirofolia</li>
            <li className="text-muted-foreground/70">#retirofolia</li>
          </ul>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="eyebrow">Empresa</p>
          <ul className="mt-5 space-y-4 text-[0.83rem] text-muted-foreground">
            <li>CNPJ: 36.391.221/0001-85</li>
            <li>Curitiba · PR</li>
          </ul>
        </Reveal>
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col gap-3 py-6 text-[0.65rem] font-medium tracking-[0.14em] text-muted-foreground uppercase md:flex-row md:justify-between">
          <span>© 2026 Retiro Folia. Todos os direitos reservados.</span>
          <span>Folianópolis 2026 · 19ª edição</span>
        </div>
      </div>
    </footer>
  );
}
