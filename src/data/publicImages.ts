export type PublicImageCategory = "logo" | "banner" | "hero" | "heroBackground" | "gallery" | "icon" | "favicon";

export type PublicImageSource = {
  type: string;
  srcSet: string;
  sizes?: string;
};

export type PublicImage = {
  key: string;
  src: string;
  alt: string;
  category: PublicImageCategory;
  sources?: PublicImageSource[];
};

const webpSrcSet = (key: string, widths: number[]) =>
  widths.map((w) => `/optimized/${key}-${w}.webp ${w}w`).join(", ");

const sizesGallery = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";
const sizesBanner = "100vw";
const sizesLogo = "160px";
const sizesHero = "(min-width: 1280px) 420px, (min-width: 1024px) 360px, 80vw";
const sizesHeroBackground = "100vw";

export const publicImages: PublicImage[] = [
  {
    key: "logo-djr",
    src: "/Black%20And%20White%20Minimalist%20Typography%20Personal%20Logo.png",
    alt: "Logo DJR",
    category: "logo",
    sources: [
      {
        type: "image/webp",
        srcSet: webpSrcSet("logo-djr", [256, 512]),
        sizes: sizesLogo,
      },
    ],
  },
  {
    key: "banner-screencapture",
    src: "/screencapture-teiahealth-ninsaude-clinic-lp-ads-2026-02-10-13_23_11.png",
    alt: "Imagem de banner e fundo da página",
    category: "banner",
    sources: [
      {
        type: "image/webp",
        srcSet: webpSrcSet("banner-screencapture", [960, 1280, 1920]),
        sizes: sizesBanner,
      },
    ],
  },
  {
    key: "hero-bg",
    src: "/hero-bg.jpg",
    alt: "Sala de tomografia com iluminação vermelha",
    category: "heroBackground",
    sources: [
      {
        type: "image/webp",
        srcSet: webpSrcSet("hero-bg", [960, 1280, 1920, 2560]),
        sizes: sizesHeroBackground,
      },
    ],
  },
  {
    key: "hero-dr-mike",
    src: "/𝓓𝓻_%20𝓜𝓲𝓴𝓮_.png",
    alt: "Imagem de médico representando assessoria médica",
    category: "hero",
    sources: [
      {
        type: "image/webp",
        srcSet: webpSrcSet("hero-dr-mike", [768, 1024, 1440, 1920]),
        sizes: sizesHero,
      },
    ],
  },
  {
    key: "icon-placeholder",
    src: "/placeholder.svg",
    alt: "Ícone decorativo",
    category: "icon",
  },
  {
    key: "favicon",
    src: "/favicon.ico",
    alt: "Ícone do site (favicon)",
    category: "favicon",
  },
  {
    key: "gallery-01",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.11.25.jpeg",
    alt: "Foto da galeria DJR 01",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-01", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-02",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.11.45.jpeg",
    alt: "Foto da galeria DJR 02",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-02", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-03",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.11.45%20(1).jpeg",
    alt: "Foto da galeria DJR 03",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-03", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-04",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.12.14.jpeg",
    alt: "Foto da galeria DJR 04",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-04", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-05",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.12.39.jpeg",
    alt: "Foto da galeria DJR 05",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-05", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-06",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.13.02.jpeg",
    alt: "Foto da galeria DJR 06",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-06", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-07",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.13.03.jpeg",
    alt: "Foto da galeria DJR 07",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-07", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-08",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.13.03%20(1).jpeg",
    alt: "Foto da galeria DJR 08",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-08", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-09",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.15.14.jpeg",
    alt: "Foto da galeria DJR 09",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-09", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-10",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.15.37.jpeg",
    alt: "Foto da galeria DJR 10",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-10", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-11",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.15.59.jpeg",
    alt: "Foto da galeria DJR 11",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-11", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-12",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.16.21.jpeg",
    alt: "Foto da galeria DJR 12",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-12", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-13",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.18.21.jpeg",
    alt: "Foto da galeria DJR 13",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-13", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-14",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.18.22.jpeg",
    alt: "Foto da galeria DJR 14",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-14", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-15",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.19.00.jpeg",
    alt: "Foto da galeria DJR 15",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-15", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-16",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.19.14.jpeg",
    alt: "Foto da galeria DJR 16",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-16", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-17",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.19.29.jpeg",
    alt: "Foto da galeria DJR 17",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-17", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-18",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.19.52.jpeg",
    alt: "Foto da galeria DJR 18",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-18", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-19",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.20.04.jpeg",
    alt: "Foto da galeria DJR 19",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-19", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
  {
    key: "gallery-20",
    src: "/WhatsApp%20Image%202026-02-07%20at%2013.20.15.jpeg",
    alt: "Foto da galeria DJR 20",
    category: "gallery",
    sources: [
      { type: "image/webp", srcSet: webpSrcSet("gallery-20", [480, 768, 1024]), sizes: sizesGallery },
    ],
  },
];

export const publicImagesByCategory = {
  logo: publicImages.filter((img) => img.category === "logo"),
  banner: publicImages.filter((img) => img.category === "banner"),
  hero: publicImages.filter((img) => img.category === "hero"),
  heroBackground: publicImages.filter((img) => img.category === "heroBackground"),
  gallery: publicImages.filter((img) => img.category === "gallery"),
  icon: publicImages.filter((img) => img.category === "icon"),
  favicon: publicImages.filter((img) => img.category === "favicon"),
} as const;
