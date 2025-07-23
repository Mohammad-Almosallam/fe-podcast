"use client";

import React, { useState } from "react";
import Section from "../Section";
import ViewToggleMenu, { ViewModes, ViewOptions } from "../ViewToggleMenu";
import PodcastCard, { Podcast } from "../cards/PodcastCard";

const viewOptions: ViewOptions[] = [
  { label: "Grid", value: "grid" },
  { label: "Scroll", value: "scroll" },
];

const PodcastSection = ({ podcasts }: { podcasts: Podcast[] }) => {
  const [viewMode, setViewMode] = useState<ViewModes>("grid");

  const renderPodcasts = () => {
    switch (viewMode) {
      case "scroll":
        return (
          <div className="flex overflow-x-auto gap-3 pb-2 px-5 py-3">
            {podcasts.map((podcast, index) => (
              <PodcastCard key={index} podcast={podcast} viewMode="scroll" />
            ))}
          </div>
        );

      case "grid":
      default:
        return (
          <div className="grid grid-cols-2 @[500px]:grid-cols-3 @[700px]:grid-cols-4 @[950px]:grid-cols-5 gap-4 px-5 py-3">
            {podcasts.map((podcast, index) => (
              <PodcastCard key={index} podcast={podcast} viewMode="grid" />
            ))}
          </div>
        );
    }
  };

  return (
    <Section
      title={`Top podcasts for ${"فلان"}`}
      menu={
        <ViewToggleMenu
          viewMode={viewMode}
          onChange={setViewMode}
          options={viewOptions}
        />
      }
    >
      {renderPodcasts()}
    </Section>
  );
};

export default PodcastSection;
