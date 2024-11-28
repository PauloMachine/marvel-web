import { useNavigate, useParams } from "react-router-dom";
import { useCharacter } from "./characters.hooks";
import { Typography } from "./characters.styles";
import Flex from "src/components/ui/flex";
import { hasImagemAvailable } from "./characters.utils";
import type { Item } from "./characters.types";
import Card from "src/components/card";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import CharactersError from "./characters-error";
import CharacterLoading from "./character-loading";

const Character = () => {
  const { t: translate } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isFetching, isError } = useCharacter(Number(id));
  const character = data?.results[0];

  const handleCharacters = () => navigate("/");

  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="center"
      gap="50px"
      wrap="wrap"
      style={{ width: "100%" }}
      data-testid="character-page"
    >
      <FaArrowLeft
        size={30}
        color="fff"
        onClick={handleCharacters}
        style={{ cursor: "pointer" }}
        data-testid="back-button"
      />
      <Flex
        direction="row"
        align="center"
        justify="center"
        gap="50px"
        wrap="wrap"
        style={{ width: "100%" }}
        data-testid="character-content"
      >
        {isFetching && <CharacterLoading data-testid="loading-state" />}
        {isError && <CharactersError data-testid="error-state" />}
        {!isFetching && character && (
          <>
            <Card
              image={hasImagemAvailable({ thumbnail: character.thumbnail })}
              label={translate(`characters.${character.name}`, {
                defaultValue: character.name,
              })}
              data-testid="character-card"
            />
            <Typography
              style={{ textWrap: "wrap" }}
              data-testid="character-description"
            >
              {character?.description ||
                translate("noDescription", "Personagem sem descrição")}
            </Typography>
          </>
        )}
      </Flex>

      {!isFetching && character && (
        <Flex
          direction="row"
          align="flex-start"
          justify="space-around"
          gap="10px"
          wrap="wrap"
          style={{ width: "100%" }}
          data-testid="character-extra-info"
        >
          {character.comics?.items?.length! > 0 && (
            <Flex
              direction="column"
              align="flex-start"
              justify="center"
              gap="10px"
              wrap="wrap"
              data-testid="character-comics"
            >
              <Typography
                style={{ fontSize: 40, color: "#ff232a" }}
                data-testid="comics-title"
              >{`${translate("comics", "Quadrinhos")}: ${character.comics?.items?.length}`}</Typography>
              {character.comics?.items?.map((comic: Item, index: number) => (
                <Typography key={index} data-testid={`comic-${index}`}>
                  - {comic.name}
                </Typography>
              ))}
            </Flex>
          )}

          {character.series?.items?.length! > 0 && (
            <Flex
              direction="column"
              align="flex-start"
              justify="center"
              gap="10px"
              wrap="wrap"
              data-testid="character-series"
            >
              <Typography
                style={{ fontSize: 40, color: "#ff232a" }}
                data-testid="series-title"
              >{`${translate("series", "Séries")}: ${character.series?.items?.length}`}</Typography>
              {character.series?.items?.map((series: Item, index: number) => (
                <Typography key={index} data-testid={`series-${index}`}>
                  - {series.name}
                </Typography>
              ))}
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Character;
