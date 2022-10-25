import React from 'react'
import { useState } from 'react';
import {Button, CarouselItem, Container} from "react-bootstrap";


const ProductCounter2 = ({q, add,cp,setCart, cart}) => {
  const isDuplicate2 = (i) => {
    return cart.find((c) => c.id === i);
  };

  const added = (p) => {
    if (isDuplicate2(p.id)) {
      const newCart2 = cart.filter((c) => c.id !== p.id);
      
      setCart([...newCart2, p]);
    } else {
      setCart([...cart, p]);
    }
  };
const [counter, setCounter] = useState(q);

    const addCounter = (c, q) => {
        setCounter(c + q);
        
          added({
            id: cp.id,
            title: cp.title,
            price: cp.price,
            q: counter+1,
          })
      };
      
      const minusCounter = (c, q) => {
        if (c > 1) {
          setCounter(c - q);
          
          added({
            id: cp.id,
            title: cp.title,
            price: cp.price,
            q: counter-1,
          })
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