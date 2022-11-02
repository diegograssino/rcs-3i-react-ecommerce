import React from "react";
import {useState, useEffect} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import validator from "validator";
import {ToastContainer, toast} from "react-toastify";

import ProductCounter from "./ProductCounter";

const Checkout = ({totalQ, totalPrice, cart, del}) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [firstPhone, setFirstPhone] = useState(true);
  const [counter, setCounter] = useState(1);

  const [showMessage, setShowMessage] = useState("");

  const saveName = (e) => {
    setName(e.target.value);
  };

  const validateName = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") && validator.isLength(n, {min: 5, max: 36})
    );
  };

  const saveMail = (e) => {
    setMail(e.target.value);
  };

  const validateMail = (m) => {
    return validator.isEmail(m);
  };

  const savePhone = (e) => {
    setPhone(e.target.value);
  };

  const validatePhone = (p) => {
    return validator.isNumeric(p) && validator.isLength(p, {min: 10, max: 10});
  };

  useEffect(() => {
    if (showMessage) {
      toast.success(`Compra exitosa! ID ${showMessage}`);
    }
  }, [showMessage]);

  const handleBuy = () => {
    if (validateName(name) && validateMail(mail) && validatePhone(phone)) {
      const cartToPay = {name: name, mail: mail, phone: phone, cart: [...cart]};

      fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(cartToPay),
      })
        .then((res) => res.json())
        .then((json) => setShowMessage(json.id));
      // TODO Agregar finally luego del the para que se resetee el carrito.
      // TODO Agregar (tambien en el finally) una redireccion DENTRO de React en un setTimeOut para que quede esperando un minimo tiempo y no sea tan brusca
    } else {
      setFirstName(false);
      setFirstMail(false);
      setFirstPhone(false);
      console.log("No envío el carrito porque no tengo la informacón necesaria.");
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Resumen de la compra</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Total: ${totalPrice()}
          </Card.Subtitle>

          {cart.map((c, i) => (
            <Container key={Symbol(i).toString() + i} className="d-flex">
              <Card.Text>
                {c.title} x {c.q}
              </Card.Text>
              <ProductCounter counter={counter} setCounter={setCounter} />
              <Button
                className="ms-3"
                size="sm"
                variant="danger"
                onClick={() => del(c.id)}
              >
                Eliminar
              </Button>
            </Container>
          ))}
        </Card.Body>
      </Card>
      <div>
        <h3>Formulario con los datos del comprador</h3>
        <Card className="p-3">
          <Form.Label>
            Nombre y apellido{" "}
            {!validateName(name) && !firstName && (
              <span className="text-danger">Solo letras y espacios</span>
            )}
          </Form.Label>
          <Form.Control
            className={!validateName(name) && !firstName && "border-danger border-2"}
            placeholder="Roberto Sanchez"
            type="text"
            onBlur={() => setFirstName(false)}
            onChange={(e) => saveName(e)}
          />
          <br />
          <Form.Label>
            Email{" "}
            {!validateMail(mail) && !firstMail && (
              <span className="text-danger">El email no es válido</span>
            )}
          </Form.Label>
          <Form.Control
            className={!validateMail(mail) && !firstMail && "border-danger border-2"}
            placeholder="mail@email.mail"
            type="email"
            onBlur={() => setFirstMail(false)}
            onChange={(e) => saveMail(e)}
          />
          <br />
          <Form.Label>
            Teléfono{" "}
            {!validatePhone(phone) && !firstPhone && (
              <span className="text-danger">Ingrese solo números</span>
            )}
          </Form.Label>
          <Form.Control
            required
            placeholder="3814444444"
            type="number"
            onBlur={() => setFirstPhone(false)}
            onChange={(e) => savePhone(e)}
          />
          <Button className="mt-4" onClick={() => handleBuy()}>
            Pagar
          </Button>
        </Card>
      </div>
    </Container>
  );
};

export default Checkout;
