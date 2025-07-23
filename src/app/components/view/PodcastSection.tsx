"use client";

import React, { useRef, useState } from "react";
import Section from "../layout/Section";
import ViewToggleMenu, { ViewModes, ViewOptions } from "../ViewToggleMenu";
import PodcastCard, { Podcast } from "../cards/PodcastCard";
import EmblaCarousel from "../embla-carousel/EmbalaCarousel";

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
          <div className="relative px-5 py-3">
            <EmblaCarousel>
              {podcasts.map((podcast, index) => (
                <div key={index} className="shrink-0">
                  <PodcastCard podcast={podcast} />
                </div>
              ))}
            </EmblaCarousel>
          </div>
        );

      case "grid":
      default:
        return (
          <div className="grid grid-cols-2 @[500px]:grid-cols-3 @[700px]:grid-cols-4 @[950px]:grid-cols-5 gap-4 px-5 py-3">
            {podcasts.map((podcast, index) => (
              <PodcastCard key={index} podcast={podcast} />
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
