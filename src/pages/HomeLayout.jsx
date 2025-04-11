import { Outlet } from "react-router";
import { Header, Navbar } from "../components";
const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="align-element py-28">
        <Outlet />
      </section>
    </div>
  );
};
export default HomeLayout;
