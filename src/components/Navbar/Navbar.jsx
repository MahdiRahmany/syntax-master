import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarAction from "./NavbarAction";
import NavbarLink from "./NavbarLink";
import NavbarMobile from "./NavbarMobile";
import { navLinks } from "./navLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMneu = () => setIsOpen(false);

  return (
    <>
      <div className="flex justify-between items-center sticky h-17.5 rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
        {/* LOGO */}
        <NavLink className="ml-6" to={"/"}>
          LOGO
        </NavLink>

        {/* Humburger Menu */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavbarLink key={link.path} {...link} />
          ))}
        </div>

        {/* Mobile Menu */}
        <NavbarMobile links={navLinks} isOpen={isOpen} onClose={closeMneu} />
        <div className="mr-6">
          <NavbarAction />
        </div>
      </div>
    </>
  );
}
