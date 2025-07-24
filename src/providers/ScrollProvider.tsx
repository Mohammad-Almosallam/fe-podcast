"use client";

import React, { createContext, useState, useCallback } from "react";
import useMeasure from "react-use-measure";

type ScrollContextType = {
  scrollNext: (distance?: number) => void;
  scrollPrev: (distance?: number) => void;
  setContainerRef: (el: HTMLDivElement | null) => void;
};

export const ScrollContext = createContext<ScrollContextType | undefined>(
  undefined
);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [measureRef, { width }] = useMeasure();
  measureRef(containerRef);

  const scrollNext = useCallback(() => {
    if (containerRef) {
      containerRef.scrollBy({ left: width, behavior: "smooth" });
    }
  }, [containerRef]);

  const scrollPrev = useCallback(() => {
    if (containerRef) {
      containerRef.scrollBy({ left: -width, behavior: "smooth" });
    }
  }, [containerRef]);

  return (
    <ScrollContext.Provider value={{ setContainerRef, scrollNext, scrollPrev }}>
      {children}
    </ScrollContext.Provider>
  );
};
