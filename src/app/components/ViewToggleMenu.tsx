"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MenuDots from "@/assets/menu-dots.svg";

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
    <div className="relative">
      <button
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image src={MenuDots} alt="menu" width={20} height={20} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 z-50" ref={menuRef}>
          {/* Menu container */}
          <div className="bg-gradient-to-bl from-[#6b4081] to-[#414080] rounded-lg p-1 shadow-lg min-w-[220px] text-white text-sm">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-2 transition-opacity duration-150
                  hover:opacity-90 cursor-pointer hover:bg-black/10
                  rounded-md
                  ${viewMode === option.value ? "opacity-100" : "opacity-80"}
                `}
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
