export function TodoReducers(state = { todos: [], completed: 0 }, action ) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), text: action.payload.text, isCompleted: false },
                ]
            };
        case "TOGGLE_TODO":
            return {
              ...state,
              todos: state.todos.map((task) =>

                task.id === action.payload.id
                  ? { ...task, isCompleted: !task.isCompleted }
                  : task,
              ),
            };
        case "REMOVE_TODO":
            return {
                ...state,
                todos: state.todos.filter(task => task.id !== action.payload.id)
            }
        default:
            return state;
    }
}