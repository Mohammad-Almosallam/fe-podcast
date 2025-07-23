import Image from "next/image";
import React from "react";

type SidebarBtnProps = {
  name: string;
  icon: string;
};

const SidebarBtn = ({ name, icon }: SidebarBtnProps) => {
  return (
    <div className="flex  items-center gap-2 px-4 py-2.5">
      <div className="w-4 h-4">
        <Image src={icon} alt="sidebar-icon" />
      </div>
      <a href="#" className="block hover:text-pink-400 ">
        {name}
      </a>
    </div>
  );
};

export default SidebarBtn;
