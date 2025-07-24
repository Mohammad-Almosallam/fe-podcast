import { ScrollContext } from "@/providers/ScrollProvider";
import { useContext } from "react";

export const useScroll = () => {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScroll must be used within ScrollProvider");
  return ctx;
};
