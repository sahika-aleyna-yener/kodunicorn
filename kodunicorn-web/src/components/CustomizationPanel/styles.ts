import styled from '@emotion/styled';

export const PanelContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  margin: 0 0 10px;
  color: #333;
  font-size: 16px;
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const ColorOption = styled.button<{ color: string; isSelected: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 2px solid ${props => props.isSelected ? '#FF6B00' : '#ddd'};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const StyleOption = styled.button<{ isSelected: boolean }>`
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.isSelected ? '#FF6B00' : '#fff'};
  color: ${props => props.isSelected ? '#fff' : '#333'};
  border: 1px solid #ddd;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.isSelected ? '#FF6B00' : '#f5f5f5'};
  }
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

export const ItemCard = styled.div<{ isLocked: boolean }>`
  position: relative;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: ${props => props.isLocked ? '#f5f5f5' : '#fff'};
  opacity: ${props => props.isLocked ? 0.7 : 1};
  cursor: ${props => props.isLocked ? 'not-allowed' : 'pointer'};
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const ItemName = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #333;
`;

export const LockOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const RequiredLevel = styled.span`
  color: #fff;
  font-size: 12px;
  background-color: #FF6B00;
  padding: 2px 6px;
  border-radius: 3px;
`;