import React from "react";
import { Button, Container } from "react-bootstrap";

const ProductCounter = ({ setCounter, counter }) => {
  return (
    <div>
      <Container className="d-flex">
        <Button size="sm" onClick={() => setCounter(counter + 1)}>
          +
        </Button>
        <div className="mx-2">{counter}</div>
        <Button size="sm" onClick={() => setCounter(counter - 1)}>
          -
        </Button>
      </Container>
    </div>
  );
};

export default ProductCounter;
