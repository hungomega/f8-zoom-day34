const root = ReactDOM.createRoot(document.querySelector("#root"));

function TodoList() {
    const [todos, setTodos] = React.useState([]);
    const [input, setInput] = React.useState("");
    function handleAddTodo() {
        const newTodo = {
            title: input,
        };
        setTodos([...todos, newTodo]);
        setInput("");
    }
    function handleDeleteTodo(todo) {
        const newTodos = todos.filter((item) => {
            return item.title !== todo.title;
        });
        setTodos(newTodos);
    }
    return (
        <>
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAddTodo}>Thêm</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.title}>
                        {todo.title}
                        <button onClick={() => handleDeleteTodo(todo)}>
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

root.render(<TodoList />);
