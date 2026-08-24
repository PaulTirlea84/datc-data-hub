# AI Data Engineering

## AI Competency

AI-enabled Data Engineers prepare, process, and manage data for analytics, reporting, and AI applications. They are the **architects and builders of the enterprise data ecosystem that powers AI** — designing, orchestrating, and optimising the flow of high-quality, secure, and reliable data needed for GenAI solutions, especially Retrieval-Augmented Generation (RAG).

Their work spans ingestion, modelling, governance, data readiness, and the integration of modern database technologies including vector stores. By ensuring clean, trustworthy data pipelines, they enable downstream AI teams — LLM developers, application engineers, and data scientists — to deliver accurate and scalable AI solutions.

**Primary AI tools:** GitHub Copilot · Snowflake Cortex · Azure data services · AWS / GCP AI tools

**Key responsibilities:**

- Design, build, and maintain robust ETL/ELT pipelines for structured and unstructured data
- Automate ingestion from enterprise sources: SharePoint, Confluence, file systems, APIs, databases
- Implement vector databases and embedding pipelines for semantic search and AI retrieval
- Establish data quality, freshness, lineage, and observability frameworks
- Ensure data readiness for AI: validated, complete, compliant, and trustworthy
- Build chunking, embedding, and retrieval evaluation pipelines for RAG applications
- Contribute to architecture reviews, design patterns, and reusable engineering frameworks

??? note "P1 — AI Assisted"

    Uses **GitHub Copilot** to generate basic SQL and Python transformation code, reducing time on standard scripting tasks. Monitors and maintains existing data pipelines under guidance from senior engineers — reviewing logs, handling basic errors, and escalating issues.
    Understands core data warehousing concepts: ETL stages, layer architecture (staging → core → semantic), data validation, and reconciliation. Begins learning about vector databases and embeddings as the foundation for AI-ready data layers. Validates all AI-generated code with senior guidance before applying it to any environment.
    Uses Copilot suggestions as a learning accelerant, not a replacement for understanding the underlying logic. Can explain what generated code does and why — cannot yet independently assess whether it is correct for the business requirement.
    **Typical tasks at P1:** generating SQL SELECT/JOIN scripts with Copilot, maintaining pipeline monitoring scripts, writing data validation queries with AI assistance, documenting pipeline logic.

??? note "P2 — AI Accelerated"

    Leverages **GitHub Copilot** and **Snowflake Cortex Code (CoCo)** as regular tools in the development workflow — automating SQL transformations, data validations, and ingestion routine scripting. Builds simple pipelines for new data sources with limited supervision: ADF pipelines, Python ETL scripts, basic Snowflake loads.
    Implements standard data quality checks (row counts, hash validation, null checks) and reconciliation logic. Begins working with vector databases and embedding pipeline concepts, understanding how unstructured data is prepared for AI retrieval. Validates AI outputs independently and can explain the logic of generated code.
    Uses Snowflake Cortex for AI-native SQL tasks. Can modify and adapt AI-generated code to meet specific requirements without full rewrites. Adapts prompts to produce more accurate and context-appropriate results — understands that prompt quality directly affects output quality.
    **Typical tasks at P2:** building ADF or Python pipelines for new sources independently, using Cortex CoCo for Snowflake SQL automation, writing data quality frameworks, beginning to work with basic embedding API calls.

??? note "P3 — Agentic AI"

    Designs and executes **multi-step agentic data workflows** — for example: ingest raw documents → chunk and clean text → generate embeddings → store in vector DB → validate retrieval quality → update metadata. Builds complex, scalable pipelines for both structured (SQL/DWH) and unstructured (documents, PDFs, semi-structured) data sources.
    Constructs full **RAG-ready data foundations**: intelligent chunking strategies, embedding pipelines with provider selection (Azure OpenAI, Snowflake Cortex), metadata enrichment, retrieval evaluation layers. Ensures all data layers are validated, governed, and AI-compliant for downstream AI engineering and application teams.
    Uses **Snowflake Cortex for LLMs, RAG, and Search** directly inside the data warehouse. Leverages AWS and GCP AI data services where applicable. Coaches and guides peers on AI-augmented engineering patterns — can run technical workshops or pair sessions.
    **Typical tasks at P3:** building end-to-end RAG pipelines, designing chunking logic for different document types, constructing embedding and retrieval evaluation frameworks, leading technical coaching sessions on agentic patterns for the team.

??? note "P4 — Integrated AI"

    Leads **architecture design for major AI data initiatives** — RAG platforms at scale, enterprise semantic layers, AI data products used in production. Defines retrieval performance targets and optimises chunking, embedding, and indexing strategies for latency, accuracy, and cost.
    Integrates AI tooling (Cortex, Copilot, LangChain-adjacent patterns) as a **standard part of team delivery** — embedded in pipeline templates, coding standards, and CI/CD workflows. Creates reusable automation frameworks and engineering best practices for the domain. Mentors and coaches specialist-level engineers on AI-augmented patterns.
    Collaborates with application and AI teams to ensure data layers meet latency, accuracy, and scale requirements for production GenAI applications. Owns the technical design review process for AI data workloads on the team. Creates governance documentation for AI-generated pipelines in regulated environments.
    **Typical tasks at P4:** leading RAG platform design, defining team-wide AI tooling standards, reviewing architecture proposals from seniors, presenting data platform AI strategy to clients, coaching multiple engineers simultaneously.

??? note "P5 — Governed AI"

    Defines **enterprise-wide AI data engineering strategy**, architectural standards, and governance frameworks for the organisation. Shapes the vision for data architecture, quality, and compliance across AI workloads — including policies for embedding model selection, data retention, PII handling in vector stores, and retrieval audit trails.
    Acts as the **recognised authority and final escalation point** on data engineering for AI and RAG at the practice level. Advises leadership on technology directions, platform decisions, and investment priorities for the AI data ecosystem. Drives organisation-wide transformation: new capabilities, new tools, new talent pipelines for the evolving AI data stack.
    Represents the team externally in thought leadership, community of practice, and client advisory roles. Shapes Accenture's position on AI data engineering standards and contributes to global methodology development. At this level, the focus shifts from building to defining the conditions under which others can build responsibly and at scale.
    **Typical tasks at P5:** advising clients on AI data platform strategy, defining practice-wide governance policies, representing the team in global Data & AI communities, shaping hiring and capability-building strategy for the domain.

---

## AI Role Details

Builds and governs the data infrastructure that powers AI — pipelines, cloud platforms, semantic layers, and RAG-ready data foundations.

??? abstract "AI Data Engineering — Career Progression"
    - **Associate** — foundational SQL, Python, and pipeline work under guidance. Uses GitHub Copilot for code generation with senior validation. Learns DWH layer concepts and basic data quality patterns · **P1**
    - **Analyst** — independent ETL delivery, data quality ownership, AI-assisted development. Builds pipelines for new sources. Uses Cortex CoCo and Copilot regularly. Validates AI output independently · **P2**
    - **Senior Analyst** — owns complex pipelines end-to-end, introduces AI tooling into team workflows. Begins building embedding pipelines and working with vector databases · **P3**
    - **Specialist** — deep expert in cloud architecture and DWH. Sets engineering standards. Designs RAG-ready data foundations. Builds full chunking-embedding-retrieval pipelines. Coaches peers · **P3**
    - **Associate Manager** — leads the engineering stream, owns delivery and platform decisions. Embeds AI tooling into team standards and CI/CD. Owns architecture for AI data initiatives · **P4**
    - **Manager** — sets technical direction, drives AI adoption strategy, owns domain standards. Advises leadership on platform strategy. Represents team in external forums · **P4**
    - **Architect** — defines enterprise AI data engineering strategy and standards. Shapes vision for data architecture, governance, and quality. Acts as recognised authority · **P5**

---

## AI Trainings

:material-check-circle: mandatory &nbsp;·&nbsp; :material-circle-outline: optional

Optionals from level N become mandatory at N+1. Cloud platform courses (Azure / AWS / GCP) are optional throughout — complete the track matching your current project.

Check the boxes as you complete courses — your progress is saved in the browser.

---

### P1 — AI Assisted
*L12 Associate*

| | Training | Category | Link | ✓ |
|:---:|---|---|---|:---:|
| :material-check-circle: | TQ Agentic AI | General | — | <input type="checkbox" class="course-done" data-level="de-p1" data-mandatory="true" data-id="de-p1-tq"> |
| :material-check-circle: | GitHub Copilot with Python | General | — | <input type="checkbox" class="course-done" data-level="de-p1" data-mandatory="true" data-id="de-p1-git-copilot"> |
| :material-circle-outline: | Reinvention with Agentic AI | General | — | <input type="checkbox" class="course-done" data-level="de-p1" data-id="de-p1-reinvention"> |

<div class="level-progress" data-level="de-p1"></div>

---

### P2 — AI Accelerated
*L11 Analyst*

| | Training | Category | Link | ✓ |
|:---:|---|---|---|:---:|
| :material-check-circle: | Reinvention with Agentic AI | General | — | <input type="checkbox" class="course-done" data-level="de-p2" data-mandatory="true" data-id="de-p2-reinvention"> |
| :material-check-circle: | Agentic AI Ecosystem Tools — Level 3A | Agentic 3A | [Workday](https://wd103.myworkday.com/accenture/learning/program/4510d076039210016cc0344f0eeb0000?page=1&record=2ddc7d286ba7100135e8795b16520001&type=2d29754fdb8e100008b50ff6bc94003b) | <input type="checkbox" class="course-done" data-level="de-p2" data-mandatory="true" data-id="de-p2-3a"> |
| :material-check-circle: | Agentic AI Frameworks — Level 3B | Agentic 3B | [Workday](https://wd103.myworkday.com/accenture/learning/program/9a74c413ff121001288f4f5ca96e0000?page=2&record=6d5c0af6a2971000e0b1838e01c10000&type=2d29754fdb8e100008b50ff6bc94003b) | <input type="checkbox" class="course-done" data-level="de-p2" data-mandatory="true" data-id="de-p2-3b"> |
| :material-check-circle: | Snowflake Foundations to AI | DE | — | <input type="checkbox" class="course-done" data-level="de-p2" data-mandatory="true" data-id="de-p2-snowflake"> |
| :material-check-circle: | Snowflake Cortex Code (CoCo) | DE | — | <input type="checkbox" class="course-done" data-level="de-p2" data-mandatory="true" data-id="de-p2-cortex-coco"> |
| :material-circle-outline: | Get started with data engineering on Azure | Cloud | — | <input type="checkbox" class="course-done" data-level="de-p2" data-id="de-p2-azure"> |
| :material-circle-outline: | AWS Training — Digital Training | Cloud | — | <input type="checkbox" class="course-done" data-level="de-p2" data-id="de-p2-aws"> |
| :material-circle-outline: | Google Cloud Data Engineering & Analytics | Cloud | — | <input type="checkbox" class="course-done" data-level="de-p2" data-id="de-p2-gcp"> |

> Reinvention with Agentic AI was optional at P1 — it is mandatory from P2.
> Cloud platform trainings are optional — pick the track matching your project (Azure / AWS / GCP).

<div class="level-progress" data-level="de-p2"></div>

---

### P3 — Agentic AI
*L10 Senior Analyst · L9 Specialist*

| | Training | Category | Link | ✓ |
|:---:|---|---|---|:---:|
| :material-check-circle: | Working with Data Agents | Cross-track | — | <input type="checkbox" class="course-done" data-level="de-p3" data-mandatory="true" data-id="de-p3-data-agents"> |
| :material-check-circle: | Data Agents in Snowflake | Cross-track | — | <input type="checkbox" class="course-done" data-level="de-p3" data-mandatory="true" data-id="de-p3-agents-sf"> |
| :material-check-circle: | Snowflake Cortex for LLMs, RAG, and Search | DE | — | <input type="checkbox" class="course-done" data-level="de-p3" data-mandatory="true" data-id="de-p3-cortex-llm"> |
| :material-circle-outline: | Agentic Coding Assistant using Claude Code | Agentic 4A | — | <input type="checkbox" class="course-done" data-level="de-p3" data-id="de-p3-claude"> |
| :material-circle-outline: | Agentic AI Deep Dive Level 4A for Data Engineers | Agentic 4A | — | <input type="checkbox" class="course-done" data-level="de-p3" data-id="de-p3-4a-de"> |

> Claude Code becomes mandatory at P4.

<div class="level-progress" data-level="de-p3"></div>

---

### P4 — Integrated AI
*L8 Associate Manager · L7 Manager*

| | Training | Category | Link | ✓ |
|:---:|---|---|---|:---:|
| :material-check-circle: | Agentic Coding Assistant using Claude Code | Agentic 4A | — | <input type="checkbox" class="course-done" data-level="de-p4" data-mandatory="true" data-id="de-p4-claude"> |
| :material-check-circle: | Scalable Data Architectures: Amazon Redshift & QuickSight | Cross-track | — | <input type="checkbox" class="course-done" data-level="de-p4" data-mandatory="true" data-id="de-p4-redshift"> |
| :material-check-circle: | Agentic AI Deep Dive Level 4A: Anthropic Claude Code | Agentic 4A | — | <input type="checkbox" class="course-done" data-level="de-p4" data-mandatory="true" data-id="de-p4-4a-claude"> |
| :material-circle-outline: | Generative AI on AWS: Building GenAI Models with Amazon Bedrock | Agentic 4A | — | <input type="checkbox" class="course-done" data-level="de-p4" data-id="de-p4-bedrock"> |
| :material-circle-outline: | Amazon Q — Generative AI-powered Assistant Learning Plan | Cross-track | — | <input type="checkbox" class="course-done" data-level="de-p4" data-id="de-p4-amazonq"> |

> Claude Code was optional at P3 — it is mandatory from P4.

<div class="level-progress" data-level="de-p4"></div>

---

### P5 — Governed AI
*✦ Architect*

P5 is not course-based. Completing all P4 courses is an implicit prerequisite — but not sufficient on its own.

??? note "What P5 looks like"
    Defines enterprise-wide AI data engineering strategy, architectural standards, and governance frameworks. Shapes the vision for data architecture, quality, and compliance across AI workloads — including policies for embedding model selection, data retention, PII handling in vector stores, and retrieval audit trails. Acts as the recognised authority and final escalation point on AI data engineering at the practice level. Advises leadership on technology directions, platform decisions, and investment priorities for the AI data ecosystem.

**Evidence — what to demonstrate:**

**Built or designed**

- Authored team-wide AI data standards (vector store schemas, embedding pipeline patterns, chunking strategies) — adopted across 3+ projects
- Led architecture design for a production RAG platform: documented architecture decision records, reviewed and approved by client or practice leadership
- Created a reusable retrieval evaluation framework embedded in the team's CI/CD or design review process

**Led or governed**

- Owned the technical design review for AI data workloads across 3+ concurrent engagements
- Defined the team's policy for PII handling in vector stores and embedding pipelines — adopted at practice or client level
- Coached engineers through P3 → P4 transition simultaneously (2+ engineers, documented outcomes)
- Led an AI data governance or compliance audit on a client engagement

**External or community**

- Presented AI data engineering strategy to client C-suite, Accenture leadership, or a global Data & AI community
- Contributed a methodology paper, CoP presentation, or internal knowledge article on RAG architecture or AI data patterns
- Shaped hiring or capability-building strategy for the AI data engineering domain

---

> This list will be expanded as the platform matures and new tools are validated.
