import type { AnimationConfig } from './types';

export const baseAnimations: Record<string, AnimationConfig> = {
  idle: {
    name: 'idle',
    duration: 3,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'translateY(0) rotate(0deg)', scale: 1 },
      '25%': { transform: 'translateY(-8px) rotate(1deg)', scale: 1.02 },
      '50%': { transform: 'translateY(-12px) rotate(0deg)', scale: 1.05 },
      '75%': { transform: 'translateY(-8px) rotate(-1deg)', scale: 1.02 },
      '100%': { transform: 'translateY(0) rotate(0deg)', scale: 1 }
    }
  },
  jump: {
    name: 'jump',
    duration: 0.8,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'translateY(0) scale(1) rotate(0deg)' },
      '25%': { transform: 'translateY(-25px) scale(0.95) rotate(-5deg)' },
      '50%': { transform: 'translateY(-40px) scale(0.9) rotate(0deg)' },
      '75%': { transform: 'translateY(-25px) scale(0.95) rotate(5deg)' },
      '100%': { transform: 'translateY(0) scale(1) rotate(0deg)' }
    }
  },
  celebrate: {
    name: 'celebrate',
    duration: 1.2,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'rotate(0deg) scale(1)' },
      '20%': { transform: 'rotate(-20deg) scale(1.1)' },
      '40%': { transform: 'rotate(20deg) scale(1.15)' },
      '60%': { transform: 'rotate(-15deg) scale(1.1)' },
      '80%': { transform: 'rotate(15deg) scale(1.05)' },
      '100%': { transform: 'rotate(0deg) scale(1)' }
    }
  },
  dance: {
    name: 'dance',
    duration: 2,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'rotate(0deg) translateY(0) scale(1)' },
      '12.5%': { transform: 'rotate(-15deg) translateY(-15px) scale(1.05)' },
      '25%': { transform: 'rotate(0deg) translateY(0) scale(1)' },
      '37.5%': { transform: 'rotate(15deg) translateY(-15px) scale(1.05)' },
      '50%': { transform: 'rotate(0deg) translateY(0) scale(1)' },
      '62.5%': { transform: 'rotate(-10deg) translateY(-10px) scale(1.03)' },
      '75%': { transform: 'rotate(0deg) translateY(0) scale(1)' },
      '87.5%': { transform: 'rotate(10deg) translateY(-10px) scale(1.03)' },
      '100%': { transform: 'rotate(0deg) translateY(0) scale(1)' }
    }
  },
  fly: {
    name: 'fly',
    duration: 2.5,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'translateY(0) rotate(0deg) scale(1)' },
      '20%': { transform: 'translateY(-20px) rotate(3deg) scale(1.02)' },
      '40%': { transform: 'translateY(-35px) rotate(0deg) scale(1.05)' },
      '60%': { transform: 'translateY(-50px) rotate(-3deg) scale(1.08)' },
      '80%': { transform: 'translateY(-35px) rotate(0deg) scale(1.05)' },
      '100%': { transform: 'translateY(0) rotate(0deg) scale(1)' }
    }
  },
  study: {
    name: 'study',
    duration: 2,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'translateX(0) rotate(0deg) scale(1)' },
      '25%': { transform: 'translateX(-8px) rotate(-3deg) scale(0.98)' },
      '50%': { transform: 'translateX(0) rotate(0deg) scale(1)' },
      '75%': { transform: 'translateX(8px) rotate(3deg) scale(0.98)' },
      '100%': { transform: 'translateX(0) rotate(0deg) scale(1)' }
    }
  },
  spin: {
    name: 'spin',
    duration: 1.5,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'rotate(0deg) scale(1)' },
      '25%': { transform: 'rotate(90deg) scale(1.1)' },
      '50%': { transform: 'rotate(180deg) scale(1.2)' },
      '75%': { transform: 'rotate(270deg) scale(1.1)' },
      '100%': { transform: 'rotate(360deg) scale(1)' }
    }
  },
  wiggle: {
    name: 'wiggle',
    duration: 0.8,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'rotate(0deg)' },
      '25%': { transform: 'rotate(-8deg)' },
      '50%': { transform: 'rotate(8deg)' },
      '75%': { transform: 'rotate(-4deg)' },
      '100%': { transform: 'rotate(0deg)' }
    }
  }
};

export const moodAnimations: Record<string, AnimationConfig> = {
  happy: {
    name: 'happy',
    duration: 0.6,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'scale(1) rotate(0deg)' },
      '50%': { transform: 'scale(1.15) rotate(5deg)' },
      '100%': { transform: 'scale(1) rotate(0deg)' }
    }
  },
  thinking: {
    name: 'thinking',
    duration: 2,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'rotate(0deg) scale(1)' },
      '25%': { transform: 'rotate(-8deg) scale(0.98)' },
      '50%': { transform: 'rotate(-12deg) scale(0.95)' },
      '75%': { transform: 'rotate(-8deg) scale(0.98)' },
      '100%': { transform: 'rotate(0deg) scale(1)' }
    }
  },
  excited: {
    name: 'excited',
    duration: 0.8,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'scale(1) rotate(0deg)' },
      '20%': { transform: 'scale(1.1) rotate(-8deg)' },
      '40%': { transform: 'scale(1.15) rotate(8deg)' },
      '60%': { transform: 'scale(1.1) rotate(-5deg)' },
      '80%': { transform: 'scale(1.05) rotate(5deg)' },
      '100%': { transform: 'scale(1) rotate(0deg)' }
    }
  },
  surprised: {
    name: 'surprised',
    duration: 0.6,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'scale(1) translateY(0)' },
      '50%': { transform: 'scale(1.25) translateY(-15px)' },
      '100%': { transform: 'scale(1) translateY(0)' }
    }
  },
  proud: {
    name: 'proud',
    duration: 1.5,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'scale(1) translateY(0)' },
      '50%': { transform: 'scale(1.1) translateY(-8px)' },
      '100%': { transform: 'scale(1) translateY(0)' }
    }
  },
  focused: {
    name: 'focused',
    duration: 2.5,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(0.95)' },
      '100%': { transform: 'scale(1)' }
    }
  },
  sleepy: {
    name: 'sleepy',
    duration: 3,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'scale(1) rotate(0deg)' },
      '25%': { transform: 'scale(0.98) rotate(-2deg)' },
      '50%': { transform: 'scale(0.95) rotate(0deg)' },
      '75%': { transform: 'scale(0.98) rotate(2deg)' },
      '100%': { transform: 'scale(1) rotate(0deg)' }
    }
  },
  playful: {
    name: 'playful',
    duration: 1.2,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'scale(1) rotate(0deg)' },
      '33%': { transform: 'scale(1.05) rotate(-10deg)' },
      '66%': { transform: 'scale(1.05) rotate(10deg)' },
      '100%': { transform: 'scale(1) rotate(0deg)' }
    }
  }
};

export const effectAnimations: Record<string, AnimationConfig> = {
  sparkle: {
    name: 'sparkle',
    duration: 1.2,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { opacity: 0, transform: 'scale(0) rotate(0deg)' },
      '50%': { opacity: 1, transform: 'scale(1.3) rotate(180deg)' },
      '100%': { opacity: 0, transform: 'scale(0) rotate(360deg)' }
    }
  },
  levelUp: {
    name: 'levelUp',
    duration: 2,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'translateY(0) scale(1)', opacity: 1 },
      '25%': { transform: 'translateY(-20px) scale(1.2)', opacity: 1 },
      '50%': { transform: 'translateY(-40px) scale(1.4)', opacity: 1 },
      '75%': { transform: 'translateY(-60px) scale(1.6)', opacity: 0.8 },
      '100%': { transform: 'translateY(-80px) scale(1.8)', opacity: 0 }
    }
  },
  codeRain: {
    name: 'codeRain',
    duration: 2.5,
    easing: 'linear',
    keyframes: {
      '0%': { transform: 'translateY(-100%) translateX(0)', opacity: 0 },
      '20%': { transform: 'translateY(-50%) translateX(-5px)', opacity: 1 },
      '80%': { transform: 'translateY(50%) translateX(5px)', opacity: 1 },
      '100%': { transform: 'translateY(100%) translateX(0)', opacity: 0 }
    }
  },
  rainbow: {
    name: 'rainbow',
    duration: 3,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'scale(0.8)', opacity: 0, filter: 'hue-rotate(0deg)' },
      '50%': { transform: 'scale(1.3)', opacity: 1, filter: 'hue-rotate(180deg)' },
      '100%': { transform: 'scale(0.8)', opacity: 0, filter: 'hue-rotate(360deg)' }
    }
  },
  achievement: {
    name: 'achievement',
    duration: 1.5,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'scale(0) rotate(-180deg)', opacity: 0 },
      '50%': { transform: 'scale(1.3) rotate(0deg)', opacity: 1 },
      '75%': { transform: 'scale(1.1) rotate(5deg)', opacity: 1 },
      '100%': { transform: 'scale(1) rotate(0deg)', opacity: 1 }
    }
  },
  magicSpell: {
    name: 'magicSpell',
    duration: 2,
    easing: 'ease-in-out',
    keyframes: {
      '0%': { transform: 'scale(0.5) rotate(0deg)', opacity: 0, filter: 'blur(15px)' },
      '25%': { transform: 'scale(1.1) rotate(90deg)', opacity: 0.8, filter: 'blur(5px)' },
      '50%': { transform: 'scale(1.3) rotate(180deg)', opacity: 1, filter: 'blur(0px)' },
      '75%': { transform: 'scale(1.1) rotate(270deg)', opacity: 0.8, filter: 'blur(5px)' },
      '100%': { transform: 'scale(0.5) rotate(360deg)', opacity: 0, filter: 'blur(15px)' }
    }
  },
  confetti: {
    name: 'confetti',
    duration: 2.5,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: 0 },
      '25%': { transform: 'translateY(-50px) rotate(90deg)', opacity: 1 },
      '50%': { transform: 'translateY(0px) rotate(180deg)', opacity: 1 },
      '75%': { transform: 'translateY(50px) rotate(270deg)', opacity: 0.8 },
      '100%': { transform: 'translateY(100px) rotate(360deg)', opacity: 0 }
    }
  },
  heart: {
    name: 'heart',
    duration: 1.8,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'scale(0) rotate(0deg)', opacity: 0 },
      '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: 1 },
      '100%': { transform: 'scale(1) rotate(360deg)', opacity: 1 }
    }
  },
  star: {
    name: 'star',
    duration: 1.5,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    keyframes: {
      '0%': { transform: 'scale(0) rotate(0deg)', opacity: 0 },
      '50%': { transform: 'scale(1.3) rotate(180deg)', opacity: 1 },
      '100%': { transform: 'scale(1) rotate(360deg)', opacity: 1 }
    }
  }
};