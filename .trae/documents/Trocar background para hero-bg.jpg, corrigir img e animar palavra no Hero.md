## Diagnóstico rápido
- O `img` do banner (ex.: na seção Confiança) está apontando para `/hero-mri-room.png`, mas o arquivo correto existente é `public/hero-bg.jpg` (isso causa imagem quebrada/404 e pode afetar o layout).
- O `div` de fundo do Hero é a camada `absolute inset-0` em [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx). Hoje ele usa `heroBackground`, mas precisamos trocar para `hero-bg.jpg` e ajustar opacidade para ~0.3–0.5.
- A palavra no `span` é o trecho `text-gradient-red` dentro do `h1` no Hero; vamos substituir por um texto rotativo com transição suave.

## 1) Trocar o fundo do Hero para `hero-bg.jpg` + opacidade 0.3–0.5
- Atualizar o item de background no catálogo em [publicImages.ts](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/data/publicImages.ts):
  - Trocar `src` para `/hero-bg.jpg` (mantendo categoria `heroBackground`).
  - Ajustar `alt` e `sources` (WebP) para refletir a nova imagem.
- Ajustar em [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx):
  - Definir `opacity` do background para algo como `0.4`.
  - Ajustar levemente `filter` e overlays para manter o fundo sutil e a tipografia legível.

## 2) Corrigir o erro do `img` (imagem quebrada)
- Remover a dependência de `/hero-mri-room.png` e fazer todos os pontos que usam `heroBackground` apontarem para o item correto (`/hero-bg.jpg`).
- Atualizar a seção que exibe o banner (ex.: [SocialProofSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/SocialProofSection.tsx)) para garantir que o `img` carregue sem 404 e sem causar espaços/“saltos”.

## 3) Gerar WebP e garantir qualidade/performance
- Ajustar o pipeline em [optimize-public-images.mjs](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/scripts/optimize-public-images.mjs) para:
  - Trocar o job do background de `hero-mri-room.png` para `hero-bg.jpg`.
  - Gerar variantes WebP (ex.: 960/1280/1920/2560) e atualizar o `srcSet` no catálogo.
- Rodar novamente a otimização para preencher `public/optimized/` com as versões do novo background.

## 4) Animação no `span` (troca suave de palavras)
- Implementar um componente de texto rotativo no Hero usando `framer-motion` (já presente no projeto) com:
  - 2–3s por palavra (ex.: 2600ms)
  - transição `easeInOut`
  - efeito `fade` + `slide` leve (entrada/saída)
  - largura estabilizada (para não “pular” layout)
- Substituir o `span` atual `text-gradient-red` por esse componente, mantendo tipografia/tamanho/alinhamento do `h1`.

## 5) Validação
- Verificar no preview em desktop/tablet/mobile:
  - opacidade do fundo do Hero dentro da faixa 0.3–0.5
  - nenhuma imagem quebrada (sem 404)
  - animação fluida e sem shift de layout
- Rodar diagnósticos TypeScript + testes/build.
