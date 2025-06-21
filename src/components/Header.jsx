import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handleLogout = () => {
    queryClient.removeQueries();
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate("/");
  };
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      {/*USER*/}
      {user ? (
        <div className="align-element px-6 flex gap-x-6 items-center justify-center md:justify-end">
          <div className="capitalize text-sm md:text-xs">
            Hello, {user.username}
          </div>
          <button
            className=" uppercase btn btn-xs btn-outline btn-primary"
            onClick={handleLogout}
          >
            logout
          </button>
        </div>
      ) : (
        <div className="align-element px-6 flex gap-x-6 justify-center md:justify-end">
          {" "}
          <Link to="/login" className="link link-hover text-xs md:text-sm">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs md:text-sm">
            Create an Account
          </Link>
        </div>
      )}
      {/*LINKS*/}
    </header>
  );
};
export default Header;
