import React from 'react';
import styled from '@emotion/styled';
import { Season } from './types';

const SeasonContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SeasonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SeasonInfo = styled.div`
  flex: 1;
`;

const SeasonTitle = styled.h2`
  margin: 0;
  color: #333;
`;

const SeasonDates = styled.div`
  font-size: 14px;
  color: #666;
`;

const SeasonTheme = styled.div`
  padding: 4px 12px;
  background-color: #FF6B00;
  color: white;
  border-radius: 20px;
  font-size: 14px;
`;

const RewardsSection = styled.div`
  margin: 20px 0;
`;

const RewardTier = styled.div<{ tier: string }>`
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  background-color: ${props => {
    switch (props.tier) {
      case 'bronze': return '#cd7f32';
      case 'silver': return '#c0c0c0';
      case 'gold': return '#ffd700';
      default: return '#f0f0f0';
    }
  }}22;
  border: 1px solid ${props => {
    switch (props.tier) {
      case 'bronze': return '#cd7f32';
      case 'silver': return '#c0c0c0';
      case 'gold': return '#ffd700';
      default: return '#ddd';
    }
  }};
`;

const RewardTitle = styled.h3`
  margin: 0 0 10px;
  color: #333;
  text-transform: capitalize;
`;

const RewardItem = styled.span`
  display: inline-block;
  padding: 4px 8px;
  margin: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  font-size: 14px;
`;

const ChallengeSection = styled.div`
  margin-top: 20px;
`;

const ChallengeCard = styled.div`
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  background-color: #f8f9fa;
  border: 1px solid #eee;
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

interface SeasonPanelProps {
  season: Season;
}

export const SeasonPanel: React.FC<SeasonPanelProps> = ({
  season
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('tr-TR');
  };

  return (
    <SeasonContainer>
      <SeasonHeader>
        <SeasonInfo>
          <SeasonTitle>{season.name}</SeasonTitle>
          <SeasonDates>
            {formatDate(season.startDate)} - {formatDate(season.endDate)}
          </SeasonDates>
        </SeasonInfo>
        <SeasonTheme>{season.theme}</SeasonTheme>
      </SeasonHeader>

      <RewardsSection>
        <h3>Sezon Ödülleri</h3>
        {Object.entries(season.specialRewards).map(([tier, rewards]) => (
          <RewardTier key={tier} tier={tier}>
            <RewardTitle>{tier}</RewardTitle>
            {rewards.map(reward => (
              <RewardItem key={reward}>{reward}</RewardItem>
            ))}
          </RewardTier>
        ))}
      </RewardsSection>

      <ChallengeSection>
        <h3>Sezon Görevleri</h3>
        {season.challenges.map(challenge => (
          <ChallengeCard key={challenge.id}>
            <h4>{challenge.name}</h4>
            <p>{challenge.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{challenge.points} puan</span>
              <span>{challenge.progress}%</span>
            </div>
            <ProgressBar progress={challenge.progress} />
          </ChallengeCard>
        ))}
      </ChallengeSection>
    </SeasonContainer>
  );
};