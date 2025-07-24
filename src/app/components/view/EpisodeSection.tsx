"use client";

import React, { useState } from "react";
import Section from "../layout/Section";
import ViewToggleMenu, { ViewModes, ViewOptions } from "../ViewToggleMenu";
import EpisodeCard, { Episode } from "../cards/EpisodeCard";

const viewOptions: ViewOptions[] = [
  { label: "Switch to layout Grid", value: "grid" },
  { label: "Switch to layout Scroll", value: "scroll" },
  { label: "Switch to layout Compact", value: "compact" },
  { label: "Switch to layout List", value: "list" },
];

const EpisodeSection = ({ episodes }: { episodes: Episode[] }) => {
  const [viewMode, setViewMode] = useState<ViewModes>("grid");

  const renderEpisodes = () => {
    switch (viewMode) {
      case "scroll":
        return (
          <div className="flex overflow-x-auto gap-3 pb-2 px-5 py-3">
            {episodes.map((e, index) => (
              <EpisodeCard key={index} episode={e} viewMode="scroll" />
            ))}
          </div>
        );

      case "grid":
        return (
          <div className="grid grid-cols-1 @xl:grid-cols-2 @[50rem]:grid-cols-3 gap-4 px-5 py-3">
            {episodes.map((e, index) => (
              <EpisodeCard key={index} episode={e} viewMode="grid" />
            ))}
          </div>
        );

      case "compact":
        return (
          <div className="grid grid-cols-1 @xl:grid-cols-3 gap-x-4 gap-y-1 px-5 py-3">
            {episodes.map((e, index) => (
              <EpisodeCard key={index} episode={e} viewMode="compact" />
            ))}
          </div>
        );

      case "list":
      default:
        return (
          <div className="flex flex-col">
            {episodes.map((e, index) => (
              <EpisodeCard key={index} episode={e} viewMode="list" />
            ))}
          </div>
        );
    }
  };

  return (
    <Section
      title={`Top podcasts for ${"عوعو"}`}
      menu={
        <ViewToggleMenu
          viewMode={viewMode}
          onChange={setViewMode}
          options={viewOptions}
        />
      }
    >
      {renderEpisodes()}
    </Section>
  );
};

export default EpisodeSection;
