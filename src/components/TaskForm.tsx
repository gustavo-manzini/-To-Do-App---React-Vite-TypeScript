import { useState } from "react";

interface Props {
  onAddTask: (title: string) => void;
}

function TaskForm({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Escribe una tarea..."
        className="task-input"
      />
      <button type="submit" className="task-btn">
        ➕
      </button>
    </form>
  );
}

export default TaskForm;
