# AI Data Engineering

### AI Competency

AI-enabled Data Engineers design, build, operate, and govern the data foundations and data agents that power enterprise AI. They combine core data engineering with AI-assisted development, intelligent ingestion, automated transformation, agentic orchestration, data quality automation, and AI-ready data architecture.

Data agents are a defining capability of this role. They use metadata, lineage, policies, business context, and approved tools to discover sources, profile data, generate or optimize pipelines, validate quality, investigate failures, enrich catalogues, and coordinate multi-step data workflows. RAG, embeddings, chunking, semantic retrieval, and vector stores remain important patterns, but they are treated as specific AI data products within the broader agentic data ecosystem.

Primary AI tools: GitHub Copilot · Claude Code · Snowflake Cortex · Amazon Bedrock · Azure AI Services · Google Cloud AI

Primary data-agent capabilities: source discovery · profiling · pipeline generation · testing · reconciliation · anomaly detection · incident investigation · metadata enrichment · lineage analysis · policy enforcement · workload optimization
### AI Role Details

AI Data Engineers are architects and builders of the enterprise data ecosystem that powers analytics, machine learning, GenAI applications, and autonomous data operations. They own pipeline design, platform integration, data-agent engineering, data quality, governance, observability, and trusted AI-ready data delivery.

???+ success "What success looks like"
\- AI tools are embedded in regular engineering work and produce measurable improvements in delivery speed, quality, reliability, or operating effort
\- Repetitive tasks such as code scaffolding, testing, validation, documentation, profiling, and incident triage are automated where appropriate
\- Data agents are applied to relevant lifecycle stages, with explicit objectives, approved tools, bounded actions, and clear escalation paths
\- RAG and retrieval pipelines are implemented when required, with governed ingestion, chunking, embeddings, metadata, access controls, and retrieval evaluation
\- Every AI-generated artefact is reviewed and validated at the level required by its risk and production impact
\- High-impact actions use approval gates, least-privilege access, logging, traceability, rollback, and human accountability
\- Reusable patterns, tests, agent templates, and runbooks are adopted by the team
\- Data products remain clean, governed, observable, trustworthy, and fit for analytics and AI consumption
\- Peers use your guidance to adopt AI and data-agent practices safely and effectively
### Core AI Data Engineering Capabilities

#### AI-Assisted Engineering

Use AI coding assistants and platform copilots to accelerate SQL and Python development, pipeline scaffolding, transformation logic, test generation, configuration, code explanation and refactoring, technical documentation, and troubleshooting.

AI-generated output follows the same engineering, review, testing, security, and deployment standards as human-written output.

#### Data Agent Engineering

Design, configure, build, integrate, and govern data agents that can:

- interpret a defined engineering objective;
- identify relevant metadata, data assets, and policies;
- create an execution plan;
- select and invoke approved tools;
- validate intermediate results;
- coordinate multiple engineering steps;
- request human approval when required;
- record actions, decisions, evidence, and outcomes.

#### Intelligent Data Ingestion

Source discovery · schema inference · document classification · file and API ingestion · OCR and multimodal extraction · metadata extraction · ingestion error remediation · sensitive-data identification.

#### AI-Assisted Transformation and Modelling

Generate or refine transformation logic · recommend mappings · detect schema changes · propose data models · generate dbt models and tests · create data dictionaries · assess downstream impact. All generated transformations are validated through deterministic tests and business-rule verification.

#### Data Quality and Reconciliation Agents

Generate quality rules · execute profiling and validation · identify anomalies · compare source and target · perform row-count, hash, balance, and business-rule reconciliation · classify defects · recommend and verify remediation. Critical quality decisions remain attributable to an accountable owner.

#### Metadata, Lineage, and Governance Agents

Enrich catalogue descriptions · classify assets · map technical and business metadata · analyse lineage · assess downstream impact · detect policy violations · support access reviews · identify sensitive data · recommend retention, masking, or remediation. Agents never bypass approved access, security, privacy, or governance controls.

#### Operational and Incident Response Agents

Pipeline monitoring · failure classification · log and dependency analysis · root-cause investigation · runbook execution · remediation recommendations · incident documentation · post-incident analysis. Production changes, destructive actions, and access changes require explicit authorization.

#### RAG-Ready Data Engineering

Source onboarding · document ingestion and normalization · intelligent chunking · metadata enrichment · embedding generation · vector indexing · semantic and hybrid retrieval · access-aware retrieval · freshness management · retrieval evaluation · deletion and retention propagation.

#### Observability and Evaluation

Instrument both pipelines and agents: execution status · data quality results · freshness and completeness · schema and distribution drift · agent actions and tool calls · approval and escalation events · latency and failure rates · resource and cost usage · policy and guardrail events · resulting data changes · rollback and recovery outcomes.
### Responsible Data-Agent Engineering

All data-agent solutions follow these principles.

| Principle | What it means in practice |
|---|---|
| Bounded autonomy | Defined purpose, scope, allowed tools, data access, execution limits, escalation path |
| Least-privilege access | The agent receives only the permissions required for its approved task |
| Human accountability | Every production agent and automated decision has a named owner |
| Human review by risk | Review depth matches consequence, reversibility, and risk |
| Deterministic validation | Outputs verified with tests, constraints, reconciliation, schemas, acceptance criteria |
| Traceability | Prompts, context, tool calls, approvals, outcomes, and data changes are logged |
| Observability | Agent behaviour is measurable through operational, quality, and risk metrics |
| Safe failure | Agents fail predictably, stop at boundaries, avoid partial or inconsistent data states |
| Rollback and recovery | High-impact actions have tested rollback, retry, and incident procedures |
| Separation of duties | The same agent does not create, approve, and deploy its own high-impact change |
| Data protection | Security, privacy, retention, and client requirements apply equally to agent-driven work |

#### Agent Autonomy Tiers

| Tier | Agent behaviour | Data engineering example | Minimum control |
|---|---|---|---|
| A0 — Inform | Explains or summarizes | Explain a failed pipeline run | User reviews result |
| A1 — Recommend | Proposes an action | Recommend data-quality rules | Human approves |
| A2 — Draft | Creates an artefact | Generate SQL, dbt model, or config | Code review and tests |
| A3 — Execute with approval | Executes after explicit sign-off | Apply an approved metadata update | Approval, logging, rollback |
| A4 — Bounded execution | Executes within strict limits | Retry eligible failed loads | Policies, limits, monitoring, rollback |
| A5 — High autonomy | Coordinates complex cross-system actions | Autonomous workload optimization | Exceptional governance and explicit authorization |

The appropriate tier depends on risk, reversibility, data sensitivity, operational impact, and regulatory context. Higher proficiency does not mean unrestricted autonomy is appropriate.

!!! warning "Design principle"
    If a task can be solved reliably with deterministic automation, use deterministic automation. Agents are for work that requires interpretation, context, planning, or tool selection.
### Career Progression

??? info "Career Progression"

    AI proficiency is assessed independently from career level. The mapping below shows the typical alignment — it is guidance, not an automatic entitlement.

| AI Proficiency | Typical career alignment | Primary scope |
|---|---|---|
| P1 — AI Assisted | L12 Associate | Individual task |
| P2 — AI Accelerated | L11 Analyst | Defined pipeline or engineering area |
| P3 — Agentic Data Engineering | L10 Senior Analyst · L9 Specialist | End-to-end solution or reusable pattern |
| P4 — Integrated and Governed AI | L8 Associate Manager · L7 Manager | Project, platform, or engineering practice |
| P5 — Enterprise Agentic Data Strategy | Architect · recognised enterprise authority | Cross-platform or enterprise ecosystem |

??? note "Important"

    Career level alone does not prove AI proficiency. Completing training alone does not prove AI proficiency. The assigned level must be supported by recent, relevant, independently reviewable evidence.

??? note "Legend"

    :material-check-circle: mandatory · :material-circle-outline: optional
### AI Proficiency Levels

#### P1 — AI Assisted

L12 Associate

??? tip "At this level"

    Uses AI as a guided assistant for basic data engineering tasks — code generation, data exploration, and documentation — with validation from senior engineers.

Expected capability

- Uses approved AI assistants for simple SQL, Python, documentation, and troubleshooting tasks
- Uses existing data-agent interfaces or predefined workflows
- Understands the difference between a coding assistant, an automation, a data agent, and a RAG pipeline
- Recognises that AI output can be plausible but incorrect, incomplete, insecure, or out of context
- Performs basic checks before accepting generated output
- Follows existing security, privacy, coding, testing, and governance standards
- Escalates unclear, high-risk, or unexpected agent behaviour
- Never allows an agent to perform unapproved production changes

Typical data-agent activities

- Run a predefined profiling agent on an assigned source
- Use an approved agent to explain a pipeline failure
- Generate draft SQL or Python with an AI assistant and correct it
- Generate initial documentation for an existing pipeline
- Review suggested data-quality checks with guidance
- Use a guided RAG ingestion workflow
- Confirm that agent results match the assigned task

Assessment dimensions

| Dimension | P1 expectation |
|---|---|
| Autonomy | Requires guidance and review |
| Complexity | Simple, well-defined activities |
| Scope | Individual task or component |
| Impact | Limited and reversible |
| Governance | Follows existing controls |
| Data agents | Uses predefined agents |
| Validation | Performs basic checks with support |

Minimum evidence

- one completed AI-assisted engineering task;
- one example of validation applied to AI-generated output;
- one example of using an approved data agent or guided agentic workflow;
- evidence of review by a senior engineer;
- a short written explanation of limitations, risks, and lessons learned.

??? abstract "Recommended Trainings"

| | Training | Category | Link | ✓ |
|---|---|---|---|---|
| :material-check-circle: | TQ Agentic AI | General | — | |
| :material-check-circle: | GitHub Copilot with Python | General | [Workday](https://wd103.myworkday.com/accenture/email-universal/inst/22699$266024/rel-task/2998$35104.htmld) | |
| :material-check-circle: | AI & Data-Agent Awareness — validation and approved use | General | — | |
| :material-circle-outline: | Reinvention with Agentic AI | General | — | |
| :material-circle-outline: | Data Engineering Foundations | Data Engineering | — | |
#### P2 — AI Accelerated

L11 Analyst

??? tip "At this level"

    Uses AI tools independently to build pipelines, automate transformations, and accelerate delivery — validation no longer requires senior oversight. Configures data agents for defined engineering use cases.

Expected capability

- Uses AI assistants to create and refine SQL, Python, transformations, tests, and documentation
- Configures existing data agents for defined engineering use cases
- Applies agents to profiling, quality validation, reconciliation, documentation, or incident analysis
- Selects appropriate data sources, metadata, and tools for a defined task
- Verifies generated output using repeatable checks
- Recognises when a task is unsuitable for autonomous execution
- Measures a basic productivity, quality, or operational improvement
- Documents known limitations, assumptions, and escalation conditions
- Uses peer review and existing deployment controls before production release

Typical data-agent activities

- Configure a profiling agent for a new data source
- Use an agent to propose and execute approved quality checks
- Generate a pipeline scaffold and complete the implementation
- Use a data agent to investigate a failed load
- Generate and validate transformation tests
- Configure metadata enrichment for assigned data assets
- Build or maintain a basic chunking and embedding pipeline
- Measure time saved or defects detected through AI assistance

Assessment dimensions

| Dimension | P2 expectation |
|---|---|
| Autonomy | Independent on defined activities |
| Complexity | Standard pipeline and validation scenarios |
| Scope | Assigned pipeline, source, or data product area |
| Impact | Team or delivery impact |
| Governance | Applies existing controls independently |
| Data agents | Configures and applies existing agents |
| Validation | Independent and repeatable |

Minimum evidence

- one independently delivered AI-assisted engineering artefact;
- one configured data-agent workflow with documented scope;
- deterministic tests or reconciliation evidence;
- documented assumptions and failure conditions;
- code review, design review, or peer validation;
- at least one measurable outcome — time saved, defects detected, manual effort removed, or documentation coverage improved.

??? abstract "Recommended Trainings"

| | Training | Category | Link | ✓ |
|---|---|---|---|---|
| :material-check-circle: | Reinvention with Agentic AI | General | — | |
| :material-check-circle: | Agentic AI Ecosystem Tools — Level 3A | Agentic 3A | [Workday](https://wd103.myworkday.com/accenture/learning/program/4510d076039210016cc0344f0eeb0000) | |
| :material-check-circle: | Agentic AI Frameworks — Level 3B | Agentic 3B | [Workday](https://wd103.myworkday.com/accenture/learning/program/9a74c413ff121001288f4f5ca96e0000) | |
| :material-check-circle: | Snowflake Foundations to AI | Snowflake | — | |
| :material-check-circle: | Snowflake Cortex Code (CoCo) | Snowflake | [Workday](https://wd103.myworkday.com/accenture/learning/course/4d9e73686bf81000ca451bfbd0a80000) | |
| :material-circle-outline: | Get started with data engineering on Azure | Cloud | [Link](https://learn.microsoft.com/en-us/training/paths/get-started-data-engineering/) | |
| :material-circle-outline: | AWS Training – Digital Training | Cloud | [Link](https://aws.amazon.com/training/digital/) | |
| :material-circle-outline: | Google Cloud Data Engineering & Analytics | Cloud | [Link](https://cloud.google.com/learn/training/data-engineering-and-analytics) | |
#### P3 — Agentic Data Engineering

L10 Senior Analyst · L9 Specialist

??? tip "At this level"

    Designs and executes complex, agentic data engineering workflows — multi-step pipelines, RAG foundations, and data agent patterns — independently and with growing authority. Builds production-ready agents with validation, observability, access controls, and operational ownership.

Expected capability

- Designs data agents for well-defined engineering objectives
- Creates multi-step workflows combining metadata, lineage, policies, data tools, and engineering logic
- Defines agent objectives, instructions, context, tools, constraints, tests, and escalation conditions
- Builds human approval into high-risk actions
- Implements observability for agent actions, failures, quality, latency, and cost
- Applies least-privilege access and secure credential handling
- Uses deterministic rules to validate non-deterministic outputs
- Builds RAG-ready pipelines where retrieval is required
- Evaluates agent effectiveness using representative scenarios
- Produces reusable templates, components, or patterns
- Supports peers in applying data-agent engineering correctly

Typical data-agent activities

- Build a data quality agent that profiles, detects, classifies, and recommends remediation
- Build a pipeline-support agent that analyses failures and proposes recovery actions
- Build a metadata agent that enriches assets and validates terminology
- Build a lineage-impact agent for proposed schema or model changes
- Build a governed RAG ingestion and refresh workflow
- Build a coordinated workflow spanning profiling, transformation, validation, and documentation
- Implement approval gates for production-sensitive actions
- Create an evaluation dataset and acceptance thresholds for an agent

Assessment dimensions

| Dimension | L10 expectation | L9 expectation |
|---|---|---|
| Autonomy | Independent end-to-end delivery | Technical authority for the solution |
| Complexity | Complex workflow | Complex or multi-platform pattern |
| Scope | Project or data product | Multiple teams or reusable capability |
| Impact | Delivery and operational impact | Practice or platform impact |
| Governance | Implements required controls | Defines and reviews controls |
| Data agents | Designs and builds | Architects and standardizes |
| Leadership | Supports peers | Leads technical adoption |

Minimum evidence

- one production or production-representative data-agent implementation;
- architecture or technical design document;
- repository, pull request, or equivalent implementation evidence;
- automated tests and agent evaluation results;
- access-control and approval design;
- operational logs or observability evidence;
- runbook and failure-handling documentation;
- peer, SME, architecture, or security review;
- measurable delivery, quality, reliability, or operational outcome.

??? abstract "Recommended Trainings"

    Most courses below are part of the [Agentic AI Deep Dive Level 4A — Navigation Guide](https://wd103.myworkday.com/accenture/learning/program/eca5e091d3641000b8fcc66ddce90000) program in Workday.

| | Training area | Expected outcome |
|---|---|---|
| :material-check-circle: | Agentic AI Deep Dive | Design multi-step agents and tool-enabled workflows |
| :material-check-circle: | Data-Agent Engineering | Build agents using metadata, lineage, and governed tools |
| :material-check-circle: | AI Evaluation | Define datasets, metrics, thresholds, and regression tests |
| :material-check-circle: | AI Security and Responsible AI | Apply access, approval, audit, and risk controls |
| :material-check-circle: | Platform-Specific AI | Implement on the project's selected cloud or data platform |
| :material-circle-outline: | RAG and Vector Retrieval | Build and evaluate governed retrieval pipelines |
| :material-circle-outline: | AI Observability | Trace agent actions, failures, latency, quality, and cost |
#### P4 — Integrated and Governed AI

L8 Associate Manager · L7 Manager

??? tip "At this level"

    Leads AI-integrated data architecture and delivery — owning standards, coaching the team, and driving adoption of AI tooling across the engineering practice. Ensures agentic capabilities create measurable value without weakening security, reliability, or accountability.

Expected capability

- Defines reference architectures for AI-enabled data engineering and data agents
- Establishes engineering and governance standards for data-agent development
- Selects use cases based on value, feasibility, risk, and operational readiness
- Ensures human accountability and approval models are appropriate to risk
- Defines minimum observability and evaluation requirements
- Establishes reusable agent templates, policy patterns, and implementation guidance
- Leads architecture, security, privacy, governance, and operational reviews
- Integrates AI capabilities into the delivery lifecycle, CI/CD, platform operations, and support
- Defines adoption and value metrics, and reports them honestly including failures
- Coaches engineering leads and senior practitioners
- Ensures platform strategy includes metadata, lineage, semantic context, and machine-readable policies
- Stops or redesigns agentic use cases when controls, evidence, or business value are insufficient

Typical data-agent activities

- Define a reference architecture for enterprise data agents
- Establish agent onboarding, review, deployment, and retirement processes
- Define autonomy tiers and approval requirements
- Create standards for agent identity and least-privilege access
- Establish common logging, tracing, evaluation, and cost controls
- Lead adoption across multiple projects
- Define reusable agent patterns for quality, lineage, incidents, metadata, or optimization
- Integrate data agents with platform governance and operational support

Assessment dimensions

| Dimension | L8 expectation | L7 expectation |
|---|---|---|
| Autonomy | Owns project or platform decisions | Owns domain or practice direction |
| Complexity | Multi-team or platform integration | Cross-platform organisational complexity |
| Scope | Project portfolio or platform | Engineering domain or practice |
| Impact | Repeatable adoption | Strategic and organisational impact |
| Governance | Defines and enforces standards | Owns governance direction |
| Data agents | Integrates and scales patterns | Sets adoption strategy |
| Leadership | Coaches teams and leads | Influences leadership and investment |

Minimum evidence

- an approved reference architecture or platform design;
- a documented governance and approval model;
- an agent evaluation and observability standard;
- evidence of adoption across more than one team, project, or use case;
- measurable outcomes at platform or practice level;
- evidence of coaching, design authority, or technical governance;
- a lessons-learned review resulting in an updated standard or pattern.

??? abstract "Recommended Trainings"

    All courses below are accessible through the [Agentic AI Deep Dive Level 4A — Navigation Guide](https://wd103.myworkday.com/accenture/learning/program/eca5e091d3641000b8fcc66ddce90000) program in Workday. Pick one cloud-platform course relevant to your project stack.

| | Training area | Expected outcome |
|---|---|---|
| :material-check-circle: | Agentic AI Architecture | Define scalable and governed agent architectures |
| :material-check-circle: | Responsible AI and Governance | Establish decision, risk, and accountability controls |
| :material-check-circle: | AI Platform Operations | Integrate monitoring, support, resilience, and cost controls |
| :material-check-circle: | AI Strategy and Value Measurement | Link agent capabilities to measurable outcomes |
| :material-check-circle: | Leadership and Coaching | Scale adoption and practitioner capability |
| :material-circle-outline: | Azure AI and Data Agents | Select when relevant to the project stack |
| :material-circle-outline: | Snowflake Cortex and Data Agents | Select when relevant to the project stack |
| :material-circle-outline: | Databricks AI and Data Intelligence | Select when relevant to the project stack |
| :material-circle-outline: | AWS Bedrock and Agentic Workflows | Select when relevant to the project stack |
| :material-circle-outline: | Google Cloud AI and Data Agents | Select when relevant to the project stack |
#### P5 — Enterprise Agentic Data Strategy

✦ Architect · recognised enterprise authority

??? tip "At this level"

    Sets the enterprise direction for AI data engineering — strategy, standards, governance, and cross-platform vision — as the recognised authority in the practice.

Expected capability

- Defines the enterprise vision for AI-enabled and agentic data engineering
- Establishes principles for trusted and increasingly autonomous data operations
- Defines boundaries between assistance, recommendation, approval-based execution, and autonomous execution
- Aligns agent strategy with data architecture, metadata, lineage, governance, security, privacy, and operating model
- Defines enterprise interoperability across platforms, clouds, catalogues, agents, and orchestration technologies
- Creates decision frameworks for build, buy, reuse, and retirement
- Defines strategic measures for value, reliability, risk, cost, and adoption
- Influences platform roadmaps, investment decisions, and enterprise standards
- Represents the practice in executive, client, architectural, or industry forums
- Sponsors pilots and evidence-based expansion of the framework
- Ensures the framework evolves as technologies, regulations, and organisational requirements change

Typical data-agent activities

- Define the enterprise agentic data reference architecture
- Define autonomy and accountability policies across platforms
- Establish agent identity, trust, interoperability, and audit principles
- Define enterprise evaluation and observability requirements
- Approve strategic data-agent use-case portfolios
- Resolve cross-platform architecture and governance conflicts
- Establish the long-term roadmap for agentic data management
- Publish reusable standards and recognised thought leadership

Assessment dimensions

| Dimension | P5 expectation |
|---|---|
| Autonomy | Enterprise authority |
| Complexity | Multi-platform and cross-domain |
| Scope | Enterprise or external ecosystem |
| Impact | Strategic and sustained |
| Governance | Defines principles and decision rights |
| Data agents | Shapes the enterprise agentic ecosystem |
| Leadership | Influences executives, architects, and external communities |

??? abstract "Evidence"

    P5 is demonstrated through strategic contribution, not course completion. Mark the items that apply to your experience.

- enterprise strategy or target architecture;
- approved governance principles;
- cross-platform operating model;
- strategic investment or roadmap decisions;
- adoption across multiple portfolios or business domains;
- enterprise-wide standards;
- measurable strategic outcomes;
- executive or architecture-board sponsorship;
- external publications, industry contribution, or recognised thought leadership;
- evidence that standards have been maintained and improved over time.

    This list will be expanded as the platform matures and new tools are validated.
### Proficiency Assessment and Evidence Framework

> Training demonstrates preparation. Delivery and evidence demonstrate proficiency.

Courses, certifications, self-assessments, and badges may support an assessment, but they do not automatically assign a proficiency level. The assessment focuses on what the person has demonstrated in realistic engineering work.

#### Assessment Dimensions

| Dimension | Assessment question |
|---|---|
| Knowledge | Does the person understand the relevant AI, data-agent, engineering, and governance concepts? |
| Application | Can the person apply the capability in realistic engineering work? |
| Autonomy | How independently can the person operate and remain accountable for results? |
| Complexity | What level of technical and operational complexity can the person handle? |
| Scope | Is the demonstrated scope a task, pipeline, project, platform, practice, or enterprise? |
| Impact | What measurable outcome was produced? |
| Validation | How were generated or agent-produced outputs verified? |
| Governance | Were security, privacy, policy, approval, and audit requirements applied correctly? |
| Reusability | Did the work create a reusable pattern, component, standard, or capability? |
| Leadership | Did the person guide others, establish standards, or influence strategic decisions? |

#### Evidence Types

Source code or repository · pull request or code review · pipeline implementation · agent configuration · architecture document · technical design · test suite · evaluation dataset · evaluation report · data quality report · reconciliation evidence · observability dashboard or logs · security or risk review · deployment record · runbook · incident report · reusable pattern or template · adoption evidence · measurable before-and-after outcome · peer, SME, architect, security, or stakeholder validation.

Client-sensitive and confidential evidence must be redacted or assessed through an approved restricted process.

#### Evidence Quality Criteria

Evidence should be recent enough to represent current capability, relevant to the requested level, attributable to the candidate, independently reviewable, supported by measurable or observable outcomes, compliant with security and confidentiality requirements, and complete enough to demonstrate both implementation and validation.

#### Assessment Rules

1. A candidate must meet the expectations for the requested level and all lower levels.
2. A single training course cannot establish proficiency.
3. A single prototype does not normally prove P4 or P5 capability.
4. Evidence must demonstrate both capability and responsible execution.
5. Production evidence is preferred; production-representative evidence may be accepted when production access is unavailable.
6. For AI-assisted work, the engineer's own decisions, review, and corrections must be visible.
7. The assessor may request a demonstration, technical discussion, or additional evidence.
8. The final level should reflect consistently demonstrated capability, not one exceptional example.
9. Platform-specific expertise is assessed separately from transferable engineering capability.
10. Assessments should be reviewed periodically as the technology and framework evolve.

#### Recommended Assessment Process

1. Self-assessment — the candidate selects a proposed level and maps evidence to each dimension.
2. Evidence review — an assessor reviews relevance, ownership, recency, scope, validation, and outcomes.
3. Technical discussion or demonstration — the candidate explains design, decisions, controls, limitations, and lessons learned.
4. Calibration — the assessor compares the evidence with examples from similar roles and levels.
5. Decision — recorded as confirmed, provisionally confirmed, or development required.
6. Development plan — gaps translated into practical activities, mentoring, training, or project opportunities.
7. Periodic reassessment — revisited when responsibilities, technology, or evidence materially change.

!!! note "On measurement"
    Measuring competency reliably is the hardest part of this framework. The first cycles should be treated as calibration rather than final judgement — the purpose is to make expectations explicit, give people a concrete path, and improve the model based on how it behaves in real assessments.
### Suggested Metrics

#### Delivery

Engineering cycle-time reduction · time saved on repetitive tasks · pipeline development lead time · documentation coverage · test generation coverage · reusable component adoption.

#### Quality

Defects detected before release · reconciliation success rate · false-positive and false-negative rates · data quality rule coverage · incident recurrence reduction · retrieval relevance and groundedness where applicable.

#### Operational

Mean time to detect · mean time to diagnose · mean time to recover · agent success rate · escalation rate · rollback rate · latency · reliability · resource and token cost · manual intervention rate.

#### Governance

| Metric | What it indicates |
|---|---|
| Agents with accountable owners | Ownership completeness |
| Agents with approved access profiles | Access-control discipline |
| Agents with documented autonomy tiers | Clarity of permitted behaviour |
| Agents with evaluation datasets | Testability and trustworthiness |
| Agents with operational runbooks | Operational readiness |
| Policy-violation rate | Effectiveness of guardrails |
| Unapproved tool-call rate | Boundary enforcement |
| Audit-trail completeness | Traceability |
| Approval-control effectiveness | Human oversight quality |

#### Adoption and Value

Number of active users · number of projects using approved patterns · reuse rate · user satisfaction · business value delivered · hours of manual effort avoided · platform cost avoided or optimized.

!!! warning
    Metrics should be selected for the use case. A larger number of agents or automated actions is not, by itself, evidence of value. Value is shown by less rework, earlier detection, faster recovery, lower cost, and no loss of control.

---

### Framework Governance

This framework is intended to evolve through practical use.

Review cycle: after initial pilot assessments · when major platform capabilities change · when new security, privacy, regulatory, or client requirements emerge · when assessors interpret levels inconsistently · at least annually.

Framework owners are responsible for maintaining proficiency definitions, approving changes, validating assessor guidance, curating evidence examples, resolving level-calibration questions, retiring outdated tools or training, and communicating framework changes.

Versioning: each published version records version number · publication date · framework owner · summary of changes · approved exceptions · next planned review date.

Continuous improvement: feedback from practitioners, assessors, platform owners, security teams, governance teams, and delivery leadership is captured and used to improve role descriptions, level boundaries, evidence requirements, training recommendations, governance controls, and platform-specific implementation guidance.

??? warning "Initial adoption"

    During the initial adoption period, proficiency decisions should be treated as calibrated development assessments rather than permanent labels. The purpose of the framework is to clarify expectations, guide learning, and build trusted capability. Changes are expected once the framework is used in real assessments and real projects.
### My AI Proficiency Level

???+ success "Your recommended level"

    Based on the courses and evidence you have confirmed above, your recommended level is calculated automatically. Training completion indicates preparation; evidence review confirms demonstrated proficiency.

    Final confirmation considers autonomy · complexity · scope · impact · validation · governance · data-agent capability · reuse and leadership · assessor calibration.

| Assessment area | Candidate input | Assessor confirmation |
|---|---|---|
| Proposed proficiency level | | |
| Relevant training completed | | |
| AI-assisted engineering evidence | | |
| Data-agent evidence | | |
| Validation and testing evidence | | |
| Governance and security evidence | | |
| Measurable outcome | | |
| Reusable contribution | | |
| Review or demonstration completed | | |
| Final confirmed level | | |
| Development priorities | | |
| Review date | | |

---

### Summary

AI Data Engineering is not defined only by the use of copilots, RAG pipelines, or generative AI tools. It is defined by the ability to combine strong data engineering foundations with AI-assisted development, intelligent and agentic data operations, governed use of data agents, deterministic validation, observability and operational ownership, measurable engineering and business outcomes, and responsible scaling from task-level assistance to enterprise capability.

The progression from P1 to P5 represents increasing autonomy, complexity, scope, impact, governance responsibility, and organisational influence.

The framework should remain evidence-based, adaptable, and continuously improved as real projects and technologies evolve.
