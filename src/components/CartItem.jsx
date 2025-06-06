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
    <article className="mt-4 mb-4 grid grid-cols-2">
      {/* IMAGE */}
      <img src={image} className="rounded-lg h-48 w-35 object-cover" />
      {/* INFO */}
      <div className="pt-2 flex flex-col gap-y-1 justify-start items-end">
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
        {/* REMOVE */}
        <div className="font-semibold">{formatPrice(price)}</div>
      </div>
    </article>
  );
};
export default CartItem;
