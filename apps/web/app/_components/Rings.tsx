import React from "react";
import styled, { css } from "styled-components";

interface RingProps {
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  colour: string;
}

const ringProps: RingProps[] = Array.from({ length: 12 }, (_, index) => ({
  rotateX: (index * 18) % 360,
  rotateY: (index * 36) % 360,
  rotateZ: (index * 72) % 360,
  colour: "209, 109, 27", 
}));

const Ring = styled.div<RingProps>`
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  border-width: 2px;

  ${({ colour, rotateX, rotateY, rotateZ }) =>
    css`
      transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg);
      border: 2px dashed rgba(${colour}, 0.7);
    `};
`;

const Rings: React.FC = () => {
  return (
    <>
      {ringProps.map((ring, index) => (
        <Ring key={index} {...ring} />
      ))}
    </>
  );
};

export default Rings;
