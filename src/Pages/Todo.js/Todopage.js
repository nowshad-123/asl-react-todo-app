import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import './Todopage.css';
import { TodoProvider } from './../../components/Context/Todocontext';

const Todopage = () => {
    // State to manage the input field for adding new tasks
    const [todo, setTodo] = useState("");

    // State to manage the list of todos
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")))

    // Function to add a new task
    const addTodo = (todo) => {
        setTodos((prev) => [...prev, { id: Date.now(), task: todo, completed: false }]);
        setTodo(''); // Clear the input field after adding the todo.
    };

    // Function to update a task
    const updateTodo = (id, updatedTodo) => {
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo))
        );
    };

    // Function to toggle task completion status
    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
        );
    };

    // Function to delete a task
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
    };

    // Load todos from local storage when the component mounts
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    // Save todos to local storage whenever the todos state changes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className='h-screen bg-sky-800 dark:bg-black flex flex-col'>
                <h1 className='font-sans text-5xl m-5 text-center dark:text-white'>Todo List</h1>
                <div className='mx-auto'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addTodo(todo);
                    }}>
                        <input
                            type='text'
                            className='w-96 p-2 bg-gray-200 dark:bg-gray-700 dark:text-white border-l-4 border-l-sky-500 outline-none rounded-xl'
                            placeholder='Add a new task'
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                        <button type='submit' className='text-white w-14 h-10 bg-sky-500 rounded-lg ml-5'>
                            Add
                        </button>
                    </form>
                </div>
                {/* Display the list of todos using the List component */}
                <div className='relative'>
                    {todos.map((todo) => {
                        return <List todo={todo} className='wave-animation' />
                    })}
                </div>
            </div>
        </TodoProvider>
    );
};

export default Todopage;
