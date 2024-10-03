import { ResultsContainer } from "@/modules/search/ResultContainer";
import { filterFlights } from "@/modules/search/services/airportService";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { origin, destination, date } = searchParams;
  const listResults = await filterFlights(
    origin as string,
    destination as string,
    date as string,
  );

  console.warn("DEBUGPRINT[6]: page.tsx:10: listResults=", listResults);
  return <ResultsContainer trips={listResults} />;
}
