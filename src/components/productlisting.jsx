import { useContext } from "react";
import ProductCard from "./productcard";
import { ProductContext } from "../contexts/product-context";

const ProductListing = () => {
  const { productArray } = useContext(ProductContext);

  return (
    <div className="flex w-full flex-wrap justify-around gap-10 p-5">
      {!!productArray.length &&
        productArray.map((product) => <ProductCard product={product} />)}
      {productArray.length === 0 && (
        <div className="text-2xl font-bold">No products found</div>
      )}
    </div>
  );
};

export default ProductListing;
