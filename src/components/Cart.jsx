import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Cart = ({cart, del, clear}) => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} variant="dark">
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              id={`offcanvasNavbar-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Carrito
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Button variant="danger" onClick={clear}>
                  Clear Cart
                </Button>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {cart.length === 0 && <p>Vacío!</p>}
                  {cart.map((c, i) => (
                    <div className="d-flex ">
                      <p key={i}>{`${c.title} (${c.q})`}</p>
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
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Cart;
