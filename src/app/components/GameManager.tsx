'use client';

import { useState, useEffect } from 'react';
import GameModeSelector from './GameModeSelector';
import SimpleAdminLogin from './SimpleAdminLogin';
import AdminPanel from './AdminPanel';
import PlayerJoinForm from './PlayerJoinForm';
import QuizGame from './QuizGame';
import { PlayerProfile, GameSession, generateGameCode } from '../data/gameSettings';
import { AdminUser } from '../data/adminAuth';

type GameMode = 'selector' | 'admin-login' | 'admin' | 'player';

export default function GameManager() {
  const [gameMode, setGameMode] = useState<GameMode>('selector');
  const [session, setSession] = useState<GameSession | null>(null);
  const [players, setPlayers] = useState<PlayerProfile[]>([]);
  const [gameState, setGameState] = useState('waiting');
  const [gameCode, setGameCode] = useState('');
  const [error, setError] = useState('');
  const [currentAdmin, setCurrentAdmin] = useState<AdminUser | null>(null);

  // Initialize admin session when admin mode is selected
  useEffect(() => {
    if (gameMode === 'admin') {
      const newSession: GameSession = {
        id: 'session_' + Date.now(),
        code: generateGameCode(),
        adminId: 'admin_' + Date.now(),
        adminName: 'Admin',
        status: 'waiting',
        maxPlayers: 35,
        currentPlayers: 0,
        gameMode: 'individual',
        difficulty: 'medium',
        timeControl: true,
        createdAt: Date.now()
      };
      setSession(newSession);
      setGameCode(newSession.code);
    }
  }, [gameMode]);

  const handleModeSelect = (mode: 'admin' | 'player') => {
    if (mode === 'admin') {
      setGameMode('admin-login');
    } else {
      setGameMode('player');
    }
  };

  const handleAdminLoginSuccess = (admin: AdminUser) => {
    setCurrentAdmin(admin);
    setGameMode('admin');
  };

  const handleAdminLogout = () => {
    setCurrentAdmin(null);
    setGameMode('selector');
  };

  const handlePlayerJoin = (player: PlayerProfile) => {
    setPlayers(prev => {
      const existingPlayer = prev.find(p => p.id === player.id);
      if (existingPlayer) {
        return prev.map(p => p.id === player.id ? player : p);
      }
      return [...prev, player];
    });

    if (session) {
      setSession(prev => prev ? {
        ...prev,
        currentPlayers: prev.currentPlayers + 1
      } : null);
    }
  };

  const handlePlayerLeave = (playerId: string) => {
    setPlayers(prev => prev.filter(p => p.id !== playerId));
    
    if (session) {
      setSession(prev => prev ? {
        ...prev,
        currentPlayers: Math.max(0, prev.currentPlayers - 1)
      } : null);
    }
  };

  const handleGameStart = () => {
    setGameState('playing');
    if (session) {
      setSession(prev => prev ? {
        ...prev,
        status: 'playing',
        startedAt: Date.now()
      } : null);
    }
  };

  const handleGamePause = () => {
    setGameState('waiting');
    if (session) {
      setSession(prev => prev ? {
        ...prev,
        status: 'waiting'
      } : null);
    }
  };

  const handleGameReset = () => {
    setPlayers([]);
    setGameState('waiting');
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
      setGameCode(newCode);
    }
  };

  const handleSettingsChange = (settings: any) => {
    if (session) {
      setSession(prev => prev ? {
        ...prev,
        maxPlayers: settings.maxPlayers,
        gameMode: settings.gameMode,
        difficulty: settings.difficulty,
        timeControl: settings.timeControl
      } : null);
    }
  };

  const handleError = (message: string) => {
    setError(message);
    setTimeout(() => setError(''), 5000);
  };

  const handleBackToSelector = () => {
    setGameMode('selector');
    setSession(null);
    setPlayers([]);
    setGameState('waiting');
    setGameCode('');
    setError('');
  };

  // Convert PlayerProfile to QuizGame Player format
  const convertPlayers = (profiles: PlayerProfile[]) => {
    return profiles.map((profile, index) => ({
      id: index + 1,
      name: profile.name,
      score: profile.score,
      isActive: profile.isActive,
      isEliminated: false,
      streak: 0,
      powerUps: [],
      achievements: [],
      multiplier: 1,
      lastAnswerTime: undefined,
      icon: profile.icon,
      color: profile.color
    }));
  };

  if (gameMode === 'selector') {
    return <GameModeSelector onModeSelect={handleModeSelect} />;
  }

  if (gameMode === 'admin-login') {
    return <SimpleAdminLogin onLoginSuccess={handleAdminLoginSuccess} onBack={handleAdminLogout} />;
  }

  if (gameMode === 'admin') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Admin Panel */}
            <div className="lg:col-span-1">
              <AdminPanel
                onGameStart={handleGameStart}
                onGamePause={handleGamePause}
                onGameReset={handleGameReset}
                onSettingsChange={handleSettingsChange}
                onLogout={handleAdminLogout}
                players={players}
                gameState={gameState}
                currentAdmin={currentAdmin}
              />
            </div>

            {/* Game Area */}
            <div className="lg:col-span-2">
              {gameState === 'waiting' ? (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-6">🎮</div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Chờ người chơi tham gia
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    Chia sẻ mã code <span className="font-mono font-bold text-yellow-400">{gameCode}</span> với người chơi
                  </p>
                  <div className="text-sm text-gray-400">
                    Người chơi sẽ tham gia thông qua Player Mode
                  </div>
                </div>
              ) : (
                <QuizGame
                  initialPlayers={convertPlayers(players)}
                  gameMode={session?.gameMode || 'individual'}
                  difficulty={session?.difficulty || 'medium'}
                  timeControlEnabled={session?.timeControl || false}
                />
              )}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleBackToSelector}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors"
            >
              ← Quay lại chọn chế độ
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameMode === 'player') {
    return (
      <div>
        <PlayerJoinForm
          gameCode={gameCode}
          onJoin={handlePlayerJoin}
          onError={handleError}
          maxPlayers={session?.maxPlayers || 35}
          currentPlayers={players.length}
        />
        
        {/* Error Message */}
        {error && (
          <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            {error}
          </div>
        )}

        {/* Back Button */}
        <div className="fixed top-4 left-4">
          <button
            onClick={handleBackToSelector}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
          >
            ← Quay lại
          </button>
        </div>
      </div>
    );
  }

  return null;
}
