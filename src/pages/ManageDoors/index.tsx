import { gql, useQuery } from '@apollo/client';
import React from 'react';

/* Components */
// import PageTitle from "../../components/PageTitle";
import SmallCard from '../../components/Cards/SmallCard';
// import SmallHeader from "../../components/Headers/SmallHeader";

/* Styles */
import { ButtonStyled, Container, DoorsContainer } from './styles';

const DOORS = gql`
  query {
    getDoor {
      sucess
      data {
        name
      }
    }
  }
`;

const ManageDoors: React.FC = () => {
  const { loading, error, data } = useQuery(DOORS);

  console.log('loading', loading);
  console.log('data', data);
  return (
    <>
      {/* <SmallHeader title="" /> */}
      <Container>
        {/* <Header /> */}
        {/* <PageTitle title="Gerencie suas portas">
          <ButtonStyled title="Criar porta">
            <PlusStyled />
          </ButtonStyled>
        </PageTitle> */}

        <DoorsContainer>
          <SmallCard title="Porta Central" />
          <SmallCard title="Porta dos Fundos" />
          <SmallCard title="Porta da Frente 01" />
          <SmallCard title="Porta da Frente 02" />
          <SmallCard title="Porta da Frente 03" />
        </DoorsContainer>
      </Container>
    </>
  );
};

export default ManageDoors;
