export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requiredLevel?: number;
  requiredTasks?: string[];
  reward?: {
    type: 'accessory' | 'outfit' | 'effect' | 'color';
    itemId: string;
  };
}

export interface AchievementProgress {
  achievementId: string;
  progress: number;
  completed: boolean;
  completedAt?: Date;
}

export interface AchievementSystemProps {
  achievements: Achievement[];
  progress: AchievementProgress[];
  onAchievementComplete: (achievementId: string) => void;
  currentLevel: number;
}

export interface AchievementNotification {
  id: string;
  achievement: Achievement;
  timestamp: Date;
}