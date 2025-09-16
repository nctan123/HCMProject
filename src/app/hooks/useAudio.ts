import { useState, useEffect, useRef } from 'react';
import { AudioGenerator } from '../utils/audioGenerator';

type AudioOptions = {
  volume?: number;
  loop?: boolean;
  autoplay?: boolean;
};

export function useAudio(src: string, options: AudioOptions = {}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(options.volume || 0.5);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioGeneratorRef = useRef<AudioGenerator | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize audio generator
      if (!audioGeneratorRef.current) {
        audioGeneratorRef.current = new AudioGenerator();
      }

      // Try to load audio file first
      audioRef.current = new Audio(src);
      audioRef.current.volume = volume;
      audioRef.current.loop = options.loop || false;
      
      const audio = audioRef.current;
      
      const handleLoadedData = () => setIsLoaded(true);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);
      const handleError = () => {
        console.warn(`Failed to load audio file: ${src}, using generated audio instead`);
        setIsLoaded(true); // Mark as loaded to use generated audio
      };

      audio.addEventListener('loadeddata', handleLoadedData);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleError);

      if (options.autoplay && isLoaded) {
        audio.play().catch(console.warn);
      }

      return () => {
        audio.removeEventListener('loadeddata', handleLoadedData);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleError);
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, [src, options.loop, options.autoplay, isLoaded]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    if (audioGeneratorRef.current) {
      audioGeneratorRef.current.setVolume(volume);
    }
  }, [volume]);

  const play = async () => {
    if (audioRef.current && isLoaded) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.warn('Failed to play audio file, using generated audio');
        // Fallback to generated audio based on src
        if (audioGeneratorRef.current) {
          if (src.includes('correct')) {
            audioGeneratorRef.current.playCorrectSound(volume);
          } else if (src.includes('wrong')) {
            audioGeneratorRef.current.playWrongSound(volume);
          } else if (src.includes('complete')) {
            audioGeneratorRef.current.playCompleteSound(volume);
          } else if (src.includes('background')) {
            audioGeneratorRef.current.playBackgroundMusic(volume);
          }
        }
      }
    } else if (audioGeneratorRef.current && isLoaded) {
      // Use generated audio directly
      if (src.includes('correct')) {
        audioGeneratorRef.current.playCorrectSound(volume);
      } else if (src.includes('wrong')) {
        audioGeneratorRef.current.playWrongSound(volume);
      } else if (src.includes('complete')) {
        audioGeneratorRef.current.playCompleteSound(volume);
      } else if (src.includes('background')) {
        audioGeneratorRef.current.playBackgroundMusic(volume);
      }
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const setVolumeLevel = (newVolume: number) => {
    setVolume(Math.max(0, Math.min(1, newVolume)));
  };

  return {
    isPlaying,
    isLoaded,
    volume,
    play,
    pause,
    stop,
    setVolume: setVolumeLevel,
  };
}
