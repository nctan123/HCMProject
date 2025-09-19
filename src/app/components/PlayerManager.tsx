'use client';

import { useState } from 'react';
import { Plus, Trash2, Edit2, Users, UserPlus } from 'lucide-react';
import { generateRandomId } from '../utils/idGenerator';

type Player = {
  id: number;
  name: string;
  isActive: boolean;
  teamId?: number;
  score?: number;
  isEliminated?: boolean;
  streak?: number;
  powerUps?: string[];
  achievements?: string[];
  multiplier?: number;
};

type Team = {
  id: number;
  name: string;
  color: string;
  players: Player[];
  score?: number;
  multiplier?: number;
};

type Props = {
  players: Player[];
  teams: Team[];
  onPlayersChange: (players: Player[]) => void;
  onTeamsChange: (teams: Team[]) => void;
  gameMode: string;
  onGameModeChange: (mode: string) => void;
};

const TEAM_COLORS = [
  'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
  'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'
];

export default function PlayerManager({ 
  players, 
  teams, 
  onPlayersChange, 
  onTeamsChange, 
  gameMode, 
  onGameModeChange 
}: Props) {
  const [editingPlayer, setEditingPlayer] = useState<number | null>(null);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [showAddPlayer, setShowAddPlayer] = useState(false);

  const addPlayer = () => {
    if (newPlayerName.trim() && players.length < 35) {
      const newPlayer: Player = {
        id: generateRandomId(),
        name: newPlayerName.trim(),
        isActive: true,
        score: 0,
        isEliminated: false,
        streak: 0,
        powerUps: [],
        achievements: [],
        multiplier: 1
      };
      onPlayersChange([...players, newPlayer]);
      setNewPlayerName('');
      setShowAddPlayer(false);
    }
  };

  const removePlayer = (playerId: number) => {
    onPlayersChange(players.filter(p => p.id !== playerId));
  };

  const togglePlayer = (playerId: number) => {
    onPlayersChange(players.map(p => 
      p.id === playerId ? { ...p, isActive: !p.isActive } : p
    ));
  };

  const updatePlayerName = (playerId: number, newName: string) => {
    if (newName.trim()) {
      onPlayersChange(players.map(p => 
        p.id === playerId ? { ...p, name: newName.trim() } : p
      ));
    }
    setEditingPlayer(null);
  };

  const createTeams = () => {
    const activePlayers = players.filter(p => p.isActive);
    const teamSize = Math.ceil(activePlayers.length / 7); // Max 7 teams
    const newTeams: Team[] = [];
    
    for (let i = 0; i < 7 && i * teamSize < activePlayers.length; i++) {
      const teamPlayers = activePlayers.slice(i * teamSize, (i + 1) * teamSize);
      newTeams.push({
        id: i + 1,
        name: `Đội ${i + 1}`,
        color: TEAM_COLORS[i],
        players: teamPlayers.map(p => ({ ...p, teamId: i + 1 })),
        score: 0,
        multiplier: 1
      });
    }
    
    onTeamsChange(newTeams);
    onPlayersChange(players.map(p => {
      const team = newTeams.find(t => t.players.some(tp => tp.id === p.id));
      return { ...p, teamId: team?.id };
    }));
  };

  const clearTeams = () => {
    onTeamsChange([]);
    onPlayersChange(players.map(p => ({ ...p, teamId: undefined })));
  };

  const activePlayersCount = players.filter(p => p.isActive).length;

  return (
    <div className="space-y-6">
      {/* Game Mode Selection */}
      <div className="bg-white/5 rounded-xl p-4">
        <h3 className="text-lg font-semibold text-white mb-4">Chế độ chơi</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => onGameModeChange('individual')}
            className={`p-3 rounded-lg border-2 transition-all ${
              gameMode === 'individual'
                ? 'border-yellow-400 bg-yellow-400/20 text-yellow-400'
                : 'border-gray-600 text-gray-300 hover:border-gray-500'
            }`}
          >
            <Users className="h-5 w-5 mx-auto mb-2" />
            <div className="text-sm font-medium">Cá nhân</div>
            <div className="text-xs text-gray-400">Mỗi người chơi riêng</div>
          </button>
          
          <button
            onClick={() => onGameModeChange('team')}
            className={`p-3 rounded-lg border-2 transition-all ${
              gameMode === 'team'
                ? 'border-yellow-400 bg-yellow-400/20 text-yellow-400'
                : 'border-gray-600 text-gray-300 hover:border-gray-500'
            }`}
          >
            <UserPlus className="h-5 w-5 mx-auto mb-2" />
            <div className="text-sm font-medium">Đội nhóm</div>
            <div className="text-xs text-gray-400">Chia thành các đội</div>
          </button>
          
          <button
            onClick={() => onGameModeChange('elimination')}
            className={`p-3 rounded-lg border-2 transition-all ${
              gameMode === 'elimination'
                ? 'border-yellow-400 bg-yellow-400/20 text-yellow-400'
                : 'border-gray-600 text-gray-300 hover:border-gray-500'
            }`}
          >
            <Trash2 className="h-5 w-5 mx-auto mb-2" />
            <div className="text-sm font-medium">Loại trừ</div>
            <div className="text-xs text-gray-400">Sai thì bị loại</div>
          </button>
        </div>
      </div>

      {/* Player Management */}
      <div className="bg-white/5 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">
            Người chơi ({activePlayersCount}/35)
          </h3>
          <button
            onClick={() => setShowAddPlayer(!showAddPlayer)}
            disabled={players.length >= 35}
            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-3 py-2 rounded-lg text-sm flex items-center"
          >
            <Plus className="h-4 w-4 mr-1" />
            Thêm người
          </button>
        </div>

        {/* Add Player Form */}
        {showAddPlayer && (
          <div className="mb-4 p-3 bg-white/5 rounded-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                placeholder="Tên người chơi..."
                className="flex-1 bg-white/10 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
              />
              <button
                onClick={addPlayer}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-medium"
              >
                Thêm
              </button>
              <button
                onClick={() => {
                  setShowAddPlayer(false);
                  setNewPlayerName('');
                }}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                Hủy
              </button>
            </div>
          </div>
        )}

        {/* Players List */}
        <div className="max-h-64 overflow-y-auto space-y-2">
          {players.map((player) => (
            <div
              key={player.id}
              className={`flex items-center justify-between p-3 rounded-lg ${
                player.isActive ? 'bg-green-500/20 border border-green-400' : 'bg-gray-600/20'
              }`}
            >
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => togglePlayer(player.id)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    player.isActive 
                      ? 'bg-green-500 border-green-500' 
                      : 'bg-transparent border-gray-400'
                  }`}
                >
                  {player.isActive && <span className="text-white text-xs">✓</span>}
                </button>
                
                {editingPlayer === player.id ? (
                  <input
                    type="text"
                    defaultValue={player.name}
                    onBlur={(e) => updatePlayerName(player.id, e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        updatePlayerName(player.id, e.currentTarget.value);
                      }
                    }}
                    className="bg-white/10 border border-gray-600 rounded px-2 py-1 text-white text-sm focus:border-yellow-400 focus:outline-none"
                    autoFocus
                  />
                ) : (
                  <span className={`text-sm ${player.isActive ? 'text-green-400' : 'text-gray-400'}`}>
                    {player.name}
                    {player.teamId && (
                      <span className="ml-2 text-xs text-gray-500">
                        (Đội {player.teamId})
                      </span>
                    )}
                  </span>
                )}
              </div>
              
              <div className="flex space-x-1">
                <button
                  onClick={() => setEditingPlayer(player.id)}
                  className="text-gray-400 hover:text-yellow-400 p-1"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => removePlayer(player.id)}
                  className="text-gray-400 hover:text-red-400 p-1"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Management for Team Mode */}
        {gameMode === 'team' && (
          <div className="mt-4 pt-4 border-t border-gray-600">
            <div className="flex space-x-2">
              <button
                onClick={createTeams}
                disabled={activePlayersCount < 2}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm"
              >
                Tạo đội tự động
              </button>
              <button
                onClick={clearTeams}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Xóa đội
              </button>
            </div>
            
            {teams.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-sm font-medium text-white">Các đội:</h4>
                {teams.map((team) => (
                  <div key={team.id} className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded-full ${team.color}`}></div>
                    <span className="text-sm text-white">{team.name}: {team.players.length} người</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
