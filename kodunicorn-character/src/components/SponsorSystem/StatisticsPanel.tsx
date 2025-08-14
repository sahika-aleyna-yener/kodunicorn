import React from 'react';
import styled from '@emotion/styled';
import { Statistics } from './types';

const StatisticsContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
`;

const StatCard = styled.div`
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 6px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #FF6B00;
  margin: 5px 0;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

const ProgressSection = styled.div`
  margin-top: 20px;
`;

const ProgressBar = styled.div<{ progress: number; color: string }>`
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin: 5px 0;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${props => Math.min(props.progress, 100)}%;
    height: 100%;
    background-color: ${props => props.color};
    transition: width 0.3s ease;
  }
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
`;

interface StatisticsPanelProps {
  statistics: Statistics;
}

export const StatisticsPanel: React.FC<StatisticsPanelProps> = ({
  statistics
}) => {
  const learningColors = {
    coding: '#007bff',
    math: '#17a2b8',
    science: '#6f42c1',
    art: '#e83e8c',
    environment: '#28a745'
  };

  return (
    <StatisticsContainer>
      <h2>İstatistikler</h2>

      <StatGrid>
        <StatCard>
          <StatValue>{statistics.totalPoints}</StatValue>
          <StatLabel>Toplam Puan</StatLabel>
        </StatCard>

        <StatCard>
          <StatValue>{statistics.taskCompletion.total}</StatValue>
          <StatLabel>Tamamlanan Görevler</StatLabel>
        </StatCard>

        <StatCard>
          <StatValue>{statistics.achievements.total}</StatValue>
          <StatLabel>Kazanılan Başarılar</StatLabel>
        </StatCard>

        <StatCard>
          <StatValue>{statistics.groupActivities.completed}</StatValue>
          <StatLabel>Tamamlanan Grup Aktiviteleri</StatLabel>
        </StatCard>
      </StatGrid>

      <ProgressSection>
        <h3>Görev Tamamlama</h3>
        <ProgressLabel>
          <span>Haftalık Görevler</span>
          <span>{statistics.taskCompletion.weekly}%</span>
        </ProgressLabel>
        <ProgressBar progress={statistics.taskCompletion.weekly} color="#FF6B00" />

        <ProgressLabel>
          <span>Aylık Görevler</span>
          <span>{statistics.taskCompletion.monthly}%</span>
        </ProgressLabel>
        <ProgressBar progress={statistics.taskCompletion.monthly} color="#FF6B00" />
      </ProgressSection>

      <ProgressSection>
        <h3>Öğrenme İlerlemesi</h3>
        {Object.entries(statistics.learningProgress).map(([category, progress]) => (
          <div key={category}>
            <ProgressLabel>
              <span>{category}</span>
              <span>{progress}%</span>
            </ProgressLabel>
            <ProgressBar
              progress={progress}
              color={learningColors[category as keyof typeof learningColors]}
            />
          </div>
        ))}
      </ProgressSection>

      <ProgressSection>
        <h3>Sponsor İlerlemesi</h3>
        {Object.entries(statistics.sponsorProgress).map(([sponsorId, progress]) => (
          <div key={sponsorId}>
            <ProgressLabel>
              <span>{sponsorId}</span>
              <span>{progress} puan</span>
            </ProgressLabel>
            <ProgressBar progress={(progress / 1000) * 100} color="#FF6B00" />
          </div>
        ))}
      </ProgressSection>
    </StatisticsContainer>
  );
};