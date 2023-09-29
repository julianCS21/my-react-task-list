import { useEffect, useState } from "react"
import Task from "./Task"

const TaskList = () =>{


    const [tasks,setTasks] = useState([
        {
            name:"Buy a new laptop",
            state:false,
            description : "Is a first task"

        },
        {
            name:"Complete a previous task",
            state:false,
            description : "Is a second task"


        },
        {
            name:"Create a video of youtube",
            state:false,
            description : "Is a  task"

        }

    ])


    const taskFinished = (index) =>{
        const newTasks = [...tasks]
        newTasks[index].state = true;
        setTasks(newTasks);
        const listJson =  JSON.stringify(newTasks);
        localStorage.setItem("tasks", listJson);

        

    }

    useEffect(()=>{
        const listaJSON = localStorage.getItem("tasks");
        const miLista = JSON.parse(listaJSON);
        if(miLista){
            setTasks(miLista)
        }

        

    },[tasks])


    return (
        <div>
            {tasks.map((item,index) => (
                <div key={index}>
                    <Task taskName={item.name} state={item.state}  description={item.description} onTaskFinished={() =>{taskFinished(index)}}></Task>
                </div>
            )
            )}

        </div>
    )
}


export default TaskList;