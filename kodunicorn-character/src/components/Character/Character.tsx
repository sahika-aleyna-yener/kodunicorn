import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface CharacterProps {
  colors: {
    body: string;
    mane: string;
    horn: string;
    eyes: string;
  };
  maneStyle: 'straight' | 'wavy' | 'braided' | 'short' | 'long';
  outfit?: string;
  accessories: string[];
  effects: string[];
  mood: 'happy' | 'thinking' | 'excited' | 'surprised' | 'proud' | 'focused' | 'normal';
  animation?: string;
  onInteraction?: (type: string) => void;
}

const CharacterContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;
  cursor: pointer;
`;

const Body = styled.div<{ color: string }>`
  position: absolute;
  width: 200px;
  height: 160px;
  background-color: ${props => props.color};
  border-radius: 100px 100px 60px 60px;
  top: 80px;
  left: 50px;
`;

const Head = styled.div<{ color: string }>`
  position: absolute;
  width: 120px;
  height: 140px;
  background-color: ${props => props.color};
  border-radius: 60px 60px 40px 40px;
  top: 20px;
  left: 90px;
`;

const Horn = styled.div<{ color: string }>`
  position: absolute;
  width: 20px;
  height: 60px;
  background: linear-gradient(to top, ${props => props.color}, transparent);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  top: -40px;
  left: 50px;
`;

const Mane = styled.div<{ color: string; style: string }>`
  position: absolute;
  width: 140px;
  height: 160px;
  background-color: ${props => props.color};
  clip-path: ${props => {
    switch (props.style) {
      case 'wavy':
        return 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)';
      case 'straight':
        return 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)';
      case 'braided':
        return 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)';
      case 'short':
        return 'polygon(20% 0%, 80% 0%, 90% 50%, 10% 50%)';
      default:
        return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
    }
  }};
  top: -20px;
  left: -10px;
`;

const Eye = styled.div<{ color: string }>`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border-radius: 50%;
  
  &.left {
    left: 20px;
    top: 50px;
  }
  
  &.right {
    right: 20px;
    top: 50px;
  }
`;

const OutfitLayer = styled.div<{ outfit: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.outfit});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const AccessoryLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const EffectLayer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Character: React.FC<CharacterProps> = ({
  colors,
  maneStyle,
  outfit,
  accessories,
  effects,
  mood,
  animation,
  onInteraction
}) => {
  const handleClick = () => {
    onInteraction?.('click');
  };

  const handleHover = () => {
    onInteraction?.('hover');
  };

  const getMoodAnimation = () => {
    switch (mood) {
      case 'happy':
        return { scale: [1, 1.1, 1], transition: { duration: 0.3 } };
      case 'thinking':
        return { rotate: [0, -10, 0], transition: { duration: 1.5 } };
      case 'excited':
        return {
          scale: [1, 1.1],
          rotate: [-5, 5],
          transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' }
        };
      case 'surprised':
        return { scale: [1, 1.2, 1], y: [0, -10, 0], transition: { duration: 0.4 } };
      case 'proud':
        return { scale: [1, 1.1], y: [0, -5], transition: { duration: 1 } };
      case 'focused':
        return { scale: [1, 0.95, 1], transition: { duration: 2, repeat: Infinity } };
      default:
        return {};
    }
  };

  return (
    <CharacterContainer
      onClick={handleClick}
      onMouseEnter={handleHover}
      animate={getMoodAnimation()}
    >
      <Body color={colors.body}>
        <Head color={colors.body}>
          <Horn color={colors.horn} />
          <Mane color={colors.mane} style={maneStyle} />
          <Eye color={colors.eyes} className="left" />
          <Eye color={colors.eyes} className="right" />
        </Head>
      </Body>

      {outfit && (
        <OutfitLayer outfit={outfit} />
      )}

      <AccessoryLayer>
        {accessories.map((accessory, index) => (
          <img
            key={index}
            src={accessory}
            alt="accessory"
            style={{ position: 'absolute', width: '100%', height: '100%' }}
          />
        ))}
      </AccessoryLayer>

      <EffectLayer>
        {effects.map((effect, index) => (
          <motion.img
            key={index}
            src={effect}
            alt="effect"
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          />
        ))}
      </EffectLayer>
    </CharacterContainer>
  );
};