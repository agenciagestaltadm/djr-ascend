import { TrendingUp, ArrowRight, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import CountUp from "@/components/shared/CountUp";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { publicImagesByCategory } from "@/data/publicImages";
import { CONSULTORIA_WA_URL } from "@/lib/consultoria";

const cases = [
  {
    hospital: "Hospital HCA",
    city: "Ananindeua/PA",
    highlight: "70",
    highlightSuffix: "%",
    highlightLabel: "de crescimento em exames de tomografia",
    desc: "Implantação de modelo de gestão e otimização de processos no setor de tomografia.",
    tag: "Gestão",
  },
  {
    hospital: "Hospital HSC + Medicine Imagem",
    city: "Capanema/PA",
    highlight: null,
    highlightLabel: "Redução significativa de erros técnicos e glosas",
    desc: "Padronização de protocolos, capacitação da equipe e melhoria da qualidade dos exames.",
    tag: "Treinamento",
  },
  {
    hospital: "Hospital HSMA",
    city: "Ananindeua/PA",
    highlight: null,
    highlightLabel: "Implantação do modelo de gestão em imagenologia",
    desc: "Estruturação completa do setor de imagem com processos, indicadores e padronização.",
    tag: "Implantação",
  },
];

const CasesSection = () => {
  const images = publicImagesByCategory.gallery.slice(10, 13);

  return (
    <section className="section-padding relative">
      <div className="container-djr">
        <SectionHeading
          badge="Portfólio"
          title="Cases com resultados reais"
          subtitle="Conheça alguns dos projetos que transformaram a operação de hospitais e clínicas."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <ScrollReveal key={c.hospital} delay={i * 0.1}>
              <div className="glass-card glow-border flex flex-col h-full overflow-hidden group relative">
                <ResponsiveImage
                  src={images[i]?.src ?? publicImagesByCategory.icon[0].src}
                  alt={images[i]?.alt ?? publicImagesByCategory.icon[0].alt}
                  sources={images[i]?.sources}
                  className="absolute inset-0 w-full h-full object-cover opacity-18 pointer-events-none select-none"
                  loading="lazy"
                  style={{ filter: "grayscale(1) contrast(1.15) brightness(0.75)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/70 to-background/95 pointer-events-none" />

                <div className="p-6 flex-1 relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-heading font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                      {c.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{c.city}</span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">{c.hospital}</h3>

                  {c.highlight && (
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-4xl font-heading font-bold text-primary">
                        <CountUp end={Number(c.highlight)} suffix={c.highlightSuffix} prefix="+" />
                      </span>
                    </div>
                  )}

                  <p className="text-sm font-medium text-foreground mb-2">{c.highlightLabel}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>

                <div className="px-6 pb-6 flex gap-2 relative z-10">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="gap-1 text-xs border-border hover:border-primary/50 hover:bg-primary/5"
                  >
                    <a href={CONSULTORIA_WA_URL} target="_blank" rel="noopener noreferrer">
                      <CalendarClock className="w-3 h-3" />
                      Quero minha consultoria
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
