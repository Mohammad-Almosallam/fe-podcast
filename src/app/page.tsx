import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import PodcastSection from "./components/view/PodcastSection";
import EpisodeSection from "./components/view/EpisodeSection";

const DUMMY_PODCASTS = Array(5).fill({
  title: "بودكاست قهوة",
  author: "Omar Eldeep",
  image: "/placeholder.png",
});

const DUMMY_EPISODES = Array(20).fill({
  title: "قهوة وسمر",
  author: "Reham Ayam",
  image: "/placeholder.png",
});

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1  overflow-y-auto ">
        <SearchBar />

        <div className="mt-8">
          <PodcastSection podcasts={DUMMY_PODCASTS} />
          <EpisodeSection episodes={DUMMY_EPISODES} />
        </div>
      </main>
    </div>
  );
}
