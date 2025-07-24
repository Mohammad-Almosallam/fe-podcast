"use client";

import React, { useState } from "react";
import Section from "../layout/Section";
import ViewToggleMenu, { ViewModes, ViewOptions } from "../ViewToggleMenu";
import PodcastCard, { Podcast } from "../cards/PodcastCard";
import EmblaCarousel from "../embla-carousel/EmbalaCarousel";
import { ScrollProvider } from "../scroll-list/ScrollProvider";
import ScrollList from "../scroll-list/ScrollList";

const viewOptions: ViewOptions[] = [
  { label: "Switch to layout Grid", value: "grid" },
  { label: "Switch to layout Scroll", value: "scroll" },
];

const PodcastSection = ({ podcasts }: { podcasts: Podcast[] }) => {
  const [viewMode, setViewMode] = useState<ViewModes>("grid");

  const renderPodcasts = () => {
    switch (viewMode) {
      case "scroll":
        return (
          <ScrollList
            items={podcasts}
            render={(e) => <PodcastCard podcast={e} />}
            className="pb-2 px-5 py-3"
            breakpoints={[
              { maxWidth: 640, itemsVisible: 2 },
              { maxWidth: 768, itemsVisible: 3 },
              { maxWidth: 1024, itemsVisible: 4 },
              { maxWidth: Infinity, itemsVisible: 5 },
            ]}
          />
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
    <ScrollProvider>
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
    </ScrollProvider>
  );
};

export default PodcastSection;
