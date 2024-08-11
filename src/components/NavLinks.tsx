import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="px-10 flex-1 flex items-center justify-center gap-4 rounded-lg m-1 bg-gray-100 list-none">
      <li>
        <NavLink to="/" className="font-bold text-neutral-400">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorites" className="font-bold text-neutral-400">
          Favorites
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
