import { NavLink } from "react-router-dom";

export default function NavbarLink({ name, path, onClick }) {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
      `transition duration-200 pb-1 border-b-2 ${isActive
          ? "text-blue-600 font-semibold border-b-2 border-blue-600"
          : "text-gray-700 hover:text-blue-600 border-transparent"}`
      }
    >
      {name}
    </NavLink>
  );
}
