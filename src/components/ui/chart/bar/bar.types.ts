import type { ReactElement } from "react";

export type TBar = {
  name: string;
  image: string;
  quantity: number;
};

export type TBarChart = {
  data: TBar[];
};
