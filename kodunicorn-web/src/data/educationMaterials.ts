import type { LearningMaterial } from '../components/Education/types';

export const educationMaterials: LearningMaterial[] = [
  {
    id: 'math-elem-1',
    title: 'Sayıları Tanıyalım',
    description: '1-100 arası sayıları öğrenelim ve sayma alıştırmaları yapalım',
    level: 'elementary',
    subject: 'math',
    content: `
      <h2>Sayıları Tanıyalım</h2>
      <p>Merhaba! Bugün 1'den 100'e kadar sayıları öğreneceğiz.</p>
      
      <h3>Sayı Sırası</h3>
      <p>1, 2, 3, 4, 5, 6, 7, 8, 9, 10...</p>
      
      <h3>Alıştırmalar</h3>
      <ul>
        <li>Sayıları sırayla sayın</li>
        <li>Eksik sayıları bulun</li>
        <li>Sayıları yazın</li>
      </ul>
    `,
    duration: 30,
    points: 50,
    requirements: [],
    interactiveElements: [
      {
        id: 'quiz-1',
        type: 'quiz',
        content: {
          questions: [
            {
              question: "5'ten sonra hangi sayı gelir?",
              options: ['4', '6', '7', '8'],
              correctAnswer: '6'
            },
            {
              question: "10'dan önce hangi sayı gelir?",
              options: ['8', '9', '11', '12'],
              correctAnswer: '9'
            }
          ]
        },
        points: 20,
        completed: false
      }
    ],
    gamificationElements: [
      {
        id: 'badge-1',
        type: 'badge',
        title: 'Sayı Ustası',
        description: 'İlk 10 sayıyı öğrendin!',
        requirements: {
          type: 'completion',
          value: 1
        },
        reward: {
          type: 'badge',
          value: 'number-master'
        },
        progress: 0,
        completed: false
      }
    ],
    progress: 0,
    completed: false,
    unlocked: true
  },
  {
    id: 'science-elem-1',
    title: 'Hava Durumu',
    description: 'Hava durumunu öğrenelim ve hava olaylarını tanıyalım',
    level: 'elementary',
    subject: 'science',
    content: `
      <h2>Hava Durumu</h2>
      <p>Güneşli, yağmurlu, karlı... Hava durumları hakkında öğrenelim!</p>
      
      <h3>Hava Durumu Türleri</h3>
      <ul>
        <li>☀️ Güneşli</li>
        <li>🌧️ Yağmurlu</li>
        <li>❄️ Karlı</li>
        <li>⛅ Bulutlu</li>
        <li>💨 Rüzgarlı</li>
      </ul>
    `,
    duration: 25,
    points: 40,
    requirements: [],
    interactiveElements: [
      {
        id: 'game-1',
        type: 'game',
        content: {
          gameType: 'matching',
          items: [
            { id: 'sunny', name: 'Güneşli', icon: '☀️' },
            { id: 'rainy', name: 'Yağmurlu', icon: '🌧️' },
            { id: 'snowy', name: 'Karlı', icon: '❄️' }
          ]
        },
        points: 15,
        completed: false
      }
    ],
    gamificationElements: [
      {
        id: 'achievement-1',
        type: 'achievement',
        title: 'Hava Durumu Uzmanı',
        description: '5 farklı hava durumunu öğrendin!',
        requirements: {
          type: 'completion',
          value: 1
        },
        reward: {
          type: 'points',
          value: 25
        },
        progress: 0,
        completed: false
      }
    ],
    progress: 0,
    completed: false,
    unlocked: true
  },
  {
    id: 'coding-elem-1',
    title: 'Algoritma Düşünme',
    description: 'Günlük hayattaki algoritmaları keşfedelim',
    level: 'elementary',
    subject: 'coding',
    content: `
      <h2>Algoritma Nedir?</h2>
      <p>Algoritma, bir problemi çözmek için izlenen adımlardır.</p>
      
      <h3>Günlük Hayat Örnekleri</h3>
      <ol>
        <li>Diş fırçalama algoritması</li>
        <li>Okula gitme algoritması</li>
        <li>Yemek yapma algoritması</li>
      </ol>
    `,
    duration: 35,
    points: 60,
    requirements: [],
    interactiveElements: [
      {
        id: 'exercise-1',
        type: 'exercise',
        content: {
          task: 'Kahvaltı hazırlama algoritması yazın',
          steps: ['Uyan', 'Yüzünü yıka', 'Kahvaltı hazırla', 'Ye']
        },
        points: 25,
        completed: false
      }
    ],
    gamificationElements: [
      {
        id: 'challenge-1',
        type: 'challenge',
        title: 'Algoritma Ustası',
        description: '3 farklı algoritma yaz',
        requirements: {
          type: 'completion',
          value: 1
        },
        reward: {
          type: 'character_item',
          value: 'algorithm-badge'
        },
        progress: 0,
        completed: false
      }
    ],
    progress: 0,
    completed: false,
    unlocked: true
  }
]; 