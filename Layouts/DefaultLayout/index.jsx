import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import styled from "styled-components";

const Main = styled.main`
  * {
    color: black;
  }
`;

const DotWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  opacity: 1 !important;
  visibility: visible !important;
  span {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    :nth-child(1) {
      top: 30%;
      left: 12%;
    }
    :nth-child(2) {
      top: 10%;
      left: 90%;
    }
    :nth-child(3) {
      top: 90%;
      left: 50%;
    }
  }
`;

const DefaultLayout = ({ children, display, className, darkMode }) => {
  const blob1 = useRef();
  const blob2 = useRef();
  const blob3 = useRef();
  const colors = ["#3570a2", "#de8e47", "#ce4539", "#e6c544", "#397f5f"];
  function getRandomXPosition() {
    return Math.round(
      -50 + Math.random() * 1500 * (Math.round(Math.random()) ? 1 : -1)
    );
  }

  function getRandomYPosition() {
    return Math.round(
      -50 + Math.random() * 1500 * (Math.round(Math.random()) ? 1 : -1)
    );
  }

  function getRandomDuration() {
    return 40 + Math.random() * 2 + "s";
  }
  function setInitialProperties(blobs, colors) {
    blobs.forEach((theThing) => {
      const circleSize = Math.round(30 + Math.random() * 100);
      const whichColorNumber = Math.floor(Math.random() * 4) + 1;

      theThing.style.backgroundColor = colors[whichColorNumber];
      theThing.style.width = circleSize + "px";
      theThing.style.height = circleSize + "px";
      theThing.style.borderRadius = 0.5 * circleSize + "px";
    });
  }
  function moveBlobStart(blobs) {
    blobs.forEach((theThing) => {
      theThing.style.transitionDuration = getRandomDuration();
      theThing.style.transform = `translate3d(${getRandomXPosition()}px, ${getRandomYPosition()}px, 0px)`;
    });
  }
  function moveBlobNow(blob) {
    blob.current.style.transitionDuration = getRandomDuration();
    blob.current.style.transform = `translate3d(${getRandomXPosition()}px, ${getRandomYPosition()}px, 0px)`;
  }
  useEffect(() => {
    const blobs = document.querySelectorAll(".blob");
    setInitialProperties(blobs, colors);
    const timeout = setTimeout(() => {
      moveBlobStart(blobs);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Header display={display} darkMode={darkMode} />
      <Main darkMode={darkMode}>{children}</Main>
      <Footer darkMode={darkMode} />
      <DotWrap>
        <span
          ref={blob1}
          className="blob"
          onClick={() => moveBlobNow(blob1)}
        ></span>
        <span
          ref={blob2}
          className="blob"
          onClick={() => moveBlobNow(blob2)}
        ></span>
        <span
          ref={blob3}
          className="blob"
          onClick={() => moveBlobNow(blob3)}
        ></span>
        <span
          ref={blob3}
          className="blob"
          onClick={() => moveBlobNow(blob3)}
        ></span>
      </DotWrap>
    </>
  );
};

export default DefaultLayout;
