import type { CSSProperties } from "react";
import styled from "styled-components";
import type { TFlex } from "../flex/flex.types";

interface TStyledInput {
  style?: CSSProperties;
}

export const StyledFlex = styled.div<TFlex>`
  border-bottom: 1px solid #aaa;

  &:focus-within {
    border-bottom: 1px solid #ff232a;
    svg {
      color: #ff232a !important;
    }
  }

  svg {
    margin-bottom: -5px;
  }
`;

export const StyledInput = styled.input<TStyledInput>`
  padding: 10px;
  border: 0;
  width: 500px;
  box-sizing: border-box;
  height: 50px;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  color: #fff;
  ${({ style }) => style && { ...style }}
`;
