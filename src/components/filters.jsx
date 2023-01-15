import { brandsList, gender, sizes } from "../utils/data";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { ProductContext } from "../contexts/product-context";
import { useCallback, useContext } from "react";
import products from "../utils/data";
import { useState } from "react";
import BlockComponent from "./blockcomponent";

const FilterComponent = ({}) => {
  const [filters, setFilters] = useState({
    price: [0, 100],
    gender: [],
    brand: [],
    size: [],
  });
  const { setProductArray } = useContext(ProductContext);

  const handleClear = () => {
    setFilters({
      price: [0, 100],
      gender: [],
      brand: [],
      size: [],
    });
    setProductArray(products);
  };

  const handleChange = useCallback(
    (field) => (item) => (param) => {
      if (field !== "price") {
        let filtersCopy;
        if (filters[field].includes(item)) {
          filtersCopy = {
            ...filters,
            [field]: filters[field].filter((i) => i !== item),
          };
        } else {
          filtersCopy = { ...filters, [field]: [...filters[field], item] };
        }
        console.log(filtersCopy);
        setFilters(filtersCopy);
        const newProducts = products.filter((product) => {
          let flag = true;
          if (filtersCopy.gender.length) {
            if (filtersCopy.gender.indexOf(product.gender) < 0) {
              flag = false;
            }
          }
          if (filtersCopy.brand.length) {
            if (filtersCopy.brand.indexOf(product.brand) < 0) {
              flag = false;
            }
          }
          if (filtersCopy.size.length) {
            if (filtersCopy.size.indexOf(product.size) < 0) {
              flag = false;
            }
          }
          if (
            product.price < filtersCopy.price[0] ||
            product.price > filtersCopy.price[1]
          ) {
            flag = false;
          }
          return flag;
        });
        setProductArray(newProducts);
      } else {
        setFilters((prev) => ({ ...prev, price: param }));
        setProductArray((prev) => {
          const value = prev.filter(
            (product) => product.price >= param[0] && product.price <= param[1]
          );
          return value;
        });
      }
    },
    [setProductArray, filters]
  );

  return (
    <div>
      <BlockComponent
        handleChange={handleChange}
        title="Gender"
        data={gender}
        filters={filters}
      />
      <BlockComponent
        handleChange={handleChange}
        title="Brand"
        data={brandsList}
        filters={filters}
      />
      <BlockComponent
        handleChange={handleChange}
        filters={filters}
        title="Size"
        data={sizes}
      />
      <div className="m-4">
        <h3 className="text-lg">Price</h3>
        <div className="my-2 flex items-center">
          {filters.price[0]}&nbsp;
          <RangeSlider
            min={0}
            max={100}
            step={10}
            value={filters.price}
            onInput={handleChange("price")("range")}
          />
          &nbsp;
          {filters.price[1]}
        </div>
      </div>
      <button
        onClick={handleClear}
        className="bg-blue-500 text-white px-4 m-4 py-2 rounded-md"
      >
        Clear filters
      </button>
    </div>
  );
};

export default FilterComponent;
