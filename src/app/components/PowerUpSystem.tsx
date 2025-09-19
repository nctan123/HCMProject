'use client';

import { useState, useEffect } from 'react';
import { PowerUp } from '../data/gameFeatures';

type Props = {
  playerId: number;
  playerScore: number;
  onPowerUpActivate: (powerUpId: string, playerId: number) => void;
  availablePowerUps: PowerUp[];
  activePowerUps: { [playerId: number]: { powerUp: PowerUp; remaining: number }[] };
};

export default function PowerUpSystem({ 
  playerId, 
  playerScore, 
  onPowerUpActivate, 
  availablePowerUps, 
  activePowerUps 
}: Props) {
  const [showPowerUps, setShowPowerUps] = useState(false);
  const [selectedPowerUp, setSelectedPowerUp] = useState<PowerUp | null>(null);

  const canAfford = (powerUp: PowerUp) => playerScore >= powerUp.cost;
  const playerActivePowerUps = activePowerUps[playerId] || [];

  const handlePowerUpClick = (powerUp: PowerUp) => {
    if (canAfford(powerUp)) {
      setSelectedPowerUp(powerUp);
    }
  };

  const confirmActivate = () => {
    if (selectedPowerUp) {
      onPowerUpActivate(selectedPowerUp.id, playerId);
      setSelectedPowerUp(null);
      setShowPowerUps(false);
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-400 bg-gray-100/10';
      case 'rare': return 'border-blue-400 bg-blue-100/10';
      case 'epic': return 'border-purple-400 bg-purple-100/10';
      case 'legendary': return 'border-yellow-400 bg-yellow-100/10';
      default: return 'border-gray-400 bg-gray-100/10';
    }
  };

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case 'common': return '';
      case 'rare': return 'shadow-blue-500/50';
      case 'epic': return 'shadow-purple-500/50';
      case 'legendary': return 'shadow-yellow-500/50 animate-pulse';
      default: return '';
    }
  };

  return (
    <div className="relative">
      {/* Power-up Button */}
      <button
        onClick={() => setShowPowerUps(!showPowerUps)}
        className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
      >
        <span className="flex items-center space-x-2">
          <span>⚡</span>
          <span>Power-ups</span>
          {playerActivePowerUps.length > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-2">
              {playerActivePowerUps.length}
            </span>
          )}
        </span>
      </button>

      {/* Active Power-ups Display */}
      {playerActivePowerUps.length > 0 && (
        <div className="absolute top-full left-0 mt-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 z-10">
          <div className="text-xs text-white mb-1">Đang hoạt động:</div>
          <div className="flex space-x-1">
            {playerActivePowerUps.map((active, index) => (
              <div key={index} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                {active.powerUp.icon} {active.remaining}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Power-ups Menu */}
      {showPowerUps && (
        <div className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-sm rounded-xl p-4 z-20 min-w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-bold">Power-ups</h3>
            <button
              onClick={() => setShowPowerUps(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto">
            {availablePowerUps.map((powerUp) => (
              <div
                key={powerUp.id}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  canAfford(powerUp)
                    ? 'hover:scale-105 ' + getRarityColor(powerUp.rarity) + ' ' + getRarityGlow(powerUp.rarity)
                    : 'opacity-50 cursor-not-allowed border-gray-600 bg-gray-800/50'
                }`}
                onClick={() => handlePowerUpClick(powerUp)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{powerUp.icon}</span>
                    <div>
                      <div className="text-white font-semibold">{powerUp.name}</div>
                      <div className="text-gray-300 text-sm">{powerUp.description}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-bold ${
                      canAfford(powerUp) ? 'text-yellow-400' : 'text-red-400'
                    }`}>
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

          <div className="mt-4 text-center text-sm text-gray-400">
            Điểm hiện tại: <span className="text-yellow-400 font-bold">{playerScore}</span>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {selectedPowerUp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-md mx-4">
            <div className="text-center">
              <div className="text-4xl mb-4">{selectedPowerUp.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{selectedPowerUp.name}</h3>
              <p className="text-gray-300 mb-4">{selectedPowerUp.description}</p>
              <div className="text-yellow-400 font-bold mb-6">
                Chi phí: {selectedPowerUp.cost} điểm
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setSelectedPowerUp(null)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  Hủy
                </button>
                <button
                  onClick={confirmActivate}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Kích hoạt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
