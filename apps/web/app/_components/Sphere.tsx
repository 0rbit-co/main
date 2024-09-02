"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

import Rings from "./Rings";

const rotateSphere = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

const Scene = styled.div`
  display: grid;
  width: 400px;
  height: 400px;
  perspective: 500px;
  background-color: transparent;
  margin: auto;
`;

const RingsContainer = styled.div`
  width: 350px;
  height: 350px;
  border: 2px solid transparent;
  border-radius: 50%;
  margin: auto;
  transform-style: preserve-3d;
  animation: ${rotateSphere} 10s infinite linear;
`;

const Sphere = () => (
  <Scene>
    <RingsContainer>
      <Rings />
    </RingsContainer>
  </Scene>
);

export default Sphere;
