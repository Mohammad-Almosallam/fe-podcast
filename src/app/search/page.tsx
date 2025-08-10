import SearchPage from "./components/SearchPage";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ term?: string | string[] }>;
}) {
  const sp = await searchParams;
  const term = Array.isArray(sp.term) ? sp.term[0] : (sp.term ?? undefined);

  return <SearchPage initialTerm={term} />;
}
