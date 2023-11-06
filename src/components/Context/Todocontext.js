import { createContext, useContext } from "react";

// Create a context to manage the todo list state and actions
export const TodoContext = createContext({
    todos: [], // Initialize with an empty array
    addTodo: (todo) => { }, // Default addTodo function (will be overridden)
    updateTodo: (id, todo) => { }, // Default updateTodo function (will be overridden)
    deleteTodo: (id) => { }, // Default deleteTodo function (will be overridden)
    toggleComplete: (id) => { }, // Default toggleComplete function (will be overridden)
});

// Custom hook to access the TodoContext
export const useTodo = () => {
    return useContext(TodoContext);
}

// Export the TodoContext.Provider as TodoProvider
export const TodoProvider = TodoContext.Provider;
