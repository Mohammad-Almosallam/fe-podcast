"use client";
import React, { useState } from "react";
import Section from "../Section";
import ViewToggleMenu, { ViewModes, ViewOptions } from "../ViewToggleMenu";
import PodcastCard, { Podcast } from "../cards/PodcastCard";

const viewOptions: ViewOptions[] = [
  {
    label: "Grid",
    value: "grid",
  },
  {
    label: "Scroll",
    value: "scroll",
  },
];

const PodcastSection = ({ podcasts }: { podcasts: Podcast[] }) => {
  const [viewMode, setViewMode] = useState<ViewModes>("grid");

  return (
    <Section
      title={`Top podcasts for ${"فلان"}`}
      menu={
        <ViewToggleMenu
          viewMode={viewMode}
          onChange={(mode) => setViewMode(mode)}
          options={viewOptions}
        />
      }
    >
      {viewMode === "scroll" ? (
        <div className="flex overflow-x-auto gap-3 pb-2">
          {podcasts.map((p, index) => (
            <PodcastCard key={index} podcast={p} viewMode="scroll" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {podcasts.map((p, index) => (
            <PodcastCard key={index} podcast={p} viewMode="grid" />
          ))}
        </div>
      )}
    </Section>
  );
};

export default PodcastSection;
