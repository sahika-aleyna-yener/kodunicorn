import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import { KodUnicorn } from '../components/KodUnicorn';
import { CustomizationPanel } from '../components/CustomizationPanel';
import { AchievementSystem } from '../components/AchievementSystem';
import { achievements } from '../components/AchievementSystem/achievements';

// Tatlı animasyonlar
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const rainbow = keyframes`
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.colors.background}, ${theme.colors.gray[100]});
  padding: ${theme.spacing.xlarge};
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 107, 157, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(78, 205, 196, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(255, 230, 109, 0.03) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing.xxlarge};
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  span {
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${rainbow} 4s linear infinite;
    position: relative;
    
    &::after {
      content: '🦄';
      position: absolute;
      top: -10px;
      right: -40px;
      font-size: 2rem;
      animation: ${bounce} 2s ease-in-out infinite;
    }
  }
`;

const Description = styled(motion.p)`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 500;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.small};
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: ${theme.typography.fontWeights.semibold};
  margin-bottom: ${theme.spacing.xlarge};
  padding: 0.75rem 1.5rem;
  background: white;
  border-radius: 25px;
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
    text-decoration: none;
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
  min-height: 600px;
  background: linear-gradient(135deg, white, ${theme.colors.gray[100]});
  border-radius: 25px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  padding: ${theme.spacing.xlarge};
  border: 3px solid ${theme.colors.gray[100]};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 30% 30%, rgba(255, 107, 157, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(78, 205, 196, 0.1) 0%, transparent 50%);
    animation: ${float} 6s ease-in-out infinite;
    pointer-events: none;
  }
`;

// Ponçik figürler için karakter seçici
const CharacterSelector = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharacterOption = styled(motion.button)<{ selected: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid ${props => props.selected ? theme.colors.primary : theme.colors.gray[300]};
  background: ${props => props.selected ? theme.colors.primary : 'white'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const SidePanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.large};
`;

const PanelCard = styled(motion.div)`
  background: linear-gradient(135deg, white, ${theme.colors.gray[100]});
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  padding: ${theme.spacing.large};
  border: 2px solid ${theme.colors.gray[100]};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.accent});
  }
`;

const PanelTitle = styled.h2`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.medium};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Robot karakteri için özel bileşen
const RobotCharacter = styled(motion.div)`
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RobotHead = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4A90E2, #357ABD);
  border-radius: 20px;
  position: relative;
  border: 3px solid #2C5AA0;
  
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    width: 15px;
    height: 15px;
    background: #FFE66D;
    border-radius: 50%;
    box-shadow: 0 0 10px #FFE66D;
    animation: ${sparkle} 2s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    right: 15px;
    width: 15px;
    height: 15px;
    background: #FFE66D;
    border-radius: 50%;
    box-shadow: 0 0 10px #FFE66D;
    animation: ${sparkle} 2s ease-in-out infinite 0.5s;
  }
`;

const RobotBody = styled.div`
  width: 60px;
  height: 100px;
  background: linear-gradient(135deg, #6C757D, #495057);
  border-radius: 15px;
  margin-top: 10px;
  border: 3px solid #343A40;
  position: relative;
  
  &::before {
    content: '🤖';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
  }
`;

const RobotArms = styled.div`
  position: absolute;
  top: 20px;
  left: -15px;
  width: 15px;
  height: 60px;
  background: #6C757D;
  border-radius: 8px;
  transform: rotate(-20deg);
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    right: -15px;
    width: 15px;
    height: 60px;
    background: #6C757D;
    border-radius: 8px;
    transform: rotate(20deg);
  }
`;

const RobotLegs = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  
  &::before, &::after {
    content: '';
    width: 20px;
    height: 40px;
    background: #6C757D;
    border-radius: 10px;
  }
`;

// Ponçik karakteri için özel bileşen
const PoncikCharacter = styled(motion.div)`
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PoncikBody = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #FFB6C1, #FFC0CB);
  border-radius: 50%;
  position: relative;
  border: 4px solid #FF69B4;
  box-shadow: 0 8px 25px rgba(255, 182, 193, 0.4);
  
  &::before {
    content: '🌸';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    animation: ${bounce} 2s ease-in-out infinite;
  }
`;

const PoncikEyes = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  
  &::before, &::after {
    content: '';
    width: 15px;
    height: 15px;
    background: #2D2D2D;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(45, 45, 45, 0.3);
  }
`;

const PoncikMouth = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 15px;
  border: 3px solid #2D2D2D;
  border-top: none;
  border-radius: 0 0 30px 30px;
`;

const PoncikArms = styled.div`
  position: absolute;
  top: 50px;
  left: -20px;
  width: 20px;
  height: 40px;
  background: linear-gradient(135deg, #FFB6C1, #FFC0CB);
  border-radius: 10px;
  border: 2px solid #FF69B4;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -20px;
    width: 20px;
    height: 40px;
    background: linear-gradient(135deg, #FFB6C1, #FFC0CB);
    border-radius: 10px;
    border: 2px solid #FF69B4;
  }
`;

const PoncikLegs = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  
  &::before, &::after {
    content: '';
    width: 25px;
    height: 30px;
    background: linear-gradient(135deg, #FFB6C1, #FFC0CB);
    border-radius: 15px;
    border: 2px solid #FF69B4;
  }
`;

export const Character: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<'unicorn' | 'robot' | 'poncik'>('unicorn');
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

  const renderCharacter = () => {
    switch (selectedCharacter) {
      case 'robot':
        return (
          <RobotCharacter
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <RobotHead />
            <RobotBody>
              <RobotArms />
            </RobotBody>
            <RobotLegs />
          </RobotCharacter>
        );
      case 'poncik':
        return (
          <PoncikCharacter
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PoncikBody>
              <PoncikEyes />
              <PoncikMouth />
              <PoncikArms />
            </PoncikBody>
            <PoncikLegs />
          </PoncikCharacter>
        );
      default:
        return (
          <KodUnicorn
            customization={customization}
            state={characterState}
            onInteraction={handleCharacterInteraction}
          />
        );
    }
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
          Karakterini özelleştir, başarılarını takip et ve yeni özellikler aç! 🎨✨
        </Description>
      </Header>

      <CharacterSection>
        <CharacterDisplay>
          <CharacterSelector>
            <CharacterOption
              selected={selectedCharacter === 'unicorn'}
              onClick={() => setSelectedCharacter('unicorn')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🦄
            </CharacterOption>
            <CharacterOption
              selected={selectedCharacter === 'robot'}
              onClick={() => setSelectedCharacter('robot')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🤖
            </CharacterOption>
            <CharacterOption
              selected={selectedCharacter === 'poncik'}
              onClick={() => setSelectedCharacter('poncik')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🌸
            </CharacterOption>
          </CharacterSelector>
          
          {renderCharacter()}
        </CharacterDisplay>

        <SidePanel>
          <PanelCard
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PanelTitle>🎨 Özelleştirme</PanelTitle>
            <CustomizationPanel
              currentCustomization={customization}
              onCustomizationChange={handleCustomizationChange}
              unlockedItems={unlockedItems}
            />
          </PanelCard>

          <PanelCard
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PanelTitle>🏆 Başarılar</PanelTitle>
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