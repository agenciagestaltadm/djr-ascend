## Diagnóstico
- A Hero (o `div.container-djr ... pt-24 pb-14`) está em [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx#L40-L199); o “distante” vem principalmente de `pt-24`, `pb-14`, `lg:gap-8`, `mb-4` e `mb-6`.
- O restante do site (seções após a Hero) usa o padrão global `.section-padding` em [index.css](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/index.css#L132-L138) e os grids/cards usam muitos `gap-6`/`p-6` (ex.: [ServicesSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/ServicesSection.tsx#L51-L93)).

## Ajustes fora da Hero (deixar menos “colado”)
- Aumentar o respiro entre seções elevando levemente o token `.section-padding` em [index.css](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/index.css#L132-L134) (ex.: `py-20 → py-24`, `md:py-28 → md:py-32`, `lg:py-32 → lg:py-36`).
- Aumentar o espaçamento entre título/subtítulo e o conteúdo da seção ajustando o `mb-*` do wrapper em [SectionHeading.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/shared/SectionHeading.tsx#L10-L26) (ex.: `mb-12 → mb-14` e `md:mb-16 → md:mb-18`).
- Aumentar o “respiro” entre cards/itens em grids e listas nas seções da Home trocando `gap-6 → gap-8` e `space-y-3 → space-y-4` onde fizer sentido (arquivos típicos: `ServicesSection`, `ProblemsSection`, `CasesSection`, `BeforeAfterSection`, `FAQSection`, etc.).

## Ajustes na Hero (deixar os elementos mais próximos)
- Reduzir o padding vertical principal do container em [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx#L61-L62) (ex.: `pt-24 pb-14 → pt-20 pb-12`, mantendo responsividade se necessário).
- Reduzir a distância entre o H1 e a imagem no desktop em [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx#L73-L101) (ex.: `lg:gap-8 → lg:gap-6`).
- Reduzir margens verticais internas para encurtar o “stack” (ex.: `mb-4 → mb-3` no H1 e `mb-6 → mb-5` no parágrafo) em [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx#L79-L171).

## Validação visual
- Conferir Home em 3 larguras (mobile, tablet, desktop) garantindo que:
  - Seções após a Hero ganhem respiro perceptível.
  - Na Hero, título/imagem/parágrafo/botões fiquem mais “compactos” sem parecer apertado.
  - Não haja regressão de layout (quebra de grid, sobreposição de textos).

## Entrega
- Aplicar as mudanças nos arquivos citados e revisar rapidamente as principais seções (Hero + seções Home) para manter um espaçamento consistente no site todo, com exceção da Hero mais compacta como você pediu.