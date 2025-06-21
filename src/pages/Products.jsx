import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";
const url = "/products";

const allProductsQuery = (queryParams, key) => {
  return {
    queryKey: [key],
    queryFn: () => customFetch(url, { queryParams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    /* The request object is an instance of the 
  standard Web Fetch API Request object, provided by 
  React Router (v6.4+ with data APIs). It's similar to 
  the one you'd use in a fetch() call, but from the 
  server/browser perspective. */
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params, request.url)
    );

    const products = response.data.data;
    const meta = response.data.meta;

    return { products, meta, params }; //can be accessed through useLoaderData()
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
