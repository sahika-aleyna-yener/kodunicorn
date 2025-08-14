import React, { useState } from 'react';
import { KodUnicorn } from './components/KodUnicorn';
import { CustomizationPanel } from './components/CustomizationPanel';
import { AchievementSystem } from './components/AchievementSystem';
import { SponsorSystem } from './components/SponsorSystem';
import { achievements } from './components/AchievementSystem/achievements';
import { sponsors } from './components/SponsorSystem/sponsors';
import { sponsorEvents } from './components/SponsorSystem/events';
import { v4 as uuidv4 } from 'uuid';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const CharacterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SidePanel = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const App: React.FC = () => {
  const [customization, setCustomization] = useState({
    colors: {
      body: '#FFFFFF',
      mane: '#FF6B00',
      horn: '#1A1A1A',
      eyes: '#FF6B00'
    },
    maneStyle: 'wavy',
    accessories: [],
    outfit: null,
    effects: []
  });

  const [characterState, setCharacterState] = useState({
    currentAnimation: '',
    isInteracting: false,
    mood: 'normal',
    achievement: null
  });

  const [achievementProgress, setAchievementProgress] = useState(
    achievements.map(a => ({
      achievementId: a.id,
      progress: 0,
      completed: false
    }))
  );

  const [unlockedItems, setUnlockedItems] = useState<string[]>([]);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [sponsorProgress, setSponsorProgress] = useState(
    sponsors.map(s => ({
      sponsorId: s.id,
      points: 0,
      unlockedItems: []
    }))
  );

  const [eventProgress, setEventProgress] = useState(
    sponsorEvents.map(e => ({
      eventId: e.id,
      taskProgress: Object.fromEntries(e.tasks.map(t => [t.id, 0])),
      completedTasks: [],
      earnedRewards: [],
      totalPoints: 0
    }))
  );

  const [invites, setInvites] = useState([
    {
      id: '1',
      inviterId: 'user1',
      inviteeEmail: 'friend@example.com',
      status: 'pending' as const,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    }
  ]);

  const [leaderboard, setLeaderboard] = useState([
    {
      userId: 'user1',
      username: 'KodKahraman',
      points: 1200,
      rank: 1,
      sponsorPoints: {
        'tech-brand': 500,
        'eco-brand': 400,
        'edu-brand': 300
      }
    },
    {
      userId: 'user2',
      username: 'BilimSever',
      points: 1000,
      rank: 2,
      sponsorPoints: {
        'tech-brand': 400,
        'eco-brand': 300,
        'edu-brand': 300
      }
    },
    {
      userId: 'user3',
      username: 'YeşilKalem',
      points: 800,
      rank: 3,
      sponsorPoints: {
        'tech-brand': 300,
        'eco-brand': 400,
        'art-brand': 100
      }
    }
  ]);

  const handleCustomizationChange = (newCustomization: any) => {
    setCustomization(newCustomization);
  };

  const handleSponsorItemUnlock = (sponsorId: string, itemId: string) => {
    setSponsorProgress(prev =>
      prev.map(p =>
        p.sponsorId === sponsorId
          ? { ...p, unlockedItems: [...p.unlockedItems, itemId] }
          : p
      )
    );
  };

  const handleSponsorPointsEarned = (sponsorId: string, points: number) => {
    setSponsorProgress(prev =>
      prev.map(p =>
        p.sponsorId === sponsorId
          ? { ...p, points: p.points + points }
          : p
      )
    );
  };

  const handleEventTaskProgress = (eventId: string, taskId: string, progress: number) => {
    setEventProgress(prev =>
      prev.map(p => {
        if (p.eventId !== eventId) return p;

        const event = sponsorEvents.find(e => e.id === eventId);
        const task = event?.tasks.find(t => t.id === taskId);
        
        if (!event || !task) return p;

        const newProgress = {
          ...p,
          taskProgress: {
            ...p.taskProgress,
            [taskId]: progress
          }
        };

        // Task tamamlandıysa
        if (progress >= task.requiredProgress && !p.completedTasks.includes(taskId)) {
          newProgress.completedTasks = [...p.completedTasks, taskId];
          newProgress.totalPoints += task.points;

          // Ödül kontrolü
          event.rewards.forEach(reward => {
            if (newProgress.totalPoints >= reward.requiredPoints &&
                !p.earnedRewards.includes(reward.itemId)) {
              newProgress.earnedRewards = [...p.earnedRewards, reward.itemId];
              setUnlockedItems(prev => [...prev, reward.itemId]);
            }
          });
        }

        return newProgress;
      })
    );
  };

  const handleInviteFriend = (email: string) => {
    const newInvite = {
      id: uuidv4(),
      inviterId: 'user1', // Gerçek uygulamada mevcut kullanıcı ID'si
      inviteeEmail: email,
      status: 'pending' as const,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    };

    setInvites(prev => [...prev, newInvite]);
  };

  const handleCharacterInteraction = (type: string) => {
    if (type === 'click') {
      setCharacterState(prev => ({
        ...prev,
        currentAnimation: 'jump',
        mood: 'happy'
      }));
    } else if (type === 'hover') {
      setCharacterState(prev => ({
        ...prev,
        currentAnimation: 'celebrate',
        mood: 'excited'
      }));
    }

    // Reset state after animation
    setTimeout(() => {
      setCharacterState(prev => ({
        ...prev,
        currentAnimation: '',
        mood: 'normal'
      }));
    }, 1000);
  };

  const handleAchievementComplete = (achievementId: string) => {
    const achievement = achievements.find(a => a.id === achievementId);
    if (achievement?.reward) {
      setUnlockedItems(prev => [...prev, achievement.reward.itemId]);
    }

    setAchievementProgress(prev =>
      prev.map(p =>
        p.achievementId === achievementId
          ? { ...p, completed: true, completedAt: new Date() }
          : p
      )
    );
  };

  return (
    <AppContainer>
      <CharacterSection>
        <KodUnicorn
          customization={customization}
          state={characterState}
          onInteraction={handleCharacterInteraction}
        />
      </CharacterSection>

      <SidePanel>
        <CustomizationPanel
          currentCustomization={customization}
          onCustomizationChange={handleCustomizationChange}
          unlockedItems={unlockedItems}
        />

        <AchievementSystem
          achievements={achievements}
          progress={achievementProgress}
          onAchievementComplete={handleAchievementComplete}
          currentLevel={currentLevel}
        />

        <SponsorSystem
          sponsors={sponsors}
          progress={sponsorProgress}
          events={sponsorEvents}
          eventProgress={eventProgress}
          leaderboard={leaderboard}
          invites={invites}
          onItemUnlock={handleSponsorItemUnlock}
          onPointsEarned={handleSponsorPointsEarned}
          onEventTaskProgress={handleEventTaskProgress}
          onInviteFriend={handleInviteFriend}
        />
      </SidePanel>
    </AppContainer>
  );
};

export default App;