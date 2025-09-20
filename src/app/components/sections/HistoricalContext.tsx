import { Flag, Globe, ArrowRight } from "lucide-react";

export default function HistoricalContext() {
  return (
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

        <div className="grid md:grid-cols-2 gap-8 relative">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-6 rounded-2xl border border-red-500/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Flag className="h-5 w-5 mr-2 text-red-400" />
                Thực tiễn Việt Nam
              </h4>
              
              {/* Hình ảnh lịch sử Việt Nam */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-white mb-4 text-center">
                  <a 
                    href="https://nhiepanhdoisong.vn/hinh-anh-viet-nam-cuoi-the-ky-xix-dau-the-ky-xx-14677.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer underline decoration-yellow-400 hover:decoration-white"
                  >
                    Hình ảnh lịch sử Việt Nam cuối thế kỷ XIX - đầu thế kỷ XX
                  </a>
                </h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/30 p-3 rounded-xl border border-slate-600/30">
                    <div className="aspect-video rounded-lg overflow-hidden mb-3">
                      <img 
                        src="/cho_hom_duc_vien_hn.jpg" 
                        alt="Bối cảnh trong nước Việt Nam cuối thế kỷ XIX - đầu thế kỷ XX" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-red-300 font-medium mb-1">Cuối thế kỷ XIX</p>
                      <p className="text-xs text-gray-400">
                        Tình hình xã hội Việt Nam dưới ách thống trị của thực dân Pháp, 
                        sự khủng hoảng của chế độ phong kiến và các phong trào yêu nước.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/30 p-3 rounded-xl border border-slate-600/30">
                    <div className="aspect-video rounded-lg overflow-hidden mb-3">
                      <img 
                        src="/vietnamdauthekixxsgklich-su.jpg" 
                        alt="Việt Nam đầu thế kỷ XX - lịch sử" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-red-300 font-medium mb-1">Đầu thế kỷ XX</p>
                      <p className="text-xs text-gray-400">
                        Giai đoạn chuyển giao quan trọng với sự xuất hiện của các tầng lớp xã hội mới 
                        và những thay đổi trong đời sống kinh tế, chính trị, văn hóa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Khủng hoảng phong kiến</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Thất bại phong trào yêu nước theo tư tưởng cũ</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Nỗi đau mất nước</p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Bối cảnh xã hội khi thực dân Pháp xâm lược và đặt ách đô hộ đã đặt ra vấn đề tồn vong dân tộc.
                  Đây là động lực mạnh mẽ thúc đẩy Nguyễn Tất Thành (sau này là Hồ Chí Minh) ra đi tìm đường cứu nước.
                </p>
                <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                  <p className="text-red-300 font-medium text-center">
                    <strong>Bối cảnh này đặt ra yêu cầu phải tìm một con đường cứu nước mới.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-blue-400" />
                Thực tiễn thế giới
              </h4>
              
              {/* Hình ảnh Cách mạng Tháng Mười Nga */}
              <div className="mb-4">
                <h5 className="text-lg font-semibold text-blue-300 mb-4 text-center">
                  <a 
                    href="https://hvlq.vn/trang-chu/hoc-tap-va-lam-theo-tu-tuong-dao-duc-phong-cach-ho-chi-minh/tu-tuong-ho-chi-minh/cach-mang-thang-muoi-nga-la-thuc-tien-sinh-dong-dinh-huong-tu-tuong-ho-chi-minh-ve-con-duong-cuu-nuoc-giai-phong-dan-toc.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer underline decoration-blue-300 hover:decoration-yellow-400"
                  >
                    Cách mạng Tháng Mười Nga (1917) - Mở ra thời đại cách mạng vô sản
                  </a>
                </h5>
                <div className="aspect-video rounded-xl overflow-hidden mb-3">
                  <img 
                    src="/cmt10Nga.png" 
                    alt="Cách mạng Tháng Mười Nga 1917" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
               
              </div>
              
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Chủ nghĩa tư bản chuyển sang đế quốc chủ nghĩa</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Bóc lột thuộc địa lan rộng</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Thắng lợi Cách mạng Tháng Mười Nga 1917</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Mở ra thời đại cách mạng vô sản</p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Bối cảnh quốc tế này đã cung cấp những tiền đề quan trọng, đặc biệt là chủ nghĩa Mác - Lênin,
                  để Hồ Chí Minh tiếp thu và lựa chọn con đường cách mạng.
                </p>
                <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <p className="text-blue-300 font-medium text-center">
                    <strong>Bối cảnh này mở đường để Nguyễn Ái Quốc đến với chủ nghĩa Mác – Lênin.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


