import { useEffect, useReducer, useRef } from "react";
import {
  CharactersReducer,
  InitialCharactersState,
} from "./states/characters-reducer";
import { useCharacters } from "./characters.hooks";
import { usePagination } from "src/components/paginator/pagination.context";
import { useFilter } from "src/components/filter/filter.context";
import Flex from "src/components/ui/flex";

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

  const [state, dispatch] = useReducer(
    CharactersReducer,
    InitialCharactersState,
  );
  const prevNameRef = useRef(name);

  useEffect(() => {
    if (isFetching) {
      dispatch({ type: "isFetching", payload: { limit } });
    } else if (isError) {
      dispatch({ type: "isError" });
    } else if (characters) {
      setTotal(characters.total);

      if (name !== prevNameRef.current) {
        setPage(1);
        prevNameRef.current = name;
      }

      if (characters.total === 0) {
        dispatch({ type: "isEmpty", payload: { name } });
      } else {
        dispatch({
          type: "isSuccess",
          payload: { characters: characters.results },
        });
      }
    }
  }, [isFetching, isError, characters, name, limit, setTotal, setPage]);

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
        {state.component}
      </Flex>
    </Flex>
  );
};

export default Characters;
