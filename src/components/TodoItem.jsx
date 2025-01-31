import PropTypes from 'prop-types';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="mr-2"
                />
                <span className={todo.completed ? 'line-through' : ''}>
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-4 text-red-500"
            >
                Delete
            </button>
        </div>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default TodoItem;