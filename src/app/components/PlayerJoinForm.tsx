'use client';

import { useState } from 'react';
import { Gamepad2, User, Palette, CheckCircle, XCircle } from 'lucide-react';
import { ANIMAL_ICONS, PLAYER_COLORS, PlayerProfile } from '../data/gameSettings';

type Props = {
  gameCode: string;
  onJoin: (player: PlayerProfile) => void;
  onError: (message: string) => void;
  maxPlayers: number;
  currentPlayers: number;
};

export default function PlayerJoinForm({
  gameCode,
  onJoin,
  onError,
  maxPlayers,
  currentPlayers
}: Props) {
  const [playerName, setPlayerName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(ANIMAL_ICONS[0]);
  const [selectedColor, setSelectedColor] = useState(PLAYER_COLORS[0]);
  const [isJoining, setIsJoining] = useState(false);
  const [showIconPicker, setShowIconPicker] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleJoin = async () => {
    if (!playerName.trim()) {
      onError('Vui lòng nhập tên của bạn');
      return;
    }

    if (playerName.length > 50) {
      onError('Tên không được quá 50 ký tự');
      return;
    }

    if (currentPlayers >= maxPlayers) {
      onError('Game đã đủ số lượng người chơi');
      return;
    }

    setIsJoining(true);

    try {
      const newPlayer: PlayerProfile = {
        id: 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        sessionId: gameCode,
        name: playerName.trim(),
        icon: selectedIcon.emoji,
        color: selectedColor,
        joinedAt: Date.now(),
        isReady: true,
        isActive: true,
        score: 0,
        position: 0
      };

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onJoin(newPlayer);
      setPlayerName('');
    } catch (error) {
      onError('Có lỗi xảy ra khi tham gia game');
    } finally {
      setIsJoining(false);
    }
  };

  const validateGameCode = (code: string) => {
    return code.length === 6 && /^[A-Z0-9]+$/.test(code);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎮</div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Tham gia game
          </h1>
          <p className="text-xl text-gray-300">
            "Rung chuông vàng"
          </p>
        </div>

        {/* Game Code Input */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-white mb-4">
            Nhập mã code game
          </label>
          <div className="relative">
            <input
              type="text"
              value={gameCode}
              readOnly
              className="w-full bg-white/10 border-2 border-purple-400 rounded-xl px-6 py-4 text-2xl font-mono font-bold text-center text-yellow-400 focus:outline-none focus:border-yellow-400"
              placeholder="ABC123"
              maxLength={6}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              {validateGameCode(gameCode) ? (
                <CheckCircle className="h-6 w-6 text-green-400" />
              ) : (
                <XCircle className="h-6 w-6 text-red-400" />
              )}
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-2 text-center">
            Mã code này được cung cấp bởi Admin
          </p>
        </div>

        {/* Player Name Input */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-white mb-4">
            Tên của bạn (tối đa 50 ký tự)
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full bg-white/10 border border-gray-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
              placeholder="Nhập tên của bạn..."
              maxLength={50}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>Ký tự: {playerName.length}/50</span>
            <span>Người chơi: {currentPlayers}/{maxPlayers}</span>
          </div>
        </div>

        {/* Icon Selection */}
        <div className="mb-6">
          <label className="block text-lg font-semibold text-white mb-4">
            Chọn biểu tượng con vật
          </label>
          <div className="relative">
            <button
              onClick={() => setShowIconPicker(!showIconPicker)}
              className="w-full bg-white/10 border border-gray-600 rounded-xl p-4 flex items-center justify-between hover:border-purple-400 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{selectedIcon.emoji}</span>
                <span className="text-white font-semibold">{selectedIcon.name}</span>
              </div>
              <Palette className="h-5 w-5 text-gray-400" />
            </button>

            {showIconPicker && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-lg rounded-xl p-4 z-10 max-h-60 overflow-y-auto">
                <div className="grid grid-cols-5 gap-3">
                  {ANIMAL_ICONS.map((icon) => (
                    <button
                      key={icon.id}
                      onClick={() => {
                        setSelectedIcon(icon);
                        setShowIconPicker(false);
                      }}
                      className={`p-3 rounded-lg text-center transition-all ${
                        selectedIcon.id === icon.id
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      <div className="text-2xl mb-1">{icon.emoji}</div>
                      <div className="text-xs">{icon.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-white mb-4">
            Chọn màu sắc
          </label>
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="w-full bg-white/10 border border-gray-600 rounded-xl p-4 flex items-center justify-between hover:border-purple-400 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-full border-2 border-white"
                  style={{ backgroundColor: selectedColor }}
                ></div>
                <span className="text-white font-semibold">Màu sắc</span>
              </div>
              <Palette className="h-5 w-5 text-gray-400" />
            </button>

            {showColorPicker && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-lg rounded-xl p-4 z-10">
                <div className="grid grid-cols-5 gap-3">
                  {PLAYER_COLORS.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedColor(color);
                        setShowColorPicker(false);
                      }}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? 'border-white scale-110'
                          : 'border-gray-600 hover:border-white'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className="mb-8 p-4 bg-white/5 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-3">Xem trước</h3>
          <div className="flex items-center space-x-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl border-2 border-white"
              style={{ backgroundColor: selectedColor }}
            >
              {selectedIcon.emoji}
            </div>
            <div>
              <div className="text-white font-semibold text-lg">
                {playerName || 'Tên của bạn'}
              </div>
              <div className="text-gray-400 text-sm">
                {selectedIcon.name} • Màu {selectedColor}
              </div>
            </div>
          </div>
        </div>

        {/* Join Button */}
        <button
          onClick={handleJoin}
          disabled={!playerName.trim() || !validateGameCode(gameCode) || isJoining || currentPlayers >= maxPlayers}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
        >
          {isJoining ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Đang tham gia...</span>
            </>
          ) : (
            <>
              <Gamepad2 className="h-5 w-5" />
              <span>THAM GIA GAME</span>
            </>
          )}
        </button>

        {/* Status Messages */}
        {currentPlayers >= maxPlayers && (
          <div className="mt-4 p-3 bg-red-500/20 border border-red-400 rounded-lg text-center">
            <p className="text-red-400 font-semibold">
              Game đã đủ số lượng người chơi ({maxPlayers})
            </p>
          </div>
        )}

        {!validateGameCode(gameCode) && (
          <div className="mt-4 p-3 bg-yellow-500/20 border border-yellow-400 rounded-lg text-center">
            <p className="text-yellow-400 font-semibold">
              Mã code không hợp lệ. Vui lòng kiểm tra lại.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
