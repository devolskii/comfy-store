import { Form, redirect } from "react-router";
import Input from "./Input";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const info = {
      address,
      cartItems,
      chargeTotal: orderTotal,
      name,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
    };
    // console.log(user);
    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      toast.success("order placed successfully");

      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect("/login");
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="">
      <h1 className="text-xl mt-4">Shipping Information</h1>
      <div className="mt-4">
        <Input label="name" name="name" type="text" boxSize="w-full" />
        <Input label="address" name="address" type="text" boxSize="w-full" />
      </div>
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
