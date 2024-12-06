export type Item = {
  resourceURI?: string;
  name?: string;
  type?: string;
};

type Url = {
  type?: string;
  url?: string;
};

export type Image = {
  path?: string;
  extension?: string;
};

export type Thumbnail = {
  thumbnail?: Image;
};

type ComicList = {
  available?: number;
  collectionURI?: string;
  items?: Item[];
  returned?: number;
};

type StoryList = {
  available?: number;
  collectionURI?: string;
  items?: Item[];
  returned?: number;
};

type EventList = {
  available?: number;
  collectionURI?: string;
  items?: Item[];
  returned?: number;
};

type SeriesList = {
  available?: number;
  collectionURI?: string;
  items?: Item[];
  returned?: number;
};

export type TCharacter = {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: Url[];
  thumbnail?: Image;
  comics?: ComicList;
  stories?: StoryList;
  events?: EventList;
  series?: SeriesList;
};

export type TGetCharacters = {
  offset?: number;
  limit?: number;
  name?: string;
  orderBy?: string;
};

export type TCharacters = {
  characters: TCharacter[];
};

export type TCharactersEmpty = {
  name: string;
};

export type TCharactersLoading = {
  limit: number;
};

export type CharactersAction =
  | { type: "isFetching"; payload: { limit: number } }
  | { type: "isError" }
  | { type: "isEmpty"; payload: { name: string } }
  | {
      type: "isSuccess";
      payload: { characters: TCharacter[] };
    };

export type CharactersState = {
  component: React.ReactNode;
};
