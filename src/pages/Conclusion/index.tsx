import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSvgDrawing } from "react-hooks-svgdrawing";

import CardDescriptionRemote from "../../components/Cards/CardDescriptionRemote";

/* Styles */
import {
  ButtonStyled,
  Container,
  Content,
  Divider,
  InfoPage,
  Title,
  TopBar,
} from "./styles";

const Conclusion: React.FC = () => {
  const history = useHistory();
  const [renderRef, draw] = useSvgDrawing();
  const [result, setResult] = useState<string | null>(null);

  function handleGoBack() {
    history.goBack();
  }

  console.log("result", result);

  function exportSVG() {
    // const r = window.btoa(draw.getSvgXML() as string);
    setResult(draw.getSvgXML());
    // console.log("draw", r);
    // console.log("data:image/svg+xml;base64," + r);
    // setResult("data:image/svg+xml;base64," + r);
  }

  return (
    <Container>
      <TopBar onClick={handleGoBack}>Voltar</TopBar>

      <InfoPage>
        <Title>Conclusão</Title>
      </InfoPage>

      <Divider />

      <Content>
        <CardDescriptionRemote />

        {result && (
          <img src={`data:image/svg+xml;utf8,${result}`} alt="teste svg" />
        )}

        <div
          style={{ backgroundColor: "white", width: "100%", height: 200 }}
          ref={renderRef}
        />
        <ButtonStyled onClick={exportSVG}>SVG</ButtonStyled>
        {/* <ButtonStyled>Adicionar Porta</ButtonStyled>
        <ButtonStyled danger>Cancelar</ButtonStyled> */}
      </Content>
    </Container>
  );
};

export default Conclusion;
