import type { Achievement } from './types';

export const achievements: Achievement[] = [
  {
    id: 'first-steps',
    title: 'İlk Adımlar',
    description: 'KodUnicorn dünyasına hoş geldin!',
    icon: '/assets/achievements/first-steps.png',
    reward: {
      type: 'accessory',
      itemId: 'welcome-badge'
    }
  },
  {
    id: 'quick-learner',
    title: 'Hızlı Öğrenen',
    description: '5 dersi tamamla',
    icon: '/assets/achievements/quick-learner.png',
    requiredLevel: 2,
    reward: {
      type: 'outfit',
      itemId: 'student-uniform'
    }
  },
  {
    id: 'code-master',
    title: 'Kod Ustası',
    description: 'İlk programını yaz',
    icon: '/assets/achievements/code-master.png',
    requiredLevel: 3,
    requiredTasks: ['complete-first-code'],
    reward: {
      type: 'effect',
      itemId: 'code-sparkles'
    }
  },
  {
    id: 'team-player',
    title: 'Takım Oyuncusu',
    description: '3 arkadaşınla birlikte çalış',
    icon: '/assets/achievements/team-player.png',
    requiredLevel: 5,
    reward: {
      type: 'accessory',
      itemId: 'friendship-badge'
    }
  },
  {
    id: 'creative-genius',
    title: 'Yaratıcı Deha',
    description: 'Kendi projenizi oluşturun',
    icon: '/assets/achievements/creative-genius.png',
    requiredLevel: 8,
    requiredTasks: ['create-project'],
    reward: {
      type: 'effect',
      itemId: 'rainbow-trail'
    }
  },
  {
    id: 'problem-solver',
    title: 'Problem Çözücü',
    description: '10 zorlu görevi tamamla',
    icon: '/assets/achievements/problem-solver.png',
    requiredLevel: 10,
    reward: {
      type: 'outfit',
      itemId: 'genius-costume'
    }
  },
  {
    id: 'math-wizard',
    title: 'Matematik Sihirbazı',
    description: 'Matematik bölümünü yüksek puanla tamamla',
    icon: '/assets/achievements/math-wizard.png',
    requiredLevel: 4,
    requiredTasks: ['complete-math-section'],
    reward: {
      type: 'effect',
      itemId: 'magic-numbers'
    }
  },
  {
    id: 'science-explorer',
    title: 'Bilim Kaşifi',
    description: 'Tüm bilim deneylerini tamamla',
    icon: '/assets/achievements/science-explorer.png',
    requiredLevel: 6,
    requiredTasks: ['complete-science-experiments'],
    reward: {
      type: 'outfit',
      itemId: 'scientist-coat'
    }
  },
  {
    id: 'digital-artist',
    title: 'Dijital Sanatçı',
    description: 'İlk dijital sanat projenizi oluşturun',
    icon: '/assets/achievements/digital-artist.png',
    requiredLevel: 7,
    requiredTasks: ['create-digital-art'],
    reward: {
      type: 'effect',
      itemId: 'artistic-sparkles'
    }
  },
  {
    id: 'eco-warrior',
    title: 'Çevre Savaşçısı',
    description: 'Çevre koruma projesi oluştur',
    icon: '/assets/achievements/eco-warrior.png',
    requiredLevel: 9,
    requiredTasks: ['create-eco-project'],
    reward: {
      type: 'outfit',
      itemId: 'eco-costume'
    }
  },
  {
    id: 'language-master',
    title: 'Dil Ustası',
    description: 'İngilizce bölümünü tamamla',
    icon: '/assets/achievements/language-master.png',
    requiredLevel: 5,
    requiredTasks: ['complete-english-section'],
    reward: {
      type: 'accessory',
      itemId: 'language-badge'
    }
  },
  {
    id: 'helper',
    title: 'Yardımsever',
    description: '5 arkadaşına ders konusunda yardım et',
    icon: '/assets/achievements/helper.png',
    requiredLevel: 3,
    requiredTasks: ['help-friends'],
    reward: {
      type: 'effect',
      itemId: 'helping-hearts'
    }
  }
];