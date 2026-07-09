export const site = {
  url: "https://andreaprotani.com",
  title: "Andrea Protani | PhD Researcher & Kosmico Co-founder",
  description:
    "Andrea Protani researches multimodal generative models and agentic AI for neuroscience at CERN and UPF. Co-founder of Kosmico, the AI workspace for collaborative research. Builder of open-source tools.",
  keywords: [
    "Andrea Protani",
    "Kosmico",
    "CERN",
    "UPF",
    "neuroscience AI",
    "multimodal generative models",
    "agentic systems",
    "federated learning",
    "medical AI",
    "EEG",
    "brain signals",
    "research scientist",
    "PhD student",
    "open source",
  ],
  locale: "en_US",
  twitterHandle: "@Andrea__Protani",
};

export const profile = {
  name: "Andrea Protani",
  roles: ["Research Scientist", "PhD Student", "Co-founder"],
  location: "Geneva, Switzerland",
  email: "info@andreaprotani.com",
  tagline: "Full-time PhD student and founder. Open source projects on the side.",
  bio: "Research scientist and PhD student at UPF, based at CERN in Geneva. I work on multimodal generative models and agentic systems for neurological diagnostics: federated learning, brain signals, and privacy-preserving medical AI. Co-founder of Kosmico, an AI workspace for collaborative research. MSc in Data Science and BSc in Statistics from Sapienza University of Rome.",
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Kosmico", link: "#kosmico" },
  { name: "Publications", link: "#publications" },
  { name: "Experience", link: "#experience" },
  { name: "Open Source", link: "#open-source" },
  { name: "Contact", link: "#contact" },
];

export const stats = [
  { value: "8", label: "Publications" },
  { value: "25", label: "Citations" },
  { value: "3", label: "Institutions" },
  { value: "2", label: "Open-source projects" },
];

export const researchFocus = [
  {
    title: "Multimodal Generative Models",
    description:
      "Generative modelling of brain signals and neuroimaging. Flow-based latent learning from EEG, capturing uncertainty in cortical inference.",
  },
  {
    title: "Agentic Systems",
    description:
      "Tool-augmented agents for clinical neurology. Step-by-step investigation with diagnostic tools, hospital protocols, and evidence-based reasoning.",
  },
  {
    title: "Private & Explainable AI",
    description:
      "Federated learning and privacy-preserving training across hospitals. Explainable methods that stay interpretable when data cannot be shared.",
  },
];

export const kosmico = {
  name: "Kosmico",
  url: "https://kosmico.ai/en",
  tagline: "The all-in-one AI workspace for collaborative research",
  description:
    "Everything in one place, built for collaboration with agents and teammates. Write, cite, plan, and run projects with Kosmo, an agent that lives inside your workspace and actually does the work.",
  features: [
    {
      title: "Native AI workspace",
      description:
        "LaTeX, notebooks, PDFs, and code in one environment, with @kosmo always one message away.",
    },
    {
      title: "Built for labs",
      description:
        "Shared projects, role-based access, channels, and calendars. Already powering researchers at CERN and universities.",
    },
    {
      title: "Research loop, closed",
      description:
        "Literature review, bibliography management, deep research across academic databases, and knowledge graphs, all connected.",
    },
  ],
};

export interface TimelineItem {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  desc: string;
  link?: string | null;
}

export type PublicationType = "conference" | "preprint" | "workshop";

export interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: number;
  citations: number;
  type: PublicationType;
  abstract: string;
  link: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "DP-KFC: Data-Free Preconditioning for Privacy-Preserving Deep Learning",
    authors:
      "M. Molina Van De Bosch, R. Taiello, A. Sund Aillet, A. Protani, M.A.G. Ballester, L. Serio",
    venue: "ICML 2026",
    year: 2026,
    citations: 0,
    type: "conference",
    abstract:
      "Introduces a data-free preconditioning method for privacy-preserving deep learning, enabling effective model training under differential privacy constraints without requiring access to raw training data.",
    link: "https://arxiv.org/abs/2605.13418",
  },
  {
    id: 2,
    title:
      "Federated Transformer-GNN for Privacy-Preserving Brain Tumor Localization with Modality-Level Explainability",
    authors: "A. Protani, R. Taiello, M.M.V. De Bosch, L. Serio",
    venue: "arXiv preprint",
    year: 2026,
    citations: 0,
    type: "preprint",
    abstract:
      "Proposes a federated architecture combining Transformers and Graph Neural Networks for brain tumor localization across multimodal MRI, with modality-level explainability while preserving patient privacy.",
    link: "https://arxiv.org/abs/2601.15042",
  },
  {
    id: 3,
    title:
      "Federation of Agents: A Semantics-Aware Communication Fabric for Large-Scale Agentic AI",
    authors:
      "L. Giusti, O.A. Werner, R. Taiello, M.C. Costa, E. Tosun, A. Protani, M. Molina, et al.",
    venue: "arXiv preprint",
    year: 2025,
    citations: 10,
    type: "preprint",
    abstract:
      "Presents a semantics-aware communication fabric enabling large-scale coordination among AI agents, designed for scalable multi-agent systems with structured knowledge exchange.",
    link: "https://arxiv.org/abs/2509.20175",
  },
  {
    id: 4,
    title:
      "The Interplay Between Explainability and Differential Privacy in Federated Healthcare",
    authors:
      "M.M.V. De Bosch, A. Protani, R. Taiello, L. Giusti, M.C. Costa, I. Stathopoulos, et al.",
    venue: "MICCAI 2025",
    year: 2025,
    citations: 2,
    type: "conference",
    abstract:
      "Characterizes the heterogeneity amplifier effect, where differential privacy noise disproportionately degrades explanation fidelity on heterogeneous clients, and proposes BID-CAM, a DP-aware hybrid explanation method for federated 3D medical image segmentation.",
    link: "https://cafein.web.cern.ch/the-interplay-between-explainability-and-differential-privacy-in-federated-healthcare/",
  },
  {
    id: 5,
    title:
      "Decoder-Free Supervoxel GNN for Accurate Brain-Tumor Localization in Multi-modal MRI",
    authors:
      "A. Protani, M. Molina Van De Bosch, L. Giusti, H. Barbosa Da Silva, et al.",
    venue: "REMIMAGE Workshop, Springer",
    year: 2025,
    citations: 1,
    type: "workshop",
    abstract:
      "Introduces a hierarchical encoder combining patch-level Transformers with supervoxel-level Graph Attention Networks for brain tumor localization, offering dual-scale explainability without a decoder module.",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-06103-4_16",
  },
  {
    id: 6,
    title: "Federated GNNs for EEG-Based Stroke Assessment",
    authors:
      "A. Protani, L. Giusti, A.S. Aillet, C. Iacovelli, G. Reale, S. Sacco, P. Manganotti, et al.",
    venue: "arXiv preprint",
    year: 2024,
    citations: 6,
    type: "preprint",
    abstract:
      "Combines Federated Learning and Graph Neural Networks to predict stroke severity from EEG data across multiple hospitals, preserving patient privacy while achieving competitive diagnostic performance.",
    link: "https://arxiv.org/abs/2411.02286",
  },
  {
    id: 7,
    title:
      "Feasibility Analysis of Federated Neural Networks for Explainable Detection of Atrial Fibrillation",
    authors:
      "D.R. Santos, A. Protani, L. Giusti, A.S. Aillet, P. Brutti, L. Serio",
    venue: "IEEE Healthcom 2024",
    year: 2024,
    citations: 5,
    type: "conference",
    abstract:
      "Evaluates the feasibility of federated neural networks for explainable atrial fibrillation detection, addressing the challenge of early detection in asymptomatic and paroxysmal cases.",
    link: "https://arxiv.org/abs/2410.19781",
  },
  {
    id: 8,
    title:
      "Towards Explainable Graph Neural Networks for Neurological Evaluation on EEG Signals",
    authors:
      "A. Protani, L. Giusti, C. Iacovelli, A.S. Aillet, D.R. Santos, G. Reale, A. Zauli, et al.",
    venue: "IEEE Healthcom 2024",
    year: 2024,
    citations: 1,
    type: "conference",
    abstract:
      "Proposes a Graph Neural Network approach to predict stroke severity (NIHSS) from EEG recordings of 71 patients, using graph attention to reveal frequency-dependent brain reconfiguration patterns for clinical decision-making.",
    link: "https://arxiv.org/abs/2410.07199",
  },
];

export const workExperience: TimelineItem[] = [
  {
    id: 1,
    title: "Co-founder",
    subtitle: "Kosmico",
    period: "Present",
    desc: "Building the AI workspace for collaborative research: writing, citing, planning, and agent-assisted workflows in one place.",
    link: "https://kosmico.ai/en",
  },
  {
    id: 2,
    title: "PhD Student",
    subtitle: "CERN",
    period: "Apr 2025 – Present",
    desc: "Developing generative models and agentic systems for neurological diagnostics, with a focus on multimodal brain signals, federated learning, and privacy-preserving clinical AI.",
    link: null,
  },
  {
    id: 3,
    title: "Research Scientist Intern",
    subtitle: "CERN",
    period: "Mar 2024 – Nov 2024",
    desc: "Graph Neural Networks for medical diagnostics, predicting stroke severity through brain connectivity analysis from EEG signals.",
    link: null,
  },
  {
    id: 4,
    title: "External AI Consultant",
    subtitle: "Sorridi",
    period: "Sep 2022 – Mar 2024",
    desc: "Deep Learning for dental aligner automation from 3D meshes and patient images. Led a team of five fine-tuning HuggingFace models.",
    link: null,
  },
];

export const education: TimelineItem[] = [
  {
    id: 1,
    title: "PhD in AI for Neuroscience",
    subtitle: "Universitat Pompeu Fabra (UPF)",
    period: "2026 – Present",
    desc: "Doctoral research on multimodal generative models and agentic AI for neurological diagnostics, based at CERN in Geneva.",
    link: null,
  },
  {
    id: 2,
    title: "PhD in AI for Neuroscience",
    subtitle: "EPFL · EDNE Doctoral Program",
    period: "2025 – 2026",
    desc: "Initial doctoral enrollment in Lausanne. Research on multimodal Graph Neural Networks, federated learning, and privacy-preserving medical AI for neurological conditions.",
    link: null,
  },
  {
    id: 3,
    title: "MSc in Data Science",
    subtitle: "Sapienza · 110/110 cum laude",
    period: "2022 – 2025",
    desc: "Honors program graduate specializing in Deep Learning and Temporal Graph Neural Networks.",
    link: null,
  },
  {
    id: 4,
    title: "Erasmus MSc",
    subtitle: "Universitat Politècnica de Catalunya (UPC)",
    period: "2023 – 2024",
    desc: "Exchange in Barcelona, focused on machine learning, image processing, and information theory.",
    link: null,
  },
  {
    id: 5,
    title: "BSc in Statistics",
    subtitle: "Sapienza University of Rome",
    period: "2018 – 2022",
    desc: "Statistical analysis, data modeling, and quantitative research methods.",
    link: null,
  },
  {
    id: 6,
    title: "Summer School",
    subtitle: "ESSAI · University of Ljubljana",
    period: "2023",
    desc: "1st European Summer School on Artificial Intelligence & 20th Advanced Course on AI (ACAI).",
    link: null,
  },
];

export interface OpenSourceProject {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    id: 1,
    title: "MyTripPlanner",
    description: "AI road trip planner with the Ulisse agent",
    longDescription:
      "Self-hosted planner where Ulisse interviews you and builds itineraries live: stops, map, timings, budget. Runs on your Claude or ChatGPT subscription. No API keys.",
    tags: ["TypeScript", "Node.js", "AI Agent", "AGPL"],
    demoUrl: "https://prot10.github.io/MyTripPlanner/",
    githubUrl: "https://github.com/Prot10/MyTripPlanner",
  },
  {
    id: 2,
    title: "MyMacCleaner",
    description: "macOS system utility with Liquid Glass UI",
    longDescription:
      "Open-source macOS app for smart scan, disk cleaning, space lens, duplicate finder, and performance monitoring. Code-signed and notarized.",
    tags: ["Swift", "SwiftUI", "macOS", "AGPL-3.0"],
    demoUrl: "https://prot10.github.io/MyMacCleaner/",
    githubUrl: "https://github.com/Prot10/MyMacCleaner",
  },
];

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/Prot10" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/andrea-protani/" },
  { label: "X", url: "https://x.com/Andrea__Protani" },
  {
    label: "Scholar",
    url: "https://scholar.google.com/citations?user=uzjy878AAAAJ&hl=en",
  },
];
