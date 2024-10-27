import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Add Todo"
        className="w-full p-2 border border-gray-300 rounded-sm"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 active:bg-blue-700"
        onClick={() => {
          value && addTodo(value);
          setValue("");
        }}
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
