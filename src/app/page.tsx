import { redirect } from "next/navigation";

const Home = () => {
  //I'll redirect to the search page as the main entry point just for the sake of this assignment
  redirect("/search");
};

export default Home;
