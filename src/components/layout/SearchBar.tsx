import Image from "next/image";
import RightChevronIcon from "@/assets/right-chevron.svg";
import LeftChevronIcon from "@/assets/left-chevron.svg";
import MenuDots from "@/assets/menu-dots.svg";
import Logo from "@/assets/logo.svg";
type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div
      className="
    sticky top-0 z-20 
    flex items-center justify-between gap-2 
    px-4 py-2.5
    md:p-2.5 
    bg-gradient-to-b from-[#0f1b38] to-transparent backdrop-blur-md
    md:bg-[hsl(238,27%,12%)] md:backdrop-blur-none md:bg-none
  "
    >
      <div className="flex items-center gap-2 shrink-0">
        <div className="md:hidden w-10 h-10 flex items-center">
          <Image src={Logo} alt="logo" />
        </div>

        <Image
          src={LeftChevronIcon}
          alt="left-chevron"
          width={22}
          height={22}
          onClick={() => window.history.back()}
          className="opacity-50 cursor-pointer hover:opacity-100 hidden sm:block"
        />
        <Image
          src={RightChevronIcon}
          alt="right-chevron"
          width={22}
          height={22}
          onClick={() => window.history.forward()}
          className="opacity-50 cursor-pointer hover:opacity-100 hidden sm:block"
        />
      </div>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[hsl(238,27%,12%)]/80 flex-1 h-8 px-4 py-2 text-sm text-center rounded-lg border border-[var(--color-input-border)] focus:outline-none focus:border-indigo-400 focus:bg-[var(--color-input-bg-hover)] focus:placeholder-transparent"
        placeholder="Search through over 70 million podcasts and episodes..."
      />

      <div className="hidden lg:block space-x-2">
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
