# Corrigir Links do Header e Navegação

## Objetivo
Configurar a navegação do header para funcionar como "One Page" (scroll suave para seções) na Home, e permitir o acesso a essas seções a partir de outras páginas.

## Diagnóstico Atual
- Os links do header apontam para rotas inexistentes (`/servicos`, `/portfolio`, `/quem-somos`), gerando erro 404.
- As seções correspondentes existem na Home, mas a maioria não possui `id`.
- Não há configuração de `scroll-behavior: smooth` global.
- Falta compensação da altura do header fixo ao rolar para uma seção (`scroll-margin-top`).

## Plano de Ação

### 1. Configuração Global de Scroll
- Editar `src/index.css`:
  - Adicionar `html { scroll-behavior: smooth; }` no `@layer base`.
  - Criar classe utilitária `.section-scroll-target` (ou similar) que aplique `scroll-mt-28` (aprox 112px, altura do header + respiro) para garantir que o título da seção não fique escondido.

### 2. Adicionar IDs e Scroll Margin nas Seções
Editar os seguintes componentes em `src/components/home/`:
- **ServicesSection.tsx**: Adicionar `id="servicos"` e classe de scroll margin no container principal.
- **CasesSection.tsx**: Adicionar `id="portfolio"` e classe de scroll margin.
- **FounderSection.tsx**: Adicionar `id="quem-somos"` e classe de scroll margin.
- **ContactCTASection.tsx**: Já possui `id="contato"`, adicionar classe de scroll margin.

### 3. Atualizar Header.tsx
- Modificar o array `navItems` para usar hash links absolutos:
  - `/servicos` -> `/#servicos`
  - `/portfolio` -> `/#portfolio`
  - `/quem-somos` -> `/#quem-somos`
  - `/contato` -> `/#contato`
- O link "Home" deve ser `/` (ou `/#top` se quisermos forçar topo, mas `/` é padrão).
- Ajustar o fechamento do menu mobile ao clicar em um link.

### 4. Garantir Scroll ao Navegar de Outra Página
- O comportamento padrão do browser ao navegar para `/#hash` nem sempre é consistente com SPA.
- Criar um componente utilitário `ScrollToHashElement.tsx` (ou hook) em `src/components/shared/` que:
  - Ouve mudanças de `location`.
  - Se houver `hash`, faz o scroll para o elemento.
  - Se não houver, faz scroll para o topo (0,0).
- Adicionar esse componente no `App.tsx` ou `Index.tsx`.

## Verificação
- Testar navegação dentro da Home (scroll suave).
- Testar navegação vindo de outra página (ex: `/politica-de-privacidade` -> `/#servicos`).
- Verificar se o título da seção não fica coberto pelo header.
