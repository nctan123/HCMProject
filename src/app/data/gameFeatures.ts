export interface PowerUp {
  id: string;
  name: string;
  description: string;
  icon: string;
  effect: 'multiplier' | 'time' | 'skip' | 'hint' | 'shield' | 'double';
  value: number;
  duration?: number; // in questions
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  cost: number; // points to activate
}

export interface Challenge {
  id: string;
  name: string;
  description: string;
  type: 'speed' | 'accuracy' | 'streak' | 'risk' | 'teamwork';
  condition: string;
  reward: {
    points: number;
    multiplier?: number;
    powerUp?: string;
  };
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: string;
  reward: {
    points: number;
    title?: string;
    badge?: string;
  };
  unlocked: boolean;
}

export interface SpecialRound {
  id: string;
  name: string;
  description: string;
  type: 'lightning' | 'boss' | 'sudden_death' | 'team_battle' | 'mystery';
  rules: string[];
  multiplier: number;
  timeLimit?: number;
  questionCount?: number;
}

export const powerUps: PowerUp[] = [
  {
    id: 'double_points',
    name: 'Gấp Đôi Điểm',
    description: 'Nhân đôi điểm số trong 3 câu hỏi tiếp theo',
    icon: '💎',
    effect: 'multiplier',
    value: 2,
    duration: 3,
    rarity: 'common',
    cost: 50
  },
  {
    id: 'time_boost',
    name: 'Tăng Thời Gian',
    description: 'Thêm 10 giây cho câu hỏi hiện tại',
    icon: '⏰',
    effect: 'time',
    value: 10,
    rarity: 'common',
    cost: 30
  },
  {
    id: 'skip_question',
    name: 'Bỏ Qua Câu Hỏi',
    description: 'Bỏ qua câu hỏi hiện tại và vẫn nhận điểm',
    icon: '⏭️',
    effect: 'skip',
    value: 1,
    rarity: 'rare',
    cost: 100
  },
  {
    id: 'hint',
    name: 'Gợi Ý',
    description: 'Loại bỏ 2 đáp án sai',
    icon: '💡',
    effect: 'hint',
    value: 2,
    rarity: 'common',
    cost: 40
  },
  {
    id: 'shield',
    name: 'Khiên Bảo Vệ',
    description: 'Miễn phí 1 lần trả lời sai',
    icon: '🛡️',
    effect: 'shield',
    value: 1,
    rarity: 'rare',
    cost: 80
  },
  {
    id: 'triple_points',
    name: 'Gấp Ba Điểm',
    description: 'Nhân ba điểm số trong 2 câu hỏi tiếp theo',
    icon: '🔥',
    effect: 'multiplier',
    value: 3,
    duration: 2,
    rarity: 'epic',
    cost: 150
  },
  {
    id: 'perfect_streak',
    name: 'Chuỗi Hoàn Hảo',
    description: 'Nếu trả lời đúng 3 câu liên tiếp, nhận thêm 100 điểm',
    icon: '⭐',
    effect: 'double',
    value: 100,
    rarity: 'legendary',
    cost: 200
  }
];

export const challenges: Challenge[] = [
  {
    id: 'speed_demon',
    name: 'Tốc Độ Thần Thánh',
    description: 'Trả lời đúng trong vòng 5 giây đầu',
    type: 'speed',
    condition: 'answer_correctly_within_5_seconds',
    reward: { points: 50, multiplier: 1.5 },
    difficulty: 'medium'
  },
  {
    id: 'accuracy_master',
    name: 'Bậc Thầy Chính Xác',
    description: 'Trả lời đúng 5 câu liên tiếp',
    type: 'accuracy',
    condition: 'correct_streak_5',
    reward: { points: 100, multiplier: 2 },
    difficulty: 'hard'
  },
  {
    id: 'risk_taker',
    name: 'Kẻ Mạo Hiểm',
    description: 'Trả lời câu hỏi khó trong 3 giây cuối',
    type: 'risk',
    condition: 'answer_hard_question_in_last_3_seconds',
    reward: { points: 200, multiplier: 3 },
    difficulty: 'extreme'
  },
  {
    id: 'team_player',
    name: 'Đồng Đội Tuyệt Vời',
    description: 'Cả đội trả lời đúng cùng lúc',
    type: 'teamwork',
    condition: 'entire_team_correct_simultaneously',
    reward: { points: 150, multiplier: 2.5 },
    difficulty: 'hard'
  },
  {
    id: 'comeback_king',
    name: 'Vua Phục Hồi',
    description: 'Từ vị trí cuối bảng vượt lên top 3',
    type: 'streak',
    condition: 'climb_from_last_to_top3',
    reward: { points: 300, multiplier: 4 },
    difficulty: 'extreme'
  }
];

export const achievements: Achievement[] = [
  {
    id: 'first_blood',
    name: 'Máu Đầu Tiên',
    description: 'Trả lời đúng câu hỏi đầu tiên',
    icon: '🩸',
    condition: 'first_correct_answer',
    reward: { points: 25, title: 'Người Mới' },
    unlocked: false
  },
  {
    id: 'streak_master',
    name: 'Bậc Thầy Chuỗi',
    description: 'Trả lời đúng 10 câu liên tiếp',
    icon: '🔥',
    condition: 'correct_streak_10',
    reward: { points: 500, title: 'Chuỗi Vàng', badge: 'golden_streak' },
    unlocked: false
  },
  {
    id: 'speed_legend',
    name: 'Huyền Thoại Tốc Độ',
    description: 'Trả lời đúng 20 câu trong vòng 5 giây',
    icon: '⚡',
    condition: 'fast_answers_20',
    reward: { points: 1000, title: 'Tia Chớp', badge: 'lightning' },
    unlocked: false
  },
  {
    id: 'perfect_game',
    name: 'Trò Chơi Hoàn Hảo',
    description: 'Trả lời đúng tất cả câu hỏi trong game',
    icon: '👑',
    condition: 'perfect_game',
    reward: { points: 2000, title: 'Vua Trí Tuệ', badge: 'crown' },
    unlocked: false
  },
  {
    id: 'comeback_hero',
    name: 'Anh Hùng Phục Hồi',
    description: 'Từ vị trí cuối vượt lên vị trí đầu',
    icon: '🚀',
    condition: 'comeback_from_last_to_first',
    reward: { points: 1500, title: 'Phoenix', badge: 'phoenix' },
    unlocked: false
  }
];

export const specialRounds: SpecialRound[] = [
  {
    id: 'lightning_round',
    name: 'Vòng Sét',
    description: 'Trả lời nhanh trong 5 giây, điểm gấp đôi',
    type: 'lightning',
    rules: [
      'Chỉ có 5 giây để trả lời',
      'Điểm số được nhân đôi',
      'Sai sẽ bị loại ngay lập tức'
    ],
    multiplier: 2,
    timeLimit: 5,
    questionCount: 5
  },
  {
    id: 'boss_round',
    name: 'Vòng Boss',
    description: 'Câu hỏi siêu khó, điểm gấp 5 lần',
    type: 'boss',
    rules: [
      'Chỉ câu hỏi khó nhất',
      'Điểm số được nhân 5',
      'Có thể sử dụng tất cả Power-ups'
    ],
    multiplier: 5,
    timeLimit: 30,
    questionCount: 3
  },
  {
    id: 'sudden_death',
    name: 'Tử Thần Đột Ngột',
    description: 'Sai một câu là bị loại',
    type: 'sudden_death',
    rules: [
      'Sai một câu là bị loại',
      'Điểm số được nhân 3',
      'Chỉ còn lại 1 người cuối cùng'
    ],
    multiplier: 3,
    timeLimit: 10
  },
  {
    id: 'team_battle',
    name: 'Chiến Đấu Đội',
    description: 'Các đội thi đấu trực tiếp',
    type: 'team_battle',
    rules: [
      'Mỗi đội chọn 1 người đại diện',
      'Đội thắng nhận toàn bộ điểm',
      'Đội thua mất 50% điểm'
    ],
    multiplier: 2,
    timeLimit: 15
  },
  {
    id: 'mystery_round',
    name: 'Vòng Bí Ẩn',
    description: 'Quy tắc thay đổi ngẫu nhiên',
    type: 'mystery',
    rules: [
      'Quy tắc được tiết lộ khi bắt đầu',
      'Có thể là bất kỳ loại vòng nào',
      'Phần thưởng bất ngờ'
    ],
    multiplier: 1.5,
    timeLimit: 20
  }
];

export const gameModes = {
  CLASSIC: 'classic',
  CHALLENGE: 'challenge',
  TOURNAMENT: 'tournament',
  SURVIVAL: 'survival',
  TEAM_BATTLE: 'team_battle'
};

export const difficultySettings = {
  easy: {
    timeLimit: 20,
    pointsPerCorrect: 10,
    powerUpChance: 0.3,
    challengeChance: 0.2
  },
  medium: {
    timeLimit: 15,
    pointsPerCorrect: 15,
    powerUpChance: 0.4,
    challengeChance: 0.3
  },
  hard: {
    timeLimit: 10,
    pointsPerCorrect: 25,
    powerUpChance: 0.5,
    challengeChance: 0.4
  },
  extreme: {
    timeLimit: 8,
    pointsPerCorrect: 50,
    powerUpChance: 0.6,
    challengeChance: 0.5
  }
};
