"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type ScrollContextType = {
  scrollNext: (distance?: number) => void;
  scrollPrev: (distance?: number) => void;
  setContainerRef: (el: HTMLDivElement | null) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  const scrollNext = useCallback(
    (distance: number = 200) => {
      if (containerRef) {
        containerRef.scrollBy({ left: distance, behavior: "smooth" });
      }
    },
    [containerRef]
  );

  const scrollPrev = useCallback(
    (distance: number = 200) => {
      if (containerRef) {
        containerRef.scrollBy({ left: -distance, behavior: "smooth" });
      }
    },
    [containerRef]
  );

  return (
    <ScrollContext.Provider value={{ setContainerRef, scrollNext, scrollPrev }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScroll must be used within ScrollProvider");
  return ctx;
};
