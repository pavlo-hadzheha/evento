import H1 from "@/components/H1";
import EventsList from "@/components/events-list";
import { Suspense } from "react";
import EventsLoading from "./loading";
import { Metadata } from "next";
import { capitalize } from "lodash-es";
import { z } from "zod";

type EventsPageProps = {
  params: {
    city: string;
  };
  searchParams: {
    page: string | undefined;
  };
};

export function generateMetadata({
  params: { city },
}: EventsPageProps): Metadata {
  return {
    title: getTitle(city),
  };
}

const pageNumberSchema = z.coerce
  .number()
  .int()
  .positive()
  .optional()
  .default(1);

export default function EventsPage({
  params: { city },
  searchParams,
}: EventsPageProps) {
  const page = pageNumberSchema.safeParse(searchParams.page);

  if (!page.success) throw new Error("Invalid page number");

  return (
    <main className="min-h-[110vh] flex flex-col items-center py-24 px-5">
      <H1 className="mb-12">{getTitle(city)}</H1>

      <Suspense key={`${city}-${page.data}`} fallback={<EventsLoading />}>
        <EventsList city={city} page={page.data} />
      </Suspense>
    </main>
  );
}

function getTitle(city: string) {
  return city === "all" ? "All Events" : `Events in ${capitalize(city)}`;
}
