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
    <aside className="sticky top-0 hidden h-screen w-56 flex-col border-r border-[var(--color-border)] bg-[var(--color-bg-sidebar)] md:flex">
      <div className="mb-4 p-4">
        <Image src={Logo} alt="logo" />
      </div>

      <nav className="flex flex-1 flex-col justify-start text-sm">
        <SidebarBtn name="Home" icon={SaturnIcon} />
        <SidebarBtn name="Discover" icon={RocketIcon} />

        <div className="mt-4">
          <div className="mb-1 px-4 text-xs font-bold text-gray-300 uppercase">
            Your Stuff
          </div>
          <SidebarBtn name="My Queue" icon={BurgerMenuIcon} />
          <SidebarBtn name="My Podcasts" icon={DashboardMenuIcon} />
          <SidebarBtn name="Recents" icon={TimerIcon} />
        </div>
      </nav>

      {/* Footer */}
      <div className="mt-auto flex flex-col gap-2 px-4 py-3 text-xs text-[#777]">
        <div className="flex items-center justify-between gap-1 rounded-md bg-black/20 p-3">
          <div
            onClick={skipBackward}
            className="flex items-center gap-1 text-xs"
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
            className="flex items-center gap-1 text-xs"
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
