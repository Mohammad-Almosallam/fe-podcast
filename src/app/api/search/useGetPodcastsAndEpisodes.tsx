"use client";
import { Episode } from "@/components/cards/EpisodeCard";
import { Podcast } from "@/components/cards/PodcastCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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
    queryFn: () => axios.get<PodcastsAndEpisodesResponse>(url, { params }),
    enabled: params.enabled,
    select: (response) => response.data,
  });
};
