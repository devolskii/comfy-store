import { FiShoppingCart } from "react-icons/fi";
import { FaMoon, FaBars } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { NavLink } from "react-router";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  const isDark =
    useSelector((state) => state.userState.theme) === "coffee" ? true : false;
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <nav className="bg-base-200">
      <div className=" navbar align-element">
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
            <input type="checkbox" checked={isDark} onChange={handleTheme} />
            <FaMoon className="swap-on h-6 w-6" />
            <IoMdSunny className="swap-off h-6 w-6" />
          </label>
          {/* CART LINK */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-lg ml-4">
            <div className="indicator">
              <span className="indicator-item badge badge-xs badge-primary">
                {numItemsInCart}
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
