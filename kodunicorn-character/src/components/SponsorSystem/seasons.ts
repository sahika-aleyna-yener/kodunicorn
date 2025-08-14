import { Season } from './types';

export const seasons: Season[] = [
  {
    id: 'season-1',
    name: 'Teknoloji Mevsimi',
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-08-31'),
    theme: 'Geleceğin Teknolojileri',
    specialRewards: {
      bronze: ['tech-outfit-bronze', 'tech-effect-1'],
      silver: ['tech-outfit-silver', 'tech-effect-2', 'tech-accessory-1'],
      gold: ['tech-outfit-gold', 'tech-effect-3', 'tech-accessory-2', 'tech-badge']
    },
    leaderboard: [],
    challenges: [
      {
        id: 'tech-challenge-1',
        name: 'AI Asistanı',
        description: 'Basit bir AI chatbot geliştir',
        points: 300,
        progress: 0
      },
      {
        id: 'tech-challenge-2',
        name: 'Web Uygulaması',
        description: 'Kişisel bir web uygulaması oluştur',
        points: 400,
        progress: 0
      },
      {
        id: 'tech-challenge-3',
        name: 'Mobil Uygulama',
        description: 'Basit bir mobil uygulama geliştir',
        points: 500,
        progress: 0
      }
    ]
  },
  {
    id: 'season-2',
    name: 'Sanat ve Bilim',
    startDate: new Date('2025-09-01'),
    endDate: new Date('2025-11-30'),
    theme: 'Sanat ve Bilimin Buluşması',
    specialRewards: {
      bronze: ['art-outfit-bronze', 'science-effect-1'],
      silver: ['art-outfit-silver', 'science-effect-2', 'art-accessory-1'],
      gold: ['art-outfit-gold', 'science-effect-3', 'art-accessory-2', 'science-badge']
    },
    leaderboard: [],
    challenges: [
      {
        id: 'art-challenge-1',
        name: 'Dijital Galeri',
        description: 'Dijital sanat galerisi oluştur',
        points: 300,
        progress: 0
      },
      {
        id: 'science-challenge-1',
        name: 'Bilim Projesi',
        description: 'Interaktif bir bilim projesi geliştir',
        points: 400,
        progress: 0
      },
      {
        id: 'art-science-challenge',
        name: 'Sanat & Bilim',
        description: 'Bilim temalı bir sanat eseri oluştur',
        points: 500,
        progress: 0
      }
    ]
  }
];