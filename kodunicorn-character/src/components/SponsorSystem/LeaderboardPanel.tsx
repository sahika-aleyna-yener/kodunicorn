import React from 'react';
import styled from '@emotion/styled';
import { LeaderboardEntry } from './types';

const LeaderboardContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const LeaderboardTable = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

const LeaderboardRow = styled.div<{ isTop3: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  background-color: ${props => 
    props.isTop3 ? 'rgba(255, 107, 0, 0.1)' : 'transparent'
  };
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props =>
      props.isTop3 ? 'rgba(255, 107, 0, 0.2)' : '#f9f9f9'
    };
  }
`;

const Rank = styled.div<{ rank: number }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  margin-right: 10px;
  background-color: ${props =>
    props.rank === 1 ? '#ffd700' :
    props.rank === 2 ? '#c0c0c0' :
    props.rank === 3 ? '#cd7f32' :
    '#f0f0f0'
  };
  color: ${props => props.rank <= 3 ? '#fff' : '#666'};
`;

const Username = styled.div`
  flex: 1;
  font-weight: 500;
`;

const Points = styled.div`
  font-weight: bold;
  color: #FF6B00;
`;

const SponsorPoints = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
  font-size: 12px;
  color: #666;
`;

const SponsorPoint = styled.span`
  padding: 2px 6px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

interface LeaderboardPanelProps {
  entries: LeaderboardEntry[];
}

export const LeaderboardPanel: React.FC<LeaderboardPanelProps> = ({
  entries
}) => {
  return (
    <LeaderboardContainer>
      <h2>Sıralama Tablosu</h2>
      
      <LeaderboardTable>
        {entries.map(entry => (
          <LeaderboardRow key={entry.userId} isTop3={entry.rank <= 3}>
            <Rank rank={entry.rank}>
              {entry.rank}
            </Rank>
            
            <div style={{ flex: 1 }}>
              <Username>{entry.username}</Username>
              <SponsorPoints>
                {Object.entries(entry.sponsorPoints).map(([sponsorId, points]) => (
                  <SponsorPoint key={sponsorId}>
                    {sponsorId}: {points}
                  </SponsorPoint>
                ))}
              </SponsorPoints>
            </div>
            
            <Points>
              {entry.points} puan
            </Points>
          </LeaderboardRow>
        ))}
      </LeaderboardTable>
    </LeaderboardContainer>
  );
};