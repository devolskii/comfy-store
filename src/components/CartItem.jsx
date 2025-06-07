import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/cartSlice";
import { formatPrice, generateAmountOptions } from "../utils";
const CartItem = ({ cartItem }) => {
  const {
    itemandColorID,
    image,
    title,
    price,
    noofItems,
    productColor,
    company,
  } = cartItem;
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeItem({ itemandColorID }));
  };
  const handleNos = (e) => {
    dispatch(editItem({ itemandColorID, noofItems: parseInt(e.target.value) }));
  };
  return (
    <article className="mt-4 mb-4 border-b border-base-300 pb-4 last:border-b-0 grid grid-cols-2 md:grid-cols-6">
      {/* IMAGE */}
      <img
        src={image}
        className="rounded-lg h-48 w-35 object-cover md:h-24 md:w-24 md:col-span-1"
      />
      {/* INFO */}
      <div className="ml-8 pt-2 md:grid md:grid-cols-3 md:col-span-5">
        {/* MD:DIV1 */}
        <div className="flex flex-col gap-y-1 justify-start items-end md:items-start">
          {/* TITLE */}
          <div className="capitalize font-semibold">{title} </div>
          {/* COMPANY */}
          <div> {company}</div>
          {/* COLOR */}
          <div className="flex">
            <h2>Color: </h2>
            <div
              className="badge badge-sm ml-2"
              style={{ backgroundColor: productColor }}
            ></div>
          </div>
        </div>
        {/* MD:DIV2 */}
        <div className="flex flex-col gap-y-1 justify-start items-end md:items-center">
          {/* NO OF ITEMS */}
          <div>
            <select
              className="select select-xs flex items-center"
              value={noofItems}
              onChange={(e) => {
                handleNos(e);
              }}
            >
              {generateAmountOptions(noofItems + 5)}
            </select>
          </div>
          {/* REMOVE */}
          <button
            onClick={() => {
              removeItemFromCart();
            }}
            className="text-sm link link-warning link-hover"
          >
            Remove
          </button>
        </div>
        {/* MD:DIV3 */}
        <div className="flex flex-col gap-y-1 justify-start items-end">
          {/* PRICE */}
          <div className="font-semibold">{formatPrice(price)}</div>
        </div>
      </div>
    </article>
  );
};
export default CartItem;
