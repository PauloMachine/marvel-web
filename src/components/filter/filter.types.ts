import type { ReactNode } from "react";

export type TFilterContext = {
  name: string;
  setName: (name: string) => void;
};

export type TFilterProvider = {
  children: ReactNode;
};
