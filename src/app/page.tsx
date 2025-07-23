import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import PodcastCard from "@/components/PodcastCard";
import EpisodeRow from "@/components/EpisodeRow";
import Section from "./components/Section";

const DUMMY_PODCASTS = Array(5).fill({
  title: "بودكاست قهوة",
  author: "Omar Eldeep",
  image: "/placeholder.png",
});

const DUMMY_EPISODES = Array(10).fill({
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
          <Section
            title={
              <div>
                Top podcasts for <span>فلان</span>
              </div>
            }
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {DUMMY_PODCASTS.map((p, i) => (
                <PodcastCard key={i} {...p} />
              ))}
            </div>
          </Section>

          <Section
            title={
              <div>
                Top episodes for <span className="text-blue-400">فلان</span>
              </div>
            }
          >
            <div className="grid md:grid-cols-2 gap-4">
              {DUMMY_EPISODES.map((e, i) => (
                <EpisodeRow key={i} {...e} />
              ))}
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}
