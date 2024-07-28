"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!searchText) return;

    router.push(`/events/${searchText}`);
  }

  return (
    <form className="w-full sm:w-[580px]" onSubmit={handleSubmit}>
      <input
        value={searchText}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-primary/50 transition focus:ring-2"
        placeholder="Search events in any city ..."
        spellCheck={false}
        autoFocus
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
