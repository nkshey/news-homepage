import { useState } from "react";
import NavbarItem from "./NavbarItem";
import HamburgerButton from "../ui/HamburgerButton";
import CloseButton from "../ui/CloseButton";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ul
        className={`fixed top-0 z-20 flex h-full w-[calc(100%-7.5rem)] flex-col gap-5 bg-off-white p-6 pt-[9rem] transition-all duration-500 ${isOpen ? "right-0" : "-right-[calc(100%-7.5rem)]"}`}
      >
        <NavbarItem name="Home" />
        <NavbarItem name="New" />
        <NavbarItem name="Popular" />
        <NavbarItem name="Trending" />
        <NavbarItem name="Categories" />

        <CloseButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </ul>

      <HamburgerButton setIsOpen={setIsOpen} isOpen={isOpen} />

      <div
        className={`fixed inset-0 transition-all duration-500 ${
          isOpen
            ? "bg-very-dark-blue/50 opacity-100"
            : "bg-very-dark-blue/0 opacity-0"
        } ${isOpen ? "visible" : "invisible"}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
}

export default MobileNavbar;
