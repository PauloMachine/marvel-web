import styled from "styled-components";

export const BubbleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: transparent;
  border-radius: 8px;
`;

export const Bubble = styled.div`
  position: absolute;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    z-index: 10;
  }
`;
