'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAudio } from '../hooks/useAudio';
import { quizQuestions, gameSettings, QuizQuestion } from '../data/quizData';
import { powerUps, challenges, achievements, specialRounds, gameModes, difficultySettings } from '../data/gameFeatures';
import PlayerManager from './PlayerManager';
import PowerUpSystem from './PowerUpSystem';
import ChallengeSystem from './ChallengeSystem';
import SpecialRoundSystem from './SpecialRoundSystem';
import TimeControlSystem from './TimeControlSystem';

type GameState = 'waiting' | 'playing' | 'showingAnswer' | 'showingScore' | 'finished';
type Player = {
  id: number;
  name: string;
  score: number;
  isActive: boolean;
  teamId?: number;
  isEliminated?: boolean;
  streak: number;
  powerUps: string[];
  achievements: string[];
  multiplier: number;
  lastAnswerTime?: number;
};

type Team = {
  id: number;
  name: string;
  color: string;
  players: Player[];
  score: number;
  multiplier: number;
};

type ActivePowerUp = {
  powerUp: any;
  remaining: number;
  playerId: number;
};

type QuizGameProps = {
  initialPlayers?: Player[];
  gameMode?: string;
  difficulty?: string;
  timeControlEnabled?: boolean;
};

export default function QuizGame({
  initialPlayers = [],
  gameMode: propGameMode = 'individual',
  difficulty: propDifficulty = 'medium',
  timeControlEnabled: propTimeControlEnabled = false
}: QuizGameProps) {
  const [gameState, setGameState] = useState<GameState>('waiting');
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [teams, setTeams] = useState<Team[]>([]);
  const [gameMode, setGameMode] = useState(propGameMode);
  const [difficulty, setDifficulty] = useState(propDifficulty);
  const [winner, setWinner] = useState<Player | null>(null);
  const [winningTeam, setWinningTeam] = useState<Team | null>(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [activePowerUps, setActivePowerUps] = useState<{ [playerId: number]: ActivePowerUp[] }>({});
  const [currentSpecialRound, setCurrentSpecialRound] = useState<any>(null);
  const [comboMultiplier, setComboMultiplier] = useState(1);
  const [showEffects, setShowEffects] = useState(false);
  const [timeControlEnabled, setTimeControlEnabled] = useState(propTimeControlEnabled);
  const [timeControlSettings, setTimeControlSettings] = useState<any>(null);
  const [registeredPlayers, setRegisteredPlayers] = useState<any[]>([]);

  // Audio hooks
  const { play: playCorrectSound } = useAudio('/audio/correct.mp3');
  const { play: playWrongSound } = useAudio('/audio/wrong.mp3');
  const { play: playCompleteSound } = useAudio('/audio/complete.mp3');
  const { play: playBackgroundMusic, pause: pauseBackgroundMusic } = useAudio('/audio/background-music.mp3', { loop: true });

  // Update players when initialPlayers prop changes
  useEffect(() => {
    if (initialPlayers.length > 0) {
      setPlayers(initialPlayers);
    }
  }, [initialPlayers]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (gameState === 'playing' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameState, timeLeft]);

  const startGame = () => {
    setGameStarted(true);
    setGameState('playing');
    setQuestionIndex(0);
    setCurrentQuestion(quizQuestions[0]);
    setTimeLeft(quizQuestions[0].timeLimit);
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);
    playBackgroundMusic();
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (gameState !== 'playing' || selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setGameState('showingAnswer');
    
    const isCorrect = answerIndex === currentQuestion?.correctAnswer;
    
    if (isCorrect) {
      playCorrectSound();
      handleCorrectAnswer();
    } else {
      playWrongSound();
      handleWrongAnswer();
    }
    
    setShowCorrectAnswer(true);
    
    // Show answer for a few seconds, then move to next question
    setTimeout(() => {
      nextQuestion();
    }, gameSettings.showCorrectAnswer * 1000);
  };

  const handleCorrectAnswer = () => {
    const basePoints = gameSettings.pointsPerCorrect + 
      (currentQuestion?.difficulty === 'medium' ? gameSettings.bonusPoints.medium : 
       currentQuestion?.difficulty === 'hard' ? gameSettings.bonusPoints.hard : 0);

    // Apply special round multiplier
    const specialMultiplier = currentSpecialRound?.multiplier || 1;
    
    // Apply combo multiplier
    const totalMultiplier = specialMultiplier * comboMultiplier;

    const points = Math.floor(basePoints * totalMultiplier);

    if (gameMode === 'team') {
      // Award points to teams
      setTeams(prev => prev.map(team => ({
        ...team,
        score: team.score + points,
        players: team.players.map(player => 
          player.isActive ? { 
            ...player, 
            score: player.score + points,
            streak: player.streak + 1,
            multiplier: Math.min(player.multiplier + 0.1, 5) // Cap at 5x
          } : player
        )
      })));
    } else {
      // Award points to individual players
      setPlayers(prev => prev.map(player => 
        player.isActive && !player.isEliminated ? {
          ...player,
          score: player.score + points,
          streak: player.streak + 1,
          multiplier: Math.min(player.multiplier + 0.1, 5) // Cap at 5x
        } : player
      ));
    }

    // Update combo multiplier
    setComboMultiplier(prev => Math.min(prev + 0.2, 3)); // Cap at 3x
  };

  const handleWrongAnswer = () => {
    // Reset combo multiplier on wrong answer
    setComboMultiplier(1);
    
    // Reset player streaks
    setPlayers(prev => prev.map(player => 
      player.isActive && !player.isEliminated ? {
        ...player,
        streak: 0,
        multiplier: 1
      } : player
    ));

    if (gameMode === 'elimination') {
      // Eliminate players who answered wrong
      setPlayers(prev => prev.map(player => 
        player.isActive && !player.isEliminated ? {
          ...player,
          isEliminated: true,
          isActive: false
        } : player
      ));
    }
  };

  // Power-up system functions
  const handlePowerUpActivate = (powerUpId: string, playerId: number) => {
    const powerUp = powerUps.find(p => p.id === powerUpId);
    if (!powerUp) return;

    const player = players.find(p => p.id === playerId);
    if (!player || player.score < powerUp.cost) return;

    // Deduct cost
    setPlayers(prev => prev.map(p => 
      p.id === playerId ? { ...p, score: p.score - powerUp.cost } : p
    ));

    // Apply power-up effect
    const activePowerUp: ActivePowerUp = {
      powerUp,
      remaining: powerUp.duration || 1,
      playerId
    };

    setActivePowerUps(prev => ({
      ...prev,
      [playerId]: [...(prev[playerId] || []), activePowerUp]
    }));

    // Show effect
    setShowEffects(true);
    setTimeout(() => setShowEffects(false), 2000);
  };

  const handleChallengeComplete = (challengeId: string, reward: any) => {
    // Award challenge points
    setPlayers(prev => prev.map(player => 
      player.isActive ? {
        ...player,
        score: player.score + reward.points
      } : player
    ));
  };

  const handleAchievementUnlock = (achievementId: string, reward: any) => {
    // Award achievement points
    setPlayers(prev => prev.map(player => 
      player.isActive ? {
        ...player,
        score: player.score + reward.points,
        achievements: [...player.achievements, achievementId]
      } : player
    ));
  };

  const handleSpecialRoundStart = (round: any) => {
    setCurrentSpecialRound(round);
    setTimeLeft(round.timeLimit || currentQuestion?.timeLimit || 15);
  };

  const handleSpecialRoundEnd = () => {
    setCurrentSpecialRound(null);
    setComboMultiplier(1);
  };

  // Time control functions
  const handleTimeControlGameStart = () => {
    setGameStarted(true);
    setGameState('playing');
    setQuestionIndex(0);
    setCurrentQuestion(quizQuestions[0]);
    setTimeLeft(quizQuestions[0].timeLimit);
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);
    playBackgroundMusic();
  };

  const handlePlayerJoin = (player: any) => {
    setRegisteredPlayers(prev => [...prev, player]);
    
    // Apply late join penalty
    if (player.isLate && timeControlSettings) {
      setPlayers(prev => prev.map(p => 
        p.id === player.id ? { 
          ...p, 
          score: Math.max(0, p.score - timeControlSettings.lateJoinPenalty) 
        } : p
      ));
    }
  };

  const handlePlayerKick = (playerId: number) => {
    setPlayers(prev => prev.map(player => 
      player.id === playerId ? { ...player, isActive: false } : player
    ));
    setRegisteredPlayers(prev => 
      prev.map(p => p.id === playerId ? { ...p, isActive: false } : p)
    );
  };

  const handleTimeControlSettingsChange = (settings: any) => {
    setTimeControlSettings(settings);
  };

  const handleTimeUp = () => {
    if (gameState !== 'playing') return;
    
    setGameState('showingAnswer');
    setShowCorrectAnswer(true);
    playWrongSound();
    
    setTimeout(() => {
      nextQuestion();
    }, gameSettings.showCorrectAnswer * 1000);
  };

  const nextQuestion = () => {
    if (questionIndex + 1 >= quizQuestions.length) {
      endGame();
      return;
    }
    
    setQuestionIndex(prev => prev + 1);
    setCurrentQuestion(quizQuestions[questionIndex + 1]);
    setTimeLeft(quizQuestions[questionIndex + 1].timeLimit);
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);
    setGameState('playing');
  };

  const endGame = () => {
    setGameState('finished');
    pauseBackgroundMusic();
    playCompleteSound();
    
    if (gameMode === 'team') {
      // Find winning team
      const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
      setWinningTeam(sortedTeams[0]);
    } else {
      // Find individual winner
      const activePlayers = players.filter(p => p.isActive && !p.isEliminated);
      const sortedPlayers = [...activePlayers].sort((a, b) => b.score - a.score);
      setWinner(sortedPlayers[0]);
    }
  };

  const resetGame = () => {
    setGameState('waiting');
    setGameStarted(false);
    setQuestionIndex(0);
    setCurrentQuestion(null);
    setTimeLeft(0);
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);
    setWinner(null);
    setWinningTeam(null);
    setPlayers(prev => prev.map(player => ({ 
      ...player, 
      score: 0, 
      isEliminated: false,
      isActive: true,
      streak: 0,
      powerUps: [],
      achievements: [],
      multiplier: 1
    })));
    setTeams(prev => prev.map(team => ({ 
      ...team, 
      score: 0,
      multiplier: 1,
      players: team.players.map(player => ({
        ...player,
        score: 0,
        streak: 0,
        powerUps: [],
        achievements: [],
        multiplier: 1
      }))
    })));
    setActivePowerUps({});
    setCurrentSpecialRound(null);
    setComboMultiplier(1);
    setShowEffects(false);
    pauseBackgroundMusic();
  };

  const togglePlayer = (playerId: number) => {
    setPlayers(prev => prev.map(player => 
      player.id === playerId ? { ...player, isActive: !player.isActive } : player
    ));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-white';
    }
  };

  const getTimeColor = () => {
    if (timeLeft <= 5) return 'text-red-500';
    if (timeLeft <= 10) return 'text-yellow-500';
    return 'text-green-500';
  };

  if (gameState === 'waiting') {
    const activePlayersCount = players.filter(p => p.isActive).length;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-6xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              🏆 RUNG CHUÔNG VÀNG 🏆
            </h1>
            <p className="text-xl text-gray-300">
              Hỗ trợ tối đa 35 người chơi
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Time Control Toggle */}
            <div className="lg:col-span-2 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Kiểm soát thời gian</h3>
                    <p className="text-gray-300 text-sm">
                      Bật tính năng này để kiểm soát thời gian tham gia của người chơi
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={timeControlEnabled}
                      onChange={(e) => setTimeControlEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Time Control System */}
            {timeControlEnabled && (
              <div className="lg:col-span-2 mb-6">
                <TimeControlSystem
                  onGameStart={handleTimeControlGameStart}
                  onPlayerJoin={handlePlayerJoin}
                  onPlayerKick={handlePlayerKick}
                  onSettingsChange={handleTimeControlSettingsChange}
                />
              </div>
            )}

            {/* Player Management */}
            <div>
              <PlayerManager
                players={players.map(p => ({
                  id: p.id,
                  name: p.name,
                  isActive: p.isActive,
                  teamId: p.teamId,
                  score: p.score,
                  isEliminated: p.isEliminated
                }))}
                teams={teams.map(t => ({
                  id: t.id,
                  name: t.name,
                  color: t.color,
                  players: t.players.map(p => ({
                    id: p.id,
                    name: p.name,
                    isActive: p.isActive,
                    teamId: p.teamId,
                    score: p.score,
                    isEliminated: p.isEliminated
                  })),
                  score: t.score
                }))}
                onPlayersChange={(newPlayers) => {
                  setPlayers(newPlayers.map(p => ({
                    id: p.id,
                    name: p.name,
                    score: p.score || 0,
                    isActive: p.isActive,
                    teamId: p.teamId,
                    isEliminated: p.isEliminated || false,
                    streak: p.streak || 0,
                    powerUps: p.powerUps || [],
                    achievements: p.achievements || [],
                    multiplier: p.multiplier || 1
                  })));
                }}
                onTeamsChange={(newTeams) => {
                  setTeams(newTeams.map(t => ({
                    id: t.id,
                    name: t.name,
                    color: t.color,
                    score: t.score || 0,
                    multiplier: t.multiplier || 1,
                    players: t.players.map(p => ({
                      id: p.id,
                      name: p.name,
                      score: p.score || 0,
                      isActive: p.isActive,
                      teamId: p.teamId,
                      isEliminated: p.isEliminated || false,
                      streak: p.streak || 0,
                      powerUps: p.powerUps || [],
                      achievements: p.achievements || [],
                      multiplier: p.multiplier || 1
                    }))
                  })));
                }}
                gameMode={gameMode}
                onGameModeChange={setGameMode}
              />
            </div>

            {/* Game Rules and Start */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Luật chơi</h3>
                <div className="text-gray-200 space-y-2">
                  <p>• Mỗi câu hỏi có thời gian giới hạn</p>
                  <p>• Chọn đáp án đúng để ghi điểm</p>
                  <p>• Câu khó sẽ có điểm thưởng</p>
                  {gameMode === 'team' && <p>• Điểm được tính theo đội</p>}
                  {gameMode === 'elimination' && <p>• Sai sẽ bị loại khỏi game</p>}
                  <p>• {gameMode === 'team' ? 'Đội' : 'Người'} có điểm cao nhất sẽ thắng</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Thống kê</h3>
                <div className="space-y-2 text-gray-200">
                  <p>• Số người chơi: {activePlayersCount}/35</p>
                  <p>• Chế độ: {
                    gameMode === 'individual' ? 'Cá nhân' :
                    gameMode === 'team' ? 'Đội nhóm' : 'Loại trừ'
                  }</p>
                  {gameMode === 'team' && teams.length > 0 && (
                    <p>• Số đội: {teams.length}</p>
                  )}
                </div>
              </div>

              <button
                onClick={startGame}
                disabled={activePlayersCount === 0}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-xl hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                BẮT ĐẦU GAME
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'finished') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-6xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">
              🏆 KẾT QUẢ GAME 🏆
            </h1>
            <p className="text-xl text-gray-300">
              Chế độ: {gameMode === 'individual' ? 'Cá nhân' : 
                      gameMode === 'team' ? 'Đội nhóm' : 'Loại trừ'}
            </p>
          </div>
          
          {gameMode === 'team' ? (
            // Team Results
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Bảng xếp hạng đội</h2>
              <div className="space-y-4">
                {[...teams].sort((a, b) => b.score - a.score).map((team, index) => (
                  <div key={team.id} className={`flex items-center justify-between p-4 rounded-xl ${
                    index === 0 ? 'bg-yellow-500/20 border-2 border-yellow-400' : 'bg-white/5'
                  }`}>
                    <div className="flex items-center space-x-4">
                      <span className={`text-2xl font-bold ${
                        index === 0 ? 'text-yellow-400' : 'text-white'
                      }`}>
                        #{index + 1}
                      </span>
                      <div className={`w-6 h-6 rounded-full ${team.color}`}></div>
                      <span className={`text-xl ${index === 0 ? 'text-yellow-400 font-bold' : 'text-white'}`}>
                        {team.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        ({team.players.length} người)
                      </span>
                    </div>
                    <span className={`text-2xl font-bold ${
                      index === 0 ? 'text-yellow-400' : 'text-white'
                    }`}>
                      {team.score} điểm
                    </span>
                  </div>
                ))}
              </div>
              
              {winningTeam && (
                <div className="mt-8 text-center">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                    🎉 CHÚC MỪNG {winningTeam.name.toUpperCase()}! 🎉
                  </h3>
                  <p className="text-xl text-white mb-4">
                    Đội đã giành chiến thắng với {winningTeam.score} điểm!
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {winningTeam.players.map(player => (
                      <span key={player.id} className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                        {player.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Individual Results
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Bảng xếp hạng</h2>
              <div className="max-h-96 overflow-y-auto space-y-2">
                {[...players].filter(p => p.isActive && !p.isEliminated).sort((a, b) => b.score - a.score).map((player, index) => (
                  <div key={player.id} className={`flex items-center justify-between p-3 rounded-xl ${
                    index === 0 ? 'bg-yellow-500/20 border-2 border-yellow-400' : 'bg-white/5'
                  }`}>
                    <div className="flex items-center space-x-4">
                      <span className={`text-lg font-bold ${
                        index === 0 ? 'text-yellow-400' : 'text-white'
                      }`}>
                        #{index + 1}
                      </span>
                      <span className={`text-lg ${index === 0 ? 'text-yellow-400 font-bold' : 'text-white'}`}>
                        {player.name}
                      </span>
                      {player.isEliminated && (
                        <span className="text-red-400 text-sm">(Đã loại)</span>
                      )}
                    </div>
                    <span className={`text-lg font-bold ${
                      index === 0 ? 'text-yellow-400' : 'text-white'
                    }`}>
                      {player.score} điểm
                    </span>
                  </div>
                ))}
              </div>
              
              {winner && (
                <div className="mt-8 text-center">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                    🎉 CHÚC MỪNG {winner.name.toUpperCase()}! 🎉
                  </h3>
                  <p className="text-xl text-white">
                    Bạn đã giành chiến thắng với {winner.score} điểm!
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="flex space-x-4 justify-center">
            <button
              onClick={resetGame}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl text-lg hover:from-blue-400 hover:to-blue-500 transition-all duration-300"
            >
              Chơi lại
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold py-3 px-6 rounded-xl text-lg hover:from-gray-400 hover:to-gray-500 transition-all duration-300"
            >
              Về trang chủ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-6xl w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">RUNG CHUÔNG VÀNG</h1>
            <p className="text-gray-300">Câu {questionIndex + 1}/{quizQuestions.length}</p>
          </div>
          
          <div className="text-center">
            <div className={`text-4xl font-bold ${getTimeColor()}`}>
              {timeLeft}s
            </div>
            <p className="text-gray-300">Thời gian</p>
          </div>
        </div>

        {/* Question */}
        {currentQuestion && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-white">
                {currentQuestion.question}
              </h2>
              <span className={`text-lg font-bold ${getDifficultyColor(currentQuestion.difficulty)}`}>
                {currentQuestion.difficulty.toUpperCase()}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = "p-4 rounded-xl text-left font-semibold transition-all duration-300 ";
                
                if (showCorrectAnswer) {
                  if (index === currentQuestion.correctAnswer) {
                    buttonClass += "bg-green-500 text-white";
                  } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                    buttonClass += "bg-red-500 text-white";
                  } else {
                    buttonClass += "bg-gray-600 text-gray-300";
                  }
                } else {
                  if (selectedAnswer === index) {
                    buttonClass += "bg-blue-500 text-white";
                  } else {
                    buttonClass += "bg-white/10 text-white hover:bg-white/20";
                  }
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={gameState !== 'playing' || selectedAnswer !== null}
                    className={buttonClass}
                  >
                    <span className="text-lg font-bold mr-3">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Score Board */}
        <div className="bg-white/5 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">
              {gameMode === 'team' ? 'Bảng điểm đội' : 'Bảng điểm'}
            </h3>
            {comboMultiplier > 1 && (
              <div className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-bold">
                COMBO x{comboMultiplier.toFixed(1)}
              </div>
            )}
          </div>
          
          {gameMode === 'team' ? (
            // Team Score Board
            <div className="space-y-3">
              {teams.map(team => (
                <div key={team.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${team.color}`}></div>
                    <span className="text-white font-semibold">{team.name}</span>
                    <span className="text-gray-400 text-sm">({team.players.length} người)</span>
                    {team.multiplier > 1 && (
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                        x{team.multiplier.toFixed(1)}
                      </span>
                    )}
                  </div>
                  <span className="text-2xl font-bold text-yellow-400">{team.score}</span>
                </div>
              ))}
            </div>
          ) : (
            // Individual Score Board
            <div className="max-h-64 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {players
                  .filter(p => p.isActive)
                  .sort((a, b) => b.score - a.score)
                  .map((player, index) => (
                    <div key={player.id} className={`text-center p-3 rounded-lg ${
                      index < 3 ? 'bg-yellow-500/20 border border-yellow-400' : 'bg-green-500/20 border border-green-400'
                    }`}>
                      <div className="flex items-center justify-center space-x-2 mb-1">
                        <span className={`text-sm font-bold ${
                          index < 3 ? 'text-yellow-400' : 'text-green-400'
                        }`}>
                          #{index + 1}
                        </span>
                        {player.isEliminated && (
                          <span className="text-red-400 text-xs">(Loại)</span>
                        )}
                        {player.streak >= 3 && (
                          <span className="text-orange-400 text-xs">🔥{player.streak}</span>
                        )}
                      </div>
                      <p className={`font-semibold text-sm truncate ${
                        index < 3 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {player.name}
                      </p>
                      <p className={`text-xl font-bold ${
                        index < 3 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {player.score}
                      </p>
                      {player.multiplier > 1 && (
                        <p className="text-xs text-blue-400">
                          x{player.multiplier.toFixed(1)}
                        </p>
                      )}
                      {/* Power-up Button */}
                      <div className="mt-2">
                        <PowerUpSystem
                          playerId={player.id}
                          playerScore={player.score}
                          onPowerUpActivate={handlePowerUpActivate}
                          availablePowerUps={powerUps}
                          activePowerUps={activePowerUps}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Challenge System */}
        <ChallengeSystem
          currentQuestion={currentQuestion}
          playerAnswer={selectedAnswer}
          isCorrect={selectedAnswer === currentQuestion?.correctAnswer}
          timeLeft={timeLeft}
          playerStreak={players.find(p => p.isActive)?.streak || 0}
          playerPosition={players.filter(p => p.isActive).findIndex(p => p.id === players.find(p => p.isActive)?.id) + 1}
          totalPlayers={players.filter(p => p.isActive).length}
          onChallengeComplete={handleChallengeComplete}
          onAchievementUnlock={handleAchievementUnlock}
        />

        {/* Special Round System */}
        <SpecialRoundSystem
          currentRound={questionIndex + 1}
          totalRounds={quizQuestions.length}
          onSpecialRoundStart={handleSpecialRoundStart}
          onSpecialRoundEnd={handleSpecialRoundEnd}
        />

        {/* Special Effects */}
        {showEffects && (
          <div className="fixed inset-0 pointer-events-none z-30">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-6xl animate-bounce">✨</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
