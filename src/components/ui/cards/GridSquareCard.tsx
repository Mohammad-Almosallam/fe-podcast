import React from "react";
import Image from "next/image";
import MenuDots from "@/assets/menu-dots.svg";

type GridSquareCardProps = {
  title: string;
  author: string;
  imageUrl: string;
};

const GridSquareCard = ({ item }: { item: GridSquareCardProps }) => {
  return (
    <div className="h-full w-full">
      <div className="mb-2 aspect-square cursor-pointer rounded">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full overflow-hidden rounded object-cover"
        />
      </div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <a className="line-clamp-1 cursor-pointer text-sm hover:underline">
            {item.title}
          </a>
          <a className="line-clamp-1 cursor-pointer text-xs text-gray-400 hover:underline">
            {item.author}
          </a>
        </div>
        <button className="mr-[-7px] cursor-pointer">
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
  );
};

export default GridSquareCard;
