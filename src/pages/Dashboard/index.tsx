import React from "react";

/* Components */
import CardDashboard from "../../components/Cards/CardDashboard";
// import PageTitle from "../../components/PageTitle";
// import SmallHeader from "../../components/Headers/SmallHeader";

/* Assets */
import img1 from "../../assets/background/scrum_board.png";
import img2 from "../../assets/background/calling.png";
import img3 from "../../assets/background/help.png";

/* Styles */
import {
  Container,
  DashboardContent,
  // PageTitle,
  // Divider,
} from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      {/* <SmallHeader title="" /> */}
      <Container>
        {/* <PageTitle title="Dashboard" /> */}
        <DashboardContent>
          <CardDashboard title="Gerenciar suas portas" backgroundImg={img1} />

          <CardDashboard title="Visualize seus chamados" backgroundImg={img2} />

          <CardDashboard title="Encontre seu suporte" backgroundImg={img3} />
        </DashboardContent>
      </Container>
    </>
  );
};

export default Dashboard;
