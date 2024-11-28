import styled, { keyframes } from "styled-components";

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

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.2);
  width: 250px;
  height: 300px;
  cursor: url("/manopla_thanos.png"), pointer;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 300px;
  object-fit: cover;
  z-index: 1;
  animation: ${moveAnimation} 2s infinite ease-in-out;
`;

export const Label = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 8px;
  text-align: center;
`;
