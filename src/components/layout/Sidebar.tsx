"use client";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import PlayIcon from "@/assets/play-icon.svg";
import PauseIcon from "@/assets/pause-icon.svg";
import SkipRight from "@/assets/skip-right.svg";
import SkipLeft from "@/assets/skip-left.svg";
import SaturnIcon from "@/assets/saturn.svg";
import RocketIcon from "@/assets/rocket.svg";
import BurgerMenuIcon from "@/assets/burger.svg";
import DashboardMenuIcon from "@/assets/menu.svg";
import TimerIcon from "@/assets/timer.svg";
import SidebarBtn from "../ui/buttons/SidebarBtn";
import { useAudio } from "@/providers/AudioPlayerProvider";

const Sidebar = () => {
  const { play, pause, isPlaying, skipBackward, skipForward } = useAudio();

  return (
    <aside className="w-56 hidden md:flex  flex-col bg-[var(--color-bg-sidebar)] h-screen sticky top-0 border-r border-[var(--color-border)]">
      <div className="p-4 mb-4">
        <Image src={Logo} alt="logo" />
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
      <div className=" gap-2 text-xs  px-4 py-3 mt-auto flex flex-col text-[#777]">
        <div className="flex items-center gap-1 justify-between p-3 rounded-md bg-black/20">
          <div
            onClick={skipBackward}
            className="flex text-xs items-center gap-1"
          >
            <Image src={SkipLeft} alt="menu" width={22} height={22} />
            <p>15s</p>
          </div>
          <button onClick={() => (isPlaying ? pause() : play())}>
            {isPlaying ? (
              <Image src={PauseIcon} alt="menu" width={22} height={22} />
            ) : (
              <Image src={PlayIcon} alt="menu" width={22} height={22} />
            )}
          </button>
          <div
            onClick={skipForward}
            className="flex text-xs items-center gap-1"
          >
            <p>15s</p>
            <Image src={SkipRight} alt="menu" width={22} height={22} />
          </div>
        </div>
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
