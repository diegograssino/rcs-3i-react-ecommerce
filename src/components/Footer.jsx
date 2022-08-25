import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container
      fluid
      className="mt-auto bg-dark text-white 
		pb-2 pt-4"
    >
      <p className="text-center">Copyright 2022 (c) Rolling Code School</p>
    </Container>
  );
};

export default Footer;
