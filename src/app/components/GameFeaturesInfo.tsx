'use client';

import { useState } from 'react';
import { powerUps, challenges, achievements, specialRounds } from '../data/gameFeatures';

export default function GameFeaturesInfo() {
  const [activeTab, setActiveTab] = useState<'powerups' | 'challenges' | 'achievements' | 'rounds'>('powerups');

  const tabs = [
    { id: 'powerups', name: 'Power-ups', icon: '⚡' },
    { id: 'challenges', name: 'Thử thách', icon: '🎯' },
    { id: 'achievements', name: 'Thành tích', icon: '🏆' },
    { id: 'rounds', name: 'Vòng đặc biệt', icon: '⭐' }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400';
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-400';
      case 'legendary': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-orange-400';
      case 'extreme': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
      <h3 className="text-xl font-bold text-yellow-400 mb-6">🚀 Tính năng nâng cao</h3>
      
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-yellow-500 text-black font-bold'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-h-96 overflow-y-auto">
        {activeTab === 'powerups' && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Power-ups có sẵn:</h4>
            {powerUps.map(powerUp => (
              <div key={powerUp.id} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{powerUp.icon}</span>
                    <div>
                      <h5 className="font-semibold text-white">{powerUp.name}</h5>
                      <p className="text-sm text-gray-300">{powerUp.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${getRarityColor(powerUp.rarity)}`}>
                      {powerUp.cost} điểm
                    </div>
                    <div className="text-xs text-gray-400 capitalize">
                      {powerUp.rarity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Thử thách đặc biệt:</h4>
            {challenges.map(challenge => (
              <div key={challenge.id} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h5 className="font-semibold text-white">{challenge.name}</h5>
                    <p className="text-sm text-gray-300">{challenge.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-bold">
                      +{challenge.reward.points} điểm
                    </div>
                    <div className={`text-xs font-bold ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Thành tích có thể đạt được:</h4>
            {achievements.map(achievement => (
              <div key={achievement.id} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h5 className="font-semibold text-white">{achievement.name}</h5>
                      <p className="text-sm text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-bold">
                      +{achievement.reward.points} điểm
                    </div>
                    {achievement.reward.title && (
                      <div className="text-xs text-blue-400">
                        {achievement.reward.title}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'rounds' && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Vòng đặc biệt:</h4>
            {specialRounds.map(round => (
              <div key={round.id} className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h5 className="font-semibold text-white">{round.name}</h5>
                    <p className="text-sm text-gray-300">{round.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-orange-400 font-bold">
                      x{round.multiplier} điểm
                    </div>
                    {round.timeLimit && (
                      <div className="text-xs text-gray-400">
                        {round.timeLimit}s/câu
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-1">
                  {round.rules.map((rule, index) => (
                    <div key={index} className="text-xs text-gray-400 flex items-center space-x-2">
                      <span>•</span>
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="mt-6 p-4 bg-blue-500/20 border border-blue-400 rounded-lg">
        <h5 className="font-semibold text-blue-400 mb-2">💡 Mẹo chơi:</h5>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Trả lời nhanh để tăng combo multiplier</li>
          <li>• Sử dụng Power-ups một cách chiến lược</li>
          <li>• Hoàn thành thử thách để nhận điểm thưởng</li>
          <li>• Chuỗi trả lời đúng sẽ tăng điểm số đáng kể</li>
        </ul>
      </div>
    </div>
  );
}
