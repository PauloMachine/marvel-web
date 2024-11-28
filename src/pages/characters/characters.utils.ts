import type { TBubbleData } from "src/components/ui/chart/bubble/bubble.types";
import type { TCharacter, Thumbnail } from "./characters.types";
import type { TBar } from "src/components/ui/chart/bar/bar.types";

export const hasImagemAvailable = ({ thumbnail }: Thumbnail) => {
  if (!thumbnail) return "";
  return thumbnail?.path?.includes("image_not_available")
    ? "/character_not_found.png"
    : `${thumbnail?.path}.${thumbnail?.extension}`;
};

export const formatBubbleData = (characters: TCharacter[] | undefined) => {
  const bubbleData: TBubbleData[] =
    characters?.map((character: TCharacter) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: (character.comics?.available ?? 0) + 10,
      label: character.name
        ? `Nome: ${character.name}\nHistória em quadrinhos: ${character.comics?.available}`
        : "Personagem desconhecido",
      image: hasImagemAvailable({ thumbnail: character?.thumbnail }),
    })) || [];

  return bubbleData;
};

export const formatBarData = (characters: TCharacter[] | undefined) => {
  const barData: TBar[] =
    characters
      ?.map((character: TCharacter) => ({
        name: character.name ?? "Unknown",
        image: hasImagemAvailable({ thumbnail: character?.thumbnail }),
        quantity: character.comics?.available ?? 0,
      }))
      .sort((a, b) => b.quantity - a.quantity) || [];

  return barData;
};
