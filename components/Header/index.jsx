import { useState, useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { BlobContext } from "../Context/BlobContext";
import BtnWrap from "../BtnWrap";
import Link from "next/link";

const HeaderWrap = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  align-items: center;
  width: 100vw;
  top: 0;
  left: 0;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  @media (max-width: 900px) {
    padding: 12px 8px;
    top: ${(props) => (props.display ? "0" : "-100px")};
  }
`;

const Logo = styled.a`
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => (props.darkMode ? "#FAFAED" : "#252529")};
  text-decoration: none;
  font-family: Rigton-semibold, sans-serif;
  @media (max-width: 900px) {
    padding: 24px;
    border-radius: 100px;
    border: none;
    font-size: 20px;
    line-height: 20px;
    background-color: #fafaed;
    cursor: pointer;
    border: solid 2px #fafaed;
  }
`;

const SayHello = styled.button`
  padding: 24px;
  border-radius: 100px;
  border: none;
  font-size: 20px;
  line-height: 20px;
  background-color: ${(props) => (props.darkMode ? "#FAFAED" : "#252529")};
  color: ${(props) => (props.darkMode ? "#252529 " : "#FAFAED")};
  cursor: pointer;
  border: solid 2px ${(props) => (props.darkMode ? "#252529" : "#FAFAED")};
  :hover {
    background-color: transparent;
    color: ${(props) => (props.darkMode ? "#FAFAED" : "#252529")};
  }
`;

const LinkDecor = styled.a`
  padding: 24px;
  border-radius: 100px;
  border: none;
  font-size: 20px;
  line-height: 20px;
  border: none;
  color: #252529;
  font-family: franklin-gothic-urw, sans-serif;
  background-color: ${(props) => (props.darkMode ? "#FAFAED" : "#252529")};
  color: ${(props) => (props.darkMode ? "#252529 " : "#FAFAED")};
  cursor: pointer;
  border: solid 2px ${(props) => (props.darkMode ? "#252529" : "#FAFAED")};
  :hover {
    background-color: transparent;
    color: ${(props) => (props.darkMode ? "#FAFAED" : "#252529")};
  }
`;

const Header = ({ display, darkMode }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();

  const { setContactTextSource } = useContext(BlobContext);
  return <></>;
};

export default Header;
