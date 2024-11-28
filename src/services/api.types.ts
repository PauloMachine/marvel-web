export type CharacterDataContainer<T> = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
};

export type CharacterDataWrapper<T> = {
  code: string;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: CharacterDataContainer<T>;
};
