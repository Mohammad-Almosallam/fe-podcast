"use client";

import { useScroll } from "@/features/search/hooks";
import React, { ReactNode, useMemo } from "react";
import useMeasure from "react-use-measure";

export interface BreakpointConfig {
  maxWidth: number;
  itemsVisible: number;
}

type ScrollListProps<T> = {
  items: T[];
  render: (item: T, index: number) => ReactNode;
  visibleFraction?: number;
  breakpoints?: BreakpointConfig[];
  className?: string;
};

export default function ScrollList<T>({
  items,
  render,
  visibleFraction = 0.9,
  breakpoints = [
    { maxWidth: 640, itemsVisible: 1 },
    { maxWidth: 768, itemsVisible: 2 },
    { maxWidth: 1024, itemsVisible: 3 },
    { maxWidth: Infinity, itemsVisible: 3 },
  ],
  className = "",
}: ScrollListProps<T>) {
  const [measureRef, { width }] = useMeasure();
  const { setContainerRef } = useScroll();

  const itemWidth = useMemo(() => {
    if (!width) return 0;
    const bp = breakpoints.find((b) => width < b.maxWidth) || breakpoints[0];
    return (width * visibleFraction) / bp.itemsVisible;
  }, [width, visibleFraction, breakpoints]);

  return (
    <div
      ref={(node) => {
        measureRef(node);
        setContainerRef(node instanceof HTMLDivElement ? node : null);
      }}
      className={`flex overflow-x-scroll gap-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#464684] scrollbar-thumb-rounded-sm pb-4 [&::-webkit-scrollbar]:visible ${className}`.trim()}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={"flex-shrink-0"}
          style={{ width: `${itemWidth}px` }}
        >
          {render(item, idx)}
        </div>
      ))}
    </div>
  );
}
