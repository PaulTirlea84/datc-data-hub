# MkDocs Material — Feature Reference

> Documentatie cercetata de subagent din squidfunk.github.io/mkdocs-material  
> Data: 2026-07-14 | Versiune: Material 9.x  
> Context: DATC Data Hub — site intern corporate, competency framework

---

## Prioritizare rapida

| Feature | Impact vizual | Efort config | Prioritate |
|---------|:---:|:---:|:---:|
| Icons & Emojis (`pymdownx.emoji`) | Inalt | Scazut | **P1** |
| `content.tabs.link` — sync tabs | Inalt | Scazut | **P1** |
| `navigation.path` — breadcrumbs | Mediu | Scazut | **P1** |
| `navigation.top` + `navigation.footer` | Mediu | Scazut | **P1** |
| Tooltips + Abbreviations (glosar global) | Inalt | Mediu | **P1** |
| Annotations — (1) inline cu hover | Inalt | Mediu | **P2** |
| Dark mode toggle | Mediu | Scazut | **P2** |
| `pymdownx.mark` — ==highlight== | Mediu | Scazut | **P2** |
| Definition lists — glosar | Mediu | Scazut | **P2** |
| Tags system | Inalt | Mediu | **P3** |
| Social cards (sharing preview) | Mediu | Mediu | **P3** |
| Blog / News section | Mediu | Ridicat | **P3** |

---

## 1. Icons & Emojis

Seturi bundled: Material Design, FontAwesome (free), Octicons, Simple Icons — 10.000+ iconite.

### Config necesara

```yaml
markdown_extensions:
  - attr_list
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
```

### Sintaxa

```markdown
:material-brain:  :material-database:  :material-chart-bar:
:material-school:  :material-certificate:  :material-check-circle:
:material-account-group:  :material-domain:  :material-folder-open:
:fontawesome-solid-users:  :octicons-graph-16:
```

### In grid cards cu dimensiune mare

```markdown
-   :material-brain:{ .lg .middle } **AI Competency**
    ---
    Descriere...
    [:octicons-arrow-right-24: Explore](link){ .md-button .md-button--primary }
```

---

## 2. Annotations

Marcatori numerotati (1) care la hover expandeaza un tooltip bogat. Ideal pentru tabele de competente.

```markdown
| Level | Description |
|-------|-------------|
| P1 | Awareness of core concepts (1) |
| P2 | Applies independently (2) |
{ .annotate }

1.  **Awareness** — cunoaste termenii de baza.
2.  **Independent** — executa fara supervizare.
```

In admonition:

```markdown
!!! info annotate "Cum se calculeaza scorul"
    Scorul final (1) este media ponderata a celor 5 domenii (2).

1.  Intre 1.0 si 4.0.
2.  Technical 40%, Communication 20%, Delivery 20%, Leadership 20%.
```

Custom icon pentru annotation:

```yaml
theme:
  icon:
    annotation: material/plus-circle
```

---

## 3. Tooltips + Abbreviations

### Config

```yaml
markdown_extensions:
  - abbr
  - pymdownx.snippets:
      auto_append:
        - includes/abbreviations.md

theme:
  features:
    - content.tooltips
```

### Glosar global `docs/includes/abbreviations.md`

```markdown
*[DE]: Data Engineering
*[DA]: Data Analytics
*[KPI]: Key Performance Indicator
*[SME]: Subject Matter Expert
*[RAG]: Retrieval-Augmented Generation
*[DATC]: Data Analytics & Technology Center
*[PBI]: Power BI
```

Orice aparitie a `DE`, `KPI`, `RAG` etc in orice pagina va afisa automat tooltip la hover — fara markup suplimentar.

### Tooltip pe link

```markdown
[Competency Framework](link "Documentul central cu toate nivelele")
```

### Tooltip pe iconita

```markdown
:material-information-outline:{ title="Competentele sunt evaluate anual in Q4" }
```

---

## 4. Content Tabs — variante avansate

### Config completa

```yaml
markdown_extensions:
  - pymdownx.tabbed:
      alternate_style: true
      slugify: !!python/object/apply:pymdownx.slugs.slugify
        kwds:
          case: lower

theme:
  features:
    - content.tabs.link   # sync tabs pe tot site-ul
```

### Cu iconite

```markdown
=== ":material-database: Data Engineering"
    Continut DE...

=== ":material-chart-pie: Data Analytics"
    Continut DA...
```

### Cu nivele (dot fill)

```markdown
=== ":octicons-dot-fill-16: P1 — AI Assisted"
    Continut P1...

=== ":octicons-dot-fill-16: P2 — AI Accelerated"
    Continut P2...
```

### `content.tabs.link` — sincronizare globala

Daca userul selecteaza "Data Engineering" pe pagina Curriculum, **toate tab-urile cu acelasi label se sincronizeaza automat pe tot site-ul**.

---

## 5. Grid Cards — variante

### Standard (lista)

```markdown
<div class="grid cards" markdown>

-   :material-brain:{ .lg .middle } **Titlu Card**
    ---
    Descriere card.
    [:octicons-arrow-right-24: Link](url){ .md-button .md-button--primary }

</div>
```

### 3 coloane fortate

```html
<div class="grid cards" style="grid-template-columns: repeat(3, 1fr)" markdown>
-   **L1** — Awareness
-   **L2** — Developing
-   **L3** — Proficient
</div>
```

---

## 6. Buttons — toate variantele

```markdown
[Outline](#){ .md-button }
[Primary](#){ .md-button .md-button--primary }
[:material-download: Cu iconita](#){ .md-button .md-button--primary }
[Cu iconita :material-arrow-right:](#){ .md-button }
```

---

## 7. Navigation Features

### Config recomandata completa

```yaml
theme:
  features:
    - navigation.instant            # SPA-like, fara reload
    - navigation.instant.prefetch   # pre-fetch la hover
    - navigation.instant.progress   # progress bar
    - navigation.path               # breadcrumbs
    - navigation.top                # back to top button
    - navigation.footer             # prev/next page
    - navigation.tracking           # URL anchor tracking
    - navigation.tabs
    - navigation.tabs.sticky
    - navigation.indexes            # section index pages
    - content.tabs.link
    - content.tooltips
    - toc.follow
    - search.suggest
    - search.highlight
    - search.share
```

### navigation.path — Breadcrumbs

Afiseaza `Home > Domains > Data Engineering` deasupra titlului. Ascunde per pagina:

```yaml
---
hide:
  - path
---
```

### navigation.footer — Prev/Next

Linkuri automate catre pagina anterioara/urmatoare in ordinea din nav.

---

## 8. Text Formatting avansat

### Config

```yaml
markdown_extensions:
  - pymdownx.critic   # {--vechi--}{++nou++}
  - pymdownx.caret    # ^^underline^^
  - pymdownx.mark     # ==highlight==
  - pymdownx.tilde    # ~~strikethrough~~
```

### Sintaxa

```markdown
==text evidentiat==
^^underline^^
~~eliminat~~
{--versiunea veche--}{++versiunea noua++}
{==Nota importanta:==}
```

---

## 9. Definition Lists (Glosar in pagina)

```yaml
markdown_extensions:
  - def_list
```

```markdown
`RAG`
:   Retrieval-Augmented Generation — conecteaza un LLM la date externe.

`dbt`
:   Data Build Tool — transformari SQL in warehouse cu principii de SE.
```

---

## 10. Dark Mode

```yaml
theme:
  palette:
    - scheme: default
      primary: deep purple
      accent: purple
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode
    - scheme: slate
      primary: deep purple
      accent: purple
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
```

Cu detectie automata OS:

```yaml
    - media: "(prefers-color-scheme: light)"
      scheme: default
      ...
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      ...
```

---

## 11. Tags System

```yaml
plugins:
  - tags

theme:
  icon:
    tag:
      de: material/database
      da: material/chart-bar
      ai: material/brain
      cert: material/certificate
```

Front matter per pagina:

```yaml
---
tags:
  - Data Engineering
  - Certification
---
```

Pagina index cu toate tag-urile:

```markdown
---
title: Tags Index
hide:
  - toc
---
# Tags
<!-- material/tags -->
```

---

## 12. Social Cards (sharing preview in Teams/Outlook)

```yaml
plugins:
  - social:
      cards_layout_options:
        background_color: "#4a148c"
        color: "#ffffff"
        font_family: Roboto

site_url: https://paultirlea84.github.io/datc-data-hub/
```

---

## 13. Search — boost si excludere

```yaml
# Boost pagina importanta
---
search:
  boost: 2
---

# Exclude din search
---
search:
  exclude: true
---
```

---

## Config consolidata — tot ce e nou de adaugat

```yaml
markdown_extensions:
  - def_list
  - abbr
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
  - pymdownx.critic
  - pymdownx.caret
  - pymdownx.mark
  - pymdownx.tilde
  - pymdownx.snippets:
      auto_append:
        - includes/abbreviations.md

theme:
  features:
    - navigation.instant
    - navigation.instant.prefetch
    - navigation.path
    - navigation.top
    - navigation.footer
    - navigation.tracking
    - content.tabs.link
    - content.tooltips
    - toc.follow
    - search.share
```
