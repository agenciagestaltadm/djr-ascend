# Ajustes na Hero — reposicionamento e blend da imagem

## Arquivos alterados
- [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx)
- [index.css](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/index.css)

## 1) Reposicionamento do parágrafo e CTAs

### O que foi feito
- O parágrafo e os botões (CTAs) foram agrupados em um wrapper único para controlar melhor o espaçamento vertical.
- Esse wrapper ganhou um deslocamento vertical negativo responsivo para elevar o bloco dentro da viewport sem prejudicar mobile.

### Classes relevantes (Hero)
- Wrapper do bloco (parágrafo + botões):
  - `relative sm:-mt-1 md:-mt-2 lg:-mt-4`
  - `space-y-3 md:space-y-4`
- Parágrafo:
  - Removido `mb-*` e o espaçamento passa a ser do `space-y-*` do wrapper.
- CTAs:
  - `gap-2 md:gap-3` para reduzir levemente a distância entre os botões sem comprometer clique/toque.

### Como ajustar no futuro
- Quer subir mais/menos o bloco? Ajuste o `-mt-*` do wrapper.
- Quer deixar mais “solto”/“compacto”? Ajuste `space-y-*` do wrapper e/ou o `gap-*` dos CTAs.

## 2) Blend/gradiente na base da imagem (efeito “fade”)

### Objetivo
Suavizar a região inferior (pernas/recorte) para integrar melhor com o fundo, reduzindo a percepção de “corte seco”.

### O que foi feito
- Criada a utilidade `.hero-figure-fade` em `@layer utilities` para aplicar um fade via máscara:
  - `mask-image: linear-gradient(...)` (padrão)
  - `-webkit-mask-image: linear-gradient(...)` (compatibilidade com navegadores baseados em WebKit/Blink)
  - `mask-size: 100% 100%` e `mask-repeat: no-repeat` para manter o efeito responsivo e consistente.
- Aplicada a classe `hero-figure-fade` no `ResponsiveImage` da figura da Hero.
- Reforçado o gradiente inferior já existente no container da imagem:
  - `h-36 md:h-44`
  - `bg-gradient-to-t from-background via-background/80 to-transparent`

### Como ajustar no futuro
- Para um fade mais forte (sumir mais cedo): diminua a porcentagem do “ponto sólido” (ex.: `78%` → `72%`).
- Para um fade mais sutil (sumir mais tarde): aumente essa porcentagem (ex.: `78%` → `84%`).
- Para “misturar” mais com o fundo: aumente a altura do gradiente do overlay (`h-*`) e/ou aumente o `via-background/*`.

## Notas de compatibilidade
- A máscara usa `mask-image` e `-webkit-mask-image` para cobrir Firefox e Chromium/WebKit.
- O overlay (`bg-gradient-to-t`) funciona como complemento visual e também ajuda caso algum browser ignore a máscara.

