import {useState} from "react"
import Task from "./Task"
import { useTasks } from "../hooks/useTasks"

const TaskList = () =>{

    const [tasks,createTask,deleteTask,updatedTask] = useTasks();
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');


    const handleInputNameChange = (event) => {
        setName(event.target.value);
    };



    const handleInputDescriptionChange = (event) => {
        setDescription(event.target.value);
    };



    function create(){
        const newTask = {
            name:name,
            state:false,
            description : description

        }

        createTask(newTask)



    }


    return (
        <div>
            {tasks.map((item,index) => (
                <div key={index}>
                    <Task taskName={item.name} state={item.state}  description={item.description} onTaskFinished={() =>{updatedTask(index)}} onTaskDelete={() =>{deleteTask(index)}}></Task>
                </div>
            )
            )}
            <input placeholder="task name" onChange={handleInputNameChange} value={name}></input>
            <input placeholder="task description" onChange={handleInputDescriptionChange} value={description}></input>
            <button onClick={create}>CREATE TASK</button>


        </div>
    )
}


export default TaskList;