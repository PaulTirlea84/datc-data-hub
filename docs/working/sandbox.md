# Sandbox — Design Patterns

> Pagina de test — nu apare in productie. Joaca-te liber aici.  
> Referinta completa: [squidfunk.github.io/mkdocs-material](https://squidfunk.github.io/mkdocs-material/)

---

## Icons & Emojis

> Necesita `pymdownx.emoji` in mkdocs.yml — vezi sectiunea Config de jos.

Iconite inline in text: :material-brain: :material-database: :material-chart-bar: :material-school: :material-certificate: :material-check-circle: :material-account-group:

Iconite in titluri:

### :material-brain: AI Competency

### :material-database-outline: Data Engineering

### :material-chart-bar: Data Analytics

Iconite cu dimensiune mare in grid cards:

<div class="grid cards" markdown>

-   :material-brain:{ .lg .middle } **AI Competency**

    ---

    Proficiency scale P1–P5, required levels by role, training paths for DE and DA.

    [:octicons-arrow-right-24: Explore](../ai-competency/index.md){ .md-button .md-button--primary }

-   :material-domain:{ .lg .middle } **Domains**

    ---

    Role profiles, responsibilities, core skills, and learning paths by career level.

    [:octicons-arrow-right-24: Explore](../domains/index.md){ .md-button .md-button--primary }

-   :material-school:{ .lg .middle } **Curriculum**

    ---

    Structured training paths and competency maps. Coming soon.

    [:octicons-arrow-right-24: Go](../curriculum/index.md){ .md-button }

-   :material-folder-open:{ .lg .middle } **Assets**

    ---

    Portfolio projects and team resources. Coming soon.

    [:octicons-arrow-right-24: Go](../assets/index.md){ .md-button }

</div>

---

## Grid Cards

### 4 cards standard

<div class="grid cards" markdown>

-   **P1 — AI Assisted**

    ---
    Uses built-in AI features (Copilot, suggestions) for day-to-day work. Follows existing prompts and validates outputs with senior guidance.

    **Required at:** Associate · Analyst

-   **P2 — AI Accelerated**

    ---
    Actively uses LLMs to speed up tasks. Validates AI outputs independently and adapts prompts for better results.

    **Required at:** Senior Analyst

-   **P3 — Agentic AI**

    ---
    Designs multi-step AI workflows. Builds reusable prompt structures, applies RAG patterns, guides peers on effective AI use.

    **Required at:** Specialist · Associate Manager

-   **P4 — Integrated AI**

    ---
    Embeds AI directly into pipelines, dashboards, and team workflows. Creates frameworks and leads AI adoption on engagements.

    **Required at:** Manager

</div>

---

## Tabs

### Basic

=== "Data Engineering"

    AI-enabled Data Engineers build the data foundation for analytics and AI applications.

    **Primary tools:** GitHub Copilot · Snowflake Cortex · Azure data services

=== "Data Analytics"

    AI-enabled Analytics practitioners accelerate reporting, insight generation, and decision support.

    **Primary tools:** Power BI Copilot · Fabric Copilot · Tableau AI

### Cu iconite

=== ":material-database-outline: Data Engineering"

    Back-end data infrastructure — pipelines, cloud platforms, data architecture, storage, governance, and AI-ready data layers.

    [Open Data Engineering →](../domains/data-engineering/index.md){ .md-button .md-button--primary }

=== ":material-chart-bar: Data Analytics"

    Front-end data delivery — dashboards, semantic models, reporting, data visualisation, and BI architecture.

    [Open Data Analytics →](../domains/data-analytics/index.md){ .md-button .md-button--primary }

### Cu nivele

=== ":octicons-dot-fill-16: Associate / Analyst — P1"

    Uses built-in AI features. Follows prompts. Validates outputs with senior support.

=== ":octicons-dot-fill-16: Senior Analyst — P2"

    Actively uses LLMs. Validates independently. Adapts prompts for better results.

=== ":octicons-dot-fill-16: Specialist / Assoc Mgr — P3"

    Designs multi-step agentic workflows. Builds reusable prompt structures. Coaches peers.

=== ":octicons-dot-fill-16: Manager — P4"

    Embeds AI into pipelines and dashboards. Leads AI adoption on engagements.

=== ":octicons-dot-fill-16: Architect — P5"

    Defines standards, governance, and strategy. Advises leadership.

---

## Buttons

[Outline button](#){ .md-button }
[Primary button](#){ .md-button .md-button--primary }

[:material-download: Cu iconita stanga](#){ .md-button .md-button--primary }
[Cu iconita dreapta :material-arrow-right:](#){ .md-button }

[:material-database: DE Track](#){ .md-button .md-button--primary }
[:material-chart-bar: DA Track](#){ .md-button }

---

## Admonitions — toate tipurile

!!! note "Note"
    Informatie generala.

!!! abstract "Abstract / Rezumat"
    Overview sau TL;DR.

!!! info "Info"
    Detaliu suplimentar util.

!!! tip "Tip / Sfat"
    Recomandare de best practice.

!!! success "Success"
    Confirmare sau validare.

!!! question "Question"
    FAQ sau punct de reflectie.

!!! warning "Warning"
    Ceva de luat in seama.

!!! failure "Failure"
    Ce trebuie evitat.

!!! danger "Danger"
    Risc critic.

!!! example "Example"
    Demonstratie practica.

!!! quote "Quote"
    Referinta sau citat.

### Collapsible

??? tip "Resurse suplimentare — click sa expandezi"
    - Link 1
    - Link 2

???+ warning "Expanded by default — click sa inchizi"
    Acesta e deschis implicit.

### Inline (langa text)

!!! tip inline end "Quick Win"
    Incepeti cu onboarding-ul inainte de orice alt curs.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi.

---

## Text Formatting avansat

> Necesita `pymdownx.mark`, `pymdownx.caret`, `pymdownx.tilde`, `pymdownx.critic` in mkdocs.yml.

Highlighting: Competenta ==esentiala== pentru toti specialistii L3+.

Underline: Skill-ul este ^^obligatoriu^^ pentru promovare.

Strikethrough: ~~Versiunea veche~~ Versiunea 2024 actualizata.

Track changes: Evaluarea se face {--trimestrial--}{++semestrial++}.

---

## Definition Lists (Glosar)

> Necesita `def_list` in mkdocs.yml.

`Data Lakehouse`
:   Arhitectura care combina flexibilitatea Data Lake cu performanta Data Warehouse.

`dbt (data build tool)`
:   Tool open-source pentru transformarea datelor in warehouse, folosind SQL si principii de software engineering.

`RAG`
:   Retrieval-Augmented Generation — tehnica de conectare a unui LLM la date externe pentru raspunsuri mai precise.

`KPI`
:   Key Performance Indicator — metrica masurabil care reflecta performanta unui obiectiv de business.

---

## Task Lists

- [x] AI Fundamentals module completat
- [x] DATC All-Hands: Generative AI session
- [ ] Prompt engineering self-assessment
- [ ] Submit competency evaluation form
- [ ] Databricks Lakehouse Fundamentals
    * [x] Module 1: Architecture
    * [ ] Module 2: Delta Lake

---

## Annotations

> Necesita `attr_list` si `md_in_html` — deja active.

| Level | Description |
|-------|-------------|
| P1 | Awareness of core concepts (1) |
| P2 | Applies independently (2) |
| P3 | Leads and mentors (3) |
{ .annotate }

1.  **Awareness** — cunoaste termenii si principiile de baza, poate participa in conversatii fara sa execute independent.
2.  **Independent application** — executa task-uri fara supervizare directa, poate rezolva probleme comune.
3.  **Leadership** — ghideaza colegi, defineste standarde, contribuie la design de solutii.

---

## Linkuri — formate utile pentru trainings

**Link simplu**

[GitHub Copilot with Python](https://example.com)

**Link cu tooltip la hover**

[GitHub Copilot](https://example.com "AI pair programming pentru Python si data pipelines")

**Link buton**

[Incepe training](#){ .md-button }
[Incepe training](#){ .md-button .md-button--primary }

**Link in tabel**

| Proficiency | Training | Goal |
|:---:|---|---|
| P1 | [GitHub Copilot with Python](https://example.com) | AI pair programming pentru pipelines |
| P2 | [Snowflake Cortex Code](https://example.com) | AI-native coding in Snowflake |
| P3 | [Agentic AI Deep Dive](https://example.com) | Agentic AI patterns pentru data engineering |

**Mai multe linkuri intr-o celula**

| Training | Resurse |
|---|---|
| Fine-Tuning | [Curs RLHF & DPO](https://example.com) · [HuggingFace TRL](https://example.com) |
| RAG | [LangChain Docs](https://example.com) · [Snowflake Cortex](https://example.com) |

---

## Dark Mode Toggle (config only)

> Adauga in mkdocs.yml pentru a activa toggle light/dark:

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

---

## Navigation Features recomandate (config only)

```yaml
theme:
  features:
    - navigation.instant          # SPA-like, fara reload de pagina
    - navigation.instant.prefetch # pre-fetch la hover
    - navigation.path             # breadcrumbs deasupra titlului
    - navigation.top              # buton back to top
    - navigation.footer           # prev/next page links
    - navigation.tracking         # URL anchor tracking la scroll
    - content.tabs.link           # sync tabs pe tot site-ul
    - content.tooltips            # tooltips stilizate
    - toc.follow                  # TOC urmareste ancora activa
```

---

## Configurare completa — ce se poate adauga in mkdocs.yml

```yaml
markdown_extensions:
  - def_list              # definition lists (glosar)
  - abbr                  # abbreviations cu tooltip automat
  - pymdownx.emoji:
      emoji_index: !!python/name:material.extensions.emoji.twemoji
      emoji_generator: !!python/name:material.extensions.emoji.to_svg
  - pymdownx.critic       # track changes {--vechi--}{++nou++}
  - pymdownx.caret        # ^^underline^^
  - pymdownx.mark         # ==highlight==
  - pymdownx.tilde        # ~~strikethrough~~
  - pymdownx.snippets:
      auto_append:
        - includes/abbreviations.md   # glosar global cu tooltips
```
