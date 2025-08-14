import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import { KodUnicorn } from '../components/KodUnicorn';
import { CustomizationPanel } from '../components/CustomizationPanel';
import { AchievementSystem } from '../components/AchievementSystem';
import { achievements } from '../components/AchievementSystem/achievements';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  padding: ${theme.spacing.xlarge};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing.xxlarge};
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};

  span {
    color: ${theme.colors.primary};
  }
`;

const Description = styled(motion.p)`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.small};
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: ${theme.typography.fontWeights.semibold};
  margin-bottom: ${theme.spacing.xlarge};
  
  &:hover {
    text-decoration: underline;
  }
`;

const CharacterSection = styled.section`
  display: flex;
  gap: ${theme.spacing.xxlarge};
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const CharacterDisplay = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  padding: ${theme.spacing.xlarge};
`;

const SidePanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.large};
`;

const PanelCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  padding: ${theme.spacing.large};
`;

const PanelTitle = styled.h2`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.medium};
`;

export const Character: React.FC = () => {
  const [customization, setCustomization] = useState({
    colors: {
      body: '#FFFFFF',
      mane: '#FF6B00',
      horn: '#1A1A1A',
      eyes: '#FF6B00',
      primary: '#FF6B9D',
      secondary: '#4ECDC4',
      accent: '#FFE66D',
      white: '#FFFFFF',
      text: '#2D2D2D'
    },
    maneStyle: 'wavy' as const,
    accessories: [],
    outfit: null,
    effects: []
  });

  const [characterState, setCharacterState] = useState({
    currentAnimation: '' as const,
    isInteracting: false,
    mood: 'normal' as const,
    achievement: null
  });

  const [achievementProgress, setAchievementProgress] = useState(
    achievements.map(a => ({
      achievementId: a.id,
      progress: 0,
      completed: false
    }))
  );

  const [unlockedItems] = useState<string[]>([]);
  const [currentLevel, setCurrentLevel] = useState(1);

  const handleCustomizationChange = (newCustomization: any) => {
    setCustomization(newCustomization);
  };

  const handleCharacterInteraction = (interaction: string) => {
    setCharacterState(prev => ({
      ...prev,
      currentAnimation: interaction as any,
      isInteracting: true
    }));

    setTimeout(() => {
      setCharacterState(prev => ({
        ...prev,
        isInteracting: false,
        currentAnimation: ''
      }));
    }, 2000);
  };

  const handleAchievementComplete = (achievementId: string) => {
    setAchievementProgress(prev =>
      prev.map(p => {
        if (p.achievementId === achievementId) {
          return { ...p, completed: true, progress: 100 };
        }
        return p;
      })
    );

    // Level up
    setCurrentLevel(prev => prev + 1);
  };

  return (
    <PageContainer>
      <Header>
        <BackButton to="/">
          ← Ana Sayfaya Dön
        </BackButton>
        
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>KodUnicorn</span> Karakterin
        </Title>
        
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Karakterini özelleştir, başarılarını takip et ve yeni özellikler aç!
        </Description>
      </Header>

      <CharacterSection>
        <CharacterDisplay>
          <KodUnicorn
            customization={customization}
            state={characterState}
            onInteraction={handleCharacterInteraction}
          />
        </CharacterDisplay>

        <SidePanel>
          <PanelCard>
            <PanelTitle>Özelleştirme</PanelTitle>
            <CustomizationPanel
              currentCustomization={customization}
              onCustomizationChange={handleCustomizationChange}
              unlockedItems={unlockedItems}
            />
          </PanelCard>

          <PanelCard>
            <PanelTitle>Başarılar</PanelTitle>
            <AchievementSystem
              achievements={achievements}
              progress={achievementProgress}
              onAchievementComplete={handleAchievementComplete}
              currentLevel={currentLevel}
            />
          </PanelCard>
        </SidePanel>
      </CharacterSection>
    </PageContainer>
  );
}; 