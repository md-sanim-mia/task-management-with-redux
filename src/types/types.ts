export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: Boolean;
  priority: "high" | "medium" | "low";
}
