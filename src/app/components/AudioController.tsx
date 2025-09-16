"use client";
import { useState } from 'react';
import { Volume2, VolumeX, Music, Music2 } from 'lucide-react';

type Props = {
  backgroundVolume: number;
  onBackgroundVolumeChange: (volume: number) => void;
  effectsVolume: number;
  onEffectsVolumeChange: (volume: number) => void;
  isBackgroundPlaying: boolean;
  onToggleBackground: () => void;
};

export default function AudioController({
  backgroundVolume,
  onBackgroundVolumeChange,
  effectsVolume,
  onEffectsVolumeChange,
  isBackgroundPlaying,
  onToggleBackground,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-600/50">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-white flex items-center">
          <Music className="h-4 w-4 mr-2" />
          Âm thanh
        </h4>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {/* Background Music Control */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-300">Nhạc nền</span>
              <button
                onClick={onToggleBackground}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isBackgroundPlaying ? <Music2 className="h-4 w-4" /> : <Music className="h-4 w-4" />}
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <VolumeX className="h-3 w-3 text-gray-400" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={backgroundVolume}
                onChange={(e) => onBackgroundVolumeChange(parseFloat(e.target.value))}
                className="flex-1 h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer slider"
              />
              <Volume2 className="h-3 w-3 text-gray-400" />
            </div>
          </div>

          {/* Effects Volume Control */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-300">Hiệu ứng</span>
            </div>
            <div className="flex items-center space-x-2">
              <VolumeX className="h-3 w-3 text-gray-400" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={effectsVolume}
                onChange={(e) => onEffectsVolumeChange(parseFloat(e.target.value))}
                className="flex-1 h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer slider"
              />
              <Volume2 className="h-3 w-3 text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
