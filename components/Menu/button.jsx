import { useState } from "react";
import { ArrowLeft } from "react-ikonate";
import styled from "styled-components";

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  svg {
    display: ${(props) => (props.hover ? "block" : "none")};
    width: 30px;
    height: 30px;
    path {
      color: #0ac959;
    }
  }
`;

const Button = ({ children, scrollTo, setShowMenu, mobileMenu }) => {
  const [hover, setHover] = useState(false);
  return (
    <ItemWrap
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={hover}
    >
      <button
        onClick={() => {
          scrollTo.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
          mobileMenu && setShowMenu(false);
        }}
      >
        {children}
      </button>
      <ArrowLeft />
    </ItemWrap>
  );
};

export default Button;
