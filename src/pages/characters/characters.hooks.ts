import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

import { TCharacter, type TGetCharacters } from "./characters.types";
import { CharacterDataContainer } from "src/services/api.types";
import { getCharacterById, getCharacters } from "./characters.services";

export const useCharacters = ({
  offset,
  limit,
  name,
  orderBy,
}: TGetCharacters) => {
  const queryKey = ["characters", offset, limit, name, orderBy];

  return useQuery<CharacterDataContainer<TCharacter>, Error>({
    queryKey,
    queryFn: () => getCharacters({ offset, limit, name, orderBy }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    onError: (error: Error) => {
      console.error("Error useCharacters:", error.message);
    },
  } as UseQueryOptions<
    CharacterDataContainer<TCharacter>,
    Error,
    CharacterDataContainer<TCharacter>
  >);
};

export const useCharacter = (characterId: number) => {
  return useQuery<CharacterDataContainer<TCharacter>, Error>({
    queryKey: ["character", characterId],
    queryFn: () => getCharacterById(characterId),
    enabled: !!characterId,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60,
    onError: (error: Error) => {
      console.error("Error useCharacter:", error.message);
    },
  } as UseQueryOptions<
    CharacterDataContainer<TCharacter>,
    Error,
    CharacterDataContainer<TCharacter>
  >);
};
