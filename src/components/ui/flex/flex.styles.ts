import styled from "styled-components";
import type { TFlex } from "./flex.types";

export const Flex = styled.div<TFlex>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  gap: ${({ gap }) => gap || "0"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
`;
