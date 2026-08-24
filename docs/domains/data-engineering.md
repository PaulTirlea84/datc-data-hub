# Data Engineering

The **Data Engineering** domain covers back-end data infrastructure within the DATC Data Platform. Practitioners in this domain construct, optimize, and maintain the infrastructure for data generation, transformation, and storage. They design pipelines, workflows, and data platforms that facilitate the seamless flow of data across systems — feeding the Analytics domain and client AI applications with clean, reliable, well-governed data.


---

## What Data Engineering Does

<div class="grid cards" markdown>

-   **Data Engineering**

    ---

    Construct and maintain infrastructure for data generation, transformation, and storage. Design pipelines and data platforms for seamless data flow. Own the full ETL/ELT cycle from raw ingestion through to analytics-ready layers.

-   **Data Architecture**

    ---

    Define and align the major types and sources of data necessary to support the business. Determine how data is used, stored, managed, and integrated within IT systems. Design lakehouse, DWH, and hybrid architectures that scale.

-   **Modern Data Management & Governance**

    ---

    Implement strategies for collecting, storing, processing, and governing data in complex modern data ecosystems. Ensure data quality, security, and accessibility through lineage, cataloguing, and observability.

-   **AI-Ready Data**

    ---

    Build the data foundations that power GenAI applications — RAG pipelines, vector databases, embedding workflows, and semantic layers. Ensure data is clean, compliant, and structured for AI consumption.

</div>

---

## Tech Stack

### Primary Platforms

| Platform | Use |
|---|---|
| **Oracle Database / Exadata** | Core DWH and transactional data — dominant platform |
| **Snowflake** | Cloud-native analytical DWH — Data Vault and analytics layers |
| **Azure Data Factory + Synapse** | Azure ETL pipelines and cloud DWH |
| **Databricks** | Spark-based Lakehouse, Delta Lake, PySpark transformations |
| **Microsoft Fabric** | Medallion architecture, Dataflows Gen2, SQL analytics endpoint |
| **dbt — Data Build Tool** | Transformation layer on Snowflake / Databricks — Data Vault 2.0 stack |
| **MS SQL Server** | Relational DWH, SSIS ETL, reporting backend |
| **CCH Tagetik / Anaplan** | EPM platforms — finance planning, consolidation, and reporting |

### Languages & Skills

| Skill | Coverage |
|---|---|
| SQL / PL/SQL | Universal DWH queries, ETL logic, stored procedures |
| Python |  ETL scripts, REST API pipelines, automation, PySpark |
| T-SQL | SQL Server DWH and reporting |
| PowerShell | deployment automation and database ops |
| JavaScript / jQuery | application integrations and web-layer data |
| Shell / Korn Shell |  Linux-based ETL and scheduling |

### Additional Platforms & Tools

Oracle Data Integrator (ODI) · SSIS · MuleSoft · Oracle SOA / OSB · AWS Redshift · BigQuery (GCP) · PostgreSQL · SAP HANA · Collibra (governance) · Azure Purview · Terraform · DataOpsLive · Databricks Unity Catalog

---

## Level Profiles


???+ note "Associate (L12) — Junior Data Engineer"

    **Focus:** understand data pipelines and databases; execute ETL tasks with close guidance.

    **Responsibilities**

    - Understand the DWH architecture and data flow end-to-end
    - Learn team procedures, roles, and delivery standards
    - Write and maintain SQL scripts for data extraction and transformation
    - Implement ETL mappings and loaders based on provided designs
    - Execute and monitor daily pipeline runs; handle basic errors
    - Validate data between source, staging, and target layers
    - Support data quality checks and reconciliation activities
    - Work within established DWH layer structures (stage, core, semantic)
    - Update pipeline configuration files under guidance (YAML, config files)
    - Document changes in Jira; participate in stand-ups
    - Diagnose basic data issues with senior guidance

    **Core Skills**

    - SQL: SELECT, JOIN, WHERE, GROUP BY, subqueries, basic aggregations
    - PL/SQL basics: procedures, functions, cursors
    - Understanding of ETL concepts: extract, transform, load; staging vs. target
    - DWH layer model awareness: raw, staging, core, semantic
    - Jira / Confluence: ticket creation and documentation
    - Git / SVN: basic version control — clone, commit, pull
    - Excel and basic data profiling

    **Learning Path**

    | Priority | Training | Platform | Target Cert |
    |---|---|---|---|
    | **Mandatory** | Azure Data Fundamentals — DP-900 | MS Learn / Pluralsight | **DP-900** |
    | Core | SQL Essentials / Getting Started with MySQL | Pluralsight | — |
    | Core | Data Architecture: Foundations | Pluralsight | — |
    | Core | Data Governance Literacy | Pluralsight | — |
    | Core | Git & Version Control Basics | GitHub Learning | — |
    | Optional | Azure Fundamentals — AZ-900 | MS Learn | AZ-900 |
    | Optional | Python Data Essentials | Pluralsight | — |

??? note "Analyst (L11) — Data Engineer"

    **Focus:** develop ETL independently on defined tasks; write documentation; start owning pipeline areas.

    **Responsibilities**

    - Write and maintain SQL and PL/SQL scripts for complex transformations
    - Develop ETL flows in assigned tools (ADF, SSIS, ODI, DBT) under senior guidance
    - Build and maintain SQL loaders and data load routines
    - Model simple data structures: staging tables, basic dimension/fact tables
    - Execute deployment steps and validate data in multiple environments
    - Write functional and technical documentation and data flow specs
    - Conduct data quality checks; investigate and resolve data discrepancies
    - Support senior engineers on complex pipeline and architecture tasks
    - Manage assigned Jira stories; communicate blockers early
    - Collaborate with BI/analytics teams on data model alignment

    **Core Skills**

    - SQL advanced: window functions, CTEs, MERGE, performance basics
    - PL/SQL: packages, error handling, dynamic SQL
    - ETL tool proficiency: at least one of ADF / SSIS / ODI / DBT
    - Star schema design: fact tables, dimension tables, SCD concepts
    - Data quality patterns: reconciliation, row counts, hash checks
    - Git: branching, merge, pull requests
    - Python basics: pandas, file I/O, simple data scripts
    - Technical documentation: data dictionaries, flow diagrams

    **Learning Path**

    | Priority | Training | Platform | Target Cert |
    |---|---|---|---|
    | **Mandatory** | DP-900 — obtain if not yet certified | MS Learn | **DP-900** |
    | Core | Azure Data Engineer Associate — DP-203 Path | MS Learn / Pluralsight | **DP-203** |
    | Core | Developing SQL Server Databases | Pluralsight | — |
    | Core | Python 3 for Data Engineering | Pluralsight | — |
    | Core | Data Warehousing with SQL Server | Pluralsight | — |
    | Optional | Databricks Getting Started / Apache Spark | Databricks Academy | — |
    | Optional | Google Cloud Foundations | Pluralsight | GCP CDL |

??? note "Senior Analyst (L10) — Senior Data Engineer"

    **Focus:** design and deliver ETL end-to-end; own data model areas; start leading junior engineers.

    **Responsibilities**

    - Design and develop ETL processes end-to-end (ADF, DBT, SSIS, ODI, Python)
    - Build and maintain SQL loaders and complex reporting workflows
    - Model data structures for full DWH layers: staging, core, DWH, semantic
    - Optimize SQL queries and improve pipeline performance
    - Administrate databases: user management, rights, backup, monitoring
    - Collaborate with BI / reporting teams to align data models with report needs
    - Support production deployments and environment management
    - Write technical documentation and functional specifications
    - Implement CI/CD pipelines for DB changes (Terraform, DevOps)
    - Migrate legacy ETL flows (e.g. Alteryx → Snowflake/DBT, SSIS → ADF)
    - Mentor junior and analyst-level engineers; provide daily guidance
    - Create and own implementation plans with effort/cost estimation

    **Core Skills**

    - Advanced SQL: query optimization, execution plans, indexing strategies
    - ETL design: stage/core/semantic layering, incremental loads, SCD Types 1/2/3
    - DBT: models, tests, documentation, incremental materialization
    - Azure Data Factory: pipelines, triggers, datasets, linked services, IR setup
    - Snowflake / Azure SQL: DWH design and administration
    - Python for ETL: pandas, SQLAlchemy, REST API calls, orchestration scripts
    - CI/CD: DevOps pipelines for DB deployments, Terraform basics
    - Performance tuning: query profiling, indexing, partitioning
    - Oracle DBA basics: user rights, backup, monitoring (Oracle-stack projects)

    **Learning Path**

    | Priority | Training | Platform | Target Cert |
    |---|---|---|---|
    | **Mandatory** | Azure Data Engineer Associate — DP-203 | MS Learn / Pluralsight | **DP-203** |
    | Core | Databricks: Getting Started + Apache Spark | Databricks Academy | — |
    | Core | DBT Fundamentals | dbt Learn | — |
    | Core | Deploying Microsoft Azure Data Solutions | Pluralsight | — |
    | Core | Building Data Pipelines in Microsoft Azure | Pluralsight | — |
    | Optional | Snowflake SnowPro Core | Snowflake | SnowPro Core |
    | Optional | AWS Databases / Storage / Big Data | Pluralsight | — |
    | Optional | Python for Data Analysis | Pluralsight | — |

??? note "Specialist (L9) — Lead Data Engineer"

    **Focus:** architect DWH solutions; lead teams; own technical standards and delivery.

    **Responsibilities**

    - Architect DWH solutions from scratch: Data Vault 2.0, Star, Medallion, hybrid schemas
    - Define technical design, coding standards, and naming conventions for the team
    - Coordinate local and offshore teams; manage delivery timelines
    - Provide SME guidance and coaching to junior/senior engineers
    - Drive POC activities and evaluate new technologies/platforms
    - Investigate and resolve complex data discrepancies tied to business logic
    - Lead stakeholder communication on risks, estimations, and solutions
    - Manage production database stability and escalation handling
    - Design AI/ML-ready data layers (Vector Search, Spark MLlib, Big Data)
    - Own architecture of industry-standard data models (Telco, Banking, Pharma, Retail)
    - Oversee full solution lifecycle: analysis → design → develop → deploy → maintain
    - Collaborate with data governance teams: Collibra, Purview, lineage tracking

    **Core Skills**

    - Data Vault 2.0: hubs, links, satellites, business vault, point-in-time tables
    - Composite DWH design: combining Data Vault + Star for analytics layer
    - Advanced cloud architecture: multi-cloud patterns (Azure + AWS + Snowflake)
    - Big Data / Spark: PySpark pipelines, Databricks workspace management
    - Data governance tooling: Collibra, Azure Purview, Imuta
    - Infrastructure as code: Terraform for cloud resource provisioning
    - Advanced performance tuning: Exadata, columnar storage, Snowflake query optimization
    - Oracle DBA expert: patching, OCI migration, security products, capacity planning
    - Stakeholder management and pre-sales estimation

    **Learning Path**

    | Priority | Training | Platform | Target Cert |
    |---|---|---|---|
    | **Mandatory** | DP-203 — must be certified | MS Learn | **DP-203** |
    | Core | Databricks Data Engineer Associate | Databricks Academy | **Databricks DE Assoc** |
    | Core | Snowflake SnowPro Core (if Snowflake projects) | Snowflake | **SnowPro Core** |
    | Core | AWS Solutions Architect — Associate | A Cloud Guru / AWS | **AWS SAA** |
    | Core | Machine Learning Literacy | Pluralsight | — |
    | Core | TQ Agentic AI Training (FY26 priority) | Internal / TQ | — |
    | Optional | GCP Professional Data Engineer | Google Cloud | GCP PDE |
    | Optional | Azure AI Fundamentals — AI-901 | MS Learn | AI-901 |
    | Optional | Scrum Master | Scrum.org | PSM I |

??? note "Associate Manager (L8) — Data Architect / Practice Lead"

    **Focus:** architecture vision for the data platform; people, budget, clients, domain strategy.

    **Responsibilities**

    - Define end-to-end data platform architecture across the practice
    - Lead multiple projects and workstreams simultaneously
    - Own team allocation, annual talent discussions, one-sliders
    - Drive new project estimations, pre-sales discussions, and client workshops
    - Set and evolve technical standards, best practices, and tooling strategy
    - Act as SME escalation point for complex technical and data quality issues
    - Drive certification roadmap and training across all levels
    - Manage monthly budget updates, Myte tracking, project status reporting
    - Collaborate with platform leads on domain strategy and upskilling
    - Build external client relationships; represent the practice in governance meetings
    - Coach specialists and seniors on architecture patterns and career growth

    **Core Skills**

    - Enterprise DWH + Lakehouse architecture: Fabric, Synapse, Snowflake at scale
    - Multi-cloud strategy: workload placement across Azure / AWS / GCP / Snowflake
    - Data governance at scale: Collibra, Azure Purview, data contracts, data products
    - Modern data stack: dbt + Snowflake / Databricks + Delta Lake patterns
    - EPM platforms: Tagetik, Anaplan (for finance data domain)
    - Platform economics: cost optimization, capacity planning, licensing
    - People leadership: talent reviews, career paths, coaching, team sizing
    - Pre-sales: solution scoping, proposal writing, client workshops

    **Learning Path**

    | Priority | Training | Platform | Target Cert |
    |---|---|---|---|
    | **Mandatory** | DP-203 — must be certified | MS Learn | **DP-203** |
    | **Mandatory** | Databricks Data Engineer Associate | Databricks Academy | **Databricks DE Assoc** |
    | Core | AWS Solutions Architect — Professional | AWS | **AWS SAP** |
    | Core | GCP Professional Data Engineer | Google Cloud | **GCP PDE** |
    | Core | Snowflake SnowPro Advanced: Data Engineer | Snowflake | **SnowPro Adv DE** |
    | Core | Azure Solutions Architect — AZ-305 | MS Learn | **AZ-305** |
    | Core | Leadership & Scrum Master | Scrum.org | PSM I |
    | Optional | Databricks Data Engineer Professional | Databricks Academy | Databricks DE Pro |

??? note "Manager (L7) — Platform Lead / Engineering Manager"

    **Focus:** platform ownership, cross-practice strategy, executive client relationships, team building.

    **Responsibilities**

    - Own the Data Engineering domain strategy and multi-year technology roadmap
    - Lead multiple Associate Managers and their teams across projects
    - Drive domain growth: hiring, onboarding, capability building
    - Own cross-domain collaboration: align with AI/ML, Visual Insights, Cloud platforms
    - Represent Data Engineering in platform leadership meetings and executive forums
    - Lead strategic pre-sales: executive client workshops, large deal scoping, RFP responses
    - Drive certification and upskilling strategy at domain level
    - Own budget, headcount, and P&L for the practice
    - Establish and evolve data engineering standards and governance frameworks
    - Build industry-specific data model expertise (Telco, Banking, Pharma)
    - Identify and incubate new technology capabilities (Fabric, GenAI data layer, etc.)
    - Act as external thought leader: presentations, client visits, Accenture network

    **Core Skills**

    - Platform architecture strategy: when to use Fabric vs. Synapse vs. Snowflake vs. Oracle
    - AI/ML data infrastructure: feature stores, vector layers, ML pipeline integration
    - Cross-domain alignment: bridge between DE, Visual Analytics, AI, and IAS
    - Executive stakeholder management: C-level communication, QBR ownership
    - Financial management: cost optimization at practice level, licensing negotiations
    - People strategy: succession planning, promotion cases, talent pipeline
    - Domain thought leadership: industry data models, emerging patterns (data mesh, data contracts)

    **Learning Path**

    > At this level, certifications are expected to be complete. Focus shifts to leadership and thought leadership.

    | Priority | Training | Platform | Target Cert |
    |---|---|---|---|
    | **Expected** | Full DP-203 + Databricks DE suite | — | Done |
    | **Expected** | AZ-305 or equivalent cloud architect cert | MS Learn | Done |
    | Core | Executive Leadership & Communication | Accenture Learning | — |
    | Core | AI Strategy & Agentic AI (FY26 priority) | Internal / TQ | — |
    | Core | Data Mesh / Data Products patterns | Various | — |
    | Core | Financial management & P&L literacy | Internal | — |
    | Optional | Databricks Data Engineer Professional | Databricks Academy | DE Pro |
    | Optional | GCP Professional Data Engineer | Google Cloud | GCP PDE |

---


## Certifications

| Certification | Level | Who It's For | When to Target |
|---|---|---|---|
| **DP-900** — Azure Data Fundamentals | Fundamentals | All DE starters | L12 mandatory |
| **DP-203** — Azure Data Engineer Associate | Associate | Mid-to-senior engineers | L11 target → L10 must have |
| **Databricks DE Associate** | Associate | Engineers on Databricks / Spark | L10 optional → L9 target |
| **SnowPro Core** | Associate | Snowflake-stack engineers | L10 optional → L9 target |
| **AWS SAA-C03** — Solutions Architect Associate | Associate | AWS-stack engineers | L9 target → L8 mandatory |
| **AZ-305** — Azure Solutions Architect Expert | Expert | Azure-focused architects | L8 target |
| **GCP Professional Data Engineer** | Professional | GCP-stack engineers | L8 target |

**Current team certifications (BUC):** Oracle OCI ×5 · SnowPro Core ×3 · Oracle PL/SQL DA ×3 · DP-203 ×1 · Google ACE ×1 · Databricks Fundamentals ×1 · SAS Base ×2 · Anaplan Model Builder ×2 · MCSA SQL Server ×3

---

## Architecture Patterns in Use

The team has hands-on production experience with the following data architecture patterns:

| Pattern | Description | Used In |
|---|---|---|
| **Data Vault 2.0** | Hub-Link-Satellite modeling for auditability and scalability | Pharma, Telecom, Pharma II |
| **Star Schema** | Classic DWH pattern for analytics-facing layers | Most BI-facing projects |
| **Medallion (Bronze/Silver/Gold)** | Layered Lakehouse architecture on Fabric / Databricks | Construction, Azure cloud |
| **SCD Types 1/2/3** | Slowly changing dimension handling in DWH | Cross-industry |
| **RAG-ready pipelines** | Chunking, embedding, vector store integration for GenAI | GenAI Evaluation, AI workloads |
| **EPM (Tagetik / Anaplan)** | Enterprise performance management and financial consolidation | Finance, Food, Retail |
