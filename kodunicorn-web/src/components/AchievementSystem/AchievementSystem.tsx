import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import type { AchievementSystemProps, AchievementNotification } from './types';
import {
  AchievementContainer,
  AchievementGrid,
  AchievementCard,
  AchievementIcon,
  AchievementTitle,
  AchievementDescription,
  ProgressBar,
  NotificationContainer,
  NotificationIcon,
  NotificationContent,
  NotificationTitle,
  NotificationMessage,
  RewardBadge
} from './styles';

export const AchievementSystem: React.FC<AchievementSystemProps> = ({
  achievements,
  progress,
  onAchievementComplete: _onAchievementComplete,
  currentLevel
}) => {
  const [notifications, setNotifications] = useState<AchievementNotification[]>([]);

  useEffect(() => {
    // Check for newly completed achievements
    progress.forEach(p => {
      if (p.completed && p.completedAt && isRecentlyCompleted(p.completedAt)) {
        const achievement = achievements.find(a => a.id === p.achievementId);
        if (achievement) {
          showNotification(achievement);
        }
      }
    });
  }, [progress]);

  const isRecentlyCompleted = (completedAt: Date) => {
    const fiveSecondsAgo = new Date(Date.now() - 5000);
    return completedAt > fiveSecondsAgo;
  };

  const showNotification = (achievement: any) => {
    const notification: AchievementNotification = {
      id: uuidv4(),
      achievement,
      timestamp: new Date()
    };

    setNotifications(prev => [...prev, notification]);

    // Remove notification after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== notification.id));
    }, 5000);
  };

  const isAchievementLocked = (achievement: any) => {
    return achievement.requiredLevel && achievement.requiredLevel > currentLevel;
  };

  const getAchievementProgress = (achievementId: string) => {
    const achievementProgress = progress.find(p => p.achievementId === achievementId);
    return achievementProgress?.progress || 0;
  };

  return (
    <>
      <AchievementContainer>
        <AchievementGrid>
          {achievements.map(achievement => {
            const isLocked = isAchievementLocked(achievement);
            const progressValue = getAchievementProgress(achievement.id);
            
            return (
              <AchievementCard key={achievement.id} isLocked={isLocked}>
                <AchievementIcon src={achievement.icon} alt={achievement.title} />
                <AchievementTitle>{achievement.title}</AchievementTitle>
                <AchievementDescription>{achievement.description}</AchievementDescription>
                <ProgressBar progress={progressValue} />
                {achievement.reward && (
                  <RewardBadge>
                    {achievement.reward.type === 'accessory' ? '🎁' :
                     achievement.reward.type === 'outfit' ? '👕' :
                     achievement.reward.type === 'effect' ? '✨' : '🎨'}
                  </RewardBadge>
                )}
              </AchievementCard>
            );
          })}
        </AchievementGrid>
      </AchievementContainer>

      <AnimatePresence>
        {notifications.map(notification => (
          <NotificationContainer
            key={notification.id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
          >
            <NotificationIcon
              src={notification.achievement.icon}
              alt={notification.achievement.title}
            />
            <NotificationContent>
              <NotificationTitle>
                Başarı Kazanıldı: {notification.achievement.title}
              </NotificationTitle>
              <NotificationMessage>
                {notification.achievement.description}
              </NotificationMessage>
            </NotificationContent>
          </NotificationContainer>
        ))}
      </AnimatePresence>
    </>
  );
};