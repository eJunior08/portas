import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import AddDoor from "../../components/AddDoor";
import Identification from "../../components/Cards/CardDoor/Identification";
import Status from "../../components/Cards/CardDoor/Status";
import Modal from "../../components/Modal";

/* Styles */
import {
  ButtonStyled,
  Container,
  Content,
  Divider,
  InfoPage,
  Subtitle,
  Title,
  TopBar,
} from "./styles";

const CameraDoor: React.FC = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  function handleGoBack() {
    history.goBack();
  }

  function handleOnClose(serialNumber?: string) {
    if (serialNumber) {
      history.push("confirm-door");
    }
    setIsOpen(false);
  }

  const modalMemoized = useMemo(
    () => (
      <Modal isOpen={isOpen} onClose={() => handleOnClose()}>
        <AddDoor onClose={handleOnClose} />
      </Modal>
    ),
    [isOpen, handleOnClose]
  );

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

        <TopBar onClick={handleGoBack}>Voltar</TopBar>

        <div>
          <InfoPage>
            <Title>Cadastre sua porta</Title>
          </InfoPage>

          <Divider />

          <Content>
            {/* <Identification />
          <Status /> */}
            <ButtonStyled onClick={() => setIsOpen(true)}>
              Cadastrar Manualmente
            </ButtonStyled>
          </Content>
        </div>
      </Container>

      {modalMemoized}
    </>
  );
};

export default CameraDoor;
