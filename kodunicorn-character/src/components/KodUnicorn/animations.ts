import { AnimationConfig } from './types';

export const baseAnimations: Record<string, AnimationConfig> = {
  idle: {
    name: 'idle',
    duration: 2,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-5px)' },
      '100%': { transform: 'translateY(0)' }
    }
  },
  jump: {
    name: 'jump',
    duration: 0.5,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'translateY(0) scale(1)' },
      '50%': { transform: 'translateY(-20px) scale(0.95)' },
      '100%': { transform: 'translateY(0) scale(1)' }
    }
  },
  celebrate: {
    name: 'celebrate',
    duration: 1,
    easing: 'linear',
    keyframes: {
      '0%': { transform: 'rotate(0deg)' },
      '25%': { transform: 'rotate(-15deg)' },
      '75%': { transform: 'rotate(15deg)' },
      '100%': { transform: 'rotate(0deg)' }
    }
  },
  dance: {
    name: 'dance',
    duration: 1.5,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'rotate(0deg) translateY(0)' },
      '25%': { transform: 'rotate(-15deg) translateY(-10px)' },
      '50%': { transform: 'rotate(0deg) translateY(0)' },
      '75%': { transform: 'rotate(15deg) translateY(-10px)' },
      '100%': { transform: 'rotate(0deg) translateY(0)' }
    }
  },
  fly: {
    name: 'fly',
    duration: 2,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'translateY(0) rotate(0deg)' },
      '25%': { transform: 'translateY(-30px) rotate(5deg)' },
      '50%': { transform: 'translateY(-50px) rotate(0deg)' },
      '75%': { transform: 'translateY(-30px) rotate(-5deg)' },
      '100%': { transform: 'translateY(0) rotate(0deg)' }
    }
  },
  study: {
    name: 'study',
    duration: 1.5,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'translateX(0) rotate(0deg)' },
      '25%': { transform: 'translateX(-5px) rotate(-5deg)' },
      '75%': { transform: 'translateX(5px) rotate(5deg)' },
      '100%': { transform: 'translateX(0) rotate(0deg)' }
    }
  }
};

export const moodAnimations: Record<string, AnimationConfig> = {
  happy: {
    name: 'happy',
    duration: 0.3,
    easing: 'ease-out',
    keyframes: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.1)' },
      '100%': { transform: 'scale(1)' }
    }
  },
  thinking: {
    name: 'thinking',
    duration: 1.5,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'rotate(0deg)' },
      '50%': { transform: 'rotate(-10deg)' },
      '100%': { transform: 'rotate(0deg)' }
    }
  },
  excited: {
    name: 'excited',
    duration: 0.5,
    easing: 'linear',
    keyframes: {
      '0%': { transform: 'scale(1) rotate(0deg)' },
      '25%': { transform: 'scale(1.1) rotate(-5deg)' },
      '50%': { transform: 'scale(1.1) rotate(5deg)' },
      '75%': { transform: 'scale(1.1) rotate(-5deg)' },
      '100%': { transform: 'scale(1) rotate(0deg)' }
    }
  },
  surprised: {
    name: 'surprised',
    duration: 0.4,
    easing: 'ease-out',
    keyframes: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.2) translateY(-10px)' },
      '100%': { transform: 'scale(1)' }
    }
  },
  proud: {
    name: 'proud',
    duration: 1,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.1) translateY(-5px)' },
      '100%': { transform: 'scale(1)' }
    }
  },
  focused: {
    name: 'focused',
    duration: 2,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(0.95)' },
      '100%': { transform: 'scale(1)' }
    }
  }
};

export const effectAnimations: Record<string, AnimationConfig> = {
  sparkle: {
    name: 'sparkle',
    duration: 1,
    easing: 'linear',
    keyframes: {
      '0%': { opacity: 0, transform: 'scale(0) rotate(0deg)' },
      '50%': { opacity: 1, transform: 'scale(1.2) rotate(180deg)' },
      '100%': { opacity: 0, transform: 'scale(0) rotate(360deg)' }
    }
  },
  levelUp: {
    name: 'levelUp',
    duration: 1.5,
    easing: 'ease-out',
    keyframes: {
      '0%': { transform: 'translateY(0) scale(1)', opacity: 1 },
      '50%': { transform: 'translateY(-30px) scale(1.3)', opacity: 1 },
      '100%': { transform: 'translateY(-50px) scale(1.5)', opacity: 0 }
    }
  },
  codeRain: {
    name: 'codeRain',
    duration: 2,
    easing: 'linear',
    keyframes: {
      '0%': { transform: 'translateY(-100%) translateX(0)', opacity: 0 },
      '50%': { transform: 'translateY(0) translateX(-10px)', opacity: 1 },
      '100%': { transform: 'translateY(100%) translateX(0)', opacity: 0 }
    }
  },
  rainbow: {
    name: 'rainbow',
    duration: 2,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'scale(0.8)', opacity: 0, filter: 'hue-rotate(0deg)' },
      '50%': { transform: 'scale(1.2)', opacity: 1, filter: 'hue-rotate(180deg)' },
      '100%': { transform: 'scale(0.8)', opacity: 0, filter: 'hue-rotate(360deg)' }
    }
  },
  achievement: {
    name: 'achievement',
    duration: 1.2,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'scale(0) rotate(-180deg)', opacity: 0 },
      '50%': { transform: 'scale(1.2) rotate(0deg)', opacity: 1 },
      '100%': { transform: 'scale(1) rotate(0deg)', opacity: 1 }
    }
  },
  magicSpell: {
    name: 'magicSpell',
    duration: 1.5,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'scale(0.5) rotate(0deg)', opacity: 0, filter: 'blur(10px)' },
      '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: 1, filter: 'blur(0px)' },
      '100%': { transform: 'scale(0.5) rotate(360deg)', opacity: 0, filter: 'blur(10px)' }
    }
  }
};