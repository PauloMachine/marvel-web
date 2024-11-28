import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: auto;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const StyledSelect = styled.select`
  padding: 10px 12px;
  font-size: 14px;
  color: #ff232a;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #ff232a;
  height: 50px;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  font-size: 16px;
`;
