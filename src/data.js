/**
 * All portfolio content lives here.
 * Edit this file to update your info — App.jsx renders it automatically.
 */

export const profile = {
  name: 'Jiayi (Chesley) Guo',
  shortName: 'Chesley Guo',
  degree: 'Master of Development Engineering',
  school: 'UC Berkeley',
  // cycled by the typewriter in the hero: "I love ___"
  passions: [
    'causal inference',
    'auditing LLMs',
    'methane monitoring',
    'building AI products',
    'messy real-world data',
    'data for social good',
  ],
  tagline:
    'I turn messy real-world data into evidence for better products and policies, from auditing how consumer LLMs handle retracted clinical trials to measuring the causal impact of speed cameras with the Oakland Department of Transportation.',
  bio: [
    "I'm a Master of Development Engineering (MDE) student at UC Berkeley on the AI/Data Analytics track and an NSF Research Trainee in Digital Transformation of Development, graduating in December 2026. Before Berkeley, I earned my B.S. in Information Sciences (Data Science track) at the University of Illinois Urbana-Champaign, after two years studying bioinformatics at Xi'an Jiaotong-Liverpool University.",
    'My work sits at the intersection of data science, AI, and product. I audit how consumer LLMs handle retracted medical evidence, build simulation-based inference for landfill methane from airborne surveys, and model the causal impact of speed cameras on multi-year panel data. In industry, I designed LLM evaluation metrics at TikTok and ran data-driven experiments for real-time communication products at Tencent.',
    'I care about rigorous analysis that leads to real decisions, and I enjoy working across algorithm, product, and business teams to get things shipped.',
  ],
  location: 'Berkeley, CA',
  email: 'chesleyguo@berkeley.edu',
  linkedin: 'https://www.linkedin.com/in/jg1023',
  openTo: ['Data Scientist', 'AI Product Manager', 'Research & Analytics'],
  availability: 'Available for full-time roles starting January 2027',
};

export const socials = [
  { label: 'LinkedIn', url: profile.linkedin },
  { label: 'Email', url: `mailto:${profile.email}` },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'honors', label: 'Honors' },
  { id: 'contact', label: 'Contact' },
];

// "By the Numbers" band; each value animates up from 0 when scrolled into view
export const stats = [
  { value: 3600, label: 'LLM responses audited for retracted clinical evidence' },
  { value: 2641, label: 'Landfills audited in EPA’s LMOP register' },
  { value: 300, suffix: 'k+', label: 'UK Biobank participants analyzed' },
  { value: 93.3, decimals: 1, suffix: '%', label: 'Accuracy of my cough-acoustics model' },
  { value: 800, suffix: '+', label: 'Developers reached at Tencent RTC' },
  { value: 5, label: 'Publications & working papers' },
  { value: 3, suffix: ' yrs', label: 'Of speed-camera panel data, modeled causally' },
  { value: 200, suffix: '+', label: 'Hours of volunteer service at UIUC' },
];

export const education = [
  {
    school: 'University of California, Berkeley',
    degree: 'Master of Development Engineering (MDE)',
    detail: 'AI/Data Analytics Track · NSF Research Traineeship (NRT) in Digital Transformation of Development',
    courses:
      'Experiments & Causal Inference; Research Design for Data and Analysis; Big Data & Development; Digital Transformation of Development; Front-End Web Architecture; Public Interest Technology Clinic',
    gpa: '3.82',
    date: 'Expected Dec 2026',
  },
  {
    school: 'University of Illinois Urbana-Champaign',
    degree: 'B.S. in Information Sciences',
    detail: 'Data Science Track · Edmund J. James Scholar',
    courses:
      'Data Visualization; Research Design in Information Sciences; Introduction to HCI; Ethics & Policy for Data Science; Data Structures; Advanced Software Design',
    gpa: '3.91',
    date: '2023 – 2024',
  },
  {
    school: 'Xi’an Jiaotong-Liverpool University',
    degree: 'Undergraduate study in Bioinformatics (two years)',
    detail: 'Transferred to UIUC · Suzhou, China',
    courses:
      'Cellular & Molecular Biology; Biochemistry; Evolution & Genetics; Algorithms; Databases; Java; Experimental Design; Statistics; Linear Algebra; Multivariable Calculus',
    date: '2020 – 2022',
  },
];

export const experience = [
  {
    company: 'Tencent',
    role: 'Product Manager Intern',
    team: 'Cloud & Smart Industries Group: Real-Time Communication',
    date: 'May 2025 – Aug 2025',
    location: 'Shanghai, China',
    highlights: [
      'Drove feature improvements across the RTC product suite (Conversational AI, Call, Conference, Live Streaming, In-game Voice Chat, Beauty AR) using event tracking and user behavior data.',
      'Led LinkedIn and TikTok marketing and localization, producing technical blogs, promo videos, and live webinars that reached 800+ developers and startups.',
      'Built an affiliate program with 100+ KOLs, generating 2.5k+ impressions and lifting conversion through performance-based partnerships.',
      'Designed A/B tests and content ecosystem maps to compare content strategies and optimize campaigns with data.',
    ],
  },
  {
    company: 'ByteDance (TikTok)',
    role: 'AI Strategy Product Manager Intern',
    team: 'TikTok AI Innovation Center',
    date: 'Nov 2024 – Jan 2025',
    location: 'Shanghai, China',
    highlights: [
      'Improved in-house video understanding and text generation LLMs, raising description accuracy and reducing hallucinations.',
      'Wrote PRDs defining core LLM capabilities (video tagging, summarization, question answering) and designed evaluation metrics for accuracy, semantic relevance, and logical reasoning.',
      'Coordinated algorithm engineers, data annotation vendors, and infrastructure teams to move models through training and deployment.',
      'Built metric dashboards from user scenarios and feedback to guide model iteration.',
    ],
  },
  {
    company: 'Shanghai Artificial Intelligence Laboratory',
    role: 'Research Intern, OpenTrust Lab',
    team: 'LLM Safety & Trustworthy AI',
    date: 'Jun 2024 – Aug 2024',
    location: 'Shanghai, China',
    highlights: [
      'Assisted with safety evaluations of large language models on the lab’s benchmarks (SALAD-Bench, MM-SafetyBench).',
      'Ran global content and social media for the ICML 2024 TiFA workshop (Trustworthy Multi-modal Foundation Models and AI Agents), iterating on strategy with engagement data.',
      'Built event operations for the Security Forum at the 2024 World Artificial Intelligence Conference (WAIC), hosting hundreds of attendees.',
    ],
  },
  {
    company: 'CSC Financial Co., Ltd.',
    role: 'Financial Planning & Analysis Intern',
    team: 'FP&A',
    date: 'Jul 2023 – Aug 2023',
    location: 'Changzhou, China',
    highlights: [
      'Built financial models for forecasting and budgeting, improving accuracy and efficiency.',
      'Ran competitor and market analyses and presented growth recommendations directly to senior management.',
    ],
  },
];

// category must match one of the `researchFilters` ids below
// link: optional URL (paper, poster, repo); omit to hide the link
export const research = [
  {
    title: 'Retracted but Not Forgotten: Consumer LLMs & Retracted Clinical Trials',
    org: 'Independent Research · Sole Author',
    role: 'Manuscript submitted to Scientometrics',
    date: 'Aug 2026 – Present',
    category: 'llm',
    featured: true,
    description:
      'A matched-control audit of whether ChatGPT, Gemini, and Claude present retracted clinical trials as valid evidence. I paired 100 retracted trials (Retraction Watch) with controls matched on topic, year, and design, then collected 3,600 responses across 3 question framings and 3 conditions, coded with an LLM coder validated against hand coding (κ = 0.96) and analyzed with GEE models. About 2/3 of answers presented retracted findings as valid, no different from controls; a retraction notice cut errors to ≤2%, while web search had mixed effects (GPT 66%→35%, Gemini 66%→82%).',
    tags: ['LLM Audit', 'Matched Controls', 'GEE', 'Inter-rater Reliability', 'Python'],
    link: 'https://github.com/chesleyguo/llm-retracted-clinical-evidence',
    linkLabel: 'Code & data →',
  },
  {
    title: 'Causal Impact of Automated Speed Enforcement',
    org: 'UC Berkeley School of Information × Oakland DOT',
    role: 'Student Team Data Scientist · Prof. Alex Hughes',
    date: 'Aug 2026 – Present',
    category: 'causal',
    featured: true,
    description:
      'Building Difference-in-Differences models on 3 years of high-frequency speed and violation data to isolate the effect of speed cameras on speed distributions, severe speeding, and repeat-offense behavior. All work runs in a secure GCP environment under CPRA/CCPA compliance.',
    tags: ['Causal Inference', 'Diff-in-Diff', 'Panel Data', 'GCP', 'Python'],
  },
  {
    title: 'Selection-Aware Inference for Landfill Methane',
    org: 'UC Berkeley College of Engineering',
    role: 'Research Assistant · Prof. Alice Agogino',
    date: 'Jul 2026 – Present',
    category: 'ml',
    featured: true,
    description:
      'Developing a simulation-based inference (SBI) framework that estimates facility-level, time-averaged methane emissions with calibrated uncertainty from sparse airborne surveys (AVIRIS-NG, GAO; 107 U.S. landfills, 593 flight days). In simulation, averaging only detected overpasses overstates emissions by more than 2×; the framework corrects this by modeling non-detections, instrument detection limits, and survey selection. The pipeline reconciles plume observations with EPA GHGRP Subpart HH and LMOP records. Earlier, I audited EPA’s LMOP register (2,641 landfills) with leave-state-out validation, released a public explorer, and built a methane dashboard now used by Squishy Robotics.',
    tags: ['Simulation-Based Inference', 'Remote Sensing', 'Uncertainty', 'EPA GHGRP', 'Dashboards'],
  },
  {
    title: 'Cough Acoustics for Disease Prognosis',
    org: 'Shanghai Key Lab of Multidimensional Information Processing',
    role: 'Research Assistant · Prof. Jiangang Chen (ECNU)',
    date: 'Oct 2021 – Dec 2022',
    category: 'ml',
    description:
      'Collected cough recordings from 78 hospital patients and grew the dataset to 535 samples with voice activity detection, denoising, and augmentation. An ensemble XGBoost + Random Forest model reached 93.3% accuracy and predicted recovery time within 3 days.',
    tags: ['Audio ML', 'XGBoost', 'Random Forest', 'librosa', 'SciPy'],
  },
  {
    title: 'Metabolomics of Sarcopenia & Aging',
    org: 'Global Health Institute, Duke Kunshan University',
    role: 'Health Research Data Analyst Intern · Prof. Chenkai Wu',
    date: 'Mar 2022 – Aug 2022',
    category: 'health',
    description:
      'Analyzed 249 metabolites from the UK Biobank (300k+ participants) using PCA and multinomial logistic regression to study links between metabolites, sarcopenia, and aging, then built Cox proportional hazards models for mortality risk prediction.',
    tags: ['UK Biobank', 'PCA', 'Logistic Regression', 'Survival Analysis', 'R'],
  },
  {
    title: 'Belt and Road Health Cooperation Analysis',
    org: 'Vanke School of Public Health, Tsinghua University',
    role: 'Research Assistant · Prof. Kun Tang',
    date: 'Nov 2022 – Mar 2023',
    category: 'health',
    description:
      'Cleaned and mined medical cooperation memorandums with Belt and Road countries since 2016, then linked them to IHME disease burden (DALYs) data in a multi-country evaluation model.',
    tags: ['Text Mining', 'Keyword Extraction', 'Global Health', 'IHME DALYs'],
  },
  {
    title: 'AI Chatbot for Cross-Cultural Academic Search',
    org: 'School of Information Sciences, UIUC',
    role: 'Research Assistant · Prof. Yun Huang',
    date: 'Jan 2024 – May 2024',
    category: 'hci',
    description:
      'Reviewed cross-cultural HCI research on academic information seeking and helped specify an AI chatbot with multilingual support, context-aware queries, and digital library API integration.',
    tags: ['HCI', 'Conversational AI', 'Requirements Design', 'UX Research'],
  },
];

export const researchFilters = [
  { id: 'all', label: 'All' },
  { id: 'llm', label: 'LLM Evaluation' },
  { id: 'causal', label: 'Causal Inference' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'health', label: 'Health Data Science' },
  { id: 'hci', label: 'HCI & AI Products' },
];

export const publications = [
  {
    authors: 'Guo, J.',
    title:
      'Retracted but not forgotten: A matched-control audit of how consumer large language models handle retracted clinical trials.',
    venue: 'Submitted to Scientometrics',
    status: 'Under review',
  },
  {
    authors: 'Guo, J., & Hughes, A.',
    title:
      'The effect of automated speed enforcement on driving behavior: Evidence from Oakland’s speed safety camera pilot.',
    venue: 'Working paper',
    status: 'Working paper',
  },
  {
    authors: 'Guo, J., & Agogino, A. M.',
    title:
      'Detected once, counted twice? Selection-aware simulation-based inference for landfill methane from sparse airborne surveys.',
    venue: 'Working paper',
    status: 'Working paper',
  },
  {
    authors: 'Lu, H., Gu, L., Guo, J., Xu, L., et al.',
    year: '2023',
    title: 'Machine learning classification and recovery prediction of COVID-19 cough sounds.',
    venue: 'SSRN (Preprints with The Lancet), 4439141',
    status: 'Preprint',
    link: 'https://ssrn.com/abstract=4439141',
  },
  {
    authors: 'Shao, Y., Guo, J., Li, Z., Yan, W., & Zhu, Z.',
    year: '2022',
    title:
      'Optimization of seaport companies’ D&A systems based on system dynamics and evaluation models.',
    venue: 'Proceedings of SPIE, 12340, 1234003',
    status: 'Published',
    link: 'https://doi.org/10.1117/12.2652356',
  },
];

export const teaching = [
  {
    role: 'Research Mentor',
    org: 'Undergraduate Research Apprentice Program (URAP), UC Berkeley',
    date: '2026 – Present',
    detail: 'Mentoring 2 undergraduates on independent research projects in AI/ML for methane monitoring.',
  },
  {
    role: 'Senior Mentor',
    org: 'Xi’an Jiaotong-Liverpool University Affiliated School',
    date: '2022 – 2023',
    detail: 'Taught STEM enrichment courses to a class of ~50 high school students.',
  },
  {
    role: 'Student Representative',
    org: 'School of Science, Xi’an Jiaotong-Liverpool University',
    date: '2021 – 2022',
    detail: 'Mentored junior undergraduates on coursework and academic planning.',
  },
];

export const skills = [
  {
    icon: '🐍',
    group: 'Programming & Data',
    items: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Statsmodels', 'SQL', 'R', 'Java'],
  },
  {
    icon: '📈',
    group: 'Statistics & Machine Learning',
    items: [
      'Difference-in-Differences',
      'Simulation-Based Inference',
      'GEE / Clustered Models',
      'Matched-Control Designs',
      'Regression Modeling',
      'PCA',
      'Survival Analysis',
      'XGBoost',
      'Random Forest',
      'Feature Engineering',
    ],
  },
  {
    icon: '🤖',
    group: 'AI & LLMs',
    items: [
      'LLM Evaluation Metrics',
      'LLM Auditing',
      'Safety Benchmarks',
      'Prompt Engineering',
      'Few-shot & Chain-of-Thought',
      'Data Annotation Management',
      'Claude Code',
      'Cursor',
      'GitHub Copilot',
    ],
  },
  {
    icon: '📊',
    group: 'Visualization & Tools',
    items: ['Tableau', 'Power BI', 'Excel', 'Dashboards', 'Google Cloud Platform'],
  },
  {
    icon: '🧭',
    group: 'Product & Growth',
    items: [
      'PRDs & Requirements',
      'Event Tracking',
      'User Personas',
      'A/B Testing',
      'Competitive Analysis',
      'Localization',
    ],
  },
  {
    icon: '🎨',
    group: 'Design & Languages',
    items: [
      'Photoshop',
      'Illustrator',
      'Premiere Pro',
      'Mandarin (Native)',
      'English (Fluent)',
      'Japanese (Basic)',
      'Spanish (Basic)',
    ],
  },
];

export const honors = [
  { year: '2025', title: 'NSF Research Traineeship (NRT) in Digital Transformation of Development (DToD)' },
  { year: '2024', title: 'Phi Kappa Phi Honor Society' },
  { year: '2024', title: 'WeCu Scholar, UIUC (200+ hours of volunteer service)' },
  { year: '2023', title: 'MIT Policy Hackathon, Top 3 Finalist (Equitable Access to Healthcare)' },
  { year: '2023', title: 'Edmund J. James Scholar (2023–2024) & Dean’s List (Fall 2023), UIUC' },
  { year: '2023', title: 'Kaggle Competition Expert' },
  { year: '2023', title: 'Google Advanced Data Analytics Certificate' },
  { year: '2022', title: 'Meritorious Winner, Interdisciplinary Contest in Modeling (ICM)' },
  { year: '2022', title: 'HarvardX Data Analysis for Life Sciences Professional Certificate' },
  { year: '2021', title: 'National Second Prize, China Undergraduate Mathematical Contest in Modeling' },
  { year: '2020', title: 'District Third Prize, Asia-Pacific Mathematical Contest in Modeling' },
];

export const extensionStudy = [
  'MITx MicroMasters in Statistics and Data Science: all four courses with verified certificates (2024)',
  'Oxford Machine Learning Summer School: ML × Health (2023)',
  'SJTU–THU–PKU Computer Science International Summer School (2023)',
  'Duke Kunshan Healthcare Big Data Summer Program: Health Data Analytics, ML, Causal Inference & RCTs (2022)',
  'Tsinghua VSPH-GSS: Advancing Global Health in a Changing World (2022)',
];
