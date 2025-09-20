'use client';

import {useEffect, useState} from 'react';
import {QuizQuestion, quizQuestions} from '../data/quizData';

export default function QuizComponent() {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Tất cả');
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [timeLeft, setTimeLeft] = useState(30);
    const [timerActive, setTimerActive] = useState(false);

    // Filter questions based on category and difficulty
    useEffect(() => {
        let filteredQuestions = quizQuestions;

        if (selectedCategory !== 'Tất cả') {
            filteredQuestions = filteredQuestions.filter(q => q.category === selectedCategory);
        }

        if (selectedDifficulty !== 'all') {
            filteredQuestions = filteredQuestions.filter(q => q.difficulty === selectedDifficulty);
        }

        // Shuffle questions
        filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5);
        setQuestions(filteredQuestions);
    }, [selectedCategory, selectedDifficulty]);

    // Timer countdown
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timerActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleAnswerSubmit();
        }
        return () => clearInterval(interval);
    }, [timerActive, timeLeft]);

    const startQuiz = () => {
        setQuizStarted(true);
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizCompleted(false);
        setTimeLeft(30);
        setTimerActive(true);
    };

    const handleAnswerSelect = (answerIndex: number) => {
        if (!showResult) {
            setSelectedAnswer(answerIndex);
        }
    };

    const handleAnswerSubmit = () => {
        if (selectedAnswer === null) return;

        setShowResult(true);
        setTimerActive(false);

        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setShowResult(false);
            setTimeLeft(30);
            setTimerActive(true);
        } else {
            setQuizCompleted(true);
            setTimerActive(false);
        }
    };

    const resetQuiz = () => {
        setQuizStarted(false);
        setQuizCompleted(false);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
        setTimeLeft(30);
        setTimerActive(false);
    };

    if (!quizStarted) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Quiz Ôn Tập
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Test kiến thức về lịch sử, tư tưởng Hồ Chí Minh
                    </p>

                    <div className="text-center">
                        <p className="text-lg text-gray-300 mb-4">
                            Số câu: <span className="font-bold text-yellow-400">{questions.length}</span>
                        </p>
                        <button
                            onClick={startQuiz}
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105"
                        >
                            Bắt Đầu
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (quizCompleted) {
        const percentage = Math.round((score / questions.length) * 100);
        let message = '';
        let color = '';

        if (percentage >= 80) {
            message = 'Xuất sắc!';
            color = 'text-green-400';
        } else if (percentage >= 60) {
            message = 'Tốt!';
            color = 'text-yellow-400';
        } else {
            message = 'Cần ôn tập thêm!';
            color = 'text-red-400';
        }

        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Kết Quả</h2>

                    <div className="text-6xl font-bold text-yellow-400 mb-4">
                        {percentage}%
                    </div>

                    <p className={`text-2xl font-semibold mb-4 ${color}`}>
                        {message}
                    </p>

                    <div className="text-xl text-gray-300 mb-8">
                        {score}/{questions.length} câu đúng
                    </div>

                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={resetQuiz}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Làm Lại
                        </button>
                        <button
                            onClick={() => {
                                setQuizStarted(false);
                                setQuizCompleted(false);
                            }}
                            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Chọn Khác
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
            <span className="text-white font-semibold">
              Câu {currentQuestionIndex + 1}/{questions.length}
            </span>
                        <span className="text-white font-semibold">
              Điểm: {score}
            </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                            style={{width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`}}
                        ></div>
                    </div>
                </div>

                {/* Timer */}
                <div className="text-center mb-6">
                    <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-yellow-400'}`}>
                        ⏰ {timeLeft}s
                    </div>
                </div>

                {/* Question */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {currentQuestion.category}
            </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            currentQuestion.difficulty === 'easy' ? 'bg-green-500 text-white' :
                                currentQuestion.difficulty === 'medium' ? 'bg-yellow-500 text-white' :
                                    'bg-red-500 text-white'
                        }`}>
              {currentQuestion.difficulty === 'easy' ? 'Dễ' :
                  currentQuestion.difficulty === 'medium' ? 'Trung bình' : 'Khó'}
            </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-6">
                        {currentQuestion.question}
                    </h3>
                </div>

                {/* Answer Options */}
                <div className="space-y-4 mb-8">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={showResult}
                            className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                                showResult
                                    ? index === currentQuestion.correctAnswer
                                        ? 'bg-green-500 text-white border-2 border-green-400'
                                        : index === selectedAnswer
                                            ? 'bg-red-500 text-white border-2 border-red-400'
                                            : 'bg-gray-700 text-gray-300'
                                    : selectedAnswer === index
                                        ? 'bg-orange-500 text-white border-2 border-orange-400'
                                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/30'
                            }`}
                        >
              <span className="font-semibold mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
                            {option}
                        </button>
                    ))}
                </div>

                {/* Submit Button */}
                {!showResult && (
                    <div className="text-center">
                        <button
                            onClick={handleAnswerSubmit}
                            disabled={selectedAnswer === null}
                            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-500 disabled:to-gray-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 disabled:cursor-not-allowed"
                        >
                            Trả Lời
                        </button>
                    </div>
                )}

                {/* Result and Next Button */}
                {showResult && (
                    <div className="text-center">
                        <div className="mb-6 p-4 rounded-xl bg-white/10">
                            <h4 className="text-xl font-bold text-white mb-2">
                                {selectedAnswer === currentQuestion.correctAnswer ? '✅ Chính xác!' : '❌ Sai rồi!'}
                            </h4>
                            <p className="text-gray-300">
                                <strong>Giải thích:</strong> {currentQuestion.explanation}
                            </p>
                        </div>

                        <button
                            onClick={nextQuestion}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-colors"
                        >
                            {currentQuestionIndex < questions.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
