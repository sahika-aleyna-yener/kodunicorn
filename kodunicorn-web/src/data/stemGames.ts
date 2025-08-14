import type { StemGame } from '../components/Education/types';

export const stemGames: StemGame[] = [
  {
    id: 'chemistry-lab',
    title: 'Kimyasal Deney Laboratuvarı',
    description: 'Güvenli kimyasal deneyler yaparak elementleri keşfedelim!',
    category: 'science',
    gameType: 'experiment',
    ageRange: { min: 8, max: 12 },
    difficulty: 'medium',
    duration: 45,
    learningObjectives: [
      'Kimyasal elementleri tanıma',
      'Güvenli deney yapma kuralları',
      'Renk değişimlerini gözlemleme',
      'Hipotez kurma ve test etme'
    ],
    materials: [
      'Güvenli kimyasal set',
      'Koruyucu gözlük',
      'Deney tüpleri',
      'Renk kartları'
    ],
    instructions: `
      <h3>Deney Kurulumu</h3>
      <ol>
        <li>Koruyucu ekipmanları takın</li>
        <li>Deney tüplerini hazırlayın</li>
        <li>Kimyasalları güvenli şekilde karıştırın</li>
        <li>Renk değişimlerini gözlemleyin</li>
      </ol>
      
      <h3>Güvenlik Kuralları</h3>
      <ul>
        <li>Asla kimyasalları tatmayın</li>
        <li>Her zaman koruyucu ekipman kullanın</li>
        <li>Deney sonrası ellerinizi yıkayın</li>
      </ul>
    `,
    gameConfig: {
      type: 'experiment',
      settings: {
        experiments: [
          {
            id: 'color-change',
            name: 'Renk Değişimi',
            chemicals: ['A', 'B'],
            expectedResult: 'Mavi renk',
            points: 50
          },
          {
            id: 'bubble-reaction',
            name: 'Köpük Reaksiyonu',
            chemicals: ['C', 'D'],
            expectedResult: 'Köpük oluşumu',
            points: 75
          }
        ]
      },
      scoring: {
        pointsPerAction: 10,
        bonusPoints: 25,
        timeBonus: true
      }
    },
    interactiveElements: [
      {
        id: 'experiment-1',
        type: 'simulation',
        content: {
          simulationType: 'chemistry',
          steps: [
            'Kimyasal A\'yı ekle',
            'Kimyasal B\'yi ekle',
            'Karıştır',
            'Gözlemle'
          ]
        },
        points: 30,
        completed: false
      }
    ],
    gamificationElements: [
      {
        id: 'chemist-badge',
        type: 'badge',
        title: 'Küçük Kimyager',
        description: 'İlk kimyasal deneyini başarıyla tamamladın!',
        requirements: {
          type: 'completion',
          value: 1
        },
        reward: {
          type: 'badge',
          value: 'chemist-badge'
        },
        progress: 0,
        completed: false
      }
    ],
    progress: 0,
    completed: false,
    unlocked: true,
    featured: true,
    tags: ['kimya', 'deney', 'bilim', 'renk', 'reaksiyon']
  },
  {
    id: 'robot-builder',
    title: 'Robot Yapıcı',
    description: 'Basit robotlar tasarlayarak mühendislik becerilerini geliştir!',
    category: 'engineering',
    gameType: 'building',
    ageRange: { min: 7, max: 11 },
    difficulty: 'easy',
    duration: 60,
    learningObjectives: [
      'Temel mühendislik prensipleri',
      'Parça birleştirme teknikleri',
      'Robot tasarımı',
      'Problem çözme becerileri'
    ],
    materials: [
      'Robot kiti',
      'Pil',
      'Motor',
      'Sensörler',
      'Bağlantı kabloları'
    ],
    instructions: `
      <h3>Robot Yapım Adımları</h3>
      <ol>
        <li>Robot gövdesini monte edin</li>
        <li>Motoru yerleştirin</li>
        <li>Sensörleri bağlayın</li>
        <li>Pili takın</li>
        <li>Test edin</li>
      </ol>
      
      <h3>Robot Türleri</h3>
      <ul>
        <li>Yürüyen robot</li>
        <li>Işık takip eden robot</li>
        <li>Ses algılayan robot</li>
      </ul>
    `,
    gameConfig: {
      type: 'building',
      settings: {
        robotTypes: [
          {
            id: 'walker',
            name: 'Yürüyen Robot',
            parts: ['gövde', 'motor', 'tekerlekler'],
            difficulty: 'easy',
            points: 40
          },
          {
            id: 'light-follower',
            name: 'Işık Takip Eden',
            parts: ['gövde', 'motor', 'ışık sensörü'],
            difficulty: 'medium',
            points: 60
          }
        ]
      },
      scoring: {
        pointsPerAction: 15,
        bonusPoints: 30,
        timeBonus: false
      }
    },
    interactiveElements: [
      {
        id: 'build-robot',
        type: 'simulation',
        content: {
          simulationType: 'robot-building',
          parts: ['gövde', 'motor', 'sensör', 'pil'],
          assemblySteps: 4
        },
        points: 45,
        completed: false
      }
    ],
    gamificationElements: [
      {
        id: 'engineer-badge',
        type: 'badge',
        title: 'Robot Mühendisi',
        description: 'İlk robotunu başarıyla yaptın!',
        requirements: {
          type: 'completion',
          value: 1
        },
        reward: {
          type: 'badge',
          value: 'robot-engineer'
        },
        progress: 0,
        completed: false
      }
    ],
    progress: 0,
    completed: false,
    unlocked: true,
    featured: true,
    tags: ['robot', 'mühendislik', 'yapım', 'teknoloji', 'tasarım']
  },
  {
    id: 'math-puzzle',
    title: 'Matematik Bulmacası',
    description: 'Eğlenceli matematik bulmacaları ile problem çözme becerilerini geliştir!',
    category: 'mathematics',
    gameType: 'puzzle',
    ageRange: { min: 6, max: 10 },
    difficulty: 'easy',
    duration: 30,
    learningObjectives: [
      'Temel matematik işlemleri',
      'Mantık yürütme',
      'Problem çözme',
      'Sayısal düşünme'
    ],
    materials: [
      'Bulmaca kartları',
      'Kalem ve kağıt',
      'Hesap makinesi (opsiyonel)'
    ],
    instructions: `
      <h3>Bulmaca Türleri</h3>
      <ul>
        <li>Sayı bulmacaları</li>
        <li>Matematik labirentleri</li>
        <li>Mantık soruları</li>
        <li>Geometrik bulmacalar</li>
      </ul>
      
      <h3>Çözüm Stratejileri</h3>
      <ol>
        <li>Problemi dikkatlice oku</li>
        <li>Bilinenleri yaz</li>
        <li>Adım adım çöz</li>
        <li>Cevabını kontrol et</li>
      </ol>
    `,
    gameConfig: {
      type: 'puzzle',
      settings: {
        puzzleTypes: [
          {
            id: 'number-sequence',
            name: 'Sayı Dizisi',
            description: 'Eksik sayıları bul',
            difficulty: 'easy',
            points: 20
          },
          {
            id: 'math-maze',
            name: 'Matematik Labirenti',
            description: 'Doğru yolu bul',
            difficulty: 'medium',
            points: 35
          }
        ]
      },
      scoring: {
        pointsPerAction: 5,
        bonusPoints: 15,
        timeBonus: true
      }
    },
    interactiveElements: [
      {
        id: 'solve-puzzle',
        type: 'game',
        content: {
          gameType: 'math-puzzle',
          puzzles: [
            {
              question: '2, 4, 6, ?, 10',
              answer: '8',
              explanation: 'Her sayı 2 artıyor'
            }
          ]
        },
        points: 25,
        completed: false
      }
    ],
    gamificationElements: [
      {
        id: 'math-wizard',
        type: 'achievement',
        title: 'Matematik Büyücüsü',
        description: '10 bulmaca çözdün!',
        requirements: {
          type: 'completion',
          value: 10
        },
        reward: {
          type: 'points',
          value: 100
        },
        progress: 0,
        completed: false
      }
    ],
    progress: 0,
    completed: false,
    unlocked: true,
    featured: false,
    tags: ['matematik', 'bulmaca', 'problem çözme', 'mantık', 'sayılar']
  },
  {
    id: 'coding-adventure',
    title: 'Kodlama Macerası',
    description: 'Blok tabanlı kodlama ile karakterini yönlendir ve görevleri tamamla!',
    category: 'technology',
    gameType: 'simulation',
    ageRange: { min: 8, max: 12 },
    difficulty: 'medium',
    duration: 40,
    learningObjectives: [
      'Algoritma düşünme',
      'Sıralı komutlar',
      'Döngüler ve koşullar',
      'Problem çözme'
    ],
    materials: [
      'Bilgisayar veya tablet',
      'Kodlama uygulaması',
      'Görev kartları'
    ],
    instructions: `
      <h3>Kodlama Temelleri</h3>
      <ul>
        <li>İleri git</li>
        <li>Sağa dön</li>
        <li>Sola dön</li>
        <li>Tekrarla</li>
        <li>Eğer... ise</li>
      </ul>
      
      <h3>Görev Türleri</h3>
      <ol>
        <li>Hedefe ulaşma</li>
        <li>Nesne toplama</li>
        <li>Engel aşma</li>
        <li>Labirent çözme</li>
      </ol>
    `,
    gameConfig: {
      type: 'simulation',
      settings: {
        levels: [
          {
            id: 'level-1',
            name: 'Başlangıç',
            goal: 'Karakteri hedefe ulaştır',
            commands: ['ileri', 'sağa dön'],
            points: 30
          },
          {
            id: 'level-2',
            name: 'Döngüler',
            goal: 'Tekrarlayan komutları kullan',
            commands: ['ileri', 'sağa dön', 'tekrarla'],
            points: 50
          }
        ]
      },
      scoring: {
        pointsPerAction: 8,
        bonusPoints: 20,
        timeBonus: true
      }
    },
    interactiveElements: [
      {
        id: 'code-character',
        type: 'simulation',
        content: {
          simulationType: 'coding',
          character: 'robot',
          grid: '5x5',
          obstacles: ['duvar', 'çukur'],
          goal: 'yıldız'
        },
        points: 40,
        completed: false
      }
    ],
    gamificationElements: [
      {
        id: 'coder-badge',
        type: 'badge',
        title: 'Küçük Programcı',
        description: 'İlk kodunu yazdın!',
        requirements: {
          type: 'completion',
          value: 1
        },
        reward: {
          type: 'badge',
          value: 'coder-badge'
        },
        progress: 0,
        completed: false
      }
    ],
    progress: 0,
    completed: false,
    unlocked: true,
    featured: true,
    tags: ['kodlama', 'programlama', 'algoritma', 'blok kod', 'oyun']
  }
];


