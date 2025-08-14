import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SponsorContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SponsorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const SponsorCard = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #eee;
  background-color: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const SponsorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const SponsorLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

export const SponsorInfo = styled.div`
  flex: 1;
`;

export const SponsorName = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const SponsorDescription = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #666;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 6px;
  background-color: #f0f0f0;
  border-radius: 3px;
  margin: 10px 0;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${props => Math.min(props.progress, 100)}%;
    height: 100%;
    background-color: #FF6B00;
    transition: width 0.3s ease;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 15px;
`;

export const ItemCard = styled.div<{ isLocked: boolean }>`
  position: relative;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  background-color: ${props => props.isLocked ? '#f5f5f5' : '#fff'};
  opacity: ${props => props.isLocked ? 0.7 : 1};
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ItemName = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #333;
`;

export const ItemPoints = styled.span`
  display: inline-block;
  padding: 2px 6px;
  background-color: #FF6B00;
  color: white;
  border-radius: 10px;
  font-size: 12px;
`;

export const LimitedBadge = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 2px 6px;
  background-color: #ff4757;
  color: white;
  border-radius: 10px;
  font-size: 12px;
`;

export const UnlockButton = styled(motion.button)<{ isLocked: boolean }>`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.isLocked ? '#ccc' : '#FF6B00'};
  color: white;
  cursor: ${props => props.isLocked ? 'not-allowed' : 'pointer'};
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.isLocked ? '#ccc' : '#ff8533'};
  }
`;

export const TimeRemaining = styled.p`
  margin: 5px 0;
  font-size: 12px;
  color: #666;
  font-style: italic;
`;