import type { Task } from "../../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="h-screen my-5">
      <h2 className="text-3xl my-5">Task List</h2>

      <div className="flex flex-col gap-5">
        {tasks.map((task) => (
          <TaskItem task={task} key={task.id}/>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
