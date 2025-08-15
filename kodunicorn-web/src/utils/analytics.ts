// Google Analytics 4 Configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Buraya gerçek GA ID'nizi ekleyin

// Google Analytics event tracking
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Page view tracking
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Custom event tracking for specific actions
export const trackButtonClick = (buttonName: string, page: string) => {
  trackEvent('click', 'button', `${page}_${buttonName}`);
};

export const trackGameStart = (gameName: string) => {
  trackEvent('game_start', 'stem_games', gameName);
};

export const trackGameComplete = (gameName: string, score: number) => {
  trackEvent('game_complete', 'stem_games', gameName, score);
};

export const trackBlogView = (postTitle: string) => {
  trackEvent('blog_view', 'content', postTitle);
};

export const trackEducationStart = (materialTitle: string) => {
  trackEvent('education_start', 'learning', materialTitle);
};

// Declare gtag on window object
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}




