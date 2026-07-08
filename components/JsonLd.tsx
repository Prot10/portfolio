import { kosmico, profile, site, socialLinks } from "@/data";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: site.url,
  email: profile.email,
  jobTitle: profile.roles,
  description: site.description,
  knowsAbout: [
    "Multimodal generative models",
    "Agentic systems",
    "Federated learning",
    "Neuroscience",
    "Medical AI",
    "Collaborative research software",
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: kosmico.name,
      url: kosmico.url,
    },
    {
      "@type": "Organization",
      name: "CERN",
      url: "https://home.cern",
    },
    {
      "@type": "Organization",
      name: "Universitat Pompeu Fabra",
      url: "https://www.upf.edu",
    },
  ],
  sameAs: socialLinks.map((link) => link.url),
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Sapienza University of Rome",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "EPFL",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${profile.name} | Portfolio`,
  url: site.url,
  description: site.description,
  author: {
    "@type": "Person",
    name: profile.name,
    url: site.url,
  },
  inLanguage: "en",
};

const JsonLd = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  </>
);

export default JsonLd;
