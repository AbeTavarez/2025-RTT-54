import type { TaskStatus, Task } from "./TaskList";
import { useState } from "react";
// types/index.ts
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

type Priority = "low" | "medium" | "high";

function TaskItem({ task, onStatusChange }: TaskItemProps) {
  const [currentStatus, setCurrentStatus] = useState(task.status);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value as TaskStatus);
    onStatusChange(task.id, e.target.value as TaskStatus);
  };

  const statusStyles: { [key in TaskStatus]: string } = {
    pending: "text-yellow-500",
    "in-progress": "text-blue-500",
    completed: "text-green-500",
  };

  const priorityStyles: { [key in Priority]: string } = {
    low: "text-yellow-500",
    medium: "text-blue-500",
    high: "text-red-500",
  };
  return (
    <div className="mb-5  grid grid-cols-2">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold">{task.title}</div>
        <div>{task.description}</div>
        <div>
          Status:{" "}
          <span className={statusStyles[task.status]}>{task.status}</span>
        </div>
        <div>
          Priority:{" "}
          <span className={priorityStyles[task.priority]}>{task.priority}</span>
        </div>
        <div>Due Date: {task.dueDate}</div>
      </div>

      <select
        value={currentStatus}
        onChange={handleChange}
        className={`ml-auto bg-zinc-900 h-10 ${statusStyles[currentStatus]}`}
      >
        <option value="pending">
          <span>Pending</span>
        </option>
        <option value="in-progress">
          <span>In Progress</span>
        </option>
        <option value="completed">
          <span>Completed</span>
        </option>
      </select>
    </div>
  );
}

export default TaskItem;
