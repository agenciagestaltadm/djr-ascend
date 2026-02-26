import { BarChart3, Cpu, GraduationCap, Radio, Monitor, DollarSign } from "lucide-react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { publicImagesByCategory } from "@/data/publicImages";
import { CONSULTORIA_WA_URL } from "@/lib/consultoria";

const services = [
  {
    icon: DollarSign,
    title: "Viabilidade Financeira",
    desc: "Estudos de viabilidade para novos negócios, produtos e serviços com análise de CAPEX/OPEX e ROI.",
    href: CONSULTORIA_WA_URL,
  },
  {
    icon: BarChart3,
    title: "Gestão Radiológica",
    desc: "Modelo de gestão completo para setores de imagem com indicadores, processos e padronização.",
    href: CONSULTORIA_WA_URL,
  },
  {
    icon: GraduationCap,
    title: "Treinamentos e Cursos",
    desc: "Capacitação de equipes em protocolos, equipamentos e boas práticas operacionais.",
    href: CONSULTORIA_WA_URL,
  },
  {
    icon: Radio,
    title: "TeleRadiologia",
    desc: "Soluções de laudos a distância com qualidade e agilidade para sua operação.",
    href: CONSULTORIA_WA_URL,
  },
  {
    icon: Monitor,
    title: "Equipamentos",
    desc: "Venda, locação e assistência técnica para equipamentos radiológicos.",
    href: CONSULTORIA_WA_URL,
  },
  {
    icon: Cpu,
    title: "Planejamento Estratégico",
    desc: "Projetos radiológicos e consultoria estratégica para crescimento sustentável.",
    href: CONSULTORIA_WA_URL,
  },
];

const ServicesSection = () => {
  const images = publicImagesByCategory.gallery.slice(4, 10);

  return (
    <section id="servicos" className="section-padding section-scroll-target bg-djr-darker relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="container-djr relative z-10">
        <SectionHeading
          badge="Serviços"
          title="Soluções completas para Apoio Diagnóstico"
          subtitle="Da estratégia à operação, cobrimos todas as frentes do seu setor de imagem."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glow-border p-6 h-full group flex flex-col hover:bg-card/80 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <ResponsiveImage
                  src={images[i]?.src ?? publicImagesByCategory.icon[0].src}
                  alt={images[i]?.alt ?? publicImagesByCategory.icon[0].alt}
                  sources={images[i]?.sources}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
                  loading="lazy"
                  style={{ filter: "contrast(1.15) brightness(1) saturate(1.4)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/15 via-background/35 to-background/80 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-heading font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
