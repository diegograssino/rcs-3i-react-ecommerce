import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

const Product = ({product}) => {
  return (
    <Card className="m-1 h-100">
      <Container className="d-flex justify-content-center align-items-center">
        <Card.Img
          className="transform-img"
          src={product.image}
          style={{width: "100px"}}
          variant="top"
        />
      </Container>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        {/* <Card.Text>{product.description}</Card.Text> */}
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container className="d-flex justify-content-center align-items-center">
          <Link to={`/producto/${product.id}`}>
            <Button size="sm">Ir al producto</Button>
          </Link>
        </Container>
      </Card.Footer>
    </Card>
  );
};

export default Product;
