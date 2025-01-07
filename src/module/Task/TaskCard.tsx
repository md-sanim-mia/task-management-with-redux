import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, togoleIsCompleted } from "@/Redux/features/Task/todoSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { ITask } from "@/types/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}
const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  console.log(task);
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div>
          <div
            className="flex gap-2 items-center
    "
          >
            <div
              className={cn("size-3 rounded-full ", {
                "bg-green-500": task.priority === "low",
                "bg-yellow-500": task.priority === "medium",
                "bg-red-500": task.priority === "high",
              })}
            ></div>
            <h1>{task?.title}</h1>
          </div>
          <p>{task?.description}</p>
        </div>

        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task?.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
          <Checkbox
            onClick={() => dispatch(togoleIsCompleted(task?.id))}
          ></Checkbox>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
