import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
`;

const useSelectMonedas = (label) => {
  const SelectMonedas = () => {
    console.log("useSelectMonedas");
  };

  return (
    <>
      <Label htmlFor="">{label}</Label>
    </>
  );
};

export default useSelectMonedas;
