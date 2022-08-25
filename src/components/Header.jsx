import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              className="d-inline-block align-top"
              height="30"
              src="/logo512.png"
              width="30"
            />
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
