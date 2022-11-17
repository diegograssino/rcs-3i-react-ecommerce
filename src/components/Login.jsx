import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login({ auth, login, validate, setAuth }) {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [loginOk, setLoginOk] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (loginOk.role) {
      login(mail, "admin");
      navigate("/");
      toast(`Bienvenido ${mail}!`, { autoClose: 1500 });
    } else if (loginOk.role === false) {
      toast(`Credenciales incorrectas`, { autoClose: 1500 });
    }
  }, [loginOk]);

  const handleValidation = async (e) => {
    e.preventDefault();
    setLoginOk({ name: null, role: null });
    fetch("https://rcs-3i-api-node.vercel.app/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: mail, password: pass }),
    })
      .then((res) => res.json())
      .then((json) => setLoginOk({ name: mail, role: json.role }))
      .catch((error) => setLoginOk({ name: null, role: false }));
  };

  return (
    <Container className="mt-3">
      {/* <ToastContainer /> */}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            placeholder="Enter email"
            type="email"
            value={mail}
            onInput={(e) => setMail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Password"
            type="password"
            value={pass}
            onInput={(e) => setPass(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary" onClick={(e) => handleValidation(e)}>
          Submit
        </Button>

        <span className="ms-3">
          Sí no tenés usuario, <Link to="/signup">click aquí</Link> para registrarte.
        </span>
      </Form>
    </Container>
  );
}

export default Login;
