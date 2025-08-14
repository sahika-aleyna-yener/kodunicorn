import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { CharacterColors } from './types';

// Yeni animasyonlar
const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
`;

const rainbow = keyframes`
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-7px); }
`;

export const CharacterContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  cursor: pointer;
  user-select: none;
  animation: ${float} 3s ease-in-out infinite;
  
  &:hover {
    animation: ${bounce} 0.6s ease-in-out;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: radial-gradient(circle, rgba(255, 107, 157, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    animation: ${sparkle} 2s ease-in-out infinite;
  }
`;

export const CharacterBody = styled.div<{ colors: CharacterColors }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 30%, ${props => props.colors.body} 0%, ${props => props.colors.body}dd 100%);
  border-radius: 50%;
  box-shadow: 
    0 8px 32px rgba(255, 107, 157, 0.3),
    inset 0 -8px 16px rgba(0, 0, 0, 0.1);
  border: 4px solid ${props => props.colors.body}dd;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 
      0 12px 40px rgba(255, 107, 157, 0.4),
      inset 0 -8px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const CharacterMane = styled.div<{ colors: CharacterColors; style: string }>`
  position: absolute;
  top: -30px;
  left: 5px;
  width: 90%;
  height: 70%;
  background: linear-gradient(135deg, ${props => props.colors.mane}, ${props => props.colors.mane}dd);
  clip-path: ${props => getManeStyle(props.style)};
  border-radius: 50% 50% 0 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  animation: ${rainbow} 4s linear infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%);
    animation: ${sparkle} 3s ease-in-out infinite;
  }
`;

export const CharacterHorn = styled.div<{ colors: CharacterColors }>`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 70px;
  background: linear-gradient(135deg, ${props => props.colors.horn}, ${props => props.colors.horn}dd, ${props => props.colors.body});
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  border-radius: 50% 50% 0 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: ${sparkle} 2.5s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.6) 50%, transparent 70%);
    animation: ${sparkle} 1.5s ease-in-out infinite;
  }
`;

export const CharacterEyes = styled.div<{ colors: CharacterColors }>`
  position: absolute;
  top: 45%;
  width: 24px;
  height: 24px;
  background: radial-gradient(circle at 30% 30%, ${props => props.colors.eyes}, ${props => props.colors.eyes}dd);
  border-radius: 50%;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 -2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid ${props => props.colors.eyes}dd;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: ${sparkle} 2s ease-in-out infinite;
  }
  
  &.left {
    left: 28%;
    animation: ${float} 3s ease-in-out infinite 0.5s;
  }
  
  &.right {
    right: 28%;
    animation: ${float} 3s ease-in-out infinite 1s;
  }
`;

export const EffectLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 107, 157, 0.05) 0%, transparent 70%);
    animation: ${sparkle} 4s ease-in-out infinite;
  }
`;

const getManeStyle = (style: string): string => {
  switch (style) {
    case 'wavy':
      return 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)';
    case 'straight':
      return 'polygon(5% 0%, 95% 0%, 90% 100%, 10% 100%)';
    case 'braided':
      return 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)';
    case 'short':
      return 'polygon(20% 0%, 80% 0%, 85% 60%, 15% 60%)';
    case 'curly':
      return 'polygon(0% 0%, 100% 0%, 90% 80%, 10% 80%)';
    default:
      return 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)';
  }
};