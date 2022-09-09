import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import ProductDetailContainer from "../components/ProductDetailContainer";
import NothingHere from "../components/NothingHere";
import About from "../components/About";
import Checkout from "../components/Checkout";

const Main = () => {
  return (
    <Container fluid className="px-0 d-flex flex-column min-vh-100">
      <Header />

      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<ProductDetailContainer />} path="/producto/:id" />
        <Route element={<About />} path="/about" />
        <Route element={<Checkout />} path="/checkout" />
        <Route element={<NothingHere />} path="*" />
      </Routes>

      <Footer />
    </Container>
  );
};

export default Main;
