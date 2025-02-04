import { ButtonHTMLAttributes } from "react";

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const FilterButton = ({ text, ...attributes }: FilterButtonProps) => {
  return <button {...attributes}>{text}</button>;
};
