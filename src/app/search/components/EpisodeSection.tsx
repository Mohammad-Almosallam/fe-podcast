"use client";

import Section from "@/components/layout/Section";
import ViewToggleMenu, {
  ViewModes,
  ViewOptions,
} from "@/components/ui/buttons/ViewToggleMenu";
import CompactCard from "@/components/ui/cards/CompactCard";

import GridRectCard from "@/components/ui/cards/GridRectCard";
import ListCard from "@/components/ui/cards/ListCard";
import ScrollList from "@/components/ui/scroll-list/ScrollList";
import { useAudio } from "@/providers/AudioPlayerProvider";
import { ScrollProvider } from "@/providers/ScrollProvider";
import { Episode } from "@/utils/types";
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

  const { play } = useAudio();

  const renderEpisodes = () => {
    switch (viewMode) {
      case "scroll":
        return (
          <ScrollList
            items={episodes}
            render={(e) => (
              <GridRectCard item={e} onClick={() => play(e.audioUrl)} />
            )}
            className="pb-2 px-5 py-3"
          />
        );

      case "grid":
        return (
          <div className="grid grid-cols-1 @xl:grid-cols-2 @[50rem]:grid-cols-3 gap-4 px-5 py-3">
            {episodes.map((e, index) => (
              <GridRectCard
                key={index}
                item={e}
                onClick={() => play(e.audioUrl)}
              />
            ))}
          </div>
        );

      case "compact":
        return (
          <div className="grid grid-cols-1 @xl:grid-cols-3 gap-x-4 gap-y-1 px-5 py-3">
            {episodes.map((e, index) => (
              <CompactCard key={index} item={e} />
            ))}
          </div>
        );

      case "list":
      default:
        return (
          <div className="flex flex-col">
            {episodes.map((e, index) => (
              <ListCard key={index} item={e} onClick={() => play(e.audioUrl)} />
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
