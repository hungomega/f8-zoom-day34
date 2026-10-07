import { useState } from "react";
import styles from "./Todo.module.scss";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    function handleAddTodo() {
        const newTodo = {
            title: input,
        };

        setTodos([...todos, newTodo]);
        setInput("");
    }

    function handleDeleteTodo(todo) {
        const newTodos = todos.filter(
            (item) => item.title !== todo.title
        );

        setTodos(newTodos);
    }

    return (
        <div className={styles.todo}>
            <h1 className={styles.title}>Todo List</h1>

            <div className={styles.form}>
                <input
                    className={styles.input}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Nhập công việc..."
                />

                <button
                    className={styles.addButton}
                    onClick={handleAddTodo}
                >
                    Thêm
                </button>
            </div>

            <ul className={styles.list}>
                {todos.map((todo) => (
                    <li className={styles.item} key={todo.title}>
                        <span>{todo.title}</span>

                        <button
                            className={styles.deleteButton}
                            onClick={() => handleDeleteTodo(todo)}
                        >
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;