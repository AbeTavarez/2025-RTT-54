import type { TaskStatus, Task } from "./TaskList";

// types/index.ts
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <div className="mb-5">
      <div>{task.title}</div>
      <div>{task.description}</div>
      <div>Status: {task.status}</div>
      <div>Priority: {task.priority}</div>
      <div>Due Date: {task.dueDate}</div>
    </div>
  );
}

export default TaskItem;
