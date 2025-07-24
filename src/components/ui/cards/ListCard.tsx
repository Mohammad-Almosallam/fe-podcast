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
    <div className="flex overflow-hidden rounded-sm group hover:bg-black/30 px-4 py-2.5 gap-2.5 border-b-1 border-[var(--color-border)]">
      <div className="relative w-[100px] h-[100px] cursor-pointer shrink-0 rounded-sm overflow-hidden">
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

      <div className="flex w-full items-center justify-between ">
        <div className="flex flex-col gap-3 justify-between h-full">
          <div>
            <a className="text-md cursor-pointer hover:underline line-clamp-1">
              {item.title}
            </a>
            <a className="text-xs cursor-pointer hover:underline line-clamp-1 text-[#E3BD71]">
              {item.author}
            </a>
            <a className="text-xs cursor-pointer hover:underline line-clamp-2 text-[#ffffff99]">
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
        <div className="flex flex-col gap-4 shrink-0">
          <button className="cursor-pointer">
            <Image
              src={PlayIcon}
              alt="menu"
              width={12}
              height={12}
              className="brightness-50 hover:brightness-100 transition duration-200 ease-in-out"
            />
          </button>
          <button className="cursor-pointer ">
            <Image
              src={MenuDots}
              alt="menu"
              width={12}
              height={12}
              className="brightness-50 hover:brightness-100 transition duration-200 ease-in-out"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
