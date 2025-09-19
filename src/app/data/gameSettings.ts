export interface GameSession {
  id: string;
  code: string;
  adminId: string;
  adminName: string;
  status: 'waiting' | 'registration' | 'playing' | 'finished';
  maxPlayers: number;
  currentPlayers: number;
  gameMode: 'individual' | 'team' | 'elimination';
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  timeControl: boolean;
  createdAt: number;
  startedAt?: number;
  endedAt?: number;
}

export interface PlayerProfile {
  id: string;
  sessionId: string;
  name: string;
  icon: string;
  color: string;
  joinedAt: number;
  isReady: boolean;
  isActive: boolean;
  score: number;
  position: number;
}

export const ANIMAL_ICONS = [
  { id: 'lion', emoji: '🦁', name: 'Sư tử' },
  { id: 'tiger', emoji: '🐅', name: 'Hổ' },
  { id: 'elephant', emoji: '🐘', name: 'Voi' },
  { id: 'eagle', emoji: '🦅', name: 'Đại bàng' },
  { id: 'shark', emoji: '🦈', name: 'Cá mập' },
  { id: 'wolf', emoji: '🐺', name: 'Sói' },
  { id: 'bear', emoji: '🐻', name: 'Gấu' },
  { id: 'fox', emoji: '🦊', name: 'Cáo' },
  { id: 'owl', emoji: '🦉', name: 'Cú mèo' },
  { id: 'dolphin', emoji: '🐬', name: 'Cá heo' },
  { id: 'penguin', emoji: '🐧', name: 'Chim cánh cụt' },
  { id: 'panda', emoji: '🐼', name: 'Gấu trúc' },
  { id: 'rabbit', emoji: '🐰', name: 'Thỏ' },
  { id: 'cat', emoji: '🐱', name: 'Mèo' },
  { id: 'dog', emoji: '🐶', name: 'Chó' },
  { id: 'horse', emoji: '🐴', name: 'Ngựa' },
  { id: 'cow', emoji: '🐄', name: 'Bò' },
  { id: 'pig', emoji: '🐷', name: 'Heo' },
  { id: 'chicken', emoji: '🐔', name: 'Gà' },
  { id: 'duck', emoji: '🦆', name: 'Vịt' },
  { id: 'frog', emoji: '🐸', name: 'Ếch' },
  { id: 'turtle', emoji: '🐢', name: 'Rùa' },
  { id: 'snake', emoji: '🐍', name: 'Rắn' },
  { id: 'lizard', emoji: '🦎', name: 'Thằn lằn' },
  { id: 'butterfly', emoji: '🦋', name: 'Bướm' },
  { id: 'bee', emoji: '🐝', name: 'Ong' },
  { id: 'spider', emoji: '🕷️', name: 'Nhện' },
  { id: 'ant', emoji: '🐜', name: 'Kiến' },
  { id: 'dragon', emoji: '🐉', name: 'Rồng' },
  { id: 'unicorn', emoji: '🦄', name: 'Kỳ lân' }
];

export const PLAYER_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
  '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
  '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2',
  '#A9DFBF', '#F9E79F', '#D5DBDB', '#AED6F1', '#D2B4DE'
];

export function generateGameCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function generateSessionId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
