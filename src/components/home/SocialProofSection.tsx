import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

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
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
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
          <div className="flex flex-wrap justify-center gap-3">
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
      </div>
    </section>
  );
};

export default SocialProofSection;
