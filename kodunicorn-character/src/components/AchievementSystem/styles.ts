import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const AchievementContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
`;

export const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const AchievementCard = styled.div<{ isLocked: boolean }>`
  position: relative;
  padding: 15px;
  border-radius: 8px;
  background-color: ${props => props.isLocked ? '#f5f5f5' : '#fff'};
  border: 2px solid ${props => props.isLocked ? '#ddd' : '#FF6B00'};
  opacity: ${props => props.isLocked ? 0.7 : 1};
`;

export const AchievementIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const AchievementTitle = styled.h3`
  margin: 0 0 5px;
  font-size: 16px;
  color: #333;
`;

export const AchievementDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

export const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 6px;
  background-color: #f0f0f0;
  border-radius: 3px;
  margin-top: 10px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${props => props.progress}%;
    height: 100%;
    background-color: #FF6B00;
    transition: width 0.3s ease;
  }
`;

export const NotificationContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1000;
`;

export const NotificationIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const NotificationContent = styled.div`
  flex: 1;
`;

export const NotificationTitle = styled.h4`
  margin: 0 0 5px;
  font-size: 14px;
  color: #333;
`;

export const NotificationMessage = styled.p`
  margin: 0;
  font-size: 12px;
  color: #666;
`;

export const RewardBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #FF6B00;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;