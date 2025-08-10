"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Episode, Podcast } from "@/utils/types";

const url = "https://be-podcast.onrender.com/podcast";

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
