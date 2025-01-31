import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, text: "Stephi", completed: false},
        {id: 2, text: "JD", completed: false},
        {id: 3, text: "Test", completed: false}
    ]);

    // function to add a todo
    const addTodo = (todo) => {
        // early return for empty todo
        if (todo.trim() === ''){
            return;
        }
        const newTodo = {
            id: todos.length +1,
            text: todo,
            completed: false
        }
        setTodos([...todos, newTodo]);
        console.log("Todos:", todos);
    }

    // remove function
    // toggle function

    return (
        <div className="container mx-auto p-4">
      <header className="rounded-t-lg bg-white p-4 shadow-md">
        <h3
          className="my-6 bg-gradient-to-r from-[#4158D0] to-[#C850C0] bg-clip-text text-center text-3xl font-bold text-transparent">
          Todo App
        </h3>
        {/* <div className="mt-4 flex justify-between">
          <input
            type="text"
            name="todo"
            placeholder="Neues Todo erstellen"
            id="todo-item"
            className="mr-3 w-full border p-2" />
          <button
            type="submit"
            className="bg-[#0093E9] px-4 py-2 font-semibold text-white">
            speichern
          </button>
        </div> */}
        <TodoForm addTodo={addTodo} todos={todos}/>
      </header>
      <main className="bg-white p-4">
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className="flex items-center justify-start border-t border-gray-300 py-2">
                    <TodoItem todo={todo}/>
                </li>
            ))}
        </ul>
      </main>
      <footer>
        <p
          className="rounded-b-lg bg-white p-4 text-center text-sm text-gray-700 shadow-md">
          © 2024 Todo App -
          <a href="http://www.techstarter.de/" target="_blank">Techstarter</a>
        </p>
      </footer>
    </div>
    )
}

export default TodoList;