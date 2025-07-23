import Image from "next/image";
import Logo from "@/assets/logo.svg";
import SidebarBtn from "../buttons/SidebarBtn";
import SaturnIcon from "@/assets/saturn.svg";
import RocketIcon from "@/assets/rocket.svg";
import BurgerMenuIcon from "@/assets/burger.svg";
import DashboardMenuIcon from "@/assets/menu.svg";
import TimerIcon from "@/assets/timer.svg";

const Sidebar = () => {
  return (
    <aside className="w-56 hidden md:flex  flex-col bg-[var(--color-bg-sidebar)] h-screen sticky top-0 border-r border-[var(--color-border)]">
      <div className="p-4 mb-4">
        <Image src={Logo} alt="" />
      </div>

      <nav className="text-sm flex-1 flex flex-col justify-start">
        <SidebarBtn name="Home" icon={SaturnIcon} />
        <SidebarBtn name="Discover" icon={RocketIcon} />

        <div className="mt-4">
          <div className="text-gray-300 uppercase text-xs px-4 font-bold mb-1">
            Your Stuff
          </div>
          <SidebarBtn name="My Queue" icon={BurgerMenuIcon} />
          <SidebarBtn name="My Podcasts" icon={DashboardMenuIcon} />
          <SidebarBtn name="Recents" icon={TimerIcon} />
        </div>
      </nav>

      {/* Footer */}
      <div className="text-xs  px-4 py-3 mt-auto flex flex-col text-[#777]">
        <div>
          Podbay v2.9.6 by{" "}
          <a href="#" className="hover:underline">
            Fancy Soups.
          </a>
        </div>
        <div className="flex gap-2">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            All Podcasts
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
