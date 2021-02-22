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

interface CardAssistanceProps {
  nome_fantasia: string;
  endereco: string;
  phone: string;
  onClick: () => void;
}

const CardAssistance: React.FC<CardAssistanceProps> = (props) => {
  return (
    <Container onClick={props.onClick}>
      <Title>{props.nome_fantasia}</Title>
      <Divider />

      <LocationContainer>
        <Addres>{props.endereco}</Addres>
      </LocationContainer>
      <PhoneContainer>
        <Phone>{props.phone}</Phone>
      </PhoneContainer>
    </Container>
  );
};

export default CardAssistance;
