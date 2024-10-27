import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const getStrorageTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos === null ? [] : todos;
};

function App() {
  const [todos, setTodos] = useState(getStrorageTodos());

  const editTodoContent = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: prompt("Edit Todo", todo.text) }
          : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="App">
      <TodoInput
        addTodo={(text) => {
          setTodos([...todos, { id: Math.random(), text, completed: false }]);
        }}
      />
      <TodoList
        todos={todos}
        toggleCompleted={(id) => {
          setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          );
        }}
        deleteTodo={(id) => {
          let todo = todos.find((todo) => todo.id === id);
          if (todo.completed) {
            setTodos(todos.filter((todo) => todo.id !== id));
          } else {
            alert("Todo not completed yet!");
          }
        }}
        editTodo={(id) => editTodoContent(id)}
      />
    </main>
  );
}

export default App;
