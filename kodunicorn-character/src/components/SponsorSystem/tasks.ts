import { PeriodicTask, GroupActivity, Statistics } from './types';

export const weeklyTasks: PeriodicTask[] = [
  {
    id: 'weekly-code',
    title: 'Haftalık Kodlama',
    description: '5 programlama görevi tamamla',
    requiredProgress: 5,
    points: 100,
    type: 'weekly',
    category: 'coding',
    sponsorId: 'tech-brand'
  },
  {
    id: 'weekly-math',
    title: 'Matematik Ustası',
    description: '10 matematik problemi çöz',
    requiredProgress: 10,
    points: 150,
    type: 'weekly',
    category: 'math',
    sponsorId: 'edu-brand'
  },
  {
    id: 'weekly-eco',
    title: 'Çevre Dostu',
    description: '3 çevre projesi tamamla',
    requiredProgress: 3,
    points: 200,
    type: 'weekly',
    category: 'environment',
    sponsorId: 'eco-brand'
  }
];

export const monthlyTasks: PeriodicTask[] = [
  {
    id: 'monthly-project',
    title: 'Aylık Proje',
    description: 'Büyük bir proje geliştir',
    requiredProgress: 1,
    points: 500,
    type: 'monthly',
    category: 'project',
    sponsorId: 'tech-brand'
  },
  {
    id: 'monthly-art',
    title: 'Sanat Galerisi',
    description: '5 dijital sanat eseri oluştur',
    requiredProgress: 5,
    points: 400,
    type: 'monthly',
    category: 'art',
    sponsorId: 'art-brand'
  }
];

export const groupActivities: GroupActivity[] = [
  {
    id: 'group-hackathon',
    title: 'Mini Hackathon',
    description: 'Arkadaşlarınla bir günlük hackathon düzenle',
    minParticipants: 3,
    maxParticipants: 5,
    startDate: new Date('2025-07-01'),
    endDate: new Date('2025-07-02'),
    rewards: {
      points: 300,
      specialItems: ['hackathon-badge', 'team-outfit']
    },
    sponsorId: 'tech-brand',
    status: 'upcoming'
  },
  {
    id: 'group-study',
    title: 'Grup Çalışması',
    description: 'Matematik konularını birlikte çalışın',
    minParticipants: 2,
    maxParticipants: 4,
    startDate: new Date('2025-07-05'),
    endDate: new Date('2025-07-05'),
    rewards: {
      points: 200,
      specialItems: ['study-badge']
    },
    sponsorId: 'edu-brand',
    status: 'upcoming'
  },
  {
    id: 'eco-project',
    title: 'Çevre Projesi',
    description: 'Grup olarak bir çevre projesi geliştirin',
    minParticipants: 4,
    maxParticipants: 6,
    startDate: new Date('2025-07-10'),
    endDate: new Date('2025-07-15'),
    rewards: {
      points: 400,
      specialItems: ['eco-team-badge', 'nature-effect']
    },
    sponsorId: 'eco-brand',
    status: 'upcoming'
  }
];

export const defaultStatistics: Statistics = {
  totalPoints: 0,
  taskCompletion: {
    weekly: 0,
    monthly: 0,
    total: 0
  },
  sponsorProgress: {},
  achievements: {
    total: 0,
    byCategory: {}
  },
  groupActivities: {
    participated: 0,
    completed: 0,
    teamSize: 0
  },
  learningProgress: {
    coding: 0,
    math: 0,
    science: 0,
    art: 0,
    environment: 0
  }
};