import NavbarItem from "./NavbarItem";

function DesktopNavbar() {
  return (
    <ul className="flex gap-10">
      <NavbarItem name="Home" />
      <NavbarItem name="New" />
      <NavbarItem name="Popular" />
      <NavbarItem name="Trending" />
      <NavbarItem name="Categories" />
    </ul>
  );
}

export default DesktopNavbar;
