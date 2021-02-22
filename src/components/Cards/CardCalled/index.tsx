import React from "react";

/* Styles */
import {
  Addres,
  Container,
  Divider,
  LocationContainer,
  Phone,
  PhoneContainer,
  Title,
} from "./styles";

interface CardCalledProps {
  name: string;
  description: string;
  closed: boolean;
  onClick?: () => void;
}

const CardCalled: React.FC<CardCalledProps> = (props) => {
  return (
    <Container onClick={props.onClick}>
      <Title>{props.name}</Title>
      <Divider />

      <LocationContainer>
        <Addres>Descrição: {props.description}</Addres>
      </LocationContainer>
      <PhoneContainer>
        <Phone>Status: {props.closed ? "Finalizado" : "Aberto"}</Phone>
      </PhoneContainer>
    </Container>
  );
};

export default CardCalled;
