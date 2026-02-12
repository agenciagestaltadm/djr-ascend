import { X, Check } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const before = [
  "Erros técnicos recorrentes",
  "Retrabalho e perda de tempo",
  "Glosas frequentes",
  "Baixa padronização",
  "Equipe sem treinamento contínuo",
];

const after = [
  "Protocolos definidos e seguidos",
  "Equipe treinada e produtiva",
  "Fluxo estável e eficiente",
  "Indicadores monitorados",
  "Redução significativa de glosas",
];

const BeforeAfterSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-djr">
        <SectionHeading
          badge="Transformação"
          title="Antes e depois da DJR"
          subtitle="Veja o impacto real da nossa assessoria no dia a dia do seu setor."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <div className="glass-card p-8 border border-destructive/20 h-full">
              <h3 className="font-heading font-bold text-lg text-destructive mb-6">Antes</h3>
              <ul className="space-y-4">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="glass-card p-8 border border-primary/30 glow-border h-full">
              <h3 className="font-heading font-bold text-lg text-primary mb-6">Depois</h3>
              <ul className="space-y-4">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
