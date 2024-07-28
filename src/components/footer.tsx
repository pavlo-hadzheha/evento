import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "Terms & Conditions", path: "/terms-and-conditions" },
    { label: "Privacy Policy", path: "/privacy-policy" },
  ];
  return (
    <footer className="h-14 mt-auto flex items-center justify-between px-3 md:px-9 text-xs text-white/25 border-t border-t-white/10">
      <small>© 2050 ByteGrad. All rights reserved</small>

      <ul className="flex gap-x-3 sm:gap-x-8">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
