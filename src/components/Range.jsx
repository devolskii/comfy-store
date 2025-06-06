import { useState } from "react";
import { formatPrice } from "../utils";

const Range = ({ label, name, size, price }) => {
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  return (
    <div>
      <fieldset className="fieldset">
        <label className="fieldset-label text-sm capitalize flex justify-between">
          <div>{label}</div>
          <div>{formatPrice(selectedPrice)}</div>
        </label>
        <input
          type="range"
          name={name}
          min={0}
          max={maxPrice}
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className={`range ${size}`}
          step={1000}
        />
        <div className="flex justify-between text-xs px-2 mt-2">
          <span className="font-bold">0</span>
          <span className="font-bold">Max : {formatPrice(maxPrice)}</span>
        </div>
      </fieldset>
    </div>
  );
};
export default Range;
