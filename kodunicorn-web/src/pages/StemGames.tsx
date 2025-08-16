import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import { stemGames } from '../data/stemGames';
import type { StemGame } from '../components/Education/types';
import { theme } from '../styles/theme';

// Tatlı animasyonlar
const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 120px;
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  
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

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '🧪';
    display: block;
    font-size: 2rem;
    margin-top: 0.5rem;
    animation: ${bounce} 2s ease-in-out infinite;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: ${theme.colors.text};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 500;
`;

// Tatlı bilgi notları için sidebar
const Sidebar = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 250px;
  z-index: 100;
  
  @media (max-width: 1400px) {
    display: none;
  }
`;

const InfoCard = styled(motion.div)`
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: white;
  padding: 1rem;
  border-radius: 16px;
  margin-bottom: 1rem;
  box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.2);
  
  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    font-weight: bold;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid ${theme.colors.gray[100]};
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 3px solid ${props => props.active ? theme.colors.primary : theme.colors.gray[300]};
  background: ${props => props.active ? theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : theme.colors.text};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${props => props.active ? '600' : '400'};
  font-size: 1rem;

  &:hover {
    background: ${props => props.active ? theme.colors.primary : theme.colors.gray[100]};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const GameCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid ${theme.colors.gray[100]};
  transition: all 0.3s ease;
  cursor: pointer;
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
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
    border-color: ${theme.colors.primary};
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const GameTitle = styled.h3`
  font-size: 1.4rem;
  color: ${theme.colors.primary};
  margin: 0;
  font-weight: bold;
`;

const GameBadge = styled.span<{ category: string }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${props => {
    switch (props.category) {
      case 'science': return 'linear-gradient(135deg, #e3f2fd, #bbdefb)';
      case 'technology': return 'linear-gradient(135deg, #f3e5f5, #e1bee7)';
      case 'engineering': return 'linear-gradient(135deg, #e8f5e8, #c8e6c9)';
      case 'mathematics': return 'linear-gradient(135deg, #fff3e0, #ffcc80)';
      default: return 'linear-gradient(135deg, #f5f5f5, #e0e0e0)';
    }
  }};
  color: ${props => {
    switch (props.category) {
      case 'science': return '#1976d2';
      case 'technology': return '#7b1fa2';
      case 'engineering': return '#388e3c';
      case 'mathematics': return '#f57c00';
      default: return '#666';
    }
  }};
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const GameDescription = styled.p`
  color: ${theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
`;

const GameDetails = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${theme.colors.gray[600]};
  background: ${theme.colors.gray[100]};
  padding: 0.5rem 1rem;
  border-radius: 15px;
  border: 1px solid ${theme.colors.gray[200]};
`;

const DifficultyBadge = styled.span<{ difficulty: string }>`
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${props => {
    switch (props.difficulty) {
      case 'easy': return 'linear-gradient(135deg, #e8f5e8, #c8e6c9)';
      case 'medium': return 'linear-gradient(135deg, #fff3e0, #ffcc80)';
      case 'hard': return 'linear-gradient(135deg, #ffebee, #ffcdd2)';
      default: return 'linear-gradient(135deg, #f5f5f5, #e0e0e0)';
    }
  }};
  color: ${props => {
    switch (props.difficulty) {
      case 'easy': return '#388e3c';
      case 'medium': return '#f57c00';
      case 'hard': return '#d32f2f';
      default: return '#666';
    }
  }};
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const PlayButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.4);
  }
`;

const FeaturedSection = styled.div`
  margin-bottom: 3rem;
`;

const FeaturedTitle = styled.h2`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  
  &::after {
    content: '⭐';
    display: block;
    font-size: 2rem;
    margin-top: 0.5rem;
    animation: ${sparkle} 2s ease-in-out infinite;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem;
  color: ${theme.colors.gray[500]};
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const StemGames: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Tümü 🌈' },
    { id: 'science', name: 'Bilim 🔬' },
    { id: 'technology', name: 'Teknoloji 💻' },
    { id: 'engineering', name: 'Mühendislik ⚙️' },
    { id: 'mathematics', name: 'Matematik 📐' }
  ];

  const difficulties = [
    { id: 'all', name: 'Tüm Seviyeler 🌟' },
    { id: 'easy', name: 'Kolay 😊' },
    { id: 'medium', name: 'Orta 🤔' },
    { id: 'hard', name: 'Zor 🧠' }
  ];

  const filteredGames = stemGames.filter(game => {
    const categoryMatch = selectedCategory === 'all' || game.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || game.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const featuredGames = stemGames.filter(game => game.featured);
  const regularGames = filteredGames.filter(game => !game.featured);

  const handlePlayGame = (game: StemGame) => {
    console.log('Oyun başlatılıyor:', game.title);
    alert(`${game.title} oyunu başlatılıyor! Bu özellik yakında eklenecek.`);
  };

  const getCategoryName = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.name : category;
  };

  const getDifficultyName = (difficulty: string) => {
    const diff = difficulties.find(d => d.id === difficulty);
    return diff ? diff.name : difficulty;
  };

  return (
    <Container>
      <Header>
        <Title>🧪 STEM Oyunları</Title>
        <Subtitle>
          Bilim, Teknoloji, Mühendislik ve Matematik alanlarında eğlenceli oyunlar ile öğrenelim! 🚀
          Her yaş grubuna uygun, interaktif ve eğitici oyunlar sizi bekliyor. 🎮
        </Subtitle>
      </Header>

      {/* Tatlı bilgi notları sidebar */}
      <Sidebar>
        <InfoCard
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4>💡 Bilim İpucu</h4>
          <p>Bilim deneyleri yaparken her zaman güvenlik kurallarına uyalım! 🧪</p>
        </InfoCard>
        
        <InfoCard
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4>🎯 Teknoloji Notu</h4>
          <p>Kodlama öğrenmek puzzle çözmek gibidir - parça parça birleştiririz! 💻</p>
        </InfoCard>
        
        <InfoCard
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4>🔧 Mühendislik Tavsiyesi</h4>
          <p>En büyük icatlar küçük fikirlerden başlar! Hayal gücünü kullan! ⚙️</p>
        </InfoCard>
        
        <InfoCard
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h4>📊 Matematik Sırrı</h4>
          <p>Matematik her yerde! Sayılar bize dünyayı anlamamızda yardım eder! 📐</p>
        </InfoCard>
      </Sidebar>

      <FilterSection>
        <div>
          <strong style={{ fontSize: '1.1rem', marginRight: '1rem' }}>🎯 Kategori:</strong>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </div>
        <div>
          <strong style={{ fontSize: '1.1rem', marginRight: '1rem' }}>🎮 Zorluk:</strong>
          {difficulties.map(difficulty => (
            <FilterButton
              key={difficulty.id}
              active={selectedDifficulty === difficulty.id}
              onClick={() => setSelectedDifficulty(difficulty.id)}
            >
              {difficulty.name}
            </FilterButton>
          ))}
        </div>
      </FilterSection>

      {featuredGames.length > 0 && (
        <FeaturedSection>
          <FeaturedTitle>⭐ Öne Çıkan Oyunlar</FeaturedTitle>
          <GamesGrid>
            {featuredGames.map(game => (
              <GameCard
                key={game.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePlayGame(game)}
              >
                <GameHeader>
                  <GameTitle>{game.title}</GameTitle>
                  <GameBadge category={game.category}>
                    {getCategoryName(game.category)}
                  </GameBadge>
                </GameHeader>
                <GameDescription>{game.description}</GameDescription>
                <GameDetails>
                  <DetailItem>
                    <span>👥</span>
                    <span>{game.ageRange.min}-{game.ageRange.max} yaş</span>
                  </DetailItem>
                  <DetailItem>
                    <span>⏱️</span>
                    <span>{game.duration} dk</span>
                  </DetailItem>
                  <DifficultyBadge difficulty={game.difficulty}>
                    {getDifficultyName(game.difficulty)}
                  </DifficultyBadge>
                </GameDetails>
                <PlayButton>🎮 Oyna</PlayButton>
              </GameCard>
            ))}
          </GamesGrid>
        </FeaturedSection>
      )}

      {regularGames.length > 0 ? (
        <GamesGrid>
          {regularGames.map(game => (
            <GameCard
              key={game.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePlayGame(game)}
            >
              <GameHeader>
                <GameTitle>{game.title}</GameTitle>
                <GameBadge category={game.category}>
                  {getCategoryName(game.category)}
                </GameBadge>
              </GameHeader>
              <GameDescription>{game.description}</GameDescription>
              <GameDetails>
                <DetailItem>
                  <span>👥</span>
                  <span>{game.ageRange.min}-{game.ageRange.max} yaş</span>
                </DetailItem>
                <DetailItem>
                  <span>⏱️</span>
                  <span>{game.duration} dk</span>
                </DetailItem>
                <DifficultyBadge difficulty={game.difficulty}>
                  {getDifficultyName(game.difficulty)}
                </DifficultyBadge>
              </GameDetails>
              <PlayButton>🎮 Oyna</PlayButton>
            </GameCard>
          ))}
        </GamesGrid>
      ) : (
        <EmptyState>
          <h3>🔍 Oyun bulunamadı</h3>
          <p>Seçtiğiniz kriterlere uygun oyun bulunmuyor. Farklı filtreler deneyin! 😊</p>
        </EmptyState>
      )}
    </Container>
  );
};

export default StemGames;
