import { Sponsor } from './types';

export const sponsors: Sponsor[] = [
  {
    id: 'tech-brand',
    name: 'TechMarka',
    logo: '/assets/sponsors/tech-brand-logo.png',
    description: 'Teknoloji dünyasının öncü markası',
    website: 'https://techmarka.com',
    items: [
      {
        id: 'tech-hoodie',
        name: 'Teknoloji Hoodie',
        type: 'outfit',
        image: '/assets/sponsors/tech-brand/hoodie.png',
        description: 'Şık ve teknolojik tasarımlı hoodie',
        requiredPoints: 100,
        sponsorId: 'tech-brand',
        limited: false
      },
      {
        id: 'smart-glasses',
        name: 'Akıllı Gözlük',
        type: 'accessory',
        image: '/assets/sponsors/tech-brand/glasses.png',
        description: 'Artırılmış gerçeklik gözlüğü',
        requiredPoints: 200,
        sponsorId: 'tech-brand',
        limited: true,
        endDate: new Date('2025-12-31')
      }
    ]
  },
  {
    id: 'eco-brand',
    name: 'YeşilDünya',
    logo: '/assets/sponsors/eco-brand-logo.png',
    description: 'Sürdürülebilir yaşam için çalışan marka',
    website: 'https://yesildunya.com',
    items: [
      {
        id: 'eco-tshirt',
        name: 'Geri Dönüşüm T-shirt',
        type: 'outfit',
        image: '/assets/sponsors/eco-brand/tshirt.png',
        description: 'Geri dönüştürülmüş malzemeden üretilmiş t-shirt',
        requiredPoints: 150,
        sponsorId: 'eco-brand',
        limited: false
      },
      {
        id: 'plant-effect',
        name: 'Yeşil Etki',
        type: 'effect',
        image: '/assets/sponsors/eco-brand/effect.png',
        description: 'Çevrenizdeki bitkileri canlandıran efekt',
        requiredPoints: 300,
        sponsorId: 'eco-brand',
        limited: false
      }
    ]
  },
  {
    id: 'edu-brand',
    name: 'EğitimDünyası',
    logo: '/assets/sponsors/edu-brand-logo.png',
    description: 'Eğitimde fırsat eşitliği için çalışan marka',
    website: 'https://egitimdünyasi.com',
    items: [
      {
        id: 'student-backpack',
        name: 'Akıllı Sırt Çantası',
        type: 'accessory',
        image: '/assets/sponsors/edu-brand/backpack.png',
        description: 'Teknolojik özelliklere sahip sırt çantası',
        requiredPoints: 250,
        sponsorId: 'edu-brand',
        limited: false
      },
      {
        id: 'graduation-effect',
        name: 'Mezuniyet Efekti',
        type: 'effect',
        image: '/assets/sponsors/edu-brand/effect.png',
        description: 'Mezuniyet töreni efekti',
        requiredPoints: 400,
        sponsorId: 'edu-brand',
        limited: true,
        endDate: new Date('2025-06-30')
      }
    ]
  },
  {
    id: 'art-brand',
    name: 'SanatDünyası',
    logo: '/assets/sponsors/art-brand-logo.png',
    description: 'Sanatı teknoloji ile buluşturan marka',
    website: 'https://sanatdunyasi.com',
    items: [
      {
        id: 'artist-outfit',
        name: 'Dijital Sanatçı Kıyafeti',
        type: 'outfit',
        image: '/assets/sponsors/art-brand/outfit.png',
        description: 'Yaratıcı sanatçılar için özel tasarım',
        requiredPoints: 200,
        sponsorId: 'art-brand',
        limited: false
      },
      {
        id: 'rainbow-brush',
        name: 'Gökkuşağı Fırça Efekti',
        type: 'effect',
        image: '/assets/sponsors/art-brand/effect.png',
        description: 'Renkli çizimler yapmanızı sağlayan efekt',
        requiredPoints: 350,
        sponsorId: 'art-brand',
        limited: true,
        endDate: new Date('2025-08-31')
      }
    ]
  }
];