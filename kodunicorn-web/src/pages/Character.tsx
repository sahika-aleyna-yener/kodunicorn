import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';

// Basit animasyonlar
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #F0F8FF, #E9ECEF);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Comic Sans MS', 'Chalkboard SE', 'Inter', sans-serif;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: #FF6B9D;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  span {
    background: linear-gradient(135deg, #FF6B9D, #4ECDC4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
  font-size: 1.5rem;
  color: #2D2D2D;
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.8;
  font-weight: 500;
`;

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
  width: 100%;
  margin-bottom: 3rem;
`;

const CharacterCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border: 3px solid #FFE66D;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CharacterIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: ${float} 3s ease-in-out infinite;
`;

const CharacterName = styled.h3`
  font-size: 1.5rem;
  color: #FF6B9D;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const CharacterDescription = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #FF6B9D;
  text-decoration: none;
  font-weight: bold;
  padding: 1rem 2rem;
  background: white;
  border-radius: 25px;
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.2);
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
    text-decoration: none;
  }
`;

const FeatureList = styled.div`
  background: #FFE66D;
  color: #2D2D2D;
  padding: 1.5rem;
  border-radius: 15px;
  margin: 2rem 0;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
`;

export const Character: React.FC = () => {
  return (
    <PageContainer>
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
        Karakterini seç ve özelleştir! 🎨✨
      </Description>

      <CharacterGrid>
        <CharacterCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CharacterIcon>🦄</CharacterIcon>
          <CharacterName>Unicorn</CharacterName>
          <CharacterDescription>
            Sihirli ve renkli unicorn karakteri! ✨
          </CharacterDescription>
        </CharacterCard>

        <CharacterCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CharacterIcon>🤖</CharacterIcon>
          <CharacterName>Robot</CharacterName>
          <CharacterDescription>
            Teknolojik ve akıllı robot! 🔧
          </CharacterDescription>
        </CharacterCard>

        <CharacterCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <CharacterIcon>🌸</CharacterIcon>
          <CharacterName>Ponçik</CharacterName>
          <CharacterDescription>
            Tatlı ve sevimli ponçik! 🌸
          </CharacterDescription>
        </CharacterCard>
      </CharacterGrid>

      <FeatureList>
        <strong>🎨 Özellikler:</strong><br />
        ✨ Animasyonlar (float, sparkle, bounce)<br />
        🎨 Özelleştirme paneli (renkler, aksesuarlar)<br />
        🏆 Başarı sistemi (achievements, level up)<br />
        🌈 Renkli ve eğlenceli tasarım
      </FeatureList>

      <BackButton to="/">
        ← Ana Sayfaya Dön
      </BackButton>
    </PageContainer>
  );
};

export default Character; 