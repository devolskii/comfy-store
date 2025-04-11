import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element px-6 flex gap-x-6 justify-center md:justify-end">
        {/*USER*/}
        {/*LINKS*/}
        <Link to="/login" className="link link-hover text-xs md:text-sm">
          Sign in / Guest
        </Link>
        <Link to="/register" className="link link-hover text-xs md:text-sm">
          Create an Account
        </Link>
      </div>
    </header>
  );
};
export default Header;
