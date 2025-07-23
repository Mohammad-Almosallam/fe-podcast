import React, { ReactNode } from "react";
import Image from "next/image";
import RightChevronIcon from "@/assets/right-chevron.svg";
import LeftChevronIcon from "@/assets/left-chevron.svg";
import MenuDots from "@/assets/menu-dots.svg";
type SectionProps = {
  title: string | ReactNode;
  children?: ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section>
      <div
        className="
    sticky top-[60px] z-10 
    flex items-center justify-between 
    px-5 py-2.5 
    bg-[hsl(238,27%,12%)] 
    border-b border-[var(--color-border)]

  "
      >
        <p className="text-md font-medium">{title}</p>

        <div className="flex items-center gap-2 shrink-0 ">
          <Image
            src={LeftChevronIcon}
            alt="right-chevron"
            width={18}
            height={18}
            className="opacity-50 cursor-pointer hover:opacity-100"
          />
          <Image
            src={RightChevronIcon}
            alt="right-chevron"
            width={18}
            height={18}
            className="opacity-50 cursor-pointer hover:opacity-100"
          />
          <Image
            src={MenuDots}
            alt="menu-dots"
            width={22}
            height={22}
            className="cursor-pointer"
          />
        </div>
      </div>

      {children && <div className="p-5">{children}</div>}
    </section>
  );
};

export default Section;
