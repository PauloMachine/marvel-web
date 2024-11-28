import Pagination from "src/components/paginator";
import type { TLayout } from "./layout.types";
import Flex from "../ui/flex";
import Navbar from "../navbar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: TLayout) => {
  const location = useLocation();
  const isCharacterPage = location.pathname.includes("/characters/");

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="100px"
      style={{
        minHeight: "100vh",
        width: "auto",
        paddingLeft: 110,
        paddingRight: 110,
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <Navbar />
      {children}
      {!isCharacterPage && <Pagination />}
    </Flex>
  );
};

export default Layout;
