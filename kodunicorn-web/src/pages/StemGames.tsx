import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { stemGames } from '../data/stemGames';
import type { StemGame } from '../components/Education/types';
import { theme } from '../styles/theme';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.text};
  max-width: 600px;
  margin: 0 auto;
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.active ? theme.colors.primary : theme.colors.gray[300]};
  background: ${props => props.active ? theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : theme.colors.text};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${props => props.active ? '600' : '400'};

  &:hover {
    background: ${props => props.active ? theme.colors.primary : theme.colors.gray[100]};
  }
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const GameCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.colors.gray[200]};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const GameTitle = styled.h3`
  font-size: 1.3rem;
  color: ${theme.colors.primary};
  margin: 0;
`;

const GameBadge = styled.span<{ category: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => {
    switch (props.category) {
      case 'science': return '#e3f2fd';
      case 'technology': return '#f3e5f5';
      case 'engineering': return '#e8f5e8';
      case 'mathematics': return '#fff3e0';
      default: return '#f5f5f5';
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
`;

const GameDescription = styled.p`
  color: ${theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const GameDetails = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${theme.colors.gray[600]};
`;

const DifficultyBadge = styled.span<{ difficulty: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => {
    switch (props.difficulty) {
      case 'easy': return '#e8f5e8';
      case 'medium': return '#fff3e0';
      case 'hard': return '#ffebee';
      default: return '#f5f5f5';
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
`;

const PlayButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const FeaturedSection = styled.div`
  margin-bottom: 3rem;
`;

const FeaturedTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${theme.colors.gray[500]};
`;

const StemGames: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'science', name: 'Bilim' },
    { id: 'technology', name: 'Teknoloji' },
    { id: 'engineering', name: 'Mühendislik' },
    { id: 'mathematics', name: 'Matematik' }
  ];

  const difficulties = [
    { id: 'all', name: 'Tüm Seviyeler' },
    { id: 'easy', name: 'Kolay' },
    { id: 'medium', name: 'Orta' },
    { id: 'hard', name: 'Zor' }
  ];

  const filteredGames = stemGames.filter(game => {
    const categoryMatch = selectedCategory === 'all' || game.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || game.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const featuredGames = stemGames.filter(game => game.featured);
  const regularGames = filteredGames.filter(game => !game.featured);

  const handlePlayGame = (game: StemGame) => {
    // Oyun başlatma mantığı burada olacak
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
          Bilim, Teknoloji, Mühendislik ve Matematik alanlarında eğlenceli oyunlar ile öğrenelim!
          Her yaş grubuna uygun, interaktif ve eğitici oyunlar sizi bekliyor.
        </Subtitle>
      </Header>

      <FilterSection>
        <div>
          <strong>Kategori:</strong>
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
          <strong>Zorluk:</strong>
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
          <h3>Oyun bulunamadı</h3>
          <p>Seçtiğiniz kriterlere uygun oyun bulunmuyor. Farklı filtreler deneyin.</p>
        </EmptyState>
      )}
    </Container>
  );
};

export default StemGames;
