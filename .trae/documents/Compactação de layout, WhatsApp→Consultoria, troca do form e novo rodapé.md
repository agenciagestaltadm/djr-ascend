## Contexto (o que está hoje)
- O espaçamento entre seções é controlado principalmente por `.section-padding` em [index.css](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/index.css) (atualmente muito grande).
- Os botões/links para WhatsApp aparecem em: [Header.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/layout/Header.tsx), [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx), [CasesSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/CasesSection.tsx), [ContactCTASection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/ContactCTASection.tsx), [WhatsAppFloat.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/layout/WhatsAppFloat.tsx), [Footer.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/layout/Footer.tsx).
- O `form` a remover é o bloco principal em [ContactCTASection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/ContactCTASection.tsx).
- O rodapé atual é 4 colunas e precisa virar 3 colunas com contatos profissionais em [Footer.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/layout/Footer.tsx).

## 1) Ajuste de espaçamento (grid/gaps mais compactos)
- Atualizar `.section-padding` em [index.css](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/index.css) para um padrão compacto (ex.: `py-6`), mantendo consistência entre seções.
- Reduzir espaçamentos “padrão” do cabeçalho de seção em [SectionHeading.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/shared/SectionHeading.tsx) (ex.: `mb-12` → `mb-6`, `mt-4/mb-4` → `mt-2/mb-2`) para aproximar os elementos.
- Ajustar gaps grandes pontuais nos componentes mais evidentes (ex.: `gap-12`, `p-8`, `space-y-5`) para faixas **16–24px** entre blocos e **8–12px** entre itens relacionados, priorizando:
  - [HeroSection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/HeroSection.tsx)
  - [ContactCTASection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/ContactCTASection.tsx)
  - [Footer.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/layout/Footer.tsx)

## 2) Otimização de responsividade (480 / 768 / 769+)
- Definir breakpoints explícitos no Tailwind em [tailwind.config.js](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/tailwind.config.js):
  - `phone`: max-width 480px
  - `tablet`: 481px–768px (via `raw` media query)
  - `desktop`: min-width 769px
- Aplicar esses breakpoints onde for necessário para layout (grids, stacks, gaps), sem quebrar o uso atual de `sm/md/lg`.
- Garantir elementos touch-friendly (mín. 44x44px):
  - Ajustar o tamanho padrão do componente [button.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/ui/button.tsx) para `h-11` como default e `icon` para `h-11 w-11`.
  - Reforçar padding/altura em links do rodapé e CTA flutuante.

## 3) Transformar botões de WhatsApp em “Agendar Consultoria”
- Criar uma constante única (ex.: `CONSULTORIA_WA_URL`) em um util novo (ex.: `src/lib/consultoria.ts`) para evitar divergências.
- Substituir texto/ícone/URL em todos os pontos mapeados:
  - Header, Hero, Cases, CTA flutuante, Footer e bloco de contato.
- Padronizar rótulos: “Agendar Consultoria” / “Quero minha Consultoria” com ícone adequado (ex.: `CalendarClock` ou `CalendarDays` do lucide).

## 4) Remover completamente o `form` e substituir por um componente atrativo
- Em [ContactCTASection.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/home/ContactCTASection.tsx):
  - Remover o `<form>` e toda a lógica relacionada (`useState`, inputs, toast de submit, LGPD checkbox).
  - Substituir por uma composição mais atrativa e consistente com a marca.
  - Proposta escolhida: **seção de depoimentos + banner de CTA** (2 colunas no desktop, vertical no mobile), com botão “Agendar Consultoria” apontando para a URL fornecida.

## 5) Reformular o rodapé conforme requisitos
- Em [Footer.tsx](file:///c:/Users/Usu%C3%A1rio/Desktop/djr-ascend/djr-ascend/src/components/layout/Footer.tsx):
  - Layout **3 colunas no desktop** e **vertical no mobile**.
  - Logo **centralizada** e com largura mínima **≥120px**.
  - Seção “Contato” com:
    - Telefone: “(91) 98994-8319” (ícone telefone)
    - Email: “djrdiagnosticos@gmail.com” (ícone email)
    - CNPJ: “21.758.235/0001-17” (ícone apropriado)
  - Hover effects nos links de contato.
  - Copyright + links úteis (Política de Privacidade, Termos de Uso).

## 6) Testes e validação
- Validar no preview:
  - Mobile (≤480), tablet (481–768) e desktop (≥769), incluindo paisagem/retrato.
  - Gaps conforme alvo e sem “buracos” após remover o form.
  - Botões/links clicáveis com alvo mínimo 44x44.
- Rodar diagnósticos TypeScript + testes + build.
