import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import {BrowserRouter} from "react-router-dom";

import Main from "./views/Main";

function App() {
  // CART
  const [cart, setCart] = useState([]);

  const add = (p) => {
    if (isDuplicate(p.id)) {
      const newCart = cart.filter((c) => c.id !== p.id);
      const previousQ = cart.find((c) => c.id === p.id).q;

      // Esto es lo mismo que p.q = p.q + previousQ
      p.q += previousQ;
      setCart([...newCart, p]);
    } else {
      setCart([...cart, p]);
    }
  };

  const del = (i) => {
    setCart(cart.filter((c) => c.id !== i));
  };

  const totalQ = () => {
    let q = 0;

    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];

      q += element.q;
    }

    return q;
  };

  const clear = () => {
    setCart([]);
  };

  const isDuplicate = (i) => {
    return cart.find((c) => c.id === i);
  };

  const totalPrice = () => {
    let price = 0;

    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];

      // price = price + (element.price * element.q)
      price += element.price * element.q;
    }

    return price;
  };

  // LOGIN
  const USERS = [];

  const [isValidated, setIsValidated] = useState(false);

  const validate = () => {
    console.log("validate");
  };

  return (
    <BrowserRouter>
      <Main
        add={add}
        cart={cart}
        clear={clear}
        del={del}
        isValidated={isValidated}
        setIsValidated={setIsValidated}
        totalPrice={totalPrice}
        totalQ={totalQ}
        validate={validate}
      />
    </BrowserRouter>
  );
}

export default App;
