import { Calendar, Star, Award, Sparkles, Heart, Flag } from "lucide-react";

const timelinePeriods = [
  { 
    period: "Trước 5-6-1911", 
    title: "Hình thành tư tưởng yêu nước", 
    icon: Heart, 
    color: "from-red-500 to-pink-500",
    content: "Trong thời niên thiếu, Nguyễn Tất Thành đã chứng kiến cảnh đất nước mất độc lập, phong trào yêu nước thất bại → từ đó hình thành tư tưởng yêu nước, thương dân, chí hướng tìm con đường cứu nước mới."
  },
  { 
    period: "5-6-1911 → 12-1920", 
    title: "Bước ngoặt quyết định", 
    icon: Flag, 
    color: "from-orange-500 to-red-500",
    content: "5-6-1911 ra đi tìm đường cứu nước. Quá trình bôn ba khắp châu lục, vừa lao động, vừa học hỏi. Năm 1920 đọc \"Luận cương của Lênin về vấn đề dân tộc và thuộc địa\" → bước ngoặt quyết định, xác định con đường cứu nước theo cách mạng vô sản."
  },
  { 
    period: "1920 → 2-1930", 
    title: "Hình thành nội dung cơ bản", 
    icon: Star, 
    color: "from-yellow-500 to-orange-500",
    content: "Hồ Chí Minh tham gia sáng lập Đảng Cộng sản Pháp, hoạt động trong Quốc tế Cộng sản. Tích cực truyền bá Mác – Lênin vào Việt Nam. Tác phẩm tiêu biểu: Đường Kách mệnh (1927). Ngày 3-2-1930 thành lập Đảng Cộng sản Việt Nam → mốc quan trọng đánh dấu sự hình thành cơ bản tư tưởng Hồ Chí Minh về cách mạng Việt Nam."
  },
  { 
    period: "1930 → 1941", 
    title: "Vượt qua thử thách", 
    icon: Award, 
    color: "from-green-500 to-blue-500",
    content: "Phong trào cách mạng gặp nhiều khó khăn, bị khủng bố đàn áp. Hồ Chí Minh vẫn kiên định con đường giải phóng dân tộc gắn với chủ nghĩa xã hội. Tiếp tục hoạt động ở quốc tế, chuẩn bị lực lượng cho cách mạng trong nước."
  },
  { 
    period: "1941 → 1969", 
    title: "Soi đường cho sự nghiệp", 
    icon: Sparkles, 
    color: "from-blue-500 to-purple-500",
    content: "1941: Hồ Chí Minh về nước, thành lập Việt Minh. 1945: Lãnh đạo Cách mạng Tháng Tám thành công, lập Nhà nước Việt Nam Dân chủ Cộng hòa. Trong kháng chiến chống Pháp, Mỹ: phát triển tư tưởng kháng chiến toàn dân, toàn diện, lâu dài, tự lực cánh sinh. Đến khi Người qua đời (1969), hệ thống tư tưởng đã hoàn chỉnh, trở thành \"ngọn đèn soi đường cho cách mạng Việt Nam\"."
  },
];

export default function DevelopmentTimeline() {
  return (
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
              const IconComponent = item.icon as any;
              return (
                <div key={index} className="relative flex items-center space-x-4 md:space-x-8">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center z-10 flex-shrink-0`}>
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex-1 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm mb-3">{item.period}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.content}</p>
                      </div>
                      <div className={`hidden md:block w-2 h-16 rounded-full bg-gradient-to-b ${item.color} opacity-50 ml-4`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
          <h5 className="font-semibold text-white mb-4 text-center text-lg">Tổng kết quá trình phát triển</h5>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h6 className="font-semibold text-orange-300 mb-3">Các mốc quan trọng</h6>
              <ul className="space-y-2 text-gray-400">
                <li>• <strong>5-6-1911:</strong> Ra đi tìm đường cứu nước</li>
                <li>• <strong>1920:</strong> Đọc Luận cương Lênin - bước ngoặt quyết định</li>
                <li>• <strong>3-2-1930:</strong> Thành lập Đảng Cộng sản Việt Nam</li>
                <li>• <strong>1941:</strong> Về nước, thành lập Việt Minh</li>
                <li>• <strong>1945:</strong> Cách mạng Tháng Tám thành công</li>
                <li>• <strong>1969:</strong> Hệ thống tư tưởng hoàn chỉnh</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-orange-300 mb-3">Ý nghĩa lịch sử</h6>
              <p className="text-gray-400 leading-relaxed mb-3">
                Quá trình phát triển tư tưởng Hồ Chí Minh phản ánh sự vận động từ tìm tòi, khám phá đến xác định con đường cách mạng, từ xây dựng lý luận đến chỉ đạo thực tiễn.
              </p>
              <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/30">
                <p className="text-orange-300 font-medium text-center text-sm">
                  <strong>"Ngọn đèn soi đường cho cách mạng Việt Nam"</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


