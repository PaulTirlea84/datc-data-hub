# Data Analytics

The **Data Analytics** domain covers front-end data delivery within the DATC Data Platform. Practitioners in this domain develop, migrate, deploy, and maintain data-driven insight interfaces that drive adoption and decision-making. They build scalable BI architecture, translate complex data into actionable stories, and integrate security and data privacy into reporting systems.


---

## What Data Analytics Does

<div class="grid cards" markdown>

-   **BI Engineering**

    ---

    Develop and maintain commercial and bespoke knowledge engine interfaces. Build open BI architecture for cross-enterprise visibility. Design and implement scalable reporting systems from requirements through production support.

-   **Data Visualization**

    ---

    Create compelling visual representations of complex data. Translate raw data into dashboards and insights that enhance understanding and aid decision-making. Design UX and interaction patterns that drive report adoption.

-   **Enterprise BI Architecture**

    ---

    Design and implement systems and frameworks for collecting, managing, analyzing, and visualizing data at enterprise scale. Build robust, maintainable infrastructure to support BI initiatives across organizations.

-   **Semantic Modeling**

    ---

    Build and govern the semantic layer between raw data and front-end reports. Define KPI frameworks, metric hierarchies, Row Level Security, and data governance within the BI layer.

</div>

---

## Tech Stack

### Primary Tools

| Tool | Use |
|---|---|
| **Power BI Desktop** | Core development — reports, data models, DAX, Power Query |
| **Power BI Service** | Deployment, workspaces, app publishing, scheduled refresh |
| **Microsoft Fabric** | Modern lakehouse + BI platform — Dataflows Gen2, semantic models, OneLake |
| **DAX Studio** | External DAX query analyzer — optimization and profiling |
| **Tabular Editor** | External model editor — calculation groups, batch operations, BPA rules |
| **ALM Toolkit** | Dataset comparison and schema diffing for deployment pipelines |
| **Tableau** | Alternative BI — Danubia DA (10+ certified); Explain Data, Forecasting, AI analysis |
| **AWS QuickSight** | BI on AWS stack with Claude integration |

### Languages & Skills

| Skill | Coverage |
|---|---|
| DAX | Universal measures, calculated tables, calculation groups |
| Power Query | transformations, custom functions, query folding |
| SQL | querying, validation, source-layer alignment |
| Python | ETL scripts, REST API pipelines, automation |
| VBA | Excel automation and legacy integrations |

### Connectors & Integrations

REST APIs (Jira, SonarQube, GenWizard) · SharePoint · Salesforce · SAP · ServiceNow · Azure Synapse / CosmosDB · Databricks · Redshift · Outlook / Teams

---

## Level Profiles

> Each level: **Responsibilities** → **Core Skills** → **Learning Path**. PL-300 is mandatory from L11 upward.

???+ note "Associate (L12) — Junior Developer"

    **Focus:** understand the team, the product, and basic tooling. Execute with close guidance from a mentor.

    **Responsibilities**

    - Understand the product end-to-end from an end-user perspective
    - Learn how the team operates — procedures, roles, functions
    - Understand business requirements and existing report logic
    - Update existing DAX measures, calculated columns, and metric definitions from specs
    - Apply Power Query transformations on existing queries under guidance
    - Connect to standard sources (SharePoint, OneDrive, Excel)
    - Test data accuracy between source and report outputs
    - Develop reports and dashboards according to provided design
    - Publish reports to Power BI Service; configure basic scheduled refresh
    - Update data dictionaries and desktop procedures
    - Participate in team meetings; write Jira stories under guidance
    - Diagnose basic technical issues in testing and production

    **Core Skills**

    - Power BI Desktop: navigation, report canvas, standard visuals
    - Power Query: connect, load, basic transformations (rename, filter, change type)
    - DAX basics: SUM, COUNT, CALCULATE, simple calculated columns
    - SharePoint / OneDrive as data sources
    - Power BI Service: publish, schedule refresh, share reports
    - Basic data types and data validation
    - Reading and understanding existing data models

    **Learning Path**

    | Priority | Training | Platform | Target Cert |
    |---|---|---|---|
    | **Mandatory** | Power BI Data Analyst — PL-300 Path | Pluralsight / MS Learn | **PL-300** |
    | Core | Power BI Data Essentials | Pluralsight | — |
    | Core | Business Communications with Data | Pluralsight | — |
    | Core | SQL Essentials / Getting Started with MySQL | Pluralsight | — |
    | Core | Data Visualization Literacy | Pluralsight | — |
    | Core | Data Governance Literacy | Pluralsight | — |
    | Optional | Azure Fundamentals — AZ-900 | MS Learn | AZ-900 |

??? note "Analyst (L11) — Mid Developer"

    **Focus:** deliver independently on standard tasks; start owning report areas; contribute to documentation.

    **Responsibilities**

    - Write DAX measures and M transformations from scratch for new requirements
    - Understand business requirements and process flow; translate to technical specifications
    - Build new report pages and visuals independently, following design patterns
    - Extend existing data models: new tables, relationships, additional sources
    - Handle multiple source types (SQL, APIs, SharePoint, Databricks)
    - Manage gateway connections and refresh rules
    - Write functional and technical documentation; create and update data dictionaries
    - Conduct data quality checks across source → model → visual layer
    - Deploy reports via DevOps / ALM pipelines under senior guidance
    - Participate in requirements workshops; ask clarifying questions
    - Support senior developers on complex model and DAX changes
    - Help guide associate-level team members when possible

    **Core Skills**

    - DAX intermediate: FILTER, RELATED, CALCULATE with complex predicates, basic time intelligence (SAMEPERIODLASTYEAR, DATESYTD)
    - Power Query / M: merge, append, custom columns, conditional logic, M formula basics
    - Data modeling: star schema, 1:N and M:M relationships, calculated tables
    - Row Level Security: static RLS setup and testing
    - Power BI Service: workspaces, app publishing, sensitivity labels
    - DevOps / ALM: understanding deployment pipelines; basic promotion flow
    - SQL: SELECT, JOIN, WHERE, GROUP BY — querying source databases
    - Technical documentation and metrics definitions

    **Learning Path**

    | Priority | Training | Platform | Target Cert |
    |---|---|---|---|
    | **Mandatory** | PL-300 — obtain if not yet certified | MS Learn / Pluralsight | **PL-300** |
    | Core | Power BI for Admins Path | Pluralsight | — |
    | Core | Data Architecture: Foundations | Pluralsight | — |
    | Core | Developing SQL Server Databases | Pluralsight | — |
    | Core | Report and Dashboard Creation — MS Docs | MS Learn | — |
    | Core | Power BI DAX Functions Full Course | YouTube / SQLBI | — |
    | Optional | Azure Data Fundamentals — DP-900 | MS Learn | DP-900 |

??? note "Senior Analyst (L10) — Senior Developer"

    **Focus:** fully own report lifecycle; estimate effort; start leading smaller sub-scopes and mentoring.

    **Responsibilities**

    - Independently manage full report lifecycle: requirements → design → build → test → production support
    - Analyze business requirements; recommend new KPIs and report structures
    - Design data models end-to-end: star schema, semantic layer, calculated tables
    - Evaluate KPIs; translate complex business logic into robust, maintainable DAX
    - Write and maintain M transformations for complex multi-source scenarios
    - Align Data Source and ETL design within Power BI context
    - Create and own implementation plans with effort/cost estimation and timelines
    - Deploy and manage deployment pipelines (ALM, DevOps)
    - Implement Row Level Security (static and dynamic) and workspace access management
    - Write client presentations, data dictionaries, process documentation
    - Perform preventive maintenance and integrate configuration changes
    - Mentor Analyst and Associate-level developers; provide daily guidance
    - Integrate data across application layers, subsystems, and data sources
    - Foresee issues ahead of time; design around them or resolve before they surface

    **Core Skills**

    - Advanced DAX: calculation groups, field parameters, dynamic titles, RANKX, TOPN, VAR patterns
    - Advanced Power Query / M: custom functions, error handling, query folding awareness
    - Semantic model design: aggregations, hierarchies, bi-directional filters (when to use / avoid)
    - Performance optimization: model size, Vertipaq Analyzer, DAX query plans
    - DevOps / ALM: manage full deployment pipeline, environment promotion, workspace roles
    - REST API connectivity: paginated endpoints, custom connectors basics
    - Dynamic RLS: USERNAME(), OLS
    - Azure basics: Azure SQL, Synapse serverless views as PBI source
    - Effort estimation and project planning

    **Learning Path**

    | Priority | Training | Platform | Target Cert |
    |---|---|---|---|
    | **Mandatory** | PL-300 — must be certified | MS Learn | **PL-300** |
    | Core | Azure Data Fundamentals — DP-900 | MS Learn / Pluralsight | **DP-900** |
    | Core | DAX by Real-World Problems | SQLBI | — |
    | Core | Power Query Deep Dive | Pluralsight | — |
    | Core | DevOps / ALM Pipeline Management | Pluralsight | — |
    | Optional | Azure AI Fundamentals — AI-901 | MS Learn | AI-901 |
    | Optional | Python Data Essentials | Pluralsight | — |
    | Optional | Databricks Getting Started | Databricks Academy | — |

??? note "Specialist (L9) — Lead Developer"

    **Focus:** lead reporting ecosystems end-to-end; own architecture and design; coordinate teams and stakeholders.

    **Responsibilities**

    - Design and own large-scale reporting ecosystems (30+ sources, 60+ reports)
    - Define KPI frameworks, SLA methodologies, and data governance standards
    - Lead solution design and business analysis alongside development
    - Architect semantic models end-to-end — calculation groups, field parameters, dynamic axes, bookmarks
    - Migrate legacy systems (Excel, flat files, PostgreSQL) to Power BI / Microsoft Fabric
    - Build automated REST API pipelines (paginated endpoints, Jira, ServiceNow, GenWizard)
    - Coordinate with data engineering / ingestion teams; align platforms with reporting layer
    - Conduct performance optimization at architectural, DAX, and model-compression level
    - Manage stakeholder alignment, change requests, and monthly business validations
    - Run estimation and scoping on new projects; contribute to pre-sales
    - Produce knowledge-transfer documentation for long-term maintainability
    - Introduce Power Apps / Power Automate forms to replace manual data entry
    - Lead and mentor the full team; run stand-ups and 1-2-1s
    - Monitor team chargeability and project delivery accuracy

    **Core Skills**

    - Full Power BI architecture: gateway strategy, dataset reuse, composite models, DirectQuery vs. Import trade-offs
    - Microsoft Fabric: Lakehouse, Dataflows Gen2, semantic model in Fabric, OneLake
    - API integrations: Python or Power Query for REST APIs, pagination, auth flows (OAuth, API Key)
    - Advanced DAX: DETAILROWS, INFO functions, calculation groups, dynamic format strings
    - Stakeholder management: requirements workshops, change management, monthly validations
    - Power Apps + Power Automate: form-driven data entry flows replacing manual Excel/email processes
    - Leadership: estimation, mentoring, chargeability monitoring, 1-2-1s, stand-ups

    **Learning Path**

    | Priority | Training | Platform | Target Cert |
    |---|---|---|---|
    | **Mandatory** | PL-300 — must be certified | — | **PL-300** |
    | Core | Azure AI Fundamentals — AI-901 | MS Learn | **AI-901** |
    | Core | Microsoft Fabric — DP-600 Intro Path | MS Learn / Pluralsight | — |
    | Core | Python for Data Analysis | Pluralsight | — |
    | Core | TQ Agentic AI Training (FY26 priority) | Internal / TQ | — |
    | Optional | Implementing Analytics Solutions — DP-600 | MS Learn | DP-600 |
    | Optional | Databricks Data Analyst Associate | Databricks Academy | Databricks DA |
    | Optional | Scrum Master | Scrum.org | PSM I |

??? note "Associate Manager (L8) — BI / Data Architect"

    **Focus:** lead beyond delivery — architecture vision, people, budget, clients, domain strategy.

    **Responsibilities**

    - Lead activities across multiple projects and teams simultaneously
    - Own team allocation, annual talent discussions, one-sliders
    - Drive new project estimations, pre-sales discussions, and client visits
    - Define and own end-to-end analytics architecture vision for the team
    - Set and evolve technical standards and best practices for the domain
    - Act as escalation point for complex technical and stakeholder challenges
    - Drive certification roadmap and training strategy across all levels
    - Manage monthly budget updates and project status reporting
    - Collaborate with platform leads on domain strategy and upskilling priorities
    - Build external client relationships and develop domain expertise visibility
    - Represent the team in cross-domain governance and platform meetings

    **Core Skills**

    - End-to-end analytics architecture: Fabric, Azure Synapse, Power BI Premium / Fabric capacity planning
    - Enterprise governance: tenant settings, sensitivity labels, data lineage, audit logs, Purview
    - Platform strategy: tool selection trade-offs (Power BI vs. Fabric vs. Azure Synapse Analytics)
    - Power Platform breadth: Power Apps model-driven apps, Power Automate cloud flows, Copilot Studio basics
    - Pre-sales: solution scoping, effort estimation, proposal writing, client workshops
    - People leadership: talent reviews, one-sliders, coaching, career path guidance
    - Budget and delivery: Myte tracking, monthly status reporting, chargeability management

    **Learning Path**

    | Priority | Training | Platform | Target Cert |
    |---|---|---|---|
    | **Mandatory** | PL-300 — must be certified | — | **PL-300** |
    | **Mandatory** | Implementing Analytics Solutions — DP-600 | MS Learn / Pluralsight | **DP-600** |
    | **Mandatory** | Power Platform Functional Consultant — PL-200 *(retiring Aug 31 2026 — plan ahead)* | MS Learn | **PL-200** |
    | Core | DP-900 + AI-901 (if not yet obtained) | MS Learn | DP-900 · AI-901 |
    | Core | Cloud architecture patterns (Azure / Fabric) | Pluralsight / A Cloud Guru | — |
    | Core | Leadership & Scrum Master | Scrum.org | PSM I |
    | Optional | Databricks Data Analyst Associate | Databricks Academy | — |

---


## Certifications

| Certification | Level | Who It's For | When to Target |
|---|---|---|---|
| **PL-300** — Power BI Data Analyst Associate | Associate | All DA practitioners | L12 start → L11 mandatory |
| **DP-900** — Azure Data Fundamentals | Fundamentals | Analysts moving toward cloud | L11 optional → L10 target |
| **AI-901** — Azure AI Fundamentals *(replaces AI-900, retired June 2026)* | Fundamentals | Anyone exploring AI on Azure | L10 optional → L9 target |
| **DP-600** — Fabric Analytics Engineer Associate | Associate | Engineers on Microsoft Fabric | L9 optional → L8 mandatory |
| **PL-200** — Power Platform Functional Consultant *(retiring Aug 31 2026)* | Associate | Architects across Power Platform | L10 optional — obtain before Aug 2026 |


---

## Competency Matrix

> ○ not required · ◑ awareness · ● proficient · ★ expert / owns it

| Competency | L12 Associate | L11 Analyst | L10 Senior Analyst | L9 Specialist | L8 Associate Manager |
|---|:---:|:---:|:---:|:---:|:---:|
| Power BI Development | ◑ | ● | ● | ★ | ★ |
| DAX & M Language | ◑ | ● | ● | ★ | ★ |
| Data Modeling & Semantic Layer | ○ | ◑ | ● | ★ | ★ |
| Data Ingestion & ETL (Power Query) | ◑ | ● | ● | ★ | ★ |
| SQL & Database Querying | ◑ | ● | ● | ● | ● |
| Cloud & Modern Data Stack (Azure / Fabric) | ○ | ◑ | ◑ | ● | ★ |
| API Integrations & Automation | ○ | ◑ | ◑ | ● | ● |
| Governance, RLS & Security | ○ | ◑ | ● | ● | ★ |
| Architecture & Solution Design | ○ | ○ | ◑ | ● | ★ |
| Stakeholder Management | ○ | ◑ | ● | ★ | ★ |
| Estimation & Project Planning | ○ | ○ | ● | ★ | ★ |
| Mentoring & Team Leadership | ○ | ◑ | ● | ★ | ★ |
| Pre-sales & Client Development | ○ | ○ | ○ | ◑ | ● |
| Budget & Delivery Management | ○ | ○ | ○ | ◑ | ★ |
