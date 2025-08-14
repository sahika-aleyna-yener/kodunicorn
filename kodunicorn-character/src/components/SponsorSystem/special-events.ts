import { SpecialEvent } from './types';

export const specialEvents: SpecialEvent[] = [
  {
    id: 'code-festival',
    name: 'Kod Festivali',
    description: 'Bir hafta boyunca sürecek kodlama etkinliği',
    startDate: new Date('2025-07-01'),
    endDate: new Date('2025-07-07'),
    type: 'festival',
    multiplier: 2,
    specialRules: [
      'Tüm kodlama görevlerinden 2x puan',
      'Ekstra başarı rozetleri',
      'Özel kostüm ödülleri'
    ],
    rewards: [
      {
        type: 'outfit',
        itemId: 'festival-coder-outfit',
        requirement: 1000
      },
      {
        type: 'effect',
        itemId: 'code-rain-effect',
        requirement: 2000
      },
      {
        type: 'accessory',
        itemId: 'festival-badge',
        requirement: 3000
      }
    ]
  },
  {
    id: 'math-competition',
    name: 'Matematik Olimpiyatı',
    description: 'Matematik yarışması',
    startDate: new Date('2025-08-01'),
    endDate: new Date('2025-08-02'),
    type: 'competition',
    multiplier: 3,
    specialRules: [
      'Süre sınırlı problemler',
      'Zorluk seviyesine göre ekstra puanlar',
      'Takım yarışması imkanı'
    ],
    rewards: [
      {
        type: 'outfit',
        itemId: 'math-genius-outfit',
        requirement: 800
      },
      {
        type: 'effect',
        itemId: 'number-rain-effect',
        requirement: 1500
      }
    ]
  },
  {
    id: 'eco-challenge',
    name: 'Çevre Haftası',
    description: 'Çevre temalı özel görevler',
    startDate: new Date('2025-09-01'),
    endDate: new Date('2025-09-07'),
    type: 'challenge',
    multiplier: 2.5,
    specialRules: [
      'Çevre projesi geliştirme',
      'Geri dönüşüm aktiviteleri',
      'Topluluk etkinlikleri'
    ],
    rewards: [
      {
        type: 'outfit',
        itemId: 'eco-warrior-outfit',
        requirement: 1200
      },
      {
        type: 'effect',
        itemId: 'nature-effect',
        requirement: 2000
      }
    ]
  }
];