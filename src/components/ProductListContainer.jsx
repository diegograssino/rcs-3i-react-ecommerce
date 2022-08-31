import {useEffect, useState} from "react";

import ProductList from "./ProductList";

const ProductListContainer = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((json) => setData(json));
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded ? <ProductList data={data} /> : <h2 className="text-center">Cargando</h2>}
    </>
  );
};

export default ProductListContainer;
