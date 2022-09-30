import {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

import ProductCounter from "./ProductCounter";

const ProductDetail = ({product, add}) => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <Card className="m-1 h-100 border-0">
        <Container className="d-flex justify-content-center align-items-center">
          <Card.Img src={product.image} style={{width: "100px"}} variant="top" />
        </Container>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="border-0">
          <Container className="d-flex justify-content-center align-items-center">
            <ProductCounter counter={counter} setCounter={setCounter} />
            <Button
              size="sm"
              variant="success"
              onClick={() =>
                add({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  q: counter,
                })
              }
            >
              Agregar al carrito
            </Button>
            <Link to="/checkout">
              <Button>Ir al Carrito</Button>
            </Link>
          </Container>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProductDetail;
