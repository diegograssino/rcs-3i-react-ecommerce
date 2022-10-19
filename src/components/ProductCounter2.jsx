import React from 'react'
import { useState } from 'react';
import {Button, Container} from "react-bootstrap";


const ProductCounter2 = ({q}) => {

const [counter, setCounter] = useState(q);

    const addCounter = (c, q) => {
        setCounter(c + q);
      };
      
      const minusCounter = (c, q) => {
        if (c > 1) {
          setCounter(c - q);
        }
      };



  return (
    <div>
    <Container className="d-flex">
      <Button size="sm" onClick={() => minusCounter(counter, 1)}>
        -
      </Button>
      <div className="mx-2">{counter}</div>
      <Button size="sm" onClick={() => addCounter(counter, 1)}>
        +
      </Button>
    </Container>
  </div>
  )
}

export default ProductCounter2