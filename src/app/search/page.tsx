import SearchPage from "./components/SearchPage";

const Page = ({ params }: { params: { term?: string } }) => {
  const term = params.term;

  return <SearchPage initialTerm={term} />;
};

export default Page;
