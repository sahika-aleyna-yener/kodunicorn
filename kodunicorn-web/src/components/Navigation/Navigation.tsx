import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const Nav = styled.nav`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.medium} ${theme.spacing.xlarge};
  box-shadow: ${theme.shadows.small};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
`;

const Container = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.small};
  text-decoration: none;
  color: ${theme.colors.primary};
  font-weight: ${theme.typography.fontWeights.bold};
  font-size: ${theme.typography.fontSizes.large};

  img {
    height: 40px;
    width: 40px;
    transition: transform ${theme.transitions.fast};
  }

  &:hover img {
    transform: scale(1.1);
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSizes.medium};
    
    img {
      height: 35px;
      width: 35px;
    }
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSizes.small};
    
    img {
      height: 30px;
      width: 30px;
    }
  }
`;

const LogoText = styled.span`
  background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.large};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: ${theme.spacing.medium};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.text};
  font-weight: ${props => props.isActive ? theme.typography.fontWeights.semibold : theme.typography.fontWeights.medium};
  position: relative;
  padding: ${theme.spacing.small};
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${theme.colors.primary};
    transform: scaleX(${props => props.isActive ? 1 : 0});
    transform-origin: center;
    transition: transform ${theme.transitions.fast};
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <Nav>
      <Container>
        <Logo to="/">
          <motion.img 
            src="/logo.svg" 
            alt="KodUnicorn Logo"
            whileHover={{ rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          />
          <LogoText>KodUnicorn</LogoText>
        </Logo>

        <NavLinks>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink 
              to="/" 
              isActive={location.pathname === '/'}
            >
              Ana Sayfa
            </NavLink>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink 
              to="/blog" 
              isActive={isActive('/blog')}
            >
              Blog
            </NavLink>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink 
              to="/education" 
              isActive={isActive('/education')}
            >
              Eğitim
            </NavLink>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink 
              to="/character" 
              isActive={isActive('/character')}
            >
              Karakter
            </NavLink>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink 
              to="/stem-games" 
              isActive={isActive('/stem-games')}
            >
              STEM Oyunları
            </NavLink>
          </motion.div>
        </NavLinks>
      </Container>
    </Nav>
  );
};