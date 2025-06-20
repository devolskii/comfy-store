import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { redirect } from "react-router";
import { toast } from "react-toastify";

export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (!cartTotal) return <SectionTitle text="your cart is empty!" />;
  return (
    <>
      <SectionTitle text="place your order!" />
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-6">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
