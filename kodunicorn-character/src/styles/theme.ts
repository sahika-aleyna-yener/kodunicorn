export const theme = {
  colors: {
    // Ana renkler
    primary: '#FF6B00', // Turuncu
    secondary: '#1A1A1A', // Siyah
    background: '#F5F5F5', // Açık gri
    text: '#333333', // Koyu gri
    
    // Karakter renkleri
    character: {
      body: {
        default: '#FFFFFF', // Beyaz
        cream: '#FFF5E6', // Krem
        lightPink: '#FFE6E6' // Açık pembe
      },
      mane: {
        orange: '#FF6B00', // Turuncu
        darkOrange: '#FF4500', // Koyu turuncu
        gold: '#FFD700' // Altın
      },
      horn: {
        black: '#1A1A1A', // Siyah
        silver: '#C0C0C0', // Gümüş
        gold: '#FFD700' // Altın
      },
      eyes: {
        orange: '#FF6B00', // Turuncu
        brown: '#8B4513', // Kahverengi
        blue: '#4169E1' // Mavi
      }
    },

    // Başarı rozetleri
    achievements: {
      bronze: '#CD7F32',
      silver: '#C0C0C0',
      gold: '#FFD700',
      platinum: '#E5E4E2'
    },

    // Zorluk seviyeleri
    difficulty: {
      easy: '#4CAF50', // Yeşil
      medium: '#FF9800', // Turuncu
      hard: '#F44336' // Kırmızı
    },

    // Durum renkleri
    status: {
      success: '#4CAF50', // Yeşil
      warning: '#FF9800', // Turuncu
      error: '#F44336', // Kırmızı
      info: '#2196F3' // Mavi
    },

    // Kategori renkleri
    categories: {
      coding: '#007BFF',
      math: '#17A2B8',
      science: '#6F42C1',
      art: '#E83E8C',
      environment: '#28A745'
    }
  },

  gradients: {
    primary: 'linear-gradient(45deg, #FF6B00, #FF8533)',
    secondary: 'linear-gradient(45deg, #1A1A1A, #333333)',
    rainbow: 'linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8F00FF)',
    gold: 'linear-gradient(45deg, #FFD700, #FFA500)',
    silver: 'linear-gradient(45deg, #C0C0C0, #A9A9A9)',
    bronze: 'linear-gradient(45deg, #CD7F32, #8B4513)'
  },

  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
    glow: '0 0 10px rgba(255, 107, 0, 0.5)'
  },

  transitions: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.5s ease'
  },

  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    circle: '50%'
  },

  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSizes: {
      small: '12px',
      medium: '14px',
      large: '16px',
      xlarge: '18px',
      title: '24px'
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      bold: 700
    }
  },

  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px'
  },

  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  },

  effects: {
    hover: {
      scale: 'scale(1.05)',
      brightness: 'brightness(1.1)',
      lift: 'translateY(-2px)'
    },
    active: {
      scale: 'scale(0.95)',
      brightness: 'brightness(0.95)'
    },
    disabled: {
      opacity: 0.7,
      grayscale: 'grayscale(1)'
    }
  },

  animations: {
    bounce: 'bounce 1s infinite',
    pulse: 'pulse 2s infinite',
    shake: 'shake 0.5s',
    spin: 'spin 1s linear infinite',
    fadeIn: 'fadeIn 0.3s ease-in',
    slideIn: 'slideIn 0.3s ease-out'
  }
};