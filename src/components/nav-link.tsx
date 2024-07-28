"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  label: string;
  path: string;
};

export default function NavLink({ label, path }: NavLinkProps) {
  const activePathname = usePathname();
  const isActive = activePathname === path;

  return (
    <li
      className={cn(
        "relative flex items-center hover:text-white transition",
        {
          "text-white/50": !isActive,
          "text-white": isActive,
        }
      )}
    >
      <Link href={path}>{label}</Link>

      {isActive && (
        <motion.div
          layoutId="header-active-link"
          className="h-1 bg-primary w-full absolute bottom-0"
        />
      )}
    </li>
  );
}
