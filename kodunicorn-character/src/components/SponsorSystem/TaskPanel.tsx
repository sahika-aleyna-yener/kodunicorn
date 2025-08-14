import React from 'react';
import styled from '@emotion/styled';
import { PeriodicTask, TaskProgress } from './types';

const TaskContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TaskSection = styled.div`
  margin-bottom: 20px;
`;

const TaskCard = styled.div<{ completed: boolean }>`
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  background-color: ${props => props.completed ? '#e6f7e6' : '#fff'};
  border: 1px solid ${props => props.completed ? '#c3e6c3' : '#eee'};
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

const ProgressBar = styled.div<{ progress: number }>`
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
    background-color: #4CAF50;
    transition: width 0.3s ease;
  }
`;

const CategoryBadge = styled.span<{ category: string }>`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 8px;
  background-color: ${props => {
    switch (props.category) {
      case 'coding': return '#007bff';
      case 'math': return '#17a2b8';
      case 'science': return '#6f42c1';
      case 'art': return '#e83e8c';
      case 'environment': return '#28a745';
      case 'project': return '#fd7e14';
      default: return '#6c757d';
    }
  }};
  color: white;
`;

interface TaskPanelProps {
  weeklyTasks: PeriodicTask[];
  monthlyTasks: PeriodicTask[];
  taskProgress: TaskProgress[];
  onTaskProgress?: (taskId: string, progress: number) => void;
}

export const TaskPanel: React.FC<TaskPanelProps> = ({
  weeklyTasks,
  monthlyTasks,
  taskProgress,
  onTaskProgress
}) => {
  const getTaskProgress = (taskId: string) => {
    const progress = taskProgress.find(p => p.taskId === taskId);
    return progress?.currentProgress || 0;
  };

  const isTaskCompleted = (taskId: string) => {
    const progress = taskProgress.find(p => p.taskId === taskId);
    return progress?.completed || false;
  };

  const handleProgressClick = (task: PeriodicTask) => {
    if (onTaskProgress) {
      const currentProgress = getTaskProgress(task.id);
      if (currentProgress < task.requiredProgress) {
        onTaskProgress(task.id, currentProgress + 1);
      }
    }
  };

  const renderTasks = (tasks: PeriodicTask[], title: string) => (
    <TaskSection>
      <h2>{title}</h2>
      {tasks.map(task => {
        const progress = getTaskProgress(task.id);
        const completed = isTaskCompleted(task.id);
        const progressPercent = (progress / task.requiredProgress) * 100;

        return (
          <TaskCard
            key={task.id}
            completed={completed}
            onClick={() => handleProgressClick(task)}
            style={{ cursor: completed ? 'default' : 'pointer' }}
          >
            <TaskHeader>
              <TaskTitle>{task.title}</TaskTitle>
              <TaskPoints>{task.points} puan</TaskPoints>
            </TaskHeader>

            <CategoryBadge category={task.category}>
              {task.category}
            </CategoryBadge>

            <p>{task.description}</p>
            
            <ProgressBar progress={progressPercent} />
            <small>
              İlerleme: {progress} / {task.requiredProgress}
              {completed && ' ✓'}
            </small>
          </TaskCard>
        );
      })}
    </TaskSection>
  );

  return (
    <TaskContainer>
      {renderTasks(weeklyTasks, 'Haftalık Görevler')}
      {renderTasks(monthlyTasks, 'Aylık Görevler')}
    </TaskContainer>
  );
};