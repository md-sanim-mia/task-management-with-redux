import { RootState } from "@/Redux/store";
import { ITask } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
  filter: "all" | "low" | "medium" | "high";
}
const initialState: InitialState = {
  tasks: [
    {
      id: "1",
      title: "Complete Project Documentation",
      description:
        "Finish writing the documentation for the project by the deadline.",
      dueDate: "2024-10-01",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "2",
      title: "Team Meeting",
      description:
        "Attend the weekly team meeting to discuss project progress.",
      dueDate: "2024-09-30",
      isCompleted: true,
      priority: "medium",
    },
    {
      id: "3",
      title: "Code Review",
      description: "Review pull requests and provide feedback to the team.",
      dueDate: "2024-10-02",
      isCompleted: false,
      priority: "high",
    },
    {
      id: "4",
      title: "Client Feedback",
      description: "Incorporate feedback received from the client meeting.",
      dueDate: "2024-10-05",
      isCompleted: false,
      priority: "medium",
    },
    {
      id: "5",
      title: "Refactor Codebase",
      description: "Improve code structure and optimize performance.",
      dueDate: "2024-10-07",
      isCompleted: false,
      priority: "low",
    },
  ],
  filter: "all",
};

type draftTask = Pick<ITask, "description" | "dueDate" | "priority" | "title">;

const createTask = (taskData: draftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, actions: PayloadAction<ITask>) => {
      const taskData = createTask(actions.payload);
      state.tasks.push(taskData);

      console.log(state.tasks);
    },
    togoleIsCompleted: (state, actions: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === actions.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },

    deleteTask: (state, actions: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== actions.payload);
    },
    filterTask: (
      state,
      actions: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = actions.payload;
    },
  },
});

export const selectTask = (state: RootState) => {
  const filter = state.todos.filter;
  if (filter === "low") {
    return state.todos.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todos.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todos.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todos.tasks;
  }
};
export const selectFilter = (state: RootState) => {
  return state.todos.filter;
};
export const { addTask, togoleIsCompleted, deleteTask, filterTask } =
  taskSlice.actions;

export default taskSlice.reducer;
