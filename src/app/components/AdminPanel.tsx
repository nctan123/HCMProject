'use client';

import { useState, useEffect } from 'react';
import { Crown, Users, Settings, Play, Pause, RotateCcw, Copy, Eye, EyeOff, LogOut, User } from 'lucide-react';
import { GameSession, generateGameCode, generateSessionId, ANIMAL_ICONS, PLAYER_COLORS } from '../data/gameSettings';
import { AdminUser } from '../data/adminAuth';

type Props = {
  onGameStart: () => void;
  onGamePause: () => void;
  onGameReset: () => void;
  onSettingsChange: (settings: any) => void;
  onLogout: () => void;
  players: any[];
  gameState: string;
  currentAdmin: AdminUser | null;
};

export default function AdminPanel({
  onGameStart,
  onGamePause,
  onGameReset,
  onSettingsChange,
  onLogout,
  players,
  gameState,
  currentAdmin
}: Props) {
  const [session, setSession] = useState<GameSession | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [settings, setSettings] = useState({
    maxPlayers: 35,
    gameMode: 'individual',
    difficulty: 'medium',
    timeControl: true,
    registrationTime: 60,
    gameStartDelay: 10
  });

  useEffect(() => {
    // Initialize admin session
    const newSession: GameSession = {
      id: generateSessionId(),
      code: generateGameCode(),
      adminId: 'admin_' + Date.now(),
      adminName: 'Admin',
      status: 'waiting',
      maxPlayers: settings.maxPlayers,
      currentPlayers: 0,
      gameMode: settings.gameMode as any,
      difficulty: settings.difficulty as any,
      timeControl: settings.timeControl,
      createdAt: Date.now()
    };
    setSession(newSession);
  }, []);

  const handleStartGame = () => {
    if (session) {
      setSession(prev => prev ? { ...prev, status: 'playing', startedAt: Date.now() } : null);
      onGameStart();
    }
  };

  const handlePauseGame = () => {
    if (session) {
      setSession(prev => prev ? { ...prev, status: 'waiting' } : null);
      onGamePause();
    }
  };

  const handleResetGame = () => {
    if (session) {
      const newCode = generateGameCode();
      setSession(prev => prev ? {
        ...prev,
        code: newCode,
        status: 'waiting',
        currentPlayers: 0,
        startedAt: undefined,
        endedAt: undefined
      } : null);
      onGameReset();
    }
  };

  const copyGameCode = () => {
    if (session) {
      navigator.clipboard.writeText(session.code);
      // Show success message
      const button = document.getElementById('copy-button');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Đã copy!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
    }
  };

  const activePlayers = players.filter(p => p.isActive).length;
  const readyPlayers = players.filter(p => p.isReady).length;

  return (
    <div className="bg-gradient-to-br from-purple-900/80 to-indigo-900/80 backdrop-blur-lg rounded-2xl p-6 border-2 border-purple-400/30">
      {/* Admin Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Crown className="h-8 w-8 text-yellow-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
            <p className="text-purple-300 text-sm">Quản lý game "Rung chuông vàng"</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
          >
            <Settings className="h-5 w-5" />
          </button>
          <button
            onClick={onLogout}
            className="bg-red-500/20 hover:bg-red-500/30 text-red-400 p-2 rounded-lg transition-colors"
            title="Đăng xuất"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Admin Info */}
      {currentAdmin && (
        <div className="bg-white/5 rounded-xl p-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-500/20 p-2 rounded-lg">
              <User className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <div className="text-white font-semibold">{currentAdmin.name}</div>
              <div className="text-gray-400 text-sm">{currentAdmin.email}</div>
              <div className="text-xs text-purple-400 capitalize">
                {currentAdmin.role === 'super-admin' ? 'Super Admin' : 'Admin'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Game Code */}
      <div className="bg-black/30 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-white">Mã code game</h3>
          <button
            onClick={() => setShowCode(!showCode)}
            className="text-purple-300 hover:text-white transition-colors"
          >
            {showCode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        
        {showCode ? (
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 rounded-lg px-4 py-3 flex-1">
              <span className="text-3xl font-mono font-bold text-yellow-400">
                {session?.code}
              </span>
            </div>
            <button
              id="copy-button"
              onClick={copyGameCode}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-3 rounded-lg font-semibold transition-colors"
            >
              Copy
            </button>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="text-6xl mb-2">🔒</div>
            <p className="text-gray-300">Click để xem mã code</p>
          </div>
        )}
        
        <p className="text-sm text-gray-400 mt-2">
          Chia sẻ mã code này với người chơi để họ có thể tham gia
        </p>
      </div>

      {/* Game Status */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="h-5 w-5 text-blue-400" />
            <span className="text-white font-semibold">Người chơi</span>
          </div>
          <div className="text-2xl font-bold text-blue-400">
            {activePlayers}/{session?.maxPlayers || 35}
          </div>
          <div className="text-sm text-gray-400">
            {readyPlayers} sẵn sàng
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className={`w-3 h-3 rounded-full ${
              session?.status === 'playing' ? 'bg-green-400' :
              session?.status === 'waiting' ? 'bg-yellow-400' :
              'bg-red-400'
            }`}></div>
            <span className="text-white font-semibold">Trạng thái</span>
          </div>
          <div className="text-lg font-bold text-white capitalize">
            {session?.status === 'playing' ? 'Đang chơi' :
             session?.status === 'waiting' ? 'Chờ đợi' :
             session?.status === 'registration' ? 'Đăng ký' : 'Kết thúc'}
          </div>
        </div>
      </div>

      {/* Player List */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-3">Danh sách người chơi</h3>
        <div className="max-h-40 overflow-y-auto space-y-2">
          {players.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <div className="text-4xl mb-2">👥</div>
              <p>Chưa có người chơi nào tham gia</p>
            </div>
          ) : (
            players.map((player, index) => (
              <div
                key={player.id}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  player.isReady ? 'bg-green-500/20 border border-green-400' : 'bg-white/5'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{player.icon}</span>
                  <div>
                    <div className="text-white font-semibold">{player.name}</div>
                    <div className="text-xs text-gray-400">
                      Tham gia: {new Date(player.joinedAt).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {player.isReady && (
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Sẵn sàng
                    </div>
                  )}
                  <div className="text-sm text-gray-400">
                    #{index + 1}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Game Controls */}
      <div className="space-y-3">
        {session?.status === 'waiting' ? (
          <button
            onClick={handleStartGame}
            disabled={activePlayers === 0}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Play className="h-5 w-5" />
            <span>BẮT ĐẦU GAME</span>
          </button>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handlePauseGame}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Pause className="h-4 w-4" />
              <span>Tạm dừng</span>
            </button>
            <button
              onClick={handleResetGame}
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset</span>
            </button>
          </div>
        )}
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="mt-6 p-4 bg-black/20 rounded-xl">
          <h4 className="text-lg font-semibold text-white mb-4">Cài đặt game</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Số người chơi tối đa
              </label>
              <input
                type="number"
                value={settings.maxPlayers}
                onChange={(e) => setSettings(prev => ({ ...prev, maxPlayers: parseInt(e.target.value) || 35 }))}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
                min="1"
                max="35"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Chế độ chơi
              </label>
              <select
                value={settings.gameMode}
                onChange={(e) => setSettings(prev => ({ ...prev, gameMode: e.target.value }))}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
              >
                <option value="individual">Cá nhân</option>
                <option value="team">Đội nhóm</option>
                <option value="elimination">Loại trừ</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Độ khó
              </label>
              <select
                value={settings.difficulty}
                onChange={(e) => setSettings(prev => ({ ...prev, difficulty: e.target.value }))}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-purple-400 focus:outline-none"
              >
                <option value="easy">Dễ</option>
                <option value="medium">Trung bình</option>
                <option value="hard">Khó</option>
                <option value="extreme">Cực khó</option>
              </select>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="timeControl"
                checked={settings.timeControl}
                onChange={(e) => setSettings(prev => ({ ...prev, timeControl: e.target.checked }))}
                className="w-4 h-4 text-purple-400 bg-white/10 border-gray-600 rounded focus:ring-purple-400"
              />
              <label htmlFor="timeControl" className="text-sm text-gray-300">
                Kiểm soát thời gian
              </label>
            </div>

            <button
              onClick={() => {
                onSettingsChange(settings);
                setShowSettings(false);
              }}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Lưu cài đặt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
