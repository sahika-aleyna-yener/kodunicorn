import React from 'react';
import styled from '@emotion/styled';
import { SponsorEvent, EventProgress } from './types';

const EventContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const EventCard = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 6px;
  background-color: #f9f9f9;
`;

const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const EventTitle = styled.h3`
  margin: 0;
  color: #333;
  font-size: 16px;
`;

const EventDate = styled.span`
  color: #666;
  font-size: 12px;
`;

const TaskList = styled.div`
  margin-top: 10px;
`;

const Task = styled.div<{ completed: boolean }>`
  padding: 8px;
  margin: 5px 0;
  background-color: ${props => props.completed ? '#e6f7e6' : '#fff'};
  border: 1px solid ${props => props.completed ? '#c3e6c3' : '#eee'};
  border-radius: 4px;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 4px;
  background-color: #eee;
  border-radius: 2px;
  margin-top: 5px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    width: ${props => props.progress}%;
    height: 100%;
    background-color: #4CAF50;
    transition: width 0.3s ease;
  }
`;

interface EventPanelProps {
  events: SponsorEvent[];
  progress?: EventProgress[];
  onTaskProgress?: (eventId: string, taskId: string, progress: number) => void;
}

export const EventPanel: React.FC<EventPanelProps> = ({
  events,
  progress = [],
  onTaskProgress
}) => {
  const getTaskProgress = (eventId: string, taskId: string) => {
    const eventProg = progress.find(p => p.eventId === eventId);
    return eventProg?.taskProgress[taskId] || 0;
  };

  const isTaskCompleted = (eventId: string, taskId: string) => {
    const eventProg = progress.find(p => p.eventId === eventId);
    return eventProg?.completedTasks.includes(taskId) || false;
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('tr-TR');
  };

  const calculateTimeLeft = (endDate: Date) => {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return `${days} gün kaldı`;
  };

  return (
    <EventContainer>
      <h2>Etkinlikler</h2>
      {events.map(event => (
        <EventCard key={event.id}>
          <EventHeader>
            <EventTitle>{event.name}</EventTitle>
            <EventDate>
              {formatDate(event.startDate)} - {formatDate(event.endDate)}
              <br />
              {calculateTimeLeft(event.endDate)}
            </EventDate>
          </EventHeader>
          
          <p>{event.description}</p>
          
          <TaskList>
            {event.tasks.map(task => {
              const progress = getTaskProgress(event.id, task.id);
              const completed = isTaskCompleted(event.id, task.id);
              const progressPercent = (progress / task.requiredProgress) * 100;
              
              return (
                <Task key={task.id} completed={completed}>
                  <div>{task.name}</div>
                  <small>{task.description}</small>
                  <ProgressBar progress={progressPercent} />
                  <small>
                    {progress} / {task.requiredProgress}
                    {completed && ' ✓'}
                  </small>
                </Task>
              );
            })}
          </TaskList>
        </EventCard>
      ))}
    </EventContainer>
  );
};