import { ExternalLink, Users } from "lucide-react";
import Link from "next/link";

export default function PartyApplication() {
  return (
    <section className="group">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">
              Sự vận dụng của Đảng
            </h3>
            <p className="text-gray-400">Trong hai giai đoạn cách mạng</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-6 rounded-2xl border border-red-500/30">
            <h4 className="text-xl font-bold text-white mb-6">
              1. Trong cách mạng dân tộc dân chủ nhân dân
            </h4>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p className="mb-4">
                Trong cách mạng dân tộc dân chủ nhân dân, Đảng ta đã vận dụng tư
                tưởng Hồ Chí Minh với mấy điểm cốt lõi:
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Độc lập dân tộc là mục tiêu hàng đầu
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Lựa chọn con đường cách mạng vô sản
                    </p>
                    <p className="text-gray-400">
                      thay cho con đường phong kiến và tư sản vốn đã thất bại
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Xây dựng khối đại đoàn kết toàn dân
                    </p>
                    <p className="text-gray-400">
                      lúc bấy giờ dựa trên liên minh công – nông. Về sau, trong
                      giai đoạn hiện nay, mở rộng thành công – nông – trí dưới
                      sự lãnh đạo của Đảng
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Khẳng định vai trò lãnh đạo của Đảng Cộng sản
                    </p>
                    <p className="text-gray-400">
                      đội tiên phong của giai cấp công nhân
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                <p className="text-white font-medium">
                  ⇒ Nhờ đó, Cách mạng Tháng Tám năm 1945 đã thắng lợi, dân tộc
                  ta giành được độc lập, mở ra một kỷ nguyên mới.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-500/30">
            <h4 className="text-xl font-bold text-white mb-6">
              2. Trong cách mạng xã hội chủ nghĩa
            </h4>
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Đảng ta kiên định mục tiêu đi lên CNXH
                    </p>
                    <p className="text-gray-400">
                      Đây không chỉ là con đường mà Bác Hồ đã lựa chọn, mà còn
                      là sự khẳng định về tương lai phát triển tất yếu của dân
                      tộc
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Xây dựng Đảng và Nhà nước của nhân dân
                    </p>
                    <p className="text-gray-400">
                      do nhân dân và vì nhân dân. Đây chính là nền tảng để bảo
                      đảm quyền làm chủ thực sự thuộc về nhân dân
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Xây dựng nền văn hóa mới, con người mới XHCN
                    </p>
                    <p className="text-gray-400">
                      với những giá trị đạo đức, lối sống, tinh thần đoàn kết,
                      sáng tạo, vì lợi ích chung
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Độc lập dân tộc gắn liền với CNXH
                    </p>
                    <p className="text-gray-400">
                      Đây chính là sợi chỉ đỏ dẫn dắt cách mạng Việt Nam, bảo
                      đảm cho dân tộc ta vừa giữ vững độc lập, vừa tiến lên con
                      đường phát triển bền vững
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-white font-medium">
                  Nhờ vận dụng tư tưởng Hồ Chí Minh, cách mạng xã hội chủ nghĩa
                  ở Việt Nam đã đạt được nhiều thành tựu to lớn, tạo tiền đề để
                  đất nước tiếp tục đổi mới và hội nhập như hôm nay.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Phát triển kinh tế thị trường định hướng XHCN */}
        <div className="mt-8">
          <h4 className="text-2xl font-bold text-white mb-6 text-center">
            Phát triển kinh tế thị trường định hướng XHCN
          </h4>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* a. Xây dựng nền kinh tế thị trường có sự quản lý của Nhà nước */}
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-6 rounded-2xl border border-green-500/30">
              <h5 className="text-lg font-bold text-white mb-4">
                a. Xây dựng nền kinh tế thị trường có sự quản lý của Nhà nước
              </h5>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>
                  Mô hình kinh tế thị trường định hướng XHCN được xác định từ
                  Đại hội Đảng VI (1986) với công cuộc Đổi mới.
                </p>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">
                        Chính sách quản lý của Nhà nước:
                      </p>
                      <Link
                        href="https://thuvienphapluat.vn/van-ban/Doanh-nghiep/Luat-Dau-tu-so-61-2020-QH14-321051.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                      >
                        Luật Doanh nghiệp (2020), Luật Đầu tư (2020) tạo môi
                        trường pháp lý minh bạch
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">
                        Định hướng XHCN:
                      </p>
                      <Link
                        href="https://molisa.gov.vn/baiviet/228634?tintucID=228634"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                      >
                        Chương trình xóa đói giảm nghèo, hỗ trợ y tế và giáo dục
                        miễn phí
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">Thành tựu:</p>
                      <Link
                        href="https://molisa.gov.vn/baiviet/238069"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                      >
                        Tỷ lệ hộ nghèo giảm xuống 2,93% (2022)
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* b. Kết hợp tăng trưởng kinh tế với bảo đảm tiến bộ và công bằng xã hội */}
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-6 rounded-2xl border border-blue-500/30">
              <h5 className="text-lg font-bold text-white mb-4">
                b. Kết hợp tăng trưởng kinh tế với tiến bộ xã hội
              </h5>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>
                  Việt Nam đặt mục tiêu tăng trưởng kinh tế đi đôi với tiến bộ
                  và công bằng xã hội.
                </p>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">
                        Tăng trưởng kinh tế:
                      </p>
                      <Link
                        href="https://tuoitre.vn/viet-nam-dat-muc-tieu-thu-nhap-5000-usd-nguoi-vao-nam-2025-20200929161623221.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                      >
                        GDP bình quân đầu người tăng từ 2.750 USD (2015) lên
                        4.316 USD (2023)
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">
                        Tiến bộ xã hội:
                      </p>
                      <Link
                        href="https://vneconomy.vn/hon-91-trieu-nguoi-tham-gia-bao-hiem-y-te-bao-phu-tren-92-dan-so.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                      >
                        Bảo hiểm y tế toàn dân đạt 92% dân số (2023)
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">Thách thức:</p>
                      <Link
                        href="https://careerviet.vn/vi/talentcommunity/ty-le-that-nghiep-o-thanh-thi-cao-hon-nong-thon.35A4EEFD.html#:~:text=Nguy%C3%AAn%20nh%C3%A2n%20t%E1%BB%B7%20l%E1%BB%87%20th%E1%BA%A5t,c%C6%A1%20h%E1%BB%99i%20t%C3%ACm%20vi%E1%BB%87c%20l%C3%A0m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 text-xs font-medium transition-all duration-200 hover:underline decoration-yellow-400/50 underline-offset-2 hover:scale-105"
                      >
                        Chênh lệch giàu nghèo giữa thành thị và nông thôn
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* c. Công nghiệp hóa, hiện đại hóa gắn với CMCN 4.0 */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30">
              <h5 className="text-lg font-bold text-white mb-4">
                c. Công nghiệp hóa, hiện đại hóa gắn với CMCN 4.0
              </h5>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>
                  Việt Nam tích cực thúc đẩy công nghiệp hóa, hiện đại hóa, tận
                  dụng CMCN 4.0.
                </p>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">CMCN 4.0:</p>
                      <Link
                        href="https://thuvienphapluat.vn/van-ban/Cong-nghe-thong-tin/Quyet-dinh-2289-QD-TTg-2020-Chien-luoc-quoc-gia-ve-Cach-mang-cong-nghiep-lan-thu-tu-den-2030-461337.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                      >
                        Chiến lược quốc gia về CMCN 4.0 đến 2030 (Quyết định
                        2289/QĐ-TTg, 2020)
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">
                        Hội nhập quốc tế:
                      </p>
                      <Link
                        href="https://trungtamwto.vn/thong-ke/12065-tong-hop-cac-fta-cua-viet-nam-tinh-den-thang-112018"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                      >
                        Tham gia 16 FTA (CPTPP, RCEP, EVFTA)
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-white">Thành tựu:</p>
                      <Link
                        href="https://trungtamwto.vn/thi-truong-duc/25367-can-can-thuong-mai-hang-hoa-nam-2023-uoc-tinh-xuat-sieu-28-ty-usd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                      >
                        Kim ngạch xuất khẩu đạt 355,5 tỷ USD (2023)
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chuyển đổi số và công nghệ */}
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30">
            <h5 className="text-lg font-bold text-white mb-4">
              Chuyển đổi số và phát triển công nghệ
            </h5>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h6 className="font-semibold text-orange-300">
                  Thành tựu chuyển đổi số Nhà nước:
                </h6>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>
                    • Hạ tầng số quốc gia: mạng truyền số liệu chuyên dùng
                  </li>
                  <li>
                    • Nền tảng số quốc gia: chính phủ số, kinh tế số, xã hội số
                  </li>
                  <li>• Dịch vụ công trực tuyến được đẩy mạnh</li>
                  <li>• Hệ thống CSDL quốc gia được kết nối, chia sẻ</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h6 className="font-semibold text-orange-300">
                  Ví dụ cụ thể - FPT:
                </h6>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• AI Factory - Nhà máy AI hợp tác với NVIDIA</li>
                  <li>• Đầu tư R&D trong 7/11 nhóm công nghệ chiến lược</li>
                  <li>• Phát triển năng lực AI và công nghệ bán dẫn</li>
                  <li>
                    • Giải pháp chuyển đổi số cho y tế, tài chính, sản xuất
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
