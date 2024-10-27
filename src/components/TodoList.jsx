import React from "react";
import SingleTodo from "./SingleTodo";

const TodoList = ({ todos, toggleCompleted, deleteTodo, editTodo }) => {
  return (
    <section className="w-full mt-5">
      {todos.length > 0 ? (
        <ul className="flex flex-col gap-4 bg-slate-100">
          {todos.map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm text-center">
          No todos! Add one from the top.
        </p>
      )}
    </section>
  );
};

export default TodoList;
