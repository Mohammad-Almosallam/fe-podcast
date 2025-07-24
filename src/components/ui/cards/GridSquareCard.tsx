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
    <div className="w-full h-full">
      <div className="aspect-square mb-2 rounded cursor-pointer">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover rounded overflow-hidden"
        />
      </div>
      <div className="flex items-start  justify-between ">
        <div className="flex flex-col">
          <a className="text-sm  line-clamp-1 cursor-pointer hover:underline">
            {item.title}
          </a>
          <a className="text-xs text-gray-400 line-clamp-1 cursor-pointer hover:underline">
            {item.author}
          </a>
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
};

export default GridSquareCard;
