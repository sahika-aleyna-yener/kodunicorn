import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { CharacterProps } from './types';
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

  useEffect(() => {
    // Idle animation
    controls.start(baseAnimations.idle.keyframes);
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
    if (onInteraction) {
      onInteraction('click');
    }
    controls.start(baseAnimations.jump.keyframes);
  };

  const handleHover = () => {
    if (onInteraction) {
      onInteraction('hover');
    }
    controls.start(baseAnimations.celebrate.keyframes);
  };

  return (
    <CharacterContainer
      ref={characterRef}
      onClick={handleClick}
      onMouseEnter={handleHover}
    >
      <motion.div
        animate={controls}
        initial={{ scale: 1 }}
      >
        <CharacterBody colors={customization.colors}>
          <CharacterMane
            colors={customization.colors}
            style={customization.maneStyle}
          />
          <CharacterHorn colors={customization.colors} />
          <CharacterEyes colors={customization.colors} className="left" />
          <CharacterEyes colors={customization.colors} className="right" />
        </CharacterBody>
      </motion.div>

      <EffectLayer>
        <motion.div animate={effectControls}>
          {customization.effects.map((effect, index) => (
            <div key={index} className={`effect ${effect}`} />
          ))}
        </motion.div>
      </EffectLayer>
    </CharacterContainer>
  );
};