import styled from "styled-components";

const ButtonWrap = styled.button`
  padding: 24px;
  border-radius: 100px;
  border: none;
  font-size: 20px;
  line-height: 20px;
  background-color: ${(props) => (props.darkMode ? "#fafaed" : "#252529")};
  color: ${(props) => (props.darkMode ? "#252529" : "#fafaed")};
  cursor: pointer;
  border: solid 2px ${(props) => (props.darkMode ? "#fafaed" : "#252529")};
  :hover {
    background-color: transparent;
    color: ${(props) => (props.darkMode ? "#fafaed" : "#252529;")};
  }
`;

export default ButtonWrap;
