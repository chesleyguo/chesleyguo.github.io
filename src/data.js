/**
 * All portfolio content (English). ./data.zh.js has the same shape; keep the two in sync.
 * App.jsx only renders what is here.
 *
 * Rule: every number comes from a source file (noted next to it). Sections taken off the
 * homepage (stats, skills, extension study, full honors, job-search box, long project
 * descriptions) are kept verbatim in ./archive/main-data.js.
 */

// ---------------------------------------------------------------------------
// One line used in the hero, About and Contact. Once you have an offer, change it to e.g.
//   'Incoming PhD student, [University] · Fall 2027'
export const NEXT_LINE = 'Applying to PhD programs in information science for Fall 2027.';
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Jiayi (Chesley) Guo',
  shortName: 'Chesley Guo',
  degree: 'Master of Development Engineering',
  school: 'UC Berkeley',
  // Hero: research question (shown above the research interests)
  researchQuestion:
    'How can AI and information technologies deliver reliable knowledge to the people who need it most, rather than widen the gaps they already face?',
  researchInterests: ['AI for social good', 'information integrity', 'data for development'],
  tagline:
    'I turn messy real-world data into evidence for better decisions and policies, from auditing how consumer LLMs handle retracted clinical trials to measuring the causal impact of speed cameras with the Oakland Department of Transportation.',
  bio: [
    'I’m a Master of Development Engineering student at UC Berkeley (AI/Data Analytics track, graduating December 2026) and an NSF NRT Fellow in Digital Transformation of Development. I study when data and AI can be trusted to inform real decisions: how chatbots handle retracted science, how much methane landfills emit when aircraft see them only a few times, and whether Oakland’s speed cameras change driving. Before Berkeley I earned a B.S. in Information Sciences at UIUC; in industry I designed LLM evaluation metrics at TikTok and ran A/B tests at Tencent. At XJTLU, I founded the university’s first student Law Society, helping peers resolve more than 20 cases by turning institutional rules into steps they could act on.',
  ],
  // About → Positionality. The section is hidden while this is empty.
  positionality:
    'I grew up with my grandparents in a rural village in China, where a barefoot doctor’s knowledge was all the medical care within reach, and I became the first in my family to attend university. Since then I have moved between rural and urban China, the humanities and the sciences, and AI product teams and public-interest work, and I have seen how often reliable knowledge fails to reach the people who need it most. That question is what brought me to development engineering. I also recognize that I now work from a well-resourced U.S. university and am an outsider to many of the communities my projects touch, from Oakland’s neighborhoods to communities living near landfills, so I try to design with communities and public partners rather than for them.',
  photo: 'assets/headshot.jpg', // square; used for the share image (og-image.png)
  // Hero portrait (4:5) and the small lines around it
  portrait: 'assets/headshot-portrait.jpg',
  portraitCaption: 'BERKELEY, CA · ENGLISH / 中文',
  heroAffiliations: 'NSF NRT FELLOW · BEST LAB · BERKELEY I SCHOOL × OAKLAND DOT',
  location: 'Berkeley, CA',
  email: 'chesleyguo@berkeley.edu',
  linkedin: 'https://www.linkedin.com/in/jg1023',
};

// Quote banner between the research-direction cards and About (from My Story)
export const quote = {
  text: 'Why does knowledge that could protect people so often fail to reach those who need it most?',
  label: 'The question behind my work',
};

// (No longer shown: the hero's former "At a glance" card. Kept for reference.)
export const glance = {
  education: [
    { degree: 'M.Dev.Eng., UC Berkeley', year: '2026' },
    { degree: 'B.S. Information Sciences, UIUC', year: '2024' },
    { degree: 'Bioinformatics, XJTLU', year: '2020–22' },
  ],
  affiliations: ['NSF NRT Fellow', 'BEST Lab, Prof. Alice Agogino', 'Berkeley I School × Oakland DOT'],
};

// Row of three cards under the hero. `project` is the id of the research card it jumps to.
export const directions = [
  {
    icon: 'chat',
    title: 'LLM auditing',
    text: 'Do chatbots still cite retracted clinical trials? About 2 in 3 answers did; a retraction notice cut that to ≤2%.',
    project: 'retracted',
  },
  {
    icon: 'policy',
    title: 'Causal evaluation for policy',
    text: 'Do Oakland’s 18 speed cameras change how people drive? A regression discontinuity study with Oakland DOT.',
    project: 'oakland',
  },
  {
    icon: 'environment',
    title: 'Environmental data',
    text: 'How much methane do landfills emit? In simulation, averaging only detected plumes overstated single-overpass sites by 41%; our method cuts that to −3%.',
    project: 'methane',
  },
];

export const socials = [
  { label: 'LinkedIn', url: profile.linkedin },
  { label: 'Email', url: `mailto:${profile.email}` },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
  { id: 'story', label: 'My Story', href: 'story.html' }, // separate page
];

export const education = [
  {
    school: 'University of California, Berkeley',
    degree: 'Master of Development Engineering (MDE)',
    detail: 'AI/Data Analytics track · NSF NRT Fellow, Digital Transformation of Development',
    gpa: '3.82',
    date: 'Expected Dec 2026',
  },
  {
    school: 'University of Illinois Urbana-Champaign',
    degree: 'B.S. in Information Sciences',
    detail: 'Data Science track · Edmund J. James Scholar',
    gpa: '3.91',
    date: '2023 – 2024',
  },
  {
    school: 'Xi’an Jiaotong-Liverpool University',
    degree: 'Bioinformatics (two years, then transferred to UIUC)',
    detail: 'Suzhou, China',
    date: '2020 – 2022',
  },
];

// Top 5 only; the full list is in ./archive/main-data.js
export const honors = [
  { year: '2025', title: 'NSF NRT Fellow, Digital Transformation of Development' },
  { year: '2024', title: 'Phi Kappa Phi Honor Society' },
  { year: '2023', title: 'Edmund J. James Scholar & Dean’s List, UIUC' },
  { year: '2023', title: 'MIT Policy Hackathon, Top 3 Finalist (Equitable Access to Healthcare)' },
  { year: '2021', title: 'National Second Prize, China Undergraduate Mathematical Contest in Modeling' },
];

export const experience = [
  {
    company: 'Tencent',
    role: 'Product Manager Intern',
    team: 'Cloud & Smart Industries Group: Real-Time Communication',
    date: 'May 2025 – Aug 2025',
    location: 'Shanghai, China',
    highlights: [
      'Used event tracking and user behavior data to drive feature work across the RTC suite (Conversational AI, Call, Conference, Live Streaming).',
      'Designed A/B tests to compare content strategies; developer marketing reached 800+ developers and startups.',
    ],
  },
  {
    company: 'ByteDance (TikTok)',
    role: 'AI Strategy Product Manager Intern',
    team: 'TikTok AI Innovation Center',
    date: 'Nov 2024 – Jan 2025',
    location: 'Shanghai, China',
    highlights: [
      'Wrote PRDs for in-house video understanding and text generation LLMs and designed evaluation metrics for accuracy, semantic relevance and logical reasoning.',
      'Coordinated algorithm engineers, annotation vendors and infrastructure teams from training to deployment.',
    ],
  },
  {
    company: 'Shanghai Artificial Intelligence Laboratory',
    role: 'Research Intern, OpenTrust Lab',
    team: 'LLM Safety & Trustworthy AI',
    date: 'Jun 2024 – Aug 2024',
    location: 'Shanghai, China',
    highlights: [
      'Assisted with LLM safety evaluations on the lab’s benchmarks (SALAD-Bench, MM-SafetyBench).',
      'Ran content for the ICML 2024 TiFA workshop and event operations for the WAIC 2024 Security Forum.',
    ],
  },
  {
    company: 'CSC Financial Co., Ltd.',
    role: 'Financial Planning & Analysis Intern',
    team: 'FP&A',
    date: 'Jul 2023 – Aug 2023',
    location: 'Changzhou, China',
    highlights: ['Built forecasting and budgeting models and presented competitor analyses to senior management.'],
  },
];

export const teaching = [
  {
    role: 'Research Mentor',
    org: 'Undergraduate Research Apprentice Program (URAP), UC Berkeley',
    date: '2026 – Present',
    detail: 'Mentoring 2 undergraduates on independent research in AI/ML for methane monitoring.',
  },
  {
    role: 'Senior Mentor',
    org: 'Xi’an Jiaotong-Liverpool University Affiliated School',
    date: '2022 – 2023',
    detail: 'Taught STEM enrichment courses to a class of about 50 high school students.',
  },
  {
    role: 'Student Representative',
    org: 'School of Science, Xi’an Jiaotong-Liverpool University',
    date: '2021 – 2022',
    detail: 'Mentored junior undergraduates on coursework and academic planning.',
  },
];

/**
 * Projects: Question / Method / Finding, 1–2 sentences each. Leave `finding` empty when there is
 * no result to report; the row is then left out. `figure`: 'retraction-chart' | 'landfill-map'.
 * `category` must match one of the `researchFilters` ids below.
 */
export const research = [
  {
    id: 'retracted',
    title: 'Retracted but Not Forgotten: Consumer LLMs & Retracted Clinical Trials',
    org: 'Independent research · Sole author',
    role: 'Submitted to Scientometrics',
    date: 'Aug 2026 – Present',
    category: 'llm',
    featured: true,
    // Key numbers on the card (first navy, second gold). Same sources as the Finding below.
    stats: [
      { value: '2 in 3', label: 'answers still treated a retracted trial as valid' },
      { value: '≤2%', label: 'once the prompt mentioned the retraction' },
    ],
    question: 'Do ChatGPT, Gemini and Claude still present retracted clinical trials as valid evidence?',
    // 3,600 = 3,000 first-run responses + 600 repeats (llm-retracted-clinical-evidence/docs/STATUS.md)
    method:
      '100 retracted trials from Retraction Watch, each matched to a control on topic, year and design; 3,600 answers (3,000 plus 600 repeat runs), coded by an LLM coder that agreed with hand coding at κ = 0.96 (near-perfect).',
    finding:
      'About 2 in 3 answers treated retracted trials as valid, no different from controls. A retraction notice cut that to ≤2%; web search had mixed effects (ChatGPT 66% → 35%, Gemini 66% → 82%).',
    figure: 'retraction-chart',
    tags: ['LLM Audit', 'Matched Controls', 'GEE', 'Inter-rater Reliability', 'Python'],
    link: 'https://github.com/chesleyguo/llm-retracted-clinical-evidence',
    linkLabel: 'Code & data',
  },
  {
    id: 'methane',
    // numbers_audit.md: +41% naive detected-only mean (1-day group); −3% NPE
    stats: [
      { value: '+41%', label: 'bias from averaging only detected plumes at single-overpass sites' },
      { value: '−3%', label: 'bias with our selection-aware method' },
    ],
    title: 'Selection-Aware Inference for Landfill Methane',
    org: 'MDevEng capstone · BEST Lab, UC Berkeley',
    role: 'Advisor: Prof. Alice Agogino',
    date: 'Jul 2026 – Present',
    category: 'ml',
    featured: true,
    question:
      'How much methane do U.S. landfills emit when aircraft see each site on only a few days, and only report the plumes they catch?',
    // 593 / 107 ≈ 5.5 flight days per landfill
    method:
      'Simulation-based inference that models intermittent emission, detection limits and the “listed only if detected” rule, checked against exact MCMC, on 593 flight days over 107 landfills (about 5–6 per site).',
    // landfill_methane_dev/results/numbers_audit.md: naive detected-only mean, 1-day group +41%; NPE −3%
    finding:
      'In simulation, averaging only detected overpasses overstated single-overpass sites by 41%; our method cut the bias to −3%, with 90% intervals covering the truth 90–91% of the time.',
    // 2,641 = every landfill in the LMOP tables in landfill_methane_dev (landfill_locations.csv)
    also: 'Earlier, I audited EPA’s LMOP database of 2,641 landfills and built a methane dashboard now used by Squishy Robotics.',
    figure: 'landfill-map',
    tags: ['Simulation-Based Inference', 'Remote Sensing', 'Uncertainty', 'EPA GHGRP'],
  },
  {
    id: 'oakland',
    title: 'Causal Impact of Automated Speed Enforcement',
    org: 'UC Berkeley School of Information × Oakland DOT',
    role: 'Student team data scientist · Prof. Alex Hughes',
    date: 'Aug 2026 – Present',
    category: 'causal',
    featured: true,
    // 18 cameras: OakDOT six-month report (public)
    stats: [{ value: '18', label: 'speed safety cameras in Oakland’s pilot' }],
    question: 'Do Oakland’s 18 speed safety cameras change how people drive?',
    method:
      // rdit_speed_study: speed tubes cleaned for 2024, Jun 2025, Jul 2026; cameras live Jan 14, 2026
      'A regression discontinuity in time (RDiT) at the two rollout cutoffs separates the effect of camera warnings from the added effect of fines, on speed counts from 2024, 2025 and 2026 and camera violation records since the January 2026 launch, in a secure GCP environment (CPRA/CCPA).',
    finding: '',
    status: 'In progress; results expected Dec 2026.',
    figure: 'camera-map', // locations only, no results
    tags: ['Causal Inference', 'RDiT', 'Panel Data', 'GCP', 'Python'],
  },
  {
    id: 'cough',
    title: 'Cough Acoustics for Disease Prognosis',
    org: 'Shanghai Key Lab of Multidimensional Information Processing',
    role: 'Research Assistant · Prof. Jiangang Chen (ECNU)',
    date: 'Oct 2021 – Dec 2022',
    category: 'ml',
    question: 'Can cough recordings classify COVID-19 and predict how soon patients recover?',
    method:
      'Recordings from 78 hospital patients, grown to 535 samples with voice activity detection, denoising and augmentation; an XGBoost + Random Forest ensemble.',
    finding: '93.3% classification accuracy; recovery time predicted within 3 days.',
    tags: ['Audio ML', 'XGBoost', 'Random Forest', 'librosa'],
  },
  {
    id: 'metabolomics',
    title: 'Metabolomics of Sarcopenia & Aging',
    org: 'Global Health Institute, Duke Kunshan University',
    role: 'Health Research Data Analyst Intern · Prof. Chenkai Wu',
    date: 'Mar 2022 – Aug 2022',
    category: 'health',
    question: 'How are blood metabolites linked to sarcopenia, aging and mortality?',
    method:
      '249 metabolites from the UK Biobank (300k+ participants), analyzed with PCA and multinomial logistic regression, then Cox proportional hazards models for mortality risk.',
    finding: '',
    tags: ['UK Biobank', 'PCA', 'Survival Analysis', 'R'],
  },
  {
    id: 'belt-road',
    title: 'Belt and Road Health Cooperation Analysis',
    org: 'Vanke School of Public Health, Tsinghua University',
    role: 'Research Assistant · Prof. Kun Tang',
    date: 'Nov 2022 – Mar 2023',
    category: 'health',
    question: 'Does health cooperation with Belt and Road countries track their disease burden?',
    method:
      'Cleaned and mined medical cooperation memorandums signed since 2016 and linked them to IHME disease burden (DALYs) data in a multi-country evaluation model.',
    finding: '',
    tags: ['Text Mining', 'Global Health', 'IHME DALYs'],
  },
  {
    id: 'chatbot',
    title: 'AI Chatbot for Cross-Cultural Academic Search',
    org: 'School of Information Sciences, UIUC',
    role: 'Research Assistant · Prof. Yun Huang',
    date: 'Jan 2024 – May 2024',
    category: 'hci',
    question: 'How can a chatbot help students search academic literature across languages and cultures?',
    method:
      'Reviewed cross-cultural HCI research on academic information seeking and helped specify a multilingual, context-aware chatbot with digital library API integration.',
    finding: '',
    tags: ['HCI', 'Conversational AI', 'UX Research'],
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

// Research card figures
export const retractionChart = {
  aria: 'Bar chart: share of chatbot answers that treat a retracted trial as valid. ChatGPT: default 66%, with web search 35%, with a retraction notice 2% or less. Gemini: default 66%, with web search 82%, with a retraction notice 2% or less.',
  title: '% of answers treating a retracted trial as valid',
  series: ['Default', 'Web search', 'Retraction notice'],
  groups: [
    { name: 'ChatGPT', values: [66, 35, 2], labels: ['66%', '35%', '≤2%'] },
    { name: 'Gemini', values: [66, 82, 2], labels: ['66%', '82%', '≤2%'] },
  ],
  caption: 'Share of answers that treat a retracted trial as valid, by model and condition. Data: this study.',
};

export const landfillMap = {
  aria: (n, hollow) =>
    `Map of ${n} U.S. landfills surveyed by aircraft. Dot color and size show the overpass-mean methane emission; ${hollow} landfills were detected but not quantified and are drawn as hollow circles.`,
  measure: 'Overpass-mean emission, kg CH₄/h',
  unit: 'kg CH₄/h',
  hollow: 'Detected but not quantified',
  caption:
    'The 107 landfills in the airborne survey, sized and shaded by overpass-mean methane emission. Data: Cusworth et al. (2024), Science 383:1499.',
};

export const cameraMap = {
  aria: 'Map of Oakland’s city limits showing the locations of the 18 speed safety cameras in the pilot, spread from West and North Oakland to East Oakland.',
  camera: 'Speed safety camera (18)',
  limits: 'Oakland city limits',
  caption: 'Locations of the 18 speed safety cameras in Oakland’s pilot. Data: Oakland Department of Transportation.',
};

export const publications = [
  {
    authors: 'Guo, J.',
    title:
      'Retracted but not forgotten: A matched-control audit of how consumer large language models handle retracted clinical trials.',
    venue: 'Scientometrics (submitted)',
    status: 'Under review',
  },
  {
    authors: 'Guo, J., & Hughes, A.',
    title:
      'The effect of automated speed enforcement on driving behavior: Evidence from Oakland’s speed safety camera pilot.',
    status: 'Working paper',
  },
  {
    authors: 'Guo, J., & Agogino, A. M.',
    title:
      'Detected once, counted twice? Selection-aware simulation-based inference for landfill methane from sparse airborne surveys.',
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
    title: 'Optimization of seaport companies’ D&A systems based on system dynamics and evaluation models.',
    venue: 'Proceedings of SPIE, 12340, 1234003',
    status: 'Published',
    link: 'https://doi.org/10.1117/12.2652356',
  },
];
