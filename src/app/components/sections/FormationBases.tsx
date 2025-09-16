import { Brain, Heart, BookOpen, Star } from "lucide-react";

export default function FormationBases() {
  return (
    <section className="group">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Cơ sở hình thành</h3>
            <p className="text-gray-400">Ba trụ cột nền tảng</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed mb-8">
          Các nhân tố đã ảnh hưởng sâu sắc đến việc hình thành tư tưởng Hồ Chí Minh bao gồm cơ sở thực tiễn, cơ sở lý luận và nhân tố chủ quan của chính Người.
        </p>

        {/* I. Cơ sở thực tiễn */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Heart className="h-6 w-6 mr-3 text-green-400" />
              I. Cơ sở thực tiễn
            </h4>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Bối cảnh thực tiễn phức tạp ở Việt Nam và trên thế giới vào cuối thế kỷ XIX, đầu thế kỷ XX đã đóng vai trò là nền tảng thực tiễn quan trọng, thúc đẩy sự hình thành tư tưởng Hồ Chí Minh.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-600/30">
                <h5 className="text-lg font-semibold text-green-300 mb-3">Thực tiễn Việt Nam</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Thực tiễn Việt Nam cuối thế kỷ XIX đầu thế kỷ XX đã tác động đến việc hình thành tư tưởng Hồ Chí Minh bằng cách đặt ra những vấn đề cấp bách về sự tồn vong của dân tộc và yêu cầu một con đường cứu nước mới, độc lập dân tộc. Những thực trạng này đã ảnh hưởng trực tiếp đến Người, giúp Người nhận thức rõ hoàn cảnh mất nước và nung nấu ý chí tìm đường giải phóng cho dân tộc.
                </p>
              </div>
              
              <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-600/30">
                <h5 className="text-lg font-semibold text-green-300 mb-3">Thực tiễn thế giới</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Thực tiễn thế giới cuối thế kỷ XIX đầu thế kỷ XX với sự phát triển của chủ nghĩa tư bản, chủ nghĩa thực dân và các phong trào giải phóng dân tộc đã cung cấp bối cảnh quốc tế rộng lớn. Những diễn biến này đã tác động đến Người trong việc tiếp cận, nghiên cứu và đánh giá các xu hướng thời đại, từ đó lựa chọn con đường cách mạng phù hợp và hiệu quả nhất cho Việt Nam.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* II. Cơ sở lý luận */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="h-6 w-6 mr-3 text-blue-400" />
              II. Cơ sở lý luận
            </h4>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Tư tưởng Hồ Chí Minh được xây dựng trên một nền tảng lý luận phong phú, bao gồm các giá trị văn hóa và tư tưởng tiến bộ.
            </p>
            
            <div className="space-y-4">
              <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-600/30">
                <h5 className="text-lg font-semibold text-blue-300 mb-3">Giá trị truyền thống dân tộc Việt Nam</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Giá trị truyền thống tốt đẹp của dân tộc Việt Nam đã thấm sâu vào tư tưởng Hồ Chí Minh, nuôi dưỡng tinh thần yêu nước nồng nàn, đoàn kết, nhân nghĩa và ý chí độc lập tự chủ của dân tộc. Đây là nguồn cội tinh thần vững chắc, định hình những phẩm chất đạo đức và định hướng mục tiêu cách mạng của Người.
                </p>
              </div>
              
              <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-600/30">
                <h5 className="text-lg font-semibold text-blue-300 mb-3">Tinh hoa văn hóa nhân loại</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tinh hoa văn hóa nhân loại mà Người đã tiếp thu trong quá trình bôn ba tìm đường cứu nước đã làm phong phú thêm vốn tri thức và tư duy của Người. Việc chọn lọc và vận dụng những giá trị văn hóa, tư tưởng tiên tiến từ các nền văn minh khác nhau đã giúp Người có cái nhìn tổng quát, khách quan và sáng tạo trong việc giải quyết các vấn đề dân tộc.
                </p>
              </div>
              
              <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-600/30">
                <h5 className="text-lg font-semibold text-blue-300 mb-3">Chủ nghĩa Mác-Lênin</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Chủ nghĩa Mác-Lênin là cơ sở lý luận trực tiếp và có tính quyết định nhất, cung cấp cho Hồ Chí Minh thế giới quan khoa học, phương pháp luận cách mạng để phân tích thực tiễn, xác định con đường giải phóng dân tộc và xây dựng chủ nghĩa xã hội. Chủ nghĩa Mác-Lênin đã trở thành "kim chỉ nam" cho mọi hoạt động và sự phát triển tư tưởng của Người.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* III. Nhân tố chủ quan */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-6 rounded-2xl border border-orange-500/30">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <Star className="h-6 w-6 mr-3 text-orange-400" />
              III. Nhân tố chủ quan Hồ Chí Minh
            </h4>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Bên cạnh các cơ sở khách quan, chính những phẩm chất và tài năng của Hồ Chí Minh đã đóng vai trò then chốt trong việc hình thành và phát triển tư tưởng của Người.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-600/30">
                <h5 className="text-lg font-semibold text-orange-300 mb-3">Phẩm chất Hồ Chí Minh</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Phẩm chất Hồ Chí Minh như lòng yêu nước nồng nàn, ý chí kiên cường, đạo đức cách mạng trong sáng, tư duy độc lập, sáng tạo, và tình yêu thương vô hạn đối với nhân dân đã tạo nên động lực mạnh mẽ để Người không ngừng tìm tòi, học hỏi và cống hiến cho sự nghiệp cách mạng. Những phẩm chất này định hình nhân cách và bản lĩnh chính trị của Người.
                </p>
              </div>
              
              <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-600/30">
                <h5 className="text-lg font-semibold text-orange-300 mb-3">Tài năng hoạt động</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tài năng hoạt động, tổng kết thực tiễn phát triển lý luận của Người là một nhân tố đặc biệt quan trọng. Khả năng kết hợp chặt chẽ giữa lý luận và thực tiễn, tổng kết những kinh nghiệm quý báu từ các phong trào cách mạng và hoạt động của bản thân đã giúp Người phát triển, hoàn thiện tư tưởng của mình. Người đã biến những nguyên lý thành những giải pháp cụ thể, sáng tạo, phù hợp với hoàn cảnh đặc thù của Việt Nam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


