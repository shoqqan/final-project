import { FilterButton } from "./filter-button.tsx";
import { TaskStatus } from "../app/App.tsx";
import clsx from "clsx";
import { createPortal } from "react-dom";

interface HeaderProps {
  filter: TaskStatus;
  setFilter: (filter: TaskStatus) => void;
}

export const Header = ({ filter, setFilter }: HeaderProps) => {
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
          <FilterButton
            text={"To Do"}
            className={clsx(
              "w-[87px] h-[40px] bg-[#E4E5E7] rounded-full",
              filter === TaskStatus.TODO &&
                "bg-purple-500 text-white text-bold",
            )}
            onClick={() => {
              setFilter(TaskStatus.TODO);
            }}
          />
          <FilterButton
            text={"Done"}
            className={clsx(
              "w-[87px] h-[40px] bg-[#F0F0F0] rounded-full",
              filter === TaskStatus.DONE &&
                "bg-purple-500  text-white text-bold",
            )}
            onClick={() => {
              setFilter(TaskStatus.DONE);
            }}
          />
          <FilterButton
            text={"Trash"}
            className={clsx(
              "w-[87px] h-[40px] bg-[#F0F0F0] rounded-full",
              filter === TaskStatus.TRASH &&
                "bg-purple-500 text-white text-bold",
            )}
            onClick={() => setFilter(TaskStatus.TRASH)}
          />
        </div>
        <button
          className={
            "w-[52px] h-[52px] bg-[#081E34] flex justify-center items-center rounded-full"
          }
          onClick={() => {}}
        >
          <img src="/plus.svg" alt="Add Todo" />
          {createPortal(<div>modal</div>, document.body)};
        </button>
      </div>
    </header>
  );
};
