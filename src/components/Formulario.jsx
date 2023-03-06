import React, { useState } from "react";
import Card from "./Card";
import UseForm from "./UseForm";
import Container from "./Container";

const Formulario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };
  console.log(usuarios)
  return (
    <Container>
      <Card>
        <div style={{ padding: "20px" }}>
          <UseForm submit={submit} />
        </div>
      </Card>
      <Card>
        <ul>
          {usuarios.map((usuario) => {
            return (
              <li key={usuario.email}>
                {usuario.name} {usuario.lastname} {usuario.email}
              </li>
            );
          })}
        </ul>
      </Card>
    </Container>
  );
};

export default Formulario;
