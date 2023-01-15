import { useContext } from "react";
import ProductCard from "./productcard";
import { ProductContext } from "../contexts/product-context";

const ProductListing = () => {

  const { productArray } = useContext(ProductContext);

  return (
    <div className="flex w-full flex-wrap justify-around gap-10 p-5">
      {productArray.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductListing;