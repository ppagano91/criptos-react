import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.div`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.div`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  console.log(resultado);
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagen Cripto"
      />
      <div>
        <Precio>
          El Precio es de <span>{PRICE}</span>
        </Precio>
        <Texto>
          El Precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <p>
          El Precio más bajo del día <span>{LOWDAY}</span>
        </p>
        <Texto>
          Variación últimas 24hs <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Contenedor;
