import { BarChart3, Cpu, GraduationCap, Radio, Monitor, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

const services = [
  {
    icon: DollarSign,
    title: "Viabilidade Financeira",
    desc: "Estudos de viabilidade para novos negócios, produtos e serviços com análise de CAPEX/OPEX e ROI.",
    href: "/servicos",
  },
  {
    icon: BarChart3,
    title: "Gestão Radiológica",
    desc: "Modelo de gestão completo para setores de imagem com indicadores, processos e padronização.",
    href: "/servicos",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos e Cursos",
    desc: "Capacitação de equipes em protocolos, equipamentos e boas práticas operacionais.",
    href: "/servicos",
  },
  {
    icon: Radio,
    title: "TeleRadiologia",
    desc: "Soluções de laudos a distância com qualidade e agilidade para sua operação.",
    href: "/servicos",
  },
  {
    icon: Monitor,
    title: "Equipamentos",
    desc: "Venda, locação e assistência técnica para equipamentos radiológicos.",
    href: "/servicos",
  },
  {
    icon: Cpu,
    title: "Planejamento Estratégico",
    desc: "Projetos radiológicos e consultoria estratégica para crescimento sustentável.",
    href: "/servicos",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-djr-darker relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-15" />
      <div className="container-djr relative z-10">
        <SectionHeading
          badge="Serviços"
          title="Soluções completas para Apoio Diagnóstico"
          subtitle="Da estratégia à operação, cobrimos todas as frentes do seu setor de imagem."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <Link
                to={s.href}
                className="glass-card glow-border p-6 h-full group flex flex-col hover:bg-card/80 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-heading font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
