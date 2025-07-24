import React, { ReactNode } from "react";

interface SectionProps {
  title: ReactNode;
  children: ReactNode;
  menu?: ReactNode;
}

const Section = ({ title, children, menu }: SectionProps) => {
  return (
    <section>
      <div className="md:sticky top-[51px] z-10 flex justify-between px-5 py-2.5 bg-[hsl(238,27%,12%)] border-b border-[var(--color-border)]">
        <h2 className="text-md font-medium">{title}</h2>
        {menu}
      </div>
      <div className="@container">{children}</div>
    </section>
  );
};

export default Section;
