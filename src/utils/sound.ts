/**
 * Synthesizes retro 8-bit sound effects and peaceful ambient music
 * using pure browser Web Audio API. Fully compliant with modern browser autoplay policies.
 */

export type MusicTheme = 'general' | 'crime' | 'eruditus' | 'blindness' | 'mateo' | 'myths';

class SoundController {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;
  public bgmEnabled: boolean = true;
  public isAudioUnlocked: boolean = false;
  private currentBgmTheme: MusicTheme = 'general';
  private bgmIntervalId: number | null = null;
  private bgmGainNode: GainNode | null = null;
  private isUnlocking: boolean = false;
  private isStartingBgm: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const storedSfx = localStorage.getItem('the_lecture_world_sound');
      if (storedSfx !== null) {
        this.enabled = storedSfx === 'true';
      }
      const storedBgm = localStorage.getItem('the_lecture_world_bgm');
      if (storedBgm !== null) {
        this.bgmEnabled = storedBgm === 'true';
      }

      this.setupGlobalUnlock();
    }
  }

  private setupGlobalUnlock() {
    if (typeof window === 'undefined') return;

    const unlockHandler = () => {
      this.unlockAudio();
    };

    window.addEventListener('click', unlockHandler, { passive: true });
    window.addEventListener('keydown', unlockHandler, { passive: true });
    window.addEventListener('touchstart', unlockHandler, { passive: true });
  }

  // Ensures AudioContext exists and connects gain node once
  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.bgmGainNode = this.ctx.createGain();
        this.bgmGainNode.gain.setValueAtTime(0.14, this.ctx.currentTime);
        this.bgmGainNode.connect(this.ctx.destination);
      }
    }
    return this.ctx;
  }

  // Safely resumes audio context on user gesture without any recursive loops
  public unlockAudio(): boolean {
    if (this.isUnlocking) return this.isAudioUnlocked;
    this.isUnlocking = true;

    try {
      const ctx = this.ensureContext();
      if (ctx && ctx.state === 'suspended') {
        ctx.resume().then(() => {
          this.isAudioUnlocked = true;
          this.isUnlocking = false;
          if (this.bgmEnabled && !this.bgmIntervalId) {
            this.startBgmLoop();
          }
        }).catch(() => {
          this.isUnlocking = false;
        });
      } else if (ctx && ctx.state === 'running') {
        this.isAudioUnlocked = true;
        this.isUnlocking = false;
        if (this.bgmEnabled && !this.bgmIntervalId) {
          this.startBgmLoop();
        }
      } else {
        this.isUnlocking = false;
      }
    } catch {
      this.isUnlocking = false;
    }

    return this.isAudioUnlocked;
  }

  public toggleSound(): boolean {
    this.enabled = !this.enabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('the_lecture_world_sound', String(this.enabled));
    }
    if (this.enabled) {
      this.unlockAudio();
      this.playBlip(520, 0.08);
    }
    return this.enabled;
  }

  public toggleBgm(): boolean {
    this.unlockAudio();
    this.bgmEnabled = !this.bgmEnabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('the_lecture_world_bgm', String(this.bgmEnabled));
    }
    if (!this.bgmEnabled) {
      this.stopBgm();
    } else {
      this.startBgmLoop();
    }
    return this.bgmEnabled;
  }

  public testAudioChime() {
    this.unlockAudio();
    const ctx = this.ensureContext();
    if (!ctx) return;

    const testNotes = [392.00, 523.25, 659.25, 783.99]; // G, C, E, G
    testNotes.forEach((freq, idx) => {
      setTimeout(() => {
        if (!ctx) return;
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.25);
        } catch {
          // ignore
        }
      }, idx * 70);
    });
  }

  public playClickSound() {
    this.playBlip(540, 0.05);
  }

  public playBlip(freq: number = 440, duration: number = 0.06) {
    if (!this.enabled) return;
    try {
      const ctx = this.ensureContext();
      if (!ctx || ctx.state !== 'running') return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.4, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Browser blocked
    }
  }

  public playEnterWorld() {
    if (!this.enabled) return;
    try {
      const ctx = this.ensureContext();
      if (!ctx || ctx.state !== 'running') return;

      const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          if (!ctx) return;
          try {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            gain.gain.setValueAtTime(0.16, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.22);
          } catch {
            // ignore
          }
        }, idx * 55);
      });
    } catch {
      // ignore
    }
  }

  public playPortalWarp() {
    if (!this.enabled) return;
    try {
      const ctx = this.ensureContext();
      if (!ctx) return;

      const duration = 1.0;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(130, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + duration * 0.75);
      osc.frequency.exponentialRampToValueAtTime(260, ctx.currentTime + duration);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(350, ctx.currentTime);
      filter.frequency.linearRampToValueAtTime(3200, ctx.currentTime + duration * 0.7);
      filter.frequency.linearRampToValueAtTime(250, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // ignore
    }
  }

  public playSlide() {
    if (!this.enabled) return;
    try {
      const ctx = this.ensureContext();
      if (!ctx || ctx.state !== 'running') return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(540, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // ignore
    }
  }

  public playCardSelect() {
    if (!this.enabled) return;
    try {
      const ctx = this.ensureContext();
      if (!ctx || ctx.state !== 'running') return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } catch {
      // ignore
    }
  }

  public playBack() {
    if (!this.enabled) return;
    try {
      const ctx = this.ensureContext();
      if (!ctx || ctx.state !== 'running') return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(220, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.09, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {
      // ignore
    }
  }

  /* -------------------------------------------------------------
   * Non-recursive Ambient 8-bit Synthesizer
   * ------------------------------------------------------------- */
  public playAmbientTrack(theme: MusicTheme) {
    this.currentBgmTheme = theme;
    if (!this.bgmEnabled) return;

    this.stopBgm();
    this.startBgmLoop();
  }

  private startBgmLoop() {
    if (this.isStartingBgm) return;
    this.isStartingBgm = true;

    const ctx = this.ensureContext();
    if (!ctx || !this.bgmGainNode || !this.bgmEnabled) {
      this.isStartingBgm = false;
      return;
    }

    // Rich melodical tracks with bass line and harmony arpeggio
    const trackConfigs: Record<MusicTheme, { melody: number[]; bass: number[]; intervalMs: number; wave: OscillatorType }> = {
      general: {
        melody: [261.63, 329.63, 392.00, 523.25, 440.00, 392.00, 329.63, 293.66],
        bass: [130.81, 130.81, 164.81, 164.81, 146.83, 146.83, 196.00, 196.00],
        intervalMs: 440,
        wave: 'sine'
      },
      crime: {
        melody: [220.00, 261.63, 329.63, 349.23, 329.63, 261.63, 246.94, 220.00],
        bass: [110.00, 110.00, 130.81, 130.81, 146.83, 146.83, 110.00, 110.00],
        intervalMs: 500,
        wave: 'triangle'
      },
      eruditus: {
        melody: [293.66, 369.99, 440.00, 587.33, 739.99, 587.33, 440.00, 369.99],
        bass: [146.83, 146.83, 185.00, 185.00, 220.00, 220.00, 146.83, 146.83],
        intervalMs: 380,
        wave: 'sine'
      },
      blindness: {
        melody: [196.00, 233.08, 293.66, 349.23, 293.66, 233.08, 196.00, 174.61],
        bass: [98.00, 98.00, 116.54, 116.54, 130.81, 130.81, 87.31, 87.31],
        intervalMs: 600,
        wave: 'triangle'
      },
      mateo: {
        melody: [261.63, 329.63, 392.00, 440.00, 523.25, 392.00, 329.63, 349.23],
        bass: [130.81, 130.81, 164.81, 164.81, 174.61, 174.61, 196.00, 196.00],
        intervalMs: 360,
        wave: 'sine'
      },
      myths: {
        melody: [293.66, 329.63, 349.23, 392.00, 440.00, 523.25, 440.00, 392.00],
        bass: [146.83, 146.83, 164.81, 164.81, 174.61, 174.61, 146.83, 146.83],
        intervalMs: 460,
        wave: 'triangle'
      }
    };

    const config = trackConfigs[this.currentBgmTheme] || trackConfigs.general;
    let step = 0;

    this.bgmIntervalId = window.setInterval(() => {
      if (!this.ctx || !this.bgmGainNode || !this.bgmEnabled) return;
      if (this.ctx.state !== 'running') return;

      try {
        const noteFreq = config.melody[step % config.melody.length];
        const bassFreq = config.bass[step % config.bass.length];

        // 1. Melody Note
        const osc = this.ctx.createOscillator();
        const noteGain = this.ctx.createGain();
        osc.type = config.wave;
        osc.frequency.setValueAtTime(noteFreq, this.ctx.currentTime);

        const duration = (config.intervalMs / 1000) * 1.5;
        noteGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        noteGain.gain.linearRampToValueAtTime(0.09, this.ctx.currentTime + 0.05);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(noteGain);
        noteGain.connect(this.bgmGainNode);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);

        // 2. Bass Pad on every second note
        if (step % 2 === 0) {
          const bassOsc = this.ctx.createOscillator();
          const bassGain = this.ctx.createGain();
          bassOsc.type = 'triangle';
          bassOsc.frequency.setValueAtTime(bassFreq, this.ctx.currentTime);

          const bassDuration = (config.intervalMs / 1000) * 2.2;
          bassGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
          bassGain.gain.linearRampToValueAtTime(0.07, this.ctx.currentTime + 0.1);
          bassGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + bassDuration);

          bassOsc.connect(bassGain);
          bassGain.connect(this.bgmGainNode);
          bassOsc.start();
          bassOsc.stop(this.ctx.currentTime + bassDuration);
        }

        step++;
      } catch {
        // Silently catch
      }
    }, config.intervalMs);

    this.isStartingBgm = false;
  }

  public stopBgm() {
    if (this.bgmIntervalId !== null) {
      clearInterval(this.bgmIntervalId);
      this.bgmIntervalId = null;
    }
  }
}

export const sound = new SoundController();
