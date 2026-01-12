
import { Program, Campus, NewsItem } from '../types';

export const programs: Program[] = [
  // Business
  { id: 'biz-1', title: 'BBA (Honors)', description: 'Flagship 4-year program with specializations in Finance, Marketing, and HR.', image: 'https://picsum.photos/seed/bba/800/600', category: 'Faculty of Management Sciences' },
  { id: 'biz-2', title: 'BS Accounting & Finance', description: 'Specialized degree for professional accounting careers and financial management.', image: 'https://picsum.photos/seed/acc/800/600', category: 'Faculty of Management Sciences' },
  { id: 'biz-3', title: 'MBA (1.5 / 2 Years)', description: 'Industry-leading graduate program for future corporate leaders.', image: 'https://picsum.photos/seed/mba/800/600', category: 'Faculty of Management Sciences' },
  
  // CS & IT
  { id: 'cs-1', title: 'BS Computer Science', description: 'Accredited by NCEAC, covering AI, Cloud Computing, and Software Engineering.', image: 'https://picsum.photos/seed/csc/800/600', category: 'Faculty of Computing & Technology' },
  { id: 'cs-2', title: 'BS Software Engineering', description: 'Focus on lifecycle, design, and deployment of large-scale software systems.', image: 'https://picsum.photos/seed/se/800/600', category: 'Faculty of Computing & Technology' },
  { id: 'cs-3', title: 'BS Artificial Intelligence', description: 'Cutting-edge program focusing on Machine Learning and Neural Networks.', image: 'https://picsum.photos/seed/ai/800/600', category: 'Faculty of Computing & Technology' },
  
  // Media
  { id: 'med-1', title: 'BS Media Sciences', description: 'Specializations in Film & TV Production, Advertising, and Journalism.', image: 'https://picsum.photos/seed/media1/800/600', category: 'Faculty of Media Sciences' },
  
  // Fashion
  { id: 'fash-1', title: 'Bachelor of Fashion Design', description: 'Intensive studio-based program for creative fashion industry professionals.', image: 'https://picsum.photos/seed/fashd/800/600', category: 'Faculty of Fashion & Design' },
  { id: 'fash-2', title: 'Bachelor of Textile Design', description: 'Exploring fabric construction, printing, and innovative textile surfaces.', image: 'https://picsum.photos/seed/tex/800/600', category: 'Faculty of Fashion & Design' },
  
  // Pharmacy & Health
  { id: 'pharm-1', title: 'Pharm.D', description: '5-year clinical program recognized by Pharmacy Council of Pakistan.', image: 'https://picsum.photos/seed/ph1/800/600', category: 'Faculty of Pharmacy' },
  { id: 'health-1', title: 'DPT (Doctor of Physical Therapy)', description: '5-year clinical doctoral degree in physical rehabilitation.', image: 'https://picsum.photos/seed/dpt/800/600', category: 'Faculty of Health Sciences' },
  
  // Engineering
  { id: 'eng-1', title: 'BE Software Engineering', description: 'PEC-accredited engineering program focusing on robust system architecture.', image: 'https://picsum.photos/seed/engse/800/600', category: 'Faculty of Engineering' },
  { id: 'eng-2', title: 'BE Electronic Engineering', description: 'PEC-accredited program covering circuits, robotics, and automation.', image: 'https://picsum.photos/seed/engee/800/600', category: 'Faculty of Engineering' }
];

export const campuses: Campus[] = [
  { id: 'main', name: 'Main Campus (Karachi)', address: 'Defence View, Shaheed-e-Millat Road (Ext.), Karachi', phone: '+92 21 111-264-264', email: 'info@iqra.edu.pk', image: 'https://picsum.photos/seed/khi-main/800/600' },
  { id: 'north', name: 'North Campus', address: 'Sector 7-B, North Nazimabad, Karachi', phone: '+92 21 36620802', email: 'info.north@iqra.edu.pk', image: 'https://picsum.photos/seed/khi-north/800/600' },
  { id: 'isl', name: 'Islamabad Campus', address: 'Plot No. 5, Sector H-9, Islamabad', phone: '+92 51 111-264-264', email: 'info.isl@iqra.edu.pk', image: 'https://picsum.photos/seed/isl-main/800/600' }
];

export const news: NewsItem[] = [
  { id: 'n1', date: 'Feb 15, 2025', title: 'Iqra University Ranks #1 in Business', summary: 'HEC Quality Assurance Agency recognizes IU for its academic standards.', image: 'https://picsum.photos/seed/rank/800/600' },
  { id: 'n2', date: 'Jan 10, 2025', title: 'Skill-Up Batch-III Launch', summary: 'Join our professional certification programs designed for the modern workforce.', image: 'https://picsum.photos/seed/skill/800/600' }
];
