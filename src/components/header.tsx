import { FilterButton } from "./filter-button.tsx";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import {
  addNewTask,
  changeFilter,
  TaskStatus,
} from "../store/slices/tasks-slice.ts";
import { useState } from "react";

export const Header = () => {
  const filter = useAppSelector((state) => state.tasks.filter);
  const dispatch = useAppDispatch();
  const onChangeFilter = (filter: TaskStatus) => {
    dispatch(changeFilter(filter));
  };
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <header className={"w-full flex flex-col gap-y-30 relative"}>
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
            onClick={() => onChangeFilter(TaskStatus.TODO)}
          />
          <FilterButton
            text={"Done"}
            className={clsx(
              "w-[87px] h-[40px] bg-[#F0F0F0] rounded-full",
              filter === TaskStatus.DONE &&
                "bg-purple-500  text-white text-bold",
            )}
            onClick={() => onChangeFilter(TaskStatus.DONE)}
          />
          <FilterButton
            text={"Trash"}
            className={clsx(
              "w-[87px] h-[40px] bg-[#F0F0F0] rounded-full",
              filter === TaskStatus.TRASH &&
                "bg-purple-500 text-white text-bold",
            )}
            onClick={() => onChangeFilter(TaskStatus.TRASH)}
          />
        </div>
        <button
          className={
            "modal w-[52px] h-[52px] bg-[#081E34] flex justify-center items-center rounded-full"
          }
          onClick={() => {
            setIsDialogOpen(true);
          }}
        >
          <img src="/plus.svg" alt="Add Todo" />
        </button>
        {isDialogOpen &&
          createPortal(
            <div
              className={
                "flex flex-col absolute right-15 bottom-15 p-5 bg-[#E4E6E7] rounded-lg"
              }
            >
              <h1>Add New To Do</h1>
              <textarea className={"bg-white w-[120px]"} />
              <button
                className={"w-10 bg-black text-white"}
                onClick={() => {
                  dispatch(addNewTask("new task"));
                }}
              >
                Add
              </button>
            </div>,
            document.querySelector("header")!,
          )}
      </div>
    </header>
  );
};
