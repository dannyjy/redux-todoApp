import { useState } from "react";
import { useDispatch } from "react-redux";

function TodoInput() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  
  function addTodo(text){
    dispatch({ type: "ADD_TODO", payload: { text }})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text)
      setText("");
    }
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
