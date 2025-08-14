import React from 'react';
import styled from '@emotion/styled';
import { SpecialEvent } from './types';

const EventContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const EventCard = styled.div<{ type: string }>`
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: ${props => {
    switch (props.type) {
      case 'challenge': return '#e3f2fd';
      case 'competition': return '#fff3e0';
      case 'festival': return '#f3e5f5';
      default: return '#fff';
    }
  }};
  border: 2px solid ${props => {
    switch (props.type) {
      case 'challenge': return '#2196f3';
      case 'competition': return '#ff9800';
      case 'festival': return '#9c27b0';
      default: return '#ddd';
    }
  }};
`;

const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const EventTitle = styled.h3`
  margin: 0;
  color: #333;
  font-size: 18px;
`;

const EventType = styled.span<{ type: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
  background-color: ${props => {
    switch (props.type) {
      case 'challenge': return '#2196f3';
      case 'competition': return '#ff9800';
      case 'festival': return '#9c27b0';
      default: return '#9e9e9e';
    }
  }};
  color: white;
`;

const EventDates = styled.div`
  font-size: 14px;
  color: #666;
  margin: 10px 0;
`;

const Multiplier = styled.div`
  display: inline-block;
  padding: 4px 8px;
  background-color: #FF6B00;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  margin: 10px 0;
`;

const RulesList = styled.ul`
  margin: 15px 0;
  padding-left: 20px;
  color: #666;
`;

const RewardsSection = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
`;

const RewardCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
`;

const RewardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RewardIcon = styled.span`
  font-size: 20px;
`;

const RewardRequirement = styled.span`
  padding: 2px 6px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 12px;
`;

interface SpecialEventPanelProps {
  events: SpecialEvent[];
}

export const SpecialEventPanel: React.FC<SpecialEventPanelProps> = ({
  events
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('tr-TR');
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'challenge': return '🎯';
      case 'competition': return '🏆';
      case 'festival': return '🎉';
      default: return '📅';
    }
  };

  const getRewardIcon = (type: string) => {
    switch (type) {
      case 'outfit': return '👕';
      case 'effect': return '✨';
      case 'accessory': return '🎩';
      default: return '🎁';
    }
  };

  return (
    <EventContainer>
      <h2>Özel Etkinlikler</h2>
      {events.map(event => (
        <EventCard key={event.id} type={event.type}>
          <EventHeader>
            <EventTitle>
              {getEventIcon(event.type)} {event.name}
            </EventTitle>
            <EventType type={event.type}>
              {event.type === 'challenge' ? 'Görev' :
               event.type === 'competition' ? 'Yarışma' :
               'Festival'}
            </EventType>
          </EventHeader>

          <p>{event.description}</p>

          <EventDates>
            {formatDate(event.startDate)} - {formatDate(event.endDate)}
          </EventDates>

          <Multiplier>
            {event.multiplier}x Puan Çarpanı
          </Multiplier>

          {event.specialRules && (
            <RulesList>
              {event.specialRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </RulesList>
          )}

          <RewardsSection>
            <h4>Ödüller</h4>
            {event.rewards.map(reward => (
              <RewardCard key={reward.itemId}>
                <RewardInfo>
                  <RewardIcon>{getRewardIcon(reward.type)}</RewardIcon>
                  <div>{reward.itemId}</div>
                </RewardInfo>
                <RewardRequirement>
                  {reward.requirement} puan
                </RewardRequirement>
              </RewardCard>
            ))}
          </RewardsSection>
        </EventCard>
      ))}
    </EventContainer>
  );
};