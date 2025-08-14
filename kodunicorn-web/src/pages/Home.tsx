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
  padding: ${theme.spacing.xxlarge};
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 107, 157, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 230, 109, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.white} 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="%23FF6B9D" opacity="0.1"/><circle cx="80" cy="40" r="1.5" fill="%234ECDC4" opacity="0.1"/><circle cx="40" cy="80" r="1" fill="%23FFE66D" opacity="0.1"/></svg>');
    animation: ${float} 6s ease-in-out infinite;
  }
`;

const HeroContent = styled.div`
  max-width: ${theme.breakpoints.wide};
  text-align: center;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};
  font-weight: ${theme.typography.fontWeights.bold};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

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
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.large};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
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
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  color: ${theme.colors.white};
  box-shadow: ${theme.shadows.medium};
  
  &:hover {
    box-shadow: ${theme.shadows.large};
    transform: translateY(-4px);
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
`;

const FeaturesSection = styled.section`
  padding: ${theme.spacing.xxlarge} 0;
  background: 
    radial-gradient(circle at 10% 20%, rgba(255, 107, 157, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(78, 205, 196, 0.05) 0%, transparent 50%),
    ${theme.colors.background};
  position: relative;
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
`;

const FeaturesGrid = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: ${theme.spacing.xxlarge};
  padding: 0 ${theme.spacing.xlarge};
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
`;

const FeatureIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${theme.spacing.large};
  animation: ${float} 3s ease-in-out infinite;
  display: inline-block;
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.xlarge};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};
  font-weight: ${theme.typography.fontWeights.bold};
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.7;
  font-size: ${theme.typography.fontSizes.medium};
`;

const AboutSection = styled.section`
  padding: ${theme.spacing.xxlarge} 0;
  background: 
    radial-gradient(circle at 80% 20%, rgba(255, 230, 109, 0.1) 0%, transparent 50%),
    ${theme.colors.white};
  position: relative;
`;

const AboutContent = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${theme.spacing.xlarge};
  text-align: center;
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
`;

const AboutDescription = styled.p`
  font-size: ${theme.typography.fontSizes.xlarge};
  color: ${theme.colors.text};
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: ${theme.typography.fontWeights.medium};
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
            Hoş Geldiniz <span>KodUnicorn</span>'a
          </HeroTitle>
          
          <HeroDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Teknoloji, bilim ve eğitimi herkes için erişilebilir kılmayı amaçlayan
            eğlenceli bir platform! 🚀 Öğrenme yolculuğunuza bizimle başlayın!
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
            to="/women-in-tech"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FeatureIcon>👩‍💻</FeatureIcon>
            <FeatureTitle>Teknolojide Kadın</FeatureTitle>
            <FeatureDescription>
              Teknoloji dünyasında kadınların başarı hikayeleri ve deneyimleri. 
              İlham verici hikayeler ve mentorluk fırsatları! 💪
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            to="/interactive-education"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FeatureIcon>🎓</FeatureIcon>
            <FeatureTitle>İnteraktif Eğitim</FeatureTitle>
            <FeatureDescription>
              Her yaş grubu için özelleştirilmiş, eğlenceli öğrenme deneyimi. 
              Oyunlaştırılmış içerikler ve pratik uygulamalar! 🎮
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            to="/gamification"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FeatureIcon>🌟</FeatureIcon>
            <FeatureTitle>Oyunlaştırma</FeatureTitle>
            <FeatureDescription>
              Başarılarınızı takip edin, rozetler kazanın ve kendinizi geliştirin. 
              Seviye atlama ve ödül sistemi! 🏆
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            to="/computer-science"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <FeatureIcon>📚</FeatureIcon>
            <FeatureTitle>Bilgisayar Bilimleri</FeatureTitle>
            <FeatureDescription>
              Python, veri analizi, web geliştirme ve daha fazlası. 
              Güncel teknolojiler ve pratik projeler! 💻
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            to="/creative-content"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <FeatureIcon>🎨</FeatureIcon>
            <FeatureTitle>Yaratıcı İçerik</FeatureTitle>
            <FeatureDescription>
              Blog yazıları, video içerikler ve interaktif materyaller. 
              Öğrenmeyi eğlenceli hale getiren içerikler! ✨
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            to="/community"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <FeatureIcon>🤝</FeatureIcon>
            <FeatureTitle>Topluluk</FeatureTitle>
            <FeatureDescription>
              Diğer öğrencilerle bağlantı kurun, deneyimlerinizi paylaşın. 
              Mentorluk ve işbirliği fırsatları! 🌈
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            to="/stem-games"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <FeatureIcon>🧪</FeatureIcon>
            <FeatureTitle>STEM Oyunları</FeatureTitle>
            <FeatureDescription>
              Bilim, Teknoloji, Mühendislik ve Matematik alanlarında eğlenceli oyunlar. 
              İnteraktif deneyler ve öğretici aktiviteler! 🔬
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <AboutSection>
        <AboutContent>
          <AboutTitle>Hakkımızda</AboutTitle>
          <AboutDescription>
            KodUnicorn, teknoloji ve eğitimi herkes için erişilebilir kılmayı amaçlayan 
            eğlenceli bir platformdur! 🦄 Bilgisayar bilimleri öğrencisi olarak, kendi deneyimlerimi 
            paylaşarak diğer öğrencilere ilham vermek ve onlara rehberlik etmek istiyorum.
            Birlikte öğrenelim, birlikte büyüyelim! 💖
          </AboutDescription>
        </AboutContent>
      </AboutSection>
    </>
  );
};