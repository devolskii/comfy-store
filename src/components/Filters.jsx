import { Form, Link, useLoaderData } from "react-router";
import Input from "./Input";
import Select from "./Select";
import Range from "./Range";
import Checkbox from "./Checkbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, category, company, order, shipping, price } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-y-6 gap-x-30 md:gap-x-4 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {/* SEARCH */}
      <Input
        label="Search Products"
        name="search"
        type="search"
        boxSize="input-sm"
        labelSize="text-sm"
        defaultValue={search}
      />
      {/* CATEGORY */}
      <Select
        label="Select Category"
        name="category"
        list={meta.categories}
        defaultValue={category}
        size="select-sm"
      />
      {/* COMPANY */}
      <Select
        label="Select Company"
        name="company"
        list={meta.companies}
        defaultValue={company}
        size="select-sm"
      />
      {/* SORT BY */}
      <Select
        label="Sort By"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
        size="select-sm"
      />
      {/* PRICE */}
      <Range label="select price" name="price" size="range-sm" price={price} />
      {/* SHIPPING */}
      <Checkbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm uppercase">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm uppercase">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
