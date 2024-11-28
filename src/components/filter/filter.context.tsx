import { createContext, useContext, useState } from "react";
import type { TFilterContext, TFilterProvider } from "./filter.types";

const FilterContext = createContext<TFilterContext | undefined>(undefined);

export const FilterProvider = ({ children }: TFilterProvider) => {
  const [name, setName] = useState("");

  return (
    <FilterContext.Provider value={{ name, setName }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
