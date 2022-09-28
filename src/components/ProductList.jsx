import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Product from "./Product";

const ProductList = ({data}) => {
  return (
    <Container className="my-3">
      <Row className="g-4" md={4} xs={2}>
        {data.map((product, i) => (
          <Col key={i}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
