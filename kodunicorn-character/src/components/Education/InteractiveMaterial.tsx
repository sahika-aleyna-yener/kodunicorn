import React from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { LearningMaterial, InteractiveElement } from './types';
import { theme } from '../../styles/theme';

interface InteractiveMaterialProps {
  material: LearningMaterial;
  onComplete: (elementId: string) => void;
  onPointsEarned: (points: number) => void;
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const MaterialHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: ${theme.typography.fontSizes.title};
  color: ${theme.colors.text};
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.text};
`;

const ContentSection = styled.div`
  background-color: white;
  border-radius: ${theme.borderRadius.medium};
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: ${theme.shadows.medium};
`;

const InteractiveSection = styled.div`
  margin-top: 40px;
`;

const ElementCard = styled(motion.div)`
  background-color: white;
  border-radius: ${theme.borderRadius.medium};
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${theme.shadows.small};
`;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const QuizQuestion = styled.div`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.text};
  margin-bottom: 20px;
`;

const QuizOption = styled(motion.button)<{ isSelected?: boolean }>`
  width: 100%;
  padding: 15px;
  border: 2px solid ${props => props.isSelected ? theme.colors.primary : theme.colors.background};
  border-radius: ${theme.borderRadius.small};
  background-color: ${props => props.isSelected ? `${theme.colors.primary}10` : 'white'};
  text-align: left;
  font-size: ${theme.typography.fontSizes.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.background};
  }
`;

const GameContainer = styled.div`
  aspect-ratio: 16/9;
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SimulationContainer = styled.div`
  aspect-ratio: 4/3;
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.medium};
  padding: 20px;
`;

const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled(motion.button)`
  padding: 12px 24px;
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSizes.medium};
  cursor: pointer;
  align-self: center;
`;

const ProgressIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 8px;
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.small};
  margin: 0 15px;
  overflow: hidden;
`;

const Progress = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: ${theme.colors.primary};
  transition: width 0.3s ease;
`;

const ProgressText = styled.span`
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.text};
`;

export const InteractiveMaterial: React.FC<InteractiveMaterialProps> = ({
  material,
  onComplete,
  onPointsEarned
}) => {
  const [currentElementIndex, setCurrentElementIndex] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState<Record<string, number>>({});

  const handleQuizAnswer = (elementId: string, answerIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [elementId]: answerIndex }));
  };

  const handleElementComplete = (element: InteractiveElement) => {
    onComplete(element.id);
    onPointsEarned(element.points);
    
    if (currentElementIndex < material.interactiveElements.length - 1) {
      setCurrentElementIndex(prev => prev + 1);
    }
  };

  const renderInteractiveElement = (element: InteractiveElement) => {
    switch (element.type) {
      case 'quiz':
        return (
          <QuizContainer>
            <QuizQuestion>{element.content.question}</QuizQuestion>
            {element.content.options.map((option: string, index: number) => (
              <QuizOption
                key={index}
                isSelected={selectedAnswers[element.id] === index}
                onClick={() => handleQuizAnswer(element.id, index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {option}
              </QuizOption>
            ))}
            <Button
              onClick={() => handleElementComplete(element)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cevabı Kontrol Et
            </Button>
          </QuizContainer>
        );

      case 'game':
        return (
          <GameContainer>
            {/* Oyun içeriği buraya gelecek */}
            <Button
              onClick={() => handleElementComplete(element)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Oyunu Başlat
            </Button>
          </GameContainer>
        );

      case 'simulation':
        return (
          <SimulationContainer>
            {/* Simülasyon içeriği buraya gelecek */}
            <Button
              onClick={() => handleElementComplete(element)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Simülasyonu Başlat
            </Button>
          </SimulationContainer>
        );

      case 'exercise':
        return (
          <ExerciseContainer>
            {/* Alıştırma içeriği buraya gelecek */}
            <Button
              onClick={() => handleElementComplete(element)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Alıştırmayı Tamamla
            </Button>
          </ExerciseContainer>
        );

      default:
        return null;
    }
  };

  const currentElement = material.interactiveElements[currentElementIndex];
  const progress = (currentElementIndex / material.interactiveElements.length) * 100;

  return (
    <Container>
      <MaterialHeader>
        <Title>{material.title}</Title>
        <Description>{material.description}</Description>
      </MaterialHeader>

      <ProgressIndicator>
        <ProgressText>İlerleme</ProgressText>
        <ProgressBar>
          <Progress progress={progress} />
        </ProgressBar>
        <ProgressText>
          {currentElementIndex + 1} / {material.interactiveElements.length}
        </ProgressText>
      </ProgressIndicator>

      <ContentSection
        dangerouslySetInnerHTML={{ __html: material.content }}
      />

      <InteractiveSection>
        <AnimatePresence mode="wait">
          <ElementCard
            key={currentElement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {renderInteractiveElement(currentElement)}
          </ElementCard>
        </AnimatePresence>
      </InteractiveSection>
    </Container>
  );
};