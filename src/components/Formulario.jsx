import React from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;
const Formulario = () => {
  const [SelectMonedas] = SelectMonedas("Elige tu Moneda");

  SelectMonedas();
  return (
    <form>
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
