import { useDispatch } from "react-redux";

function TodoItem({ todo }) {
    const dispatch = useDispatch()
    const onToggle = (id) => dispatch({ type: "TOGGLE_TODO", payload: { id: id } });
    const onDelete = (id) => dispatch({ type: "REMOVE_TODO", payload: { id } });

    return (
        <li className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
            <label className="todo-checkbox">
                <input type="checkbox" checked={todo.isCompleted} onChange={() => onToggle(todo.id)} />
                <span className="checkmark"></span>
            </label>
            <span className="todo-text">{todo.text}</span>
            <button className="delete-btn" onClick={() => onDelete(todo.id)}>✕</button>
        </li>
    );
}

export default TodoItem;
