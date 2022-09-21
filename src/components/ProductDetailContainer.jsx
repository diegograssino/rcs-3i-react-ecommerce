import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "./Loader";
import NothingHere from "./NothingHere";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .finally(() => setIsLoading(false));
  }, [params.id]);

  return <>{isLoading ? <Loader /> : <ProductDetail product={product} />}</>;
};

export default ProductDetailContainer;
