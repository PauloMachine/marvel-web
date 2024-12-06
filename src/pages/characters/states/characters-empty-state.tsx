import { useTranslation } from "react-i18next";
import Card from "src/components/card";
import type { TCharactersEmpty } from "./characters.types";

const CharactersEmpty = ({ name }: TCharactersEmpty) => {
  const { t: translate } = useTranslation();

  return (
    <Card
      image={"/character_not_found.png"}
      label={translate("characterNotFound", {
        name,
        defaultValue: `Personagem '${name}' não existe`,
      })}
    />
  );
};

export default CharactersEmpty;
