import { SponsorEvent, EventTask, EventReward } from './types';

export const sponsorEvents: SponsorEvent[] = [
  {
    id: 'tech-week',
    sponsorId: 'tech-brand',
    name: 'Teknoloji Haftası',
    description: 'Bir hafta boyunca teknoloji odaklı görevleri tamamla',
    startDate: new Date('2025-06-01'),
    endDate: new Date('2025-06-07'),
    tasks: [
      {
        id: 'code-challenge',
        name: 'Kod Görevi',
        description: '3 programlama görevi tamamla',
        points: 100,
        requiredProgress: 3
      },
      {
        id: 'tech-quiz',
        name: 'Teknoloji Bilgi Yarışması',
        description: 'Bilgi yarışmasında en az 80 puan al',
        points: 150,
        requiredProgress: 80
      }
    ],
    rewards: [
      {
        type: 'outfit',
        itemId: 'tech-wizard-costume',
        name: 'Teknoloji Büyücüsü Kostümü',
        requiredPoints: 200
      },
      {
        type: 'effect',
        itemId: 'digital-aura',
        name: 'Dijital Aura Efekti',
        requiredPoints: 300
      }
    ]
  },
  {
    id: 'eco-challenge',
    sponsorId: 'eco-brand',
    name: 'Çevre Koruma Görevi',
    description: 'Çevre bilinci için özel görevler',
    startDate: new Date('2025-07-01'),
    endDate: new Date('2025-07-15'),
    tasks: [
      {
        id: 'eco-quiz',
        name: 'Çevre Bilgisi Testi',
        description: 'Çevre konulu teste katıl',
        points: 100,
        requiredProgress: 1
      },
      {
        id: 'recycling-project',
        name: 'Geri Dönüşüm Projesi',
        description: 'Geri dönüşüm projesi oluştur',
        points: 200,
        requiredProgress: 1
      }
    ],
    rewards: [
      {
        type: 'outfit',
        itemId: 'eco-warrior-suit',
        name: 'Çevre Savaşçısı Kıyafeti',
        requiredPoints: 250
      }
    ]
  },
  {
    id: 'education-fair',
    sponsorId: 'edu-brand',
    name: 'Eğitim Fuarı',
    description: 'Eğitim temalı etkinlikler',
    startDate: new Date('2025-08-01'),
    endDate: new Date('2025-08-14'),
    tasks: [
      {
        id: 'teach-friends',
        name: 'Arkadaşlarına Öğret',
        description: '3 arkadaşına ders anlat',
        points: 150,
        requiredProgress: 3
      },
      {
        id: 'create-course',
        name: 'Mini Kurs Oluştur',
        description: 'Bir konu hakkında mini kurs hazırla',
        points: 250,
        requiredProgress: 1
      }
    ],
    rewards: [
      {
        type: 'accessory',
        itemId: 'teacher-glasses',
        name: 'Öğretmen Gözlüğü',
        requiredPoints: 300
      },
      {
        type: 'effect',
        itemId: 'knowledge-sparkles',
        name: 'Bilgi Parıltıları',
        requiredPoints: 400
      }
    ]
  },
  {
    id: 'art-festival',
    sponsorId: 'art-brand',
    name: 'Dijital Sanat Festivali',
    description: 'Sanat ve teknoloji buluşması',
    startDate: new Date('2025-09-01'),
    endDate: new Date('2025-09-30'),
    tasks: [
      {
        id: 'digital-artwork',
        name: 'Dijital Sanat Eseri',
        description: 'Dijital bir sanat eseri oluştur',
        points: 200,
        requiredProgress: 1
      },
      {
        id: 'art-gallery',
        name: 'Sanal Galeri',
        description: 'Sanal bir galeri sergisi düzenle',
        points: 300,
        requiredProgress: 1
      }
    ],
    rewards: [
      {
        type: 'outfit',
        itemId: 'digital-artist-outfit',
        name: 'Dijital Sanatçı Kıyafeti',
        requiredPoints: 400
      },
      {
        type: 'effect',
        itemId: 'artistic-trail',
        name: 'Sanatsal İz Efekti',
        requiredPoints: 500
      }
    ]
  }
];