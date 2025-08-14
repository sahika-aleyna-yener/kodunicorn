import React, { useState } from 'react';
import type { SponsorSystemProps, SponsorItem } from './types';
import { EventPanel } from './EventPanel';
import { FriendInvitePanel } from './FriendInvitePanel';
import { LeaderboardPanel } from './LeaderboardPanel';

import { DailyTaskPanel } from './DailyTaskPanel';
import { SeasonPanel } from './SeasonPanel';
import { SpecialEventPanel } from './SpecialEventPanel';
import { AchievementRankPanel } from './AchievementRankPanel';
import { dailyTasks } from './daily-tasks';
import { seasons } from './seasons';
import { specialEvents } from './special-events';
import { achievements } from './achievements';
import styled from '@emotion/styled';
import {
  SponsorContainer,
  SponsorGrid,
  SponsorCard,
  SponsorHeader,
  SponsorLogo,
  SponsorInfo,
  SponsorName,
  SponsorDescription,
  ProgressBar,
  ItemsGrid,
  ItemCard,
  ItemImage,
  ItemName,
  ItemPoints,
  LimitedBadge,
  UnlockButton,
  TimeRemaining
} from './styles';

export const SponsorSystem: React.FC<SponsorSystemProps> = ({
  sponsors,
  progress,
  events = [],
  eventProgress = [],
  leaderboard = [],
  invites = [],
  onItemUnlock,
  onPointsEarned = () => {},
  onEventTaskProgress,
  onInviteFriend
}) => {
  const [activeTab, setActiveTab] = useState<'sponsors' | 'events' | 'friends' | 'leaderboard' | 'tasks' | 'groups' | 'statistics' | 'daily' | 'season' | 'special' | 'achievements'>('sponsors');

  const getProgress = (sponsorId: string) => {
    const sponsorProgress = progress.find(p => p.sponsorId === sponsorId);
    return sponsorProgress?.points || 0;
  };

  const isItemUnlocked = (sponsorId: string, itemId: string) => {
    const sponsorProgress = progress.find(p => p.sponsorId === sponsorId);
    return sponsorProgress?.unlockedItems.includes(itemId) || false;
  };

  const canUnlockItem = (sponsorId: string, requiredPoints: number) => {
    const currentPoints = getProgress(sponsorId);
    return currentPoints >= requiredPoints;
  };

  const handleUnlock = (sponsorId: string, item: SponsorItem) => {
    if (canUnlockItem(sponsorId, item.requiredPoints) && !isItemUnlocked(sponsorId, item.id)) {
      onItemUnlock(sponsorId, item.id);
      onPointsEarned(sponsorId, -item.requiredPoints); // Puanları harca
    }
  };

  const TabButton = styled.button<{ isActive: boolean }>`
    padding: 8px 16px;
    margin-right: 10px;
    border: none;
    border-radius: 4px;
    background-color: ${(props: { isActive: boolean }) => props.isActive ? '#FF6B00' : '#f0f0f0'};
    color: ${(props: { isActive: boolean }) => props.isActive ? '#fff' : '#666'};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: ${(props: { isActive: boolean }) => props.isActive ? '#ff8533' : '#e0e0e0'};
    }
  `;

  return (
    <SponsorContainer>
      <div style={{ marginBottom: '20px' }}>
        <TabButton
          isActive={activeTab === 'sponsors'}
          onClick={() => setActiveTab('sponsors')}
        >
          Sponsorlar
        </TabButton>
        <TabButton
          isActive={activeTab === 'events'}
          onClick={() => setActiveTab('events')}
        >
          Etkinlikler
        </TabButton>
        <TabButton
          isActive={activeTab === 'friends'}
          onClick={() => setActiveTab('friends')}
        >
          Arkadaş Daveti
        </TabButton>
        <TabButton
          isActive={activeTab === 'leaderboard'}
          onClick={() => setActiveTab('leaderboard')}
        >
          Sıralama
        </TabButton>
        <TabButton
          isActive={activeTab === 'tasks'}
          onClick={() => setActiveTab('tasks')}
        >
          Görevler
        </TabButton>
        <TabButton
          isActive={activeTab === 'groups'}
          onClick={() => setActiveTab('groups')}
        >
          Gruplar
        </TabButton>
        <TabButton
          isActive={activeTab === 'statistics'}
          onClick={() => setActiveTab('statistics')}
        >
          İstatistikler
        </TabButton>
        <TabButton
          isActive={activeTab === 'daily'}
          onClick={() => setActiveTab('daily')}
        >
          Günlük
        </TabButton>
        <TabButton
          isActive={activeTab === 'season'}
          onClick={() => setActiveTab('season')}
        >
          Sezon
        </TabButton>
        <TabButton
          isActive={activeTab === 'special'}
          onClick={() => setActiveTab('special')}
        >
          Özel
        </TabButton>
        <TabButton
          isActive={activeTab === 'achievements'}
          onClick={() => setActiveTab('achievements')}
        >
          Başarılar
        </TabButton>
      </div>

      {activeTab === 'sponsors' && (
        <>
          <h2>Sponsor Ödülleri</h2>
          <SponsorGrid>
            {sponsors.map(sponsor => {
              const currentPoints = getProgress(sponsor.id);
              
              return (
                <SponsorCard key={sponsor.id}>
                  <SponsorHeader>
                    <SponsorLogo src={sponsor.logo} alt={sponsor.name} />
                    <SponsorInfo>
                      <SponsorName>{sponsor.name}</SponsorName>
                      <SponsorDescription>{sponsor.description}</SponsorDescription>
                    </SponsorInfo>
                  </SponsorHeader>

                  <ProgressBar progress={(currentPoints / 500) * 100} />
                  <p>{currentPoints} puan</p>

                  <ItemsGrid>
                    {sponsor.items.map(item => {
                      const isUnlocked = isItemUnlocked(sponsor.id, item.id);
                      const canUnlock = canUnlockItem(sponsor.id, item.requiredPoints);
                      
                      return (
                        <ItemCard key={item.id} isLocked={!isUnlocked}>
                          <ItemImage src={item.image} alt={item.name} />
                          <ItemName>{item.name}</ItemName>
                          <ItemPoints>{item.requiredPoints} puan</ItemPoints>
                          
                          {item.limited && (
                            <>
                              <LimitedBadge>Sınırlı</LimitedBadge>
                              {item.endDate && (
                                <TimeRemaining>
                                  {new Date(item.endDate).toLocaleDateString('tr-TR')}
                                </TimeRemaining>
                              )}
                            </>
                          )}

                          <UnlockButton
                            isLocked={!canUnlock || isUnlocked}
                            onClick={() => handleUnlock(sponsor.id, item)}
                            whileHover={canUnlock && !isUnlocked ? { scale: 1.05 } : {}}
                            whileTap={canUnlock && !isUnlocked ? { scale: 0.95 } : {}}
                          >
                            {isUnlocked ? 'Açıldı' : canUnlock ? 'Kilidi Aç' : 'Kilitli'}
                          </UnlockButton>
                        </ItemCard>
                      );
                    })}
                  </ItemsGrid>
                </SponsorCard>
              );
            })}
          </SponsorGrid>
        </>
      )}

      {activeTab === 'events' && (
        <EventPanel
          events={events}
          progress={eventProgress}
          onTaskProgress={onEventTaskProgress}
        />
      )}

      {activeTab === 'friends' && (
        <FriendInvitePanel
          invites={invites}
          onInviteFriend={onInviteFriend!}
        />
      )}

      {activeTab === 'leaderboard' && (
        <LeaderboardPanel
          entries={leaderboard}
        />
      )}

      {activeTab === 'daily' && (
        <DailyTaskPanel
          tasks={dailyTasks}
          activeTasks={[]}
          onStartTask={(taskId) => console.log('Start task:', taskId)}
        />
      )}

      {activeTab === 'season' && (
        <SeasonPanel
          season={seasons[0]}
        />
      )}

      {activeTab === 'special' && (
        <SpecialEventPanel
          events={specialEvents}
        />
      )}

      {activeTab === 'achievements' && (
        <AchievementRankPanel
          achievements={achievements}
        />
      )}
    </SponsorContainer>
  );
};