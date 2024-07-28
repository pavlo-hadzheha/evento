import Logo from "./logo";
import NavLinks from "./nav-links";

export default function Header() {
  return (
    <header className="h-14 flex justify-between items-center px-3 md:px-9 border-b border-b-white/10">
      <Logo />
      <NavLinks />
    </header>
  );
}
