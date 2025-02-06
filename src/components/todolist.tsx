import { useAppDispatch } from "../store/hooks.ts";
import {
  changeTaskStatus,
  Task,
  TaskStatus,
} from "../store/slices/tasks-slice.ts";

interface TodolistProps {
  filteredTasks: Task[];
}

export const Todolist = ({ filteredTasks }: TodolistProps) => {
  const dispatch = useAppDispatch();
  const onChangeTaskStatus = (id: string) => {
    dispatch(changeTaskStatus(id));
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
                onChange={() => onChangeTaskStatus(task.id)}
              />
              <p>{task.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
