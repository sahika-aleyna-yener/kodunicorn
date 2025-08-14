import React from 'react';
import styled from '@emotion/styled';
import { DailyTask } from './types';

const TaskContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TaskCard = styled.div<{ difficulty: string }>`
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  background-color: ${props => {
    switch (props.difficulty) {
      case 'easy': return '#e8f5e9';
      case 'medium': return '#fff3e0';
      case 'hard': return '#ffebee';
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

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TaskTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const TaskPoints = styled.span`
  padding: 4px 8px;
  background-color: #FF6B00;
  color: white;
  border-radius: 12px;
  font-size: 14px;
`;

const DifficultyBadge = styled.span<{ difficulty: string }>`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  background-color: ${props => {
    switch (props.difficulty) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#f44336';
      default: return '#9e9e9e';
    }
  }};
  color: white;
  margin-right: 8px;
`;

const CategoryBadge = styled.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  background-color: #2196F3;
  color: white;
`;

const Timer = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 10px;

  &::before {
    content: '⏱️';
    margin-right: 5px;
  }
`;

const StartButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.isActive ? '#FF6B00' : '#ccc'};
  color: white;
  cursor: ${props => props.isActive ? 'pointer' : 'not-allowed'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.isActive ? '#ff8533' : '#ccc'};
  }
`;

interface DailyTaskPanelProps {
  tasks: DailyTask[];
  activeTasks: string[];
  onStartTask?: (taskId: string) => void;
}

export const DailyTaskPanel: React.FC<DailyTaskPanelProps> = ({
  tasks,
  activeTasks,
  onStartTask
}) => {
  return (
    <TaskContainer>
      <h2>Günlük Görevler</h2>
      {tasks.map(task => {
        const isActive = !activeTasks.includes(task.id);
        
        return (
          <TaskCard key={task.id} difficulty={task.difficulty}>
            <TaskHeader>
              <TaskTitle>{task.title}</TaskTitle>
              <TaskPoints>{task.points} puan</TaskPoints>
            </TaskHeader>

            <div>
              <DifficultyBadge difficulty={task.difficulty}>
                {task.difficulty === 'easy' ? 'Kolay' :
                 task.difficulty === 'medium' ? 'Orta' :
                 'Zor'}
              </DifficultyBadge>
              <CategoryBadge>{task.category}</CategoryBadge>
            </div>

            <p>{task.description}</p>
            
            <Timer>Süre: {task.timeLimit} dakika</Timer>

            <StartButton
              isActive={isActive}
              onClick={() => isActive && onStartTask?.(task.id)}
            >
              {isActive ? 'Başla' : 'Devam Ediyor'}
            </StartButton>
          </TaskCard>
        );
      })}
    </TaskContainer>
  );
};