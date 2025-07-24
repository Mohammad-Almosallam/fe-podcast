"use client";

import { useAudio } from "@/providers/AudioPlayerProvider";
import React from "react";

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

  //TODO - Implement audio player UI
  return <></>;
};
