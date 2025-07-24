"use client";

import Section from "@/components/layout/Section";
import ViewToggleMenu, {
  ViewModes,
  ViewOptions,
} from "@/components/ui/buttons/ViewToggleMenu";
import EpisodeCard, { Episode } from "@/components/ui/cards/EpisodeCard";
import ScrollList from "@/components/ui/scroll-list/ScrollList";
import { ScrollProvider } from "@/providers/ScrollProvider";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const viewOptions: ViewOptions[] = [
  { label: "Switch to layout Grid", value: "grid" },
  { label: "Switch to layout Scroll", value: "scroll" },
  { label: "Switch to layout Compact", value: "compact" },
  { label: "Switch to layout List", value: "list" },
];

const EpisodeSection = ({ episodes }: { episodes: Episode[] }) => {
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<ViewModes>("grid");

  const renderEpisodes = () => {
    switch (viewMode) {
      case "scroll":
        return (
          <ScrollList
            items={episodes}
            render={(e) => <EpisodeCard episode={e} viewMode="scroll" />}
            className="pb-2 px-5 py-3"
          />
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
    <ScrollProvider>
      <Section
        title={`Top podcasts for ${searchParams.get("term") ?? ""}`}
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
    </ScrollProvider>
  );
};

export default EpisodeSection;
