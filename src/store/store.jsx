import { configureStore } from "@reduxjs/toolkit";
import { TodoReducers } from "./reducers/todo";

const store = configureStore({
    reducer: {
        tasks: TodoReducers
    }
})

export default store;