import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            className="d-inline-block align-top"
            height="30"
            src="/img/logo.png"
            width="30"
          />{" "}
          Kwick E-Mart
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
