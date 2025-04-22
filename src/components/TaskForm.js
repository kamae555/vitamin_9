import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store'; // ✅ 이 줄 추가

function TaskForm() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    dispatch(addTask(task)); // ✅ 이렇게 바꿔야 작동!
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
