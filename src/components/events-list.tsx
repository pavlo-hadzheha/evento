import EventCard from "./event-card";
import { fetchEvents } from "@/lib/server-utils";
import { EventoEvent } from "@prisma/client";
import PaginationControls, {
  PaginationControlsProps,
} from "./pagination-controls";

type EventsListProps = {
  city: string;
  page: number;
};

export default async function EventsList({ city, page }: EventsListProps) {
  const events: EventoEvent[] = await fetchEvents(city, page);
  const paginationProps: PaginationControlsProps = {
    prevPath: page <= 1 ? null : `/events/${city}?page=${page - 1}`,
    nextPath: events.length < 6 ? null : `/events/${city}?page=${page + 1}`,
  };
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-5">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls {...paginationProps} />
    </section>
  );
}
