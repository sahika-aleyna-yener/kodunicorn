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
  background: linear-gradient(135deg, ${theme.colors.secondary}20, ${theme.colors.accent}20);
  padding: ${theme.spacing.xxlarge} 0;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.large};

  span {
    color: ${theme.colors.primary};
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ContentSection = styled.section`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${theme.spacing.xxlarge} ${theme.spacing.xlarge};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSizes.title};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xlarge};
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xlarge};
  margin-bottom: ${theme.spacing.xxlarge};
`;

const Card = styled(motion.div)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.xlarge};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
`;

const CardTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.medium};
`;

const CardDescription = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.medium};
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.large};
  margin: ${theme.spacing.xxlarge} 0;
`;

const ContentCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.medium};
  text-align: center;
  box-shadow: ${theme.shadows.small};
  border: 2px solid ${theme.colors.secondary};
`;

const ContentIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing.medium};
`;

const ContentTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.small};
`;

const ContentDescription = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSizes.small};
  line-height: 1.4;
`;

export const CreativeContent: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>Yaratıcı İçerik</span> Üretimi
        </HeroTitle>
        <HeroDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Blog yazıları, video içerikler ve interaktif materyaller. 
          Öğrenmeyi eğlenceli hale getiren yaratıcı içerikler üretiyoruz.
        </HeroDescription>
      </HeroSection>

      <ContentSection>
        <BackButton to="/">
          ← Ana Sayfaya Dön
        </BackButton>

        <SectionTitle>İçerik Türlerimiz</SectionTitle>
        <ContentGrid>
          <ContentCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContentIcon>📝</ContentIcon>
            <ContentTitle>Blog Yazıları</ContentTitle>
            <ContentDescription>
              Teknoloji, eğitim ve kariyer konularında 
              güncel ve bilgilendirici blog yazıları.
            </ContentDescription>
          </ContentCard>
          <ContentCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContentIcon>🎥</ContentIcon>
            <ContentTitle>Video İçerikler</ContentTitle>
            <ContentDescription>
              Eğitici videolar, tutorial'lar ve 
              canlı yayınlar.
            </ContentDescription>
          </ContentCard>
          <ContentCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContentIcon>🎮</ContentIcon>
            <ContentTitle>İnteraktif Oyunlar</ContentTitle>
            <ContentDescription>
              Öğrenmeyi eğlenceli hale getiren 
              eğitici oyunlar ve quiz'ler.
            </ContentDescription>
          </ContentCard>
          <ContentCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ContentIcon>📊</ContentIcon>
            <ContentTitle>İnfografikler</ContentTitle>
            <ContentDescription>
              Karmaşık konuları görsel olarak 
              anlaşılır hale getiren infografikler.
            </ContentDescription>
          </ContentCard>
        </ContentGrid>

        <SectionTitle>İçerik Stratejimiz</SectionTitle>
        <Grid>
          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CardTitle>🎯 Hedef Odaklı İçerik</CardTitle>
            <CardDescription>
              Her yaş grubu ve seviye için özel olarak tasarlanmış içerikler. 
              İlkokul öğrencisinden yetişkinlere kadar herkes için uygun materyaller.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardTitle>🔄 Güncel ve Trend</CardTitle>
            <CardDescription>
              Teknoloji dünyasındaki en son gelişmeleri takip ediyoruz. 
              Güncel konular ve trendler hakkında içerik üretiyoruz.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CardTitle>🎨 Yaratıcı Tasarım</CardTitle>
            <CardDescription>
              Sadece bilgi değil, görsel olarak da çekici içerikler. 
              Modern tasarım prensipleri ile kullanıcı deneyimini ön planda tutuyoruz.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>📱 Çoklu Platform</CardTitle>
            <CardDescription>
              Web, mobil ve sosyal medya platformları için optimize edilmiş içerikler. 
              Her platformda en iyi deneyimi sunuyoruz.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CardTitle>🤝 Topluluk Katılımı</CardTitle>
            <CardDescription>
              Kullanıcılarımızın geri bildirimleri ve önerileri ile 
              içeriklerimizi sürekli geliştiriyoruz.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <CardTitle>📈 Veri Odaklı</CardTitle>
            <CardDescription>
              Hangi içeriklerin daha etkili olduğunu analiz ediyoruz. 
              Kullanıcı davranışlarını inceleyerek içerik stratejimizi optimize ediyoruz.
            </CardDescription>
          </Card>
        </Grid>
      </ContentSection>
    </PageContainer>
  );
}; 