export interface CharacterColors {
  body: string;
  mane: string;
  horn: string;
  eyes: string;
  primary: string;
  secondary: string;
  accent: string;
  white: string;
  text: string;
}

export interface CharacterCustomization {
  colors: CharacterColors;
  maneStyle: 'straight' | 'wavy' | 'braided' | 'short' | 'long';
  accessories: string[];
  outfit: string | null;
  effects: string[];
}

export interface CharacterState {
  currentAnimation: 'idle' | 'jump' | 'celebrate' | 'dance' | 'fly' | 'study' | '';
  isInteracting: boolean;
  mood: 'happy' | 'thinking' | 'excited' | 'surprised' | 'proud' | 'focused' | 'normal';
  achievement: string | null;
  currentEffect?: 'sparkle' | 'levelUp' | 'codeRain' | 'rainbow' | 'achievement' | 'magicSpell' | null;
}

export interface CharacterProps {
  customization: CharacterCustomization;
  state: CharacterState;
  onInteraction?: (type: string) => void;
}

export interface AnimationConfig {
  name: string;
  duration: number;
  easing: string;
  keyframes: Record<string, any>;
}