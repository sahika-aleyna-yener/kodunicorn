import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import type { CharacterProps } from './types';
import { baseAnimations, moodAnimations, effectAnimations } from './animations';
import {
  CharacterContainer,
  CharacterBody,
  CharacterMane,
  CharacterHorn,
  CharacterEyes,
  EffectLayer
} from './styles';

export const KodUnicorn: React.FC<CharacterProps> = ({
  customization,
  state,
  onInteraction
}) => {
  const controls = useAnimation();
  const effectControls = useAnimation();
  const characterRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Idle animation with more variety
    const idleSequence = async () => {
      while (true) {
        await controls.start(baseAnimations.idle.keyframes);
        // Random chance to do other idle animations
        if (Math.random() < 0.3) {
          await controls.start(baseAnimations.wiggle.keyframes);
        }
        if (Math.random() < 0.2) {
          await controls.start(baseAnimations.spin.keyframes);
        }
      }
    };
    idleSequence();
  }, []);

  useEffect(() => {
    // Handle state changes
    if (state.currentAnimation) {
      const animation = baseAnimations[state.currentAnimation];
      if (animation) {
        controls.start(animation.keyframes);
      }
    }

    if (state.mood !== 'normal') {
      const moodAnimation = moodAnimations[state.mood];
      if (moodAnimation) {
        controls.start(moodAnimation.keyframes);
      }
    }

    if (state.achievement) {
      effectControls.start(effectAnimations.levelUp.keyframes);
    }
  }, [state]);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    
    if (onInteraction) {
      onInteraction('click');
    }
    
    // Different animations based on click count
    const animations = ['jump', 'celebrate', 'dance', 'spin', 'wiggle'];
    const randomAnimation = animations[clickCount % animations.length];
    controls.start(baseAnimations[randomAnimation].keyframes);
    
    // Trigger sparkle effect
    effectControls.start(effectAnimations.sparkle.keyframes);
  };

  const handleHover = () => {
    setIsHovered(true);
    if (onInteraction) {
      onInteraction('hover');
    }
    controls.start(baseAnimations.celebrate.keyframes);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDoubleClick = () => {
    if (onInteraction) {
      onInteraction('doubleClick');
    }
    controls.start(baseAnimations.fly.keyframes);
    effectControls.start(effectAnimations.magicSpell.keyframes);
  };

  return (
    <CharacterContainer
      ref={characterRef}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className={isHovered ? 'hovered' : ''}
    >
      <motion.div
        animate={controls}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <CharacterBody colors={customization.colors}>
          <CharacterMane
            colors={customization.colors}
            style={customization.maneStyle}
          />
          <CharacterHorn colors={customization.colors} />
          <CharacterEyes colors={customization.colors} className="left" />
          <CharacterEyes colors={customization.colors} className="right" />
          
          {/* Add a cute smile */}
          <div 
            style={{
              position: 'absolute',
              bottom: '25%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40px',
              height: '20px',
              border: `3px solid ${customization.colors.eyes}`,
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderRadius: '0 0 40px 40px',
              opacity: 0.8
            }}
          />
          
          {/* Add cute cheeks */}
          <div 
            style={{
              position: 'absolute',
              bottom: '30%',
              left: '20%',
              width: '15px',
              height: '15px',
              background: `radial-gradient(circle, ${customization.colors.primary || '#FF6B9D'}40, transparent)`,
              borderRadius: '50%',
              opacity: 0.6
            }}
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '30%',
              right: '20%',
              width: '15px',
              height: '15px',
              background: `radial-gradient(circle, ${customization.colors.primary || '#FF6B9D'}40, transparent)`,
              borderRadius: '50%',
              opacity: 0.6
            }}
          />
        </CharacterBody>
      </motion.div>

      <EffectLayer>
        <motion.div animate={effectControls}>
          {customization.effects.map((effect, index) => (
            <div key={index} className={`effect ${effect}`} />
          ))}
          
          {/* Add floating sparkles */}
          {isHovered && (
            <>
                             <motion.div
                 style={{
                   position: 'absolute',
                   top: '10%',
                   left: '20%',
                   width: '8px',
                   height: '8px',
                   background: customization.colors.accent || '#FFE66D',
                   borderRadius: '50%',
                   boxShadow: `0 0 10px ${customization.colors.accent || '#FFE66D'}`
                 }}
                animate={{
                  y: [-10, -30, -10],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
                             <motion.div
                 style={{
                   position: 'absolute',
                   top: '15%',
                   right: '25%',
                   width: '6px',
                   height: '6px',
                   background: customization.colors.primary || '#FF6B9D',
                   borderRadius: '50%',
                   boxShadow: `0 0 8px ${customization.colors.primary || '#FF6B9D'}`
                 }}
                animate={{
                  y: [-5, -25, -5],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
                             <motion.div
                 style={{
                   position: 'absolute',
                   bottom: '20%',
                   left: '30%',
                   width: '10px',
                   height: '10px',
                   background: customization.colors.secondary || '#4ECDC4',
                   borderRadius: '50%',
                   boxShadow: `0 0 12px ${customization.colors.secondary || '#4ECDC4'}`
                 }}
                animate={{
                  y: [-8, -28, -8],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </>
          )}
        </motion.div>
      </EffectLayer>
      
      {/* Add a cute speech bubble on hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
                         background: customization.colors.white || '#FFFFFF',
             padding: '8px 12px',
             borderRadius: '16px',
             boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
             border: `2px solid ${customization.colors.primary || '#FF6B9D'}`,
             fontSize: '14px',
             fontWeight: 'bold',
             color: customization.colors.text || '#2D2D2D',
            whiteSpace: 'nowrap',
            zIndex: 10
          }}
        >
          Merhaba! 👋
          <div
            style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '0',
              height: '0',
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: `8px solid ${customization.colors.white || '#FFFFFF'}`
            }}
          />
        </motion.div>
      )}
    </CharacterContainer>
  );
};