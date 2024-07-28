import "server-only";
import { notFound } from "next/navigation";
import { capitalize } from "lodash-es";
import prisma from "./db";
import { unstable_cache } from "next/cache";

export const fetchEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({ where: { slug: slug } });
  if (!event) return notFound();
  return event;
});

export const fetchEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: {
        equals: city === "all" ? undefined : city,
        mode: "insensitive",
      },
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: page * 6 - 6,
  });
  return events;
});
