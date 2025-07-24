import Image from "next/image";
import React from "react";
import PlayIcon from "@/assets/play.svg";
import MenuDots from "@/assets/menu-dots.svg";
import { convertMsToMinutes } from "@/utils/convertMsToMinutes";
import { format } from "date-fns";

type ListCardProps = {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  publishedAt: string;
  duration: string;
};

const ListCard = ({
  item,
  onClick,
}: {
  item: ListCardProps;
  onClick?: () => void;
}) => {
  return (
    <div className="group flex gap-2.5 overflow-hidden rounded-sm border-b-1 border-[var(--color-border)] px-4 py-2.5 hover:bg-black/30">
      <div className="relative h-[100px] w-[100px] shrink-0 cursor-pointer overflow-hidden rounded-sm">
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

      <div className="flex w-full items-center justify-between">
        <div className="flex h-full flex-col justify-between gap-3">
          <div>
            <a className="text-md line-clamp-1 cursor-pointer hover:underline">
              {item.title}
            </a>
            <a className="line-clamp-1 cursor-pointer text-xs text-[#E3BD71] hover:underline">
              {item.author}
            </a>
            <a className="line-clamp-2 cursor-pointer text-xs text-[#ffffff99] hover:underline">
              {item.description}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#cfd0d3]">
              {format(item.publishedAt, "MMM d, yyyy")}
            </span>
            <span className="text-xs text-[#cfd0d3]">
              {convertMsToMinutes(item.duration)}
            </span>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-4">
          <button className="cursor-pointer">
            <Image
              src={PlayIcon}
              alt="menu"
              width={12}
              height={12}
              className="brightness-50 transition duration-200 ease-in-out hover:brightness-100"
            />
          </button>
          <button className="cursor-pointer">
            <Image
              src={MenuDots}
              alt="menu"
              width={12}
              height={12}
              className="brightness-50 transition duration-200 ease-in-out hover:brightness-100"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
