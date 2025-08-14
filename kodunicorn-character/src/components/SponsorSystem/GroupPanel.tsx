import React from 'react';
import styled from '@emotion/styled';
import { GroupActivity, GroupParticipant } from './types';

const GroupContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ActivityCard = styled.div<{ status: string }>`
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  background-color: ${props => {
    switch (props.status) {
      case 'active': return '#e6f7e6';
      case 'completed': return '#f0f0f0';
      case 'cancelled': return '#ffe6e6';
      default: return '#fff';
    }
  }};
  border: 1px solid #eee;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ActivityTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  background-color: ${props => {
    switch (props.status) {
      case 'active': return '#28a745';
      case 'completed': return '#6c757d';
      case 'cancelled': return '#dc3545';
      default: return '#ffc107';
    }
  }};
  color: white;
`;

const ParticipantList = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
`;

const Participant = styled.div<{ role: string }>`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 2px 0;
  font-size: 14px;

  &::before {
    content: '${props => props.role === 'leader' ? '👑' : '👤'}';
    margin-right: 5px;
  }
`;

const ActionButton = styled.button<{ variant: 'join' | 'leave' }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.variant === 'join' ? '#28a745' : '#dc3545'};
  color: white;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const RewardsList = styled.div`
  margin-top: 10px;
  font-size: 14px;

  span {
    display: inline-block;
    margin-right: 10px;
    padding: 2px 6px;
    background-color: #f8f9fa;
    border-radius: 4px;
  }
`;

interface GroupPanelProps {
  activities: GroupActivity[];
  participants: Record<string, GroupParticipant[]>;
  currentUserId?: string;
  onJoinGroup?: (activityId: string) => void;
  onLeaveGroup?: (activityId: string) => void;
}

export const GroupPanel: React.FC<GroupPanelProps> = ({
  activities,
  participants,
  currentUserId,
  onJoinGroup,
  onLeaveGroup
}) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('tr-TR');
  };

  const isParticipant = (activityId: string) => {
    return participants[activityId]?.some(p => p.userId === currentUserId);
  };

  const canJoin = (activity: GroupActivity) => {
    const currentParticipants = participants[activity.id]?.length || 0;
    return (
      activity.status === 'upcoming' &&
      currentParticipants < activity.maxParticipants &&
      !isParticipant(activity.id)
    );
  };

  const canLeave = (activity: GroupActivity) => {
    return (
      (activity.status === 'upcoming' || activity.status === 'active') &&
      isParticipant(activity.id)
    );
  };

  return (
    <GroupContainer>
      <h2>Grup Aktiviteleri</h2>
      {activities.map(activity => (
        <ActivityCard key={activity.id} status={activity.status}>
          <ActivityHeader>
            <ActivityTitle>{activity.title}</ActivityTitle>
            <StatusBadge status={activity.status}>
              {activity.status === 'upcoming' ? 'Yakında' :
               activity.status === 'active' ? 'Aktif' :
               activity.status === 'completed' ? 'Tamamlandı' :
               'İptal Edildi'}
            </StatusBadge>
          </ActivityHeader>

          <p>{activity.description}</p>
          
          <div>
            <small>
              Başlangıç: {formatDate(activity.startDate)}
              <br />
              Bitiş: {formatDate(activity.endDate)}
            </small>
          </div>

          <RewardsList>
            <span>🏆 {activity.rewards.points} puan</span>
            {activity.rewards.specialItems.map(item => (
              <span key={item}>🎁 {item}</span>
            ))}
          </RewardsList>

          <ParticipantList>
            <div>
              Katılımcılar ({(participants[activity.id]?.length || 0)}/{activity.maxParticipants})
            </div>
            {participants[activity.id]?.map(participant => (
              <Participant key={participant.userId} role={participant.role}>
                {participant.username}
              </Participant>
            ))}
          </ParticipantList>

          <div style={{ marginTop: '10px' }}>
            {canJoin(activity) && (
              <ActionButton
                variant="join"
                onClick={() => onJoinGroup?.(activity.id)}
              >
                Katıl
              </ActionButton>
            )}
            {canLeave(activity) && (
              <ActionButton
                variant="leave"
                onClick={() => onLeaveGroup?.(activity.id)}
              >
                Ayrıl
              </ActionButton>
            )}
          </div>
        </ActivityCard>
      ))}
    </GroupContainer>
  );
};