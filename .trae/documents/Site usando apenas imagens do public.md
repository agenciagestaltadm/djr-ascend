## Inventário de imagens em `public/`
- **Logo (contém “DJR”)**: `Black And White Minimalist Typography Personal Logo.png`
- **Banner/hero (imagem grande)**: `screencapture-teiahealth-ninsaude-clinic-lp-ads-2026-02-10-13_23_11.png`
- **Galeria (fotos)**: 19 arquivos `WhatsApp Image 2026-02-07 ... .jpeg`
- **Ícones utilitários**: `placeholder.svg`
- **Favicon**: `favicon.ico`

## Mudanças de código (para usar exclusivamente imagens do `public/`)
1. **Remover qualquer imagem fora do `public/`**
   - Substituir o `hero-bg.jpg` (atualmente em `src/assets`) por uma imagem do `public/` (ex.: o screenshot como hero, ou uma das fotos do WhatsApp).
   - Garantir que nenhuma seção importe imagens via `@/assets` ou URLs externas.

2. **Logo “DJR” no Header e Footer (com link para Home)**
   - Atualizar [Header.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/layout/Header.tsx) e [Footer.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/layout/Footer.tsx) para exibir a logo como `<img>` dentro de `<Link to="/">`.
   - Garantir **proporção** com `w-auto` + altura fixa (ex.: `h-10` no header e `h-12` no footer) e `object-contain`.
   - `alt` descritivo (ex.: “Logo DJR Assessoria Médica”).

3. **Catálogo + categorização no código (fonte única de verdade)**
   - Criar um arquivo de dados (ex.: `src/data/publicImages.ts`) que lista todas as imagens do `public/` com:
     - `src` (caminho público), `alt`, `category` (logo/banner/galeria/ícone), e metadados úteis (`width/height` quando conhecido).
   - Isso atende a “identificar e categorizar” e evita imagens “perdidas” sem alt.

4. **Usar todas as imagens do `public/` no conteúdo visual**
   - Adicionar uma seção de **Galeria** na Home (ou uma seção “Portfólio”) que renderize as 19 imagens do WhatsApp.
   - Usar o screenshot como **banner/hero** (ou em uma seção “Antes/Depois / Cases”) para garantir uso do arquivo.
   - Usar `placeholder.svg` como fallback (ex.: quando uma imagem falhar) e como elemento decorativo leve onde fizer sentido.

## Performance e acessibilidade
1. **Lazy loading padronizado**
   - Criar um componente `ResponsiveImage` (ex.: `src/components/shared/ResponsiveImage.tsx`) que aplica por padrão:
     - `loading="lazy"` (exceto logo/header e hero acima da dobra, que podem ser `eager`)
     - `decoding="async"`
     - `width`/`height` (quando disponível) para reduzir CLS

2. **Responsividade**
   - Para imagens grandes (hero/galeria), usar `sizes` e `srcSet` (principalmente após otimização) e CSS `max-w-full h-auto`.

3. **Otimização de imagens para web (JPG/PNG/WebP)**
   - Adicionar um script de build (Node) para gerar versões otimizadas em WebP a partir das imagens do `public/` (mantendo originais):
     - Ex.: `public/optimized/<nome>-480.webp`, `-768.webp`, `-1280.webp`
   - Implementar `<picture>` no `ResponsiveImage` com `<source type="image/webp" ...>` + fallback para JPG/PNG.
   - Isso melhora peso/tempo de carregamento sem depender de assets fora do `public/`.

## Validação
- Conferir no navegador:
  - Logo aparece nítida no header e footer e clica para “/”.
  - Nenhuma imagem é importada de `src/assets`.
  - Galeria carrega responsiva, com `alt` descritivo e lazy loading.
  - Lighthouse: melhoria em LCP/CLS (especialmente após WebP).
