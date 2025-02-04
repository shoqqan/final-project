import "./App.css";
import { Header } from "../components/header.tsx";
import { Todolist } from "../components/todolist.tsx";
import { Footer } from "../components/footer.tsx";
import { useEffect, useState } from "react";

export enum TaskStatus {
  TODO = "todo",
  DONE = "done",
  TRASH = "trash",
}

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Buy a milk",
      status: TaskStatus.TODO,
    },
    { id: "2", title: "Learn React", status: TaskStatus.TODO },
    { id: "3", title: "Learn TypeScript", status: TaskStatus.DONE },
    { id: "4", title: "Learn Next.js", status: TaskStatus.DONE },
    { id: "5", title: "Learn TailwindCSS", status: TaskStatus.TRASH },
  ]);
  const [filter, setFilter] = useState<TaskStatus>(TaskStatus.TODO);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  useEffect(() => {
    console.log(tasks);
    switch (filter) {
      case TaskStatus.TODO: {
        const todoTasks = tasks.filter(
          (task) => task.status === TaskStatus.TODO,
        );
        setFilteredTasks(todoTasks);
        break;
      }
      case TaskStatus.DONE: {
        const doneTasks = tasks.filter(
          (task) => task.status === TaskStatus.DONE,
        );
        setFilteredTasks(doneTasks);
        break;
      }
      case TaskStatus.TRASH: {
        const trashTasks = tasks.filter(
          (task) => task.status === TaskStatus.TRASH,
        );
        setFilteredTasks(trashTasks);
        break;
      }
    }
  }, [filter, tasks]);

  return (
    <div className={"w-screen p-10 bg-white flex flex-col gap-y-10"}>
      <Header filter={filter} setFilter={setFilter} />
      <Todolist
        tasks={tasks}
        filteredTasks={filteredTasks}
        setTasks={setTasks}
      />
      <Footer />
    </div>
  );
}

export default App;
