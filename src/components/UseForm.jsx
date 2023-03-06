import React from 'react'
import Input from "./Input";
import UseFormulario from "./UseFormulario";
import Button from './Button';

const useForm = ({submit}) => {
     const [formulario, handleChange, reset] = UseFormulario({
       name: "",
       lastname: "",
       email: "",
     });

    const handleSubmit = e => {
        e.preventDefault()
        submit(formulario)
        reset()
    }
     
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        value={formulario.name}
        onChange={handleChange}
        label="Nombre"
      />
      <Input
        name="lastname"
        value={formulario.lastname}
        onChange={handleChange}
        label="Apellido"
      />
      <Input
        name="email"
        value={formulario.email}
        onChange={handleChange}
        label="Email"
      />
      <Button>Enviar</Button>
    </form>
  );
}

export default useForm