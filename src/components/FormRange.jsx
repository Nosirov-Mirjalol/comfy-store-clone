import { useState } from "react";
import { formatPrice } from "../utils";

const FormRange = ({ label, name, size }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="flex justify-between">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        className={`range range-secondary ${size}`}
        step={step}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span>0</span>
        <span>max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;
