import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg bg-white shadow-lg">
      <div className='flex justify-between'>
          <h1 className="text-4xl font-bold text-center text-black">Listify</h1>
          <img src="src/assets/listify-logo.png" alt="" className="w-10 h-10"/>
      </div>
      <div className="mt-5 flex gap-2">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          onClick={addTask}
          className="px-2 bg-black text-white rounded hover:text-red-500 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Add Task
        </button>
      </div>
      <ul className="mt-5 space-y-2">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border border-gray-200 rounded hover:bg-gray-100 "
          >
            <span className="text-black text-2xl font-bold truncate w-3/4">{t}</span>
            <button
              onClick={() => removeTask(index)}
              className=" px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
ReactDOM.render(<TodoApp />, document.getElementById('root'));