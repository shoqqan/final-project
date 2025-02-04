import { useState } from "react";

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

export const Todolist = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Task 1",
      isDone: false,
    },
    {
      id: "2",
      title: "Task 2",
      isDone: false,
    },
    {
      id: "3",
      title: "Task 3",
      isDone: false,
    },

    {
      id: "1",
      title: "Task 1",
      isDone: false,
    },
    {
      id: "2",
      title: "Task 2",
      isDone: false,
    },
    {
      id: "3",
      title: "Task 3",
      isDone: false,
    },

    {
      id: "1",
      title: "Task 1",
      isDone: false,
    },
    {
      id: "2",
      title: "Task 2",
      isDone: false,
    },
    {
      id: "3",
      title: "Task 3",
      isDone: false,
    },

    {
      id: "1",
      title: "Task 1",
      isDone: false,
    },
    {
      id: "2",
      title: "Task 2",
      isDone: false,
    },
    {
      id: "3",
      title: "Task 3",
      isDone: false,
    },

    {
      id: "1",
      title: "Task 1",
      isDone: false,
    },
    {
      id: "2",
      title: "Task 2",
      isDone: false,
    },
    {
      id: "3",
      title: "Task 3",
      isDone: false,
    },

    {
      id: "1",
      title: "Task 1",
      isDone: false,
    },
    {
      id: "2",
      title: "Task 2",
      isDone: false,
    },
    {
      id: "3",
      title: "Task 3",
      isDone: false,
    },

    {
      id: "1",
      title: "Task 1",
      isDone: false,
    },
    {
      id: "2",
      title: "Task 2",
      isDone: false,
    },
    {
      id: "3",
      title: "Task 3",
      isDone: false,
    },
  ]);
  return (
    <div className={"w-full flex flex-col gap-y-6"}>
      <h1 className={"font-bold text-3xl"}>To Do</h1>
      <div className={"h-[2px] bg-[#C2C2C2]"} />
      <ul className={"flex flex-col gap-y-2"}>
        {tasks.map((task) => {
          return (
            <li className={"w-full flex gap-x-2"}>
              <img src={"/menu.svg"} alt={"menu"} width={5} />
              <input type="checkbox" />
              <p>{task.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
