## O que vou reverter (global) para preservar o resto do site
- Reverter `.section-padding` em [index.css](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/index.css) ao valor original (voltar de `py-6` para `py-20 md:py-28 lg:py-32`).
- Reverter o espaçamento padrão do cabeçalho de seção em [SectionHeading.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/shared/SectionHeading.tsx) (voltar de `mb-6/mb-2/mt-2` para os valores anteriores `mb-12 md:mb-16`, badge `mb-4`, subtítulo `mt-4`).
- Reverter o tamanho padrão de botões (pois afeta espaçamento/layout global) em [button.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/ui/button.tsx) para os tamanhos originais (default `h-10`, `sm h-9`, `icon h-10 w-10`).

## Ajustes apenas dentro da sessão principal (o `div.container-djr` do Hero)
Arquivo-alvo: [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx)
- Ajustar paddings do `div.container-djr` (ex.: `pt-24 pb-12` → valores mais proporcionais) mantendo a hierarquia, sem mexer em nenhuma outra seção.
- Reduzir distâncias internas “excessivas” dentro do Hero:
  - Badge: diminuir `mb-4` (aprox. 8–12px).
  - Título (`h1`): reduzir `mb-6` no mobile para algo menor, mantendo o destaque.
  - Gap entre coluna texto e imagem (`lg:gap-10`): reduzir para aproximar sem colar.
  - Parágrafo: reduzir `mb-8` para harmonizar com os botões.
  - Botões: reduzir `gap-4` entre botões para 8–12px.
  - Badges abaixo da imagem no mobile (`mt-5`, `gap-3`): ajustar levemente para ficar mais compacto.
- Ajustar a integração da `img` (Dr Mike) dentro do mesmo `div`:
  - Revisar `max-w-[420px]`, `lg:mt-1` e alinhamento para encaixar melhor com o texto.
  - Manter o “fade” inferior e a sombra de base, mas ajustando dimensões se estiverem criando excesso de área vazia.

## Testes de responsividade (somente para validar)
- Conferir visualmente no preview nas larguras:
  - 375–480px (smartphones)
  - 768px (tablet)
  - 1024px+ (desktop)
- Verificar que apenas o Hero mudou e que as demais seções voltaram ao espaçamento original.
- Rodar diagnósticos TypeScript e smoke-check no browser.