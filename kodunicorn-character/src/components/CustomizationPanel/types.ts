import { CharacterCustomization } from '../KodUnicorn/types';

export interface CustomizationPanelProps {
  currentCustomization: CharacterCustomization;
  onCustomizationChange: (customization: CharacterCustomization) => void;
  unlockedItems: string[];
}

export interface ColorOption {
  id: string;
  name: string;
  value: string;
}

export interface AccessoryOption {
  id: string;
  name: string;
  type: string;
  image: string;
  requiredLevel?: number;
}

export interface OutfitOption {
  id: string;
  name: string;
  image: string;
  sponsor?: string;
  requiredLevel?: number;
}