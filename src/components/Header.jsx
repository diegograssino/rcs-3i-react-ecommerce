import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/sytles.css";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const Header = ({totalQ, auth, logout}) => {
  const handleClick = () => {
    logout();
    toast("Sesión cerrada con exito!", {autoClose: 1500});
  };

  return (
    <>
      <ToastContainer />
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                alt=""
                className="d-inline-block align-top me-1"
                height="30"
                src="/img/logo.png"
                width="30"
              />
              Kwick E-Mart
            </Navbar.Brand>
          </Link>
          <div className="d-flex justify-content-center align-items-center text-white">
            <span className="me-2">
              <Link to="/checkout">
                <Button size="sm" variant="outline-primary">
                  Cart {totalQ() > 0 && <span> {`(${totalQ()})`}</span>}
                </Button>
              </Link>
            </span>
            <span className="me-4">
              {auth.user === "" ? (
                <Link to="/login">
                  <Button size="sm" variant="outline-success">
                    Login
                  </Button>
                </Link>
              ) : (
                <Button
                  size="sm"
                  variant="outline-danger border-0"
                  onClick={() => handleClick()}
                >
                  {auth.user}
                </Button>
              )}
            </span>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown id="basic-nav-dropdown" title="Dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
