import { useEffect, useMemo, useState } from "react";
import { CalendarClock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResponsiveImage from "@/components/shared/ResponsiveImage";
import { publicImagesByCategory } from "@/data/publicImages";
import { CONSULTORIA_CTA_LABEL, CONSULTORIA_WA_URL } from "@/lib/consultoria";

const badges = [
  "+11 anos no mercado",
  "Atuação Norte e Nordeste",
  "Hospitais e clínicas",
  "Treinamento e padronização",
];

const rotatingWords = ["produtividade", "eficiência", "qualidade"];
const ROTATING_WORD_MS = 2600;

const LIGHT_FALLBACK_SVG =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='2'%20height='2'%3E%3Crect%20width='2'%20height='2'%20fill='%23fafafa'/%3E%3C/svg%3E";

const HeroSection = () => {
  const backgroundImage = publicImagesByCategory.heroBackground[0];
  const heroFigure = publicImagesByCategory.hero[0];
  const words = useMemo(() => rotatingWords, []);
  const longestWord = useMemo(
    () => words.reduce((a, b) => (a.length >= b.length ? a : b), words[0] ?? ""),
    [words],
  );
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setWordIndex((i) => (i + 1) % words.length), ROTATING_WORD_MS);
    return () => window.clearInterval(id);
  }, [words.length]);

  const activeWord = words[wordIndex] ?? rotatingWords[0];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ResponsiveImage
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          sources={backgroundImage.sources}
          fallbackSrc={LIGHT_FALLBACK_SVG}
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
          style={{ filter: "contrast(1.12) saturate(1.02) brightness(0.9)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/70 to-background/40" />
        <div className="absolute inset-0 tech-grid opacity-25" />
      </div>

      {/* Red glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container-djr relative z-10 pt-20 md:pt-24 pb-12 md:pb-14">
        <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-2">
                Assessoria Médica Especializada
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col lg:flex-row lg:items-start lg:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-3 lg:mb-0 lg:flex-1">
                Reduza glosas e aumente a{" "}
                <span className="relative inline-block align-baseline">
                  <span className="invisible">{longestWord}</span>
                  <span className="absolute inset-0 flex items-baseline">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={activeWord}
                        className="text-gradient-red whitespace-nowrap"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                      >
                        {activeWord}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>{" "}
                do seu Apoio Diagnóstico.
              </h1>

              <div className="relative w-full max-w-[400px] mx-auto lg:mx-0 lg:mt-0 lg:flex-shrink-0">
                <div className="relative">
                  <ResponsiveImage
                    src={heroFigure.src}
                    alt={heroFigure.alt}
                    sources={heroFigure.sources}
                    className="w-full h-auto object-contain"
                    loading="eager"
                    fetchPriority="high"
                    style={{
                      objectPosition: "center top",
                      WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                      maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                    }}
                  />
                </div>

                <div className="hidden lg:block">
                  {badges.map((badge, i) => (
                    <motion.div
                      key={badge}
                      className={`absolute glass-card glow-border px-4 py-3 text-center ${
                        i === 0
                          ? "-top-4 -left-6"
                          : i === 1
                            ? "-top-6 -right-8"
                            : i === 2
                              ? "bottom-16 -left-10"
                              : "bottom-12 -right-10"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: [0, -4, 0] }}
                      transition={{
                        delay: 0.5 + i * 0.08,
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: [0.2, 0.8, 0.2, 1],
                      }}
                    >
                      <span className="text-xs font-heading font-semibold text-foreground whitespace-nowrap">{badge}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
                  {badges.map((badge, i) => (
                    <motion.div
                      key={badge}
                      className="glass-card glow-border px-4 py-3 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: [0, -3, 0] }}
                      transition={{
                        delay: 0.45 + i * 0.07,
                        duration: 3.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: [0.2, 0.8, 0.2, 1],
                      }}
                    >
                      <span className="text-xs font-heading font-semibold text-foreground">{badge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="relative sm:-mt-1 md:-mt-2 lg:-mt-4 space-y-3 md:space-y-4">
              <motion.p
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                +11 anos de experiência em gestão radiológica, tecnologia e treinamento
                para hospitais e clínicas em todo o Norte e Nordeste.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-2 md:gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Button asChild size="lg" className="gap-2 font-heading font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <a href={CONSULTORIA_WA_URL} target="_blank" rel="noopener noreferrer">
                    <CalendarClock className="w-5 h-5" />
                    {CONSULTORIA_CTA_LABEL}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 font-heading font-semibold text-base border-border hover:border-primary/50 hover:bg-primary/5"
                >
                  <a href="/#servicos">
                    Ver Serviços
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
