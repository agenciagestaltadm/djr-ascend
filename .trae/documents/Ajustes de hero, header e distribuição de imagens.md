## 1) Fundo do Hero (imagem anterior + mais destaque)
- Ajustar o background do Hero em [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx) para:
  - Trocar a imagem de fundo atual pela “anterior” conforme solicitado (vou interpretar como: **usar uma das imagens WhatsApp como background** em vez do `banner-screencapture`, mantendo `banner-screencapture` para outras áreas do site).
  - Aumentar visibilidade do fundo aplicando:
    - `opacity` maior (ex.: 0.45–0.6)
    - `filter` via classe/CSS inline (`contrast(1.15) saturate(1.05) brightness(0.95)`) 
    - reduzir a força do overlay `bg-gradient-to-r ...` para não “apagar” o fundo.

## 2) Cabeçalho (logo com alta visibilidade no fundo preto)
- Revisar [Header.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/layout/Header.tsx) para garantir contraste em qualquer estado (topo/scroll):
  - aplicar background semitransparente + blur **sempre**, e intensificar quando `isScrolled`.
  - envolver a logo com um “badge” (ex.: `bg-white/95`, `rounded-xl`, `p-1.5`, `shadow`, `ring`) para garantir leitura mesmo se a imagem tiver tipografia escura.
  - manter o link para Home e preservar proporção (`object-contain`).

## 3) Inserir `𝓓𝓻_ 𝓜𝓲𝓴𝓮_.png` ao lado do texto do `h1`
- Adicionar essa imagem do `public/` ao catálogo em [publicImages.ts](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/data/publicImages.ts) (nova categoria: `hero`/`illustration`).
  - Usar `src` com encoding para o espaço (ex.: `/𝓓𝓻_%20𝓜𝓲𝓴𝓮_.png`) e também gerar WebP via script.
- No Hero, criar um bloco “Título + imagem”:
  - Em desktop: `h1` à esquerda e o “Dr Mike” à direita (alinhado verticalmente e com boa escala).
  - Em mobile: imagem abaixo do `h1` (stack), mantendo legibilidade.

## 4) Efeito de flutuação (4 cards) ao redor da imagem principal
- Reestruturar o lado direito do Hero para ser um container `relative` com a imagem “Dr Mike” como elemento central.
- Posicionar os 4 cards (os `glass-card glow-border`) como elementos `absolute` ao redor da imagem (top-left, top-right, bottom-left, bottom-right), com `framer-motion` em loop (pequeno deslocamento Y/X) para sensação de flutuação.
- Garantir que os cards não saiam da área em resoluções menores (breakpoints para reposicionar/ocultar parcialmente e evitar overflow).

## 5) Distribuir as imagens (sem galeria)
- Remover/aposentar [GallerySection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/GallerySection.tsx) da Home e substituir por distribuição contextual.
- Estratégia para usar **todas as 20 imagens** sem agrupá-las:
  - Inserir imagens como “watermark” (fundo) dentro de cards/caixas existentes, com baixa opacidade e overlay:
    - 4 imagens em `ProblemsSection` (1 por card)
    - 6 imagens em `ServicesSection` (1 por card)
    - 3 imagens em `CasesSection` (1 por card)
    - 4 imagens em `FounderSection` (1 por card de estatística)
    - 3 imagens restantes distribuídas em `SocialProofSection`, `MethodSection` e `ContactCTASection` como blocos laterais (imagem + texto), alternando esquerda/direita.
  - Todas via [ResponsiveImage.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/shared/ResponsiveImage.tsx) com `loading="lazy"`, `decoding="async"`, e `sources` WebP (`srcSet`).
  - Padronizar estilo (mesmo raio de borda, mesma opacidade, mesmo espaçamento) para coesão visual.

## 6) Responsividade e performance
- Responsividade:
  - Checar breakpoints (desktop/tablet/mobile) focando no Hero (imagem + cards flutuantes) e nos cards com watermark.
  - Ajustar `aspect-ratio`, `max-w`, `overflow-hidden`, e posicionamentos absolutos para evitar cortes.
- Performance:
  - Atualizar o script de otimização para também gerar WebP do “Dr Mike” e garantir que as imagens usadas como watermark prefiram variações menores.
  - Validar que `picture/srcSet` está sendo usado nas imagens que possuem `sources`.

## Verificação
- Conferir no preview:
  - Logo com contraste no header em topo e após scroll.
  - Hero com fundo mais visível + “Dr Mike” ao lado do `h1`.
  - 4 cards flutuando ao redor da imagem principal sem quebrar layout.
  - Imagens distribuídas ao longo das seções sem grid/galeria.
  - Sem erros de TypeScript e testes passando.