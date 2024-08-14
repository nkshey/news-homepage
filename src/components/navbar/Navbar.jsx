import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 716);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 716);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 w-full bg-[#fffdfa] px-4 py-7 shadow-lg sm:static sm:mb-7 sm:bg-opacity-0 sm:p-0 sm:shadow-none lg:mb-[3.375rem]">
      <nav className="flex items-center justify-between">
        <Logo />
        {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
      </nav>
    </header>
  );
}

export default Navbar;
