import React, { useState } from 'react';
import './homepage.css';
import { v4 as uuidv4 } from 'uuid';

export default function Tasks() {

    const [taskText, setTaskText] = useState('');
    const [completedTasks, setCompletedTask] = useState([]);
    const [tasks, setTasks] = useState([]);

    const updateTaskText = event => {
        setTaskText(event.target.value);
    }

    const addTask = () => {
        setTasks([...tasks, { taskText, id: uuidv4() }])
    }

    var updateCompletedTaskList = completedTask => () => {
        setCompletedTask([...completedTasks, completedTask]);
        setTasks(tasks.filter(task => task.id !== completedTask.id))

    }

    var deleteTask = removeTask => () => {
        setCompletedTask(completedTasks.filter(task => task.id !== removeTask.id))
    }

    return (
        <>
            <h3>To Do List</h3>
            <div className='form'>
                <input value={taskText} onChange={updateTaskText} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='task-list'>
                {
                    tasks.map(task => {
                        const { taskText, id } = task;
                        return <div
                            key={id}
                            onClick={updateCompletedTaskList(task)}>
                            {taskText}
                        </div>
                    })
                }
            </div>
            <div className='completed-list'>
                {completedTasks.map(task => {
                    const { id, taskText } = task;
                    return (
                        <div key={id}>
                            {taskText}{" "}              
                        <span className = 'delete-task' onClick={deleteTask(task)}>x</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
