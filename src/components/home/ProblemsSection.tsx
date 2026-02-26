import { AlertTriangle, RotateCcw, FileX, TrendingDown } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { publicImagesByCategory } from "@/data/publicImages";

const problems = [
  {
    icon: FileX,
    title: "Glosas e erros técnicos",
    desc: "Falhas em protocolos e documentação que geram perdas financeiras recorrentes.",
  },
  {
    icon: RotateCcw,
    title: "Retrabalho e baixa produtividade",
    desc: "Processos despadronizados que consomem tempo e recursos desnecessários.",
  },
  {
    icon: AlertTriangle,
    title: "Protocolos inconsistentes",
    desc: "Falta de padronização entre equipes, equipamentos e turnos.",
  },
  {
    icon: TrendingDown,
    title: "Crescimento sem planejamento",
    desc: "Expansão sem estudo de viabilidade que gera risco financeiro e operacional.",
  },
];

const ProblemsSection = () => {
  const images = publicImagesByCategory.gallery.slice(0, 4);

  return (
    <section className="section-padding relative">
      <div className="container-djr">
        <SectionHeading
          badge="Desafios"
          title="Problemas que resolvemos"
          subtitle="Identificamos e tratamos os gargalos que travam a eficiência do seu setor de imagem."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="glass-card glow-border p-6 h-full group hover:bg-card/80 transition-all duration-300 relative overflow-hidden">
                <ResponsiveImage
                  src={images[i]?.src ?? publicImagesByCategory.icon[0].src}
                  alt={images[i]?.alt ?? publicImagesByCategory.icon[0].alt}
                  sources={images[i]?.sources}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
                  loading="lazy"
                  style={{ filter: "contrast(1.15) brightness(1) saturate(1.4)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/75 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
