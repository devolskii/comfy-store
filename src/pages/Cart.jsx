import { useSelector } from "react-redux";
import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { Link } from "react-router";

const Cart = () => {
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (!numItemsInCart) return <SectionTitle text="your cart is empty" />;
  return (
    <div>
      <SectionTitle text="shopping cart" />
      <div className="">
        <CartItemsList />
        <CartTotals />
        {user ? (
          <Link
            to="/checkout"
            className="btn btn-primary btn-block mt-8 uppercase"
          >
            Proceed to checkout
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary btn-block mt-8 uppercase"
          >
            please login
          </Link>
        )}
      </div>
    </div>
  );
};
export default Cart;
