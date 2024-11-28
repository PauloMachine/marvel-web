import * as MdIcons from "react-icons/md";

export type TInput = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceDelay?: number;
  style?: React.CSSProperties;
  icon?: keyof typeof MdIcons;
};
