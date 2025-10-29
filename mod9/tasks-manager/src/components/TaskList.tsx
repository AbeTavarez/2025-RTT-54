import TaskItem from "./TaskItem";

// types/index.ts
export type TaskStatus = "pending" | "in-progress" | "completed";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: "low" | "medium" | "high";
  dueDate: string;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// 1. Map over the tasks and render a TaskListItem for each task
// 2. Pass the onStatusChange and onDelete to the TaskListItem
// 3. Add the select5 and delete button and use the nStatusChange and onDelete to handle the user interactions
// 4. Implement the filter feature

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  return (
    <div>
      <h2 className="text-4xl mb-10">Task List</h2>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
