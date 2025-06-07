import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-300 w-full mt-4">
      <div className="card-body">
        {/* CART TOTAL */}
        <div className="flex justify-between pb-2 border-b border-base-content">
          <span className="">Cart Total</span>
          <span className="">{formatPrice(cartTotal)}</span>
        </div>
        {/* SHIPPING */}
        <div className="flex justify-between pb-2 border-b border-base-content ">
          <span className="">Shipping</span>
          <span className="">{formatPrice(shipping)}</span>
        </div>
        {/* TAX */}
        <div className="flex justify-between pb-2 border-b border-base-content">
          <span className="">Tax</span>
          <span className="">{formatPrice(tax)}</span>
        </div>
        {/* ORDER TOTAL */}
        <div className="mt-4 flex justify-between">
          <span className="font-bold">Order Total</span>
          <span className="font-bold">{formatPrice(orderTotal)}</span>
        </div>
      </div>
    </div>
  );
};
export default CartTotals;
