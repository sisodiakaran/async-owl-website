import type { CareerRole, SkillCategory, Project } from '@/types'

export const SITE_CONFIG = {
  handle: 'AsyncOwl',
  fullName: 'Karan Singh Sisodia',
  tagline:
    'AI & Software Engineering Professional | Transforming ideas into intelligent systems | Driving innovation through data, automation & teamwork',
  currentRole: 'Technical Lead',
  currentCompany: 'LuminoGuru Pvt Ltd',
  location: 'Chandigarh, India',
  email: 'karansinghsisodia@gmail.com',
  philosophy: 'You are the one, who can make your environment happy',
  github: 'https://github.com/sisodiakaran',
  githubUsername: 'sisodiakaran',
  linkedin: 'https://linkedin.com/in/karansinghsisodia',
  twitter: 'https://x.com/sisodiakaran',
}

export const BIO_TEXT = `A programmer with lots of creativity and 16+ years of battle-tested experience across the full spectrum of software engineering. From writing firmware for ESP32 microcontrollers to architecting AI-driven cloud platforms, I thrive where hardware meets software meets intelligence.

I've led teams, shipped products, debugged midnight production fires, and still find joy in a clean git log. My work spans IoT ecosystems, agentic AI systems, big data pipelines, and everything in between.

When I'm not coding, I'm exploring smart home automation, contributing to open-source, or thinking about how technology can make everyday life a little more magical.`

export const LANGUAGES = [
  { name: 'Hindi', flag: '🇮🇳' },
  { name: 'English', flag: '🇬🇧' }
]

export const CAREER_TIMELINE: CareerRole[] = [
  {
    hash: 'a3f7d9c',
    title: 'Technical Lead',
    company: 'LuminoGuru Pvt Ltd',
    location: 'Chandigarh, India',
    startDate: 'Aug 2025',
    endDate: 'Present',
    description: [
      'Leading AI-driven product engineering teams',
      'Architecting scalable cloud-native solutions',
      'Driving innovation through agentic AI systems',
    ],
    era: 'lead',
  },
  {
    hash: 'b8e2f1a',
    title: 'Software Architect',
    company: 'Alfa Intellitech',
    location: 'Sri Ganganagar, Rajasthan',
    startDate: 'May 2019',
    endDate: 'Jul 2025',
    description: [
      'Designed and built IoT ecosystems with ESP32/ESP8266',
      'Implemented CAD/CAM integration pipelines',
      'Led architecture for Neo4j-powered knowledge graphs',
    ],
    era: 'senior',
  },
  {
    hash: 'c4d6a2b',
    title: 'Software Engineer',
    company: 'Flickyard Technology',
    location: 'Remote',
    startDate: 'Jan 2015',
    endDate: 'Apr 2019',
    description: [
      'Built full-stack web applications with PHP & JavaScript',
      'Developed Android applications for enterprise clients',
      'Integrated VOIP systems with Twilio',
    ],
    era: 'senior',
  },
  {
    hash: 'd9f3e7c',
    title: 'Tech Lead',
    company: 'Solution Beyond Software Dev Pvt Ltd',
    location: 'Chandigarh, India',
    startDate: 'Jan 2014',
    endDate: 'Dec 2014',
    description: [
      'Led a team of developers on client projects',
      'Established coding standards and review processes',
      'Managed project timelines and client communications',
    ],
    era: 'lead',
  },
  {
    hash: 'e2a1b5d',
    title: 'Software Engineer',
    company: 'Solution Beyond Software Dev Pvt Ltd',
    location: 'Chandigarh, India',
    startDate: 'Nov 2011',
    endDate: 'Jan 2014',
    description: [
      'Developed web applications using PHP frameworks',
      'Built MySQL database architectures',
      'Contributed to CI/CD pipeline setup',
    ],
    era: 'junior',
  },
  {
    hash: 'f7c8d4e',
    title: 'Freelance Web Developer',
    company: 'Flickyard Technology',
    location: 'Remote',
    startDate: 'Jan 2009',
    endDate: 'Oct 2011',
    description: [
      'Delivered custom websites for small businesses',
      'Built responsive frontends with HTML, CSS, JavaScript',
      'Managed client relationships and project delivery',
    ],
    era: 'freelance',
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'AI / ML',
    icon: 'Brain',
    skills: [
      { name: 'Agentic AI Systems', yearsOfExperience: 3, relatedProjects: ['LuminoGuru AI Platform'] },
      { name: 'Machine Learning', yearsOfExperience: 4, relatedProjects: ['Data Pipelines', 'Predictive Models'] },
      { name: 'Big Data', yearsOfExperience: 5, relatedProjects: ['Neo4j Knowledge Graphs'] },
      { name: 'Python', yearsOfExperience: 8, relatedProjects: ['AI Platform', 'Automation Scripts'] },
      { name: 'Neo4j', yearsOfExperience: 4, relatedProjects: ['Knowledge Graph Engine'] },
    ],
  },
  {
    name: 'IoT / Embedded',
    icon: 'Cpu',
    skills: [
      { name: 'ESP32 / ESP8266', yearsOfExperience: 6, relatedProjects: ['WLED Fork', 'ESP32S3 Firmware'] },
      { name: 'Node-RED', yearsOfExperience: 5, relatedProjects: ['node-red-contrib-atomberg'] },
      { name: 'WLED', yearsOfExperience: 4, relatedProjects: ['LED Controller'] },
      { name: 'Smart Home Systems', yearsOfExperience: 5, relatedProjects: ['Home Automation'] },
      { name: 'C / C++', yearsOfExperience: 10, relatedProjects: ['Firmware', 'Embedded Systems'] },
    ],
  },
  {
    name: 'Web / Backend',
    icon: 'Globe',
    skills: [
      { name: 'JavaScript / TypeScript', yearsOfExperience: 12, relatedProjects: ['Web Apps', 'Node-RED'] },
      { name: 'PHP', yearsOfExperience: 14, relatedProjects: ['Enterprise Platforms'] },
      { name: 'Node.js', yearsOfExperience: 8, relatedProjects: ['API Services'] },
      { name: 'MySQL', yearsOfExperience: 14, relatedProjects: ['Database Architecture'] },
      { name: 'HTML / CSS', yearsOfExperience: 16, relatedProjects: ['All Web Projects'] },
    ],
  },
  {
    name: 'DevOps',
    icon: 'GitBranch',
    skills: [
      { name: 'Git', yearsOfExperience: 12, relatedProjects: ['All Projects'] },
      { name: 'CI/CD', yearsOfExperience: 8, relatedProjects: ['Pipeline Automation'] },
      { name: 'Docker', yearsOfExperience: 5, relatedProjects: ['Containerized Deployments'] },
      { name: 'Linux', yearsOfExperience: 14, relatedProjects: ['Server Management'] },
    ],
  },
  {
    name: 'Mobile',
    icon: 'Smartphone',
    skills: [
      { name: 'Android (Java)', yearsOfExperience: 6, relatedProjects: ['Weather App', 'Enterprise Apps'] },
      { name: 'React Native', yearsOfExperience: 3, relatedProjects: ['Cross-platform Apps'] },
    ],
  },
  {
    name: 'Leadership',
    icon: 'Users',
    skills: [
      { name: 'Team Management', yearsOfExperience: 10, relatedProjects: ['All Lead Roles'] },
      { name: 'Architecture Design', yearsOfExperience: 8, relatedProjects: ['System Architecture'] },
      { name: 'VOIP / Twilio', yearsOfExperience: 5, relatedProjects: ['Communication Platforms'] },
      { name: 'Project Planning', yearsOfExperience: 10, relatedProjects: ['Client Projects'] },
    ],
  },
]

export const FEATURED_PROJECTS: Project[] = [
  {
    name: 'node-red-contrib-atomberg',
    repo: 'sisodiakaran/node-red-contrib-atomberg',
    description: 'Node-RED integration for Atomberg smart fans — control and automate your ceiling fans through Node-RED flows.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    url: 'https://github.com/sisodiakaran/node-red-contrib-atomberg',
  },
  {
    name: 'WLED Fork',
    repo: 'sisodiakaran/WLED',
    description: 'Custom fork of WLED — LED strip controller for ESP8266/ESP32 with extended features and custom effects.',
    language: 'C++',
    languageColor: '#f34b7d',
    url: 'https://github.com/sisodiakaran/WLED',
  },
  {
    name: 'Android Weather App',
    repo: 'AlfaIntellitech/android_weather',
    description: 'A clean Android weather application built with Java for Alfa Intellitech, featuring real-time forecasts.',
    language: 'Java',
    languageColor: '#b07219',
    url: 'https://github.com/AlfaIntellitech/android_weather',
  },
  {
    name: 'ESP32S3 Firmware',
    repo: 'sisodiakaran/esp32s3-msc-test',
    description: 'MSC test firmware for ESP32-S3 — USB Mass Storage Class implementation for embedded testing.',
    language: 'C',
    languageColor: '#555555',
    url: 'https://github.com/sisodiakaran/esp32s3-msc-test',
  },
]

export const BOOT_SEQUENCE_LINES = [
  '> Initializing AsyncOwl v16.0...',
  '> Loading: Karan Singh Sisodia',
  '> Status: Technical Lead @ LuminoGuru',
  '> Location: Chandigarh, India',
  '> Stack: AI \u2022 IoT \u2022 Firmware \u2022 Cloud',
  '> [\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 100%',
  '> Ready. \ud83e\udd89',
]

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]
