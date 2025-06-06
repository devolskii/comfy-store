import { Outlet, useNavigation } from "react-router";
import { Header, Loading, Navbar } from "../components";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // console.log(isLoading);
  return (
    <div>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-5 lg:py-28">
          <Outlet />
        </section>
      )}
    </div>
  );
};
export default HomeLayout;
