import React from "react";
import { useState, useEffect } from "react";
import { Card, Container, Form } from "react-bootstrap";
import validator from "validator";

const Checkout = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const saveName = (e) => {
    setName(e.target.value);
  };

  const saveMail = (e) => {
    setMail(e.target.value);
  };

  const savePhone = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    const nameOk = validator.matches(name, "^[a-zA-Z ]*$");
  }, [name, mail, phone]);

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
            {!validator.matches(name, "^[a-zA-Z ]*$") && (
              <span className="text-danger">Solo letras y espacios</span>
            )}
          </Form.Label>
          <Form.Control
            className={
              !validator.matches(name, "^[a-zA-Z ]*$") && "border-danger border-2"
            }
            placeholder="Roberto Sanchez"
            type="text"
            onChange={(e) => saveName(e)}
          />
          <br />
          <Form.Label>
            Email <span className="text-danger">ERROR</span>
          </Form.Label>
          <Form.Control
            placeholder="mail@email.mail"
            type="email"
            onChange={(e) => saveMail(e)}
          />
          <br />
          <Form.Label>
            Teléfono <span className="text-danger">ERROR</span>
          </Form.Label>
          <Form.Control
            required
            placeholder="3814444444"
            type="number"
            onChange={(e) => savePhone(e)}
          />
        </Card>
      </div>
    </Container>
  );
};

export default Checkout;
