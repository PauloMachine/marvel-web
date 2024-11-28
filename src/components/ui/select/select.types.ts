type TOption = {
  value: string;
  label: string;
};

export type TSelect = {
  options: TOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
};
