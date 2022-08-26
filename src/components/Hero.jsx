import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Hero = () => {
  return (
    <Card className="border-0 rounded-0 bg-primary py-5">
      <Card.Body>
        <Card.Title as="h1" className="text-white text-center">
          Hola, sos Kwick E-Mart
        </Card.Title>
        <Card.Text className="text-white text-center">
          ¡Estamos listos para desarrollar tu página web!
        </Card.Text>
        <div className="d-flex justify-content-center align-items-center pt-3">
          <Button size="lg" variant="outline-light">
            CONOZCA MÁS
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Hero;
