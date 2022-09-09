import React from "react";
import {useState} from "react";
import {Card, Container, Form} from "react-bootstrap";

const Checkout = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Container>
      <div>Acá irá el resumen de la compra</div>
      <div>
        <h3>Formulario con los datos del comprador</h3>
        <Card className="p-3">
          <Form.Control placeholder="Nombre y Apellido" type="text" />
          <br />
          <Form.Control placeholder="mail@email.mail" type="email" />
          <br />
          <Form.Control required placeholder="3814444444" type="number" />
        </Card>
      </div>
    </Container>
  );
};

export default Checkout;
