import { redirect, useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { OrdersList, PaginationContainer, SectionTitle } from "../components";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in to access Orders");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    console.log(params);
    try {
      const response = await customFetch.get("/orders", {
        params,
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(response);
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error fetching orders";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
    }
  };

const Orders = () => {
  const { orders, meta } = useLoaderData();
  if (meta.pagination.total < 1)
    return <SectionTitle text="please make an order" />;
  return (
    <div>
      <SectionTitle text="your orders" />
      <OrdersList />
      <PaginationContainer />
    </div>
  );
};
export default Orders;
