import PropTypes from 'prop-types';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <>
            <input
                type="checkbox"
                name="done"
                id=""
                className="size-5 cursor-pointer rounded border-slate-300 border-b-gray-500 transition-all checked:border-blue-600 checked:bg-blue-400 hover:shadow-md"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span className={`mx-4 ${todo.completed ? 'line-through' : ''}`}>
                {todo.text}
            </span>
            <div className="ml-auto flex space-x-2">
                <button className="bg-[#29b83a] px-4 py-2 text-white">
                    bearbeiten
                </button>
                <button className="bg-[#C850C0] px-4 py-2 text-white" onClick={() => deleteTodo(todo.id)}>
                    löschen
                </button>
            </div>
        </>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;