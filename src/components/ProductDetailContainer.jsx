import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import Loader from "./Loader";
import NothingHere from "./NothingHere";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = ({add, auth}) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/product/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .finally(() => setIsLoading(false));
  }, [params.id]);

  return (
    <>
      {isLoading ? <Loader /> : <ProductDetail add={add} auth={auth} product={product} />}
    </>
  );
};

export default ProductDetailContainer;
