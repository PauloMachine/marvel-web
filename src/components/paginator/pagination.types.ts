import type { ReactNode } from "react";

export type TPaginationContext = {
  page: number;
  limit: number;
  total: number;
  offset: number;
  setPage: (page: number) => void;
  setTotal: (total: number) => void;
};

export type TPaginationProvider = {
  children: ReactNode;
};
