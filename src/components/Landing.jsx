import React from "react";
import Button from "react-bootstrap/Button";

const Landing = ({sumarUno, restarUno}) => {
  return (
    <div>
      <button onClick={() => sumarUno()}>+</button>
      <button onClick={() => restarUno()}>-</button>
      <Button size="lg" variant="danger">
        Primary
      </Button>
    </div>
  );
};

export default Landing;
