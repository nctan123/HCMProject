import { Calendar, Star, Award, Sparkles, Heart, Flag } from "lucide-react";

const timelinePeriods = [
  { period: "Trước 5-6-1911", title: "Hình thành tư tưởng yêu nước", icon: Heart, color: "from-red-500 to-pink-500" },
  { period: "5-6-1911 → 30-12-1920", title: "Con đường cách mạng vô sản", icon: Flag, color: "from-orange-500 to-red-500" },
  { period: "31-12-1920 → 2-9-1930", title: "Nội dung cơ bản cách mạng", icon: Star, color: "from-yellow-500 to-orange-500" },
  { period: "2-9-1930 → 28-1-1941", title: "Vượt qua thử thách", icon: Award, color: "from-green-500 to-blue-500" },
  { period: "29-1-1941 → 2-9-1969", title: "Soi đường cho sự nghiệp", icon: Sparkles, color: "from-blue-500 to-purple-500" },
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
  );
}


