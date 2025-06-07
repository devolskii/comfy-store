import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <div className="mt-4">
      {cartItems.map((item) => {
        return <CartItem key={item.itemandColorID} cartItem={item} />;
      })}
    </div>
  );
};
export default CartItemsList;
