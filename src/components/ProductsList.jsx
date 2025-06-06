import { Link, useLoaderData } from "react-router";
import { formatPrice } from "../utils";
const ProductsList = () => {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { image, title, company, price } = product.attributes;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-8 rounded-xl shadow-xl flex gap-x-10 justify-between hover:shadow-2xl duration-300 group"
          >
            <img
              src={image}
              alt={title}
              className="h-32 w-32 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className=" w-full flex flex-wrap flex-col text-right gap-y-4 md:flex-row md:text-left md:justify-between">
              <div className="flex flex-col gap-y-4 ">
                <h3 className="capitalize text-lg font-medium">{title}</h3>
                <h4 className="text-primary">{company}</h4>
              </div>
              <p className="font-medium text-lg">{formatPrice(price)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
