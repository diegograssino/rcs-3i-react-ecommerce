import {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Cart = ({cart, del, clear, totalQ}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Cart{totalQ() > 0 && <span> {`(${totalQ()})`}</span>}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button variant="danger" onClick={clear}>
            Clear Cart
          </Button>
          {cart.length === 0 && <p>Vacío!</p>}
          {cart.map((c, i) => (
            <div key={i} className="d-flex">
              <p>{`${c.title} (${c.q})`}</p>
              <Button
                className="ms-4"
                size="sm"
                variant="danger"
                onClick={() => del(c.id)}
              >
                Eliminar
              </Button>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
