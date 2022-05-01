export interface InputPlaceholderProps {
  color?: string;
}

export interface InputProps extends InputPlaceholderProps {
  placeholderText: string;
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}
