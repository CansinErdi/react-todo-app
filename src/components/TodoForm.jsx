import { useState } from "react";

function TodoForm({ addTodo }) {
    const [input, setInput] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput('');
        }
    }

    return (
        <div className="mt-4 flex justify-between">
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    name="todo"
                    placeholder="Neues Todo erstellen"
                    id="todo-item"
                    className="mr-3 w-full border p-2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-[#0093E9] px-4 py-2 font-semibold text-white">
                    speichern
                </button>
            </form>
        </div>
    );
}

export default TodoForm;