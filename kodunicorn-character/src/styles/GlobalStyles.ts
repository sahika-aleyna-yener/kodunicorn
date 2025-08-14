import { css } from '@emotion/react';
import { theme } from './theme';

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.secondary};
  }

  /* Selection styles */
  ::selection {
    background-color: ${theme.colors.primary};
    color: white;
  }

  /* Transition styles */
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }

  /* Animation classes */
  .bounce {
    animation: bounce 1s infinite;
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  .shake {
    animation: shake 0.5s;
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  .fade-in {
    animation: fadeIn 0.3s ease-in;
  }

  .slide-in {
    animation: slideIn 0.3s ease-out;
  }

  /* Utility classes */
  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  .flex {
    display: flex;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .grid {
    display: grid;
  }

  .hidden {
    display: none;
  }

  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .fixed {
    position: fixed;
  }

  .w-full {
    width: 100%;
  }

  .h-full {
    height: 100%;
  }

  /* Responsive styles */
  @media (max-width: ${theme.breakpoints.mobile}) {
    html {
      font-size: 14px;
    }
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    html {
      font-size: 16px;
    }
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    html {
      font-size: 18px;
    }
  }
`;