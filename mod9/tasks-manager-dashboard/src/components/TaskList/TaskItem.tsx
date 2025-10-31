import type { Task } from "../../types";


interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <div className="flex flex-col gap-2 text-xl border p-2 rounded-lg">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
    </div>
  );
}

export default TaskItem;
