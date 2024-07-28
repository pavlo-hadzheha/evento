import NavLink from "./nav-link";

export default function NavLinks() {
  const links = [
    { label: "Home", path: "/" },
    { label: "All Events", path: "/events/all" },
  ];

  return (
    <nav className="h-full">
      <ul className="h-full flex text-sm gap-x-6">
        {links.map((link) => (
          <NavLink key={link.label} label={link.label} path={link.path} />
        ))}
      </ul>
    </nav>
  );
}
