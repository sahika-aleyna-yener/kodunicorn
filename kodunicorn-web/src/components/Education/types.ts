export type EducationLevel = 'elementary' | 'middle' | 'general';

export type SubjectType =
  | 'math'
  | 'science'
  | 'coding'
  | 'life-skills'
  | 'general-knowledge'
  | 'stem-games';

export type StemGameType = 
  | 'puzzle'
  | 'simulation'
  | 'experiment'
  | 'building'
  | 'discovery'
  | 'challenge'
  | 'exploration'
  | 'creation';

export interface StemGame {
  id: string;
  title: string;
  description: string;
  category: 'science' | 'technology' | 'engineering' | 'mathematics';
  gameType: StemGameType;
  ageRange: {
    min: number;
    max: number;
  };
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number; // dakika cinsinden
  learningObjectives: string[];
  materials?: string[]; // gerekli materyaller
  instructions: string;
  gameConfig: {
    type: StemGameType;
    settings: any; // oyun özel ayarları
    scoring: {
      pointsPerAction: number;
      bonusPoints: number;
      timeBonus: boolean;
    };
  };
  interactiveElements: InteractiveElement[];
  gamificationElements: GamificationElement[];
  progress: number;
  completed: boolean;
  unlocked: boolean;
  featured: boolean; // öne çıkan oyun mu?
  tags: string[]; // arama için etiketler
}

export interface LearningMaterial {
  id: string;
  title: string;
  description: string;
  level: EducationLevel;
  subject: SubjectType;
  content: string;
  duration: number; // dakika cinsinden
  points: number;
  requirements?: string[];
  interactiveElements: InteractiveElement[];
  gamificationElements: GamificationElement[];
  progress: number;
  completed: boolean;
  unlocked: boolean;
}

export interface InteractiveElement {
  id: string;
  type: 'quiz' | 'game' | 'simulation' | 'exercise';
  content: any; // Quiz soruları, oyun konfigürasyonu vs.
  points: number;
  completed: boolean;
}

export interface GamificationElement {
  id: string;
  type: 'achievement' | 'badge' | 'reward' | 'challenge';
  title: string;
  description: string;
  requirements: {
    type: 'points' | 'completion' | 'time';
    value: number;
  };
  reward: {
    type: 'points' | 'badge' | 'character_item';
    value: number | string;
  };
  progress: number;
  completed: boolean;
}

export interface StudentProgress {
  userId: string;
  level: EducationLevel;
  totalPoints: number;
  completedMaterials: string[]; // materyal ID'leri
  achievements: {
    id: string;
    earnedAt: Date;
  }[];
  currentStreak: number;
  lastActivityDate: Date;
  favoriteSubjects: SubjectType[];
  learningPath: {
    current: string; // şu anki materyal ID
    next: string[]; // önerilen sonraki materyal ID'leri
  };
}

export interface EducationStats {
  totalMaterialsCompleted: number;
  totalPointsEarned: number;
  averageScore: number;
  timeSpent: number; // dakika cinsinden
  subjectBreakdown: {
    subject: SubjectType;
    completed: number;
    inProgress: number;
  }[];
  achievements: {
    total: number;
    recent: {
      id: string;
      earnedAt: Date;
    }[];
  };
}

export interface EducationSystemProps {
  currentUser: {
    id: string;
    level: EducationLevel;
  };
  materials: LearningMaterial[];
  progress: StudentProgress;
  stats: EducationStats;
  onMaterialComplete: (materialId: string) => void;
  onPointsEarned: (points: number) => void;
  onAchievementEarned: (achievementId: string) => void;
  onProgressUpdate: (progress: Partial<StudentProgress>) => void;
}