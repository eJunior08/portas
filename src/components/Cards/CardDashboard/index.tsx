import React from 'react';

/* Styles */
import { Container, Title } from './styles';

interface CardDashboardProps {
  title: string;
  backgroundImg: string;
}

const CardDashboard: React.FC<CardDashboardProps> = ({
  title,
  backgroundImg,
}) => {
  return (
    <Container backgroundImg={backgroundImg}>
      <Title>
        <span>{title}</span>
      </Title>
    </Container>
  );
};

export default CardDashboard;
