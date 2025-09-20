import { Calendar, X, ZoomIn } from "lucide-react";
import { useState } from "react";

const timelinePeriods = [
  { 
    period: "Trước 5-6-1911", 
    title: "Hình thành tư tưởng yêu nước", 
    timeMarker: "1890-1911",
    color: "from-red-500 to-pink-500",
    image: "/nhabac.jpg",
    imageAlt: "Ngôi nhà quê ngoại của Bác ở làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An",
    content: "Sinh ngày 19/5/1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An. Trong thời niên thiếu, Nguyễn Sinh Cung (Nguyễn Tất Thành) đã chứng kiến cảnh đất nước mất độc lập, phong trào yêu nước thất bại. Từ đó hình thành tư tưởng yêu nước, thương dân, chí hướng tìm con đường cứu nước mới khác với các phong trào cũ.",
    highlight: "Quyết tâm: 'Tự do cho đồng bào tôi, độc lập cho Tổ quốc tôi'"
  },
  { 
    period: "5-6-1911 → 12-1920", 
    title: "Hành trình tìm đường cứu nước", 
    timeMarker: "1911-1920",
    color: "from-orange-500 to-red-500",
    image: "/bennharong_1911.jpg",
    imageAlt: "Bến cảng Nhà Rồng 1911 - Nơi bắt đầu hành trình",
    content: "5-6-1911: Từ Bến cảng Nhà Rồng, thành phố Sài Gòn, người thanh niên yêu nước Nguyễn Tất Thành lên con tàu Amiral Latouche Tréville đi Marseille (Pháp) với tên Văn Ba, làm phụ bếp. Với đôi bàn tay trắng, Người ra đi trong tư cách một người lao động. 30 năm bôn ba qua 3 đại dương, 4 châu lục, gần 30 quốc gia, hàng trăm thành phố. Làm nhiều nghề: phụ bếp, cào tuyết, đốt lò, chụp ảnh, làm vườn, vẽ thuê... 1920: Đọc 'Luận cương của Lênin về vấn đề dân tộc và thuộc địa' → bước ngoặt quyết định.",
    highlight: "Quyết tâm: 'Tự do cho đồng bào tôi, độc lập cho Tổ quốc tôi, đấy là tất cả những điều tôi muốn, đấy là tất cả những điều tôi hiểu'"
  },
  { 
    period: "1920 → 2-1930", 
    title: "Hình thành nội dung cơ bản", 
    timeMarker: "1920-1930",
    color: "from-yellow-500 to-orange-500",
    image: "/hoinghithanhlapdcsvn_1930.jpg",
    imageAlt: "Nguyễn Ái Quốc tại Hội nghị thành lập Đảng Cộng sản Việt Nam 1930. Ảnh vẽ của họa sĩ Phan Kế An",
    content: "1917: Cách mạng Tháng Mười Nga thành công ảnh hưởng lớn đến nhận thức. 18-6-1919: Gửi bản yêu sách 8 điểm tới Hội nghị Vécxây với tên Nguyễn Ái Quốc, yêu cầu quyền tự do, dân chủ, bình đẳng dân tộc cho nhân dân An Nam. 7-1920: Đọc 'Sơ thảo lần thứ nhất luận cương về các vấn đề dân tộc và thuộc địa' của Lênin. 12-1920: Bỏ phiếu tán thành gia nhập Quốc tế III. 1924: Về Quảng Châu, xuất bản Báo Thanh Niên (21-6-1925) - tờ báo cách mạng đầu tiên của Việt Nam. Tác phẩm: 'Bản án chế độ thực dân Pháp', 'Đường Kách mệnh' (1927). 3-2-1930: Khi điều kiện thành lập Đảng đã chín muồi, dưới sự chủ trì của đồng chí Nguyễn Ái Quốc, tại Hương Cảng (Trung Quốc), Hội nghị hợp nhất 3 tổ chức cộng sản đã nhất trí thành lập một đảng thống nhất là Đảng Cộng sản Việt Nam.",
    highlight: "Kết luận: 'Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản'"
  },
  { 
    period: "1930 → 1941", 
    title: "Vượt qua thử thách", 
    timeMarker: "1930-1941",
    color: "from-green-500 to-blue-500",
    image: "/xoviet_nghetinh.jpg",
    imageAlt: "Cao trào Xô Viết Nghệ Tĩnh 1930-1931 - 'Tiếng trống 30' mở đầu giai đoạn cách mạng từ đấu tranh tự phát sang đấu tranh tự giác",
    content: "Trong thời kỳ 1930-1941, Việt Nam đã vượt qua thử thách lớn bằng cách giữ vững đường lối cách mạng, thích ứng với xu hướng chính trị phức tạp của Quốc tế Cộng sản, và xây dựng Khối Liên minh Công-Nông. Cao trào Xô Viết Nghệ Tĩnh 1930-1931 là minh chứng cho sự phát triển mạnh mẽ của phong trào cách mạng, tuy thất bại nhưng để lại kinh nghiệm quý báu, góp phần định hình và củng cố lập trường cách mạng của Đảng Cộng sản Việt Nam. Hồ Chí Minh tiếp tục hoạt động ở quốc tế, chuẩn bị lực lượng cho cách mạng trong nước.",
    highlight: "Kiên định: Giữ vững đường lối cách mạng đúng đắn trong mọi hoàn cảnh"
  },
  { 
    period: "1941 → 1969", 
    title: "Soi đường cho sự nghiệp", 
    timeMarker: "1941-1969",
    color: "from-blue-500 to-purple-500",
    image: "/cachmangthang8_1945.jpg",
    imageAlt: "Cách mạng Tháng Tám 1945 - Thành công vĩ đại",
    content: "28-1-1941 (mồng 2 Tết Tân Tỵ): Vượt qua cột mốc 108 trên biên giới Việt Nam - Trung Quốc, tại làng Pác Bó, xã Trường Hà, huyện Hà Quảng, tỉnh Cao Bằng, trở về Tổ quốc sau 30 năm bôn ba tìm đường cứu nước, cứu dân để trực tiếp lãnh đạo cách mạng Việt Nam. 5-1941: Chủ trì Hội nghị Trung ương VIII (khóa I) ở Khuổi Nậm, Pác Bó, quyết định sự chuyển hướng chỉ đạo chiến lược - khẳng định giải phóng dân tộc là nhiệm vụ hàng đầu, thành lập Mặt trận Việt Minh. 8-1945: Lãnh đạo Cách mạng Tháng Tám thành công, lập nên nước Việt Nam Dân chủ Cộng hòa - Nhà nước dân chủ nhân dân đầu tiên ở Đông Nam Á. Kháng chiến chống Pháp, Mỹ: phát triển tư tưởng kháng chiến toàn dân, toàn diện, lâu dài, tự lực cánh sinh. 1969: Hệ thống tư tưởng hoàn chỉnh, trở thành 'ngọn đèn soi đường cho cách mạng Việt Nam'.",
    highlight: "Thành tựu: Từ Sài Gòn ra đi (1911) → Sài Gòn giải phóng (1975) - Trọn vẹn sự nghiệp"
  },
];

export default function DevelopmentTimeline() {
  const [zoomedImage, setZoomedImage] = useState<{src: string, alt: string} | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setZoomedImage({ src, alt });
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

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
              return (
                <div key={index} className="relative flex items-center space-x-4 md:space-x-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center z-10 flex-shrink-0 border-2 border-white/20`}>
                    <div className="text-center">
                      <div className="text-white font-bold text-xs leading-tight">{item.timeMarker}</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex-1 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm mb-4 font-medium">{item.period}</p>
                        
                        {/* Highlight box */}
                        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-3 mb-4 border border-orange-500/30">
                          <p className="text-orange-300 text-sm font-medium italic">
                            {item.highlight}
                          </p>
                        </div>
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.content}</p>
                      </div>
                      
                      {/* Image section */}
                      <div className="lg:w-80 flex-shrink-0">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 relative group cursor-pointer" onClick={() => handleImageClick(item.image, item.imageAlt)}>
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                        <p className="text-gray-400 text-xs text-center italic mb-3">
                          {item.imageAlt}
                        </p>
                        
                        {/* Additional images for specific periods */}
                        {item.timeMarker === "1911-1920" && (
                          <div className="mt-3">
                            <div className="aspect-video rounded-xl overflow-hidden mb-2 relative group cursor-pointer" onClick={() => handleImageClick("/soluong_1911.jpg", "Trang sổ lương tàu Amiral Latouche Tréville 1911 - Thủy thủ Văn Ba")}>
                              <img
                                src="/soluong_1911.jpg"
                                alt="Trang sổ lương tàu Amiral Latouche Tréville 1911 - Thủy thủ Văn Ba"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                            <p className="text-gray-400 text-xs text-center italic">
                              Trang sổ lương tàu Amiral Latouche Tréville 1911 - Thủy thủ Văn Ba (Hồ Chí Minh)
                            </p>
                          </div>
                        )}
                        
                        {item.timeMarker === "1920-1930" && (
                          <div className="mt-3 space-y-3">
                            <div className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer" onClick={() => handleImageClick("/12_1920_daihoi18.jpg", "Đại hội lần thứ 18 Đảng Xã hội Pháp tại Tours, tháng 12-1920")}>
                              <img
                                src="/12_1920_daihoi18.jpg"
                                alt="Đại hội lần thứ 18 Đảng Xã hội Pháp tại Tours, tháng 12-1920"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                            <p className="text-gray-400 text-xs text-center italic">
                              <strong>Ảnh trái:</strong> Toàn cảnh Đại hội đại biểu toàn quốc lần thứ 18 Đảng Xã hội Pháp ở thành Tours, Nguyễn Ái Quốc tham dự với tư cách là đại biểu Đông Dương, tháng 12-1920.<br/>
                              <strong>Ảnh phải:</strong> Từ ngày 25 đến ngày 30-12-1920, chàng thanh niên yêu nước Nguyễn Ái Quốc tham dự Đại hội lần thứ 18 Đảng Xã hội Pháp ở thành phố Tours với tư cách đại biểu Đông Dương.
                            </p>
                            
                            <div className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer" onClick={() => handleImageClick("/taiquangchau_giangbaitap.jpg", "Nguyễn Ái Quốc giảng bài tại lớp huấn luyện cán bộ cách mạng tại Quảng Châu")}>
                              <img
                                src="/taiquangchau_giangbaitap.jpg"
                                alt="Nguyễn Ái Quốc giảng bài tại lớp huấn luyện cán bộ cách mạng tại Quảng Châu"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                            <p className="text-gray-400 text-xs text-center italic">
                              Nguyễn Ái Quốc giảng bài tại lớp huấn luyện cán bộ cách mạng tại Quảng Châu
                            </p>
                          </div>
                        )}
                        
                        {item.timeMarker === "1930-1941" && (
                          <div className="mt-3">
                            <div className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer" onClick={() => handleImageClick("/3_1930.jpg", "Hội nghị thành lập Đảng Cộng sản Việt Nam ngày 03/02/1930")}>
                              <img
                                src="/3_1930.jpg"
                                alt="Hội nghị thành lập Đảng Cộng sản Việt Nam ngày 03/02/1930"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                            <p className="text-gray-400 text-xs text-center italic">
                              Hội nghị thành lập Đảng Cộng sản Việt Nam ngày 03/02/1930. (Ảnh chụp lại tranh của họa sĩ Phi Hoanh tại Bảo tàng Lịch sử Quốc gia)
                            </p>
                          </div>
                        )}
                        
                        {item.timeMarker === "1941-1969" && (
                          <div className="mt-3 space-y-3">
                            <div className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer" onClick={() => handleImageClick("/28_1_1941.jpg", "Ngày 28-1-1941 (mồng 2 Tết Tân Tỵ), Người trở về Tổ quốc sau 30 năm bôn ba tìm đường cứu nước")}>
                              <img
                                src="/28_1_1941.jpg"
                                alt="Ngày 28-1-1941 (mồng 2 Tết Tân Tỵ), Người trở về Tổ quốc sau 30 năm bôn ba tìm đường cứu nước"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                            <p className="text-gray-400 text-xs text-center italic">
                              Ngày 28-1-1941 (mồng 2 Tết Tân Tỵ), Người trở về Tổ quốc sau 30 năm bôn ba tìm đường cứu nước, cứu dân để trực tiếp lãnh đạo cách mạng Việt Nam
                            </p>
                            
                            <div className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer" onClick={() => handleImageClick("/mattranvietminh.jpg", "Hội nghị Trung ương VIII và thành lập Mặt trận Việt Minh")}>
                              <img
                                src="/mattranvietminh.jpg"
                                alt="Hội nghị Trung ương VIII và thành lập Mặt trận Việt Minh"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                            <p className="text-gray-400 text-xs text-center italic">
                              <strong>Ảnh trái:</strong> Lán Khuổi Nậm ở Pác Bó, nơi diễn ra Hội nghị Trung ương VIII (5-1941).<br/>
                              <strong>Ảnh giữa:</strong> Nghị quyết Hội nghị Trung ương VIII, tháng 5-1941.<br/>
                              <strong>Ảnh phải:</strong> Mười chính sách lớn của Mặt trận Việt Minh, năm 1941.
                            </p>
                          </div>
                        )}
                      </div>
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
                <li>• <strong>18-6-1919:</strong> Gửi bản yêu sách 8 điểm tại Hội nghị Vécxây</li>
                <li>• <strong>1920:</strong> Đọc Luận cương Lênin - bước ngoặt quyết định</li>
                <li>• <strong>21-6-1925:</strong> Xuất bản Báo Thanh Niên - tờ báo cách mạng đầu tiên</li>
                <li>• <strong>3-2-1930:</strong> Thành lập Đảng Cộng sản Việt Nam</li>
                <li>• <strong>5-1941:</strong> Hội nghị Trung ương VIII - khẳng định giải phóng dân tộc</li>
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

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={closeZoom}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={zoomedImage.src}
                alt={zoomedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg text-sm text-center max-w-md">
              {zoomedImage.alt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


