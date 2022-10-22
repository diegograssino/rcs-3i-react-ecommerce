import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import ProductDetailContainer from "../components/ProductDetailContainer";
import NothingHere from "../components/NothingHere";
import About from "../components/About";
import Checkout from "../components/Checkout";
import Login from "../components/Login";
import SignUp from "../components/SignUp.jsx";

const Main = ({
  add,
  totalQ,
  cart,
  del,
  clear,
  totalPrice,
  auth,
  login,
  logout,
  validate,
  setAuth,
}) => {
  return (
    <Container fluid className="px-0 d-flex flex-column min-vh-100">
      <Header
        auth={auth}
        cart={cart}
        clear={clear}
        del={del}
        logout={logout}
        totalQ={totalQ}
      />

      <Routes>
        <Route element={<Landing />} path="/" />
        <Route
          element={<ProductDetailContainer add={add} auth={auth} />}
          path="/producto/:id"
        />
        <Route element={<About />} path="/about" />
        <Route
          element={
            auth.user ? (
              <Checkout
                auth={auth}
                cart={cart}
                del={del}
                totalPrice={totalPrice}
                totalQ={totalQ}
                add={add}
              />
            ) : (
              <Login auth={auth} login={login} setAuth={setAuth} validate={validate} />
            )
          }
          path="/checkout"
        />
        <Route
          element={
            <Login auth={auth} login={login} setAuth={setAuth} validate={validate} />
          }
          path="/login"
        />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<NothingHere />} path="*" />
      </Routes>

      <Footer />
    </Container>
  );
};

export default Main;
