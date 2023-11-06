import React, { useState } from 'react';
import { BiSolidEdit, BiSave } from 'react-icons/bi'
import { MdOutlineDelete } from 'react-icons/md'
import './list.css';
import { useTodo } from './Context/Todocontext';

const List = ({ todo }) => {
    // State for edit mode, checkbox state, and task update
    const [isEdit, setIsEdit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [update, setUpdate] = useState('');
    const { updateTodo, deleteTodo, toggleComplete } = useTodo(); // Access context functions

    // Handle checkbox state change
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // Handle saving the updated task
    const handleSave = () => {
        if (isEdit) {
            if (update.trim() === '') {
                setIsEdit(false);
            } else {
                setIsEdit(false);
                // Update the task using context function
                updateTodo(todo.id, { ...todo, task: update });
                setUpdate('');
            }
        } else {
            setIsEdit(true);
        }
    }

    // Handle task deletion
    const handleDelete = () => {
        alert("Confirm to delete");
        // Delete the task using context function
        deleteTodo(todo.id);
    }

    // Handle checkbox click
    const handleChecked = () => {
        // Toggle task completion status using context function
        toggleComplete(todo.id);
    }

    return (
        <div className='list_container mx-auto dark:bg-gray-500 dark:bg-opacity-20 rounded-xl p-2 border-2 dark:border-gray-600 border-gray-300 mt-3'>
            <div className='flex justify-between'>
                <div>
                    <input
                        type="checkbox"
                        id={todo.id}
                        className='form-checkbox h-5 w-5 m-2'
                        checked={todo.completed}
                        onChange={handleCheckboxChange}
                        disabled={isEdit}
                        onClick={handleChecked}
                        style={{
                            animation: 'animateCheckbox 1s ease forwards'
                        }}
                    />
                    {isEdit ? (
                        <input type="text" className='bg-transparent text-white pl-2 border-2 border-gray-600 rounded-xl relative bottom-1'
                            value={update} onChange={(e) => setUpdate(e.target.value)}
                            placeholder={todo.task} />
                    ) : (
                        <label
                            htmlFor={todo.id}
                            className={`relative bottom-1 dark:text-white ${todo.completed ? 'line-through' : ''}`}
                        >
                            {todo.task}
                        </label>
                    )}
                </div>
                <div className={`flex m-2 ${isChecked ? 'text-gray-500' : ''}`}>
                    {isEdit ? (
                        <BiSave className='text-white mr-2 text-2xl' onClick={handleSave} style={{ animation: 'animateEditIcon 1s ease forwards' }} />
                    ) : (
                        <BiSolidEdit className='text-white mr-2 text-2xl relative' onClick={() => { todo.completed ? setIsEdit(false) : setIsEdit(true) }} style={{
                            animation: 'animateEditIcon 1s ease forwards'
                        }} />
                    )}
                    <MdOutlineDelete className='text-red-500 text-2xl' onClick={handleDelete} style={{
                        animation: 'animateDeleteIcon 1s ease forwards'
                    }} />
                </div>
            </div>
        </div>
    );
}

export default List;
