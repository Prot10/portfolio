"use client";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

const RecentProjects = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects" className="py-20">
      <div className="py-20">
        <h1 className="heading mb-8">
          A small selection of <span className="text-purple">my projects</span>
        </h1>
        <ul className="max-w-2xl mx-auto w-full gap-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col md:flex-row ">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0  grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RecentProjects;

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Bayesian NN - Transformers - Forecasting",
    title: "Human Motion Forecasting with BNN",
    src: "/p3.svg",
    ctaText: "More...",
    ctaLink: "https://github.com/Prot10/BNN_Human_motion",
    content: () => {
      return (
        <p>
          The project focuses on Human Motion Forecasting using Bayesian Neural
          Networks (BNNs) to predict human poses in dynamic environments,
          accounting for uncertainty. The repository is organized into
          components like data preparation, model implementations (Autoformer,
          GRNN, Transformer), and training/testing scripts. The models aim to
          capture spatio-temporal relationships, with the Autoformer performing
          best in Human Pose Forecasting. Comparative analysis and uncertainty
          estimation through BNNs highlight key findings, with future work
          directed towards optimizing loss functions and computational
          efficiency.
        </p>
      );
    },
  },
  // {
  //   description: "University project",
  //   title: "A ML Approach to Autism Research",
  //   src: "/p4.svg",
  //   ctaText: "More...",
  //   ctaLink: "https://github.com/Prot10",
  //   content: () => {
  //     return (
  //       <p>
  //         Methodology for analyzing fMRI data to differentiate between
  //         individuals with autism and typically developing individuals.
  //       </p>
  //     );
  //   },
  // },
  {
    description: "LSH - Feature Engineering - Clustering",
    title: "The Marvel Universe!",
    src: "/hw5.svg",
    ctaText: "More...",
    ctaLink: "https://github.com/Prot10/The-Marvel-Universe-",
    content: () => {
      return (
        <p>
          The task involved analyzing the Marvel Comics Universe by exploring
          the social network of superheroes and villains. Two different graphs
          were built: one representing collaborations between heroes and another
          connecting heroes to the comics they appeared in. Data preprocessing
          addressed inconsistencies in hero names and removed self-loops from
          the hero network. In the backend, various functionalities were
          implemented, including extracting graph features such as node counts,
          collaboration counts, network density, and degree distribution. Top
          superheroes were identified using centrality metrics, the shortest
          paths between specific heroes were determined, and algorithms were
          developed to disconnect graphs into subgraphs and extract community
          structures. All functions were capable of handling subsets of top N
          heroes based on their comic appearances. On the frontend,
          visualizations were created to display results such as collaboration
          graphs, centrality measures, shortest paths, disconnection graphs, and
          community structures. Additionally, command-line tools were used to
          answer specific questions, such as identifying the most popular hero
          pair and calculating comic appearances. A bonus task involved the
          implementation of the PageRank algorithm using the MapReduce paradigm.
        </p>
      );
    },
  },
  {
    description: "Graph Theory - Centrality Metrics - Community Detection",
    title: "Getting to know your customers",
    src: "/hw4.svg",
    ctaText: "More...",
    ctaLink: "https://github.com/Prot10/Getting-to-know-your-customers",
    content: () => {
      return (
        <p>
          A Locality Sensitive Hashing (LSH) algorithm was implemented to
          identify similar customers using bank data. The process began by
          preparing the dataset, selecting relevant features, and creating a
          custom MinHash function to map customers into similarity bins. Various
          thresholds were tested to evaluate the algorithm&apos;s effectiveness.
          Following this, a clustering approach was applied to group customers.
          Feature engineering was performed to generate additional variables
          from the data, which were then normalized and subjected to
          dimensionality reduction techniques. K-means clustering was
          implemented, and the optimal number of clusters was identified.
          Results were compared with K-means++, and cluster characteristics were
          analyzed to assess model performance.
        </p>
      );
    },
  },
  {
    description: "Web Scraping - TF-IDF - Search Engine",
    title: "Places of the world",
    src: "/hw3.svg",
    ctaText: "More...",
    ctaLink: "https://github.com/Prot10/Places-of-the-world",
    content: () => {
      return (
        <p>
          The task involved creating a search engine for tourist locations using
          user-generated content from Atlas Obscura. Data collection was first
          undertaken by gathering URLs from the first 400 pages of a list of
          places. The HTML of these pages was then downloaded and saved into
          folders. Once collected, the HTML pages were parsed to extract
          detailed information about each place, including names, descriptions,
          tags, addresses, and more. This data was saved in individual .tsv
          files for each location. For the search engine, the data underwent
          preprocessing, including removing stopwords, punctuation, and stemming
          using the nltk library. Two different search engines were developed.
          The first one handled conjunctive queries, where a query would return
          documents containing all search terms based on an inverted index. The
          second search engine ranked results using tf-idf and cosine
          similarity, sorting the results to return the most relevant documents.
          A custom ranking metric was then developed, allowing users to specify
          additional query details. This metric sorted results based on both
          textual query relevance and additional document attributes. Finally,
          the most relevant places were visualized on a map, displaying details
          such as the location, address, and number of visitors. A bonus task
          introduced a more complex search engine, allowing users to issue
          queries on multiple fields and apply various filters, such as tags,
          contributor usernames, and visit counts. The engine was designed to
          aggregate similarities from multiple query criteria and filter results
          accordingly.
        </p>
      );
    },
  },
  {
    description: "EDA - Time Series Analysis - Text Mining",
    title: "Instagram users and their behaviour",
    src: "/hw2.svg",
    ctaText: "More...",
    ctaLink: "https://github.com/Prot10/Instagram-users-and-their-behaviour",
    content: () => {
      return (
        <p>
          The task focused on analyzing Instagram profiles, posts, and locations
          to uncover user behavior. Data was collected and imported into pandas
          DataFrames, followed by an Exploratory Data Analysis (EDA) to
          summarize the datasets. Key insights included the number of posts per
          profile, posts with the most &quot;likes&quot; and comments, tagged
          locations, and the percentage of business accounts. Posting times were
          analyzed, and custom functions were developed to visualize posts in
          specific time intervals. Functions were created to retrieve posts for
          specific profiles and the top posted profiles. Additionally, the
          average &quot;likes&quot; and comments for the top 10 profiles were
          calculated and plotted. The activity of the top users by followers was
          analyzed, focusing on their posting habits, tagged locations, and
          content types (photos, videos, mixed). Posting effectiveness was
          examined by calculating the average time between posts and identifying
          high-frequency users. Probabilities were computed for posts receiving
          a high percentage of &quot;likes&quot; and users revisiting locations.
          Statistical tests and visualizations were used to explore
          relationships between &quot;likes,&quot; comments, and post timing, as
          well as the distribution of followers. Bonus tasks included comparing
          time intervals between posts for users with different follower counts,
          analyzing location visits, and performing text mining on post
          descriptions.
        </p>
      );
    },
  },
  {
    description: "DEGs - Gene Co-expression Networks - PSN",
    title: "Differential Analyses of Gene Expression in KIRP",
    src: "/depm.svg",
    ctaText: "More...",
    ctaLink: "https://github.com/Prot10/DEPM",
    content: () => {
      return (
        <p>
          The project focuses on analyzing gene expression data in Kidney Renal
          Papillary Cell Carcinoma (KIRP) using the TCGA-KIRP dataset. The study
          identifies differentially expressed genes (DEGs) and constructs gene
          co-expression networks to compare cancerous and normal tissues. It
          also builds a Patient Similarity Network (PSN) to analyze
          patient-specific genetic traits. Methods such as correlation analysis,
          enrichment analysis, and survival analysis are used to explore gene
          interactions and patient outcomes. Key findings include identifying
          hub genes that may play significant roles in disease progression and
          potential therapeutic targets.
        </p>
      );
    },
  },
];
