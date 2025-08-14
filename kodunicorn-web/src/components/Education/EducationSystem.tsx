import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { EducationSystemProps, LearningMaterial } from './types';
import { LearningPath } from './LearningPath';
import { InteractiveMaterial } from './InteractiveMaterial';
import { ProgressTracker } from './ProgressTracker';
import { theme } from '../../styles/theme';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

const Header = styled.header`
  background-color: white;
  padding: 20px;
  box-shadow: ${theme.shadows.small};
  margin-bottom: 30px;
`;

const Navigation = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabList = styled.div`
  display: flex;
  gap: 20px;
`;

const Tab = styled(motion.button)<{ isActive: boolean }>`
  padding: 10px 20px;
  border: none;
  background: none;
  font-size: ${theme.typography.fontSizes.medium};
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.text};
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${props => props.isActive ? theme.colors.primary : 'transparent'};
    transform-origin: center;
    transform: scaleX(${props => props.isActive ? 1 : 0});
    transition: transform 0.3s ease;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UserLevel = styled.div`
  padding: 5px 10px;
  background-color: ${theme.colors.primary}10;
  border-radius: ${theme.borderRadius.small};
  color: ${theme.colors.primary};
  font-size: ${theme.typography.fontSizes.small};
`;

const UserPoints = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.text};
`;

export const EducationSystem: React.FC<EducationSystemProps> = ({
  currentUser,
  materials,
  progress,
  stats,
  onMaterialComplete: _onMaterialComplete,
  onPointsEarned,
  onAchievementEarned: _onAchievementEarned,
  onProgressUpdate: _onProgressUpdate
}) => {
  const [activeTab, setActiveTab] = React.useState<'path' | 'material' | 'progress'>('path');
  const [selectedMaterial, setSelectedMaterial] = React.useState<LearningMaterial | null>(null);

  const handleMaterialSelect = (material: LearningMaterial) => {
    setSelectedMaterial(material);
    setActiveTab('material');
  };

  // const _handleMaterialComplete = (materialId: string) => {
  //   _onMaterialComplete(materialId);
  //   setActiveTab('path');
  //   setSelectedMaterial(null);
  // };

  const handleElementComplete = (elementId: string) => {
    // Etkileşimli element tamamlandığında ilerlemeyi güncelle
    if (selectedMaterial) {
      const element = selectedMaterial.interactiveElements.find(e => e.id === elementId);
      if (element) {
        onPointsEarned(element.points);
      }
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'path':
        return (
          <LearningPath
            materials={materials}
            currentLevel={currentUser.level}
            onMaterialSelect={handleMaterialSelect}
          />
        );
      
      case 'material':
        return selectedMaterial ? (
          <InteractiveMaterial
            material={selectedMaterial}
            onComplete={handleElementComplete}
            onPointsEarned={onPointsEarned}
          />
        ) : null;
      
      case 'progress':
        return (
          <ProgressTracker
            progress={progress}
            stats={stats}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header>
        <Navigation>
          <TabList>
            <Tab
              isActive={activeTab === 'path'}
              onClick={() => setActiveTab('path')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Öğrenme Yolu
            </Tab>
            
            <Tab
              isActive={activeTab === 'progress'}
              onClick={() => setActiveTab('progress')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              İlerleme
            </Tab>
          </TabList>

          <UserInfo>
            <UserLevel>
              {currentUser.level === 'elementary' ? 'İlkokul' :
               currentUser.level === 'middle' ? 'Ortaokul' : 'Genel'} Seviye
            </UserLevel>
            <UserPoints>
              <span>🏆</span>
              <span>{progress.totalPoints} puan</span>
            </UserPoints>
          </UserInfo>
        </Navigation>
      </Header>

      {renderContent()}
    </Container>
  );
};