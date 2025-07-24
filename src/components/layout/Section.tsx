import React, { ReactNode } from "react";

type SectionProps = {
  title: ReactNode;
  children: ReactNode;
  menu?: ReactNode;
};

const Section = ({ title, children, menu }: SectionProps) => {
  return (
    <section>
      <div className="top-[51px] z-10 flex justify-between border-b border-[var(--color-border)] bg-[hsl(238,27%,12%)] px-5 py-2.5 md:sticky">
        <h2 className="text-md font-medium">{title}</h2>
        {menu}
      </div>
      <div className="@container">{children}</div>
    </section>
  );
};

export default Section;
