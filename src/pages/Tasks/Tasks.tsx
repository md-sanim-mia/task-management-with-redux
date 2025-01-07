import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/Task/AddTask";
import TaskCard from "@/module/Task/TaskCard";
import {
  filterTask,
  selectFilter,
  selectTask,
} from "@/Redux/features/Task/todoSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);

  const dispatch = useAppDispatch();
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen mt-6">
      <div
        className="flex justify-end px-2 mb-3 items-center gap-5
      "
      >
        <h1 className="mr-auto">Taks</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(filterTask("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(filterTask("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(filterTask("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(filterTask("high"))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      {tasks?.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Tasks;
