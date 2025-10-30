import type { TaskStatus, Task } from "./TaskList";
import { useState } from "react";
// types/index.ts
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

function TaskItem({ task, onStatusChange }: TaskItemProps) {
  const [currentStatus, setCurrentStatus] = useState(task.status);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStatus(e.target.value);
    onStatusChange(task.id, e.target.value)
  }
  return (
    <div className="mb-5">
      <div>
        <div>{task.title}</div>
        <div>{task.description}</div>
        <div>Status: {task.status}</div>
        <div>Priority: {task.priority}</div>
        <div>Due Date: {task.dueDate}</div>
      </div>

      <select value={currentStatus} onChange={handleChange}> 
        <option value='pending'>Pending</option>
        <option value="in-progress">In Progress</option>
        <option value='completed'>Completed</option>
      </select>
    </div>
  );
}

export default TaskItem;
