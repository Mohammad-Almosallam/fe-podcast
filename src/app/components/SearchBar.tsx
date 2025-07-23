import Image from "next/image";
import RightChevronIcon from "@/assets/right-chevron.svg";
import LeftChevronIcon from "@/assets/left-chevron.svg";
import MenuDots from "@/assets/menu-dots.svg";

export default function SearchBar() {
  return (
    <div
      className="
        sticky top-0 z-20 
        flex items-center justify-between gap-2 
        px-2.5 py-3.5 
        bg-[hsl(238,27%,12%)] 

      "
    >
      <div className="flex items-center gap-2 shrink-0">
        <Image
          src={LeftChevronIcon}
          alt="left-chevron"
          width={22}
          height={22}
          className="opacity-50 cursor-pointer hover:opacity-100"
        />
        <Image
          src={RightChevronIcon}
          alt="right-chevron"
          width={22}
          height={22}
          className="opacity-50 cursor-pointer hover:opacity-100"
        />
      </div>

      <input
        className="flex-1 h-8 px-4 py-2 text-sm text-center rounded-lg border border-[var(--color-input-border)] focus:outline-none focus:border-indigo-400 focus:bg-[var(--color-input-bg-hover)] focus:placeholder-transparent"
        placeholder="Search through over 70 million podcasts and episodes..."
      />

      <div className="space-x-2">
        <button className="h-7.5 bg-gradient-to-t from-[#2d5479] to-[#3f678b] cursor-pointer hover:brightness-125 text-sm px-3 py-1 rounded text-white transition duration-200 ease-in-out">
          Log in
        </button>

        <button className="h-7.5 bg-gradient-to-t from-[#2d5479] to-[#3f678b] cursor-pointer hover:brightness-125 text-sm px-3 py-1 rounded text-white transition duration-200 ease-in-out">
          Sign up
        </button>
      </div>

      <div>
        <Image
          src={MenuDots}
          alt="menu-dots"
          width={22}
          height={22}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
