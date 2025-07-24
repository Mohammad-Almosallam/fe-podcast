import Image from "next/image";
import React from "react";
import PlayIcon from "@/assets/play.svg";
import MenuDots from "@/assets/menu-dots.svg";
import { convertMsToMinutes } from "@/utils/convertMsToMinutes";
import { format } from "date-fns";

type GridRectCardProps = {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  publishedAt: string;
  duration: string;
};

const GridRectCard = ({
  item,
  onClick,
}: {
  item: GridRectCardProps;
  onClick?: () => void;
}) => {
  return (
    <div className="flex  bg-gradient-to-t from-[#22202c] to-[#27232e] h-full w-full rounded-md overflow-hidden shadow-[inset_0_1px_1px_hsl(240,10%,20%),_0_2px_4px_rgba(0,0,0,0.05)]">
      <div className="relative w-[110px] h-[110px] cursor-pointer shrink-0 group">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div
          onClick={onClick}
          className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center"
        >
          <Image src={PlayIcon} alt="menu" width={44} height={44} />
        </div>
      </div>
      <div className="py-2.5 px-4  w-full flex flex-col justify-between items-start">
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col flex-1 min-w-0">
            <a className="text-xs cursor-pointer hover:underline line-clamp-1  text-[#E3BD71]">
              {item.author}
            </a>
            <a className="text-sm cursor-pointer hover:underline line-clamp-2 ">
              {item.description}
            </a>
          </div>
          <button className="cursor-pointer mr-[-12px] shrink-0 ">
            <Image
              src={MenuDots}
              alt="menu"
              width={20}
              height={20}
              className="brightness-50 hover:brightness-100 transition duration-200 ease-in-out w-full h-full"
            />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-[#cfd0d3]">
            {format(new Date(item.publishedAt), "MMM d")}
          </p>
          <p className="text-xs text-[#cfd0d3]">
            {convertMsToMinutes(item.duration)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridRectCard;
