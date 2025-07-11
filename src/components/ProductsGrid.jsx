import { Link, useLoaderData } from "react-router";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  //   console.log(products);
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollars = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 w-full object-cover md:h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-primary">{dollars}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
