"use client";
type Props = {
  activeSection: number;
  setActiveSection: (index: number) => void;
};

export default function SectionNav({ activeSection, setActiveSection }: Props) {
  return (
    <nav className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-sm border-b border-orange-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center space-x-8 overflow-x-auto">
          {['Bối cảnh lịch sử', 'Cơ sở hình thành', 'Quá trình phát triển', 'Sự vận dụng', 'Video', 'AI Use'].map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(index)}
              className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}


