import H1 from "@/components/H1";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { EventoEvent } from "@prisma/client";
import { fetchEvent } from "@/lib/server-utils";
import { cn } from "@/lib/utils";

type EventPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params: { slug },
}: EventPageProps): Promise<Metadata> {
  const event: EventoEvent = await fetchEvent(slug);

  return {
    title: event.name,
  };
}

export async function generateStaticParams() {
  // top 100 most popular events
  return [{ slug: "dj-practice-session" }, { slug: "science-space-expo" }];
}

export default async function EventPage({ params: { slug } }: EventPageProps) {
  const event: EventoEvent = await fetchEvent(slug);

  return (
    <main>
      <section className="relative flex justify-center items-center overflow-hidden py-14 md:py-20">
        <Image
          src={event.imageUrl}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          alt="Event background image"
          quality={50}
          className="blur-3xl object-cover"
        />

        <div className="relative flex flex-col gap-6 lg:gap-x-16 lg:flex-row">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="ring-2 ring-white/50 rounded-xl object-cover"
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 lg:text-5xl whitespace-nowrap">
              {event.name}
            </H1>

            <p>
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button
              className={cn(
                "capitalize w-[95vw] sm:w-full py-2 lg:mt-auto mt-5",
                "bg-white/20 text-lg rounded-md border-white/10 border-2",
                "state-effects"
              )}
            >
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16 space-y-12">
        <Section title="About this event" content={event.description} />
        <Section title="Location" content={event.location} />
      </div>
    </main>
  );
}

type SectionProps = {
  title: string;
  content: string;
};

function Section({ content, title }: SectionProps) {
  return (
    <section>
      <h2 className="text-2xl">{title}</h2>
      <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
        {content}
      </p>
    </section>
  );
}
