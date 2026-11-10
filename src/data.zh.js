/**
 * 中文版网站内容，结构与 ./data.js 保持一致。
 * 修改英文版内容时，请同步更新本文件。
 */

export const profile = {
  name: '郭嘉翊 (Chesley Guo)',
  shortName: '郭嘉翊',
  degree: '发展工程硕士',
  school: '加州大学伯克利分校',
  // 首屏打字机效果循环展示："我热爱 ___"
  passions: [
    '因果推断',
    '审计大语言模型',
    '甲烷监测',
    '打造 AI 产品',
    '处理真实世界的复杂数据',
    '用数据推动社会公益',
  ],
  tagline:
    '我把真实世界中纷繁复杂的数据转化为改进产品与政策的证据：从审计消费级大语言模型如何对待已撤稿的临床试验，到与奥克兰交通局合作评估测速摄像头的因果效应。',
  bio: [
    '我目前在加州大学伯克利分校攻读发展工程硕士（MDE，AI/数据分析方向），同时是美国国家科学基金会（NSF）“发展的数字化转型”研究培训项目（NRT）学员，预计 2026 年 12 月毕业。此前，我在西交利物浦大学学习两年生物信息学，之后转学至伊利诺伊大学厄巴纳-香槟分校，获得信息科学学士学位（数据科学方向）。',
    '我的工作横跨数据科学、人工智能与产品。我审计消费级大语言模型如何处理已撤稿的医学证据，为基于稀疏航测数据的填埋场甲烷排放构建基于模拟的推断框架，并利用多年面板数据评估测速摄像头的因果效应。在业界，我曾在 TikTok 设计大模型评测指标，并在腾讯为实时音视频产品开展数据驱动的实验。',
    '我重视能真正推动决策的严谨分析，也乐于和算法、产品与业务团队协作，把事情落地。',
  ],
  location: '美国加州伯克利',
  email: 'chesleyguo@berkeley.edu',
  linkedin: 'https://www.linkedin.com/in/jg1023',
  openTo: ['数据科学家', 'AI 产品经理', '研究与分析'],
  availability: '可于 2027 年 1 月起入职全职岗位',
};

export const socials = [
  { label: 'LinkedIn', url: profile.linkedin },
  { label: '邮箱', url: `mailto:${profile.email}` },
];

export const navLinks = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'experience', label: '经历' },
  { id: 'research', label: '研究' },
  { id: 'skills', label: '技能' },
  { id: 'honors', label: '荣誉' },
  { id: 'contact', label: '联系' },
];

export const stats = [
  { value: 3600, label: '条大模型回答，用于审计撤稿临床证据' },
  { value: 2641, label: '个填埋场，审计自美国环保署 LMOP 名录' },
  { value: 300, suffix: 'k+', label: '名 UK Biobank 参与者数据分析' },
  { value: 93.3, decimals: 1, suffix: '%', label: '咳嗽声学模型准确率' },
  { value: 800, suffix: '+', label: '位开发者，触达自腾讯 RTC 推广' },
  { value: 5, label: '篇论文与工作论文' },
  { value: 3, suffix: ' 年', label: '测速摄像头面板数据的因果建模' },
  { value: 200, suffix: '+', label: '小时志愿服务（UIUC）' },
];

export const education = [
  {
    school: '加州大学伯克利分校',
    degree: '发展工程硕士（MDE）',
    detail: 'AI/数据分析方向 · NSF“发展的数字化转型”研究培训项目（NRT）学员',
    courses:
      '实验与因果推断；数据分析的研究设计与应用；大数据与发展；发展的数字化转型；前端 Web 架构；公共利益技术诊所',
    gpa: '3.82',
    date: '预计 2026 年 12 月毕业',
  },
  {
    school: '伊利诺伊大学厄巴纳-香槟分校',
    degree: '信息科学学士',
    detail: '数据科学方向 · Edmund J. James 学者',
    courses: '数据可视化；信息科学研究设计；人机交互导论；数据科学伦理与政策；数据结构；高级软件设计',
    gpa: '3.91',
    date: '2023 – 2024',
  },
  {
    school: '西交利物浦大学',
    degree: '生物信息学本科（两年）',
    detail: '后转学至 UIUC · 中国苏州',
    courses:
      '细胞与分子生物学；生物化学；进化与遗传学；算法；数据库；Java 编程；实验设计；统计学；线性代数；多元微积分',
    date: '2020 – 2022',
  },
];

export const experience = [
  {
    company: '腾讯',
    role: '产品经理实习生',
    team: '云与智慧产业事业群：实时音视频（RTC）',
    date: '2025 年 5 月 – 2025 年 8 月',
    location: '中国上海',
    highlights: [
      '基于埋点与用户行为数据，推动 RTC 产品矩阵（对话式 AI、通话、会议、直播、游戏语音、美颜 AR）的功能优化。',
      '负责 LinkedIn 与 TikTok 的海外营销与本地化，产出技术博客、宣传视频和线上研讨会，触达 800+ 开发者与初创团队。',
      '搭建 100+ KOL 的联盟推广计划，获得 2.5k+ 曝光，并通过效果分成合作提升转化。',
      '设计 A/B 测试与内容生态图谱，比较不同内容策略，用数据优化营销活动。',
    ],
  },
  {
    company: '字节跳动（TikTok）',
    role: 'AI 策略产品经理实习生',
    team: 'TikTok AI 创新中心',
    date: '2024 年 11 月 – 2025 年 1 月',
    location: '中国上海',
    highlights: [
      '优化自研视频理解与文本生成大模型，提升描述准确率并减少幻觉。',
      '撰写 PRD，定义大模型核心能力（视频打标、摘要、问答），并设计准确性、语义相关性与逻辑推理等评测指标。',
      '协调算法工程师、数据标注供应商与基础设施团队，推进模型训练与上线。',
      '基于用户场景与反馈搭建指标看板，指导模型迭代。',
    ],
  },
  {
    company: '上海人工智能实验室',
    role: '研究实习生，OpenTrust 实验室',
    team: '大模型安全与可信 AI',
    date: '2024 年 6 月 – 2024 年 8 月',
    location: '中国上海',
    highlights: [
      '参与实验室基准（SALAD-Bench、MM-SafetyBench）上的大语言模型安全评测。',
      '负责 ICML 2024 TiFA 研讨会（可信多模态基础模型与 AI 智能体）的全球内容与社媒运营，依据互动数据迭代策略。',
      '支持 2024 世界人工智能大会（WAIC）安全论坛的会务运营，服务数百名参会者。',
    ],
  },
  {
    company: '中信建投证券股份有限公司',
    role: '财务计划与分析实习生',
    team: 'FP&A',
    date: '2023 年 7 月 – 2023 年 8 月',
    location: '中国常州',
    highlights: [
      '构建用于预测与预算的财务模型，提升准确性与效率。',
      '开展竞品与市场分析，并直接向高层管理者汇报增长建议。',
    ],
  },
];

export const research = [
  {
    title: '撤稿而未被遗忘：消费级大模型与已撤稿临床试验',
    org: '独立研究 · 独立作者',
    role: '论文已投稿至 Scientometrics',
    date: '2026 年 8 月 – 至今',
    category: 'llm',
    featured: true,
    description:
      '一项匹配对照审计，检验 ChatGPT、Gemini 和 Claude 是否会把已撤稿的临床试验当作有效证据。我将 100 项撤稿试验（来自 Retraction Watch）与在主题、年份和设计上匹配的未撤稿试验配对，在 3 种提问方式 × 3 种条件下收集 3,600 条回答，用经人工编码验证的 LLM 编码器（κ = 0.96）进行编码，并用 GEE 模型分析。约 2/3 的回答把撤稿结论当作有效，与对照组无显著差异；提示撤稿信息可将错误率降至 ≤2%，而联网搜索效果不一（GPT 66%→35%，Gemini 66%→82%）。',
    tags: ['大模型审计', '匹配对照', 'GEE', '编码一致性', 'Python'],
    link: 'https://github.com/chesleyguo/llm-retracted-clinical-evidence',
    linkLabel: '代码与数据 →',
  },
  {
    title: '自动测速执法的因果效应评估',
    org: '伯克利信息学院 × 奥克兰交通局（OakDOT）',
    role: '学生团队数据科学家 · 导师 Alex Hughes 教授',
    date: '2026 年 8 月 – 至今',
    category: 'causal',
    featured: true,
    description:
      '基于 3 年高频车速与违章数据构建双重差分模型，识别测速摄像头对车速分布、严重超速及重复违章行为的影响。所有工作均在符合 CPRA/CCPA 的安全 GCP 环境中进行。',
    tags: ['因果推断', '双重差分', '面板数据', 'GCP', 'Python'],
  },
  {
    title: '考虑选择偏差的填埋场甲烷排放推断',
    org: '伯克利工学院',
    role: '研究助理 · 导师 Alice Agogino 教授',
    date: '2026 年 7 月 – 至今',
    category: 'ml',
    featured: true,
    description:
      '构建基于模拟的推断（SBI）框架，利用稀疏航测数据（AVIRIS-NG、GAO；107 个美国填埋场、593 个飞行日）估计设施级时间平均甲烷排放，并给出校准的不确定性。模拟显示，对只飞过一次的设施，只对检测到的过境取平均会把排放高估约 41%；该框架通过建模未检出、仪器检测限和调查选择，把这一偏差降到约 −3%。数据管线将羽流观测与美国环保署 GHGRP Subpart HH 及 LMOP 记录对齐。此前，我用留一州验证审计了 LMOP 名录（2,641 个填埋场）并发布了公开交互工具，还搭建了现已被合作初创公司 Squishy Robotics 产品团队使用的甲烷看板。',
    tags: ['基于模拟的推断', '遥感', '不确定性量化', 'EPA GHGRP', '数据看板'],
  },
  {
    title: '基于咳嗽声学的疾病预后预测',
    org: '上海市多维度信息处理重点实验室',
    role: '研究助理 · 导师陈建刚教授（华东师范大学）',
    date: '2021 年 10 月 – 2022 年 12 月',
    category: 'ml',
    description:
      '在三甲医院采集 78 名患者的咳嗽录音，通过语音活动检测、降噪和数据增强将数据集扩展至 535 条样本。XGBoost + 随机森林集成模型准确率达 93.3%，康复时间预测误差在 3 天以内。',
    tags: ['音频机器学习', 'XGBoost', '随机森林', 'librosa', 'SciPy'],
  },
  {
    title: '肌少症与衰老的代谢组学研究',
    org: '昆山杜克大学全球健康研究中心',
    role: '健康研究数据分析实习生 · 导师吴晨凯教授',
    date: '2022 年 3 月 – 2022 年 8 月',
    category: 'health',
    description:
      '利用 PCA 与多项逻辑回归分析 UK Biobank（30 万+ 参与者）中的 249 种代谢物，研究代谢物、肌少症与衰老之间的关系，并构建 Cox 比例风险模型预测死亡风险。',
    tags: ['UK Biobank', 'PCA', '逻辑回归', '生存分析', 'R'],
  },
  {
    title: '“一带一路”卫生合作分析',
    org: '清华大学万科公共卫生与健康学院',
    role: '研究助理 · 导师唐昆教授',
    date: '2022 年 11 月 – 2023 年 3 月',
    category: 'health',
    description:
      '清洗并挖掘 2016 年以来与“一带一路”国家签订的医疗合作备忘录文本，并与 IHME 疾病负担（DALYs）数据关联，支持团队的多国评估模型。',
    tags: ['文本挖掘', '关键词提取', '全球健康', 'IHME DALYs'],
  },
  {
    title: '面向跨文化学术检索的 AI 聊天机器人',
    org: 'UIUC 信息科学学院',
    role: '研究助理 · 导师黄云教授',
    date: '2024 年 1 月 – 2024 年 5 月',
    category: 'hci',
    description:
      '梳理学术信息检索中的跨文化人机交互研究，参与设计一款支持多语言、上下文感知查询并接入数字图书馆 API 的 AI 聊天机器人。',
    tags: ['人机交互', '对话式 AI', '需求设计', '用户研究'],
  },
];

export const researchFilters = [
  { id: 'all', label: '全部' },
  { id: 'llm', label: '大模型评估' },
  { id: 'causal', label: '因果推断' },
  { id: 'ml', label: '机器学习' },
  { id: 'health', label: '健康数据科学' },
  { id: 'hci', label: '人机交互与 AI 产品' },
];

// 论文条目保留英文原始引用格式
export const publications = [
  {
    authors: 'Guo, J.',
    title:
      'Retracted but not forgotten: A matched-control audit of how consumer large language models handle retracted clinical trials.',
    venue: 'Submitted to Scientometrics',
    status: '审稿中',
  },
  {
    authors: 'Guo, J., & Hughes, A.',
    title:
      'The effect of automated speed enforcement on driving behavior: Evidence from Oakland’s speed safety camera pilot.',
    venue: 'Working paper',
    status: '工作论文',
  },
  {
    authors: 'Guo, J., & Agogino, A. M.',
    title:
      'Detected once, counted twice? Selection-aware simulation-based inference for landfill methane from sparse airborne surveys.',
    venue: 'Working paper',
    status: '工作论文',
  },
  {
    authors: 'Lu, H., Gu, L., Guo, J., Xu, L., et al.',
    year: '2023',
    title: 'Machine learning classification and recovery prediction of COVID-19 cough sounds.',
    venue: 'SSRN (Preprints with The Lancet), 4439141',
    status: '预印本',
    link: 'https://ssrn.com/abstract=4439141',
  },
  {
    authors: 'Shao, Y., Guo, J., Li, Z., Yan, W., & Zhu, Z.',
    year: '2022',
    title:
      'Optimization of seaport companies’ D&A systems based on system dynamics and evaluation models.',
    venue: 'Proceedings of SPIE, 12340, 1234003',
    status: '已发表',
    link: 'https://doi.org/10.1117/12.2652356',
  },
];

export const teaching = [
  {
    role: '科研导师',
    org: '伯克利本科生科研学徒计划（URAP）',
    date: '2026 – 至今',
    detail: '指导 2 名本科生开展 AI/机器学习用于甲烷监测的独立研究。',
  },
  {
    role: '高级导师',
    org: '西交利物浦大学附属学校',
    date: '2022 – 2023',
    detail: '为约 50 名高中生讲授 STEM 拓展课程。',
  },
  {
    role: '学生代表',
    org: '西交利物浦大学理学院',
    date: '2021 – 2022',
    detail: '为低年级本科生提供课程与学业规划指导。',
  },
];

export const skills = [
  {
    icon: '🐍',
    group: '编程与数据',
    items: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Statsmodels', 'SQL', 'R', 'Java'],
  },
  {
    icon: '📈',
    group: '统计与机器学习',
    items: [
      '双重差分',
      '基于模拟的推断',
      'GEE / 聚类模型',
      '匹配对照设计',
      '回归建模',
      'PCA',
      '生存分析',
      'XGBoost',
      '随机森林',
      '特征工程',
    ],
  },
  {
    icon: '🤖',
    group: 'AI 与大模型',
    items: [
      '大模型评测指标',
      '大模型审计',
      '安全基准评测',
      '提示工程',
      '少样本与思维链',
      '数据标注管理',
      'Claude Code',
      'Cursor',
      'GitHub Copilot',
    ],
  },
  {
    icon: '📊',
    group: '可视化与工具',
    items: ['Tableau', 'Power BI', 'Excel', '数据看板', 'Google Cloud Platform'],
  },
  {
    icon: '🧭',
    group: '产品与增长',
    items: ['PRD 与需求文档', '埋点设计', '用户画像', 'A/B 测试', '竞品分析', '本地化'],
  },
  {
    icon: '🎨',
    group: '设计与语言',
    items: [
      'Photoshop',
      'Illustrator',
      'Premiere Pro',
      '中文（母语）',
      '英语（流利）',
      '日语（基础）',
      '西班牙语（基础）',
    ],
  },
];

export const honors = [
  { year: '2025', title: '美国国家科学基金会（NSF）“发展的数字化转型”研究培训项目（NRT）' },
  { year: '2024', title: 'Phi Kappa Phi 荣誉学会' },
  { year: '2024', title: 'UIUC WeCU 学者（200+ 小时志愿服务）' },
  { year: '2023', title: 'MIT 政策黑客松前三名（医疗公平可及赛道）' },
  { year: '2023', title: 'UIUC Edmund J. James 学者（2023–2024）及院长嘉许名单（2023 秋）' },
  { year: '2023', title: 'Kaggle 竞赛专家（Competition Expert）' },
  { year: '2023', title: 'Google 高级数据分析证书' },
  { year: '2022', title: '美国大学生数学建模竞赛（ICM）Meritorious Winner' },
  { year: '2022', title: 'HarvardX 生命科学数据分析专业证书' },
  { year: '2021', title: '全国大学生数学建模竞赛国家二等奖' },
  { year: '2020', title: '亚太地区大学生数学建模竞赛（APMCM）区域三等奖' },
];

export const extensionStudy = [
  'MITx 统计与数据科学 MicroMasters：完成全部四门课程并获认证证书（2024）',
  '牛津机器学习暑期学校：机器学习 × 健康方向（2023）',
  '上海交大–清华–北大计算机科学国际暑期学校（2023）',
  '昆山杜克大学医疗大数据暑期项目：健康数据分析、机器学习、因果推断与随机对照试验（2022）',
  '清华大学万科公共卫生与健康学院暑期学校：变化世界中的全球健康（2022）',
];
