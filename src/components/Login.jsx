import {useEffect} from "react";
import {useState} from "react";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login({auth, login, validate, setAuth}) {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const handleValidation = (e) => {
    e.preventDefault();
    if (validate(mail, pass)) {
      login(mail);
    }
  };

  return (
    <Container className="mt-3">
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
      </Form>
    </Container>
  );
}

export default Login;
