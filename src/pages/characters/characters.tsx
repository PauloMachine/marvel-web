import { useEffect, useRef } from "react";
import { useCharacters } from "./characters.hooks";
import { usePagination } from "src/components/paginator/pagination.context";
import { useFilter } from "src/components/filter/filter.context";
import Flex from "src/components/ui/flex";
import CharactersChart from "./characters-chart";
import CharactersError from "./characters-error";
import CharactersLoading from "./characters-loading";
import CharactersEmpty from "./characters-empty-state";
import CharactersCard from "./characters-card";

const Characters = () => {
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

  const prevNameRef = useRef(name);

  useEffect(() => {
    if (characters) {
      setTotal(characters.total);

      if (name !== prevNameRef.current) {
        setPage(1);
        prevNameRef.current = name;
      }
    }
  }, [characters, name, setTotal, setPage]);

  return (
    <Flex wrap="wrap" align="center" justify="center" gap="50px">
      <Flex
        direction="row"
        wrap="wrap"
        align="center"
        justify="center"
        gap="10px"
        style={{ minHeight: 600 }}
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
