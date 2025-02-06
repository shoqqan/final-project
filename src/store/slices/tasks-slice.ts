import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

interface TasksState {
  tasks: Task[];
  filter: TaskStatus;
}
export enum TaskStatus {
  TODO = "todo",
  DONE = "done",
  TRASH = "trash",
}

const initialState: TasksState = {
  tasks: [
    {
      id: "1",
      title: "Buy a milk",
      status: TaskStatus.TODO,
    },
    { id: "2", title: "Learn React", status: TaskStatus.TODO },
    { id: "3", title: "Learn TypeScript", status: TaskStatus.DONE },
    { id: "4", title: "Learn Next.js", status: TaskStatus.DONE },
    { id: "5", title: "Learn TailwindCSS", status: TaskStatus.TRASH },
  ],
  filter: TaskStatus.TODO,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: new Date().getTime().toString(),
        status: TaskStatus.TODO,
        title: action.payload,
      };
      state.tasks.push(newTask);
    },
    changeTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.status =
          task.status === TaskStatus.TODO ? TaskStatus.DONE : TaskStatus.TODO;
      }
    },
    changeFilter: (state, action: PayloadAction<TaskStatus>) => {
      state.filter = action.payload;
    },
  },
});

export const { changeTaskStatus, changeFilter, addNewTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
