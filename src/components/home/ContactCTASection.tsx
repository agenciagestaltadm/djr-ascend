import { CalendarClock, Quote, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { publicImagesByCategory } from "@/data/publicImages";
import { CONSULTORIA_CTA_LABEL, CONSULTORIA_WA_URL } from "@/lib/consultoria";

const testimonials = [
  {
    quote: "Padronizamos rotinas e reduzimos retrabalho já nas primeiras semanas.",
    name: "Coordenação do Setor de Imagem",
    org: "Hospital parceiro",
  },
  {
    quote: "A consultoria trouxe clareza de indicadores e direcionou o plano de ação.",
    name: "Gestão Operacional",
    org: "Clínica de diagnóstico",
  },
  {
    quote: "Treinamento objetivo e aplicável, com impacto direto na qualidade dos exames.",
    name: "Liderança Técnica",
    org: "Serviço de imagenologia",
  },
];

const ContactCTASection = () => {
  const image = publicImagesByCategory.gallery[19];

  return (
    <section className="section-padding section-scroll-target relative" id="contato">
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="container-djr relative z-10">
        <SectionHeading
          badge="Consultoria"
          title="Agende uma consultoria para o seu setor de imagem"
          subtitle="Converse com nossa equipe e receba um direcionamento claro para reduzir glosas e elevar produtividade."
        />

        <div className="grid desktop:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ScrollReveal direction="left">
            <div className="glass-card glow-border p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">O que nossos parceiros relatam</p>
                  <p className="text-sm text-muted-foreground">Resultados práticos no dia a dia do setor.</p>
                </div>
              </div>

              <div className="grid gap-4">
                {testimonials.map((t) => (
                  <div key={t.quote} className="glass-card px-5 py-4 border border-border/40">
                    <p className="text-sm text-foreground leading-relaxed">{t.quote}</p>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <span className="text-xs text-muted-foreground">{t.name}</span>
                      <span className="text-xs text-muted-foreground">{t.org}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="glass-card glow-border p-8 flex flex-col justify-center items-center text-center h-full relative overflow-hidden">
              <ResponsiveImage
                src={image?.src ?? publicImagesByCategory.icon[0].src}
                alt={image?.alt ?? publicImagesByCategory.icon[0].alt}
                sources={image?.sources}
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
                loading="lazy"
                style={{ filter: "grayscale(1) contrast(1.15) brightness(0.75)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/70 to-background/95 pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <CalendarClock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                  Vamos alinhar seu próximo passo
                </h3>
                <p className="text-muted-foreground mb-5 max-w-sm">
                  Agende uma consultoria e receba orientação objetiva sobre rotinas, indicadores e melhorias para o setor.
                </p>
                <Button asChild size="lg" className="gap-2 font-heading font-semibold scan-line">
                  <a href={CONSULTORIA_WA_URL} target="_blank" rel="noopener noreferrer">
                    <CalendarClock className="w-5 h-5" />
                    {CONSULTORIA_CTA_LABEL}
                  </a>
                </Button>

                <div className="mt-5 w-full max-w-sm grid gap-3 text-left">
                  <a
                    href="tel:+5591989948319"
                    className="flex items-center gap-2 rounded-lg border border-border/40 bg-card/30 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    (91) 98994-8319
                  </a>
                  <a
                    href="mailto:djrdiagnosticos@gmail.com"
                    className="flex items-center gap-2 rounded-lg border border-border/40 bg-card/30 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    djrdiagnosticos@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
