import React from "react";
import { ViewModes } from "../ViewToggleMenu";
import Image from "next/image";
import PlayIcon from "@/assets/play.svg";
import MenuDots from "@/assets/menu-dots.svg";

export type Episode = {
  id: string;
  title: string;
  image: string;
};

interface EpisodeCardProps {
  episode: Episode;
  viewMode: ViewModes;
}

const EpisodeCard = ({ episode, viewMode }: EpisodeCardProps) => {
  switch (viewMode) {
    case "grid":
      return (
        <div className="flex bg-gradient-to-t from-[#22202c] to-[#27232e] h-full w-full rounded-md overflow-hidden shadow-[inset_0_1px_1px_hsl(240,10%,20%),_0_2px_4px_rgba(0,0,0,0.05)]">
          <div className="relative w-[110px] h-[110px] cursor-pointer shrink-0 group">
            {/* Episode image */}
            <img
              src={episode.image}
              alt={episode.title}
              className="w-full h-full object-cover"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center">
              <Image src={PlayIcon} alt="menu" width={44} height={44} />
            </div>
          </div>
          <div className="py-2.5 px-4  w-full flex flex-col justify-between items-start">
            <div className="flex w-full items-start justify-between">
              <div>
                <a className="text-xs cursor-pointer hover:underline line-clamp-1 text-[#E3BD71]">
                  The Motivator Podcast with Dhari Ibrahim
                </a>

                <a className="text-sm cursor-pointer hover:underline line-clamp-1">
                  040 | فن التواصل
                </a>
              </div>
              <button className="cursor-pointer  mr-[-12px] shrink-0">
                <Image
                  src={MenuDots}
                  alt="menu"
                  width={20}
                  height={20}
                  className="brightness-50 hover:brightness-100 transition duration-200 ease-in-out"
                />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs text-[#cfd0d3]">Feb 10</p>
              <p className="text-xs text-[#cfd0d3]">44min</p>
            </div>
          </div>
        </div>
      );
    case "scroll":
      return (
        <div className="bg-gray-700 w-40 h-40 shrink-0 rounded">
          Scroll - {episode.title}
        </div>
      );
    case "compact":
      return (
        <div className="flex flex-col gap-1 h-full w-full  ">
          <div className="flex  overflow-hidden rounded-sm hover:bg-black/30 p-1 gap-2.5 ">
            <div className="relative w-[50px] h-[50px] cursor-pointer shrink-0 rounded-sm overflow-hidden">
              <img
                src={episode.image}
                alt={episode.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex w-full items-center justify-between">
              <div>
                <a className="text-sm cursor-pointer hover:underline line-clamp-1">
                  040 | فن التواصل
                </a>
                <a className="text-xs cursor-pointer hover:underline line-clamp-1 text-[#E3BD71]">
                  The Motivator Podcast with Dhari Ibrahim
                </a>
              </div>
              <button className="cursor-pointer   shrink-0">
                <Image
                  src={MenuDots}
                  alt="menu"
                  width={20}
                  height={20}
                  className="brightness-50 hover:brightness-100 transition duration-200 ease-in-out"
                />
              </button>
            </div>
          </div>
          <div className="w-full border-[var(--color-border)] border-[0.5px]" />
        </div>
      );
    case "list":
      return (
        <div className="bg-gray-700 p-3 border-b border-gray-600">
          List - {episode.title}
        </div>
      );
    default:
      return null;
  }
};

export default EpisodeCard;
