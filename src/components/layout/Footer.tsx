import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-djr-darker border-t border-border/50">
      <div className="container-djr py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
                D
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                DJR<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Gestão, tecnologia e treinamento para elevar o Apoio Diagnóstico.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Serviços", href: "/servicos" },
                { label: "Portfólio", href: "/portfolio" },
                { label: "Quem Somos", href: "/quem-somos" },
                { label: "Contato", href: "/contato" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Serviços</h4>
            <nav className="flex flex-col gap-2">
              {[
                "Gestão Radiológica",
                "Planejamento Estratégico",
                "Treinamentos",
                "TeleRadiologia",
                "Equipamentos",
                "Viabilidade Financeira",
              ].map((item) => (
                <span key={item} className="text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+5500000000000"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (00) 00000-0000
              </a>
              <a
                href="mailto:contato@djrassessoria.com.br"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@djrassessoria.com.br
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DJR Assessoria Médica. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link to="/politica-de-privacidade" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
