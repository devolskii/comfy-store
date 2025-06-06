import { useLoaderData } from "react-router";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { MdGridView } from "react-icons/md";
import { IoList } from "react-icons/io5";
import { useState } from "react";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const [activeLayout, setActiveLayout] = useState("grid");
  const totalProducts = meta.pagination.total;
  const setActiveStyle = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === activeLayout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };
  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => setActiveLayout("grid")}
            className={setActiveStyle("grid")}
          >
            <MdGridView />
          </button>
          <button
            onClick={() => setActiveLayout("list")}
            className={setActiveStyle("list")}
          >
            <IoList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : activeLayout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </div>
  );
};
export default ProductsContainer;
