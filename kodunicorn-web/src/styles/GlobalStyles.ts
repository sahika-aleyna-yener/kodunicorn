import { css } from '@emotion/react';
import { theme } from './theme';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSizes.medium};
    line-height: 1.6;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
    
    /* Çocuk dostu cursor */
    cursor: default;
  }

  /* Tüm container'lar için overflow kontrolü */
  #root {
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
  }

  /* Tüm section'lar için overflow kontrolü */
  section {
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
  }

  /* Çocuk dostu seçim rengi */
  ::selection {
    background-color: ${theme.colors.primary}40;
    color: ${theme.colors.text};
  }

  ::-moz-selection {
    background-color: ${theme.colors.primary}40;
    color: ${theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all ${theme.transitions.fast};
    
    &:hover {
      color: ${theme.colors.primary};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all ${theme.transitions.fast};
    
    &:focus {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
    }
  }

  input, textarea, select {
    font-family: inherit;
    border: 2px solid ${theme.colors.gray[300]};
    border-radius: ${theme.borderRadius.medium};
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    transition: all ${theme.transitions.fast};
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 3px ${theme.colors.primary}20;
    }
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius.medium};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.typography.fontWeights.bold};
    line-height: 1.2;
    margin-bottom: ${theme.spacing.medium};
  }

  h1 {
    font-size: ${theme.typography.fontSizes.title};
    color: ${theme.colors.text};
  }

  h2 {
    font-size: ${theme.typography.fontSizes.xlarge};
    color: ${theme.colors.text};
  }

  h3 {
    font-size: ${theme.typography.fontSizes.large};
    color: ${theme.colors.text};
  }

  p {
    margin-bottom: ${theme.spacing.medium};
    line-height: 1.7;
  }

  /* Çocuk dostu scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.gray[100]};
    border-radius: ${theme.borderRadius.medium};
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    border-radius: ${theme.borderRadius.medium};
    border: 2px solid ${theme.colors.gray[100]};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.accent});
  }

  /* Çocuk dostu focus stilleri */
  *:focus-visible {
    outline: 3px solid ${theme.colors.primary};
    outline-offset: 2px;
    border-radius: ${theme.borderRadius.small};
  }

  /* Animasyonlu elementler için smooth geçişler */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Çocuk dostu loading animasyonu */
  .loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid ${theme.colors.gray[200]};
    border-radius: 50%;
    border-top-color: ${theme.colors.primary};
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Çocuk dostu tooltip */
  .tooltip {
    position: relative;
    cursor: help;
  }

  .tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: ${theme.colors.text};
    color: ${theme.colors.white};
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    border-radius: ${theme.borderRadius.medium};
    font-size: ${theme.typography.fontSizes.small};
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 1000;
  }

  .tooltip:hover::after {
    opacity: 1;
  }

  /* Çocuk dostu card hover efektleri */
  .card {
    transition: all ${theme.transitions.normal};
    border-radius: ${theme.borderRadius.large};
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.large};
  }

  /* Çocuk dostu button stilleri */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.small};
    padding: ${theme.spacing.medium} ${theme.spacing.large};
    border-radius: ${theme.borderRadius.large};
    font-weight: ${theme.typography.fontWeights.semibold};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
    cursor: pointer;
    border: none;
    outline: none;
  }

  .btn-primary {
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    color: ${theme.colors.white};
    box-shadow: ${theme.shadows.medium};
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.large};
  }

  .btn-secondary {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
  }

  .btn-secondary:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    transform: translateY(-2px);
  }
`;