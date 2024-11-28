import { useEffect, useState } from "react";
import { StyledFlex, StyledInput } from "./input.styles";
import type { TInput } from "./input.types";
import * as MdIcons from "react-icons/md";

const Input = ({
  value,
  onChange,
  placeholder = "Search...",
  debounceDelay = 300,
  style,
  icon = "MdSearch",
}: TInput) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(debouncedValue);
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue, onChange, debounceDelay]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedValue(e.target.value);
  };

  const IconComponent = MdIcons[icon];

  return (
    <StyledFlex
      direction="column"
      align="center"
      justify="center"
      gap="10"
      wrap="wrap"
      tabIndex={0}
    >
      {IconComponent && <IconComponent size={20} color="#aaa" />}

      <StyledInput
        type="text"
        value={debouncedValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        style={style}
      />
    </StyledFlex>
  );
};

export default Input;