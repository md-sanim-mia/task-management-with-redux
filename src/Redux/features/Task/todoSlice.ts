import { RootState } from "@/Redux/store";
import { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  tasks: ITask[];
}
const initialState: InitialState = {
  tasks: [
    {
      id: "fsakflsd4",
      title: "initialze fronend",
      description: "create home page",
      deuDate: "2025-1",
      isCompleted: false,
      priority: "High",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, actions) => {
      return state.tasks.push(actions.payload);
    },
  },
});

export const selectTask = (state: RootState) => {
  return state.task.tasks;
};
export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
