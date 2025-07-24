"use client";

import React, { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "../../../components/layout/SearchBar";
import PodcastSection from "./PodcastSection";

import { useGetPodcastsAndEpisodes } from "@/app/search/api/useGetPodcastsAndEpisodes";
import EpisodeSection from "@/app/search/components/EpisodeSection";

export default function SearchPage({ initialTerm }: { initialTerm?: string }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState<string>(
    searchParams.get("term") ?? initialTerm ?? "",
  );
  const [debouncedSearchTerm, setDebouncedSearchTerm] =
    useState<string>(search);

  const {
    data: fetchedData,
    isLoading,
    isError,
  } = useGetPodcastsAndEpisodes({
    term: debouncedSearchTerm,
    enabled: !!debouncedSearchTerm,
  });

  const podcasts = fetchedData?.podcasts || [];
  const episodes = fetchedData?.episodes || [];

  const handleSearchChange = (value: string) => {
    setSearch(value);
    debouncedSearch(value);
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((searchTerm: string) => {
        setDebouncedSearchTerm(searchTerm);
        router.replace(
          `/search?term=${encodeURIComponent(searchTerm)}`,
          undefined,
        );
      }, 800),
    [router],
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="flex-1 overflow-y-auto">
      <SearchBar value={search} onChange={handleSearchChange} />

      {podcasts.length === 0 &&
        episodes.length === 0 &&
        !debouncedSearchTerm && (
          <div className="mt-4 text-center text-gray-500">
            Type in a search term to start.
          </div>
        )}
      {isLoading && (
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
        </div>
      )}

      {isError && (
        <div className="mt-4 text-center text-red-500">
          Error loading podcasts and episodes
        </div>
      )}

      {!isLoading &&
        !isError &&
        podcasts.length === 0 &&
        episodes.length === 0 &&
        debouncedSearchTerm && (
          <div className="mt-4 text-center text-gray-500">
            No results found for {debouncedSearchTerm}
          </div>
        )}

      <div className="mt-10">
        {podcasts.length > 0 && <PodcastSection podcasts={podcasts} />}
        {episodes.length > 0 && <EpisodeSection episodes={episodes} />}
      </div>
    </div>
  );
}
