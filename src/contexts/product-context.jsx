// a context and provider for the product data
import {useState, createContext} from "react";

import products from "../utils/data";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productArray, setProductArray] = useState(products);

  return (
    <ProductContext.Provider value={{ productArray, setProductArray }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
