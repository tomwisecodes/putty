import { Col } from "../Grid";
import styled from "styled-components";
const Title = styled.h2`
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  padding-bottom: 24px;

  text-align: center;
`;

const SectionTitle = ({ title }) => {
  return (
    <Col width={[1]}>
      <Title>{title}</Title>
    </Col>
  );
};

export default SectionTitle;
