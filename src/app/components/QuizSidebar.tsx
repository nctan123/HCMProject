"use client";
import { useState, useEffect } from "react";
import { Trophy, ChevronRight, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import { useAudio } from "../hooks/useAudio";
import AudioController from "./AudioController";

type QuizQuestion = {
  question: string;
  options: string[];
  correct: number;
};

const defaultQuestions: QuizQuestion[] = [
  {
    question: "Chủ nghĩa Mác – Lênin có vai trò gì trong quá trình hình thành và phát triển tư tưởng Hồ Chí Minh?",
    options: [
      "Làm cơ sở lý luận gián tiếp, ít quan trọng",
      "Hoàn toàn không ảnh hưởng",
      "Chỉ bổ sung một số yếu tố đạo đức",
      "Cung cấp thế giới quan duy vật và phương pháp luận khoa học cho con đường giải phóng dân tộc",
    ],
    correct: 3,
  },
  {
    question: "Vì sao Hồ Chí Minh không lựa chọn con đường cứu nước theo hệ tư tưởng phong kiến hay tư sản?",
    options: [
      "Vì các con đường này đã thất bại, không triệt để, không giải phóng dân tộc triệt để",
      "Vì đó là con đường đã được nhân dân ưa chuộng",
      "Vì Người chưa từng tiếp xúc với tư tưởng phong kiến hay tư sản",
      "Vì đó là con đường khó thực hiện",
    ],
    correct: 0,
  },
  {
    question: "Trước ngày 5/6/1911, Nguyễn Tất Thành đã hình thành tư tưởng gì cơ bản?",
    options: [
      "Chủ trương khởi nghĩa vũ trang ngay lập tức",
      "Xây dựng xã hội chủ nghĩa ở Việt Nam",
      "Ý chí tìm con đường cứu nước mới, khác với các con đường cũ đã thất bại",
      "Tư tưởng cách mạng vô sản",
    ],
    correct: 2,
  },
  {
    question: "Trong cách mạng dân tộc dân chủ nhân dân, Đảng Cộng sản Việt Nam đã vận dụng tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc như thế nào?",
    options: [
      "Chỉ dựa vào tầng lớp tư sản dân tộc",
      "Không cần đoàn kết vì cách mạng vô sản là đủ",
      "Chỉ dựa vào giai cấp công nhân",
      "Xây dựng khối đại đoàn kết toàn dân, trên nền tảng liên minh công – nông",
    ],
    correct: 3,
  },
  {
    question: "Cách mạng Tháng Mười Nga năm 1917 có ý nghĩa thế nào đối với Nguyễn Ái Quốc?",
    options: [
      "Tạo điều kiện để các nước thuộc địa thành lập chính phủ độc lập ngay lập tức",
      "Chứng minh con đường cải lương là đúng đắn",
      "Khẳng định cách mạng tư sản là tất yếu",
      "Mở ra thời đại mới, gợi ý con đường cách mạng vô sản cho Việt Nam",
    ],
    correct: 3,
  },
  {
    question: "Tình hình xã hội Việt Nam cuối thế kỷ XIX – đầu thế kỷ XX có đặc điểm nổi bật gì tác động đến sự hình thành tư tưởng Hồ Chí Minh?",
    options: [
      "Nhân dân có đời sống sung túc, văn hóa phát triển",
      "Tư sản dân tộc nắm quyền lãnh đạo cách mạng",
      "Đất nước giàu mạnh, phong kiến ổn định",
      "Thực dân Pháp xâm lược, chế độ phong kiến khủng hoảng, phong trào yêu nước thất bại",
    ],
    correct: 3,
  },
  {
    question: "Những giá trị truyền thống nào của dân tộc Việt Nam đã ảnh hưởng sâu sắc đến tư tưởng Hồ Chí Minh?",
    options: [
      "Chủ nghĩa tư sản và tinh thần khai phá phương Tây",
      "Tinh thần hưởng lạc và thương mại hóa",
      "Yêu nước, đoàn kết, nhân nghĩa, ý chí tự lập, tinh thần cần cù sáng tạo",
      "Chủ nghĩa cá nhân và tinh thần tự do tuyệt đối",
    ],
    correct: 2,
  },
  {
    question: "Vai trò của nhân tố chủ quan (phẩm chất, tài năng) của Hồ Chí Minh trong việc hình thành tư tưởng của Người là gì?",
    options: [
      "Chủ yếu ở khả năng ngoại ngữ",
      "Không quan trọng, hoàn toàn do bối cảnh khách quan quyết định",
      "Rất quan trọng: lòng yêu nước, trí tuệ, bản lĩnh, khả năng tổng kết lý luận và thực tiễn",
      "Chỉ tác động nhỏ đến phong cách sống",
    ],
    correct: 2,
  },
  {
    question: "Tại sao có thể nói: \"Độc lập dân tộc gắn liền với chủ nghĩa xã hội\" là sợi chỉ đỏ xuyên suốt cách mạng Việt Nam?",
    options: [
      "Vì Hồ Chí Minh coi đây là khẩu hiệu tạm thời",
      "Vì chỉ có xã hội chủ nghĩa mới có thể giải quyết vấn đề ruộng đất",
      "Vì chủ nghĩa xã hội là bảo đảm vững chắc cho độc lập, và độc lập dân tộc là tiền đề của chủ nghĩa xã hội",
      "Vì độc lập dân tộc chỉ đạt được khi gắn với kinh tế thị trường",
    ],
    correct: 2,
  },
  {
    question: "Vận dụng tư tưởng Hồ Chí Minh trong đổi mới hiện nay, biểu hiện nào dưới đây thể hiện sự kiên định mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội?",
    options: [
      "Vừa phát triển kinh tế, vừa giữ vững vai trò lãnh đạo của Đảng, phát huy dân chủ, xây dựng hệ thống chính trị vững mạnh",
      "Chỉ tập trung phát triển kinh tế thị trường, bỏ qua yếu tố xã hội",
      "Tách rời mục tiêu độc lập dân tộc với phát triển xã hội",
      "Hoàn toàn theo mô hình kinh tế tư bản chủ nghĩa",
    ],
    correct: 0,
  },
];

type Props = {
  questions?: QuizQuestion[];
};

export default function QuizSidebar({ questions = defaultQuestions }: Props) {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // Audio states
  const [backgroundVolume, setBackgroundVolume] = useState(0.4); // Increased default volume
  const [effectsVolume, setEffectsVolume] = useState(0.7);
  const [isBackgroundPlaying, setIsBackgroundPlaying] = useState(false);

  // Audio hooks - using generated audio as fallback
  const backgroundMusic = useAudio('/audio/background-music.mp3', { 
    volume: backgroundVolume, 
    loop: true, 
    autoplay: false 
  });
  
  const correctSound = useAudio('/audio/correct.mp3', { volume: effectsVolume });
  const wrongSound = useAudio('/audio/wrong.mp3', { volume: effectsVolume });
  const completeSound = useAudio('/audio/complete.mp3', { volume: effectsVolume });

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
    if (selectedAnswer === questions[currentQuiz].correct) {
      setScore((s) => s + 1);
      correctSound.play();
    } else {
      wrongSound.play();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuiz < questions.length - 1) {
      setCurrentQuiz((i) => i + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
      completeSound.play();
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    backgroundMusic.stop();
    setIsBackgroundPlaying(false);
  };

  // Auto-start background music when quiz starts
  useEffect(() => {
    if (!quizCompleted && !isBackgroundPlaying) {
      const timer = setTimeout(() => {
        backgroundMusic.play();
        setIsBackgroundPlaying(true);
      }, 1000); // Start after 1 second
      
      return () => clearTimeout(timer);
    }
  }, [quizCompleted, isBackgroundPlaying, backgroundMusic]);

  // Audio control handlers
  const handleBackgroundVolumeChange = (volume: number) => {
    setBackgroundVolume(volume);
    backgroundMusic.setVolume(volume);
  };

  const handleEffectsVolumeChange = (volume: number) => {
    setEffectsVolume(volume);
    correctSound.setVolume(volume);
    wrongSound.setVolume(volume);
    completeSound.setVolume(volume);
  };

  const handleToggleBackground = () => {
    if (isBackgroundPlaying) {
      backgroundMusic.pause();
      setIsBackgroundPlaying(false);
    } else {
      backgroundMusic.play();
      setIsBackgroundPlaying(true);
    }
  };

  // Update audio volumes when they change
  useEffect(() => {
    backgroundMusic.setVolume(backgroundVolume);
  }, [backgroundVolume, backgroundMusic]);

  useEffect(() => {
    correctSound.setVolume(effectsVolume);
    wrongSound.setVolume(effectsVolume);
    completeSound.setVolume(effectsVolume);
  }, [effectsVolume, correctSound, wrongSound, completeSound]);

  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 sticky top-24">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Trophy className="h-6 w-6 mr-2 text-yellow-400" />
        Quiz Thử Thách
      </h3>

      {/* Audio Controller */}
      <AudioController
        backgroundVolume={backgroundVolume}
        onBackgroundVolumeChange={handleBackgroundVolumeChange}
        effectsVolume={effectsVolume}
        onEffectsVolumeChange={handleEffectsVolumeChange}
        isBackgroundPlaying={isBackgroundPlaying}
        onToggleBackground={handleToggleBackground}
      />

      {!quizCompleted ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Câu {currentQuiz + 1}/{questions.length}</span>
            <span>{Math.round(((currentQuiz + 1) / questions.length) * 100)}%</span>
          </div>

          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuiz + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          <h4 className="font-semibold text-white text-sm leading-relaxed">
            {questions[currentQuiz].question}
          </h4>

          <div className="space-y-2">
            {questions[currentQuiz].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-3 rounded-xl border-2 transition-all duration-300 text-sm ${
                  selectedAnswer === index
                    ? 'border-yellow-500 bg-yellow-500/20 text-white'
                    : 'border-slate-600 text-gray-300 hover:border-slate-500 hover:bg-slate-800/50'
                } ${
                  showResult
                    ? index === questions[currentQuiz].correct
                      ? 'border-green-500 bg-green-500/20 text-green-300'
                      : selectedAnswer === index && index !== questions[currentQuiz].correct
                      ? 'border-red-500 bg-red-500/20 text-red-300'
                      : 'border-slate-600'
                    : ''
                }`}
                disabled={showResult}
              >
                <div className="flex items-center">
                  {showResult && index === questions[currentQuiz].correct && (
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  )}
                  {showResult && selectedAnswer === index && index !== questions[currentQuiz].correct && (
                    <XCircle className="h-4 w-4 text-red-400 mr-2" />
                  )}
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          {!showResult ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-4 rounded-xl hover:from-yellow-600 hover:to-orange-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed transition-all duration-300 font-medium"
            >
              Xác nhận
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-4 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center font-medium"
            >
              {currentQuiz < questions.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành'}
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          )}
        </div>
      ) : (
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
              {score}/{questions.length}
            </div>
            <div className="absolute -inset-4">
              <div className="w-full h-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
          <div className="text-gray-300">
            {score === questions.length ? "Xuất sắc! 🎉" :
             score >= questions.length * 0.7 ? "Tốt lắm! 👏" :
             "Cần ôn tập thêm 📚"}
          </div>
          <button
            onClick={resetQuiz}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center font-medium"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Thử lại
          </button>
        </div>
      )}
    </div>
  );
}


