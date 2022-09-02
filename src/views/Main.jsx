import Container from "react-bootstrap/Container";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import ProductDetailContainer from "../components/ProductDetailContainer";

const Main = () => {
  return (
    <Container fluid className="px-0 d-flex flex-column min-vh-100">
      <Header />
      {/* <Landing /> */}
      <ProductDetailContainer />
      <Footer />
    </Container>
  );
};

export default Main;
