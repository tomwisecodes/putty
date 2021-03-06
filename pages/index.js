import { useEffect, useState, useRef } from "react";
import { Col, Row } from "../components/Grid";
import Container from "../components/Container";
import DefaultLayout from "../Layouts/DefaultLayout";
import styled from "styled-components";
import MouseCircle from "../components/MouseCircle";
import Hero from "../components/Hero";
import clients from "../data";
import MobileMenu from "../components/Menu/mobileMenu";
import FirstLoad from "../components/FirstLoad";
import SkillSection from "../components/SkillSection";

const PageWrap = styled(Container)`
  min-height: 60vh;
  margin-top: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  h1 {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 12px;
    max-width: 570px;
    font-weight: 400;
    font-family: "Rigton-SemiBold", sans;
  }
  h2 {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 6px;
    max-width: 600px;
    @media (max-width: 769px) {
      margin-bottom: 48px;
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  max-width: 300px;
  p,
  a {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 6px;
  }
  a:hover {
    text-decoration: underline;
  }
`;
const HomePage = () => {
  const [showdef, setShowDef] = useState(false);
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);

  function isTouchDevice() {
    if (typeof window !== "undefined") {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }
    return null;
  }

  useEffect(() => {
    isTouchDevice();
  }, []);

  return (
    <>
      <DefaultLayout>
        <PageWrap>
          <div>
            <h1>Putty is the best design studio in the world</h1>
          </div>
          <ContactWrap>
            <p>Get in touch for more information or to hear about our work:</p>
            <a href="mailto:hello@putty.studio">hello@putty.studio</a>
          </ContactWrap>
        </PageWrap>
      </DefaultLayout>
    </>
  );
};

export default HomePage;
