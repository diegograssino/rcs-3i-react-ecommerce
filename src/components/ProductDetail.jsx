import {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import ProductCounter from "./ProductCounter";

const ProductDetail = ({product, add, auth}) => {
  const [counter, setCounter] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editName, setEditName] = useState(product.title);
  const [editPrice, setEditPrice] = useState(product.price);
  const [editDescription, setEditDescription] = useState(product.description);

  return (
    <>
      <Card className="m-1 h-100 border-0">
        <Container className="d-flex justify-content-center align-items-center">
          <Card.Img src={product.image} style={{width: "100px"}} variant="top" />
        </Container>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        {auth.role !== "admin" && (
          <>
            <Card.Footer className="border-0">
              <Container className="d-flex justify-content-center align-items-center">
                <ProductCounter counter={counter} setCounter={setCounter} />
                <Button
                  size="sm"
                  variant="success"
                  onClick={() =>
                    add({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      q: counter,
                    })
                  }
                >
                  Agregar al carrito
                </Button>
              </Container>
            </Card.Footer>
            <Card.Footer className="border-0">
              <Container className="d-flex justify-content-center align-items-center">
                <Link to="/checkout">
                  <Button size="sm">Ir al Carrito</Button>
                </Link>
              </Container>
            </Card.Footer>
          </>
        )}
        {auth.role === "admin" && (
          <Card.Footer className="border-0">
            <Container className="d-flex justify-content-center align-items-center">
              <Button className="mx-2" size="sm" onClick={handleShow}>
                [ADMIN] Editar
              </Button>

              <Button className="mx-2" size="sm">
                [ADMIN] Borrar
              </Button>
            </Container>
          </Card.Footer>
        )}
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                defaultValue={editName}
                placeholder="Product Name"
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                defaultValue={editPrice}
                placeholder="Product Price"
                type="number"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                defaultValue={editDescription}
                placeholder="Product Description"
                type="text"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductDetail;
