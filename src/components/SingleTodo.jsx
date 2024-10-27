import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const SingleTodo = ({ todo, toggleCompleted, deleteTodo, editTodo }) => {
  return (
    <li className="flex gap-2 items-center bg-slate-200 hover:bg-slate-300 py-2 px-4 capitalize">
      <input
        type="checkbox"
        id="completed"
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
        className="w-4 h-4 border-gray-300 rounded"
      />
      <p
        className={`${
          todo.completed && "line-through text-gray-500"
        } transition-colors duration-300`}
      >
        {todo.text}
      </p>
      <div className="flex gap-2 items-center ml-auto">
        <button className="text-blue-500" onClick={() => editTodo(todo.id)}>
          <FaEdit />
        </button>
        <button className="text-red-500" onClick={() => deleteTodo(todo.id)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default SingleTodo;
