'use client';

import { useState, useEffect } from 'react';
import { Clock, Users, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

type TimeControlSettings = {
  registrationTime: number; // seconds
  gameStartDelay: number; // seconds
  lateJoinPenalty: number; // points
  inactivityTimeout: number; // seconds
  autoKickInactive: boolean;
};

type PlayerRegistration = {
  id: number;
  playerId: number;
  name: string;
  joinTime: number;
  isLate: boolean;
  isActive: boolean;
  lastActivity: number;
};

type Props = {
  onGameStart: () => void;
  onPlayerJoin: (player: PlayerRegistration) => void;
  onPlayerKick: (playerId: number) => void;
  onSettingsChange: (settings: TimeControlSettings) => void;
};

export default function TimeControlSystem({
  onGameStart,
  onPlayerJoin,
  onPlayerKick,
  onSettingsChange
}: Props) {
  const [phase, setPhase] = useState<'setup' | 'registration' | 'countdown' | 'playing' | 'ended'>('setup');
  const [timeLeft, setTimeLeft] = useState(0);
  const [registeredPlayers, setRegisteredPlayers] = useState<PlayerRegistration[]>([]);
  const [settings, setSettings] = useState<TimeControlSettings>({
    registrationTime: 60, // 1 minute
    gameStartDelay: 10, // 10 seconds
    lateJoinPenalty: 50, // 50 points
    inactivityTimeout: 30, // 30 seconds
    autoKickInactive: true
  });

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (phase === 'registration' || phase === 'countdown') {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            if (phase === 'registration') {
              setPhase('countdown');
              return settings.gameStartDelay;
            } else {
              startGame();
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [phase, settings]);

  // Inactivity monitoring
  useEffect(() => {
    if (phase === 'playing' && settings.autoKickInactive) {
      const interval = setInterval(() => {
        const now = Date.now();
        setRegisteredPlayers(prev => {
          const updated = prev.map(player => {
            if (now - player.lastActivity > settings.inactivityTimeout * 1000) {
              onPlayerKick(player.id);
              return { ...player, isActive: false };
            }
            return player;
          });
          return updated;
        });
      }, 5000); // Check every 5 seconds

      return () => clearInterval(interval);
    }
  }, [phase, settings, onPlayerKick]);

  const startRegistration = () => {
    setPhase('registration');
    setTimeLeft(settings.registrationTime);
  };

  const startGame = () => {
    setPhase('playing');
    onGameStart();
  };

  const addPlayer = (playerId: number, name: string) => {
    const now = Date.now();
    const isLate = phase === 'countdown' || phase === 'playing';
    
    const newPlayer: PlayerRegistration = {
      id: playerId,
      playerId,
      name,
      joinTime: now,
      isLate,
      isActive: true,
      lastActivity: now
    };

    setRegisteredPlayers(prev => [...prev, newPlayer]);
    onPlayerJoin(newPlayer);
  };

  const updatePlayerActivity = (playerId: number) => {
    setRegisteredPlayers(prev => 
      prev.map(player => 
        player.id === playerId 
          ? { ...player, lastActivity: Date.now() }
          : player
      )
    );
  };

  const kickPlayer = (playerId: number) => {
    setRegisteredPlayers(prev => 
      prev.map(player => 
        player.id === playerId 
          ? { ...player, isActive: false }
          : player
      )
    );
    onPlayerKick(playerId);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'setup': return 'text-gray-400';
      case 'registration': return 'text-green-400';
      case 'countdown': return 'text-yellow-400';
      case 'playing': return 'text-blue-400';
      case 'ended': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPhaseIcon = () => {
    switch (phase) {
      case 'setup': return <Users className="h-5 w-5" />;
      case 'registration': return <Clock className="h-5 w-5" />;
      case 'countdown': return <AlertTriangle className="h-5 w-5" />;
      case 'playing': return <CheckCircle className="h-5 w-5" />;
      case 'ended': return <XCircle className="h-5 w-5" />;
      default: return <Users className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-yellow-400 flex items-center">
          <Clock className="h-6 w-6 mr-2" />
          Kiểm soát thời gian
        </h3>
        <div className={`flex items-center space-x-2 ${getPhaseColor()}`}>
          {getPhaseIcon()}
          <span className="font-semibold capitalize">{phase}</span>
        </div>
      </div>

      {/* Settings */}
      {phase === 'setup' && (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-4">Cài đặt thời gian</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Thời gian đăng ký (giây)
              </label>
              <input
                type="number"
                value={settings.registrationTime}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  registrationTime: parseInt(e.target.value) || 60
                }))}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
                min="10"
                max="300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Thời gian chờ bắt đầu (giây)
              </label>
              <input
                type="number"
                value={settings.gameStartDelay}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  gameStartDelay: parseInt(e.target.value) || 10
                }))}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
                min="5"
                max="60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phạt điểm tham gia muộn
              </label>
              <input
                type="number"
                value={settings.lateJoinPenalty}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  lateJoinPenalty: parseInt(e.target.value) || 50
                }))}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
                min="0"
                max="200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Thời gian không hoạt động (giây)
              </label>
              <input
                type="number"
                value={settings.inactivityTimeout}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  inactivityTimeout: parseInt(e.target.value) || 30
                }))}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-yellow-400 focus:outline-none"
                min="10"
                max="120"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="autoKick"
              checked={settings.autoKickInactive}
              onChange={(e) => setSettings(prev => ({
                ...prev,
                autoKickInactive: e.target.checked
              }))}
              className="w-4 h-4 text-yellow-400 bg-white/10 border-gray-600 rounded focus:ring-yellow-400"
            />
            <label htmlFor="autoKick" className="text-sm text-gray-300">
              Tự động loại người không hoạt động
            </label>
          </div>

          <button
            onClick={() => {
              startRegistration();
              onSettingsChange(settings);
            }}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300"
          >
            Bắt đầu đăng ký
          </button>
        </div>
      )}

      {/* Registration Phase */}
      {phase === 'registration' && (
        <div className="text-center">
          <div className="text-4xl font-bold text-green-400 mb-4">
            {formatTime(timeLeft)}
          </div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Đang đăng ký tham gia
          </h4>
          <p className="text-gray-300 mb-6">
            Người chơi có thể tham gia trong thời gian này
          </p>
          
          <div className="bg-white/5 rounded-lg p-4 mb-4">
            <div className="text-sm text-gray-400 mb-2">Đã đăng ký:</div>
            <div className="text-2xl font-bold text-green-400">
              {registeredPlayers.filter(p => p.isActive).length} người
            </div>
          </div>

          <div className="text-sm text-gray-400">
            Sau khi hết thời gian, game sẽ tự động bắt đầu
          </div>
        </div>
      )}

      {/* Countdown Phase */}
      {phase === 'countdown' && (
        <div className="text-center">
          <div className="text-6xl font-bold text-yellow-400 mb-4 animate-pulse">
            {timeLeft}
          </div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Chuẩn bị bắt đầu!
          </h4>
          <p className="text-gray-300 mb-6">
            Game sẽ bắt đầu sau {timeLeft} giây
          </p>
          
          <div className="bg-yellow-500/20 border border-yellow-400 rounded-lg p-4">
            <div className="text-sm text-yellow-400 mb-2">
              ⚠️ Tham gia muộn sẽ bị phạt {settings.lateJoinPenalty} điểm
            </div>
          </div>
        </div>
      )}

      {/* Playing Phase */}
      {phase === 'playing' && (
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400 mb-4">
            🎮 Game đang diễn ra
          </div>
          <p className="text-gray-300 mb-6">
            {registeredPlayers.filter(p => p.isActive).length} người đang tham gia
          </p>
          
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-2">Thống kê:</div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-green-400">Đúng giờ:</div>
                <div className="font-bold">
                  {registeredPlayers.filter(p => !p.isLate && p.isActive).length}
                </div>
              </div>
              <div>
                <div className="text-orange-400">Tham gia muộn:</div>
                <div className="font-bold">
                  {registeredPlayers.filter(p => p.isLate && p.isActive).length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Player List */}
      {registeredPlayers.length > 0 && (
        <div className="mt-6">
          <h5 className="text-lg font-semibold text-white mb-3">Danh sách người chơi:</h5>
          <div className="max-h-40 overflow-y-auto space-y-2">
            {registeredPlayers.map(player => (
              <div
                key={player.id}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  player.isActive 
                    ? player.isLate 
                      ? 'bg-orange-500/20 border border-orange-400'
                      : 'bg-green-500/20 border border-green-400'
                    : 'bg-red-500/20 border border-red-400'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-white">
                    {player.name}
                  </span>
                  {player.isLate && (
                    <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">
                      Muộn
                    </span>
                  )}
                  {!player.isActive && (
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                      Đã loại
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-400">
                    {new Date(player.joinTime).toLocaleTimeString()}
                  </span>
                  {phase === 'playing' && player.isActive && (
                    <button
                      onClick={() => kickPlayer(player.id)}
                      className="text-red-400 hover:text-red-300 text-xs"
                    >
                      Loại
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
