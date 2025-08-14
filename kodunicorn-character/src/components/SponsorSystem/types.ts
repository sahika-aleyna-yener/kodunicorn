export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  items: SponsorItem[];
  campaignEndDate?: Date;
}

export interface SponsorItem {
  id: string;
  name: string;
  type: 'outfit' | 'accessory' | 'effect';
  image: string;
  description: string;
  requiredPoints: number;
  sponsorId: string;
  limited: boolean;
  endDate?: Date;
}

export interface SponsorProgress {
  sponsorId: string;
  points: number;
  unlockedItems: string[];
}

export interface EventTask {
  id: string;
  name: string;
  description: string;
  points: number;
  requiredProgress: number;
}

export interface EventReward {
  type: 'outfit' | 'accessory' | 'effect';
  itemId: string;
  name: string;
  requiredPoints: number;
}

export interface SponsorEvent {
  id: string;
  sponsorId: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  tasks: EventTask[];
  rewards: EventReward[];
}

export interface EventProgress {
  eventId: string;
  taskProgress: Record<string, number>;
  completedTasks: string[];
  earnedRewards: string[];
  totalPoints: number;
}

export interface FriendInvite {
  id: string;
  inviterId: string;
  inviteeEmail: string;
  status: 'pending' | 'accepted' | 'expired';
  createdAt: Date;
  expiresAt: Date;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  points: number;
  rank: number;
  sponsorPoints: Record<string, number>;
}

export interface PeriodicTask {
  id: string;
  title: string;
  description: string;
  requiredProgress: number;
  points: number;
  type: 'weekly' | 'monthly';
  category: 'coding' | 'math' | 'science' | 'art' | 'environment' | 'project';
  sponsorId: string;
}

export interface TaskProgress {
  taskId: string;
  currentProgress: number;
  completed: boolean;
  completedAt?: Date;
}

export interface GroupActivity {
  id: string;
  title: string;
  description: string;
  minParticipants: number;
  maxParticipants: number;
  startDate: Date;
  endDate: Date;
  rewards: {
    points: number;
    specialItems: string[];
  };
  sponsorId: string;
  status: 'upcoming' | 'active' | 'completed' | 'cancelled';
}

export interface GroupParticipant {
  userId: string;
  username: string;
  joinedAt: Date;
  role: 'leader' | 'member';
}

export interface Statistics {
  totalPoints: number;
  taskCompletion: {
    weekly: number;
    monthly: number;
    total: number;
  };
  sponsorProgress: Record<string, number>;
  achievements: {
    total: number;
    byCategory: Record<string, number>;
  };
  groupActivities: {
    participated: number;
    completed: number;
    teamSize: number;
  };
  learningProgress: {
    coding: number;
    math: number;
    science: number;
    art: number;
    environment: number;
  };
}

export interface DailyTask {
  id: string;
  title: string;
  description: string;
  points: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number; // minutes
  sponsorId?: string;
}

export interface Season {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  theme: string;
  specialRewards: {
    bronze: string[];
    silver: string[];
    gold: string[];
  };
  leaderboard: LeaderboardEntry[];
  challenges: {
    id: string;
    name: string;
    description: string;
    points: number;
    progress: number;
  }[];
}

export interface SpecialEvent {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  type: 'challenge' | 'competition' | 'festival';
  multiplier: number;
  specialRules?: string[];
  rewards: {
    type: string;
    itemId: string;
    requirement: number;
  }[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  category: string;
  points: number;
  rank: 'bronze' | 'silver' | 'gold' | 'platinum';
  progress: number;
  unlockedAt?: Date;
}

export interface SponsorSystemProps {
  sponsors: Sponsor[];
  progress: SponsorProgress[];
  events?: SponsorEvent[];
  eventProgress?: EventProgress[];
  leaderboard?: LeaderboardEntry[];
  invites?: FriendInvite[];
  onItemUnlock: (sponsorId: string, itemId: string) => void;
  onPointsEarned?: (sponsorId: string, points: number) => void;
  onEventTaskProgress?: (eventId: string, taskId: string, progress: number) => void;
  onInviteFriend?: (email: string) => void;
}