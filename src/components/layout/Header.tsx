import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { publicImagesByCategory } from "@/data/publicImages";
import { CONSULTORIA_CTA_LABEL, CONSULTORIA_WA_URL } from "@/lib/consultoria";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "Contato", href: "/#contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const logo = publicImagesByCategory.logo[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/50 py-3 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.9)]"
          : "bg-background/55 backdrop-blur-xl border-b border-border/30 py-4"
      }`}
    >
      <div className="container-djr flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="rounded-xl bg-white/95 p-1.5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] ring-1 ring-black/10">
            <ResponsiveImage
              src={logo.src}
              alt={logo.alt}
              sources={logo.sources}
              className="h-10 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-primary text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" className="gap-2 font-heading font-semibold">
            <a href={CONSULTORIA_WA_URL} target="_blank" rel="noopener noreferrer">
              <CalendarClock className="w-4 h-4" />
              {CONSULTORIA_CTA_LABEL}
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <nav className="container-djr py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-base font-medium py-2 transition-colors text-muted-foreground hover:text-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="gap-2 mt-2 font-heading">
                <a href={CONSULTORIA_WA_URL} target="_blank" rel="noopener noreferrer">
                  <CalendarClock className="w-4 h-4" />
                  {CONSULTORIA_CTA_LABEL}
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
