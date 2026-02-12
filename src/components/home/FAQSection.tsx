import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Em quanto tempo vemos redução de erros e glosas?",
    a: "Dependendo do cenário, melhorias operacionais podem ser percebidas já nas primeiras semanas de implementação. Resultados mensuráveis em indicadores de glosa e erros técnicos costumam aparecer entre 30 e 90 dias.",
  },
  {
    q: "Vocês atendem quais estados?",
    a: "Atuamos principalmente nas regiões Norte e Nordeste, com projetos em Pará, Piauí e outros estados. Consulte-nos para verificar disponibilidade na sua localidade.",
  },
  {
    q: "O treinamento é presencial?",
    a: "Sim, priorizamos treinamentos presenciais para garantir a qualidade e aplicabilidade prática. Também oferecemos módulos complementares remotos quando necessário.",
  },
  {
    q: "Vocês trabalham com hospitais e clínicas de quais portes?",
    a: "Atendemos desde clínicas de imagem até hospitais de grande porte, adaptando a metodologia à realidade e complexidade de cada operação.",
  },
  {
    q: "Vocês vendem ou alugam equipamentos? Como funciona?",
    a: "Sim, trabalhamos com venda, locação e assistência técnica de equipamentos radiológicos como tomógrafos, ressonâncias, mamógrafos, arcos cirúrgicos, entre outros. Entre em contato para um orçamento.",
  },
  {
    q: "Qual o investimento para uma consultoria?",
    a: "O investimento varia conforme o escopo do projeto (número de setores, equipamentos, equipe, duração). Fazemos uma avaliação inicial sem compromisso para apresentar uma proposta personalizada.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-djr-darker relative">
      <div className="container-djr">
        <SectionHeading
          badge="FAQ"
          title="Perguntas frequentes"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <AccordionItem
                  value={`faq-${i}`}
                  className="glass-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-heading font-medium text-foreground">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
