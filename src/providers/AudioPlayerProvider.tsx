"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface AudioContextType {
  play: (src?: string) => void;
  pause: () => void;
  skipForward: () => void;
  skipBackward: () => void;
  setSpeed: (rate: number) => void;
  volumeUp: () => void;
  volumeDown: () => void;
  close: () => void;

  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  speed: number;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [speed, setPlaybackRate] = useState(1);

  useEffect(() => {
    audioRef.current = new Audio();
  }, []);

  const play = (src?: string) => {
    if (!audioRef.current) return;

    if (src && audioRef.current.src !== src) {
      audioRef.current.src = src;
    }

    if (audioRef.current.src) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setIsPlaying(false);
  };

  const skip = (time: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = Math.min(
      audioRef.current.duration,
      Math.max(0, audioRef.current.currentTime + time)
    );
    setCurrentTime(audioRef.current.currentTime);
  };

  const skipForward = () => {
    skip(15);
  };
  const skipBackward = () => {
    skip(-15);
  };

  const setSpeed = (rate: number) => {
    if (!audioRef.current) return;

    audioRef.current.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const changeVolume = (time: number) => {
    if (!audioRef.current) return;

    const newVol = Math.min(1, Math.max(0, audioRef.current.volume + time));
    audioRef.current.volume = newVol;
    setVolume(newVol);
  };

  const volumeUp = () => {
    changeVolume(0.1);
  };

  const volumeDown = () => {
    changeVolume(-0.1);
  };

  const close = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.src = "";
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setVolume(1);
    setPlaybackRate(1);
  };

  return (
    <AudioContext.Provider
      value={{
        play,
        pause,
        skipForward,
        skipBackward,
        setSpeed,
        volumeUp,
        volumeDown,
        close,
        isPlaying,
        currentTime,
        duration,
        volume,
        speed,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
};
