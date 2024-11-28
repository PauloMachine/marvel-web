import styled from "styled-components";
import Flex from "src/components/ui/flex";

export const Container = styled(Flex)`
  min-height: 100vh;
  width: auto;
  padding-left: 110px;
  padding-right: 110px;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 440px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
