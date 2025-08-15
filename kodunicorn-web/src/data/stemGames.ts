import type { StemGame } from '../components/Education/types';

export const stemGames: StemGame[] = [
  {
    id: 'chemistry-lab',
    title: 'Kimyasal Deney Laboratuvarı',
    description: 'Güvenli kimyasal deneyler yaparak elementleri keşfedelim! 🧪',
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
    description: 'Basit robotlar tasarlayarak mühendislik becerilerini geliştir! 🤖',
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
    description: 'Eğlenceli matematik bulmacaları ile problem çözme becerilerini geliştir! 📐',
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
    description: 'Blok tabanlı kodlama ile karakterini yönlendir ve görevleri tamamla! 💻',
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
  },
  {
    id: 'space-explorer',
    title: 'Uzay Kaşifi',
    description: 'Gezegenleri keşfet, yıldızları öğren ve uzayın sırlarını çöz! 🚀',
    category: 'science',
    gameType: 'simulation',
    ageRange: { min: 7, max: 11 },
    difficulty: 'easy',
    duration: 35,
    learningObjectives: [
      'Güneş sistemi gezegenleri',
      'Uzay cisimleri',
      'Astronomi temelleri',
      'Keşif ve araştırma'
    ],
    materials: [
      'Uzay haritası',
      'Teleskop simülasyonu',
      'Gezegen kartları',
      'Uzay gemisi modeli'
    ],
    instructions: `
      <h3>Uzay Keşif Adımları</h3>
      <ol>
        <li>Uzay gemini hazırla</li>
        <li>Gezegenleri keşfet</li>
        <li>Yıldızları incele</li>
        <li>Uzay sırlarını çöz</li>
      </ol>
      
      <h3>Gezegenler</h3>
      <ul>
        <li>Merkür - En küçük gezegen</li>
        <li>Venüs - En sıcak gezegen</li>
        <li>Dünya - Evimiz</li>
        <li>Mars - Kızıl gezegen</li>
      </ul>
    `,
    gameConfig: {
      type: 'simulation',
      settings: {
        planets: [
          {
            id: 'mercury',
            name: 'Merkür',
            distance: '57.9 milyon km',
            funFact: 'Güneşe en yakın gezegen',
            points: 30
          },
          {
            id: 'venus',
            name: 'Venüs',
            distance: '108.2 milyon km',
            funFact: 'En sıcak gezegen',
            points: 40
          }
        ]
      },
      scoring: {
        pointsPerAction: 10,
        bonusPoints: 25,
        timeBonus: false
      }
    },
    interactiveElements: [
      {
        id: 'explore-planet',
        type: 'simulation',
        content: {
          simulationType: 'space-exploration',
          planets: ['mercury', 'venus', 'earth', 'mars'],
          tools: ['telescope', 'rover', 'satellite']
        },
        points: 35,
        completed: false
      }
    ],
    gamificationElements: [
      {
        id: 'astronaut-badge',
        type: 'badge',
        title: 'Küçük Astronot',
        description: 'İlk gezegenini keşfettin!',
        requirements: {
          type: 'completion',
          value: 1
        },
        reward: {
          type: 'badge',
          value: 'astronaut-badge'
        },
        progress: 0,
        completed: false
      }
    ],
    progress: 0,
    completed: false,
    unlocked: true,
    featured: false,
    tags: ['uzay', 'gezegen', 'astronomi', 'keşif', 'bilim']
  },
  {
    id: 'nature-detective',
    title: 'Doğa Dedektifi',
    description: 'Bitkileri, hayvanları ve doğanın sırlarını keşfet! 🌿',
    category: 'science',
    gameType: 'exploration',
    ageRange: { min: 6, max: 10 },
    difficulty: 'easy',
    duration: 25,
    learningObjectives: [
      'Bitki türleri',
      'Hayvan yaşamları',
      'Ekosistem',
      'Doğa koruma'
    ],
    materials: [
      'Büyüteç',
      'Doğa defteri',
      'Bitki kartları',
      'Hayvan sesleri'
    ],
    instructions: `
      <h3>Doğa Keşif Adımları</h3>
      <ol>
        <li>Çevreni gözlemle</li>
        <li>Bitkileri incele</li>
        <li>Hayvan seslerini dinle</li>
        <li>Notlarını al</li>
      </ol>
      
      <h3>Keşif Alanları</h3>
      <ul>
        <li>Park ve bahçeler</li>
        <li>Orman alanları</li>
        <li>Göl ve nehirler</li>
        <li>Şehir doğası</li>
      </ul>
    `,
    gameConfig: {
      type: 'exploration',
      settings: {
        habitats: [
          {
            id: 'forest',
            name: 'Orman',
            animals: ['sincap', 'kuş', 'böcek'],
            plants: ['ağaç', 'çiçek', 'mantar'],
            points: 35
          },
          {
            id: 'garden',
            name: 'Bahçe',
            animals: ['kelebek', 'arı', 'kuş'],
            plants: ['çiçek', 'sebze', 'ağaç'],
            points: 25
          }
        ]
      },
      scoring: {
        pointsPerAction: 8,
        bonusPoints: 20,
        timeBonus: false
      }
    },
    interactiveElements: [
      {
        id: 'identify-species',
        type: 'game',
        content: {
          gameType: 'nature-identification',
          species: ['bitki', 'hayvan', 'böcek'],
          tools: ['büyüteç', 'kamera', 'ses kayıt']
        },
        points: 30,
        completed: false
      }
    ],
    gamificationElements: [
      {
        id: 'nature-expert',
        type: 'badge',
        title: 'Doğa Uzmanı',
        description: '20 tür keşfettin!',
        requirements: {
          type: 'completion',
          value: 20
        },
        reward: {
          type: 'badge',
          value: 'nature-expert'
        },
        progress: 0,
        completed: false
      }
    ],
    progress: 0,
    completed: false,
    unlocked: true,
    featured: false,
    tags: ['doğa', 'bitki', 'hayvan', 'keşif', 'çevre']
  },
  {
    id: 'music-maker',
    title: 'Müzik Yapıcı',
    description: 'Matematik ve müziği birleştirerek kendi melodilerini yarat! 🎵',
    category: 'mathematics',
    gameType: 'creation',
    ageRange: { min: 8, max: 12 },
    difficulty: 'medium',
    duration: 50,
    learningObjectives: [
      'Müzik notaları',
      'Ritim ve tempo',
      'Matematiksel desenler',
      'Yaratıcılık'
    ],
    materials: [
      'Dijital müzik aleti',
      'Nota kartları',
      'Ritim aletleri',
      'Kayıt cihazı'
    ],
    instructions: `
      <h3>Müzik Yapım Adımları</h3>
      <ol>
        <li>Notaları öğren</li>
        <li>Ritim oluştur</li>
        <li>Melodi yarat</li>
        <li>Kaydet ve paylaş</li>
      </ol>
      
      <h3>Müzik Türleri</h3>
      <ul>
        <li>Klasik müzik</li>
        <li>Pop müzik</li>
        <li>Jazz</li>
        <li>Elektronik müzik</li>
      </ul>
    `,
    gameConfig: {
      type: 'creation',
      settings: {
        instruments: [
          {
            id: 'piano',
            name: 'Piyano',
            notes: ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'],
            difficulty: 'medium',
            points: 45
          },
          {
            id: 'drums',
            name: 'Davul',
            rhythms: ['4/4', '3/4', '6/8'],
            difficulty: 'easy',
            points: 30
          }
        ]
      },
      scoring: {
        pointsPerAction: 12,
        bonusPoints: 30,
        timeBonus: true
      }
    },
    interactiveElements: [
      {
        id: 'create-melody',
        type: 'simulation',
        content: {
          simulationType: 'music-creation',
          instruments: ['piano', 'guitar', 'drums'],
          notes: ['do', 're', 'mi', 'fa', 'sol', 'la', 'si']
        },
        points: 50,
        completed: false
      }
    ],
    gamificationElements: [
      {
        id: 'composer-badge',
        type: 'badge',
        title: 'Küçük Besteci',
        description: 'İlk melodini yarattın!',
        requirements: {
          type: 'completion',
          value: 1
        },
        reward: {
          type: 'badge',
          value: 'composer-badge'
        },
        progress: 0,
        completed: false
      }
    ],
    progress: 0,
    completed: false,
    unlocked: true,
    featured: false,
    tags: ['müzik', 'nota', 'ritim', 'yaratıcılık', 'sanat']
  },
  {
    id: 'art-engineer',
    title: 'Sanat Mühendisi',
    description: 'Geometrik şekillerle sanat eserleri yarat ve tasarım becerilerini geliştir! 🎨',
    category: 'engineering',
    gameType: 'creation',
    ageRange: { min: 7, max: 11 },
    difficulty: 'easy',
    duration: 40,
    learningObjectives: [
      'Geometrik şekiller',
      'Renk teorisi',
      'Tasarım prensipleri',
      'Yaratıcı düşünme'
    ],
    materials: [
      'Dijital çizim aracı',
      'Renk paleti',
      'Şekil şablonları',
      'Tasarım kartları'
    ],
    instructions: `
      <h3>Sanat Yapım Adımları</h3>
      <ol>
        <li>Şekilleri seç</li>
        <li>Renkleri belirle</li>
        <li>Kompozisyon oluştur</li>
        <li>Detayları ekle</li>
      </ol>
      
      <h3>Sanat Türleri</h3>
      <ul>
        <li>Soyut sanat</li>
        <li>Geometrik desenler</li>
        <li>Renk kompozisyonları</li>
        <li>Dijital sanat</li>
      </ul>
    `,
    gameConfig: {
      type: 'creation',
      settings: {
        shapes: [
          {
            id: 'circle',
            name: 'Daire',
            properties: ['yarıçap', 'çevre', 'alan'],
            difficulty: 'easy',
            points: 20
          },
          {
            id: 'square',
            name: 'Kare',
            properties: ['kenar', 'çevre', 'alan'],
            difficulty: 'easy',
            points: 20
          },
          {
            id: 'triangle',
            name: 'Üçgen',
            properties: ['kenar', 'açı', 'alan'],
            difficulty: 'medium',
            points: 30
          }
        ]
      },
      scoring: {
        pointsPerAction: 8,
        bonusPoints: 20,
        timeBonus: false
      }
    },
    interactiveElements: [
      {
        id: 'create-artwork',
        type: 'simulation',
        content: {
          simulationType: 'art-creation',
          tools: ['brush', 'shape', 'color-picker'],
          canvas: '800x600'
        },
        points: 40,
        completed: false
      }
    ],
    gamificationElements: [
      {
        id: 'artist-badge',
        type: 'badge',
        title: 'Küçük Sanatçı',
        description: 'İlk sanat eserini yarattın!',
        requirements: {
          type: 'completion',
          value: 1
        },
        reward: {
          type: 'badge',
          value: 'artist-badge'
        },
        progress: 0,
        completed: false
      }
    ],
    progress: 0,
    completed: false,
    unlocked: true,
    featured: false,
    tags: ['sanat', 'tasarım', 'geometri', 'renk', 'yaratıcılık']
  }
];



