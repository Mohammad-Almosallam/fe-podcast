import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import PodcastSection from "./components/view/PodcastSection";
import EpisodeSection from "./components/view/EpisodeSection";

const DUMMY_PODCASTS = Array(5).fill({
  title: "بودكاست قهوة",
  author: "Omar Eldeep",
  image: "https://dummyimage.com/600x400/ffffff/ebecff",
  description:
    "Joe is a hobo punk anarchist who wants to jettison part of his old self, so that he can step out onto the dance floor. Our final episode of season 2.",
});

const DUMMY_EPISODES = Array(20).fill({
  title: "قهوة وسمر",
  author: "Reham Ayam",
  image: "https://dummyimage.com/600x400/ffffff/ebecff",
  description:
    "Joe is a hobo punk anarchist who wants to jettison part of his old self, so that he can step out onto the dance floor. Our final episode of season 2.",
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
