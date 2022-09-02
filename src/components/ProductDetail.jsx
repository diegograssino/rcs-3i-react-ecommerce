import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const ProductDetail = ({product}) => {
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
        <Card.Footer className="border-0">
          <Container className="d-flex justify-content-center align-items-center">
            <Button size="sm" variant="success">
              Comprar
            </Button>
          </Container>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProductDetail;
