interface FilterButtonProps {
  text: string;
}

export const FilterButton = (props: FilterButtonProps) => {
  return (
    <button className={"w-[87px] h-[40px] bg-[#F0F0F0] rounded-full"}>
      {props.text}
    </button>
  );
};
