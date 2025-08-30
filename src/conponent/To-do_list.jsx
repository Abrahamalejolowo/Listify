import React, { useState } from "react";
import ReactDOM from "react-dom";
import listity from "../assets/listify-logo.png";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Internal CSS Animations */}
      <style>{`
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-zoom-in { animation: zoomIn 0.6s ease-out forwards; }
        .animate-fade-slide { animation: fadeSlide 0.5s ease-out forwards; }
      `}</style>

      <div className="max-w-md w-full mx-auto p-6 border border-gray-300 rounded-2xl bg-white shadow-xl animate-zoom-in">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-black">Listify</h1>
          <img src={listity} alt="logo" className="w-12 h-12" />
        </div>

        {/* Input + Button */}
        <div className="mt-5 flex gap-2">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <button
            onClick={addTask}
            className="px-4 bg-black text-white rounded-lg hover:bg-red-600 text-lg font-semibold shadow-md transform transition hover:scale-105"
          >
            Add
          </button>
        </div>

        {/* Tasks */}
        <ul className="mt-6 space-y-3">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 animate-fade-slide"
            >
              <span className="text-black text-lg font-medium truncate w-3/4">
                {t}
              </span>
              <button
                onClick={() => removeTask(index)}
                className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;

ReactDOM.render(<TodoApp />, document.getElementById("root"));
