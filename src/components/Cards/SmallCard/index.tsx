import React from 'react';

/* Styles */
import { Container } from './styles';

interface SmallCardProps {
  title: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ title }) => {
  return (
    <Container>
      <span>Acessar</span>
      <h4>{title}</h4>
    </Container>
  );
};

export default SmallCard;
