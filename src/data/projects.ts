export interface Project {
  icon: string   // lucide icon name
  title: string
  description: string
  tags: string[]
  url: string
}

export const projects: Project[] = [
  {
    icon: 'bot',
    title: 'Autonomous Multi-Agent Orchestration',
    description:
      'Blueprint for decomposing complex tasks via a central supervisor and specialized worker nodes. Covers delegation protocols, result synthesis, and failure recovery.',
    tags: ['LangGraph', 'Supervisor', 'Multi-Agent'],
    url: 'https://github.com/mustafabasar7/Portfolio/blob/main/Advanced_Agentic_Systems/Autonomous_Multi_Agent_Orchestration.ipynb',
  },
  {
    icon: 'compass',
    title: 'Context-Aware Dynamic Tool Routing',
    description:
      'Research-driven implementation of real-time tool selection based on latent context and user intent. Optimizes precision with minimal token overhead.',
    tags: ['Tool Selection', 'Intent Routing', 'RAG'],
    url: 'https://github.com/mustafabasar7/Portfolio/blob/main/Advanced_Agentic_Systems/Context_Aware_Dynamic_Tool_Routing.ipynb',
  },
  {
    icon: 'brain',
    title: 'Persistent Memory & Agentic State',
    description:
      'Durable state persistence across long-horizon task execution. Implements checkpointing, memory retrieval, and cross-session continuity patterns.',
    tags: ['Memory', 'State Machine', 'Checkpointing'],
    url: 'https://github.com/mustafabasar7/Portfolio/blob/main/Advanced_Agentic_Systems/Persistent_Memory_Agentic_State.ipynb',
  },
  {
    icon: 'globe',
    title: 'Hierarchical Swarm Coordination',
    description:
      'Comparative study of coordination models for large-scale decentralized agent ecosystems. Benchmarks emergent behavior, communication overhead, and convergence.',
    tags: ['Swarm', 'Hierarchy', 'Coordination'],
    url: 'https://github.com/mustafabasar7/Portfolio/blob/main/Advanced_Agentic_Systems/Hierarchical_Swarm_Coordination.ipynb',
  },
  {
    icon: 'shield-check',
    title: 'Adaptive HITL Safety Protocols',
    description:
      'Framework for flexible human-in-the-loop agency within complex automated systems. Defines escalation triggers, approval gates, and full audit trails.',
    tags: ['HITL', 'Safety', 'Governance'],
    url: 'https://github.com/mustafabasar7/Portfolio/blob/main/Advanced_Agentic_Systems/Adaptive_HITL_Safety_Protocols.ipynb',
  },
]

export interface Principle {
  num: string
  label: string
  title: string
  description: string
}

export const principles: Principle[] = [
  {
    num: '01',
    label: 'ORCHESTRATION',
    title: 'Rigor over Simplicity',
    description:
      'Moving beyond naive chains to robust, cycle-aware state machines with LangGraph. Every node transition is deterministic, testable, and auditable.',
  },
  {
    num: '02',
    label: 'EFFICIENCY',
    title: 'Token Optimization',
    description:
      'Strategic context management minimizes operational costs while maximizing model performance. Compression, windowing, and retrieval are first-class concerns.',
  },
  {
    num: '03',
    label: 'SAFETY',
    title: 'Governance by Design',
    description:
      'Multi-level HITL nodes ensure AI systems remain controllable, transparent, and auditable from day one — not bolted on as an afterthought.',
  },
]
