"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MenuDots from "@/assets/menu-dots.svg";

import LeftChevronIcon from "@/assets/left-chevron.svg";
import RightChevronIcon from "@/assets/right-chevron.svg";
import { useScroll } from "@/providers/ScrollProvider";

export type ViewModes = "grid" | "scroll" | "list" | "compact";

export type ViewOptions = {
  label: string;
  value: ViewModes;
};

type ViewToggleMenuProps = {
  viewMode: ViewModes;
  onChange: (mode: ViewModes) => void;
  options: ViewOptions[];
};

const ViewToggleMenu = ({
  viewMode,
  onChange,
  options,
}: ViewToggleMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { scrollNext, scrollPrev } = useScroll();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex gap-2">
      {viewMode === "scroll" && (
        <div className="flex shrink-0 items-center gap-2">
          <Image
            src={LeftChevronIcon}
            alt="left-chevron"
            width={22}
            height={22}
            onClick={() => scrollPrev(200)}
            className="cursor-pointer opacity-50 hover:opacity-100"
          />
          <Image
            src={RightChevronIcon}
            alt="right-chevron"
            width={22}
            height={22}
            onClick={() => scrollNext(200)}
            className="cursor-pointer opacity-50 hover:opacity-100"
          />
        </div>
      )}
      <button
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image src={MenuDots} alt="menu" width={20} height={20} />
      </button>

      {open && (
        <div className="absolute right-0 z-30 mt-2" ref={menuRef}>
          <div className="min-w-[220px] rounded-lg bg-gradient-to-bl from-[#6b4081] to-[#414080] p-1 text-sm text-white shadow-lg">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`w-full cursor-pointer rounded-md px-4 py-2 text-left transition-opacity duration-150 hover:bg-black/10 hover:opacity-90 ${viewMode === option.value ? "opacity-100" : "opacity-80"} `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewToggleMenu;
