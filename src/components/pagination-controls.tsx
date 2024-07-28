import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export type PaginationControlsProps = {
  prevPath: string | null;
  nextPath: string | null;
};

const btnStyles =
  "flex items-center gap-x-2 text-sm opacity-75 hover:opacity-100 text-white px-5 py-3 bg-white/5 rounded-lg state-effects";

export default function PaginationControls({
  prevPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="w-full flex justify-between">
      {prevPath ? (
        <Link href={prevPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath ? (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}
