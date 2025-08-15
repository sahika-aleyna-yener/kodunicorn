import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.secondary}20);
  padding: ${theme.spacing.xxlarge} 0;
  text-align: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xlarge} 0;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.large} 0;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};

  span {
    color: ${theme.colors.primary};
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSizes.medium};
    max-width: 600px;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSizes.small};
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const ContentSection = styled.section`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${theme.spacing.xxlarge} ${theme.spacing.xlarge};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xlarge} ${theme.spacing.large};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.large} ${theme.spacing.medium};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSizes.title};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xlarge};
  text-align: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSizes.large};
    margin-bottom: ${theme.spacing.large};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSizes.medium};
    margin-bottom: ${theme.spacing.medium};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xlarge};
  margin-bottom: ${theme.spacing.xxlarge};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.spacing.large};
    margin-bottom: ${theme.spacing.xlarge};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.medium};
    margin-bottom: ${theme.spacing.large};
  }
`;

const Card = styled(motion.div)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.xlarge};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.large};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.medium};
  }
`;

const CardTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.medium};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSizes.medium};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSizes.small};
  }
`;

const CardDescription = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.medium};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSizes.small};
  }
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
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing.large};
    font-size: ${theme.typography.fontSizes.small};
  }
`;

const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.large};
  margin: ${theme.spacing.xxlarge} 0;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${theme.spacing.medium};
    margin: ${theme.spacing.xlarge} 0;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.small};
    margin: ${theme.spacing.large} 0;
  }
`;

const CommunityCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.medium};
  text-align: center;
  box-shadow: ${theme.shadows.medium};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.medium};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.small};
  }
`;

const CommunityIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing.medium};
`;

const CommunityTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.small};
`;

const CommunityDescription = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSizes.small};
  line-height: 1.4;
`;

export const Community: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>Topluluk</span> ve İşbirliği
        </HeroTitle>
        <HeroDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Diğer öğrencilerle bağlantı kurun, deneyimlerinizi paylaşın. 
          Mentorluk ve işbirliği fırsatları ile birlikte büyüyün.
        </HeroDescription>
      </HeroSection>

      <ContentSection>
        <BackButton to="/">
          ← Ana Sayfaya Dön
        </BackButton>

        <SectionTitle>Topluluk Özellikleri</SectionTitle>
        <CommunityGrid>
          <CommunityCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CommunityIcon>👥</CommunityIcon>
            <CommunityTitle>Öğrenci Ağı</CommunityTitle>
            <CommunityDescription>
              Binlerce öğrenci ile bağlantı kurun, 
              deneyimlerinizi paylaşın.
            </CommunityDescription>
          </CommunityCard>
          <CommunityCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CommunityIcon>🎓</CommunityIcon>
            <CommunityTitle>Mentorluk</CommunityTitle>
            <CommunityDescription>
              Deneyimli profesyonellerden 
              birebir mentorluk alın.
            </CommunityDescription>
          </CommunityCard>
          <CommunityCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CommunityIcon>🤝</CommunityIcon>
            <CommunityTitle>Proje İşbirlikleri</CommunityTitle>
            <CommunityDescription>
              Birlikte projeler geliştirin ve 
              portföyünüzü güçlendirin.
            </CommunityDescription>
          </CommunityCard>
          <CommunityCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CommunityIcon>💬</CommunityIcon>
            <CommunityTitle>Forum Tartışmaları</CommunityTitle>
            <CommunityDescription>
              Teknik konularda tartışın ve 
              sorularınızı sorun.
            </CommunityDescription>
          </CommunityCard>
        </CommunityGrid>

        <SectionTitle>Topluluk Faydaları</SectionTitle>
        <Grid>
          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CardTitle>🌱 Hızlı Öğrenme</CardTitle>
            <CardDescription>
              Diğer öğrencilerle birlikte çalışarak daha hızlı öğrenin. 
              Farklı bakış açıları ve yaklaşımlar keşfedin. 
              Hata yapmaktan korkmayın, birlikte çözüm bulun.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardTitle>🎯 Kariyer Fırsatları</CardTitle>
            <CardDescription>
              Network'ünüzü genişletin ve kariyer fırsatları yakalayın. 
              Partner şirketlerimizle tanışın, staj ve iş imkanları 
              keşfedin.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CardTitle>💡 İnovasyon</CardTitle>
            <CardDescription>
              Farklı disiplinlerden gelen öğrencilerle çalışarak 
              yaratıcı çözümler üretin. Çeşitlilik inovasyonu 
              tetikler.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>🏆 Motivasyon</CardTitle>
            <CardDescription>
              Diğer öğrencilerin başarılarını görerek motivasyonunuzu 
              artırın. Birlikte hedefler belirleyin ve 
              birbirinizi destekleyin.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CardTitle>🌍 Global Bağlantılar</CardTitle>
            <CardDescription>
              Dünyanın farklı yerlerinden gelen öğrencilerle 
              tanışın. Kültürler arası deneyim kazanın ve 
              global perspektif geliştirin.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <CardTitle>🎪 Etkinlikler</CardTitle>
            <CardDescription>
              Hackathon'lar, workshop'lar ve konferanslar. 
              Yüz yüze ve online etkinliklerle topluluğumuzun 
              bir parçası olun.
            </CardDescription>
          </Card>
        </Grid>
      </ContentSection>
    </PageContainer>
  );
}; 