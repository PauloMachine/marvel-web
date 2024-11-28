import { createContext, useContext, useState } from "react";
import type {
  TPaginationContext,
  TPaginationProvider,
} from "./pagination.types";

const PaginationContext = createContext<TPaginationContext | undefined>(
  undefined,
);

export const PaginationProvider = ({ children }: TPaginationProvider) => {
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [total, setTotal] = useState(0);

  const offset = (page - 1) * limit;

  return (
    <PaginationContext.Provider
      value={{ page, limit, total, offset, setPage, setTotal }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
};
