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
    <div className="flex h-full w-full overflow-hidden rounded-md bg-gradient-to-t from-[#22202c] to-[#27232e] shadow-[inset_0_1px_1px_hsl(240,10%,20%),_0_2px_4px_rgba(0,0,0,0.05)]">
      <div className="group relative h-[110px] w-[110px] shrink-0 cursor-pointer">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full object-cover"
        />
        <div
          onClick={onClick}
          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition duration-200 group-hover:opacity-100"
        >
          <Image src={PlayIcon} alt="menu" width={44} height={44} />
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-between px-4 py-2.5">
        <div className="flex w-full items-start justify-between">
          <div className="flex min-w-0 flex-1 flex-col">
            <a className="line-clamp-1 cursor-pointer text-xs text-[#E3BD71] hover:underline">
              {item.author}
            </a>
            <a className="line-clamp-2 cursor-pointer text-sm hover:underline">
              {item.description}
            </a>
          </div>
          <button className="mr-[-12px] shrink-0 cursor-pointer">
            <Image
              src={MenuDots}
              alt="menu"
              width={20}
              height={20}
              className="h-full w-full brightness-50 transition duration-200 ease-in-out hover:brightness-100"
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
