import React from "react";
import { ViewModes } from "../ViewToggleMenu";
import Image from "next/image";
import MenuDots from "@/assets/menu-dots.svg";
export type Podcast = {
  id: string;
  title: string;
  image: string;
  author: string;
};

type PodcastCardProps = {
  podcast: Podcast;
  viewMode: ViewModes;
};

const PodcastCard = ({ podcast, viewMode }: PodcastCardProps) => {
  if (viewMode === "grid") {
    return (
      <div className="w-full h-full">
        <div className="aspect-square mb-2 rounded">
          <img
            src={podcast.image}
            alt={podcast.title}
            className="w-full h-full object-cover rounded overflow-hidden"
          />
        </div>
        <div className="flex items-start  justify-between ">
          <div className="flex flex-col">
            <p className="text-sm  truncate">{podcast.title}</p>
            <p className="text-xs text-gray-400 truncate">{podcast.author}</p>
          </div>
          <button className="cursor-pointer  mr-[-7px]">
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
    );
  }

  if (viewMode === "scroll") {
    return (
      <div className="w-40 h-40 bg-gray-700 rounded shrink-0">
        Scroll View - {podcast.title}
      </div>
    );
  }

  return null;
};

export default PodcastCard;
