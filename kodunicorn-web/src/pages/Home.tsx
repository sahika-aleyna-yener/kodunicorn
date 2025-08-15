import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import { useSEO } from '../hooks/useSEO';

// Yeni animasyonlar
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
`;

const rainbow = keyframes`
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  background: radial-gradient(circle at 20% 80%, ${theme.colors.primary}15 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, ${theme.colors.secondary}15 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, ${theme.colors.accent}10 0%, transparent 50%);
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  margin-top: 0;
  padding-top: 120px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff69b4' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    animation: ${float} 20s ease-in-out infinite;
    pointer-events: none;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xlarge};
    padding-top: 120px;
    min-height: 80vh;
    overflow: hidden;
    margin-top: 0;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.large};
    padding-top: 120px;
    min-height: 70vh;
    overflow: hidden;
    margin-top: 0;
  }
`;

const HeroContent = styled.div`
  max-width: ${theme.breakpoints.wide};
  text-align: center;
  position: relative;
  z-index: 2;
  width: 100%;
  overflow: hidden;
  margin-top: 40px;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 90%;
    padding: 0 1rem;
    margin-top: 40px;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 95%;
    padding: 0 0.5rem;
    margin-top: 40px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};
  font-weight: ${theme.typography.fontWeights.bold};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;

  span {
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${rainbow} 4s linear infinite;
    position: relative;
    
    &::after {
      content: '✨';
      position: absolute;
      top: -10px;
      right: -30px;
      font-size: 2rem;
      animation: ${sparkle} 2s ease-in-out infinite;
    }
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
    padding: 0 1rem;
    
    span::after {
      right: -25px;
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.8rem;
    padding: 0 0.5rem;
    
    span::after {
      right: -20px;
      font-size: 1.2rem;
    }
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: ${theme.typography.fontSizes.xlarge};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xlarge};
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-weight: ${theme.typography.fontWeights.medium};
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSizes.large};
    max-width: 700px;
    margin-bottom: ${theme.spacing.large};
    padding: 0 1rem;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSizes.medium};
    max-width: 100%;
    margin-bottom: ${theme.spacing.medium};
    padding: 0 0.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.large};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.medium};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.small};
  }
`;

const Button = styled(motion(Link))`
  padding: ${theme.spacing.large} ${theme.spacing.xxlarge};
  border-radius: ${theme.borderRadius.large};
  font-weight: ${theme.typography.fontWeights.bold};
  font-size: ${theme.typography.fontSizes.large};
  transition: all ${theme.transitions.normal};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.small};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.medium} ${theme.spacing.xlarge};
    font-size: ${theme.typography.fontSizes.medium};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.small} ${theme.spacing.large};
    font-size: ${theme.typography.fontSizes.small};
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.medium};
  
  &:hover {
    box-shadow: ${theme.shadows.large};
    transform: translateY(-4px);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const SecondaryButton = styled(Button)`
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  border: 3px solid ${theme.colors.primary};
  box-shadow: ${theme.shadows.small};
  
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadows.medium};
    transform: translateY(-4px);
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    border-width: 2px;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const FeaturesSection = styled.section`
  padding: ${theme.spacing.xxlarge} 0;
  background: 
    radial-gradient(circle at 10% 20%, rgba(255, 107, 157, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(78, 205, 196, 0.05) 0%, transparent 50%),
    ${theme.colors.background};
  position: relative;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xlarge} 0;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.large} 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xxlarge};
  font-weight: ${theme.typography.fontWeights.bold};
  
  &::after {
    content: '🌟';
    display: block;
    font-size: 2rem;
    margin-top: ${theme.spacing.medium};
    animation: ${bounce} 2s ease-in-out infinite;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
    margin-bottom: ${theme.spacing.xlarge};
    
    &::after {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: ${theme.spacing.large};
    
    &::after {
      font-size: 1.2rem;
    }
  }
`;

const FeaturesGrid = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: ${theme.spacing.xxlarge};
  padding: 0 ${theme.spacing.xlarge};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${theme.spacing.xlarge};
    padding: 0 ${theme.spacing.large};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.large};
    padding: 0 ${theme.spacing.medium};
  }
`;

const FeatureCard = styled(motion(Link))`
  background: ${theme.colors.white};
  padding: ${theme.spacing.xxlarge};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.medium};
  text-align: center;
  text-decoration: none;
  color: inherit;
  display: block;
  transition: all ${theme.transitions.normal};
  border: 2px solid transparent;
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
    box-shadow: ${theme.shadows.large};
    border-color: ${theme.colors.primary};
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xlarge};
    
    &:hover {
      transform: translateY(-4px);
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.large};
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${theme.spacing.large};
  animation: ${float} 3s ease-in-out infinite;
  display: inline-block;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.xlarge};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};
  font-weight: ${theme.typography.fontWeights.bold};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSizes.large};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSizes.medium};
  }
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.7;
  font-size: ${theme.typography.fontSizes.medium};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSizes.small};
  }
`;

const AboutSection = styled.section`
  padding: ${theme.spacing.xxlarge} 0;
  background: 
    radial-gradient(circle at 80% 20%, rgba(255, 230, 109, 0.1) 0%, transparent 50%),
    ${theme.colors.white};
  position: relative;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xlarge} 0;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.large} 0;
  }
`;

const AboutContent = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${theme.spacing.xlarge};
  text-align: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.large};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 ${theme.spacing.medium};
  }
`;

const AboutTitle = styled.h2`
  font-size: 3rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};
  font-weight: ${theme.typography.fontWeights.bold};
  
  &::after {
    content: '💖';
    display: block;
    font-size: 2rem;
    margin-top: ${theme.spacing.medium};
    animation: ${sparkle} 2s ease-in-out infinite;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
    
    &::after {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
    
    &::after {
      font-size: 1.2rem;
    }
  }
`;

const AboutDescription = styled.p`
  font-size: ${theme.typography.fontSizes.xlarge};
  color: ${theme.colors.text};
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: ${theme.typography.fontWeights.medium};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSizes.large};
    max-width: 700px;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSizes.medium};
    max-width: 100%;
    padding: 0 1rem;
  }
`;

export const Home: React.FC = () => {
  useSEO({
    title: 'KodUnicorn - Teknoloji, Bilim ve Eğitim Platformu',
    description: 'KodUnicorn, her yaş grubu için teknoloji, bilim ve eğitim içerikleri sunan interaktif platform. STEM oyunları, blog yazıları, eğitim materyalleri ve daha fazlası.',
    keywords: 'teknoloji, bilim, eğitim, STEM, kodlama, programlama, matematik, mühendislik, çocuk eğitimi, interaktif öğrenme, oyunlaştırma',
    url: 'https://kodunicorn.com.tr/'
  });

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span>KodUnicorn</span>'a Hoş Geldiniz
          </HeroTitle>
          
          <HeroDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Çocuklar için eğlenceli teknoloji, bilim ve eğitim platformu! 
            🚀 Oyunlarla öğren, yaratıcılığını keşfet, geleceği şekillendir!
            <br />
            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>
              🎮 STEM Oyunları • 📚 Mini Dersler • 🏆 Ödül Sistemi • 🌟 Günlük Görevler
            </span>
          </HeroDescription>

          <ButtonGroup>
            <PrimaryButton
              to="/education"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              🎓 Eğitime Başla
            </PrimaryButton>
            
            <SecondaryButton
              to="/blog"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              📚 Blog'u Keşfet
            </SecondaryButton>
            
            <SecondaryButton
              to="/character"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              🦄 Karakterini Özelleştir
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Neler Sunuyoruz?</SectionTitle>
        <FeaturesGrid>
          <FeatureCard
            to="/stem-games"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FeatureIcon>🎮</FeatureIcon>
            <FeatureTitle>STEM Oyunları</FeatureTitle>
            <FeatureDescription>
              Kodlama, matematik, fen deneyleri ve robotik oyunları! 
              Eğlenceli quizler ve interaktif bulmacalar! 🧩
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            to="/education"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FeatureIcon>📚</FeatureIcon>
            <FeatureTitle>Mini Dersler</FeatureTitle>
            <FeatureDescription>
              Kısa ve anlaşılır video anlatımlar! 
              Evde yapabileceğin basit STEM projeleri! 🔬
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            to="/achievements"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FeatureIcon>🏆</FeatureIcon>
            <FeatureTitle>Ödül Sistemi</FeatureTitle>
            <FeatureDescription>
              Rozetler, yıldızlar ve sticker'lar kazan! 
              Başarılarını takip et ve seviye atla! ⭐
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            to="/daily-challenge"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <FeatureIcon>🌟</FeatureIcon>
            <FeatureTitle>Günlük Görevler</FeatureTitle>
            <FeatureDescription>
              Her gün yeni STEM görevleri ve bulmacalar! 
              Merakını tetikleyen mini deneyler! 🧪
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            to="/community"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <FeatureIcon>👥</FeatureIcon>
            <FeatureTitle>Topluluk</FeatureTitle>
            <FeatureDescription>
              Diğer çocuklarla projelerini paylaş! 
              Online yarışmalar ve etkinlikler! 🎯
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            to="/family-guide"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <FeatureIcon>👨‍👩‍👧‍👦</FeatureIcon>
            <FeatureTitle>Aile Rehberi</FeatureTitle>
            <FeatureDescription>
              Ebeveynler için STEM öğrenim ipuçları! 
              Çocuklarla birlikte öğrenme fırsatları! 💡
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <AboutSection>
        <AboutContent>
          <AboutTitle>
            Neden KodUnicorn?
          </AboutTitle>
          <AboutDescription>
            KodUnicorn, çocukların STEM alanlarında merakını tetikleyen, 
            yaratıcılığını geliştiren ve geleceğin teknolojilerini keşfetmelerini 
            sağlayan eğlenceli bir platformdur. Oyunlaştırılmış öğrenme, 
            interaktif deneyler ve güvenli topluluk deneyimi ile çocuklar 
            bilimi sevmenin yanı sıra problem çözme becerilerini de geliştirirler. 
            🚀✨
          </AboutDescription>
        </AboutContent>
      </AboutSection>
    </>
  );
};