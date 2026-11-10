/**
 * Interface strings (headings, buttons, form labels) for each language.
 * Portfolio content itself lives in ./data.js (English) and ./data.zh.js (Chinese).
 */
import * as en from './data';
import * as zh from './data.zh';

export const DEFAULT_LANG = 'zh';

export const content = { en, zh };

export const ui = {
  en: {
    switchTo: '中文',
    switchLabel: 'Switch to Chinese',
    greeting: 'Hi there, I’m',
    love: 'I love',
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',
    about: 'About Me',
    openTo: 'Currently Open To',
    education: 'Education',
    gpa: 'GPA',
    coreCourses: 'Core courses:',
    numbers: 'By the Numbers',
    experience: 'Experience',
    teaching: 'Teaching & Mentoring',
    research: 'Research & Projects',
    learnMore: 'Learn more →',
    publications: 'Publications & Working Papers',
    pubLink: 'Link →',
    skills: 'Skills & Tools',
    honors: 'Honors & Awards',
    extension: 'Extension Study',
    contactIntro:
      'I’m looking for full-time data science and AI product roles starting January 2027. Feel free to reach out about opportunities, research collaborations, or just to say hello!',
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
    greeting: '你好，我是',
    love: '我热爱',
    viewWork: '查看我的作品',
    getInTouch: '联系我',
    about: '关于我',
    openTo: '求职意向',
    education: '教育背景',
    gpa: 'GPA',
    coreCourses: '核心课程：',
    numbers: '数据一览',
    experience: '工作经历',
    teaching: '教学与指导',
    research: '研究与项目',
    learnMore: '了解更多 →',
    publications: '论文与工作论文',
    pubLink: '链接 →',
    skills: '技能与工具',
    honors: '荣誉与奖项',
    extension: '拓展学习',
    contactIntro:
      '我正在寻找 2027 年 1 月起的全职数据科学与 AI 产品岗位。欢迎就工作机会、科研合作联系我，或者只是打个招呼！',
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
