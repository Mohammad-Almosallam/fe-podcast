import React from "react";
import { ViewModes } from "../ViewToggleMenu";

export type Episode = {
  id: string;
  title: string;
  image: string;
};

interface EpisodeCardProps {
  episode: Episode;
  viewMode: ViewModes;
}

const EpisodeCard = ({ episode, viewMode }: EpisodeCardProps) => {
  switch (viewMode) {
    case "grid":
      return (
        <div className="bg-gray-800 h-40 rounded">Grid - {episode.title}</div>
      );
    case "scroll":
      return (
        <div className="bg-gray-700 w-40 h-40 shrink-0 rounded">
          Scroll - {episode.title}
        </div>
      );
    case "compact":
      return (
        <div className="bg-gray-600 p-2 text-sm">Compact - {episode.title}</div>
      );
    case "list":
      return (
        <div className="bg-gray-700 p-3 border-b border-gray-600">
          List - {episode.title}
        </div>
      );
    default:
      return null;
  }
};

export default EpisodeCard;
