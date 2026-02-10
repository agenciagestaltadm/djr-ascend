import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20do%20meu%20setor%20de%20imagem.";

const interests = [
  "Consultoria/Assessoria",
  "Gestão Radiológica",
  "Treinamentos",
  "Viabilidade Financeira",
  "Equipamentos",
  "TeleRadiologia",
  "Outro",
];

const ContactCTASection = () => {
  const { toast } = useToast();
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return; // antispam

    if (!consent) {
      toast({
        title: "Consentimento necessário",
        description: "Aceite a política de privacidade para enviar.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <section className="section-padding relative" id="contato">
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="container-djr relative z-10">
        <SectionHeading
          badge="Contato"
          title="Solicite uma avaliação do seu setor de imagem"
          subtitle="Preencha o formulário ou fale diretamente no WhatsApp. Respondemos em até 24h úteis."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit} className="glass-card glow-border p-8 space-y-5">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="absolute opacity-0 pointer-events-none h-0"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Nome *</label>
                  <Input placeholder="Seu nome" required maxLength={100} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Empresa *</label>
                  <Input placeholder="Hospital / Clínica" required maxLength={100} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Cidade/UF *</label>
                  <Input placeholder="Ex: Belém/PA" required maxLength={50} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">WhatsApp *</label>
                  <Input placeholder="(00) 00000-0000" required maxLength={20} type="tel" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Interesse *</label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {interests.map((i) => (
                      <SelectItem key={i} value={i}>{i}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Mensagem</label>
                <Textarea placeholder="Descreva brevemente sua necessidade..." rows={3} maxLength={1000} />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="lgpd"
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                />
                <label htmlFor="lgpd" className="text-xs text-muted-foreground leading-snug cursor-pointer">
                  Concordo com a <a href="/politica-de-privacidade" className="text-primary underline">Política de Privacidade</a> e autorizo o contato. *
                </label>
              </div>

              <Button type="submit" className="w-full gap-2 font-heading font-semibold scan-line">
                <Send className="w-4 h-4" />
                Enviar mensagem
              </Button>
            </form>
          </ScrollReveal>

          {/* WhatsApp CTA */}
          <ScrollReveal direction="right">
            <div className="flex flex-col justify-center items-center text-center h-full">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                Prefere falar direto?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Clique no botão abaixo e converse com nossa equipe agora pelo WhatsApp.
              </p>
              <Button asChild size="lg" className="gap-2 font-heading font-semibold scan-line">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Abrir WhatsApp
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
