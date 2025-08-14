import styled from '@emotion/styled';
import { CharacterColors, CharacterCustomization } from './types';

export const CharacterContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  cursor: pointer;
  user-select: none;
`;

export const CharacterBody = styled.div<{ colors: CharacterColors }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => props.colors.body};
  border-radius: 50%;
`;

export const CharacterMane = styled.div<{ colors: CharacterColors; style: string }>`
  position: absolute;
  top: -20px;
  left: 10px;
  width: 80%;
  height: 60%;
  background-color: ${props => props.colors.mane};
  clip-path: ${props => getManeStyle(props.style)};
`;

export const CharacterHorn = styled.div<{ colors: CharacterColors }>`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 60px;
  background: linear-gradient(${props => props.colors.horn}, ${props => props.colors.body});
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
`;

export const CharacterEyes = styled.div<{ colors: CharacterColors }>`
  position: absolute;
  top: 40%;
  width: 20px;
  height: 20px;
  background-color: ${props => props.colors.eyes};
  border-radius: 50%;
  
  &.left {
    left: 30%;
  }
  
  &.right {
    right: 30%;
  }
`;

export const EffectLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const getManeStyle = (style: string): string => {
  switch (style) {
    case 'wavy':
      return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
    case 'straight':
      return 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)';
    case 'braided':
      return 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)';
    case 'short':
      return 'polygon(20% 0%, 80% 0%, 90% 50%, 10% 50%)';
    default:
      return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
  }
};