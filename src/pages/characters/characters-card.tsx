import { useTranslation } from "react-i18next";
import Card from "src/components/card";
import { hasImagemAvailable } from "./characters.utils";
import type { TCharacter, TCharacters } from "./characters.types";
import { useNavigate } from "react-router-dom";

const CharactersCard = ({ characters }: TCharacters) => {
  const { t: translate } = useTranslation();
  const navigate = useNavigate();

  const handleCharacter = (characterId?: number) => {
    if (characterId) {
      navigate(`/characters/${characterId}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
