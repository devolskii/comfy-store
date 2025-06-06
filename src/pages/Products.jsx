import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";
const url = "/products";

export const loader = async ({ request }) => {
  /* The request object is an instance of the 
  standard Web Fetch API Request object, provided by 
  React Router (v6.4+ with data APIs). It's similar to 
  the one you'd use in a fetch() call, but from the 
  server/browser perspective. */
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params);
  const response = await customFetch(url, { params });
  console.log(response);

  const products = response.data.data;
  const meta = response.data.meta;
  // console.log(products);
  // console.log(meta);
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
