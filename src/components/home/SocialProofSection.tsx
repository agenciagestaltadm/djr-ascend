import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { publicImagesByCategory } from "@/data/publicImages";

const clients = [
  "Hospital HSMA",
  "Hospital HGB",
  "Hospital HSC",
  "Hospital HCA",
  "Medicine Imagem",
  "UniMagem",
];

const claims = [
  "Modelo de gestão implantado",
  "Capacitação de equipes",
  "Otimização de protocolos",
  "Redução de glosas",
];

const SocialProofSection = () => {
  const banner = publicImagesByCategory.heroBackground[0];
  const image = publicImagesByCategory.gallery[17];
  const fallbackSrc =
    "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='2'%20height='2'%3E%3Crect%20width='2'%20height='2'%20fill='black'/%3E%3C/svg%3E";

  return (
    <section className="section-padding bg-djr-darker relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="container-djr relative z-10">
        <SectionHeading
          badge="Confiança"
          title="Quem já transformou resultados com a DJR"
        />

        {/* Client names */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-14">
            {clients.map((client) => (
              <div
                key={client}
                className="px-6 py-3 rounded-lg border border-border/50 bg-card/40 text-sm font-heading font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Claims */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            {claims.map((claim) => (
              <span
                key={claim}
                className="px-4 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20"
              >
                {claim}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal direction="left">
            <div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                Evidência no que você vê e no que você mede
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                A DJR atua com processos e indicadores para aumentar produtividade, reduzir glosas e padronizar rotinas.
                As imagens ao longo do site reforçam a presença prática no dia a dia do setor.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="glass-card glow-border overflow-hidden relative">
              <ResponsiveImage
                src={banner.src}
                alt={banner.alt}
                sources={banner.sources}
                fallbackSrc={fallbackSrc}
                className="w-full h-auto object-cover opacity-80"
                loading="lazy"
                style={{ filter: "contrast(1.15) saturate(1.06) brightness(0.92)" }}
              />
              <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/35 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/95 via-background/55 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-40 h-28 rounded-xl overflow-hidden border border-border/40">
                <ResponsiveImage
                  src={image?.src ?? publicImagesByCategory.icon[0].src}
                  alt={image?.alt ?? publicImagesByCategory.icon[0].alt}
                  sources={image?.sources}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
