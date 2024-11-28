import { useTranslation } from "react-i18next";
import Card from "src/components/card";
import { hasImagemAvailable } from "./characters.utils";
import type { TCharacter, TCharacters } from "./characters.types";
import { useNavigate } from "react-router-dom";
import { useFilter } from "src/components/filter/filter.context";

const CharactersCard = ({ characters }: TCharacters) => {
  const { t: translate } = useTranslation();
  const navigate = useNavigate();
  const { setName } = useFilter();

  const handleCharacter = (characterId?: number) => {
    if (characterId) {
      setName("");
      navigate(`/characters/${characterId}`);
    }
  };

  return (
    <>
      {characters.map((character: TCharacter) => (
        <Card
          key={character.id}
          image={hasImagemAvailable({ thumbnail: character?.thumbnail })}
          label={translate(`characters.${character.name}`, {
            defaultValue: character.name,
          })}
          onClick={() => handleCharacter(character.id)}
        />
      ))}
    </>
  );
};

export default CharactersCard;
