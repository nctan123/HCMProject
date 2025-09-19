'use client';

import { useState } from 'react';

export default function QuizGameInfo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-yellow-400">🏆 Rung chuông vàng</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>
      
      <p className="text-gray-300 mb-4">
        Tham gia trò chơi kiến thức về lịch sử Đảng Cộng sản Việt Nam!
      </p>

      {isExpanded && (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-yellow-400 mb-2">Cách chơi:</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Chọn người chơi tham gia</li>
              <li>• Trả lời câu hỏi trong thời gian quy định</li>
              <li>• Ghi điểm cho câu trả lời đúng</li>
              <li>• Người có điểm cao nhất thắng</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-400 mb-2">Điểm số:</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Câu dễ: 10 điểm</li>
              <li>• Câu trung bình: 15 điểm</li>
              <li>• Câu khó: 20 điểm</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-400 mb-2">Tính năng:</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• 15 câu hỏi đa dạng</li>
              <li>• Đồng hồ đếm ngược</li>
              <li>• Âm thanh tương tác</li>
              <li>• Bảng xếp hạng</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
