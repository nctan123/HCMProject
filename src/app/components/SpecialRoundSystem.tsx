'use client';

import { useState, useEffect } from 'react';
import { SpecialRound } from '../data/gameFeatures';

type Props = {
  currentRound: number;
  totalRounds: number;
  onSpecialRoundStart: (round: SpecialRound) => void;
  onSpecialRoundEnd: () => void;
};

export default function SpecialRoundSystem({
  currentRound,
  totalRounds,
  onSpecialRoundStart,
  onSpecialRoundEnd
}: Props) {
  const [specialRound, setSpecialRound] = useState<SpecialRound | null>(null);
  const [showRoundIntro, setShowRoundIntro] = useState(false);
  const [countdown, setCountdown] = useState(3);

  // Determine if this should be a special round
  useEffect(() => {
    const shouldTriggerSpecialRound = () => {
      // Trigger special rounds at specific intervals
      if (currentRound === 5) return 'lightning_round';
      if (currentRound === 10) return 'boss_round';
      if (currentRound === 15) return 'sudden_death';
      if (currentRound % 7 === 0) return 'mystery_round';
      return null;
    };

    const roundId = shouldTriggerSpecialRound();
    if (roundId) {
      const round = specialRounds.find(r => r.id === roundId);
      if (round) {
        setSpecialRound(round);
        setShowRoundIntro(true);
        startCountdown();
      }
    }
  }, [currentRound]);

  const startCountdown = () => {
    setCountdown(3);
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowRoundIntro(false);
          if (specialRound) {
            onSpecialRoundStart(specialRound);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const getRoundIcon = (type: string) => {
    switch (type) {
      case 'lightning': return '⚡';
      case 'boss': return '👹';
      case 'sudden_death': return '💀';
      case 'team_battle': return '⚔️';
      case 'mystery': return '🎭';
      default: return '⭐';
    }
  };

  const getRoundColor = (type: string) => {
    switch (type) {
      case 'lightning': return 'from-yellow-500 to-orange-500';
      case 'boss': return 'from-red-500 to-purple-500';
      case 'sudden_death': return 'from-gray-500 to-red-500';
      case 'team_battle': return 'from-blue-500 to-green-500';
      case 'mystery': return 'from-purple-500 to-pink-500';
      default: return 'from-yellow-500 to-orange-500';
    }
  };

  if (!showRoundIntro || !specialRound) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-4 text-center">
        {/* Round Icon and Title */}
        <div className="mb-6">
          <div className="text-8xl mb-4 animate-bounce">
            {getRoundIcon(specialRound.type)}
          </div>
          <h2 className={`text-4xl font-bold bg-gradient-to-r ${getRoundColor(specialRound.type)} bg-clip-text text-transparent mb-2`}>
            {specialRound.name}
          </h2>
          <p className="text-xl text-gray-300">{specialRound.description}</p>
        </div>

        {/* Rules */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Quy tắc đặc biệt:</h3>
          <div className="space-y-2">
            {specialRound.rules.map((rule, index) => (
              <div key={index} className="text-lg text-gray-200 flex items-center justify-center space-x-2">
                <span className="text-yellow-400">•</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Multiplier Info */}
        <div className="mb-8">
          <div className="bg-yellow-500/20 border border-yellow-400 rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-400 mb-2">
              Điểm số được nhân {specialRound.multiplier}x
            </div>
            {specialRound.timeLimit && (
              <div className="text-lg text-white">
                Thời gian: {specialRound.timeLimit} giây mỗi câu
              </div>
            )}
            {specialRound.questionCount && (
              <div className="text-lg text-white">
                Số câu hỏi: {specialRound.questionCount}
              </div>
            )}
          </div>
        </div>

        {/* Countdown */}
        <div className="text-6xl font-bold text-white mb-4">
          {countdown > 0 ? countdown : 'BẮT ĐẦU!'}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${((3 - countdown) / 3) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Import special rounds
import { specialRounds } from '../data/gameFeatures';
