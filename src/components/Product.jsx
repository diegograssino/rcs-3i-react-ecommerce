import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = ({product}) => {
  return (
    <Card className="m-1">
      <Card.Img src={product.image} variant="top" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        {/* <Card.Text>{product.description}</Card.Text> */}
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button>Ir al producto</Button>
      </Card.Footer>
    </Card>
  );
};

export default Product;
