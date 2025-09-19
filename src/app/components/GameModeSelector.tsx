'use client';

import { useState } from 'react';
import { Crown, Users, User, Trash2, Settings } from 'lucide-react';

type Props = {
  onModeSelect: (mode: 'admin' | 'player') => void;
};

export default function GameModeSelector({ onModeSelect }: Props) {
  const [selectedMode, setSelectedMode] = useState<'admin' | 'player' | null>(null);
  const [gameCode, setGameCode] = useState('');

  const handleModeSelect = (mode: 'admin' | 'player') => {
    setSelectedMode(mode);
  };

  const handleConfirm = () => {
    if (selectedMode === 'admin') {
      onModeSelect('admin');
    } else if (selectedMode === 'player' && gameCode.trim()) {
      onModeSelect('player');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">🏆</div>
          <h1 className="text-5xl font-bold text-white mb-4">
            RUNG CHUÔNG VÀNG
          </h1>
          <p className="text-xl text-gray-300">
            Trò chơi kiến thức về lịch sử Đảng Cộng sản Việt Nam
          </p>
        </div>

        {/* Mode Selection */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Admin Mode */}
          <div
            className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
              selectedMode === 'admin'
                ? 'border-yellow-400 bg-yellow-400/20 scale-105'
                : 'border-gray-600 bg-white/5 hover:border-purple-400 hover:bg-white/10'
            }`}
            onClick={() => handleModeSelect('admin')}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">👑</div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <Crown className="h-8 w-8 mr-3 text-yellow-400" />
                Admin Mode
              </h2>
              <p className="text-gray-300 mb-6">
                Quản lý và điều khiển game
              </p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Tạo mã code game</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Quản lý người chơi (tối đa 35)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Điều khiển bắt đầu/dừng game</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Cài đặt chế độ chơi</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Theo dõi kết quả real-time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Player Mode */}
          <div
            className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
              selectedMode === 'player'
                ? 'border-blue-400 bg-blue-400/20 scale-105'
                : 'border-gray-600 bg-white/5 hover:border-purple-400 hover:bg-white/10'
            }`}
            onClick={() => handleModeSelect('player')}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🎮</div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <User className="h-8 w-8 mr-3 text-blue-400" />
                Player Mode
              </h2>
              <p className="text-gray-300 mb-6">
                Tham gia game với mã code
              </p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Nhập mã code từ Admin</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Chọn tên (tối đa 50 ký tự)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Chọn biểu tượng con vật</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Chọn màu sắc cá nhân</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Tham gia trò chơi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Code Input for Player Mode */}
        {selectedMode === 'player' && (
          <div className="mb-8">
            <label className="block text-lg font-semibold text-white mb-4 text-center">
              Nhập mã code game từ Admin
            </label>
            <div className="max-w-md mx-auto">
              <input
                type="text"
                value={gameCode}
                onChange={(e) => setGameCode(e.target.value.toUpperCase())}
                className="w-full bg-white/10 border-2 border-blue-400 rounded-xl px-6 py-4 text-2xl font-mono font-bold text-center text-blue-400 focus:outline-none focus:border-yellow-400"
                placeholder="ABC123"
                maxLength={6}
              />
              <p className="text-sm text-gray-400 mt-2 text-center">
                Mã code gồm 6 ký tự (A-Z, 0-9)
              </p>
            </div>
          </div>
        )}

        {/* Confirm Button */}
        {selectedMode && (
          <div className="text-center">
            <button
              onClick={handleConfirm}
              disabled={selectedMode === 'player' && (!gameCode.trim() || gameCode.length !== 6)}
              className={`px-8 py-4 rounded-xl font-bold text-xl transition-all duration-300 ${
                selectedMode === 'admin'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
              } disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed`}
            >
              {selectedMode === 'admin' ? 'BẮT ĐẦU QUẢN LÝ' : 'THAM GIA GAME'}
            </button>
          </div>
        )}

        {/* Game Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-white mb-2">Power-ups</h3>
            <p className="text-sm text-gray-400">7 loại Power-ups đặc biệt</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-xl">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-white mb-2">Thử thách</h3>
            <p className="text-sm text-gray-400">5 loại thử thách hấp dẫn</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-xl">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-lg font-semibold text-white mb-2">Thành tích</h3>
            <p className="text-sm text-gray-400">Hệ thống thành tích phong phú</p>
          </div>
        </div>
      </div>
    </div>
  );
}
