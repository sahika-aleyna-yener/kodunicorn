import { DailyTask } from './types';

export const dailyTasks: DailyTask[] = [
  {
    id: 'daily-code-1',
    title: 'Günlük Kod Görevi',
    description: 'Basit bir algoritma problemi çöz',
    points: 50,
    category: 'coding',
    difficulty: 'easy',
    timeLimit: 30,
    sponsorId: 'tech-brand'
  },
  {
    id: 'daily-math-1',
    title: 'Matematik Problemi',
    description: '3 matematik sorusu çöz',
    points: 40,
    category: 'math',
    difficulty: 'easy',
    timeLimit: 20,
    sponsorId: 'edu-brand'
  },
  {
    id: 'daily-art-1',
    title: 'Günlük Çizim',
    description: 'Dijital bir çizim yap',
    points: 45,
    category: 'art',
    difficulty: 'medium',
    timeLimit: 45,
    sponsorId: 'art-brand'
  },
  {
    id: 'daily-eco-1',
    title: 'Çevre Bilinci',
    description: 'Geri dönüşüm hakkında bir quiz çöz',
    points: 35,
    category: 'environment',
    difficulty: 'easy',
    timeLimit: 15,
    sponsorId: 'eco-brand'
  },
  {
    id: 'daily-code-2',
    title: 'Kod İnceleme',
    description: 'Bir kod parçasını optimize et',
    points: 60,
    category: 'coding',
    difficulty: 'medium',
    timeLimit: 40,
    sponsorId: 'tech-brand'
  },
  {
    id: 'daily-science-1',
    title: 'Bilim Deneyi',
    description: 'Basit bir bilim deneyini tamamla',
    points: 55,
    category: 'science',
    difficulty: 'medium',
    timeLimit: 35,
    sponsorId: 'edu-brand'
  }
];