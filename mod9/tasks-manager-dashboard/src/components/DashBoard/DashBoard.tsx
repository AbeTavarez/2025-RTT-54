import type { Task } from "../../types";
import TaskList from "../TaskList/TaskList";

interface DashBoardProps {
    tasks: Task[]
}

function DashBoard({tasks}: DashBoardProps) {
  return (
    <div className="h-screen">
      <h2 className="text-3xl my-5">DashBoard</h2>

      {/* STATS  */}    
      <div className="flex gap-10">
        <div>
          <h3>Stats</h3>
          <div>
            <div>Completed Tasks: 10</div>
            <div>Pending Tasks: 5</div>
            <div>In Progress Tasks: 8</div>
          </div>
        </div>

        <div>
          <h3>Recently Created Tasks</h3>
          <div>
            <div>Task 1</div>
            <div>Task 2</div>
            <div>Task 3</div>
          </div>
        </div>
      </div>

        {/* TASKLIST  */}
        <TaskList tasks={tasks}/>
    </div>
  );
}

export default DashBoard;
