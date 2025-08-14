import React from 'react';
import styled from '@emotion/styled';
import { Achievement } from './types';

const RankContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CategorySection = styled.div`
  margin: 20px 0;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CategoryTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const CategoryProgress = styled.div`
  font-size: 14px;
  color: #666;
`;

const AchievementCard = styled.div<{ rank: string }>`
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  background-color: ${props => {
    switch (props.rank) {
      case 'bronze': return '#cd7f3222';
      case 'silver': return '#c0c0c022';
      case 'gold': return '#ffd70022';
      case 'platinum': return '#e5e4e222';
      default: return '#fff';
    }
  }};
  border: 2px solid ${props => {
    switch (props.rank) {
      case 'bronze': return '#cd7f32';
      case 'silver': return '#c0c0c0';
      case 'gold': return '#ffd700';
      case 'platinum': return '#e5e4e2';
      default: return '#ddd';
    }
  }};
`;

const AchievementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const AchievementTitle = styled.h4`
  margin: 0;
  color: #333;
`;

const RankBadge = styled.span<{ rank: string }>`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  background-color: ${props => {
    switch (props.rank) {
      case 'bronze': return '#cd7f32';
      case 'silver': return '#c0c0c0';
      case 'gold': return '#ffd700';
      case 'platinum': return '#e5e4e2';
      default: return '#9e9e9e';
    }
  }};
  color: ${props => props.rank === 'gold' ? '#333' : '#fff'};
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 6px;
  background-color: #eee;
  border-radius: 3px;
  margin: 10px 0;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${props => Math.min(props.progress, 100)}%;
    height: 100%;
    background-color: #FF6B00;
    transition: width 0.3s ease;
  }
`;

const UnlockDate = styled.div`
  font-size: 12px;
  color: #666;
  font-style: italic;
`;

interface AchievementRankPanelProps {
  achievements: Achievement[];
}

export const AchievementRankPanel: React.FC<AchievementRankPanelProps> = ({
  achievements
}) => {
  const categories = Array.from(new Set(achievements.map(a => a.category)));

  const getCategoryProgress = (category: string) => {
    const categoryAchievements = achievements.filter(a => a.category === category);
    const completed = categoryAchievements.filter(a => a.progress === 100).length;
    return `${completed}/${categoryAchievements.length}`;
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('tr-TR');
  };

  return (
    <RankContainer>
      <h2>Başarı Sıralaması</h2>
      {categories.map(category => (
        <CategorySection key={category}>
          <CategoryHeader>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryProgress>
              Tamamlanan: {getCategoryProgress(category)}
            </CategoryProgress>
          </CategoryHeader>

          {achievements
            .filter(a => a.category === category)
            .sort((a, b) => {
              const rankOrder = { bronze: 0, silver: 1, gold: 2, platinum: 3 };
              return rankOrder[a.rank] - rankOrder[b.rank];
            })
            .map(achievement => (
              <AchievementCard key={achievement.id} rank={achievement.rank}>
                <AchievementHeader>
                  <AchievementTitle>{achievement.name}</AchievementTitle>
                  <RankBadge rank={achievement.rank}>
                    {achievement.rank.toUpperCase()}
                  </RankBadge>
                </AchievementHeader>

                <p>{achievement.description}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{achievement.points} puan</span>
                  <span>{achievement.progress}%</span>
                </div>
                
                <ProgressBar progress={achievement.progress} />

                {achievement.unlockedAt && (
                  <UnlockDate>
                    Kazanıldı: {formatDate(achievement.unlockedAt)}
                  </UnlockDate>
                )}
              </AchievementCard>
            ))}
        </CategorySection>
      ))}
    </RankContainer>
  );
};