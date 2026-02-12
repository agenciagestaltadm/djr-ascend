## Entendimento do que será alterado
- O `div` de fundo citado é o background do Hero em [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx) (camada `absolute inset-0`).
- O `img` principal citado é o personagem “Dr Mike” (`/𝓓𝓻_%20𝓜𝓲𝓴𝓮_.png`) no Hero.
- O `img` que deve ser removido é o banner/screenshot atualmente usado na seção de confiança em [SocialProofSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/SocialProofSection.tsx) (hoje ele vem do item `banner-screencapture` do catálogo).

## 1) Substituir o fundo do Hero pelo novo background
- Adicionar a nova imagem enviada (sala de tomografia) na pasta `public/` com um nome estável (ex.: `hero-mri-room.jpg` ou `.png`).
- Cadastrar essa imagem no catálogo em [publicImages.ts](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/data/publicImages.ts) (nova categoria `heroBackground`/`background`, ou reutilizar `banner` com chave própria).
- Atualizar [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx) para usar esse novo item como `backgroundImage`, mantendo `object-cover`, proporção e boa leitura do texto.

## 2) Melhorar qualidade do `img` (Dr Mike) com upscaling/sharpen
- Atualizar o pipeline de otimização em [optimize-public-images.mjs](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/scripts/optimize-public-images.mjs) para o job `hero-dr-mike`:
  - Gerar versões WebP maiores (ex.: 768/1024/1440/1920) e permitir `withoutEnlargement: false` para upscaling.
  - Aplicar `sharpen()` moderado no sharp (evitar halos).
  - Ajustar `quality` para manter nitidez.
- Atualizar o `srcSet`/`sizes` do item `hero-dr-mike` no catálogo ([publicImages.ts](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/data/publicImages.ts)) para apontar para as novas larguras.

## 3) Disfarçar o corte das pernas (transição visual suave)
- No container da imagem Dr Mike em [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx), adicionar uma combinação de elementos para “sumir” o corte:
  - Fade inferior (overlay `bg-gradient-to-t` do background para transparente) cobrindo os últimos ~80–140px.
  - “Chão”/sombra suave (blur + radial gradient) para ancorar o personagem.
  - Opcional: detalhe decorativo discreto (padrão/shape) alinhado à paleta do site.

## 4) Remover completamente o `img` atual (screenshot) da composição
- Em [SocialProofSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/SocialProofSection.tsx), remover o uso do item `banner-screencapture` (o screenshot) para não restar espaço vazio.

## 5) Inserir a nova imagem no lugar do `img` removido
- Reaproveitar a mesma imagem nova (sala de tomografia) como banner da seção Social Proof, ou cadastrar um segundo item se você quiser separar “Hero background” de “Section banner”.
- Ajustar `object-position`, overlays e opacidade para casar com a paleta (vermelho/neon) e manter legibilidade do texto sobreposto.

## 6) Ajustes finais e validação (responsivo + qualidade)
- Ajustar brilho/contraste/saturação via filtros leves e overlays para uniformidade entre:
  - novo background do Hero
  - imagem Dr Mike (após upscaling)
  - banner da SocialProof
- Validar em desktop/tablet/mobile:
  - stack do Hero (texto + imagem)
  - fade inferior ocultando o corte
  - sem “saltos” de layout e sem espaços vazios na seção SocialProof
- Rodar novamente geração `public/optimized/`, testes e build.

Se você confirmar, eu executo as alterações (incluindo salvar a nova imagem no `public/`, regenerar WebP e atualizar os componentes).