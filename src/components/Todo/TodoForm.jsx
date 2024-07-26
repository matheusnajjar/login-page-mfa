import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;

    addTodo(value, category);

    setValue('');
    setCategory('');
  };

  return (
    <div className="todo-form">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-select"
          type="text"
          placeholder="Insert your task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          className="input-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
        <button className="filter-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
