# Sandbox — Design Patterns

---

## Grid Cards

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

-   **P5 — Governed AI**

    ---
    Defines standards, governance, and strategy for AI use across the practice. Advises leadership.

    **Required at:** Architect ✦

</div>


---

## Tab Cards


===    "P1 — AI Assisted"

    Uses built-in AI features (Copilot, suggestions) for day-to-day work. Follows existing prompts and validates outputs with senior guidance.

    **Required at:** Associate · Analyst

===    "P2 — AI Accelerated"

    Actively uses LLMs to speed up tasks. Validates AI outputs independently and adapts prompts for better results.

    **Required at:** Senior Analyst

===    "P3 — Agentic AI"

    Designs multi-step AI workflows. Builds reusable prompt structures, applies RAG patterns, guides peers on effective AI use.

    **Required at:** Specialist · Associate Manager

===    "P4 — Integrated AI"

    Embeds AI directly into pipelines, dashboards, and team workflows. Creates frameworks and leads AI adoption on engagements.

    **Required at:** Manager

===    "P5 — Governed AI"

    Defines standards, governance, and strategy for AI use across the practice. Advises leadership.

    **Required at:** Architect ✦

---

## Checkboxes — functioneaza doar ca lista, nu in tabel

- [x] Fine-Tuning completat
- [x] Model Selection completat
- [ ] Model Eval & Metrics — de facut
- [ ] Experiment Tracking — de facut
- [x] Perf & Optimization completat

!!! warning "In tabel nu merg"
    `pymdownx.tasklist` functioneaza doar in liste bullet. In celule de tabel apar ca text `- [x]`.

---

## Linkuri — formate utile pentru trainings

**1. Link simplu**
```
[GitHub Copilot with Python](https://example.com)
```
[GitHub Copilot with Python](https://example.com)

---

**2. Link cu tooltip la hover**
```
[GitHub Copilot](https://example.com "AI pair programming pentru Python si data pipelines")
```
[GitHub Copilot](https://example.com "AI pair programming pentru Python si data pipelines")

---

**3. Link buton**
```
[Incepe training](https://example.com){ .md-button }
[Incepe training](https://example.com){ .md-button .md-button--primary }
```
[Incepe training](#){ .md-button }
[Incepe training](#){ .md-button .md-button--primary }

---

**4. Link in tabel (cel mai folosit la trainings)**

| Proficiency | Training | Goal |
|:---:|---|---|
| P1 | [GitHub Copilot with Python](https://example.com) | AI pair programming pentru pipelines |
| P2 | [Snowflake Cortex Code](https://example.com) | AI-native coding in Snowflake |
| P3 | [Agentic AI Deep Dive](https://example.com) | Agentic AI patterns pentru data engineering |

---

**5. Mai multe linkuri intr-o celula**

| Training | Resurse |
|---|---|
| Fine-Tuning | [Curs RLHF & DPO](https://example.com) · [HuggingFace TRL](https://example.com) · [Axolotl Framework](https://example.com) |
| RAG | [LangChain Docs](https://example.com) · [Snowflake Cortex](https://example.com) |

---

**6. Link intern catre alta pagina din site**
```
[Vezi AI Proficiency Scale](../ai-competency.md#ai-proficiency-scale)
[Exploreaza domeniul](../domains/data-engineering/index.md)
```
[Vezi AI Proficiency Scale](../ai-competency.md#ai-proficiency-scale)

---

## Tabs cu link

=== ":material-database-outline: Data Engineering"

    AI-enabled Data Engineers build the data foundation for analytics and AI applications.

    **Primary tools:** GitHub Copilot · Snowflake Cortex · Azure data services

    [→ Explore Data Engineering](../domains/data-engineering/index.md){ .md-button }

=== ":material-chart-bar: Data Analytics"

    AI-enabled Analytics practitioners accelerate reporting, insight generation, and decision support.

    **Primary tools:** Power BI Copilot · Fabric Copilot · Tableau AI

    [→ Explore Data Analytics](../domains/visual-insights/index.md){ .md-button }

---

## Headings si text formatting

# H1 — folosit doar pentru titlul paginii
## H2 — sectiune principala
### H3 — subsectiune
#### H4 — sub-subsectiune (rar)

**Bold** — pentru termeni importanti sau emphasis puternic

*Italic* — pentru titluri de carti, termeni straini, emphasis usor

***Bold si italic*** — rar, pentru ceva foarte important

~~Strikethrough~~ — pentru ceva eliminat sau deprecated

`inline code` — pentru nume de fisiere, variabile, comenzi

> Blockquote — pentru citate sau note importante care nu sunt admonition

---

Combinatii utile:

- **P3** — *Agentic AI* — descriere normala cu mix de formatare
- `mkdocs.yml` — fisierul de configuratie **principal**
- Aceasta functie este ~~deprecated~~ **inlocuita** cu versiunea noua
