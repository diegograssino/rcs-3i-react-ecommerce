import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Landing = () => {
  return (
    <Container fluid className="bg-primary py-5">
      <Card className="border-0 bg-transparent text-white">
        <Card.Body>
          <Card.Title>
            <h2 className="text-center">Soy Fullstack Developer</h2>
          </Card.Title>
          <Card.Text className="text-center">
            Mi nombre es John Doe y trabajo con el stack MERN.
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button variant="light">CONOCER MÁS</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Landing;
