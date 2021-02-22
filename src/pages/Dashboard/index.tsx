import React, { useMemo, useState } from "react";

/* Components */
import CardDashboard from "../../components/Cards/CardDashboard";
// import PageTitle from "../../components/PageTitle";
// import SmallHeader from "../../components/Headers/SmallHeader";

/* Assets */
import img1 from "../../assets/background/scrum_board.png";
import img2 from "../../assets/background/calling.png";
import img3 from "../../assets/background/help.png";
import img4 from "../../assets/background/Add_People.png";
import img5 from "../../assets/background/Receipt.png";

/* Styles */
import {
  Container,
  DashboardContent,
  TopBar,
  // PageTitle,
  // Divider,
} from "./styles";
import { useHistory } from "react-router-dom";
import { Roles } from "../../config/roles.config";
import { gql, useMutation } from "@apollo/client";
import Modal from "../../components/Modal";
import AddTechnician from "../../components/AddTechnician";

const LINK_TECHNICIAN = gql`
  mutation LinkUserToOrganization($CPF: String!) {
    linkUserToOrganization(CPF: $CPF) {
      sucess
      message
    }
  }
`;

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const [linkTech] = useMutation(LINK_TECHNICIAN);

  const isClient = (JSON.parse(
    localStorage.getItem("roles") as string
  ) as number[]).includes(Roles.CLIENTUSER);

  const isTechnician = (JSON.parse(
    localStorage.getItem("roles") as string
  ) as number[]).includes(Roles.TECHNICIAN);

  const isAssistance = (JSON.parse(
    localStorage.getItem("roles") as string
  ) as number[]).includes(Roles.ORGANIZATION);

  console.log("isAssistance", isAssistance);

  function handleNavigate(route: string) {
    history.push(route);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("roles");

    history.push("/");
  }

  async function handleLinkAdd(cpf: string) {
    console.log("clicou", cpf);
    const response = await linkTech({ variables: { CPF: cpf } });
    console.log("response", response);
  }

  function handleOnClose(cpf?: string) {
    if (cpf) {
      handleLinkAdd(cpf);
    }
    setIsOpen(false);
  }

  const modalMemoized = useMemo(
    () => (
      <Modal isOpen={isOpen} onClose={() => handleOnClose()}>
        <AddTechnician onClose={handleOnClose} />
      </Modal>
    ),
    [isOpen, handleOnClose]
  );

  const calledText = isClient
    ? "Visualize seus chamados"
    : isTechnician
    ? "Visualize os chamados em aberto"
    : "Visualize todos os chamados";

  return (
    <>
      {/* <SmallHeader title="" /> */}
      <Container>
        {/* <PageTitle title="Dashboard" /> */}

        <TopBar>
          <h2>Dashboard</h2>
          <span onClick={handleLogout}>Logout</span>
        </TopBar>

        <DashboardContent>
          {isClient && (
            <CardDashboard
              title="Gerenciar suas portas"
              backgroundImg={img1}
              onClick={() => handleNavigate("manage-doors")}
            />
          )}

          <CardDashboard
            title={calledText}
            backgroundImg={img2}
            onClick={() => handleNavigate("manage-calls")}
          />

          {isTechnician && (
            <CardDashboard
              title="Visualize seus chamados"
              backgroundImg={img5}
              onClick={() => handleNavigate("attendance")}
            />
          )}
          {/* {isTechnician && (
            <CardDashboard
              title="Visualize seus chamados"
              backgroundImg={img5}
              onClick={() => handleNavigate("manage-assign-calls")}
            />
          )} */}

          {isClient && (
            <CardDashboard
              title="Encontre seu suporte"
              backgroundImg={img3}
              onClick={() => handleNavigate("assistance-list")}
            />
          )}

          {isAssistance && (
            <CardDashboard
              title="Adicione funcionários"
              backgroundImg={img4}
              onClick={() => setIsOpen(true)}
            />
          )}
        </DashboardContent>
      </Container>

      {modalMemoized}
    </>
  );
};

export default Dashboard;
