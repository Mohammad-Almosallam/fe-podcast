import Image from "next/image";
import React from "react";
import MenuDots from "@/assets/menu-dots.svg";

type CompactCardProps = {
  title: string;
  author: string;
  imageUrl: string;
  duration: string;
};

const CompactCard = ({ item }: { item: CompactCardProps }) => {
  return (
    <div className="flex flex-col gap-0.5 h-full w-full  ">
      <div className="flex  overflow-hidden rounded-sm hover:bg-black/30 p-1 gap-2.5 ">
        <div className="relative w-[50px] h-[50px] cursor-pointer shrink-0 rounded-sm overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex w-full items-center justify-between">
          <div>
            <a className="text-sm cursor-pointer hover:underline line-clamp-1">
              {item.title}
            </a>
            <a className="text-xs cursor-pointer hover:underline line-clamp-1 text-[#E3BD71]">
              {item.author}
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
};

export default CompactCard;
