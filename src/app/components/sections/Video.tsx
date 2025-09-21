import { Play } from "lucide-react";
import Image from "next/image";

export default function Video() {
  return (
    <section className="group">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
            <Play className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Sợi Chỉ Đỏ</h3>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Video Section */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/dAGBF1Hocx0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* QR Code Section */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4 text-center">
                Quét QR Code để xem thêm
              </h4>
              <div className="flex justify-center">
                <Image
                  src="/QR_soichido.png"
                  alt="QR Code Sợi Chỉ Đỏ"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className="text-gray-300 text-sm text-center mt-4">
                Quét mã QR để truy cập thông tin chi tiết về dự án
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>    
  );
}
