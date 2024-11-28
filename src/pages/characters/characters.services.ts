import api from "src/services/api";
import { TCharacter, type TGetCharacters } from "./characters.types";
import {
  CharacterDataContainer,
  CharacterDataWrapper,
} from "src/services/api.types";

export const getCharacters = async ({
  offset,
  limit,
  name,
  orderBy,
}: TGetCharacters): Promise<CharacterDataContainer<TCharacter>> => {
  try {
    const url = `/v1/public/characters`;
    const params = {
      offset,
      limit,
      orderBy,
      ...(name && { nameStartsWith: name }),
    };

    const response = await api.get<CharacterDataWrapper<TCharacter>>(url, {
      params,
    });
    return response.data.data;
  } catch (error) {
    console.error("Error getCharacters:", error);
    throw new Error("Failed getCharacters");
  }
};

export const getCharacterById = async (
  characterId: number,
): Promise<CharacterDataContainer<TCharacter>> => {
  const url = `/v1/public/characters/${characterId}`;

  try {
    const response = await api.get<CharacterDataWrapper<TCharacter>>(url);
    return response.data.data;
  } catch (error) {
    console.error("Error getCharacterById:", error);
    throw new Error("Failed getCharacterById");
  }
};
