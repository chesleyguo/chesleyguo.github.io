/**
 * Interface strings (headings, buttons, form labels) for each language.
 * Portfolio content itself lives in ./data.js (English) and ./data.zh.js (Chinese).
 */
import * as en from './data';
import * as zh from './data.zh';

// First visit is always English (no browser-language detection). A language is remembered only
// after the visitor clicks the toggle, under LANG_KEY. The old 'lang' key was written on every
// visit by the previous site, so it is deliberately ignored.
export const DEFAULT_LANG = 'en';
export const LANG_KEY = 'lang-choice';

// Served from public/, so it respects Vite's base path on GitHub Pages
export const RESUME_URL = `${import.meta.env.BASE_URL}Jiayi_Guo_Resume_final.pdf`;

export const content = { en, zh };

export const ui = {
  en: {
    switchTo: '中文',
    switchLabel: 'Switch to Chinese',
    menu: 'Toggle navigation menu',
    interests: 'Research interests:',
    viewWork: 'View My Work',
    resume: 'CV (PDF)',
    getInTouch: 'Get In Touch',
    contactDirect: 'Contact directly',
    contactEmail: 'Email',
    contactLocation: 'Location',
    glance: 'At a glance',
    glanceEducation: 'Education',
    glanceAffiliations: 'Affiliations',
    photoAlt: 'Portrait of Jiayi (Chesley) Guo',
    directions: 'Research directions',
    seeProject: 'See the project',
    about: 'About Me',
    positionality: 'Positionality',
    education: 'Education',
    gpa: 'GPA',
    honors: 'Selected Honors',
    experience: 'Experience',
    teaching: 'Teaching & Mentoring',
    research: 'Research & Projects',
    filterLabel: 'Filter projects by area',
    question: 'Question',
    method: 'Method',
    finding: 'Finding',
    status: 'Status',
    publications: 'Publications & Working Papers',
    pubLink: 'Link',
    contactIntro: (next) =>
      `${next} Feel free to reach out about research collaborations or PhD programs, or just to say hello.`,
    name: 'Name *',
    email: 'Email *',
    subject: 'Subject',
    message: 'Message *',
    send: 'Send Message',
    sent: 'Thanks for reaching out! Your email app should open now.',
    defaultSubject: (name) => `Portfolio inquiry from ${name}`,
    rights: 'All rights reserved.',
    errName: 'Name must be at least 2 characters',
    errEmail: 'Please enter a valid email address',
    errMessage: 'Message must be at least 10 characters',
  },
  zh: {
    switchTo: 'EN',
    switchLabel: 'Switch to English',
    menu: '打开或关闭导航菜单',
    interests: '研究兴趣：',
    viewWork: '查看我的研究',
    resume: '简历 (PDF)',
    getInTouch: '联系我',
    contactDirect: '直接联系',
    contactEmail: '邮箱',
    contactLocation: '所在地',
    glance: '概览',
    glanceEducation: '教育背景',
    glanceAffiliations: '所属机构',
    photoAlt: '郭嘉翊的照片',
    directions: '研究方向',
    seeProject: '查看项目',
    about: '关于我',
    positionality: '立场与背景',
    education: '教育背景',
    gpa: 'GPA',
    honors: '主要荣誉',
    experience: '工作经历',
    teaching: '教学与指导',
    research: '研究与项目',
    filterLabel: '按领域筛选项目',
    question: '问题',
    method: '方法',
    finding: '发现',
    status: '进展',
    publications: '论文与工作论文',
    pubLink: '链接',
    contactIntro: (next) => `${next}欢迎就科研合作、博士项目联系我，或者只是打个招呼！`,
    name: '姓名 *',
    email: '邮箱 *',
    subject: '主题',
    message: '留言 *',
    send: '发送留言',
    sent: '感谢联系！你的邮件应用即将打开。',
    defaultSubject: (name) => `来自 ${name} 的网站留言`,
    rights: '保留所有权利。',
    errName: '姓名至少需要 2 个字符',
    errEmail: '请输入有效的邮箱地址',
    errMessage: '留言至少需要 10 个字符',
  },
};
