'use client';

import { useState, useEffect } from 'react';
import { Challenge, Achievement } from '../data/gameFeatures';

type Props = {
  currentQuestion: any;
  playerAnswer: number | null;
  isCorrect: boolean;
  timeLeft: number;
  playerStreak: number;
  playerPosition: number;
  totalPlayers: number;
  onChallengeComplete: (challengeId: string, reward: any) => void;
  onAchievementUnlock: (achievementId: string, reward: any) => void;
};

export default function ChallengeSystem({
  currentQuestion,
  playerAnswer,
  isCorrect,
  timeLeft,
  playerStreak,
  playerPosition,
  totalPlayers,
  onChallengeComplete,
  onAchievementUnlock
}: Props) {
  const [activeChallenges, setActiveChallenges] = useState<Challenge[]>([]);
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [showChallengeNotification, setShowChallengeNotification] = useState<string | null>(null);

  // Check for challenge completions
  useEffect(() => {
    if (isCorrect && currentQuestion) {
      checkChallenges();
    }
  }, [isCorrect, currentQuestion, playerAnswer, timeLeft, playerStreak, playerPosition]);

  const checkChallenges = () => {
    const newCompletedChallenges: string[] = [];
    const newUnlockedAchievements: string[] = [];

    // Speed Demon Challenge
    if (isCorrect && timeLeft > 10 && currentQuestion.timeLimit - timeLeft <= 5) {
      const challenge = challenges.find(c => c.id === 'speed_demon');
      if (challenge && !completedChallenges.includes(challenge.id)) {
        newCompletedChallenges.push(challenge.id);
        onChallengeComplete(challenge.id, challenge.reward);
        showNotification(`🎯 ${challenge.name}! +${challenge.reward.points} điểm`);
      }
    }

    // Accuracy Master Challenge
    if (isCorrect && playerStreak >= 5) {
      const challenge = challenges.find(c => c.id === 'accuracy_master');
      if (challenge && !completedChallenges.includes(challenge.id)) {
        newCompletedChallenges.push(challenge.id);
        onChallengeComplete(challenge.id, challenge.reward);
        showNotification(`🎯 ${challenge.name}! +${challenge.reward.points} điểm`);
      }
    }

    // Risk Taker Challenge
    if (isCorrect && timeLeft <= 3 && currentQuestion.difficulty === 'hard') {
      const challenge = challenges.find(c => c.id === 'risk_taker');
      if (challenge && !completedChallenges.includes(challenge.id)) {
        newCompletedChallenges.push(challenge.id);
        onChallengeComplete(challenge.id, challenge.reward);
        showNotification(`🎯 ${challenge.name}! +${challenge.reward.points} điểm`);
      }
    }

    // Comeback King Challenge
    if (isCorrect && playerPosition <= 3 && playerPosition > totalPlayers - 3) {
      const challenge = challenges.find(c => c.id === 'comeback_king');
      if (challenge && !completedChallenges.includes(challenge.id)) {
        newCompletedChallenges.push(challenge.id);
        onChallengeComplete(challenge.id, challenge.reward);
        showNotification(`🎯 ${challenge.name}! +${challenge.reward.points} điểm`);
      }
    }

    // Check Achievements
    checkAchievements(newUnlockedAchievements);

    if (newCompletedChallenges.length > 0) {
      setCompletedChallenges(prev => [...prev, ...newCompletedChallenges]);
    }

    if (newUnlockedAchievements.length > 0) {
      setUnlockedAchievements(prev => [...prev, ...newUnlockedAchievements]);
      newUnlockedAchievements.forEach(achievementId => {
        const achievement = achievements.find(a => a.id === achievementId);
        if (achievement) {
          onAchievementUnlock(achievementId, achievement.reward);
          showNotification(`🏆 ${achievement.name}! +${achievement.reward.points} điểm`);
        }
      });
    }
  };

  const checkAchievements = (newUnlockedAchievements: string[]) => {
    // First Blood Achievement
    if (isCorrect && !unlockedAchievements.includes('first_blood')) {
      newUnlockedAchievements.push('first_blood');
    }

    // Streak Master Achievement
    if (playerStreak >= 10 && !unlockedAchievements.includes('streak_master')) {
      newUnlockedAchievements.push('streak_master');
    }

    // Speed Legend Achievement (simplified check)
    if (isCorrect && timeLeft > 10 && !unlockedAchievements.includes('speed_legend')) {
      newUnlockedAchievements.push('speed_legend');
    }

    // Comeback Hero Achievement
    if (playerPosition === 1 && playerPosition > totalPlayers - 3 && !unlockedAchievements.includes('comeback_hero')) {
      newUnlockedAchievements.push('comeback_hero');
    }
  };

  const showNotification = (message: string) => {
    setShowChallengeNotification(message);
    setTimeout(() => {
      setShowChallengeNotification(null);
    }, 3000);
  };

  return (
    <>
      {/* Challenge Notifications */}
      {showChallengeNotification && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🎉</span>
            <span className="font-bold">{showChallengeNotification}</span>
          </div>
        </div>
      )}

      {/* Active Challenges Display */}
      {activeChallenges.length > 0 && (
        <div className="fixed top-4 left-4 z-40 bg-black/80 backdrop-blur-sm rounded-lg p-4">
          <h4 className="text-white font-bold mb-2">Thử thách đang hoạt động:</h4>
          <div className="space-y-2">
            {activeChallenges.map(challenge => (
              <div key={challenge.id} className="text-sm text-gray-300">
                <span className="text-yellow-400">⚡</span> {challenge.name}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Achievement Badges */}
      {unlockedAchievements.length > 0 && (
        <div className="fixed bottom-4 right-4 z-40">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4">
            <h4 className="text-white font-bold mb-2">Thành tích:</h4>
            <div className="flex flex-wrap gap-2">
              {unlockedAchievements.map(achievementId => {
                const achievement = achievements.find(a => a.id === achievementId);
                return achievement ? (
                  <div key={achievementId} className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs flex items-center space-x-1">
                    <span>{achievement.icon}</span>
                    <span>{achievement.name}</span>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Import challenges and achievements
import { challenges, achievements } from '../data/gameFeatures';
