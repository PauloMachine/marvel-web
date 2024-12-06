import CharactersLoading from "./characters-loading";
import CharactersError from "./characters-error";
import CharactersEmpty from "./characters-empty-state";
import CharactersCard from "../characters-card";
import CharactersChart from "../characters-chart";
import type { CharactersAction, CharactersState } from "../characters.types";

export const InitialCharactersState: CharactersState = {
  component: null,
};

export const CharactersReducer = (
  state: CharactersState,
  action: CharactersAction,
): CharactersState => {
  switch (action.type) {
    case "isFetching":
      return {
        component: <CharactersLoading limit={action.payload.limit} />,
      };
    case "isError":
      return {
        component: <CharactersError />,
      };
    case "isEmpty":
      return {
        component: <CharactersEmpty name={action.payload.name} />,
      };
    case "isSuccess":
      return {
        component: (
          <>
            <CharactersCard characters={action.payload.characters} />
            <CharactersChart characters={action.payload.characters} />
          </>
        ),
      };
    default:
      return {
        component: <CharactersError />,
      };
  }
};
