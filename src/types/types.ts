export interface ITask {
  id: string;
  title: string;
  description: string;
  deuDate: string;
  isCompleted: Boolean;
  priority: "High" | "Medium" | "Low";
}
