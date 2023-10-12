import { useState,useEffect } from 'react';

export function useTasks(){


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


    function createTask(task){
        const newTasks = [...tasks];
        newTasks.push(task);
        setTasks(newTasks);
        const listJson =  JSON.stringify(newTasks);
        localStorage.setItem("tasks", listJson);

    }


    function deleteTask(taskId){
        const updatedTasks = tasks.filter((task,index) => index !== taskId);
        setTasks(updatedTasks);
        const listJson =  JSON.stringify(updatedTasks);
        localStorage.setItem("tasks", listJson);
      
    }


    function updateTask(taskId){
        const updatedTasks = tasks.map((task, index) => {
            if (index === taskId) {
              return { ...task, state: !task.state };
            } else {
              return task;
            }
          });
          setTasks(updatedTasks);
          const listJson =  JSON.stringify(updatedTasks);
          localStorage.setItem("tasks", listJson);

    }




    useEffect(()=>{
        const listaJSON = localStorage.getItem("tasks");
        const miLista = JSON.parse(listaJSON);
        if(miLista){
            setTasks(miLista)
        }

        

    },[])


    return [
        tasks,
        createTask,
        deleteTask,
        updateTask,
    ];
    

}
