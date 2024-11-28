import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCharacters } from "./characters.hooks";
import { usePagination } from "src/components/paginator/pagination.context";
import { useFilter } from "src/components/filter/filter.context";
import Flex from "src/components/ui/flex";
import { Typography } from "./characters.styles";
import CharactersChart from "./characters-chart";
import CharactersError from "./characters-error";
import CharactersLoading from "./characters-loading";
import CharactersEmpty from "./characters-empty-state";
import CharactersCard from "./characters-card";

const Characters = () => {
  const { t: translate } = useTranslation();
  const { limit, offset, setTotal, setPage } = usePagination();
  const { name } = useFilter();
  const {
    data: characters,
    isFetching,
    isError,
  } = useCharacters({
    offset,
    limit,
    name,
    orderBy: "name",
  });

  useEffect(() => {
    if (characters) setTotal(characters.total);
    if (name) setPage(1);
  }, [characters, setTotal, name, setPage]);

  return (
    <Flex wrap="wrap" align="center" justify="center" gap="50px">
      <Typography>{translate("charactersLabel", "Personagens")}</Typography>
      <Flex
        direction="row"
        wrap="wrap"
        align="center"
        justify="center"
        gap="10px"
      >
        {isFetching && <CharactersLoading limit={limit} />}
        {isError && <CharactersError />}
        {!isFetching && characters?.total === 0 && (
          <CharactersEmpty name={name} />
        )}
        {!isFetching && characters && characters.total > 0 && (
          <CharactersCard characters={characters.results} />
        )}
      </Flex>
      {!isFetching && characters && characters.total !== 0 && (
        <CharactersChart characters={characters?.results} />
      )}
    </Flex>
  );
};

export default Characters;
