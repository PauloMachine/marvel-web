import Flex from "../ui/flex";
import Input from "../ui/input";
import { useFilter } from "../filter/filter.context";
import LanguageSelect from "../language";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { name, setName } = useFilter();
  const { t: translate } = useTranslation();
  const location = useLocation();
  const isCharacterPage = location.pathname.includes("/characters/");

  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      wrap="wrap"
      style={{ width: "100%" }}
      gap="25px"
      data-testid="navbar"
    >
      <img
        src="/logo.png"
        alt="Logo"
        style={{ height: "50px", objectFit: "contain" }}
        data-testid="navbar-logo"
      />
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        wrap="wrap"
        data-testid="navbar-content"
      >
        {!isCharacterPage && (
          <Input
            value={name}
            onChange={(search: string) => setName(search)}
            placeholder={translate("searchCharacter") || "Procurar personagem"}
            icon="MdSearch"
            data-testid="navbar-search-input"
          />
        )}
        <LanguageSelect data-testid="navbar-language-select" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
