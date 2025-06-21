import { Link, useLoaderData } from "react-router";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["single product", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response.data.data };
  };

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { product } = useLoaderData();

  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const singleItem = {
    itemandColorID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    noofItems: amount,
    productColor,
    company,
  };

  const addtoCart = () => {
    dispatch(addItem(singleItem));
  };

  return (
    <section>
      {/* BREADCRUMB */}
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-8 grid grid-cols-2 gap-x-8 lg:gap-x-16">
        {/* IMAGE */}
        <div className="flex justify-center items-start">
          <img
            src={image}
            alt={title}
            className="h-96 object-cover rounded-lg w-full"
          />
        </div>
        <div className="">
          {/* PRODUCT INFO */}
          <h1 className="text-3xl capitalize font-bold">{title}</h1>
          <h2 className="text-xl font-bold mt-2 text-primary">{company}</h2>
          <h2 className="mt-2 text-xl">{dollarsAmount}</h2>
          <p className="mt-4 leading-7">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h2 className="tracking-wider">Colors</h2>
            <div className="mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`h-6 w-6 badge  mr-2 cursor-pointer ${
                    color === productColor && "h-8 w-8 border-2 border-primary"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    setProductColor(color);
                  }}
                ></button>
              ))}
            </div>
          </div>
          {/* DROPDOWN */}
          <div className="mt-6">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-base font-normal">
                Amount
              </legend>
              <select
                value={amount}
                onChange={handleAmount}
                className="select select-primary"
              >
                {generateAmountOptions(10)}
              </select>
            </fieldset>
          </div>
          {/* CART BUTTON */}
          <div className="mt-6">
            <button className="btn btn-primary uppercase" onClick={addtoCart}>
              add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
