import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Intro, Experiencia, CuidaDeTudo } from "@/components/landing/Sections";
import { Incluso, Festas } from "@/components/landing/Incluso";
import { LineUp, Roteiro } from "@/components/landing/LineUp";
import { Confianca } from "@/components/landing/Confianca";
import { CtaFaq, Footer } from "@/components/landing/CtaFaq";

const TITLE = "Retiro Folia · Folianópolis 2026 em Florianópolis";
const DESC =
  "Pacote completo para a 19ª edição do Folianópolis: transporte, hospedagem, 3 festas exclusivas e open bar 24h em Florianópolis, de 30/10 a 02/11.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Hero />
      <main>
        <Intro />
        <Experiencia />
        <CuidaDeTudo />
        <Incluso />
        <Festas />
        <LineUp />
        <Roteiro />
        <Confianca />
        <CtaFaq />
      </main>
      <Footer />
    </div>
  );
}
