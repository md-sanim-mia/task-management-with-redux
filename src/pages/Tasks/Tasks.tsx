import { AddTaskModal } from "@/module/Task/AddTask";
import TaskCard from "@/module/Task/TaskCard";
import { selectTask } from "@/Redux/features/Task/todoSlice";
import { useAppSelector } from "@/Redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen mt-6">
      <div
        className="flex justify-between px-2 mb-3
      "
      >
        <h1>Taks</h1>
        <AddTaskModal></AddTaskModal>
      </div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Tasks;
