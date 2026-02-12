## Objetivo
- Reposicionar o parágrafo e os dois botões da Hero para ficarem mais altos e mais compactos.
- Suavizar o “corte” da imagem (região inferior/pernas) com blend/gradiente responsivo.
- Manter responsividade, acessibilidade e registrar as mudanças de CSS.

## 1) Reposicionamento do `p` + CTAs (`a` e `a`)
- Ajustar a composição na Hero em [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx):
  - Envolver o bloco do `p` + botões em um wrapper dedicado (ex.: `div` com `space-y-*`) para controlar a distância entre eles sem depender de `mb-*`.
  - Aplicar um “lift” responsivo no wrapper (ex.: `relative md:-mt-2 lg:-mt-4`) para subir o `p` e os botões dentro da viewport sem quebrar mobile.
  - Reduzir o espaçamento vertical entre `p` e botões (ex.: `space-y-3 md:space-y-4`) e revisar `gap` dos botões para manter hierarquia visual.
  - Preservar legibilidade (sem reduzir demais `text-lg`/`leading-relaxed`) e manter foco/teclado intactos.

## 2) Tratamento da imagem (`img`) com blend/gradiente
- Criar uma utilidade CSS para “fade” no rodapé da figura em [index.css](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/index.css):
  - Adicionar uma classe (ex.: `.hero-figure-fade`) em `@layer utilities` usando `mask-image: linear-gradient(...)` + `-webkit-mask-image` como compatibilidade.
  - Configurar `mask-repeat: no-repeat` e `mask-size: 100% 100%` para manter o efeito consistente e responsivo.
- Aplicar essa classe diretamente no `ResponsiveImage` da figura em [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx).
- Refinar o overlay já existente no container da imagem (o `div` com `bg-gradient-to-t`) para complementar o fade:
  - Aumentar a altura do gradiente (ex.: `h-28 → h-36 md:h-44`) e ajustar stops (`from-background via-background/... to-transparent`) para integrar melhor com o fundo.

## 3) Responsividade e acessibilidade
- Garantir que todos os ajustes sejam responsivos via classes `md:*`/`lg:*`.
- Manter contraste e leitura do `p`, sem reduzir tamanho ao ponto de perder legibilidade.
- Não mexer em `href`, `rel`, `target` nem nos estilos de foco (`focus-visible:*`) dos botões.

## 4) Testes (navegadores/dispositivos)
- Validar no dev server em larguras típicas: 360px, 768px, 1024px, 1440px.
- Checar o fade da imagem em engines diferentes:
  - Chromium (Chrome/Edge): via `-webkit-mask-image`.
  - Firefox: via `mask-image` padrão.
- Rodar build de produção (`npm run build`) para garantir que não há regressões.

## 5) Documentação das mudanças de CSS
- Criar um documento curto em `.trae/documents/` descrevendo:
  - Quais classes novas/alteradas foram adicionadas na Hero.
  - A utilidade `.hero-figure-fade` (o que faz e por quê).
  - Como ajustar a intensidade/altura do fade no futuro.