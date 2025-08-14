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

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.large};
  margin: ${theme.spacing.xxlarge} 0;
`;

const CourseCard = styled(motion.div)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.small};
  border-left: 4px solid ${theme.colors.accent};
`;

const CourseTitle = styled.h3`
  font-size: ${theme.typography.fontSizes.large};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.medium};
`;

const CourseDescription = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.medium};
`;

const CourseLevel = styled.span`
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.typography.fontSizes.small};
  font-weight: ${theme.typography.fontWeights.medium};
`;

export const ComputerScience: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>Bilgisayar Bilimleri</span> Eğitimi
        </HeroTitle>
        <HeroDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Python, veri analizi, web geliştirme ve daha fazlası. 
          Güncel teknolojiler ve pratik projelerle geleceğin teknolojilerini öğrenin.
        </HeroDescription>
      </HeroSection>

      <ContentSection>
        <BackButton to="/">
          ← Ana Sayfaya Dön
        </BackButton>

        <SectionTitle>Kurslarımız</SectionTitle>
        <CourseGrid>
          <CourseCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CourseTitle>🐍 Python Programlama</CourseTitle>
            <CourseDescription>
              Sıfırdan Python öğrenin. Temel kavramlardan ileri seviye 
              konulara kadar kapsamlı eğitim.
            </CourseDescription>
            <CourseLevel>Başlangıç - İleri</CourseLevel>
          </CourseCard>
          <CourseCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CourseTitle>📊 Veri Analizi</CourseTitle>
            <CourseDescription>
              Pandas, NumPy ve Matplotlib ile veri analizi. 
              Gerçek dünya verileriyle çalışın.
            </CourseDescription>
            <CourseLevel>Orta - İleri</CourseLevel>
          </CourseCard>
          <CourseCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CourseTitle>🌐 Web Geliştirme</CourseTitle>
            <CourseDescription>
              HTML, CSS, JavaScript ve React ile modern web 
              uygulamaları geliştirin.
            </CourseDescription>
            <CourseLevel>Başlangıç - Orta</CourseLevel>
          </CourseCard>
          <CourseCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CourseTitle>🤖 Yapay Zeka</CourseTitle>
            <CourseDescription>
              Makine öğrenmesi ve derin öğrenme temelleri. 
              TensorFlow ve PyTorch ile AI projeleri.
            </CourseDescription>
            <CourseLevel>İleri</CourseLevel>
          </CourseCard>
          <CourseCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CourseTitle>📱 Mobil Uygulama</CourseTitle>
            <CourseDescription>
              React Native ile cross-platform mobil uygulamalar 
              geliştirin.
            </CourseDescription>
            <CourseLevel>Orta</CourseLevel>
          </CourseCard>
          <CourseCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <CourseTitle>🔒 Siber Güvenlik</CourseTitle>
            <CourseDescription>
              Temel güvenlik kavramları, etik hacking ve 
              güvenli kod yazma teknikleri.
            </CourseDescription>
            <CourseLevel>Orta - İleri</CourseLevel>
          </CourseCard>
        </CourseGrid>

        <SectionTitle>Öğrenme Yaklaşımımız</SectionTitle>
        <Grid>
          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CardTitle>🎯 Proje Odaklı Öğrenme</CardTitle>
            <CardDescription>
              Sadece teorik değil, gerçek projeler geliştirerek öğrenin. 
              Her kurs sonunda portföyünüze ekleyebileceğiniz projeler.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardTitle>🔄 Sürekli Güncelleme</CardTitle>
            <CardDescription>
              Teknoloji hızla değişiyor. Kurslarımız güncel teknolojiler 
              ve en iyi pratiklerle sürekli güncelleniyor.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CardTitle>👥 Topluluk Desteği</CardTitle>
            <CardDescription>
              Diğer öğrencilerle birlikte çalışın, sorularınızı sorun 
              ve deneyimlerinizi paylaşın.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>📈 Kariyer Rehberliği</CardTitle>
            <CardDescription>
              Sadece kod yazmayı değil, teknoloji kariyerinizi 
              planlamayı da öğrenin.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CardTitle>🏆 Sertifikalar</CardTitle>
            <CardDescription>
              Kursları tamamladığınızda profesyonel sertifikalar 
              alın ve kariyerinizi hızlandırın.
            </CardDescription>
          </Card>

          <Card
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <CardTitle>💼 İş Fırsatları</CardTitle>
            <CardDescription>
              Partner şirketlerimizle staj ve iş fırsatları. 
              Öğrendiklerinizi pratiğe dökün.
            </CardDescription>
          </Card>
        </Grid>
      </ContentSection>
    </PageContainer>
  );
}; 