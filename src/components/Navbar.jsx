import { FiShoppingCart } from "react-icons/fi";
import { FaMoon, FaBars } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { NavLink } from "react-router";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="">
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
          <FaMoon className="h-6 w-6" />
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
