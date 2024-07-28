import H1 from "@/components/H1";
import Skeleton from "@/components/skeleton";
import React from "react";

export default function EventsLoading() {
  return (
    <div className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-5 mx-auto mb-28">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton
          key={index}
          className="max-w-[500px] h-[380px] flex-1 basis-80"
        />
      ))}
    </div>
  );
}
