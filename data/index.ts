export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Interests", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Innovating at the intersection of AI and healthcare",
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
    description:
      "From Rome's streets to Barcelona's vibes, now leaving my mark in Geneva",
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
    title: "Trying to improve my front-end skills",
    description: "The Inside Scoop",
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
    title:
      "Towards Explainable Graph Neural Networks for Neurological Evaluation on EEG Signals3D Solar System Planets to Explore",
    des: "Novel approach using Graph Neural Networks (GNNs) to predict stroke severity, measured by the NIH Stroke Scale (NIHSS), from EEG recordings of 71 patients.",
    img: "/p1.svg",
    iconLists: ["/python.svg"],
    link: "https://cafein.web.cern.ch/About",
  },
  {
    id: 2,
    title:
      "Feasibility Analysis of Federated Neural Networks for Explainable Detection of Atrial Fibrillation",
    des: "Federated Learning (FL) to enhance the early detection of atrial fibrillation (AFib) using raw electrocardiogram (ECG) data.",
    img: "/p2.svg",
    iconLists: ["/python.svg"],
    link: "https://cafein.web.cern.ch/About",
  },
  {
    id: 3,
    title: "Human Motion Forecasting with Bayesian Neural Networks",
    des: "Predict human poses in dynamic scenarios, such as human-robot interaction and autonomous driving, while accounting for uncertainty.",
    img: "/p3.svg",
    iconLists: ["/python.svg"],
    link: "https://github.com/Prot10/BNN_Human_motion",
  },
  {
    id: 4,
    title: "A Machine Learning Approach to Autism Research",
    des: "Methodology for analyzing fMRI data to differentiate between individuals with autism and typically developing individuals.",
    img: "/p4.svg",
    iconLists: ["/r.svg"],
    link: "https://github.com/Prot10",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Research Scientist Intern",
    subtitle:
      "Federated Learning and Graph Neural Networks in Medical Diagnostics",
    desc: "Developed a new approach leveraging Federated Learning (FL) and Graph Neural Networks (GNN) to improve medical diagnostics, predicting stroke severity through brain connectivity analysis while ensuring privacy-preserving data handling, achieving state-of-the-art results in the process.",
    className: "md:col-span-2",
    thumbnail: "/cern.svg",
  },
  {
    id: 2,
    title: "External AI Consultant",
    desc: "Developed a Graph Neural Network (GNN) model designed for 3D mesh files to predict individual tooth movements, thereby automating dental aligner setups. Additionally, Andrea led a team of five to create a Deep Learning model capable of identifying necessary aligner treatments from mouth images by employing various architectures and fine-tuning pre-trained models from HuggingFace.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/sorridi.svg",
  },
  {
    id: 3,
    title: "MSc in Data Science",
    desc: "MSc in Data Science at Sapienza University of Rome, specializing in Deep Learning, where I was part of the honors program and conducted research on temporal Graph Neural Networks (GNNs). I also studied at the Universitat Politècnica de Catalunya (UPC) in Barcelona through the Erasmus+ program, focusing on telecommunications and aerospace engineering.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/sapienza.svg",
  },
  {
    id: 4,
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
];
