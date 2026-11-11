/**
 * 中文版网站内容，结构与 ./data.js 保持一致。修改英文版时请同步更新本文件。
 * 从首页移除的板块（数据一览、技能、拓展学习、完整荣誉列表、求职意向、旧版长项目描述）
 * 原样保存在 ./archive/main-data.zh.js。
 */

// 首页、关于我、联系三处共用的一句定位。拿到录取后可改为例如
//   '[大学] 信息科学博士新生 · 2027 年秋季入学'
export const NEXT_LINE = '正在申请 2027 年秋季入学的信息科学博士项目。';

export const profile = {
  name: '郭嘉翊 (Chesley Guo)',
  shortName: '郭嘉翊',
  degree: '发展工程硕士',
  school: '加州大学伯克利分校',
  // 首屏研究问题：留空时显示英文原文
  researchQuestion: '',
  researchInterests: ['AI 向善', '信息可信度', '数据驱动的发展'],
  tagline:
    '我把真实世界中纷繁复杂的数据转化为改进决策与政策的证据：从审计消费级大语言模型如何对待已撤稿的临床试验，到与奥克兰交通局合作评估测速摄像头的因果效应。',
  bio: [
    '我目前在加州大学伯克利分校攻读发展工程硕士（AI/数据分析方向，2026 年 12 月毕业），同时是 NSF“发展的数字化转型”研究培训项目（NRT）Fellow。我关心数据和 AI 在什么情况下值得信赖、可以用来支撑真实决策：聊天机器人如何对待已撤稿的科学证据，飞机只能飞过几次时填埋场到底排放多少甲烷，以及奥克兰的测速摄像头能否改变驾驶行为。此前我在 UIUC 获得信息科学学士学位，并曾在 TikTok 设计大模型评测指标、在腾讯开展 A/B 测试。在西交利物浦大学，我创办了学校第一个学生法律协会，把学校的制度规则转化为同学们可以照着做的步骤，帮助他们解决了 20 多起案件。',
  ],
  // 关于我 → 立场与背景（Positionality）：留空时显示英文原文
  positionality: '',
  photo: 'assets/headshot.jpg',
  portrait: 'assets/headshot-portrait.jpg',
  portraitCaption: 'BERKELEY, CA · ENGLISH / 中文',
  heroAffiliations: 'NSF NRT FELLOW · BEST LAB · BERKELEY I SCHOOL × OAKLAND DOT',
  location: '美国加州伯克利',
  email: 'chesleyguo@berkeley.edu',
  linkedin: 'https://www.linkedin.com/in/jg1023',
};

// 引言横幅：问题原文暂不翻译，显示英文
export const quote = {
  text: '',
  label: '我的研究背后的问题',
};

export const glance = {
  education: [
    { degree: '发展工程硕士，加州大学伯克利分校', year: '2026' },
    { degree: '信息科学学士，UIUC', year: '2024' },
    { degree: '生物信息学，西交利物浦大学', year: '2020–22' },
  ],
  affiliations: ['NSF NRT Fellow', 'BEST 实验室，Alice Agogino 教授', '伯克利信息学院 × 奥克兰交通局'],
};

export const directions = [
  {
    icon: 'chat',
    title: '大模型审计',
    text: '聊天机器人还会引用已撤稿的临床试验吗？约 2/3 的回答会；提示撤稿信息后降至 ≤2%。',
    project: 'retracted',
  },
  {
    icon: 'policy',
    title: '政策的因果评估',
    text: '奥克兰的 18 台测速摄像头能改变驾驶行为吗？与奥克兰交通局合作的断点回归研究。',
    project: 'oakland',
  },
  {
    icon: 'environment',
    title: '环境数据',
    text: '填埋场到底排放多少甲烷？模拟中，只对检出的羽流取平均会把只飞过一次的设施高估 41%；我们的方法把偏差降到 −3%。',
    project: 'methane',
  },
];

export const socials = [
  { label: 'LinkedIn', url: profile.linkedin },
  { label: '邮箱', url: `mailto:${profile.email}` },
];

export const navLinks = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'experience', label: '经历' },
  { id: 'research', label: '研究' },
  { id: 'contact', label: '联系' },
  { id: 'story', label: '我的故事', href: 'story.html' },
];

export const education = [
  {
    school: '加州大学伯克利分校',
    degree: '发展工程硕士（MDE）',
    detail: 'AI/数据分析方向 · NSF“发展的数字化转型”NRT Fellow',
    gpa: '3.82',
    date: '预计 2026 年 12 月毕业',
  },
  {
    school: '伊利诺伊大学厄巴纳-香槟分校',
    degree: '信息科学学士',
    detail: '数据科学方向 · Edmund J. James 学者',
    gpa: '3.91',
    date: '2023 – 2024',
  },
  {
    school: '西交利物浦大学',
    degree: '生物信息学（两年，后转学至 UIUC）',
    detail: '中国苏州',
    date: '2020 – 2022',
  },
];

export const honors = [
  { year: '2025', title: 'NSF“发展的数字化转型”研究培训项目（NRT）Fellow' },
  { year: '2024', title: 'Phi Kappa Phi 荣誉学会' },
  { year: '2023', title: 'UIUC Edmund J. James 学者及院长嘉许名单' },
  { year: '2023', title: 'MIT 政策黑客松前三名（医疗公平可及赛道）' },
  { year: '2021', title: '全国大学生数学建模竞赛国家二等奖' },
];

export const experience = [
  {
    company: '腾讯',
    role: '产品经理实习生',
    team: '云与智慧产业事业群：实时音视频（RTC）',
    date: '2025 年 5 月 – 2025 年 8 月',
    location: '中国上海',
    highlights: [
      '基于埋点与用户行为数据，推动 RTC 产品矩阵（对话式 AI、通话、会议、直播）的功能优化。',
      '设计 A/B 测试比较内容策略；开发者营销触达 800+ 开发者与初创团队。',
    ],
  },
  {
    company: '字节跳动（TikTok）',
    role: 'AI 策略产品经理实习生',
    team: 'TikTok AI 创新中心',
    date: '2024 年 11 月 – 2025 年 1 月',
    location: '中国上海',
    highlights: [
      '为自研视频理解与文本生成大模型撰写 PRD，并设计准确性、语义相关性与逻辑推理等评测指标。',
      '协调算法工程师、数据标注供应商与基础设施团队，推进模型从训练到上线。',
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
      '负责 ICML 2024 TiFA 研讨会的内容运营，以及 2024 世界人工智能大会安全论坛的会务。',
    ],
  },
  {
    company: '中信建投证券股份有限公司',
    role: '财务计划与分析实习生',
    team: 'FP&A',
    date: '2023 年 7 月 – 2023 年 8 月',
    location: '中国常州',
    highlights: ['构建预测与预算财务模型，并向高层管理者汇报竞品分析。'],
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

export const research = [
  {
    id: 'retracted',
    title: '撤稿而未被遗忘：消费级大模型与已撤稿临床试验',
    org: '独立研究 · 独立作者',
    role: '已投稿至 Scientometrics',
    date: '2026 年 8 月 – 至今',
    category: 'llm',
    featured: true,
    stats: [
      { value: '2/3', label: '的回答仍把已撤稿试验当作有效' },
      { value: '≤2%', label: '提示中说明已撤稿之后' },
    ],
    question: 'ChatGPT、Gemini 和 Claude 还会把已撤稿的临床试验当作有效证据吗？',
    method:
      '100 项来自 Retraction Watch 的撤稿试验，每项按主题、年份和设计匹配一项对照；共 3,600 条回答（首轮 3,000 条加 600 条重复运行），由与人工编码一致性达 κ = 0.96（几乎完全一致）的 LLM 编码器编码。',
    finding:
      '约 2/3 的回答把撤稿试验当作有效，与对照组没有差异。提示撤稿信息后降至 ≤2%；联网搜索效果不一（ChatGPT 66% → 35%，Gemini 66% → 82%）。',
    figure: 'retraction-chart',
    tags: ['大模型审计', '匹配对照', 'GEE', '编码者一致性', 'Python'],
    link: 'https://github.com/chesleyguo/llm-retracted-clinical-evidence',
    linkLabel: '代码与数据',
  },
  {
    id: 'methane',
    stats: [
      { value: '+41%', label: '只对检出的羽流取平均时，只飞过一次的设施的偏差' },
      { value: '−3%', label: '使用我们考虑选择偏差的方法后的偏差' },
    ],
    title: '考虑选择偏差的填埋场甲烷排放推断',
    org: '发展工程硕士毕业项目 · 伯克利 BEST 实验室',
    role: '导师：Alice Agogino 教授',
    date: '2026 年 7 月 – 至今',
    category: 'ml',
    featured: true,
    question: '飞机每个填埋场只飞过几天、且只报告捕捉到的羽流时，美国填埋场到底排放多少甲烷？',
    method:
      '基于模拟的推断，建模间歇性排放、仪器检测限和“检出才入册”的选择规则，并用精确 MCMC 校验；数据为 107 个填埋场的 593 个飞行日（平均每个设施 5–6 天）。',
    finding:
      '模拟中，对只飞过一次的设施，只对检出过境取平均会高估 41%；我们的方法把偏差降到 −3%，90% 区间覆盖真值的比例为 90–91%。',
    also: '此前，我审计了美国环保署 LMOP 数据库中的 2,641 个填埋场，并搭建了现已被 Squishy Robotics 使用的甲烷看板。',
    figure: 'landfill-map',
    tags: ['基于模拟的推断', '遥感', '不确定性量化', 'EPA GHGRP'],
  },
  {
    id: 'oakland',
    title: '自动测速执法的因果效应评估',
    org: '伯克利信息学院 × 奥克兰交通局（OakDOT）',
    role: '学生团队数据科学家 · Alex Hughes 教授',
    date: '2026 年 8 月 – 至今',
    category: 'causal',
    featured: true,
    stats: [{ value: '18', label: '台测速安全摄像头参与奥克兰试点' }],
    question: '奥克兰的 18 台测速安全摄像头能改变人们的驾驶行为吗？',
    method:
      '在两个上线节点做时间断点回归（RDiT），区分摄像头警告的效应与罚款的额外效应；使用三年高频车速与违章数据，在符合 CPRA/CCPA 的安全 GCP 环境中进行。',
    finding: '',
    status: '进行中，预计 2026 年 12 月出结果。',
    figure: 'camera-map',
    tags: ['因果推断', '时间断点回归', '面板数据', 'GCP', 'Python'],
  },
  {
    id: 'cough',
    title: '基于咳嗽声学的疾病预后预测',
    org: '上海市多维度信息处理重点实验室',
    role: '研究助理 · 陈建刚教授（华东师范大学）',
    date: '2021 年 10 月 – 2022 年 12 月',
    category: 'ml',
    question: '咳嗽录音能否用于识别新冠并预测患者多久康复？',
    method: '采集 78 名住院患者的录音，经语音活动检测、降噪和数据增强扩展到 535 条样本；使用 XGBoost + 随机森林集成模型。',
    finding: '分类准确率 93.3%；康复时间预测误差在 3 天以内。',
    tags: ['音频机器学习', 'XGBoost', '随机森林', 'librosa'],
  },
  {
    id: 'metabolomics',
    title: '肌少症与衰老的代谢组学研究',
    org: '昆山杜克大学全球健康研究中心',
    role: '健康研究数据分析实习生 · 吴晨凯教授',
    date: '2022 年 3 月 – 2022 年 8 月',
    category: 'health',
    question: '血液代谢物与肌少症、衰老和死亡风险有什么关系？',
    method: '分析 UK Biobank（30 万+ 参与者）中的 249 种代谢物，使用 PCA 与多项逻辑回归，再用 Cox 比例风险模型预测死亡风险。',
    finding: '',
    tags: ['UK Biobank', 'PCA', '生存分析', 'R'],
  },
  {
    id: 'belt-road',
    title: '“一带一路”卫生合作分析',
    org: '清华大学万科公共卫生与健康学院',
    role: '研究助理 · 唐昆教授',
    date: '2022 年 11 月 – 2023 年 3 月',
    category: 'health',
    question: '与“一带一路”国家的卫生合作是否与当地疾病负担相匹配？',
    method: '清洗并挖掘 2016 年以来签订的医疗合作备忘录，与 IHME 疾病负担（DALYs）数据关联，构建多国评估模型。',
    finding: '',
    tags: ['文本挖掘', '全球健康', 'IHME DALYs'],
  },
  {
    id: 'chatbot',
    title: '面向跨文化学术检索的 AI 聊天机器人',
    org: 'UIUC 信息科学学院',
    role: '研究助理 · 黄云教授',
    date: '2024 年 1 月 – 2024 年 5 月',
    category: 'hci',
    question: '聊天机器人如何帮助学生跨语言、跨文化检索学术文献？',
    method: '梳理学术信息检索中的跨文化人机交互研究，参与设计一款支持多语言、上下文感知查询并接入数字图书馆 API 的聊天机器人。',
    finding: '',
    tags: ['人机交互', '对话式 AI', '用户研究'],
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

export const retractionChart = {
  aria: '柱状图：把已撤稿试验当作有效的回答比例。ChatGPT：默认 66%，联网搜索 35%，提示撤稿 2% 及以下。Gemini：默认 66%，联网搜索 82%，提示撤稿 2% 及以下。',
  title: '把已撤稿试验当作有效的回答比例（%）',
  series: ['默认', '联网搜索', '提示撤稿'],
  groups: [
    { name: 'ChatGPT', values: [66, 35, 2], labels: ['66%', '35%', '≤2%'] },
    { name: 'Gemini', values: [66, 82, 2], labels: ['66%', '82%', '≤2%'] },
  ],
  caption: '按模型和条件统计、把已撤稿试验当作有效的回答比例。数据：本研究。',
};

export const landfillMap = {
  aria: (n, hollow) =>
    `美国 ${n} 个被航测的填埋场地图。圆点颜色和大小表示过境平均甲烷排放；其中 ${hollow} 个检出但未定量，画成空心圆。`,
  measure: '过境平均排放，kg CH₄/h',
  unit: 'kg CH₄/h',
  hollow: '检出但未定量',
  caption: '航测覆盖的 107 个填埋场，圆点大小和颜色表示过境平均甲烷排放。数据：Cusworth et al. (2024), Science 383:1499。',
};

export const cameraMap = {
  aria: '奥克兰市界地图，标出试点中 18 台测速安全摄像头的位置，分布在西奥克兰、北奥克兰到东奥克兰。',
  camera: '测速安全摄像头（18 台）',
  limits: '奥克兰市界',
  caption: '奥克兰试点中 18 台测速安全摄像头的位置。数据：奥克兰交通局。',
};

// 论文条目保留英文原始引用格式
export const publications = [
  {
    authors: 'Guo, J.',
    title:
      'Retracted but not forgotten: A matched-control audit of how consumer large language models handle retracted clinical trials.',
    venue: 'Scientometrics (submitted)',
    status: '审稿中',
  },
  {
    authors: 'Guo, J., & Hughes, A.',
    title:
      'The effect of automated speed enforcement on driving behavior: Evidence from Oakland’s speed safety camera pilot.',
    status: '工作论文',
  },
  {
    authors: 'Guo, J., & Agogino, A. M.',
    title:
      'Detected once, counted twice? Selection-aware simulation-based inference for landfill methane from sparse airborne surveys.',
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
    title: 'Optimization of seaport companies’ D&A systems based on system dynamics and evaluation models.',
    venue: 'Proceedings of SPIE, 12340, 1234003',
    status: '已发表',
    link: 'https://doi.org/10.1117/12.2652356',
  },
];
