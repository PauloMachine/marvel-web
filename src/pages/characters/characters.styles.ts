import styled, { keyframes } from "styled-components";

export const Typography = styled.span`
  font-size: 20px;
  color: #fff;
  display: inline-block;
  max-width: 500px;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
`;

const moveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
    transform: translateY(2px);
  }
  100% {
    transform: translateX(0);
    transform: translateY(0);
  }
`;

export const Image = styled.img`
  position: relative;
  width: 300px;
  height: auto;
  object-fit: cover;
  z-index: 1;
  animation: ${moveAnimation} 2s infinite ease-in-out;
`;
