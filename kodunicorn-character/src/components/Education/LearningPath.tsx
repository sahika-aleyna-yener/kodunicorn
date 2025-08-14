import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { LearningMaterial, EducationLevel, SubjectType } from './types';
import { theme } from '../../styles/theme';

interface LearningPathProps {
  materials: LearningMaterial[];
  currentLevel: EducationLevel;
  onMaterialSelect: (material: LearningMaterial) => void;
}

const PathContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const LevelHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const LevelTitle = styled.h2`
  font-size: ${theme.typography.fontSizes.title};
  color: ${theme.colors.text};
  margin-bottom: 10px;
`;

const LevelDescription = styled.p`
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.text};
`;

const MaterialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const MaterialCard = styled(motion.div)<{ unlocked: boolean }>`
  background-color: white;
  border-radius: ${theme.borderRadius.medium};
  padding: 20px;
  box-shadow: ${theme.shadows.medium};
  opacity: ${props => props.unlocked ? 1 : 0.7};
  cursor: ${props => props.unlocked ? 'pointer' : 'not-allowed'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.small} ${theme.borderRadius.small} 0 0;
  }
`;

const MaterialTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.text};
  margin-bottom: 10px;
`;

const MaterialDescription = styled.p`
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.text};
  margin-bottom: 15px;
`;

const MaterialMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.typography.fontSizes.small};
  color: ${theme.colors.text};
  margin-bottom: 15px;
`;

const MaterialProgress = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.small};
  margin-top: 15px;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: ${theme.colors.primary};
  transition: width 0.3s ease;
`;

const SubjectBadge = styled.span<{ subject: SubjectType }>`
  padding: 4px 8px;
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSizes.small};
  background-color: ${props => {
    switch (props.subject) {
      case 'math': return '#FFD700';
      case 'science': return '#98FB98';
      case 'coding': return '#87CEEB';
      case 'life-skills': return '#DDA0DD';
      case 'general-knowledge': return '#F0E68C';
      default: return theme.colors.background;
    }
  }};
`;

const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
  font-size: ${theme.typography.fontSizes.small};
`;

const RequirementItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;

  &::before {
    content: '•';
    color: ${theme.colors.primary};
  }
`;

const LockOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSizes.large};
`;

export const LearningPath: React.FC<LearningPathProps> = ({
  materials,
  currentLevel,
  onMaterialSelect
}) => {
  const getLevelTitle = (level: EducationLevel) => {
    switch (level) {
      case 'elementary': return 'İlkokul Seviyesi';
      case 'middle': return 'Ortaokul Seviyesi';
      case 'general': return 'Genel Seviye';
      default: return '';
    }
  };

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

  const filteredMaterials = materials.filter(
    material => material.level === currentLevel
  );

  return (
    <PathContainer>
      <LevelHeader>
        <LevelTitle>{getLevelTitle(currentLevel)}</LevelTitle>
        <LevelDescription>
          Seviyenize uygun eğitim materyallerini keşfedin ve öğrenme yolculuğunuza devam edin.
        </LevelDescription>
      </LevelHeader>

      <MaterialGrid>
        {filteredMaterials.map(material => (
          <MaterialCard
            key={material.id}
            unlocked={material.unlocked}
            onClick={() => material.unlocked && onMaterialSelect(material)}
            whileHover={material.unlocked ? { scale: 1.02 } : {}}
            whileTap={material.unlocked ? { scale: 0.98 } : {}}
          >
            <MaterialTitle>{material.title}</MaterialTitle>
            <SubjectBadge subject={material.subject}>
              {getSubjectTitle(material.subject)}
            </SubjectBadge>
            
            <MaterialDescription>{material.description}</MaterialDescription>
            
            <MaterialMeta>
              <span>⏱️ {material.duration} dakika</span>
              <span>🏆 {material.points} puan</span>
            </MaterialMeta>

            {material.requirements && material.requirements.length > 0 && (
              <RequirementsList>
                {material.requirements.map((req, index) => (
                  <RequirementItem key={index}>{req}</RequirementItem>
                ))}
              </RequirementsList>
            )}

            <MaterialProgress>
              <ProgressBar progress={material.progress} />
            </MaterialProgress>

            {!material.unlocked && (
              <LockOverlay>
                🔒
              </LockOverlay>
            )}
          </MaterialCard>
        ))}
      </MaterialGrid>
    </PathContainer>
  );
};