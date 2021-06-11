import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import MobileClose from "../MobileClose";

const hover = keyframes`
  0% { 
    top: -25px;
  left: -25px;
  width: 50px;
  height: 50px;
  }
  100% {
    top: -40px;
  left: -40px;
  width: 80px;
  height: 80px;
  border: 5px solid #18922B;
  }
`;

const Circle = styled.div`
  position: absolute;
  background-color: transparent;
  cursor: none !important;
  top: -280px;
  left: 0px;
  max-width: 396px;
  margin-right: 24px;
  padding: 24px;
  visibility: ${(props) => (props.showdef ? "visible" : "hidden")};
  transition-duration: ${(props) => (props.showdef ? "0" : "0.3s")};
  pointer-events: none;
  ::before {
    background-color: #252529;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${(props) => (props.showdef ? "100%" : "0px")};
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    z-index: -1;
    border: ${(props) => (props.showdef ? "4px solid #fafaed" : "none")};
  }
  * {
    color: #fafaed;
  }
  p {
    font-size: 18px;
    line-height: 24px;
    opacity: ${(props) => (props.showdef ? 1 : 0)};
    transition-duration: 0.3s;
    transition-delay: 0.5s;
    transition-timing-function: ease-in-out;
  }
  @media (max-width: 900px) {
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Label = styled.p`
  font-family: Rigton-semiBold, serif;
  font-family: 20px;
  :first-child {
    margin-bottom: 0;
  }
`;
const Source = styled.p`
  font-size: 14px;
  font-style: italic;
`;

const MouseCircle = ({ showdef, cricleRef, setShowDef, isTouchDevice }) => {
  return (
    <>
      <Circle ref={cricleRef} showdef={showdef}>
        {!!isTouchDevice() && <MobileClose onClick={() => setShowDef(false)} />}
        <Label>"UX Unicorn"</Label>
        <Label>noun</Label>
        <p>
          Mythical user experience designer with an advanced and adaptive skill
          range. Outstanding skills in graphic design, rapid prototyping, front
          end development, user testing, technical specifications, marketing and
          branding.
        </p>
        <Source>Source: uxunicorn.com</Source>
      </Circle>
    </>
  );
};

export default MouseCircle;
