import Pagination from "src/components/paginator";
import type { TLayout } from "./layout.types";
import Navbar from "../navbar";
import { useLocation } from "react-router-dom";
import { Container } from "./layout.styles";

const Layout = ({ children }: TLayout) => {
  const location = useLocation();
  const isCharacterPage = location.pathname.includes("/characters/");

  return (
    <Container direction="column" align="center" justify="center" gap="100px">
      <Navbar />
      {children}
      {!isCharacterPage && <Pagination />}
    </Container>
  );
};

export default Layout;
