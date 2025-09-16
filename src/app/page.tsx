'use client';

import { useState, useEffect } from 'react';
import { BookOpen, Play, Brain, Trophy, ChevronRight, CheckCircle, XCircle, RotateCcw, Star, Award, Users, Calendar, Sparkles, Globe, Heart, Flag } from 'lucide-react';

export default function Home() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [videoInput, setVideoInput] = useState('');
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/dQw4w9WgXcQ');

  const normalizeYouTubeUrl = (url: string): string | null => {
    try {
      const trimmed = url.trim();
      if (!trimmed) return null;
      // Already embed
      if (trimmed.includes('/embed/')) return trimmed;
      const u = new URL(trimmed);
      // youtu.be/<id>
      if (u.hostname === 'youtu.be') {
        const id = u.pathname.replace('/', '');
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      // youtube.com/watch?v=<id>
      if (u.hostname.includes('youtube.com')) {
        const v = u.searchParams.get('v');
        if (v) return `https://www.youtube.com/embed/${v}`;
        // shorts
        if (u.pathname.startsWith('/shorts/')) {
          const id = u.pathname.split('/')[2];
          return id ? `https://www.youtube.com/embed/${id}` : null;
        }
      }
      return null;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quizQuestions = [
    {
      question: "Bối cảnh lịch sử Việt Nam cuối thế kỷ XIX đầu thế kỷ XX có đặc điểm gì?",
      options: [
        "Chế độ phong kiến phát triển mạnh mẽ",
        "Sự khủng hoảng của chế độ phong kiến và thất bại của các phong trào yêu nước",
        "Nền kinh tế tư bản chủ nghĩa phát triển",
        "Đất nước độc lập và thịnh vượng"
      ],
      correct: 1
    },
    {
      question: "Cơ sở lý luận nào là quan trọng nhất trong việc hình thành tư tưởng Hồ Chí Minh?",
      options: [
        "Giá trị truyền thống dân tộc Việt Nam",
        "Tinh hoa văn hóa nhân loại",
        "Chủ nghĩa Mác-Lênin",
        "Tất cả các cơ sở trên đều quan trọng như nhau"
      ],
      correct: 2
    },
    {
      question: "Thời kỳ nào đánh dấu sự hình thành tư tưởng cứu nước theo con đường cách mạng vô sản?",
      options: [
        "Trước ngày 5-6-1911",
        "Từ ngày 5-6-1911 đến ngày 30-12-1920",
        "Từ ngày 31-12-1920 đến ngày 2-9-1930",
        "Từ ngày 2-9-1930 đến ngày 28-1-1941"
      ],
      correct: 1
    },
    {
      question: "Nguyên tắc chiến lược nào được Đảng vận dụng xuyên suốt cả hai giai đoạn cách mạng?",
      options: [
        "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
        "Chỉ tập trung vào độc lập dân tộc",
        "Chỉ tập trung vào chủ nghĩa xã hội",
        "Hợp tác với các nước tư bản"
      ],
      correct: 0
    }
  ];

  const timelinePeriods = [
    { period: "Trước 5-6-1911", title: "Hình thành tư tưởng yêu nước", icon: Heart, color: "from-red-500 to-pink-500" },
    { period: "5-6-1911 → 30-12-1920", title: "Con đường cách mạng vô sản", icon: Flag, color: "from-orange-500 to-red-500" },
    { period: "31-12-1920 → 2-9-1930", title: "Nội dung cơ bản cách mạng", icon: Star, color: "from-yellow-500 to-orange-500" },
    { period: "2-9-1930 → 28-1-1941", title: "Vượt qua thử thách", icon: Award, color: "from-green-500 to-blue-500" },
    { period: "29-1-1941 → 2-9-1969", title: "Soi đường cho sự nghiệp", icon: Sparkles, color: "from-blue-500 to-purple-500" }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === quizQuestions[currentQuiz].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-yellow-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Hero Section with Parallax */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-red-600/90 to-pink-600/90"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <Star className="h-4 w-4 text-yellow-300/30" />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-6xl">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-6">
              <BookOpen className="h-8 w-8 text-yellow-300" />
              <span className="text-xl font-semibold">Tư Tưởng Hồ Chí Minh</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              CLO2
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Phân tích nội dung chi tiết
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Khám phá hành trình hình thành tư tưởng vĩ đại của Chủ tịch Hồ Chí Minh 
              và sự vận dụng sáng tạo trong cách mạng Việt Nam
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Section Navigation */}
        <nav className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-sm border-b border-orange-500/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-center space-x-8 overflow-x-auto">
              {['Bối cảnh lịch sử', 'Cơ sở hình thành', 'Quá trình phát triển', 'Sự vận dụng', 'Video', 'AI Use'].map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === index 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {activeSection === 0 && (
                <section className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
                        <Globe className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">Bối cảnh lịch sử</h3>
                        <p className="text-gray-400">Cuối thế kỷ XIX - đầu thế kỷ XX</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện về cách mạng Việt Nam, gắn liền với bối cảnh lịch sử
                      đầy biến động của Việt Nam và thế giới. Sự hình thành và phát triển tư tưởng đó là kết quả tổng hòa các yếu tố
                      khách quan và chủ quan.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-6 rounded-2xl border border-red-500/30">
                          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                            <Flag className="h-5 w-5 mr-2 text-red-400" />
                            Thực tiễn Việt Nam
                          </h4>
                          <div className="space-y-3 text-gray-300">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p>Sự khủng hoảng của chế độ phong kiến</p>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p>Thất bại của các phong trào yêu nước theo hệ tư tưởng cũ</p>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p>Nỗi đau mất nước của dân tộc</p>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              Bối cảnh xã hội khi thực dân Pháp xâm lược đặt ách đô hộ đã đặt ra vấn đề tồn vong dân tộc,
                              thúc đẩy Nguyễn Tất Thành ra đi tìm đường cứu nước và lựa chọn con đường cách mạng mới.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
                          <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                            <Globe className="h-5 w-5 mr-2 text-blue-400" />
                            Thực tiễn thế giới
                          </h4>
                          <div className="space-y-3 text-gray-300">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p>Chủ nghĩa tư bản → đế quốc chủ nghĩa</p>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p>Cách mạng Tháng Mười Nga (1917)</p>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p>Thời đại cách mạng vô sản</p>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              Bối cảnh quốc tế cung cấp tiền đề quan trọng, đặc biệt là chủ nghĩa Mác - Lênin,
                              để Hồ Chí Minh tiếp thu và lựa chọn con đường cách mạng giải phóng dân tộc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === 1 && (
                <section className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">Cơ sở hình thành</h3>
                        <p className="text-gray-400">Ba trụ cột nền tảng</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Tư tưởng Hồ Chí Minh được hình thành trên nền tảng cơ sở thực tiễn, cơ sở lý luận và các nhân tố chủ quan của chính Người;
                      vừa mang tính dân tộc, vừa thấm đẫm tinh hoa thời đại và khoa học cách mạng.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30 group hover:scale-105 transition-transform duration-300">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-white mb-3">Cơ sở thực tiễn</h4>
                          <p className="text-gray-300 text-sm">Bối cảnh phức tạp Việt Nam và thế giới</p>
                          <ul className="mt-3 text-left text-xs text-gray-400 space-y-1">
                            <li>• Đặt ra vấn đề tồn vong dân tộc, yêu cầu con đường cứu nước mới.</li>
                            <li>• Tác động trực tiếp tới nhận thức và lựa chọn con đường cách mạng.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30 group hover:scale-105 transition-transform duration-300">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-white mb-3">Cơ sở lý luận</h4>
                          <p className="text-gray-300 text-sm">Truyền thống dân tộc + Tinh hoa nhân loại + Mác-Lênin</p>
                          <ul className="mt-3 text-left text-xs text-gray-400 space-y-1">
                            <li>• Truyền thống yêu nước, đoàn kết, nhân nghĩa, độc lập tự chủ.</li>
                            <li>• Tinh hoa văn hóa nhân loại: chọn lọc, vận dụng sáng tạo.</li>
                            <li>• Chủ nghĩa Mác–Lênin: thế giới quan khoa học, phương pháp luận cách mạng.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30 group hover:scale-105 transition-transform duration-300">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Star className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="text-lg font-bold text-white mb-3">Nhân tố chủ quan</h4>
                          <p className="text-gray-300 text-sm">Phẩm chất và tài năng của Hồ Chí Minh</p>
                          <ul className="mt-3 text-left text-xs text-gray-400 space-y-1">
                            <li>• Phẩm chất: yêu nước, kiên cường, đạo đức trong sáng, tư duy độc lập.</li>
                            <li>• Tài năng: gắn lý luận với thực tiễn, tổng kết và phát triển sáng tạo.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === 2 && (
                <section className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl">
                        <Calendar className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">Quá trình phát triển</h3>
                        <p className="text-gray-400">Hành trình hình thành tư tưởng</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500"></div>
                      <div className="space-y-8">
                        {timelinePeriods.map((item, index) => {
                          const IconComponent = item.icon;
                          return (
                            <div key={index} className="relative flex items-center space-x-4 md:space-x-8">
                              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center z-10 flex-shrink-0`}>
                                <IconComponent className="h-4 w-4 text-white" />
                              </div>
                              <div className="bg-slate-800/50 rounded-2xl p-6 flex-1 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                  <div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.period}</p>
                                  </div>
                                  <div className={`hidden md:block w-2 h-16 rounded-full bg-gradient-to-b ${item.color} opacity-50`}></div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm text-gray-300">
                      <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50">
                        <h5 className="font-semibold text-white mb-2">Các thời kỳ tiêu biểu</h5>
                        <ul className="space-y-2 text-gray-400">
                          <li>▪ Trước 5-6-1911: Hình thành tư tưởng yêu nước, chí hướng cứu nước.</li>
                          <li>▪ 5-6-1911 → 30-12-1920: Chọn con đường cách mạng vô sản.</li>
                          <li>▪ 31-12-1920 → 2-9-1930: Hình thành nội dung cơ bản về cách mạng Việt Nam.</li>
                          <li>▪ 2-9-1930 → 28-1-1941: Vượt qua thử thách, giữ vững đường lối.</li>
                          <li>▪ 29-1-1941 → 2-9-1969: Phát triển, soi đường cho sự nghiệp cách mạng.</li>
                        </ul>
                      </div>
                      <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50">
                        <h5 className="font-semibold text-white mb-2">Ý nghĩa</h5>
                        <p className="text-gray-400 leading-relaxed">
                          Cách phân kỳ giúp theo dõi tiến trình hoàn thiện tư tưởng từ tìm tòi, xác định chủ nghĩa
                          đến xây dựng lý luận và chỉ đạo thực tiễn cách mạng.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeSection === 3 && (
                <section className="group">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">Sự vận dụng của Đảng</h3>
                        <p className="text-gray-400">Trong hai giai đoạn cách mạng</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-6 rounded-2xl border border-red-500/30">
                        <h4 className="text-xl font-bold text-white mb-6">Cách mạng dân tộc dân chủ nhân dân</h4>
                        <div className="space-y-4">
                          {["Độc lập dân tộc làm mục tiêu hàng đầu","Con đường cách mạng vô sản","Đại đoàn kết toàn dân tộc","Đảng Cộng sản lãnh đạo"].map((item, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <p className="text-gray-300">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-500/30">
                        <h4 className="text-xl font-bold text-white mb-6">Cách mạng xã hội chủ nghĩa</h4>
                        <div className="space-y-4">
                          {["Mục tiêu đi lên chủ nghĩa xã hội","Xây dựng Đảng và Nhà nước","Phát triển văn hóa, đạo đức","Độc lập - Chủ nghĩa xã hội"].map((item, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <p className="text-gray-300">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm">
                      <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50 text-gray-300">
                        <h5 className="font-semibold text-white mb-2">Vận dụng khái quát</h5>
                        <p className="text-gray-400 leading-relaxed">
                          Tư tưởng Hồ Chí Minh đưa cách mạng giải phóng dân tộc đến thắng lợi và mở đầu xây dựng xã hội mới.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/50 text-gray-300">
                        <h5 className="font-semibold text-white mb-2">Nguyên tắc chiến lược</h5>
                        <ul className="space-y-2 text-gray-400">
                          <li>1) Kiên định mục tiêu độc lập dân tộc gắn liền với CNXH.</li>
                          <li>2) Phát huy dân chủ XHCN, củng cố đại đoàn kết toàn dân.</li>
                          <li>3) Kiện toàn hệ thống chính trị, nâng cao hiệu lực hiệu quả.</li>
                          <li>4) Đấu tranh chống suy thoái, “tự diễn biến”, “tự chuyển hóa”.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8 space-y-3">
                      <details className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          1) Kiên định con đường độc lập dân tộc gắn liền với CNXH
                          <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="mt-3 text-sm text-gray-300 space-y-2">
                          <p>Chính sách đối ngoại độc lập, tự chủ; đa phương hóa, đa dạng hóa quan hệ quốc tế; bảo vệ chủ quyền, tạo môi trường hòa bình phát triển.</p>
                          <p className="text-gray-400">Ví dụ: Quan hệ đối tác chiến lược/toàn diện với nhiều nước; ký FTA, chủ động hội nhập.</p>
                          <div className="text-xs text-gray-400 space-x-2">
                            <a className="underline hover:text-gray-300" href="https://dangcongsan.vn/van-kien-dai-hoi-xiii-cua-dang/toan-van-noi-dung-dai-hoi-lan-thu-xiii-cua-dang-629272.html" target="_blank" rel="noreferrer">Văn kiện Đại hội XIII</a>
                          </div>
                        </div>
                      </details>
                      <details className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          2) Phát triển kinh tế thị trường định hướng XHCN
                          <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="mt-3 text-sm text-gray-300 space-y-2">
                          <p>Kết hợp hiệu quả cơ chế thị trường với vai trò điều tiết của Nhà nước nhằm bảo đảm công bằng xã hội, giữ vai trò chủ đạo ở các lĩnh vực then chốt.</p>
                          <p className="text-gray-400">Ví dụ: Thu hút FDI, giảm nghèo bền vững, nông thôn mới, y tế/giáo dục công.</p>
                          <div className="text-xs text-gray-400 space-x-2">
                            <a className="underline hover:text-gray-300" href="https://quochoi.vn/" target="_blank" rel="noreferrer">Quốc hội</a>
                            <a className="underline hover:text-gray-300" href="https://chinhphu.vn/" target="_blank" rel="noreferrer">Chính phủ</a>
                          </div>
                        </div>
                      </details>
                      <details className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          3) Xây dựng Nhà nước pháp quyền XHCN của dân, do dân, vì dân
                          <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="mt-3 text-sm text-gray-300 space-y-2">
                          <p>Hoàn thiện thể chế, thượng tôn pháp luật, phòng chống tham nhũng, nâng cao hiệu lực quản lý nhà nước.</p>
                          <p className="text-gray-400">Ví dụ: Đẩy mạnh lập pháp; chiến dịch "đốt lò" tăng niềm tin của nhân dân.</p>
                          <div className="text-xs text-gray-400 space-x-2">
                            <a className="underline hover:text-gray-300" href="https://moj.gov.vn/" target="_blank" rel="noreferrer">Bộ Tư pháp</a>
                            <a className="underline hover:text-gray-300" href="https://nhandan.vn/chong-tham-nhung" target="_blank" rel="noreferrer">Chống tham nhũng</a>
                          </div>
                        </div>
                      </details>
                      <details className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          4) Xây dựng Đảng trong sạch, vững mạnh
                          <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="mt-3 text-sm text-gray-300 space-y-2">
                          <p>Tự phê bình và phê bình; ngăn chặn suy thoái tư tưởng chính trị, đạo đức, lối sống; chống "tự diễn biến", "tự chuyển hóa".</p>
                          <p className="text-gray-400">Ví dụ: Nghị quyết Trung ương 4 (khóa XI, XII) về xây dựng, chỉnh đốn Đảng.</p>
                          <div className="text-xs text-gray-400 space-x-2">
                            <a className="underline hover:text-gray-300" href="https://dangcongsan.vn/" target="_blank" rel="noreferrer">Đảng Cộng sản Việt Nam</a>
                          </div>
                        </div>
                      </details>
                      <details className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          5) Phát huy sức mạnh đại đoàn kết toàn dân tộc
                          <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="mt-3 text-sm text-gray-300 space-y-2">
                          <p>Xây dựng khối đoàn kết trên nền tảng liên minh công – nông – trí; mở rộng tới các tầng lớp khác và người Việt Nam ở nước ngoài.</p>
                          <p className="text-gray-400">Ví dụ: Vai trò của Mặt trận Tổ quốc trong huy động nguồn lực phòng chống dịch, cứu trợ thiên tai.</p>
                          <div className="text-xs text-gray-400 space-x-2">
                            <a className="underline hover:text-gray-300" href="https://www.mattran.org.vn/" target="_blank" rel="noreferrer">Mặt trận Tổ quốc Việt Nam</a>
                          </div>
                        </div>
                      </details>
                      <details className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                        <summary className="cursor-pointer list-none flex justify-between items-center text-white font-medium">
                          6) Xây dựng văn hóa và con người Việt Nam thời kỳ mới
                          <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="mt-3 text-sm text-gray-300 space-y-2">
                          <p>Coi văn hóa là nền tảng tinh thần và động lực phát triển; giáo dục đạo đức, lối sống, lý tưởng cách mạng cho thế hệ trẻ; bảo tồn và phát huy di sản.</p>
                          <p className="text-gray-400">Ví dụ: Đổi mới giáo dục, chính sách phát huy giá trị văn hóa truyền thống song hành tiếp thu tinh hoa nhân loại.</p>
                          <div className="text-xs text-gray-400 space-x-2">
                            <a className="underline hover:text-gray-300" href="https://bvhttdl.gov.vn/" target="_blank" rel="noreferrer">Bộ VHTT&DL</a>
                            <a className="underline hover:text-gray-300" href="https://moet.gov.vn/" target="_blank" rel="noreferrer">Bộ GD&ĐT</a>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quiz */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Trophy className="h-6 w-6 mr-2 text-yellow-400" />
                  Quiz Thử Thách
                </h3>
                
                {!quizCompleted ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>Câu {currentQuiz + 1}/{quizQuestions.length}</span>
                      <span>{Math.round(((currentQuiz + 1) / quizQuestions.length) * 100)}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentQuiz + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>

                    <h4 className="font-semibold text-white text-sm leading-relaxed">
                      {quizQuestions[currentQuiz].question}
                    </h4>

                    <div className="space-y-2">
                      {quizQuestions[currentQuiz].options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          className={`w-full text-left p-3 rounded-xl border-2 transition-all duration-300 text-sm ${
                            selectedAnswer === index
                              ? 'border-yellow-500 bg-yellow-500/20 text-white'
                              : 'border-slate-600 text-gray-300 hover:border-slate-500 hover:bg-slate-800/50'
                          } ${
                            showResult
                              ? index === quizQuestions[currentQuiz].correct
                                ? 'border-green-500 bg-green-500/20 text-green-300'
                                : selectedAnswer === index && index !== quizQuestions[currentQuiz].correct
                                ? 'border-red-500 bg-red-500/20 text-red-300'
                                : 'border-slate-600'
                              : ''
                          }`}
                          disabled={showResult}
                        >
                          <div className="flex items-center">
                            {showResult && index === quizQuestions[currentQuiz].correct && (
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                            )}
                            {showResult && selectedAnswer === index && index !== quizQuestions[currentQuiz].correct && (
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
                        {currentQuiz < quizQuestions.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành'}
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                        {score}/{quizQuestions.length}
                      </div>
                      <div className="absolute -inset-4">
                        <div className="w-full h-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
                      </div>
                    </div>
                    <div className="text-gray-300">
                      {score === quizQuestions.length ? "Xuất sắc! 🎉" : 
                       score >= quizQuestions.length * 0.7 ? "Tốt lắm! 👏" : 
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

              {/* Video Tab */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Play className="h-6 w-6 mr-2 text-yellow-400" />
                  Video Tài Liệu
                </h3>
                <div className="mb-4 grid gap-2 md:grid-cols-[1fr_auto]">
                  <input
                    value={videoInput}
                    onChange={(e) => setVideoInput(e.target.value)}
                    placeholder="Dán link YouTube (watch/shorts/youtu.be)"
                    className="w-full px-3 py-2 rounded-lg bg-slate-800/80 border border-slate-600 text-sm text-gray-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/40"
                  />
                  <button
                    onClick={() => {
                      const next = normalizeYouTubeUrl(videoInput);
                      if (next) setVideoUrl(next);
                    }}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm"
                  >
                    Áp dụng
                  </button>
                </div>
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-4 overflow-hidden border border-slate-600 group cursor-pointer">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={videoUrl} 
                    title="Tư tưởng Hồ Chí Minh - Hành trình vĩ đại"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-xl group-hover:scale-105 transition-transform duration-500"
                  ></iframe>
                </div>
              </div>

              {/* AI Usage Tab */}
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Brain className="h-6 w-6 mr-2 text-yellow-400" />
                  AI Sử Dụng
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-xl border border-orange-500/20">
                    <h4 className="font-semibold text-orange-300 mb-2 text-sm flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                      Cam kết liêm chính
                    </h4>
                    <p className="text-xs text-gray-300 italic leading-relaxed">
                      "AI chỉ hỗ trợ giao diện và tương tác. 
                      Nội dung học thuật do sinh viên nghiên cứu và biên soạn."
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-xl border border-purple-500/20">
                    <h4 className="font-semibold text-purple-300 mb-2 text-sm">Best practices khi dùng AI</h4>
                    <ul className="list-disc pl-5 text-xs text-gray-300 space-y-1">
                      <li>Kiểm chứng nguồn, trích dẫn rõ ràng.</li>
                      <li>Phân biệt UI/UX do AI hỗ trợ và nội dung học thuật của sinh viên.</li>
                      <li>Không copy nguyên văn, luôn diễn đạt và hiểu bản chất.</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-xl border border-blue-500/20">
                    <h4 className="font-semibold text-blue-300 mb-3 text-sm flex items_center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      Phân định vai trò
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-purple-300">AI:</span>
                        <span className="text-gray-400">UI/UX, Quiz</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-300">Sinh viên:</span>
                        <span className="text-gray-400">Nội dung, Phân tích</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/20">
                    <h4 className="font-semibold text-green-300 mb-2 text-sm flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      Nguồn tham khảo
                    </h4>
                    <div className="space-y-1 text-xs text-gray-400">
                      <div>• Giáo trình chính thức</div>
                      <div>• NXB Chính trị Quốc gia</div>
                      <div>• Tài liệu Đảng</div>
                      <div>• <a className="underline hover:text-gray-300" href="https://scholar.google.com/" target="_blank" rel="noreferrer">Google Scholar</a></div>
                      <div>• <a className="underline hover:text-gray-300" href="https://libgen.is/" target="_blank" rel="noreferrer">Libgen (tham khảo)</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-20">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-orange-500/20">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Tư Tưởng Hồ Chí Minh</h3>
                  <p className="text-gray-400 text-sm">Hệ thống học tập tương tác</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <span>© 2024</span>
                <span>•</span>
                <span>CLO2 Interactive Learning</span>
                <span>•</span>
                <span>Made with ❤️</span>
              </div>

              <div className="flex items-center justify-center space-x-6">
                {[Star, Heart, Award].map((Icon, index) => (
                  <div key={index} className="p-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full">
                    <Icon className="h-4 w-4 text-orange-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}