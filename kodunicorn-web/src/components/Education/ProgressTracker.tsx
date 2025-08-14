import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { StudentProgress, EducationStats, SubjectType } from './types';
import { theme } from '../../styles/theme';

interface ProgressTrackerProps {
  progress: StudentProgress;
  stats: EducationStats;
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const StatCard = styled(motion.div)`
  background-color: white;
  border-radius: ${theme.borderRadius.medium};
  padding: 20px;
  box-shadow: ${theme.shadows.small};
  text-align: center;
`;

const StatValue = styled.div`
  font-size: ${theme.typography.fontSizes.title};
  color: ${theme.colors.primary};
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.text};
`;

const Section = styled.section`
  background-color: white;
  border-radius: ${theme.borderRadius.medium};
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: ${theme.shadows.medium};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.text};
  margin-bottom: 20px;
`;

const SubjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const SubjectCard = styled.div<{ subject: SubjectType }>`
  background-color: ${props => {
    switch (props.subject) {
      case 'math': return '#FFD70010';
      case 'science': return '#98FB9810';
      case 'coding': return '#87CEEB10';
      case 'life-skills': return '#DDA0DD10';
      case 'general-knowledge': return '#F0E68C10';
      default: return 'white';
    }
  }};
  border-radius: ${theme.borderRadius.medium};
  padding: 20px;
  box-shadow: ${theme.shadows.small};
`;

const SubjectTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.text};
  margin-bottom: 15px;
`;

const SubjectStats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.typography.fontSizes.small};
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.small};
  overflow: hidden;
  margin-top: 10px;
`;

const Progress = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: ${theme.colors.primary};
  transition: width 0.3s ease;
`;

const AchievementList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
`;

const AchievementCard = styled(motion.div)`
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.medium};
  padding: 15px;
  text-align: center;
`;

const AchievementIcon = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
`;

const AchievementTitle = styled.div`
  font-size: ${theme.typography.fontSizes.small};
  color: ${theme.colors.text};
`;

const StreakIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: ${theme.typography.fontSizes.large};
  margin: 20px 0;
`;

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  progress,
  stats
}) => {
  const getSubjectTitle = (subject: SubjectType) => {
    switch (subject) {
      case 'math': return 'Matematik';
      case 'science': return 'Bilim';
      case 'coding': return 'Kodlama';
      case 'life-skills': return 'Yaşam Becerileri';
      case 'general-knowledge': return 'Genel Kültür';
      default: return '';
    }
  };

  const calculateSubjectProgress = (subject: SubjectType) => {
    const subjectStats = stats.subjectBreakdown.find(s => s.subject === subject);
    if (!subjectStats) return 0;
    
    const total = subjectStats.completed + subjectStats.inProgress;
    return total === 0 ? 0 : (subjectStats.completed / total) * 100;
  };

  return (
    <Container>
      <StatsGrid>
        <StatCard
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <StatValue>{stats.totalMaterialsCompleted}</StatValue>
          <StatLabel>Tamamlanan Materyal</StatLabel>
        </StatCard>

        <StatCard
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <StatValue>{stats.totalPointsEarned}</StatValue>
          <StatLabel>Toplam Puan</StatLabel>
        </StatCard>

        <StatCard
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <StatValue>{stats.averageScore.toFixed(1)}%</StatValue>
          <StatLabel>Ortalama Başarı</StatLabel>
        </StatCard>

        <StatCard
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <StatValue>{Math.round(stats.timeSpent / 60)}</StatValue>
          <StatLabel>Toplam Saat</StatLabel>
        </StatCard>
      </StatsGrid>

      <StreakIndicator>
        <span>🔥</span>
        <span>{progress.currentStreak} günlük seri</span>
      </StreakIndicator>

      <Section>
        <SectionTitle>Konu Bazlı İlerleme</SectionTitle>
        <SubjectGrid>
          {stats.subjectBreakdown.map(subject => (
            <SubjectCard key={subject.subject} subject={subject.subject}>
              <SubjectTitle>{getSubjectTitle(subject.subject)}</SubjectTitle>
              <SubjectStats>
                <span>Tamamlanan: {subject.completed}</span>
                <span>Devam Eden: {subject.inProgress}</span>
              </SubjectStats>
              <ProgressBar>
                <Progress progress={calculateSubjectProgress(subject.subject)} />
              </ProgressBar>
            </SubjectCard>
          ))}
        </SubjectGrid>
      </Section>

      <Section>
        <SectionTitle>Son Kazanılan Başarılar</SectionTitle>
        <AchievementList>
          {stats.achievements.recent.map(achievement => (
            <AchievementCard
              key={achievement.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AchievementIcon>🏆</AchievementIcon>
              <AchievementTitle>{achievement.id}</AchievementTitle>
            </AchievementCard>
          ))}
        </AchievementList>
      </Section>
    </Container>
  );
};