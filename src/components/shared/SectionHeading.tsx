import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
};

export default SectionHeading;
