import styled from "styled-components";

export const BubbleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: transparent;
  border: none;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(255, 35, 42);
    border-radius: 8px;
    border: 2px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

export const Bubble = styled.div`
  position: relative;
  display: inline-block;
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
