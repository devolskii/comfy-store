import dayjs from "dayjs";
import { useLoaderData } from "react-router";

const OrdersList = () => {
  const { orders, meta } = useLoaderData();
  return (
    <div className="mt-4">
      <h1 className="mb-4 capitalize">total orders: {meta.pagination.total}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className="hidden md:block">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {orders.map((order) => {
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;
              const date = dayjs(createdAt).format("hh:mm A - D MMMM, 'YY ");
              return (
                <tr key={order.id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td className="hidden md:block">{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrdersList;
