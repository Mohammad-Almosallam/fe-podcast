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
    <div className="flex h-full w-full flex-col gap-0.5">
      <div className="flex gap-2.5 overflow-hidden rounded-sm p-1 hover:bg-black/30">
        <div className="relative h-[50px] w-[50px] shrink-0 cursor-pointer overflow-hidden rounded-sm">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full items-center justify-between">
          <div>
            <a className="line-clamp-1 cursor-pointer text-sm hover:underline">
              {item.title}
            </a>
            <a className="line-clamp-1 cursor-pointer text-xs text-[#E3BD71] hover:underline">
              {item.author}
            </a>
          </div>
          <button className="shrink-0 cursor-pointer">
            <Image
              src={MenuDots}
              alt="menu"
              width={20}
              height={20}
              className="brightness-50 transition duration-200 ease-in-out hover:brightness-100"
            />
          </button>
        </div>
      </div>
      <div className="w-full border-[0.5px] border-[var(--color-border)]" />
    </div>
  );
};

export default CompactCard;
