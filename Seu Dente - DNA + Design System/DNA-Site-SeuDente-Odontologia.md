# SITE DNA — CLÍNICA ODONTOLÓGICA SEU DENTE

**Nicho:** Odontologia clínica e reabilitação oral — segmento particular, foco em implantes, próteses, clareamento, ortodontia e facetas. Público 30–65 anos, classe C/B, região de Realengo/Zona Oeste do Rio de Janeiro.
**Posicionamento:** Autoridade construída por tempo ("18 anos de história") combinada com acolhimento emocional. A interface transmite sofisticação acessível — não é clínica premium fria, nem popular genérica. É expertise humanizada de bairro.
**Data de criação:** 2025-03-21

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Variável CSS               | Hex       | Função Específica no Layout                                      |
|---------------------------|-----------|------------------------------------------------------------------|
| `--color-primary`         | `#4A59A8` | Cor estrutural — headers, ícones, links, destaques de nav        |
| `--color-primary-dark`    | `#35407D` | Estados hover de elementos primários, fundo do badge de exp.     |
| `--color-primary-light`   | `#6D7BC4` | Gradientes, destaques suaves, shape blurred no hero              |
| `--color-secondary`       | `#EF7B33` | CTA principal (botões), `<em>` nos títulos, divisores, estrelas  |
| `--color-secondary-dark`  | `#D46622` | Hover do botão primário                                          |
| `--color-accent`          | `#FFD966` | Estrela de avaliação no hero stat                                |
| `--color-cream`           | `#FFF9F2` | Background global do `<body>`, fundo de ps-card e form inputs    |
| `--color-cream-dark`      | `#F7EFE6` | Gradiente da seção Serviços, bordas sutis                        |
| `--color-text`            | `#2D3142` | Texto principal — todos os parágrafos e headings                 |
| `--color-text-light`      | `#4A4F6A` | Subtítulos, descrições secundárias, labels de stats              |
| `--color-text-muted`      | `#6E7591` | Metadados, datas, placeholders, indicadores de scroll            |
| `--color-white`           | `#FFFFFF` | Superfícies de cards, containers de form, overlay de depoimento  |
| `--color-terracotta`      | `#E08E6D` | Shape decorativo no hero (opacity 0.2), depo-shape de fundo      |
| `--color-sage`            | `#6D7BC4` | Alias de primary-light — shape-1 blurred no hero                 |
| Header fixo               | `#4C338C` | Roxo específico do header — **NÃO é a --color-primary**. É hardcoded. |

> **Nota crítica:** O header usa `background-color: #4c338c` hardcoded (roxo violeta mais saturado), distinto do `--color-primary: #4A59A8` usado no corpo. Essa tensão cromática intencional diferencia a nav da identidade do conteúdo.

### Tipografia

| Elemento               | Família                  | Peso        | Tamanho Exato                         | Observações                                          |
|------------------------|--------------------------|-------------|---------------------------------------|------------------------------------------------------|
| H1 (hero-title)        | `Cormorant Garamond`     | 500         | `2.5rem` → `3.5rem` → `4.5rem`       | Fluid via breakpoints: 768px / 1024px               |
| H2 (section-title)     | `Cormorant Garamond`     | 500         | `2rem` → `2.5rem` → `3.5rem`         | line-height: 1.2                                     |
| H3 (servico-title)     | `Cormorant Garamond`     | 500         | `1.25rem`                             | —                                                    |
| H3 (ps-content h3)     | `Cormorant Garamond`     | 500         | `1.5rem`                             | color: `--color-primary`                             |
| eyebrow (labels)       | `Source Sans 3`          | 600         | `0.875rem`                            | uppercase, letter-spacing: 0.15em, color: primary    |
| body (parágrafos)      | `Source Sans 3`          | 400         | `1rem`                                | line-height: 1.7                                     |
| body light             | `Source Sans 3`          | 300         | `1rem`                                | usado em textos secundários                          |
| stat-number            | `Cormorant Garamond`     | 600         | `2.5rem`                              | line-height: 1, color: primary                       |
| `<em>` inline          | `Cormorant Garamond`     | italic      | herda do pai                         | color: `#EF7B33` — detalhe diferencial nos títulos   |
| nav-link               | `Source Sans 3`          | 500         | `0.875rem`                            | color: white (header), hover: `#EF7B33`             |
| btn                    | `Source Sans 3`          | 600         | `1rem` / small: `0.875rem`            | —                                                    |
| footer headings (h4)   | `Source Sans 3`          | 600         | `0.875rem`                            | uppercase, letter-spacing: 0.1em                     |

### Estilo Geral

Interface Neo-Clássica Orgânica com verniz editorial: a combinação de `Cormorant Garamond` serif nos títulos com `Source Sans 3` humanista nos textos cria um contraste tipográfico sofisticado, ancorado por um sistema cromático de três temperaturas (roxo/azul frio para autoridade, laranja quente para ação, creme neutro para acolhimento). Formas arredondadas (`border-radius` generosos entre 0.5rem e 9999px), sombras coloridas em roxo-azul (`rgba(91, 107, 175, ...)`), e blobs decorativos com `filter: blur(80px)` constroem uma estética sensorial próxima ao design de wellness/saúde premium, recusando tanto a frieza clínica estéril quanto a banalidade populista.

---

## LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 1 — Header (Fixo)

**Estrutura:** `position: fixed; top: 0; z-index: 100`. Flexbox horizontal com `justify-content: space-between; align-items: center; gap: 1.5rem`. Container `max-width: 1280px`. Logo à esquerda, nav central (oculta <768px), CTA button à direita (oculto <768px), hambúrguer visível <768px.
**Fundo:** `background-color: #4c338c` (roxo hardcoded). Ao scroll >50px, adiciona classe `.scrolled`: `background-color: rgba(76, 51, 140, 0.95)` + `backdrop-filter: blur(10px)` + `box-shadow: 0 2px 8px rgba(91, 107, 175, 0.08)`. Padding reduz de `1rem` para `0.75rem`.
**Elementos Restritos:** Logo (imagem 50px de altura, width auto) alinhada ao topo-esquerdo. Nav-links com pseudo-elemento `::after` como underline animado (width: 0→100%, height: 2px, color: `#EF7B33`). Botão CTA `.btn-small` com `padding: 0.75rem 1.5rem`.
**Animação:** Scroll para baixo >200px: `transform: translateY(-100%)` (transition: 0.4s ease). Scroll para cima: remove `translateY`. Lógica de hide/show baseada em direção de scroll via `requestAnimationFrame`.
**Micro-interações:** `nav-link:hover` → `color: #EF7B33` + underline expande via `width: 0→100%`, transition: `0.3s ease`. Menu hambúrguer `.active`: spans 1 e 3 giram ±45deg com `translate(5px, ±5px)`, span 2 `opacity: 0`.
**Diferenciador Visual:** Header roxo escuro `#4C338C` sobre body creme `#FFF9F2` cria contraste de entrada agressivo. Underline animado laranja nos links — não o clichê de cor de fundo.

---

### SEÇÃO 2 — Hero

**Estrutura:** `min-height: 100vh`. CSS Grid `1fr` mobile → `1fr 1fr` (gap: 4rem) em ≥1024px. `align-items: center`. Padding-top: `calc(6rem + 60px)` (compensa header fixo). Container `max-width: 1280px`.
**Fundo:** Fundo global `--color-cream: #FFF9F2`. Três blobs absolutos (`position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.4`): shape-1 (600×600px, cor `#6D7BC4`, topo-direito, -200px offset), shape-2 (400×400px, cor `#EF7B33`, baixo-esquerdo), shape-3 (300×300px, cor `#E08E6D`, opacity 0.2, centro). Animação `@keyframes float`: `translateY(0/−30px) scale(1/1.05)` em 8/10/12s alternados.
**Elementos Restritos:** Coluna esquerda: eyebrow "Desde 2008" (0.875rem, uppercase, letter-spacing 0.2em), H1 com `<em>` laranja, subtítulo, hero-actions (flex row wrap, gap: 1rem), hero-stats (2 items separados por divisor vertical 1px × 50px laranja). Coluna direita: imagem com `border-radius: 2rem`, `box-shadow: 0 16px 60px rgba(91, 107, 175, 0.2)`, borda decorativa offset (`hero-image-shape`: `border: 2px solid #EF7B33; border-radius: 2rem; position: absolute; inset: -20px; z-index: -1`). Floating card: `position: absolute; bottom: 40px; left: -40px`, fundo branco, shadow-lg, animação float 6s.
**Animação:** Elementos com classe `.fade-in-up`: entram com `opacity: 0; transform: translateY(20px)` → `opacity: 1; translateY(0)` via CSS animation com `animation-delay` escalonado (0s, 0.1s, 0.2s, 0.3s, 0.4s). Shapes com parallax JS em desktop: `translateY(-(scrollY * 0.3 * speedFactor)px)`. Indicador de scroll: `@keyframes scrollLine` — `scaleY(0→1→0)` com troca de `transform-origin` de `top` para `bottom` no midpoint.
**Micro-interações:** Botão primário hover: `translateY(-2px)` + `box-shadow` amplificado (shadow-lg). Seta SVG dentro do botão: `translateX(4px)` on hover, transition 0.3s.
**Diferenciador Visual:** Imagem de clínica real (não stock) com borda-offset laranja separada da imagem — frame dentro do frame. Floating card com ícone de check em fundo roxo flutuando sobre a foto cria camada de credencial sem quebrar a composição.

---

### SEÇÃO 3 — Dor e Solução (Pain & Solution)

**Estrutura:** `background-color: #FFFFFF`. Padding `5rem 0`. CSS Grid: `1fr` mobile → `1fr auto 1fr` em ≥1024px (gap: 3rem). Section-header centralizado com max-width 600px no subtítulo.
**Fundo:** Branco puro (#FFFFFF) — contraste intencional com o creme do hero para criar "respirada" visual entre seções.
**Elementos Restritos:** Dois `.ps-card` (fundo `#FFF9F2`, padding: 2rem, `border-radius: 2rem`) com imagem topo (height: 250px, `object-fit: cover`, `object-position: center 20%`) + título H3 primário + parágrafo + lista com ícone SVG inline via `background-image: url(data:image/svg+xml...)`. Divisor central: linha vertical 2px laranja (opacity 0.3, 100px) com ícone seta.
**Animação:** `.fade-in-up` com `animation-delay: 0.2s` no card solução. Cards revelados via `IntersectionObserver` com classe `.reveal` → `.active`.
**Micro-interações:** `.ps-card:hover` → `translateY(-5px)` + `box-shadow: 0 8px 40px rgba(91, 107, 175, 0.16)`, transition: `0.3s ease`. Lista do lado "dor": ícone check com `filter: grayscale(1) opacity(0.5)`. Lista do lado "solução": ícone check colorido `#EF7B33`.
**Diferenciador Visual:** Divisor com seta entre os dois estados (dor→solução) em vez de comparação estática. Tratamento cromático diferenciado dos bullet icons (dessaturado vs. colorido) reforça a narrativa transformacional sem texto adicional.

---

### SEÇÃO 4 — Sobre (Nossa História)

**Estrutura:** `background-color: #FFFFFF`. Padding `6rem 0`. CSS Grid `1fr` → `1fr 1fr` (≥1024px, gap: 4rem). Mobile: conteúdo textual `order: 1` (aparece primeiro), imagens `order: 2` (aparece depois).
**Fundo:** Branco puro, sem decoração adicional.
**Elementos Restritos:** Coluna imagens (esquerda no desktop): imagem principal `border-radius: 2rem`, `box-shadow: shadow-lg`, `max-height: 500px desktop / 400px mobile`. Imagem secundária `position: absolute; bottom: -40px; right: -20px; width: 250px; border-radius: 1.5rem; border: 4px solid white; box-shadow: shadow-xl`. Experience badge `position: absolute; top: 20px; left: -20px; background: #4A59A8; padding: 1.25rem 1.5rem; border-radius: 1.5rem` com número "18" em `Cormorant Garamond 2.5rem`. Coluna direita: eyebrow + H2 com `<em>` + 3 parágrafos + values-row (3 ícones circulares 56×56px, fundo creme → hover roxo).
**Animação:** Scroll reveal via IntersectionObserver na `.sobre-content`.
**Micro-interações:** `.value-item:hover .value-icon` → `background-color: #4A59A8; color: white; translateY(-4px)`, transition: `0.3s ease`.
**Diferenciador Visual:** Badge de experiência "18 anos" sobrepostos na imagem (posicionamento absoluto) — símbolo de autoridade ancorado visualmente na foto, não no texto. Imagem dupla com overlap e borda branca cria profundidade sem JavaScript.

---

### SEÇÃO 5 — Serviços

**Estrutura:** `position: relative; overflow: hidden`. Padding `6rem 0`. Grid de cards: `1fr` → `repeat(2, 1fr)` (≥640px) → `repeat(3, 1fr)` (≥1024px), gap: `1.5rem`.
**Fundo:** `background: linear-gradient(135deg, #FFF9F2 0%, #F7EFE6 100%)` via `.servicos-bg` absolute com `z-index: -1`.
**Elementos Restritos:** Cards `.servico-card` (fundo branco, padding: 2rem, `border-radius: 2rem`, `box-shadow: shadow-sm`). Card destacado `.featured`: `background: linear-gradient(135deg, #6D7BC4 0%, #4A59A8 100%)`, texto branco. Badge "Mais procurado": `position: absolute; top: 1rem; right: 1rem; background: #EF7B33; border-radius: 9999px; font-size: 0.75rem; font-weight: 600`. Ícone: 64×64px, fundo creme (featured: rgba white 0.15), `border-radius: 1.5rem`. Link "Saiba mais" com seta SVG inline.
**Animação:** Scroll reveal com stagger `(index % 3) * 100ms` via `setTimeout` + IntersectionObserver.
**Micro-interações:** `.servico-card:hover` → `translateY(-8px)` + `box-shadow: shadow-lg`. Pseudo-elemento `::before` (barra topo 4px, `background: linear-gradient(90deg, #4A59A8, #EF7B33)`) expande de `scaleX(0)` → `scaleX(1)` no hover. `.servico-link:hover` → `gap` aumenta de `0.5rem` → `0.75rem` (seta se afasta do texto organicamente).
**Diferenciador Visual:** Barra de gradiente roxo→laranja revelada no hover no topo do card (não é borda, é pseudo-elemento com transform). Único card featured com gradiente roxo no grid cria hierarquia visual sem tamanho diferenciado.

---

### SEÇÃO 6 — Depoimentos

**Estrutura:** `position: relative; overflow: hidden`. Padding `6rem 0`. Carousel com `.depoimentos-grid` em `display: flex; gap: 1.5rem; transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`. Cards responsive: 100% mobile → `calc(50% - 0.75rem)` (768px) → `calc(33.333% - (1.5rem * 2 / 3))` (1024px).
**Fundo:** Branco com dois blobs absolutos decorativos (blur: 60px, opacity: 0.15): shape-1 (300×300px, `#6D7BC4`, topo-direito, anima `float 10s`) e shape-2 (250×250px, `#E08E6D`, baixo-esquerdo, anima `float 12s reverse`).
**Elementos Restritos:** Google badge: pill branco com logo Google SVG multicolor + texto "Avaliações no Google", `border: 1px solid #F7EFE6`. Cards `.depoimento-card` (fundo `#FFF9F2`, padding: 2rem, `border-radius: 2rem`). Card featured: `background: linear-gradient(135deg, #EF7B33 0%, #D46622 100%)`. Avatar: 48×48px, circular, fundo `#4A59A8`, iniciais em branco. Dots de paginação: 10×10px cinza → laranja ativo (expande para `width: 24px`, pill shape). Autoplay: 5000ms, pausa on hover.
**Animação:** Drag/touch nativo com `WebKitCSSMatrix` para snap. Transition: `transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)` desabilitada durante drag (`transition: none`).
**Micro-interações:** `.depoimento-card:hover` → `translateY(-4px)` + `box-shadow: shadow-md`. Cursor: `grab` no container → `grabbing` on active. Dot hover e click param autoplay.
**Diferenciador Visual:** Card featured laranja no meio do carousel — testemunho "dourado" visualmente destacado sem aumentar tamanho. Badge Google com SVG original multicolor (não substituído por ícone simples) adiciona credibilidade visual imediata.

---

### SEÇÃO 7 — FAQ

**Estrutura:** Padding `6rem 0`. Section-header centralizado. Lista de `.faq-item` usando elemento nativo HTML `<details>/<summary>` — sem JavaScript para controle de estado.
**Fundo:** Creme global (`#FFF9F2`).
**Elementos Restritos:** `<details class="faq-item">` com `<summary class="faq-question">` + `<div class="faq-answer">`. Acesso ao estado via CSS `:checked`/`[open]` (implícito pelo browser). Estrutura semântica com Schema.org FAQPage no JSON-LD.
**Animação:** Expansão nativa do `<details>` — sem animação JavaScript adicional.
**Micro-interações:** Baseado em comportamento nativo do browser para `<details>`.
**Diferenciador Visual:** Uso de `<details>/<summary>` nativos em vez de accordion JavaScript — zero bundle weight para o componente, acessibilidade embutida.

---

### SEÇÃO 8 — CTA (Formulário WhatsApp)

**Estrutura:** `position: relative; overflow: hidden`. Padding `6rem 0`. CSS Grid `1fr` → `1.2fr 0.8fr` (≥1024px, gap: 5rem). Coluna esquerda: copy + benefícios. Coluna direita: form card branco.
**Fundo:** `background: linear-gradient(135deg, #35407D 0%, #4A59A8 100%)` via `.cta-bg` absolute. Dois shapes decorativos (`.cta-shape`).
**Elementos Restritos:** Título H2 branco com `<em>` laranja. Lista de 3 benefícios: ícone check 24×24px circular laranja + texto branco bold. Form container: fundo branco, `padding: 2rem`, `border-radius: 2rem`, `box-shadow: shadow-xl`. Inputs: `padding: 0.75rem 1rem`, `border: 1px solid #F7EFE6`, `border-radius: 1rem`, fundo `#FFF9F2`. Botão submit `btn-block` full-width com ícone WhatsApp SVG (path completo do logo oficial).
**Animação:** Nenhuma de entrada específica nesta seção.
**Micro-interações:** Inputs `focus`: `border-color: #4A59A8` + `background: white` + `box-shadow: 0 0 0 3px rgba(74, 89, 168, 0.1)` (ring de foco suave). Botão submit herda micro-interações do `.btn-primary` (hover: `translateY(-2px)` + shadow amplificado).
**Diferenciador Visual:** Form de captação com redirecionamento direto para WhatsApp (não email/CRM) — submit JS monta mensagem formatada com nome/telefone/serviço/mensagem via `encodeURIComponent` e abre `wa.me/` em nova aba. Fundo roxo escuro contrasta com o creme das seções adjacentes, criando âncora visual de conversão.

---

### SEÇÃO 9 — Contato

**Estrutura:** `background-color: #FFF9F2`. Padding `6rem 0`. CSS Grid `1fr` → `1fr 1fr` (≥1024px, gap: 4rem). Coluna esquerda: info da clínica. Coluna direita: mapa embed.
**Fundo:** Creme `#FFF9F2`.
**Elementos Restritos:** Info-items: ícone 48×48px branco com `border-radius: 1.5rem` e `box-shadow: shadow-sm`. Social links: 44×44px circulares, fundo branco → hover roxo + `translateY(-2px)`. Mapa: `<iframe>` Google Maps, `height: 400px desktop / auto mobile`, `border-radius: 2rem`, `overflow: hidden`.
**Animação:** Scroll reveal no `.info-item`.
**Micro-interações:** `.social-link:hover` → `background: #4A59A8; color: white; translateY(-2px); box-shadow: shadow-md`. `.footer-contact-list li:hover` → `translateX(5px); color: #EF7B33`. Ícones SVG de contato: `scale(1.1)` no hover do li pai.
**Diferenciador Visual:** Mapa embed com `border-radius: 2rem` — transforma elemento utilitário genérico em componente estético integrado ao design system.

---

### SEÇÃO 10 — Footer

**Estrutura:** `background-color: #2D3142` (cor `--color-text`). Padding `4rem 0 2rem`. Grid `1fr` → `repeat(2, 1fr)` (640px) → `2fr 1fr 1fr 1.5fr` (1024px). Gap: `2.5rem`. Footer-bottom com flex row (768px+): `justify-content: space-between`.
**Fundo:** Azul-acinzentado profundo `#2D3142` — mesma cor do texto do corpo, criando inversão total.
**Elementos Restritos:** Brand col (2fr): logo + tagline + CNPJ/créditos técnicos. Links col: h4 uppercase + lista de links. Contato col: lista com ícones SVG laranja + hover translateX. Footer-bottom: `border-top: 1px solid rgba(255,255,255,0.1)`.
**Micro-interações:** `.footer-links a:hover` → `color: #EF7B33`. `.footer-contact-list li:hover` → `translateX(5px); color: #EF7B33`. Ícone dentro: `scale(1.1)`. Transição: `0.2s ease` (fast).
**Diferenciador Visual:** Fundo do footer usando exatamente `--color-text` do sistema — inversão elegante que não introduz nova cor. Alinhamento editorial à esquerda (não centralizado) reforça postura profissional e não-genérica.

---

## COMPONENTES REUTILIZÁVEIS

### Botões

```css
/* btn-primary — CTA principal */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;          /* small: 0.75rem 1.5rem */
  background-color: #EF7B33;
  color: #FFFFFF;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 1rem;             /* small: 0.875rem */
  font-weight: 600;
  border-radius: 9999px;       /* pill shape */
  box-shadow: 0 4px 20px rgba(91, 107, 175, 0.12);
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background-color: #D46622;
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(91, 107, 175, 0.16);
}
.btn-primary svg {            /* ícone seta dentro do botão */
  transition: transform 0.3s ease;
}
.btn-primary:hover svg {
  transform: translateX(4px);
}

/* btn-secondary — outline roxo */
.btn-secondary {
  background-color: transparent;
  color: #4A59A8;
  border: 2px solid #4A59A8;
  border-radius: 9999px;
  padding: 1rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-secondary:hover {
  background-color: #4A59A8;
  color: #FFFFFF;
}

/* btn-light — superfície branca */
.btn-light {
  background-color: #FFFFFF;
  color: #4A59A8;
  border-radius: 9999px;
  box-shadow: 0 4px 20px rgba(91, 107, 175, 0.12);
  transition: all 0.3s ease;
}
.btn-light:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(91, 107, 175, 0.16);
}
```

### Inputs / Form

```css
.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #F7EFE6;
  border-radius: 1rem;           /* --radius-md */
  background-color: #FFF9F2;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 1rem;
  color: #2D3142;
  transition: all 0.3s ease;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4A59A8;
  background-color: #FFFFFF;
  box-shadow: 0 0 0 3px rgba(74, 89, 168, 0.1);
}
```

### Cards de Serviço

```css
.servico-card {
  position: relative;
  background: #FFFFFF;
  padding: 2rem;
  border-radius: 2rem;           /* --radius-xl */
  box-shadow: 0 2px 8px rgba(91, 107, 175, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
}
/* Barra de gradiente revelada no hover */
.servico-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4A59A8, #EF7B33);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.servico-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 40px rgba(91, 107, 175, 0.16);
}
.servico-card:hover::before {
  transform: scaleX(1);
}

/* Card destaque (featured) */
.servico-card.featured {
  background: linear-gradient(135deg, #6D7BC4 0%, #4A59A8 100%);
  color: #FFFFFF;
}
```

### Cards de Depoimento

```css
.depoimento-card {
  background: #FFF9F2;
  padding: 2rem;
  border-radius: 2rem;
  transition: all 0.3s ease;
}
.depoimento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(91, 107, 175, 0.12);
}
.depoimento-card.featured {
  background: linear-gradient(135deg, #EF7B33 0%, #D46622 100%);
}
/* Avatar de iniciais */
.author-avatar {
  width: 48px; height: 48px;
  background: #4A59A8;
  color: #FFFFFF;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex; align-items: center; justify-content: center;
}
```

### Value Icons (Seção Sobre)

```css
.value-icon {
  width: 56px; height: 56px;
  background: #FFF9F2;
  border-radius: 9999px;
  color: #4A59A8;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s ease;
}
.value-item:hover .value-icon {
  background: #4A59A8;
  color: #FFFFFF;
  transform: translateY(-4px);
}
```

### Scroll Reveal (JS)

```js
// Elementos recebem .reveal no init, .active via IntersectionObserver
// Stagger: setTimeout((index % 3) * 100ms)
// CSS esperado:
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
```

---

## ANTI-PADRÕES REGISTRADOS

❌ **1. Stock photo de sorriso perfeito e genérico como hero image** — Substituído por fotos reais da clínica e equipe, com naming de arquivo indexando SEO local (`clinica+odontologica+seu+dente-...realengo-rio+de+janeiro-rj.webp`). Autenticidade acima de perfeição estética.

❌ **2. Fundo branco/azul clínico estéril como paleta base** — Substituído por creme quente `#FFF9F2` como cor de fundo global, sinalizando acolhimento em vez de ambiente hospitalar. O azul aparece como cor de destaque, não como fundo dominante.

❌ **3. Botão CTA verde neon "AGENDE JÁ" com texto urgência forçada** — O CTA primário usa laranja `#EF7B33` (pill shape arredondado) com copy orientado ao contexto: "Saiba mais sobre Atendimentos", "Solicitar Informação". Sem countdown timers, sem "Vagas Limitadas".

❌ **4. Seção "Nossos Diferenciais" com lista de ícones genéricos (√ Profissionais Qualificados, √ Atendimento 24h)** — Substituído por seção narrativa Dor/Solução com imagens reais (sorriso escondido vs. sorriso mordendo maçã) e lista de consequências reais da ausência dental. Diferencial mostrado visualmente, não listado textualmente.

❌ **5. Hero com background de dentes/radiografia como elemento decorativo** — Substituído por blobs orgânicos (`border-radius: 50%; filter: blur(80px)`) em roxo, laranja e terracota com animação `float`. Estética wellness/editorial em vez de identidade visual de consultório.

❌ **6. Accordion de FAQ em JavaScript pesado com animação de slide** — Substituído por `<details>/<summary>` HTML nativo — comportamento de collapse/expand embutido no browser, zero JS, totalmente acessível por teclado e leitores de tela, e indexável pelo Schema.org FAQPage.

❌ **7. Formulário de captação enviando para email com "entraremos em contato em até 48h"** — Substituído por form que monta mensagem estruturada (nome, telefone, serviço, mensagem) e redireciona diretamente para `wa.me/` via `encodeURIComponent`. Conversão instantânea no canal de maior resposta do público-alvo.
