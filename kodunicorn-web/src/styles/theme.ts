export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    highlight: string;
    background: string;
    text: string;
    white: string;
    gray: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
  typography: {
    fontFamily: string;
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      title: string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    circle: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
    glow: string;
  };
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
  effects: {
    hover: {
      lift: string;
      scale: string;
    };
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    wide: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#FF6B9D', // Canlı pembe - eğlenceli ve sıcak
    secondary: '#4ECDC4', // Turkuaz - güven ve sakinlik
    accent: '#FFE66D', // Canlı sarı - neşe ve enerji
    highlight: '#FF9ECD', // Açık pembe - sevgi ve şefkat
    background: '#F0F8FF', // Çok açık mavi - güvenli ve temiz
    text: '#2D2D2D',
    white: '#FFFFFF',
    gray: {
      100: '#F8F9FA',
      200: '#E9ECEF',
      300: '#DEE2E6',
      400: '#CED4DA',
      500: '#ADB5BD',
      600: '#6C757D',
      700: '#495057',
      800: '#343A40',
      900: '#212529',
    }
  },
  typography: {
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Inter', sans-serif", // Çocuk dostu font
    fontSizes: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xlarge: '1.5rem',
      title: '2rem'
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '3rem'
  },
  borderRadius: {
    small: '8px', // Daha yumuşak köşeler
    medium: '16px', // Çocuk dostu yuvarlaklık
    large: '24px', // Daha büyük yuvarlaklık
    circle: '50%'
  },
  shadows: {
    small: '0 4px 8px rgba(255, 107, 157, 0.15)', // Pembe gölge
    medium: '0 8px 16px rgba(255, 107, 157, 0.2)', // Daha belirgin
    large: '0 16px 32px rgba(255, 107, 157, 0.25)', // Büyük gölge
    glow: '0 0 20px rgba(255, 107, 157, 0.4)' // Parlak efekt
  },
  transitions: {
    fast: '0.2s cubic-bezier(0.4, 0, 0.2, 1)', // Daha yumuşak
    normal: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  effects: {
    hover: {
      lift: 'translateY(-4px)', // Daha belirgin hareket
      scale: 'scale(1.08)' // Daha büyük büyüme
    }
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  }
};