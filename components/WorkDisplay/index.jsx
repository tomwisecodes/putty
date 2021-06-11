import { useContext } from "react";
import styled from "styled-components";
import { BlobContext } from "../Context/BlobContext";
import Button from "../Button";

const DisplayWrapper = styled.div`
  padding-left: 48px;
  p {
    font-size: 24px;
    line-height: 30px;
  }
`;

const WorkDisplay = () => {
  const { setContactTextSource } = useContext(BlobContext);
  return (
    <DisplayWrapper>
      <h2>Oak National Academy </h2>
      <div style={{ display: `flex` }}>
        <h3 style={{ marginRight: `12px`, color: `#0ac959` }}>
          Head of design
        </h3>
        <h3>April 2020 - Current</h3>
      </div>

      <p style={{ marginBottom: `36px` }}>
        Being the first designer and the first developer on the project my dual
        passions allowed us to put the first product out within 7 days of the
        first square drawn in Figma. Since then, our small but gloriously
        talented team has scaled to creating 3 apps welcoming 3 million users
        learning from home per week using over 10,000 lessons.{" "}
      </p>
      <Button onClick={() => setContactTextSource("portfolio")} darkMode={true}>
        Request Portfolio
      </Button>
    </DisplayWrapper>
  );
};

export default WorkDisplay;
