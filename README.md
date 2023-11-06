# Todo List App

This is a simple Todo List application built with React. It allows you to manage your tasks with the following features:

## File Structure

The project directory is organized as follows:

- `src`: Contains the source code of the application.
  - `Pages`: Contains the main application pages.
    - `Todo.js`: Defines the `Todopage` component, which is the main page of the application.
  - `components`: Houses reusable components used in the application.
    - `List.js`: Represents a single task item in the list.
    - `Context`: Contains files related to the Context API for state management.
      - `Todocontext.js`: Defines the Context API for managing the todo list state.
  - `App.js`: The main entry point of the application.
  - `list.css`: Styles for the `List` component.
  - `Todopage.css`: Styles for the `Todopage` component.
- `public`: Contains static assets and the `index.html` file.
- `README.md`: This documentation file.

Feel free to explore the project's source code and make changes or additions as needed. The project is organized to make it easy to locate and manage the components and styles for your Todo List App.

## Features

### 1. Add New Tasks

You can easily add new tasks to your to-do list. Enter the task description in the input field and click the "Add" button to add it to your list.

### 2. Edit Tasks

Edit your existing tasks whenever needed. Click on the "Edit" button (pencil icon) next to a task, and you can update the task's description.

### 3. Mark Tasks as Completed

Keep track of completed tasks by marking them as done. Click the checkbox next to a task to mark it as completed. Click it again to undo completion.

### 4. Delete Tasks

If you no longer need a task, you can remove it from your list. Click the "Delete" button (trash can icon) next to a task to delete it. An alert will confirm your action.

### 5. Dark Mode Support

The app provides a dark mode for better visibility in low-light environments. You can switch between light and dark modes for a comfortable user experience. this will works according to system theme

## Context API for State Management

This Todo List application uses the Context API in React for efficient state management. The Context API allows the sharing of data between components without the need to pass props manually through each level of the component tree. In this application, it is used to manage the state of the todo list and make it accessible to various components.

### `Todocontext.js`

- `TodoContext`: This context is created using the `createContext` function and provides an initial state for the todo list. It includes an array of tasks with their respective properties: `id`, `todo`, and `completed`.

- `useTodo`: A custom hook is created to allow components to access the `TodoContext`. This hook is used in components that need to interact with the todo list state.

- `TodoProvider`: This component is used to wrap the main `Todopage` component, providing the context to all its child components. It offers access to the state and functions for adding, updating, completing, and deleting tasks.

### `Todopage.js`

In the `Todopage` component, the `TodoProvider` wraps the entire application, allowing it to access the state and actions provided by the context.

````jsx
import { TodoProvider } from './../../components/Context/Todocontext';

const Todopage = () => {
    // ...

    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            {/* ... */}
        </TodoProvider>
    );
};

## Getting Started

To use this application on your local machine, follow these steps:

1. Clone the repository:

   ```shell
   git clone <repository-url>
````
