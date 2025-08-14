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
  background: linear-gradient(135deg, ${theme.colors.accent}20, ${theme.colors.primary}20);
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

const LevelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.large};
  margin: ${theme.spacing.xxlarge} 0;
`;

const LevelCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.medium};
  text-align: center;
  box-shadow: ${theme.shadows.small};
  border-left: 4px solid ${theme.colors.primary};
`;

const LevelTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.medium};
`;

const LevelDescription = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
`;

export const InteractiveEducation: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>İnteraktif Eğitim</span> Deneyimi
        </HeroTitle>
        <HeroDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Her yaş grubu için özelleştirilmiş, eğlenceli öğrenme deneyimi. 
          Oyunlaştırılmış içerikler ve pratik uygulamalarla öğrenmeyi keyifli hale getiriyoruz.
        </HeroDescription>
      </HeroSection>

      <ContentSection>
        <BackButton to="/">
          ← Ana Sayfaya Dön
        </BackButton>

        <SectionTitle>Eğitim Seviyeleri</SectionTitle>
        <LevelGrid>
          <LevelCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LevelTitle>🎯 İlkokul (7-10 yaş)</LevelTitle>
            <LevelDescription>
              Temel programlama kavramları, algoritma düşünme, 
              blok tabanlı programlama ve eğlenceli projeler.
            </LevelDescription>
          </LevelCard>
          <LevelCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <LevelTitle>🚀 Ortaokul (11-14 yaş)</LevelTitle>
            <LevelDescription>
              Python programlama, web geliştirme temelleri, 
              veri analizi ve robotik projeler.
            </LevelDescription>
          </LevelCard>
          <LevelCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LevelTitle>💻 Lise (15-18 yaş)</LevelTitle>
            <LevelDescription>
              İleri programlama, yapay zeka, mobil uygulama 
              geliştirme ve gerçek dünya projeleri.
            </LevelDescription>
          </LevelCard>
          <LevelCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <LevelTitle>🎓 Yetişkin (18+ yaş)</LevelTitle>
            <LevelDescription>
              Profesyonel geliştirme, kariyer odaklı eğitim, 
              sertifika programları ve mentorluk.
            </LevelDescription>
          </LevelCard>
        </LevelGrid>

        <SectionTitle>Öğrenme Yöntemlerimiz</SectionTitle>
        <Grid>
          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CardTitle>🎮 Oyunlaştırma</CardTitle>
            <CardDescription>
              Puanlar, rozetler ve seviye atlama sistemi ile 
              öğrenmeyi eğlenceli hale getiriyoruz. Her başarı 
              ödüllendirilir ve motivasyonunuz artar.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardTitle>🔄 İnteraktif Alıştırmalar</CardTitle>
            <CardDescription>
              Sadece okuyarak değil, uygulayarak öğrenin. 
              Canlı kod editörleri, quiz'ler ve pratik 
              projelerle bilgilerinizi pekiştirin.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CardTitle>📊 Kişiselleştirilmiş Öğrenme</CardTitle>
            <CardDescription>
              AI destekli öğrenme yolu ile size özel 
              içerikler sunuyoruz. Hızınıza ve seviyenize 
              göre adapte olan eğitim programları.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>👥 Grup Çalışmaları</CardTitle>
            <CardDescription>
              Diğer öğrencilerle birlikte çalışın, 
              projeler geliştirin ve deneyimlerinizi 
              paylaşın. İşbirliği becerilerinizi geliştirin.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CardTitle>🎯 Gerçek Dünya Projeleri</CardTitle>
            <CardDescription>
              Sadece teorik değil, pratik projeler geliştirin. 
              Portföyünüzü oluşturun ve gerçek problemleri 
              çözme deneyimi kazanın.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <CardTitle>📈 Sürekli Değerlendirme</CardTitle>
            <CardDescription>
              İlerlemenizi takip edin, güçlü ve zayıf 
              yönlerinizi keşfedin. Detaylı raporlar ve 
              önerilerle gelişiminizi hızlandırın.
            </CardDescription>
          </Card>
        </Grid>
      </ContentSection>
    </PageContainer>
  );
}; 