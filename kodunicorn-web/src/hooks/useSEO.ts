import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export const useSEO = ({
  title,
  description,
  keywords,
  image = '/og-image.svg',
  url,
  type = 'website'
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update primary meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update Open Graph tags
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:image', `https://kodunicorn.com.tr${image}`);
    if (url) {
      updatePropertyTag('og:url', url);
    }

    // Update Twitter tags
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:image', `https://kodunicorn.com.tr${image}`);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url || window.location.href;

    // Track page view
    trackPageView(window.location.pathname);

  }, [title, description, keywords, image, url, type]);
};



