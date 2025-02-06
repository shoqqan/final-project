import "./App.css";
import { Header } from "../components/header.tsx";
import { Todolist } from "../components/todolist.tsx";
import { Footer } from "../components/footer.tsx";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks.ts";
import { Task, TaskStatus } from "../store/slices/tasks-slice.ts";

function App() {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const filter = useAppSelector((state) => state.tasks.filter);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  useEffect(() => {
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
      <Header />
      <Todolist filteredTasks={filteredTasks} />
      <Footer />
    </div>
  );
}

export default App;
