export const navItems = [
  { name: "About", link: "#about" },
  { name: "Publications", link: "#publications" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Interests", link: "#interests" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Neural Network Lover",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Explorer",
    description: "Rome, Barcelona, Geneva... next?",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for data",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building MyMacCleaner",
    description: "Open-source macOS utility for system optimization",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Towards Explainable Graph Neural Networks for Neurological Evaluation on EEG Signals",
    des: "Novel approach using Graph Neural Networks (GNNs) to predict stroke severity, measured by the NIH Stroke Scale (NIHSS), from EEG recordings of 71 patients...",
    img: "/sx_vs_dx.svg",
    iconLists: ["/ieee.svg"],
    link: "https://arxiv.org/abs/2410.07199",
  },
  {
    id: 2,
    title: "Federated GNNs for EEG-Based Stroke Assessment",
    des: "Combining Federated Learning and Graph Neural Networks to predict stroke severity using EEG data while preserving patient privacy...",
    img: "/europe-fl.svg",
    iconLists: ["/NeurIPS-logo.svg"],
    link: "https://arxiv.org/abs/2411.02286",
  },
  {
    id: 3,
    title: "Feasibility Analysis of Federated Neural Networks for Explainable Detection of Atrial Fibrillation",
    des: "Early detection of atrial fibrillation (AFib) is challenging due to its asymptomatic and paroxysmal nature...",
    img: "/gradcam.svg",
    iconLists: ["/ieee.svg"],
    link: "https://arxiv.org/abs/2410.19781",
  },
  {
    id: 4,
    title: "Decoder-Free Supervoxel GNN for Accurate Brain-Tumor Localization in Multi-modal MRI",
    des: "Hierarchical encoder combining patch-level Transformer with supervoxel-level Graph Attention Network for brain tumor localization with dual-scale explainability...",
    img: "/brain-tumor.png",
    iconLists: ["/springer.svg"],
    link: "https://link.springer.com/chapter/10.1007/978-3-032-06103-4_16",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Doctoral Student",
    subtitle: "AI for Neuroscience",
    desc: "Developing novel approaches leveraging Federated Learning and Graph Neural Networks to improve medical diagnostics, predicting stroke severity through brain connectivity analysis from EEG signals while ensuring privacy-preserving data handling across multiple hospitals.",
    className: "md:col-span-2",
    thumbnail: "/cern.svg",
  },
  {
    id: 2,
    title: "PhD Student in Neuroscience",
    subtitle: "EDNE Doctoral Program",
    desc: "Pursuing a PhD in AI for Neuroscience, focusing on developing explainable deep learning models for neurological evaluation. Research spans Graph Neural Networks, multimodal brain imaging analysis, and federated learning for privacy-preserving medical AI.",
    className: "md:col-span-2",
    thumbnail: "/epfl.webp",
  },
  {
    id: 3,
    title: "Research Scientist Intern",
    subtitle: "Federated Learning and Graph Neural Networks in Medical Diagnostics",
    desc: "Developed a new approach leveraging Federated Learning (FL) and Graph Neural Networks (GNN) to improve medical diagnostics, predicting stroke severity through brain connectivity analysis while ensuring privacy-preserving data handling, achieving state-of-the-art results in the process.",
    className: "md:col-span-2",
    thumbnail: "/cern.svg",
  },
  {
    id: 4,
    title: "External AI Consultant",
    desc: "Developed a Graph Neural Network (GNN) model designed for 3D mesh files to predict individual tooth movements, thereby automating dental aligner setups. Additionally, led a team of five to create a Deep Learning model capable of identifying necessary aligner treatments from mouth images by employing various architectures and fine-tuning pre-trained models from HuggingFace.",
    className: "md:col-span-2",
    thumbnail: "/sorridi.svg",
  },
  {
    id: 5,
    title: "MSc in Data Science",
    desc: "MSc in Data Science at Sapienza University of Rome, specializing in Deep Learning, where I was part of the honors program and conducted research on temporal Graph Neural Networks (GNNs). I also studied at the Universitat Politècnica de Catalunya (UPC) in Barcelona through the Erasmus+ program, focusing on telecommunications and aerospace engineering.",
    className: "md:col-span-2",
    thumbnail: "/sapienza.svg",
  },
  {
    id: 6,
    title: "Bachelor in Statistics",
    desc: "Bachelor's degree in Statistics from Sapienza University of Rome, where I developed a strong foundation in statistical analysis, data modeling, and quantitative research methods. My studies provided me with essential skills in data interpretation and problem-solving, laying the groundwork for advanced studies in data science and deep learning.",
    className: "md:col-span-2",
    thumbnail: "/sapienza.svg",
  },
];

export const testimonials = [
  {
    quote:
      "The stock market is a fundamental component of financial systems, reflecting economic health, providing investment opportunities, and influencing global dynamics. Accurate stock market predictions can lead to significant gains and promote better investment decisions. However, predicting stock market trends is challenging due to their non-linear and stochastic nature. This study investigates the efficacy of advanced deep learning models for short-term trend forecasting using daily and hourly closing prices from the S&P 500 index and the Brazilian ETF EWZ...",
    name: "An Evaluation of Deep Learning Models for Stock Market Trend Prediction",
    title: "Gonzalo Lopez Gil, Paul Duhamel-Sebline, Andrew McCarren",
    link: "https://arxiv.org/pdf/2408.12408",
  },
  {
    quote:
      "Inspired by the Kolmogorov-Arnold representation theorem, we propose Kolmogorov-Arnold Networks (KANs) as promising alternatives to Multi-Layer Perceptrons (MLPs). While MLPs have fixed activation functions on nodes ('neurons'), KANs have learnable activation functions on edges ('weights'). KANs have no linear weights at all -- every weight parameter is replaced by a univariate function parametrized as a spline. We show that this seemingly simple change makes KANs outperform MLPs in terms of accuracy and interpretability...",
    name: "KAN: Kolmogorov-Arnold Networks",
    title:
      "Ziming Liu, Yixuan Wang, Sachin Vaidya, Fabian Ruehle, James Halverson, Marin Soljačić, Thomas Y. Hou, Max Tegmark",
    link: "https://arxiv.org/pdf/2404.19756",
  },
  {
    quote:
      "Foundation models, now powering most of the exciting applications in deep learning, are almost universally based on the Transformer architecture and its core attention module. Many subquadratic-time architectures such as linear attention, gated convolution and recurrent models, and structured state space models (SSMs) have been developed to address Transformers' computational inefficiency on long sequences, but they have not performed as well as attention on important modalities such as language...",
    name: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
    title: "Albert Gu, Tri Dao",
    link: "https://arxiv.org/pdf/2312.00752",
  },
  {
    quote:
      "In recent years, deep learning models have been applied to neuroimaging data for early diagnosis of Alzheimer's disease (AD). Structural magnetic resonance imaging (sMRI) and positron emission tomography (PET) images provide structural and functional information about the brain, respectively. Combining these features leads to improved performance than using a single modality alone in building predictive models for AD diagnosis...",
    name: "Multi-modal Graph Neural Network for Early Diagnosis of Alzheimer's Disease from sMRI and PET Scans",
    title:
      "Yanteng Zhanga, Xiaohai He, Yi Hao Chan, Qizhi Teng, Jagath C. Rajapakse",
    link: "https://arxiv.org/pdf/2307.16366",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Prot10",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/Andrea__Protani",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/andrea-protani/",
  },
  {
    id: 4,
    img: "/google-scholar.svg",
    url: "https://scholar.google.com/citations?user=uzjy878AAAAJ&hl=en&oi=sra",
  },
];
