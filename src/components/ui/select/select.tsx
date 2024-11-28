import { StyledSelect, StyledLabel, Wrapper } from "./select.styles";
import { TSelect } from "./select.types";

const Select = ({ options, value, onChange, label, disabled }: TSelect) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <Wrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect value={value} onChange={handleChange} disabled={disabled}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
