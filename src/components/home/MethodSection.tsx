import { Search, Target, Wrench, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { publicImagesByCategory } from "@/data/publicImages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pillars = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico do setor",
    desc: "Análise completa de processos, pessoas e tecnologia. Identificamos gaps, gargalos e oportunidades de melhoria no fluxo de trabalho.",
  },
  {
    icon: Target,
    step: "02",
    title: "Plano de ação",
    desc: "Definição de metas claras, indicadores de desempenho e rotinas operacionais alinhadas com os objetivos do hospital ou clínica.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Implementação e treinamento",
    desc: "Execução presencial com capacitação da equipe, padronização de protocolos e otimização de equipamentos e sistemas.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Monitoramento e melhoria contínua",
    desc: "Acompanhamento de indicadores, ajustes periódicos e suporte para garantir resultados sustentáveis a longo prazo.",
  },
];

const MethodSection = () => {
  const image = publicImagesByCategory.gallery[18];

  return (
    <section className="section-padding bg-djr-darker relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />
      <div className="container-djr relative z-10">
        <SectionHeading
          badge="Metodologia"
          title="O Método DJR"
          subtitle="Quatro etapas estruturadas para transformar o desempenho do seu setor de imagem."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {pillars.map((p, i) => (
                <ScrollReveal key={p.step} delay={i * 0.08}>
                  <AccordionItem
                    value={p.step}
                    className="glass-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="hover:no-underline py-5">
                      <div className="flex items-center gap-4 text-left">
                        <span className="text-xs font-heading font-bold text-primary">{p.step}</span>
                        <p.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-heading font-semibold text-foreground">{p.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pl-[68px]">
                      {p.desc}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>

          <ScrollReveal direction="right">
            <div className="glass-card glow-border overflow-hidden relative">
              <ResponsiveImage
                src={image?.src ?? publicImagesByCategory.icon[0].src}
                alt={image?.alt ?? publicImagesByCategory.icon[0].alt}
                sources={image?.sources}
                className="w-full h-auto object-cover opacity-90"
                loading="lazy"
                style={{ filter: "contrast(1.05) saturate(1.1) brightness(1.02)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="glass-card px-4 py-3 border border-border/40">
                  <p className="text-sm text-foreground font-heading font-semibold">Rotina clara, equipe alinhada.</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Padronização, treinamento e monitoramento para resultados sustentáveis.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
