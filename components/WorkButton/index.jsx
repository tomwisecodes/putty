import { ArrowRight } from "react-ikonate";
import styled from "styled-components";

const WorkButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-radius: 8px;
  border: solid 2px #fafaed;
  background-color: ${(props) => (props.active ? "#252529" : "#FAFAED")};
  margin-bottom: 12px;
  cursor: pointer;
  width: fit-content;
  :hover {
    opacity: 0.8;
  }
  span {
    margin-right: 6px;
    font-size: 20px;
    line-height: 20px;
    color: ${(props) => (props.active ? "#FAFAED" : "#252529")};
    cursor: pointer;
  }
  svg {
    width: 18px;
    height: 18px;
    stroke-width: 3;
    cursor: pointer;
    path {
      color: ${(props) => (props.active ? "#FAFAED" : "#252529")};
    }
  }
`;

const WorkButton = ({ children, onClick, active }) => {
  return (
    <WorkButtonWrapper onClick={onClick} active={active}>
      <span>{children}</span>
      <ArrowRight />
    </WorkButtonWrapper>
  );
};

export default WorkButton;
