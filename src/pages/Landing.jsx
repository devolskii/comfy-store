import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const loader = async () => {
  //HYDRATE FALLBACK???
  const response = await customFetch(url);
  // console.log(response);
  const products = response.data.data; //created a new const so that I know what I'm expecting in the useLoaderData
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
