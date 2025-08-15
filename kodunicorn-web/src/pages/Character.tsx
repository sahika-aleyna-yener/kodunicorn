import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, ${theme.colors.background}, ${theme.colors.gray[100]});
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TestTitle = styled.h1`
  font-size: 3rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const TestButton = styled.button`
  padding: 1rem 2rem;
  background: ${theme.colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 1rem;
  
  &:hover {
    background: ${theme.colors.secondary};
  }
`;

const TestMessage = styled.div`
  background: ${theme.colors.accent};
  color: ${theme.colors.text};
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
  text-align: center;
  font-size: 1.1rem;
`;

export const Character: React.FC = () => {
  const [testCount, setTestCount] = useState(0);

  console.log('Character component rendering...', { testCount });

  const handleTestClick = () => {
    setTestCount(prev => prev + 1);
    console.log('Test button clicked!', testCount + 1);
  };

  return (
    <PageContainer>
      <TestTitle>🦄 Karakter Sayfası Test</TestTitle>
      
      <TestMessage>
        Bu sayfa çalışıyor! Test sayacı: {testCount}
      </TestMessage>
      
      <TestButton onClick={handleTestClick}>
        Test Butonu (Tıkla!)
      </TestButton>
      
      <Link to="/">
        <TestButton>
          ← Ana Sayfaya Dön
        </TestButton>
      </Link>
      
      <TestMessage>
        Eğer bu mesajı görüyorsan, sayfa düzgün çalışıyor! 🎉
      </TestMessage>
    </PageContainer>
  );
};

export default Character; 