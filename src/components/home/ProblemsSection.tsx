import { AlertTriangle, RotateCcw, FileX, TrendingDown } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

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
  return (
    <section className="section-padding relative">
      <div className="container-djr">
        <SectionHeading
          badge="Desafios"
          title="Problemas que resolvemos"
          subtitle="Identificamos e tratamos os gargalos que travam a eficiência do seu setor de imagem."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="glass-card glow-border p-6 h-full group hover:bg-card/80 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
