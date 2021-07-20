import React, { useEffect, useReducer, useState } from 'react';
import './homepage.css';
import { v4 as uuidv4 } from 'uuid';

const TASK_MAP_KEY = "TASK_MAP_KEY";

const TYPES = {
    Add_TASK: "Add_TASK",
    DELETE_TASK: "DELETE_TASK",
    COMPLETED_TASK: "COMPLETED_TASK"
}
const initialState = {
    tasks: [],
    completedTasks: []
};

const storeTasks = (taskMap) => {
    localStorage.setItem(TASK_MAP_KEY, JSON.stringify(taskMap));
}

const initialValues = () => {
    const initialValues = JSON.parse(localStorage.getItem(TASK_MAP_KEY));
    return (initialValues ? initialValues : initialState);
}

const taskReducer = (state, action) => {

    switch (action.type) {
        case TYPES.Add_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            };
        case TYPES.DELETE_TASK:
            console.log("completed task ", action)
            return {
                ...state,
                completedTasks: state.completedTasks.filter(task => task.id !== action.task.id)
            }
        case TYPES.COMPLETED_TASK:
            const { completedTask } = action;
            return {
                ...state,
                completedTasks: [...state.completedTasks, completedTask],
                tasks: state.tasks.filter(task => task.id !== completedTask.id)
            }
        default:
            return state;
    }
}

export default function Tasks() {

    const [taskText, setTaskText] = useState('');
    const fetchInitialValues = initialValues();

    const [state, dispatch] = useReducer(taskReducer, fetchInitialValues);
    const { tasks, completedTasks } = state;

    const updateTaskText = event => {
        setTaskText(event.target.value);
    }

    const addTask = () => {
        dispatch({ type: TYPES.Add_TASK, task: { taskText, id: uuidv4() } });
    }

    var updateCompletedTaskList = completedTask => () => {
        dispatch({ type: TYPES.COMPLETED_TASK, completedTask })
    }

    var deleteTask = removeTask => () => {
        dispatch({ type: TYPES.DELETE_TASK, task: removeTask })
    }

    useEffect(() => {
        storeTasks({ tasks, completedTasks })
    });

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
                            <span className='delete-task' onClick={deleteTask(task)}>x</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
