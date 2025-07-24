"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Podcast } from "@/components/ui/cards/PodcastCard";
import { Episode } from "@/components/ui/cards/EpisodeCard";

const url = "http://localhost:3001/podcast";

export type PodcastsAndEpisodesResponse = {
  podcasts: Podcast[];
  episodes: Episode[];
};

type Params = {
  term?: string;
  enabled?: boolean;
};

export const useGetPodcastsAndEpisodes = (params: Params) => {
  return useQuery({
    queryKey: ["podcastAndEpisode", params.term],
    queryFn: () =>
      axios.get<PodcastsAndEpisodesResponse>(`${url}?term=${params.term}`),
    enabled: params.enabled,
    select: (response) => response.data,
  });
};
