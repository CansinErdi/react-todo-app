function TodoItem({todo}) {
    return (
        <>
            <input
              type="checkbox"
              name="done"
              id=""
              className="size-5 cursor-pointer rounded border-slate-300 border-b-gray-500 transition-all checked:border-blue-600 checked:bg-blue-400 hover:shadow-md" />
            <span className="mx-4"
              >{todo.text}</span
            >
            <div className="ml-auto flex space-x-2">
              <button className="bg-[#29b83a] px-4 py-2 text-white">
                bearbeiten
              </button>
              <button className="bg-[#C850C0] px-4 py-2 text-white">löschen</button>
            </div>

              </>

    )
}

export default TodoItem;