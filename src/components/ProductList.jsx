import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";

import Product from "./Product";

const ProductList = () => {
  const products = [
    {
      name: "Producto 1",
      price: "100",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum sint asperiores iusto debitis porro distinctio modi sed eveniet.",
    },
    {
      name: "Producto 2",
      price: "200",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum sint asperiores iusto debitis porro distinctio modi sed eveniet.",
    },
    {
      name: "Producto 3",
      price: "300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum sint asperiores iusto debitis porro distinctio modi sed eveniet.",
    },
  ];

  return (
    <Container className="my-3">
      <CardGroup>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </CardGroup>
    </Container>
  );
};

export default ProductList;
