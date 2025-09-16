// Audio generator using Web Audio API for creating sounds programmatically
export class AudioGenerator {
  private audioContext: AudioContext | null = null;
  private gainNode: GainNode | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.gainNode = this.audioContext.createGain();
      this.gainNode.connect(this.audioContext.destination);
    }
  }

  private async ensureAudioContext() {
    if (this.audioContext?.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  // Generate a pleasant success sound
  async playCorrectSound(volume: number = 0.7) {
    if (!this.audioContext || !this.gainNode) return;
    
    await this.ensureAudioContext();
    
    const oscillator1 = this.audioContext.createOscillator();
    const oscillator2 = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator1.frequency.setValueAtTime(523.25, this.audioContext.currentTime); // C5
    oscillator2.frequency.setValueAtTime(659.25, this.audioContext.currentTime); // E5
    
    oscillator1.type = 'sine';
    oscillator2.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume * 0.3, this.audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.5);
    
    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(this.gainNode);
    
    oscillator1.start(this.audioContext.currentTime);
    oscillator2.start(this.audioContext.currentTime);
    oscillator1.stop(this.audioContext.currentTime + 0.5);
    oscillator2.stop(this.audioContext.currentTime + 0.5);
  }

  // Generate a gentle error sound
  async playWrongSound(volume: number = 0.7) {
    if (!this.audioContext || !this.gainNode) return;
    
    await this.ensureAudioContext();
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
    oscillator.frequency.linearRampToValueAtTime(150, this.audioContext.currentTime + 0.3);
    
    oscillator.type = 'sawtooth';
    
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume * 0.2, this.audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.3);
    
    oscillator.connect(gainNode);
    gainNode.connect(this.gainNode);
    
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.3);
  }

  // Generate a victory fanfare
  async playCompleteSound(volume: number = 0.7) {
    if (!this.audioContext || !this.gainNode) return;
    
    await this.ensureAudioContext();
    
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const noteDuration = 0.2;
    
    for (let i = 0; i < notes.length; i++) {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.frequency.setValueAtTime(notes[i], this.audioContext.currentTime + i * noteDuration);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime + i * noteDuration);
      gainNode.gain.linearRampToValueAtTime(volume * 0.3, this.audioContext.currentTime + i * noteDuration + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + i * noteDuration + noteDuration);
      
      oscillator.connect(gainNode);
      gainNode.connect(this.gainNode);
      
      oscillator.start(this.audioContext.currentTime + i * noteDuration);
      oscillator.stop(this.audioContext.currentTime + i * noteDuration + noteDuration);
    }
  }

  // Generate energetic background music
  async playBackgroundMusic(volume: number = 0.3) {
    if (!this.audioContext || !this.gainNode) return;
    
    await this.ensureAudioContext();
    
    // Energetic melody with more notes and rhythm
    const melody = [
      // Main melody - more dynamic
      523.25, 659.25, 783.99, 1046.50, // C5, E5, G5, C6
      783.99, 659.25, 523.25, 392.00,  // G5, E5, C5, G4
      523.25, 659.25, 783.99, 1046.50, // C5, E5, G5, C6
      1046.50, 783.99, 659.25, 523.25, // C6, G5, E5, C5
    ];
    
    const noteDuration = 0.3; // Faster tempo
    let isPlaying = true;
    
    const playMelody = () => {
      if (!isPlaying) return;
      
      melody.forEach((freq, index) => {
        // Main melody
        const oscillator1 = this.audioContext!.createOscillator();
        const gainNode1 = this.audioContext!.createGain();
        
        oscillator1.frequency.setValueAtTime(freq, this.audioContext!.currentTime + index * noteDuration);
        oscillator1.type = 'triangle'; // Warmer sound
        
        gainNode1.gain.setValueAtTime(0, this.audioContext!.currentTime + index * noteDuration);
        gainNode1.gain.linearRampToValueAtTime(volume * 0.15, this.audioContext!.currentTime + index * noteDuration + 0.01);
        gainNode1.gain.exponentialRampToValueAtTime(0.001, this.audioContext!.currentTime + index * noteDuration + noteDuration);
        
        oscillator1.connect(gainNode1);
        if (this.gainNode) {
          gainNode1.connect(this.gainNode);
        }
        
        oscillator1.start(this.audioContext!.currentTime + index * noteDuration);
        oscillator1.stop(this.audioContext!.currentTime + index * noteDuration + noteDuration);
        
        // Add harmony (octave lower)
        const oscillator2 = this.audioContext!.createOscillator();
        const gainNode2 = this.audioContext!.createGain();
        
        oscillator2.frequency.setValueAtTime(freq / 2, this.audioContext!.currentTime + index * noteDuration);
        oscillator2.type = 'sawtooth';
        
        gainNode2.gain.setValueAtTime(0, this.audioContext!.currentTime + index * noteDuration);
        gainNode2.gain.linearRampToValueAtTime(volume * 0.08, this.audioContext!.currentTime + index * noteDuration + 0.01);
        gainNode2.gain.exponentialRampToValueAtTime(0.001, this.audioContext!.currentTime + index * noteDuration + noteDuration);
        
        oscillator2.connect(gainNode2);
        if (this.gainNode) {
          gainNode2.connect(this.gainNode);
        }
        
        oscillator2.start(this.audioContext!.currentTime + index * noteDuration);
        oscillator2.stop(this.audioContext!.currentTime + index * noteDuration + noteDuration);
        
        // Add rhythm (bass line on every 2nd note)
        if (index % 2 === 0) {
          const oscillator3 = this.audioContext!.createOscillator();
          const gainNode3 = this.audioContext!.createGain();
          
          oscillator3.frequency.setValueAtTime(freq / 4, this.audioContext!.currentTime + index * noteDuration);
          oscillator3.type = 'square';
          
          gainNode3.gain.setValueAtTime(0, this.audioContext!.currentTime + index * noteDuration);
          gainNode3.gain.linearRampToValueAtTime(volume * 0.05, this.audioContext!.currentTime + index * noteDuration + 0.01);
          gainNode3.gain.exponentialRampToValueAtTime(0.001, this.audioContext!.currentTime + index * noteDuration + noteDuration);
          
          oscillator3.connect(gainNode3);
          if (this.gainNode) {
            gainNode3.connect(this.gainNode);
          }
          
          oscillator3.start(this.audioContext!.currentTime + index * noteDuration);
          oscillator3.stop(this.audioContext!.currentTime + index * noteDuration + noteDuration);
        }
      });
    };
    
    // Play melody in loop
    playMelody();
    const intervalId = setInterval(playMelody, melody.length * noteDuration * 1000);
    
    // Store interval ID for cleanup
    (this as any).backgroundMusicInterval = intervalId;
    
    // Return cleanup function
    return () => {
      isPlaying = false;
      if ((this as any).backgroundMusicInterval) {
        clearInterval((this as any).backgroundMusicInterval);
      }
    };
  }

  setVolume(volume: number) {
    if (this.gainNode) {
      this.gainNode.gain.value = volume;
    }
  }
}
