import React, { AllHTMLAttributes, HTMLAttributes } from "react";

/* Styles */
import { Container, Title } from "./styles";

interface CardDashboardProps {
  title: string;
  backgroundImg: string;
  onClick: () => any;
}

const CardDashboard: React.FC<CardDashboardProps> = ({
  title,
  backgroundImg,
  onClick,
}) => {
  return (
    <Container backgroundImg={backgroundImg} onClick={onClick}>
      <Title>
        <span>{title}</span>
      </Title>
    </Container>
  );
};

export default CardDashboard;
