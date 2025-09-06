import type { Task } from "../types/Task";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <li className="task-item">
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => onToggle(task.id)}
      >
        {task.title}
      </span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        ❌
      </button>
    </li>
  );
}

export default TaskItem;
