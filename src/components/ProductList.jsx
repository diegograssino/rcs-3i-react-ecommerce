import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";

import Product from "./Product";

const ProductList = ({data}) => {
  return (
    <Container className="my-3">
      <CardGroup>
        {data.map((product) => (
          <Product product={product} />
        ))}
      </CardGroup>
    </Container>
  );
};

export default ProductList;
