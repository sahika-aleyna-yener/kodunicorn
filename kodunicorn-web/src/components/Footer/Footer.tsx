import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  padding: ${theme.spacing.xxlarge} 0;
  margin-top: ${theme.spacing.xxlarge};
`;

const FooterContent = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${theme.spacing.xlarge};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xlarge};
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.medium};
`;

const FooterTitle = styled.h3`
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.medium};
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.white};
  transition: color ${theme.transitions.fast};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const FooterText = styled.p`
  color: ${theme.colors.white};
  margin: 0;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.medium};
`;

const SocialLink = styled.a`
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSizes.large};
  transition: color ${theme.transitions.fast};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${theme.spacing.xlarge};
  margin-top: ${theme.spacing.xlarge};
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: ${theme.colors.white};
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>KodUnicorn</FooterTitle>
          <FooterText>
            Teknoloji, bilim ve eğitimi herkes için erişilebilir kılmayı amaçlayan
            bir platform.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Bağlantılar</FooterTitle>
          <FooterLink to="/">Ana Sayfa</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/education">Eğitim</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Kategoriler</FooterTitle>
          <FooterLink to="/blog/women-in-tech">Teknolojide Kadın</FooterLink>
          <FooterLink to="/blog/computer-science">Bilgisayar Bilimleri</FooterLink>
          <FooterLink to="/blog/education">Eğitim İçerikleri</FooterLink>
          <FooterLink to="/blog/general-culture">Genel Kültür</FooterLink>
          <FooterLink to="/blog/daily-life">Günlük Yaşam</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>İletişim</FooterTitle>
          <SocialLinks>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </SocialLink>
          </SocialLinks>
          <FooterText>
            Email: info@kodunicorn.com.tr
          </FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <FooterText>
          © {new Date().getFullYear()} KodUnicorn. Tüm hakları saklıdır.
        </FooterText>
      </Copyright>
    </FooterContainer>
  );
};