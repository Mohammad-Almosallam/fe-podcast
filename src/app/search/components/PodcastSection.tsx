"use client";

import Section from "@/components/layout/Section";
import ViewToggleMenu, {
  ViewModes,
  ViewOptions,
} from "@/components/ui/buttons/ViewToggleMenu";
import GridSquareCard from "@/components/ui/cards/GridSquareCard";
import ScrollList from "@/components/ui/scroll-list/ScrollList";
import { ScrollProvider } from "@/providers/ScrollProvider";
import { Podcast } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const viewOptions: ViewOptions[] = [
  { label: "Switch to layout Grid", value: "grid" },
  { label: "Switch to layout Scroll", value: "scroll" },
];

const PodcastSection = ({ podcasts }: { podcasts: Podcast[] }) => {
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<ViewModes>("grid");

  const renderPodcasts = () => {
    switch (viewMode) {
      case "scroll":
        return (
          <ScrollList
            items={podcasts}
            render={(e) => <GridSquareCard item={e} />}
            className="px-5 py-3 pb-2"
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
          <div className="grid grid-cols-2 gap-4 px-5 py-3 @[500px]:grid-cols-3 @[700px]:grid-cols-4 @[950px]:grid-cols-5">
            {podcasts.map((p, index) => (
              <GridSquareCard key={index} item={p} />
            ))}
          </div>
        );
    }
  };

  return (
    <ScrollProvider>
      <Section
        title={`Top podcasts for ${searchParams.get("term")}`}
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
