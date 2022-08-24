import React, {useState} from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home = () => {
  // Inicio zona Javascript tal como lo conocemos
  // const sumar = (a, b) => {
  //   const c = a + b;

  //   console.log(c);

  //   return c;
  // };

  // const objeto = {
  //   nombre: "Ryan",
  //   apellido: "Ray",
  // };

  // const nombre2 = objeto.nombre;
  // const apellido2 = objeto.apellido;

  // const {nombre, apellido} = objeto;

  const [contador, setContador] = useState(1);

  // console.log("El valor del state contador es: " + contador);

  const sumarUno = () => {
    setContador(contador + 1);
    // Antes hacia contador = contador +1
  };

  const restarUno = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
    // Antes hacia contador = contador -1
  };

  // Fin zona Javascript tal como lo conocemos
  return (
    // Inicio Zona JSX
    <div>
      <Header />
      {/* State uplifting <--- Controlar desde un componente hijo a su padre */}
      <Landing restarUno={restarUno} sumarUno={sumarUno} />
      <h3>{contador}</h3>
      <Footer />
      {/* Ejemplo desestructuración */}
      {/* <br /> <br />
      <h4>Accediendo en forma directa a las propiedades de un objeto</h4>
      <h3>{objeto.nombre}</h3>
      <h3>{objeto.apellido}</h3>
      <h4>Accediendo por medio de otra variable a las propiedades de un objeto</h4>
      <h3>{nombre2}</h3>
      <h3>{apellido2}</h3>
      <h4>Accediendo por medio de desestructuración</h4>
      <h3>{nombre}</h3>
      <h3>{apellido}</h3>
      <br /> <br /> */}
      {/* Ejemplo desestructuración */}
    </div>
    // Fin Zona JSX
  );
};

export default Home;
