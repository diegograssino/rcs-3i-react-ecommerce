import { useEffect, useState } from "react";

import Loader from "./Loader";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://rcs-3i-api-node.vercel.app/products/all")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <ProductList data={data} />}</>;
};

export default ProductListContainer;
