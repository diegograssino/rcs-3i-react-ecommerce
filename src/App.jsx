import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
    toast("Agregado con exito!");
  };

  const del = (i) => {
    setCart(cart.filter((c) => c.id !== i));
    toast("Borrado con exito!");
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
    toast("Vaciado con exito!");
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
  const USERS = [
    { user: "admin", pass: "admin", role: "admin" },
    { user: "user", pass: "user", role: "user" },
  ];

  const [auth, setAuth] = useState({ user: "", role: "" });

  const validate = async (u, p) => {
    const response = await fetch("https://rcs-3i-api-node.vercel.app/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: u, password: p }),
    });

    // const userFound = USERS.find((user) => user.user === u);
    // const passOk = p === userFound.pass;
    console.log(response);

    return response;
  };

  const login = (u, r) => {
    setAuth({ user: u, role: r });
  };

  const logout = () => {
    setAuth({ user: "", role: "" });
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <Main
        add={add}
        auth={auth}
        cart={cart}
        clear={clear}
        del={del}
        login={login}
        logout={logout}
        setAuth={setAuth}
        totalPrice={totalPrice}
        totalQ={totalQ}
        validate={validate}
      />
    </BrowserRouter>
  );
}

export default App;
