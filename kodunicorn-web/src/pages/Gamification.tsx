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
  background: linear-gradient(135deg, ${theme.colors.highlight}20, ${theme.colors.primary}20);
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

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.large};
  margin: ${theme.spacing.xxlarge} 0;
`;

const AchievementCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.medium};
  text-align: center;
  box-shadow: ${theme.shadows.small};
  border: 2px solid ${theme.colors.highlight};
`;

const AchievementIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing.medium};
`;

const AchievementTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.medium};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.small};
`;

const AchievementDescription = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.typography.fontSizes.small};
  line-height: 1.4;
`;

export const Gamification: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>Oyunlaştırma</span> Sistemi
        </HeroTitle>
        <HeroDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Başarılarınızı takip edin, rozetler kazanın ve kendinizi geliştirin. 
          Seviye atlama ve ödül sistemi ile öğrenmeyi eğlenceli hale getiriyoruz.
        </HeroDescription>
      </HeroSection>

      <ContentSection>
        <BackButton to="/">
          ← Ana Sayfaya Dön
        </BackButton>

        <SectionTitle>Başarı Sistemi</SectionTitle>
        <AchievementGrid>
          <AchievementCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AchievementIcon>🏆</AchievementIcon>
            <AchievementTitle>Seviye Sistemi</AchievementTitle>
            <AchievementDescription>
              1'den 100'e kadar seviyeler. Her seviye atlama ile yeni özellikler açılır.
            </AchievementDescription>
          </AchievementCard>
          <AchievementCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AchievementIcon>⭐</AchievementIcon>
            <AchievementTitle>Rozetler</AchievementTitle>
            <AchievementDescription>
              100+ farklı rozet. Başarılarınızı sergileyin ve koleksiyonunuzu genişletin.
            </AchievementDescription>
          </AchievementCard>
          <AchievementCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AchievementIcon>💎</AchievementIcon>
            <AchievementTitle>Puanlar</AchievementTitle>
            <AchievementDescription>
              XP puanları kazanın ve özel ödüller için harcayın.
            </AchievementDescription>
          </AchievementCard>
          <AchievementCard
            whileHover={{ y: -5, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AchievementIcon>👑</AchievementIcon>
            <AchievementTitle>Liderlik Tablosu</AchievementTitle>
            <AchievementDescription>
              Diğer öğrencilerle yarışın ve en üst sıralarda yer alın.
            </AchievementDescription>
          </AchievementCard>
        </AchievementGrid>

        <SectionTitle>Oyunlaştırma Özellikleri</SectionTitle>
        <Grid>
          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CardTitle>🎯 Günlük Görevler</CardTitle>
            <CardDescription>
              Her gün yeni görevler alın ve bonus puanlar kazanın. 
              Düzenli çalışma alışkanlığı geliştirin ve motivasyonunuzu 
              artırın. Streak sistemi ile kesintisiz öğrenme.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardTitle>🏅 Başarı Zincirleri</CardTitle>
            <CardDescription>
              Ardışık başarılar için özel ödüller. Bir görevi tamamladığınızda 
              bir sonraki görev daha değerli hale gelir. Zincir kırılmasın!
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CardTitle>🎁 Özel Ödüller</CardTitle>
            <CardDescription>
              Karakter özelleştirme, özel içerikler ve premium özellikler. 
              Puanlarınızı harcayarak benzersiz ödüller kazanın.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>📊 İlerleme Takibi</CardTitle>
            <CardDescription>
              Detaylı istatistikler ve grafiklerle ilerlemenizi görün. 
              Hangi alanlarda güçlü olduğunuzu ve gelişim alanlarınızı keşfedin.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CardTitle>🤝 Sosyal Özellikler</CardTitle>
            <CardDescription>
              Arkadaşlarınızla yarışın, başarılarınızı paylaşın ve 
              birlikte çalışın. Grup görevleri ve ortak hedefler.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <CardTitle>🎪 Özel Etkinlikler</CardTitle>
            <CardDescription>
              Sınırlı süreli etkinlikler, sezonluk yarışmalar ve 
              özel ödüller. Farklı temalar ve benzersiz deneyimler.
            </CardDescription>
          </Card>
        </Grid>
      </ContentSection>
    </PageContainer>
  );
}; 