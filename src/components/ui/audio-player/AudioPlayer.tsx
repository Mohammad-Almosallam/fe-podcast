"use client";

import { useAudio } from "@/providers/AudioPlayerProvider";
import React from "react";

const speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

export const AudioPlayer = () => {
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    speed,
    play,
    pause,
    skipForward,
    skipBackward,
    setSpeed,
    volumeUp,
    volumeDown,
    close,
  } = useAudio();

  return (
    <div className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg">
      <button onClick={() => (isPlaying ? pause() : play())}>
        {isPlaying ? "⏸️" : "▶️"}
      </button>
      <button onClick={skipBackward}>⏪ 15s</button>
      <button onClick={skipForward}>15s ⏩</button>
      <select
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        className="border rounded px-2"
      >
        {speeds.map((s) => (
          <option key={s} value={s}>
            {s}x
          </option>
        ))}
      </select>
      <button onClick={volumeDown}>🔉</button>
      <span>{Math.round(volume * 100)}%</span>
      <button onClick={volumeUp}>🔊</button>
      <button onClick={close}>✖️</button>
      <div>
        {Math.floor(currentTime)} / {Math.floor(duration)}s
      </div>
    </div>
  );
};
