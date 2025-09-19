export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  timeLimit: number; // in seconds
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Chủ tịch Hồ Chí Minh sinh năm nào?",
    options: ["1890", "1889", "1891", "1892"],
    correctAnswer: 0,
    timeLimit: 15,
    difficulty: "easy",
    category: "Lịch sử"
  },
  {
    id: 2,
    question: "Ngày thành lập Đảng Cộng sản Việt Nam là?",
    options: ["3/2/1930", "2/3/1930", "3/2/1929", "2/3/1929"],
    correctAnswer: 0,
    timeLimit: 15,
    difficulty: "easy",
    category: "Lịch sử"
  },
  {
    id: 3,
    question: "Cuộc khởi nghĩa Nam Kỳ diễn ra vào năm nào?",
    options: ["1940", "1941", "1939", "1942"],
    correctAnswer: 0,
    timeLimit: 20,
    difficulty: "medium",
    category: "Lịch sử"
  },
  {
    id: 4,
    question: "Ai là người lãnh đạo cuộc khởi nghĩa Yên Bái?",
    options: ["Nguyễn Thái Học", "Phan Bội Châu", "Phan Châu Trinh", "Nguyễn Ái Quốc"],
    correctAnswer: 0,
    timeLimit: 20,
    difficulty: "medium",
    category: "Lịch sử"
  },
  {
    id: 5,
    question: "Tuyên ngôn Độc lập được đọc ở đâu?",
    options: ["Quảng trường Ba Đình", "Vườn hoa Ba Đình", "Phủ Chủ tịch", "Nhà hát Lớn"],
    correctAnswer: 0,
    timeLimit: 15,
    difficulty: "easy",
    category: "Lịch sử"
  },
  {
    id: 6,
    question: "Chiến thắng Điện Biên Phủ kết thúc vào ngày nào?",
    options: ["7/5/1954", "8/5/1954", "6/5/1954", "9/5/1954"],
    correctAnswer: 0,
    timeLimit: 15,
    difficulty: "easy",
    category: "Lịch sử"
  },
  {
    id: 7,
    question: "Ai là Tổng Bí thư đầu tiên của Đảng Cộng sản Việt Nam?",
    options: ["Trần Phú", "Nguyễn Ái Quốc", "Lê Duẩn", "Trường Chinh"],
    correctAnswer: 0,
    timeLimit: 20,
    difficulty: "hard",
    category: "Lịch sử"
  },
  {
    id: 8,
    question: "Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân diễn ra vào năm nào?",
    options: ["1968", "1967", "1969", "1970"],
    correctAnswer: 0,
    timeLimit: 15,
    difficulty: "easy",
    category: "Lịch sử"
  },
  {
    id: 9,
    question: "Ngày giải phóng miền Nam, thống nhất đất nước là?",
    options: ["30/4/1975", "1/5/1975", "29/4/1975", "2/5/1975"],
    correctAnswer: 0,
    timeLimit: 15,
    difficulty: "easy",
    category: "Lịch sử"
  },
  {
    id: 10,
    question: "Ai là người sáng lập ra Việt Nam Quốc dân Đảng?",
    options: ["Nguyễn Thái Học", "Phan Bội Châu", "Phan Châu Trinh", "Nguyễn Ái Quốc"],
    correctAnswer: 0,
    timeLimit: 20,
    difficulty: "hard",
    category: "Lịch sử"
  },
  {
    id: 11,
    question: "Cuộc khởi nghĩa Bắc Sơn diễn ra vào năm nào?",
    options: ["1940", "1941", "1939", "1942"],
    correctAnswer: 0,
    timeLimit: 20,
    difficulty: "medium",
    category: "Lịch sử"
  },
  {
    id: 12,
    question: "Ai là người lãnh đạo cuộc khởi nghĩa Bắc Sơn?",
    options: ["Hoàng Văn Thụ", "Lê Duẩn", "Trường Chinh", "Phạm Văn Đồng"],
    correctAnswer: 0,
    timeLimit: 20,
    difficulty: "hard",
    category: "Lịch sử"
  },
  {
    id: 13,
    question: "Nghị quyết Trung ương 8 (5/1941) được thông qua ở đâu?",
    options: ["Pác Bó", "Tân Trào", "Việt Bắc", "Cao Bằng"],
    correctAnswer: 0,
    timeLimit: 25,
    difficulty: "hard",
    category: "Lịch sử"
  },
  {
    id: 14,
    question: "Cuộc khởi nghĩa Ba Tơ diễn ra vào năm nào?",
    options: ["1945", "1944", "1946", "1943"],
    correctAnswer: 0,
    timeLimit: 20,
    difficulty: "medium",
    category: "Lịch sử"
  },
  {
    id: 15,
    question: "Ai là người lãnh đạo cuộc khởi nghĩa Ba Tơ?",
    options: ["Tôn Đức Thắng", "Nguyễn Hữu Thọ", "Phạm Văn Đồng", "Lê Đức Thọ"],
    correctAnswer: 0,
    timeLimit: 20,
    difficulty: "hard",
    category: "Lịch sử"
  }
];

export const gameSettings = {
  totalQuestions: 15,
  timePerQuestion: 15, // seconds
  showCorrectAnswer: 3, // seconds to show correct answer
  showScore: 5, // seconds to show score between questions
  maxPlayers: 35, // Updated to support 35 players
  maxTeams: 7, // Maximum 7 teams (5 players per team)
  pointsPerCorrect: 10,
  bonusPoints: {
    easy: 0,
    medium: 5,
    hard: 10
  },
  gameModes: {
    INDIVIDUAL: 'individual', // Each player plays individually
    TEAM: 'team', // Players are divided into teams
    ELIMINATION: 'elimination' // Players are eliminated after wrong answers
  }
};
