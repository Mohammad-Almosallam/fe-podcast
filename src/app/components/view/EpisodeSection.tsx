"use client";
import React, { useState } from "react";
import Section from "../Section";
import ViewToggleMenu, { ViewModes, ViewOptions } from "../ViewToggleMenu";
import EpisodeCard, { Episode } from "../cards/EpisodeCard";

const viewOptions: ViewOptions[] = [
  {
    label: "Grid",
    value: "grid",
  },
  {
    label: "Scroll",
    value: "scroll",
  },
  {
    label: "Compact",
    value: "compact",
  },
  {
    label: "List",
    value: "list",
  },
];

const EpisodeSection = ({ episodes }: { episodes: Episode[] }) => {
  const [viewMode, setViewMode] = useState<ViewModes>("grid");

  return (
    <Section
      title={`Top podcasts for ${"عوعو"}`}
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
          {episodes.map((e, index) => (
            <EpisodeCard key={index} episode={e} viewMode="scroll" />
          ))}
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 @xl:grid-cols-2 @[50rem]:grid-cols-3 gap-4">
          {episodes.map((e, index) => (
            <EpisodeCard key={index} episode={e} viewMode="grid" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 @xl:grid-cols-3 gap-x-4 gap-y-1">
          {episodes.map((e, index) => (
            <EpisodeCard key={index} episode={e} viewMode={viewMode} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default EpisodeSection;
