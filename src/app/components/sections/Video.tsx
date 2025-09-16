import { Play } from "lucide-react";

export default function Video() {
  return (
    <section className="group">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
            <Play className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Video Thuyết Trình</h3>
            <p className="text-gray-400">Nội dung video minh họa</p>
          </div>
        </div>
        <div className="text-center text-gray-300">
          <p>Video content will be added here</p>
        </div>
      </div>
    </section>
  );
}
