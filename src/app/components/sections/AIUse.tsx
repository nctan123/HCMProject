import { Brain, BookOpen, Mic, Video, Edit3, CheckCircle, Users } from "lucide-react";

export default function AIUse() {
  return (
    <section className="group">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Sử Dụng AI</h3>
            <p className="text-gray-400">Công cụ AI hỗ trợ học tập</p>
          </div>
        </div>

        {/* 1. CÔNG CỤ ĐÃ SỬ DỤNG */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-red-400 mb-6">1. CÔNG CỤ ĐÃ SỬ DỤNG</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2">
                  <img src="/images (1).png" alt="ChatGPT" className="w-12 h-12 object-contain" />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">ChatGPT</h5>
                <p className="text-gray-300 text-sm">Hỗ trợ phân tích và tóm tắt nội dung</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2">
                  <img src="/logo-aivoice-new-v2.png" alt="Vbee AI Voice" className="w-12 h-12 object-contain" />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">Vbee AI Voice</h5>
                <p className="text-gray-300 text-sm">Chuyển đổi văn bản thành giọng đọc</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2">
                  <img src="/images (1).png" alt="NotebookLM" className="w-12 h-12 object-contain" />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">NotebookLM</h5>
                <p className="text-gray-300 text-sm">Lưu trữ và phân tích tài liệu</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2">
                  <img src="/download.png" alt="CapCut" className="w-12 h-12 object-contain" />
                </div>
                <h5 className="text-lg font-bold text-white mb-2">CapCut</h5>
                <p className="text-gray-300 text-sm">Dựng và biên tập video</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MỤC ĐÍCH SỬ DỤNG */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-red-400 mb-6">2. MỤC ĐÍCH SỬ DỤNG</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-2xl border border-slate-600/50">
              <h5 className="text-lg font-bold text-red-300 mb-4 flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                ChatGPT
              </h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Hỗ trợ đọc hiểu và tóm tắt giáo trình</li>
                <li>• Phân tích nội dung chương, trích lọc các ý chính</li>
                <li>• Hỗ trợ lên nội dung vào dựng kịch bản</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-2xl border border-slate-600/50">
              <h5 className="text-lg font-bold text-green-300 mb-4 flex items-center">
                <Mic className="h-5 w-5 mr-2" />
                Vbee AI Voice
              </h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Hỗ trợ chuyển đổi văn bản thành giọng đọc để làm video thuyết minh minh họa</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-2xl border border-slate-600/50">
              <h5 className="text-lg font-bold text-orange-300 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                NotebookLM
              </h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Lưu trữ tài liệu gồm: giáo trình, ghi chú, CLO, yêu cầu</li>
                <li>• Hỗ trợ phân tích nội dung dựa trên các tài liệu có sẵn</li>
                <li>• Hỗ trợ vẽ sơ đồ tổng quan kiến thức trong giáo trình</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-2xl border border-slate-600/50">
              <h5 className="text-lg font-bold text-purple-300 mb-4 flex items-center">
                <Video className="h-5 w-5 mr-2" />
                CapCut
              </h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Hỗ trợ dựng video thuyết trình</li>
                <li>• Biên tập video: thêm giọng đọc, hiệu ứng âm thanh, nhạc nền, chuyển cảnh,...</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. PROMPT CHÍNH ĐÃ DÙNG */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-red-400 mb-6">3. PROMPT CHÍNH ĐÃ DÙNG</h4>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
              <h5 className="text-lg font-bold text-blue-300 mb-4 flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                ChatGPT Prompts
              </h5>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• "Dựa trên file giáo trình 'Giáo trình Tư tưởng Hồ Chí Minh, dùng cho sinh viên bậc đại học hệ không chuyên ngành lý luận chính trị - Bản dự thảo', hãy liệt kê các tiêu đề chính trong Chương 3 và tóm tắt nội dung từng tiêu đề."</li>
                <li>• "Dựa trên nội dung từng tiêu đề, hãy viết kịch bản nội dung chi tiết, đảm bảo truyền tải đúng các kiến thức trọng tâm của Chương 3 và ứng với các CLO2 được đề ra."</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30">
              <h5 className="text-lg font-bold text-orange-300 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                NotebookLM Prompts
              </h5>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• "Toàn bộ giáo trình, CLO và ghi chú môn học đã được lưu trong Google Notes. Khi phân tích, chỉ sử dụng thông tin từ kho dữ liệu đã lưu đó, không bổ sung kiến thức bên ngoài."</li>
                <li>• "Hãy truy xuất và phân tích dữ liệu chương 3 trong giáo trình"</li>
                <li>• "Từ cấu trúc và nội dung đã truy xuất của chương 3, hãy tạo sơ đồ kiến thức dạng mindmap"</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30">
              <h5 className="text-lg font-bold text-green-300 mb-4 flex items-center">
                <Mic className="h-5 w-5 mr-2" />
                Vbee AI Voice Workflow
              </h5>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• Nhập văn bản: Dán toàn bộ kịch bản cần chuyển đổi thành giọng nói</li>
                <li>• Chọn giọng đọc: Lựa chọn giọng nam/nữ, miền Bắc/Nam và điều chỉnh tốc độ, ngữ điệu</li>
                <li>• Tùy chỉnh: Thêm ngắt nghỉ, điều chỉnh cường độ (nếu cần)</li>
                <li>• Chuyển đổi: Nhấn nút "Tạo giọng đọc" để hệ thống sinh file audio</li>
                <li>• Tải xuống: Lưu file audio và dùng cho bước dựng video</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. KẾT QUẢ AI ĐÃ SINH RA */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-red-400 mb-6">4. KẾT QUẢ AI ĐÃ SINH RA</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
              <h5 className="text-lg font-bold text-blue-300 mb-4">ChatGPT Outputs</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Danh sách tiêu đề & mục lớn – mục nhỏ trong Chương 3</li>
                <li>• Tóm tắt ngắn gọn nội dung từng mục, cô đọng các luận điểm quan trọng</li>
                <li>• Bảng tổng hợp từ khóa kiến thức chính của từng mục</li>
                <li>• Kịch bản nội dung và dàn ý</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30">
              <h5 className="text-lg font-bold text-orange-300 mb-4">NotebookLM Outputs</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <strong>Kho dữ liệu học tập đã được hệ thống hóa</strong>, gồm: giáo trình, CLO, ghi chú bài giảng</li>
                <li>• Bản cập nhật nội dung liên tục để đảm bảo AI chỉ phân tích trên đúng phiên bản mới nhất</li>
                <li>• Liên kết dữ liệu giữa các mục trong giáo trình và các CLO</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30">
              <h5 className="text-lg font-bold text-green-300 mb-4">Vbee AI Voice Outputs</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Tệp âm thanh (.mp3/.wav) chứa giọng đọc tiếng Việt rõ ràng, tự nhiên</li>
                <li>• Đúng với nội dung kịch bản đã soạn</li>
                <li>• Chất lượng âm thanh phù hợp cho video thuyết trình</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5. PHẦN NHÓM CHỈNH SỬA/BIÊN SOẠN */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-red-400 mb-6">5. PHẦN NHÓM CHỈNH SỬA/BIÊN SOẠN</h4>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-6 rounded-2xl border border-slate-600/50">
              <h5 className="text-lg font-bold text-white mb-4 flex items-center">
                <Edit3 className="h-5 w-5 mr-2 text-yellow-400" />
                Chọn lọc và biên tập nội dung từ ChatGPT
              </h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Sắp xếp lại bố cục cho mạch lạc, dễ hiểu, lược bỏ các ý thừa giữ lại nội dung cần thiết</li>
                <li>• Biên soạn lại kịch bản từ bản nháp AI: viết lại lời dẫn, phân cảnh, câu chuyển đoạn mạch lạc</li>
                <li>• Bổ sung ví dụ, tình huống minh họa để tăng tính thực tiễn và sinh động cho nội dung</li>
                <li>• Phân công các thành viên viết – đọc thử - góp ý để hoàn thiện kịch bản chính thức</li>
                <li>• Chia nhỏ kịch bản thành từng đoạn để đồng bộ với slide, audio và video trình bày</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30">
                <h5 className="text-lg font-bold text-purple-300 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Phân công thành viên
                </h5>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Mỗi người phụ trách một phần (ý chính, slide, hình ảnh minh họa...)</li>
                  <li>• Góp ý chéo, hợp nhất các phiên bản để thống nhất giọng văn</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
                <h5 className="text-lg font-bold text-blue-300 mb-4 flex items-center">
                  <Video className="h-5 w-5 mr-2" />
                  Thiết kế & trình bày
                </h5>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Dàn ý → slide → kịch bản → audio → video</li>
                  <li>• Lựa chọn màu sắc, bố cục, hiệu ứng để tăng tính trực quan</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30">
                <h5 className="text-lg font-bold text-green-300 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Tối ưu hóa
                </h5>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Cắt ghép audio từ Vbee AI voice cho khớp nội dung</li>
                  <li>• Dựng video bằng CapCut đảm bảo nhịp phù hợp, slide rõ ràng</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 6. ĐỐI CHIẾU NGUỒN CHÍNH THỐNG */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-red-400 mb-6">6. ĐỐI CHIẾU NGUỒN CHÍNH THỐNG</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-6 rounded-2xl border border-red-500/30">
              <h5 className="text-lg font-bold text-red-300 mb-4">Kiểm tra nội dung AI</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Soát lỗi chính tả, thuật ngữ học thuật, ngữ pháp</li>
                <li>• Bổ sung luận điểm, ví dụ còn thiếu để đúng với yêu cầu đề bài</li>
                <li>• Đối chiếu nội dung với giáo trình, đảm bảo nội dung các tiêu đề đáp ứng CLO2</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
              <h5 className="text-lg font-bold text-blue-300 mb-4">Biên tập tài liệu</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Dựa vào nội dung CLO2, đối chiếu nội dung của AI với sơ đồ giáo trình</li>
                <li>• Xác định CLO2 cho từng chương tương ứng</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30">
              <h5 className="text-lg font-bold text-green-300 mb-4">Biên tập video</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Canh chỉnh thời lượng, đồng bộ slide và audio</li>
                <li>• Thêm nhạc nền, hiệu ứng âm thanh phù hợp nội dung</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30">
              <h5 className="text-lg font-bold text-purple-300 mb-4">Phối hợp nhóm</h5>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Phân công thành viên đọc – sửa - góp ý</li>
                <li>• Đảm bảo sản phẩm phản ánh đúng nội dung học thuật đã học</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 7. CAM KẾT LIÊM CHÍNH HỌC THUẬT */}
        <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 p-8 rounded-2xl border border-pink-500/30">
          <h4 className="text-2xl font-bold text-red-400 mb-6 text-center">7. CAM KẾT LIÊM CHÍNH HỌC THUẬT</h4>
          <div className="bg-pink-100/10 p-6 rounded-xl border border-pink-300/30">
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>AI chỉ đóng vai trò hỗ trợ, không thay thế tư duy học thuật</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Tất cả nội dung đã được nhóm chỉnh sửa, biên soạn lại</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <span>Không sao chép nguyên văn, không gian lận học thuật</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
