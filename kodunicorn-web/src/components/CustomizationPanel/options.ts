import type { ColorOption, AccessoryOption, OutfitOption } from './types';

export const colorOptions: Record<string, ColorOption[]> = {
  body: [
    { id: 'white', name: 'Beyaz', value: '#FFFFFF' },
    { id: 'cream', name: 'Krem', value: '#FFF5E6' },
    { id: 'lightPink', name: 'Açık Pembe', value: '#FFE6E6' }
  ],
  mane: [
    { id: 'orange', name: 'Turuncu', value: '#FF6B00' },
    { id: 'darkOrange', name: 'Koyu Turuncu', value: '#FF4500' },
    { id: 'gold', name: 'Altın', value: '#FFD700' }
  ],
  horn: [
    { id: 'black', name: 'Siyah', value: '#1A1A1A' },
    { id: 'silver', name: 'Gümüş', value: '#C0C0C0' },
    { id: 'gold', name: 'Altın', value: '#FFD700' }
  ],
  eyes: [
    { id: 'orange', name: 'Turuncu', value: '#FF6B00' },
    { id: 'brown', name: 'Kahverengi', value: '#8B4513' },
    { id: 'blue', name: 'Mavi', value: '#4169E1' }
  ]
};

export const maneStyles = [
  { id: 'straight', name: 'Düz' },
  { id: 'wavy', name: 'Dalgalı' },
  { id: 'braided', name: 'Örgülü' },
  { id: 'short', name: 'Kısa' },
  { id: 'long', name: 'Uzun' }
];

export const accessories: AccessoryOption[] = [
  {
    id: 'glasses-1',
    name: 'Klasik Gözlük',
    type: 'glasses',
    image: '/assets/accessories/glasses-1.png'
  },
  {
    id: 'hat-1',
    name: 'Mezuniyet Kepi',
    type: 'hat',
    image: '/assets/accessories/hat-1.png',
    requiredLevel: 5
  },
  {
    id: 'backpack-1',
    name: 'Kod Çantası',
    type: 'backpack',
    image: '/assets/accessories/backpack-1.png',
    requiredLevel: 3
  }
];

export const outfits: OutfitOption[] = [
  {
    id: 'casual-1',
    name: 'Günlük Kıyafet',
    image: '/assets/outfits/casual-1.png'
  },
  {
    id: 'coder-1',
    name: 'Programcı Hoodie',
    image: '/assets/outfits/coder-1.png',
    requiredLevel: 2
  },
  {
    id: 'brand-1',
    name: 'Marka Özel',
    image: '/assets/outfits/brand-1.png',
    sponsor: 'TechBrand',
    requiredLevel: 10
  }
];