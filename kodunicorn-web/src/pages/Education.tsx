import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { EducationSystem } from '../components/Education';
import { educationMaterials } from '../data/educationMaterials';

export const Education: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Örnek veriler - gerçek uygulamada API'den gelecek
  const currentUser = {
    id: '1',
    level: 'elementary' as const
  };

  const materials = educationMaterials;
  const progress = {
    userId: '1',
    level: 'elementary' as const,
    totalPoints: 0,
    completedMaterials: [],
    achievements: [],
    currentStreak: 0,
    lastActivityDate: new Date(),
    favoriteSubjects: [],
    learningPath: {
      current: '',
      next: []
    }
  };

  const stats = {
    totalMaterialsCompleted: 0,
    totalPointsEarned: 0,
    averageScore: 0,
    timeSpent: 0,
    subjectBreakdown: [],
    achievements: {
      total: 0,
      recent: []
    }
  };

  const handleMaterialComplete = (_materialId: string) => {
    // Materyal tamamlama işlemleri
  };

  const handlePointsEarned = (_points: number) => {
    // Puan kazanma işlemleri
  };

  const handleAchievementEarned = (_achievementId: string) => {
    // Başarı kazanma işlemleri
  };

  const handleProgressUpdate = (_progressUpdate: any) => {
    // İlerleme güncelleme işlemleri
  };

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <EducationSystem
            currentUser={currentUser}
            materials={materials}
            progress={progress}
            stats={stats}
            onMaterialComplete={handleMaterialComplete}
            onPointsEarned={handlePointsEarned}
            onAchievementEarned={handleAchievementEarned}
            onProgressUpdate={handleProgressUpdate}
          />
        }
      />
    </Routes>
  );
};