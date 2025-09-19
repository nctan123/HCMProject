'use client';

import { useState } from 'react';
import { Clock, Users, AlertTriangle, CheckCircle, XCircle, Settings } from 'lucide-react';

export default function TimeControlInfo() {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Cửa sổ đăng ký",
      description: "Thiết lập thời gian cho phép người chơi tham gia (10-300 giây)"
    },
    {
      icon: <AlertTriangle className="h-5 w-5" />,
      title: "Tham gia muộn",
      description: "Phạt điểm người chơi tham gia sau thời gian đăng ký"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Theo dõi hoạt động",
      description: "Tự động loại người chơi không hoạt động trong thời gian quy định"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Tự động bắt đầu",
      description: "Game tự động bắt đầu sau khi hết thời gian đăng ký"
    },
    {
      icon: <XCircle className="h-5 w-5" />,
      title: "Quản lý thời gian thực",
      description: "Kiểm soát và quản lý người chơi trong suốt quá trình game"
    }
  ];

  const phases = [
    {
      phase: "Setup",
      description: "Cài đặt thời gian và quy tắc",
      color: "text-gray-400",
      icon: <Settings className="h-4 w-4" />
    },
    {
      phase: "Registration",
      description: "Người chơi đăng ký tham gia",
      color: "text-green-400",
      icon: <Users className="h-4 w-4" />
    },
    {
      phase: "Countdown",
      description: "Đếm ngược trước khi bắt đầu",
      color: "text-yellow-400",
      icon: <Clock className="h-4 w-4" />
    },
    {
      phase: "Playing",
      description: "Game đang diễn ra",
      color: "text-blue-400",
      icon: <CheckCircle className="h-4 w-4" />
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-yellow-400 flex items-center">
          <Clock className="h-6 w-6 mr-2" />
          Kiểm soát thời gian
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>
      
      <p className="text-gray-300 mb-4">
        Hệ thống kiểm soát thời gian cho phép bạn quản lý việc tham gia của người chơi một cách chặt chẽ và công bằng.
      </p>

      {isExpanded && (
        <div className="space-y-6">
          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Tính năng chính:</h4>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-yellow-400 mt-0.5">{feature.icon}</div>
                  <div>
                    <h5 className="font-semibold text-white">{feature.title}</h5>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phases */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quy trình hoạt động:</h4>
            <div className="space-y-2">
              {phases.map((phase, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-lg">
                  <div className={`${phase.color}`}>{phase.icon}</div>
                  <div className="flex-1">
                    <span className={`font-semibold ${phase.color}`}>{phase.phase}</span>
                    <span className="text-gray-300 text-sm ml-2">- {phase.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Cài đặt có sẵn:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/5 rounded-lg p-3">
                <h5 className="font-semibold text-yellow-400 mb-2">Thời gian đăng ký</h5>
                <p className="text-gray-300">10-300 giây (mặc định: 60s)</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <h5 className="font-semibold text-yellow-400 mb-2">Thời gian chờ bắt đầu</h5>
                <p className="text-gray-300">5-60 giây (mặc định: 10s)</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <h5 className="font-semibold text-yellow-400 mb-2">Phạt điểm tham gia muộn</h5>
                <p className="text-gray-300">0-200 điểm (mặc định: 50)</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <h5 className="font-semibold text-yellow-400 mb-2">Thời gian không hoạt động</h5>
                <p className="text-gray-300">10-120 giây (mặc định: 30s)</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-blue-500/20 border border-blue-400 rounded-lg p-4">
            <h5 className="font-semibold text-blue-400 mb-2">💡 Lợi ích:</h5>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Đảm bảo tất cả người chơi có thời gian chuẩn bị</li>
              <li>• Tránh tình trạng người chơi tham gia muộn gây mất công bằng</li>
              <li>• Tự động quản lý mà không cần can thiệp thủ công</li>
              <li>• Phù hợp cho lớp học và sự kiện có thời gian cố định</li>
              <li>• Tăng tính chuyên nghiệp của game</li>
            </ul>
          </div>

          {/* Usage Tips */}
          <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
            <h5 className="font-semibold text-green-400 mb-2">🎯 Mẹo sử dụng:</h5>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Đặt thời gian đăng ký phù hợp với quy mô lớp học</li>
              <li>• Thông báo trước cho học sinh về thời gian bắt đầu</li>
              <li>• Sử dụng phạt điểm để khuyến khích tham gia đúng giờ</li>
              <li>• Bật tự động loại để duy trì sự tập trung</li>
              <li>• Kiểm tra danh sách người chơi trước khi bắt đầu</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
