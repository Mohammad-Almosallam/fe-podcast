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
    <div className="sticky top-0 z-20 flex items-center justify-between gap-2 bg-gradient-to-b from-[#0f1b38] to-transparent px-4 py-2.5 backdrop-blur-md md:bg-[hsl(238,27%,12%)] md:bg-none md:p-2.5 md:backdrop-blur-none">
      <div className="flex shrink-0 items-center gap-2">
        <div className="flex h-10 w-10 items-center md:hidden">
          <Image src={Logo} alt="logo" />
        </div>

        <Image
          src={LeftChevronIcon}
          alt="left-chevron"
          width={22}
          height={22}
          onClick={() => window.history.back()}
          className="hidden cursor-pointer opacity-50 hover:opacity-100 sm:block"
        />
        <Image
          src={RightChevronIcon}
          alt="right-chevron"
          width={22}
          height={22}
          onClick={() => window.history.forward()}
          className="hidden cursor-pointer opacity-50 hover:opacity-100 sm:block"
        />
      </div>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 flex-1 rounded-lg border border-[var(--color-input-border)] bg-[hsl(238,27%,12%)]/80 px-4 py-2 text-center text-sm focus:border-indigo-400 focus:bg-[var(--color-input-bg-hover)] focus:placeholder-transparent focus:outline-none"
        placeholder="Search through over 70 million podcasts and episodes..."
      />

      <div className="hidden space-x-2 lg:block">
        <button className="h-7.5 cursor-pointer rounded bg-gradient-to-t from-[#2d5479] to-[#3f678b] px-3 py-1 text-sm text-white transition duration-200 ease-in-out hover:brightness-125">
          Log in
        </button>

        <button className="h-7.5 cursor-pointer rounded bg-gradient-to-t from-[#2d5479] to-[#3f678b] px-3 py-1 text-sm text-white transition duration-200 ease-in-out hover:brightness-125">
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
