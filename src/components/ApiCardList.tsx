import { useState, useEffect } from "react";

type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export default function TodoList() {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error loading");
                }
                return response.json();
            })
            .then((data) => setTodos(data.slice(0, 10))) 
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h1>Todo List</h1>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error {error}</p>}

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                            {todo.title}
                        </span>
                        <span
                            style={{
                                padding: "5px 10px",
                                borderRadius: "5px",
                                color: "white",
                                fontSize: "12px",
                                fontWeight: "bold",
                                backgroundColor: todo.completed ? "green" : "orange",
                            }}
                        >
                            {todo.completed ? "Completed" : "In process"}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
