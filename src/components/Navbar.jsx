import { FiShoppingCart } from "react-icons/fi";
import { FaMoon, FaBars } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { NavLink } from "react-router";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);
  const handleChange = () => {
    setIsDark(!isDark);
  };
  return (
    <nav className="bg-base-200">
      <div className=" align-element navbar">
        <div className=" navbar-start">
          {/* Title */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars className="h-6 w-6" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              {/* DROPDOWN NAVLINKS */}
              <NavLinks />
            </ul>
          </div>
        </div>
        {/* CENTER MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            {/* HORIZONTAL NAVLINKS */}
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME BUTTON */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="coffee"
              onChange={handleChange}
              checked={isDark}
            />
            <FaMoon className="swap-on h-6 w-6" />
            <IoMdSunny className="swap-off h-6 w-6" />
          </label>
          {/* CART LINK */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <span className="indicator-item badge badge-xs badge-primary">
                8
              </span>
              <FiShoppingCart className="h-6 w-6" />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
