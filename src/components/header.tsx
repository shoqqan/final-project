import { FilterButton } from "./filter-button.tsx";

export const Header = () => {
  return (
    <header className={"w-full flex flex-col gap-y-30"}>
      <div className={"flex flex-col gap-y-2"}>
        <h1 className={"font-bold text-3xl"}>Simple Todolist</h1>
        <p className={"text-base"}>
          Today is awesome day. The weather is awesome, you are awesome too!
        </p>
      </div>
      <div className={"flex justify-between"}>
        <div className={"flex items-center gap-x-2"}>
          <FilterButton text={"To Do"} />
          <FilterButton text={"Done"} />
          <FilterButton text={"Trash"} />
        </div>
        <button
          className={
            "w-[52px] h-[52px] bg-[#081E34] flex justify-center items-center rounded-full"
          }
        >
          <img src="/plus.svg" alt="Add Todo" />
        </button>
      </div>
    </header>
  );
};
