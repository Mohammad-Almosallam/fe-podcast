"use client";
import React, { useState } from "react";
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

  return (
    <div className="relative">
      <button
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image src={MenuDots} alt="menu" width={20} height={20} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-slate-800 rounded shadow text-sm z-50">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`block px-4 py-1 w-full text-left hover:bg-slate-700 ${
                viewMode === option.value ? "font-bold text-indigo-400" : ""
              }`}
            >
              {option.label.charAt(0).toUpperCase() + option.label.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewToggleMenu;
