import { Link } from "react-router-dom";
import { Building2, Mail, Phone, Instagram } from "lucide-react";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { publicImagesByCategory } from "@/data/publicImages";

const Footer = () => {
  const logo = publicImagesByCategory.logo[0];

  return (
    <footer className="bg-djr-darker border-t border-border/50">
      <div className="container-djr py-8">
        <div className="grid gap-8 desktop:grid-cols-3">
          <div className="text-center desktop:text-left">
            <Link to="/" className="inline-flex justify-center desktop:justify-start mb-4 w-full">
              <ResponsiveImage
                src={logo.src}
                alt={logo.alt}
                sources={logo.sources}
                className="w-[140px] min-w-[120px] h-auto object-contain"
                loading="eager"
                decoding="async"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Gestão, tecnologia e treinamento para elevar o Apoio Diagnóstico.
            </p>
          </div>

          <div className="text-center desktop:text-left">
            <h4 className="font-heading font-semibold text-sm text-foreground mb-3">Links úteis</h4>
            <nav className="grid gap-2">
              <Link to="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-uso" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <a href="/#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          <div className="text-center desktop:text-left">
            <h4 className="font-heading font-semibold text-sm text-foreground mb-3">Contato</h4>
            <div className="grid gap-2">
              <a
                href="tel:+5591989948319"
                className="inline-flex items-center justify-center desktop:justify-start gap-2 rounded-lg border border-border/40 bg-card/20 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                (91) 98994-8319
              </a>
              <a
                href="mailto:djrdiagnosticos@gmail.com"
                className="inline-flex items-center justify-center desktop:justify-start gap-2 rounded-lg border border-border/40 bg-card/20 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                djrdiagnosticos@gmail.com
              </a>
              <a
                href="https://instagram.com/djr.assessoria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center desktop:justify-start gap-2 rounded-lg border border-border/40 bg-card/20 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary" />
                @djr.assessoria
              </a>
              <div className="inline-flex items-center justify-center desktop:justify-start gap-2 rounded-lg border border-border/40 bg-card/20 px-4 py-3 text-sm text-muted-foreground">
                <Building2 className="w-4 h-4 text-primary" />
                21.758.235/0001-17
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col desktop:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DJR Assessoria Médica. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link to="/politica-de-privacidade" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
