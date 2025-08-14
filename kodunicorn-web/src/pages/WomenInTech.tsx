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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.large};
  margin: ${theme.spacing.xxlarge} 0;
`;

const StatCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.medium};
  text-align: center;
  box-shadow: ${theme.shadows.small};
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: ${theme.typography.fontWeights.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.small};
`;

const StatLabel = styled.div`
  color: ${theme.colors.text};
  font-weight: ${theme.typography.fontWeights.medium};
`;

export const WomenInTech: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>Teknolojide Kadın</span> Hareketi
        </HeroTitle>
        <HeroDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Teknoloji dünyasında kadınların başarı hikayeleri, deneyimleri ve 
          ilham verici yolculukları. Geleceğin teknoloji liderlerini yetiştiriyoruz.
        </HeroDescription>
      </HeroSection>

      <ContentSection>
        <BackButton to="/">
          ← Ana Sayfaya Dön
        </BackButton>

        <StatsGrid>
          <StatCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <StatNumber>25%</StatNumber>
            <StatLabel>Teknoloji Sektöründe Kadın Oranı</StatLabel>
          </StatCard>
          <StatCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <StatNumber>150+</StatNumber>
            <StatLabel>Mentorluk Programı</StatLabel>
          </StatCard>
          <StatCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StatNumber>1000+</StatNumber>
            <StatLabel>Başarı Hikayesi</StatLabel>
          </StatCard>
        </StatsGrid>

        <SectionTitle>Neler Sunuyoruz?</SectionTitle>
        <Grid>
          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CardTitle>👩‍💻 Mentorluk Programları</CardTitle>
            <CardDescription>
              Deneyimli kadın teknoloji uzmanlarından birebir mentorluk alın. 
              Kariyer yolculuğunuzda size rehberlik edecek mentorlarımızla tanışın.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardTitle>📚 Başarı Hikayeleri</CardTitle>
            <CardDescription>
              Teknoloji dünyasında başarıya ulaşmış kadınların ilham verici 
              hikayelerini okuyun. Onların deneyimlerinden öğrenin.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CardTitle>🤝 Topluluk Etkinlikleri</CardTitle>
            <CardDescription>
              Diğer kadın teknoloji meraklılarıyla buluşun. Networking 
              etkinlikleri, workshop'lar ve konferanslar düzenliyoruz.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>🎯 Kariyer Rehberliği</CardTitle>
            <CardDescription>
              Teknoloji kariyerinizi planlamak için profesyonel rehberlik 
              alın. CV hazırlama, mülakat teknikleri ve daha fazlası.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CardTitle>💡 Proje Fırsatları</CardTitle>
            <CardDescription>
              Gerçek dünya projelerinde çalışma fırsatları. 
              Portföyünüzü geliştirin ve deneyim kazanın.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <CardTitle>🌟 Ödül ve Tanınma</CardTitle>
            <CardDescription>
              Başarılarınızı kutlayın. Ödül programları ve 
              tanınma fırsatları ile motivasyonunuzu artırın.
            </CardDescription>
          </Card>
        </Grid>
      </ContentSection>
    </PageContainer>
  );
}; 