import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import validator from "validator";

const Checkout = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [firstPhone, setFirstPhone] = useState(true);

  const saveName = (e) => {
    setName(e.target.value);
  };

  const validateName = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") && validator.isLength(n, { min: 5, max: 36 })
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
    return validator.isNumeric(p) && validator.isLength(p, { min: 10, max: 10 });
  };

  const handleBuy = () => {
    if (validateName(name) && validateMail(mail) && validatePhone(phone)) {
      console.log("Envío el carrito para el pago!");
    } else {
      setFirstName(false);
      setFirstMail(false);
      setFirstPhone(false);
      console.log("No envío el carrito porque no tengo la informacón necesaria.");
    }
  };

  useEffect(() => {}, [name, mail, phone]);

  return (
    <Container>
      <div>Acá irá el resumen de la compra</div>
      {/* {name.length > 0 ? name.length : "0"} */}
      {/* {name.length > 0 && name.length} */}
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
