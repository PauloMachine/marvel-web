import Flex from "src/components/ui/flex";
import styled, { keyframes } from "styled-components";

export const Typography = styled.span`
  font-size: 20px;
  color: #fff;
  display: inline-block;
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

export const Container = styled(Flex)`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    gap: 30px;
    flex-direction: column;
    justify-content: center;
  }
`;
