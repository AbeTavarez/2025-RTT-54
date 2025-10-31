// types/index.ts
import type { TaskStatus } from "./TaskList";
import { useState } from "react";

export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => void;
}

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [filters, setFilters] = useState({
    status: undefined,
    priority: undefined,
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = event.target;
    setFilters(prev => ({...prev, [name]: value}));

    const newFilter = {
      ...filters,
      [name]: value
    }

    onFilterChange(newFilter);
  }

  return (
    <div className="my-10 border p-5 rounded flex gap-10">
      <select name="status" onChange={handleChange} className="bg-zinc-900">
        <option value=''>All</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select name="priority" onChange={handleChange} className="bg-zinc-900">
        <option value=''>All</option>
        <option value='low'>low</option>
        <option value='medium'>medium</option>
        <option value='high'>high</option>
      </select>
    </div>
  );
}

export default TaskFilter;
