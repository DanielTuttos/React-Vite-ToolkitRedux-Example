import { useState } from "react";
import { useGetTodoByIdQuery } from "./store/apis";

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

    const nextTodo = () => {
        setTodoId(todoId + 1);
    }
    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    }

    return (
        <>
            <h1>todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>

            <pre>{JSON.stringify(todo, null, 4)}</pre>
            <button
                onClick={prevTodo}
            >
                Prev Todo
            </button>
            <button
                onClick={nextTodo}
            >
                Next Todo
            </button>
            {/* <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <strong>{todo.completed ? 'DONE' : 'PENDING'} </strong> 
                            {todo.title}
                        </li>
                    ))
                }
            </ul> */}
        </>
    )
}
