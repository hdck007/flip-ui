import "./App.css";
import Layout from "./components/layout";
import ProductListing from "./components/productlisting";
import products from "./utils/data";
import { ProductProvider } from "./contexts/product-context";
import { SidebarProvider } from "./contexts/sidebar-context";

function App() {
  return (
    <div className="App dark:bg-stone-900">
      <ProductProvider>
        <SidebarProvider>
          <Layout>
            <ProductListing products={products} />
          </Layout>
        </SidebarProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
