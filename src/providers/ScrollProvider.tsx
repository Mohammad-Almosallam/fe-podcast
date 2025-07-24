"use client";

import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";
import useMeasure from "react-use-measure";

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
  const [measureRef, { width }] = useMeasure();

  measureRef(containerRef);

  const scrollNext = useCallback(
    (duration: number = 400) => {
      if (containerRef) {
        containerRef.scrollBy({ left: width, behavior: "smooth" });
      }
    },
    [containerRef, width]
  );

  const scrollPrev = useCallback(
    (duration: number = 400) => {
      if (containerRef) {
        containerRef.scrollBy({ left: -width, behavior: "smooth" });
      }
    },
    [containerRef, width]
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
