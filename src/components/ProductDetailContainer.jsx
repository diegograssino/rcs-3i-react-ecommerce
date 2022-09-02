import {useEffect, useState} from "react";

import Loader from "./Loader";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <ProductDetail product={product} />}</>;
};

export default ProductDetailContainer;
