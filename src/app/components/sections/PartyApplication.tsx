"use client";
import {ChevronDown, ChevronUp, ExternalLink, Users} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

export default function PartyApplication() {
    const [isSection1Open, setIsSection1Open] = useState(true);
    const [isSection2Open, setIsSection2Open] = useState(true);
    const [isEconomicSectionOpen, setIsEconomicSectionOpen] = useState(true);

    return (
        <section className="group">
            <div
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
                        <Users className="h-8 w-8 text-white"/>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                            Sự vận dụng của Đảng
                        </h3>
                        <p className="text-gray-400">Trong hai giai đoạn cách mạng</p>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <div
                        className="w-full bg-gradient-to-br from-red-500/20 to-orange-500/20 p-8 rounded-2xl border border-red-500/30">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-2xl font-bold text-white">
                                1. Trong cách mạng dân tộc dân chủ nhân dân
                            </h4>
                            <button
                                onClick={() => setIsSection1Open(!isSection1Open)}
                                className="flex items-center justify-center w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-all duration-200 group"
                            >
                                {isSection1Open ? (
                                    <ChevronUp
                                        className="w-5 h-5 text-white group-hover:scale-110 transition-transform"/>
                                ) : (
                                    <ChevronDown
                                        className="w-5 h-5 text-white group-hover:scale-110 transition-transform"/>
                                )}
                            </button>
                        </div>
                        {isSection1Open && (
                            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                                <p className="mb-4">
                                    Trong cách mạng dân tộc dân chủ nhân dân, Đảng ta đã vận dụng tư
                                    tưởng Hồ Chí Minh với mấy điểm cốt lõi:
                                </p>

                                <div className="flex flex-col space-y-4">
                                    <div
                                        className="flex items-start space-x-4 p-4 bg-red-500/10 rounded-xl border-l-4 border-red-400">
                                        <div
                                            className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm font-bold">1</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-white text-lg mb-2">
                                                Độc lập dân tộc là mục tiêu hàng đầu
                                            </h5>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start space-x-4 p-4 bg-orange-500/10 rounded-xl border-l-4 border-orange-400">
                                        <div
                                            className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm font-bold">2</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-white text-lg mb-2">
                                                Lựa chọn con đường cách mạng vô sản
                                            </h5>
                                            <p className="text-gray-300">
                                                thay cho con đường phong kiến và tư sản vốn đã thất bại
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start space-x-4 p-4 bg-yellow-500/10 rounded-xl border-l-4 border-yellow-400">
                                        <div
                                            className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm font-bold">3</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-white text-lg mb-2">
                                                Xây dựng khối đại đoàn kết toàn dân
                                            </h5>
                                            <p className="text-gray-300">
                                                lúc bấy giờ dựa trên liên minh công – nông. Về sau, trong
                                                giai đoạn hiện nay, mở rộng thành công – nông – trí dưới
                                                sự lãnh đạo của Đảng
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start space-x-4 p-4 bg-pink-500/10 rounded-xl border-l-4 border-pink-400">
                                        <div
                                            className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm font-bold">4</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-white text-lg mb-2">
                                                Khẳng định vai trò lãnh đạo của Đảng Cộng sản
                                            </h5>
                                            <p className="text-gray-300">
                                                đội tiên phong của giai cấp công nhân
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="mt-6 p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl border border-red-400/50 shadow-lg">
                                    <div className="flex items-center mb-3">
                                        <div
                                            className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white text-sm">🎯</span>
                                        </div>
                                        <h6 className="text-white font-bold text-lg">Kết quả đạt được</h6>
                                    </div>
                                    <p className="text-white font-medium text-lg leading-relaxed">
                                        Nhờ đó, Cách mạng Tháng Tám năm 1945 đã thắng lợi, dân tộc
                                        ta giành được độc lập, mở ra một kỷ nguyên mới.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-blue-500/30">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-2xl font-bold text-white">
                                2. Trong cách mạng xã hội chủ nghĩa
                            </h4>
                            <button
                                onClick={() => setIsSection2Open(!isSection2Open)}
                                className="flex items-center justify-center w-10 h-10 bg-blue-500/20 hover:bg-blue-500/30 rounded-full transition-all duration-200 group"
                            >
                                {isSection2Open ? (
                                    <ChevronUp
                                        className="w-5 h-5 text-white group-hover:scale-110 transition-transform"/>
                                ) : (
                                    <ChevronDown
                                        className="w-5 h-5 text-white group-hover:scale-110 transition-transform"/>
                                )}
                            </button>
                        </div>
                        {isSection2Open && (
                            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                                <div className="flex flex-col space-y-4">
                                    <div
                                        className="flex items-start space-x-4 p-4 bg-blue-500/10 rounded-xl border-l-4 border-blue-400">
                                        <div
                                            className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm font-bold">1</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-white text-lg mb-2">
                                                Đảng ta kiên định mục tiêu đi lên CNXH
                                            </h5>
                                            <p className="text-gray-300">
                                                Đây không chỉ là con đường mà Bác Hồ đã lựa chọn, mà còn
                                                là sự khẳng định về tương lai phát triển tất yếu của dân
                                                tộc
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start space-x-4 p-4 bg-indigo-500/10 rounded-xl border-l-4 border-indigo-400">
                                        <div
                                            className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm font-bold">2</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-white text-lg mb-2">
                                                Xây dựng Đảng và Nhà nước của nhân dân
                                            </h5>
                                            <p className="text-gray-300">
                                                do nhân dân và vì nhân dân. Đây chính là nền tảng để bảo
                                                đảm quyền làm chủ thực sự thuộc về nhân dân
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start space-x-4 p-4 bg-teal-500/10 rounded-xl border-l-4 border-teal-400">
                                        <div
                                            className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm font-bold">3</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-white text-lg mb-2">
                                                Xây dựng nền văn hóa mới, con người mới XHCN
                                            </h5>
                                            <p className="text-gray-300">
                                                với những giá trị đạo đức, lối sống, tinh thần đoàn kết,
                                                sáng tạo, vì lợi ích chung
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-start space-x-4 p-4 bg-purple-500/10 rounded-xl border-l-4 border-purple-400">
                                        <div
                                            className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white text-sm font-bold">4</span>
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-white text-lg mb-2">
                                                Độc lập dân tộc gắn liền với CNXH
                                            </h5>
                                            <p className="text-gray-300">
                                                Đây chính là sợi chỉ đỏ dẫn dắt cách mạng Việt Nam, bảo
                                                đảm cho dân tộc ta vừa giữ vững độc lập, vừa tiến lên con
                                                đường phát triển bền vững
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="mt-6 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/50 shadow-lg">
                                    <div className="flex items-center mb-3">
                                        <div
                                            className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white text-sm">🏆</span>
                                        </div>
                                        <h6 className="text-white font-bold text-lg">Thành tựu đạt được</h6>
                                    </div>
                                    <p className="text-white font-medium text-lg leading-relaxed">
                                        Nhờ vận dụng tư tưởng Hồ Chí Minh, cách mạng xã hội chủ nghĩa
                                        ở Việt Nam đã đạt được nhiều thành tựu to lớn, tạo tiền đề để
                                        đất nước tiếp tục đổi mới và hội nhập như hôm nay.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Phát triển kinh tế thị trường định hướng XHCN */}
                <div className="mt-8">
                    <div className="flex items-center justify-between mb-6">
                        <h4 className="text-2xl font-bold text-white">
                            Phát triển kinh tế thị trường định hướng XHCN
                        </h4>
                        <button
                            onClick={() => setIsEconomicSectionOpen(!isEconomicSectionOpen)}
                            className="flex items-center justify-center w-10 h-10 bg-green-500/20 hover:bg-green-500/30 rounded-full transition-all duration-200 group"
                        >
                            {isEconomicSectionOpen ? (
                                <ChevronUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform"/>
                            ) : (
                                <ChevronDown className="w-5 h-5 text-white group-hover:scale-110 transition-transform"/>
                            )}
                        </button>
                    </div>

                    {isEconomicSectionOpen && (
                        <div className="flex flex-col space-y-8 mb-8">
                            {/* a. Xây dựng nền kinh tế thị trường có sự quản lý của Nhà nước */}
                            <div
                                className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-8 rounded-2xl border border-green-500/30">
                                <h5 className="text-xl font-bold text-white mb-6 text-left">
                                    a. Xây dựng nền kinh tế thị trường có sự quản lý của Nhà nước
                                </h5>
                                <div className="space-y-4 text-gray-300 text-sm">
                                    <p className="text-left text-green-300 font-medium text-base mb-6">
                                        Mô hình kinh tế thị trường định hướng XHCN được xác định từ
                                        Đại hội Đảng VI (1986) với công cuộc Đổi mới
                                    </p>

                                    <div className="flex flex-col lg:flex-row gap-6">
                                        <div className="flex-1 flex items-start space-x-2">
                                            <div
                                                className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
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
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="flex-1 flex items-start space-x-2">
                                            <div
                                                className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-white">
                                                    Định hướng XHCN:
                                                </p>
                                                <Link
                                                    href="https://molisa.gov.vn/baiviet/228634?tintucID=228634"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Chương trình mục tiêu quốc gia giảm nghèo bền vững giai đoạn
                                                    2021-2025
                                                    góp phần giải quyết các vấn đề nghèo đói trọng tâm, trọng điểm, cấp
                                                    bách, có mục tiêu, có thời hạn đảm bảo quyền con người. Chương trình
                                                    tập
                                                    trung đầu tư phát triển hạ tầng kinh tế - xã hội vùng lõi nghèo,
                                                    nâng
                                                    cao thu nhập, chất lượng cuộc sống của người nghèo, đào tạo kỹ năng
                                                    nghề, tạo việc làm tốt, hỗ trợ đối tượng yếu thế không rơi vào tình
                                                    trạng nghèo đói.
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="flex-1 flex items-start space-x-2">
                                            <div
                                                className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-white">Thành tựu:</p>
                                                <Link
                                                    href="https://vneconomy.vn/den-nam-2025-phan-dau-giam-ty-le-ho-ngheo-ca-nuoc-duoi-1.htm#:~:text=Ch%C6%B0%C6%A1ng%20tr%C3%ACnh%20m%E1%BB%A5c%20ti%C3%AAu%20qu%E1%BB%91c,t%C3%A2m%20giai%20%C4%91o%E1%BA%A1n%202023%2D2025."
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Chương trình mục tiêu quốc gia giảm nghèo bền vững giai đoạn
                                                    2021-2025
                                                    bước đầu đã giảm tỷ lệ hộ nghèo bình quân 1- 1,5%/năm. Ước tỷ lệ hộ
                                                    nghèo theo chuẩn nghèo đa chiều năm 2023 còn 2,93%, phấn đấu đến năm
                                                    2025, tỷ lệ hộ nghèo cả nước còn khoảng 0,9%.
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* b. Kết hợp tăng trưởng kinh tế với bảo đảm tiến bộ và công bằng xã hội */}
                            <div
                                className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-8 rounded-2xl border border-blue-500/30">
                                <h5 className="text-xl font-bold text-white mb-6 text-left">
                                    b. Kết hợp tăng trưởng kinh tế với tiến bộ xã hội
                                </h5>
                                <div className="space-y-4 text-gray-300 text-sm">
                                    <p className="text-left text-blue-300 font-medium text-base mb-6">
                                        Việt Nam đặt mục tiêu tăng trưởng kinh tế đi đôi với tiến bộ
                                        và công bằng xã hội
                                    </p>

                                    <div className="flex flex-col lg:flex-row gap-6">
                                        <div className="flex-1 flex items-start space-x-2">
                                            <div
                                                className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-white">
                                                    Tăng trưởng kinh tế:
                                                </p>
                                                <Link
                                                    href="https://tuoitre.vn/viet-nam-dat-muc-tieu-thu-nhap-5000-usd-nguoi-vao-nam-2025-20200929161623221.htm"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Với tham vọng tăng trưởng GDP bình quân 5 năm khoảng 6,5-7%; GDP
                                                    bình quân
                                                    đầu người đến năm 2025 đạt 4.700-5.000 USD; tỉ trọng công nghiệp chế
                                                    biến,
                                                    chế tạo trong GDP đạt trên 25%; kinh tế số đạt khoảng 20% GDP.
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="flex-1 flex items-start space-x-2">
                                            <div
                                                className="w-1.5 h-1.5 bg-blue-400  rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-white">
                                                    Tiến bộ xã hội:
                                                </p>
                                                <Link
                                                    href="https://moh.gov.vn/tin-lien-quan/-/asset_publisher/vjYyM7O9aWnX/content/94-2-dan-so-tham-gia-bhyt-moi-nam-gan-200-trieu-luot-kham-chua-benh-bhyt"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    94,2% dân số tham gia BHYT, mỗi năm gần 200 triệu lượt khám chữa
                                                    bệnh BHYT
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="flex-1 flex items-start space-x-2">
                                            <div
                                                className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-white">Thách thức:</p>
                                                <Link
                                                    href="https://www.nso.gov.vn/tin-tuc-thong-ke/2023/11/su-khac-biet-ve-dieu-kien-song-giua-cac-tang-lop-dan-cu-o-viet-nam-nam-2022/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 text-xs font-medium transition-all duration-200 hover:underline decoration-yellow-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Cùng với những kết quả đạt được trong phát triển kinh tế. Đời sống
                                                    trong các
                                                    tầng lớp dân cư trong xã hội có nhiều cải thiện. Tuy nhiên, đời sống
                                                    dân cư
                                                    có sự khác biệt khá rõ rệt giữa các vùng, miền, giữa khu vực thành
                                                    thị và
                                                    nông thôn, giữa các nhóm thu nhập của các tầng lớp dân cư trong xã
                                                    hội.
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* c. Công nghiệp hóa, hiện đại hóa gắn với CMCN 4.0 */}
                            <div
                                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30">
                                <h5 className="text-xl font-bold text-white mb-6 text-left">
                                    c. Công nghiệp hóa, hiện đại hóa gắn với CMCN 4.0
                                </h5>
                                <div className="space-y-4 text-gray-300 text-sm">
                                    <p className="text-left text-purple-300 font-medium text-base mb-6">
                                        Việt Nam tích cực thúc đẩy công nghiệp hóa, hiện đại hóa, tận
                                        dụng CMCN 4.0
                                    </p>

                                    <div className="flex flex-col lg:flex-row gap-6">
                                        <div className="flex-1 flex items-start space-x-2">
                                            <div
                                                className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-white">CMCN 4.0:</p>
                                                <Link
                                                    href="https://thuvienphapluat.vn/van-ban/Cong-nghe-thong-tin/Quyet-dinh-2289-QD-TTg-2020-Chien-luoc-quoc-gia-ve-Cach-mang-cong-nghiep-lan-thu-tu-den-2030-461337.aspx"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Chiến lược quốc gia về CMCN 4.0 đến 2030 (Quyết định
                                                    2289/QĐ-TTg, 2020)
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="flex-1 flex items-start space-x-2">
                                            <div
                                                className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-white">
                                                    Hội nhập quốc tế:
                                                </p>
                                                <Link
                                                    href="https://trungtamwto.vn/thong-ke/12065-tong-hop-cac-fta-cua-viet-nam-tinh-den-thang-112018"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Việt Nam đã tham gia nhiều hiệp định thương mại tự do (FTA) quan
                                                    trọng, bao gồm
                                                    CPTPP, RCEP và
                                                    EVFTA, mở ra nhiều cơ hội và lợi thế cạnh tranh cho nền kinh tế. Tuy
                                                    nhiên, con
                                                    số chính xác mà
                                                    Việt Nam đã tham gia là 19 FTA, bao gồm cả các hiệp định song phương
                                                    và đa
                                                    phương như CPTPP,
                                                    RCEP, EVFTA, và các hiệp định khác như VIFTA, Việt Nam - UAE FTA,
                                                    trong đó 17
                                                    Hiệp định thương
                                                    mại tự do (FTA) của Việt Nam đã có hiệu lực.
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="flex-1 flex items-start space-x-2">
                                            <div
                                                className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-white">Thành tựu:</p>
                                                <div className="space-y-2">
                                                    <Link
                                                        href="https://trungtamwto.vn/thi-truong-duc/25367-can-can-thuong-mai-hang-hoa-nam-2023-uoc-tinh-xuat-sieu-28-ty-usd"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                    >
                                                        - CPTPP (Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình
                                                        Dương):
                                                        Tăng cường thương
                                                        mại
                                                        và thu hút đầu tư, tạo thuận lợi cho hàng hóa Việt Nam tiếp cận
                                                        các thị
                                                        trường lớn như
                                                        Canada,
                                                        Úc, Nhật Bản.
                                                        <ExternalLink className="w-3 h-3 opacity-70"/>
                                                    </Link>

                                                    <Link
                                                        href="https://trungtamwto.vn/thi-truong-duc/25367-can-can-thuong-mai-hang-hoa-nam-2023-uoc-tinh-xuat-sieu-28-ty-usd"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                    >
                                                        - RCEP (Hiệp định Đối tác Kinh tế Toàn diện Khu vực): Là khối
                                                        thương mại
                                                        lớn nhất thế giới,
                                                        bao gồm 10 nước ASEAN và 5 đối tác, tạo lợi thế về quy tắc xuất
                                                        xứ cho
                                                        hàng hóa của Việt
                                                        Nam.
                                                        <ExternalLink className="w-3 h-3 opacity-70"/>
                                                    </Link>

                                                    <Link
                                                        href="https://trungtamwto.vn/thi-truong-duc/25367-can-can-thuong-mai-hang-hoa-nam-2023-uoc-tinh-xuat-sieu-28-ty-usd"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                    >
                                                        - EVFTA (Hiệp định Thương mại tự do Việt Nam - EU): Giúp doanh
                                                        nghiệp
                                                        thủy sản nâng cao năng
                                                        lực quản trị và chất lượng, mở đường cho xuất khẩu sang thị
                                                        trường EU.
                                                        <ExternalLink className="w-3 h-3 opacity-70"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chuyển đổi số và công nghệ */}
                            <div
                                className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30">
                                <h5 className="text-lg font-bold text-white mb-4">
                                    Chuyển đổi số và phát triển công nghệ
                                </h5>
                                <Link
                                    href="https://www.tapchicongsan.org.vn/media-story/-/asset_publisher/V8hhp4dK31Gf/content/dot-pha-ve-khoa-hoc-cong-nghe-doi-moi-sang-tao-chuyen-doi-so-dong-luc-then-chot-de-dua-dan-toc-viet-nam-phat-trien-manh-me-trong-ky-nguyen-vuon-minh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                >
                                    Đột phá về khoa học - công nghệ, đổi mới sáng tạo, chuyển đổi số - Động lực then
                                    chốt để đưa
                                    dân tộc
                                    Việt Nam phát triển mạnh mẽ trong kỷ nguyên vươn mình
                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                </Link>
                                <div className="flex flex-col lg:flex-row gap-6">
                                    <div className="flex-1 space-y-3">
                                        <h6 className="font-semibold text-orange-300">
                                            Thành tựu chuyển đổi số Nhà nước:
                                        </h6>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>
                                                <Link
                                                    href="https://baochinhphu.vn/quy-dinh-moi-ve-hoat-dong-cua-mang-truyen-so-lieu-chuyen-dung-phuc-vu-cac-co-quan-dang-nha-nuoc-102250915174416725.htm"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Phó Thủ tướng Chính phủ Nguyễn Chí Dũng ký Quyết định số
                                                    33/2025/QĐ-TTg
                                                    ngày 15/9/2025 về Mạng truyền số liệu chuyên dùng phục vụ các cơ
                                                    quan
                                                    Đảng, Nhà nước.
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="https://sav.gov.vn/Pages/chi-tiet-tin.aspx?ItemID=39078&l=TinTucSuKien"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Nền tảng số quốc gia: Hướng tới Chính phủ số, nền kinh tế số, xã hội
                                                    số,
                                                    hệ thống CSDL quốc gia được kết nối, chia sẻ
                                                    công dân số
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="https://thuvienphapluat.vn/banan/tin-tuc/muc-tieu-den-nam-2025-thuc-hien-dich-vu-cong-truc-tuyen-toan-trinh-voi-100-tthc-du-dieu-kien-12783"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Mục tiêu đến năm 2025 thực hiện dịch vụ công trực tuyến toàn trình
                                                    với 100% TTHC đủ điều kiện
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>
                                                <Link
                                                    href="https://baochinhphu.vn/can-canh-hang-nghin-sieu-chip-nvidia-tai-nha-may-ai-dau-tien-cua-fpt-tai-viet-nam-102241207144649449.htm"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >(Chinhphu.vn) - Trang bị siêu chip NVIDIA GPU H100 tiên tiến bậc nhất
                                                    thế giới, FPT AI Factory tạo ra bước đột phá trong lĩnh vực trí tuệ
                                                    nhân tạo tại Việt Nam.
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="https://vnexpress.net/viet-nam-lam-chu-ba-san-pham-cong-nghe-chien-luoc-nam-nay-4932999.html"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Tại Diễn đàn "Tương lai khoa học công nghệ từ nền tảng đến công nghệ
                                                    chiến lược" 29/8/2025 ở Hà Nội, trong năm nay, Việt Nam sẽ làm chủ
                                                    ba sản phẩm thuộc nhóm công nghệ chiến lược.
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="https://baochinhphu.vn/viet-nam-chu-dong-phat-trien-ai-va-ban-dan-trong-ky-nguyen-moi-102250314120508832.htm"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Phát triển năng lực AI và công nghệ bán dẫn
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="https://moh.gov.vn/hoat-dong-cua-dia-phuong/-/asset_publisher/gHbla8vOQDuS/content/chuyen-oi-so-y-te-giup-nang-cao-chat-luong-cuoc-song-cho-nguoi-dan"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 text-xs font-medium transition-all duration-200 hover:underline decoration-green-400/50 underline-offset-2 hover:scale-105"
                                                >
                                                    Chuyển đổi số y tế giúp nâng cao chất lượng cuộc sống cho người dân
                                                    <ExternalLink className="w-3 h-3 opacity-70"/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}