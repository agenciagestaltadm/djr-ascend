import { Award, Users, Zap, MapPin } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import CountUp from "@/components/shared/CountUp";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { publicImagesByCategory } from "@/data/publicImages";

const stats = [
  { icon: Award, value: 25, suffix: " anos", label: "de experiência" },
  { icon: Users, value: 10, suffix: " mil+", label: "alunos formados" },
  { icon: Zap, value: 11, suffix: " anos+", label: "no mercado (DJR)" },
  { icon: MapPin, value: 2, suffix: " regiões", label: "Norte e Nordeste" },
];

const FounderSection = () => {
  const images = publicImagesByCategory.gallery.slice(13, 17);

  return (
    <section id="quem-somos" className="section-padding section-scroll-target bg-djr-darker relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />
      <div className="container-djr relative z-10">
        <SectionHeading
          badge="Autoridade"
          title="Daniel Jr — 25 anos de experiência"
          subtitle="Pioneiro em tecnologias e procedimentos radiológicos na região Norte, com vasta atuação em hospitais e clínicas."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <div className="glass-card p-6 text-center group hover:border-primary/30 transition-colors relative overflow-hidden">
                <ResponsiveImage
                  src={images[i]?.src ?? publicImagesByCategory.icon[0].src}
                  alt={images[i]?.alt ?? publicImagesByCategory.icon[0].alt}
                  sources={images[i]?.sources}
                  className="absolute inset-0 w-full h-full object-cover opacity-18 pointer-events-none select-none"
                  loading="lazy"
                  style={{ filter: "grayscale(1) contrast(1.15) brightness(0.75)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/70 to-background/95 pointer-events-none" />
                <div className="relative z-10">
                  <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-foreground mb-1">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="glass-card glow-border p-8 max-w-3xl mx-auto">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Pioneirismos e destaques</h3>
            <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Pioneiro na tomografia multislice 128 canais na região Norte
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Realização de angiocoronárias em múltiplas plataformas
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Atuação em hospitais e clínicas radiológicas de diversas complexidades
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Formação de milhares de profissionais em cursos e treinamentos especializados
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FounderSection;
