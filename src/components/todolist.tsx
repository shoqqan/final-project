import { Task, TaskStatus } from "../app/App.tsx";
import { ChangeEvent } from "react";

interface TodolistProps {
  filteredTasks: Task[];
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export const Todolist = ({ filteredTasks, setTasks, tasks }: TodolistProps) => {
  const onChangeTaskStatus = (
    event: ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    if (event.target.checked) {
      const newTasks = tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: TaskStatus.DONE,
            }
          : task,
      );
      setTasks(newTasks);
    } else {
      const newTasks = tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: TaskStatus.TODO,
            }
          : task,
      );
      setTasks(newTasks);
    }
    return !event.target.checked;
  };
  return (
    <div className={"w-full flex flex-col gap-y-6"}>
      <h1 className={"font-bold text-3xl"}>To Do</h1>
      <div className={"h-[2px] bg-[#C2C2C2]"} />
      <ul className={"flex flex-col gap-y-2"}>
        {filteredTasks.map((task) => {
          return (
            <li className={"w-full flex gap-x-2"} key={task.id}>
              <img src={"/menu.svg"} alt={"menu"} width={5} />
              <input
                type="checkbox"
                checked={task.status === TaskStatus.DONE}
                onChange={(event) => onChangeTaskStatus(event, task.id)}
              />
              <p>{task.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
