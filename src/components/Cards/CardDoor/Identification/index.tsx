import React from "react";

/* Styles */
import {
  ButtonStyled,
  Container,
  Content,
  Divider,
  Info,
  InfoContainer,
  SubContent,
  Subtitle,
  Title,
} from "./styles";

const Identification: React.FC = () => {
  return (
    <Container>
      <Title>Identificação do Equipamento</Title>

      <Divider />

      <Content>
        <SubContent>
          <InfoContainer>
            <Subtitle>Modelo da Porta</Subtitle>
            <Info>Bona Brushless DC</Info>
          </InfoContainer>
          <ButtonStyled>Ver Manual</ButtonStyled>
        </SubContent>

        <SubContent>
          <InfoContainer>
            <Subtitle>Central</Subtitle>
            <Info>Triflex Brushless PS</Info>
          </InfoContainer>
          <ButtonStyled>Ver Manual</ButtonStyled>
        </SubContent>

        <SubContent>
          <InfoContainer>
            <Subtitle>Versão do Firmware</Subtitle>
            <Info>1.3</Info>
          </InfoContainer>
          <ButtonStyled>Atualizar</ButtonStyled>
        </SubContent>

        <SubContent>
          <InfoContainer>
            <Subtitle>Número de Série</Subtitle>
            <Info>202001201647PS00030</Info>
          </InfoContainer>
        </SubContent>

        <Divider />

        <SubContent>
          <Subtitle>Cliente</Subtitle>
          <Info>Marília Shopping</Info>
        </SubContent>

        <SubContent>
          <Subtitle>Local</Subtitle>
          <Info>R. dos Tucunarés, 500</Info>
        </SubContent>
      </Content>
    </Container>
  );
};

export default Identification;
