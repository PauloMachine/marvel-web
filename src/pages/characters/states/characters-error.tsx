import { useTranslation } from "react-i18next";
import Card from "src/components/card";

const CharactersError = () => {
  const { t: translate } = useTranslation();

  return (
    <Card
      image={"/character_not_found.png"}
      label={translate("errorOccurred", "Oops! Encontramos um problema")}
    />
  );
};

export default CharactersError;
