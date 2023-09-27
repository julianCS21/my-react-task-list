import Task from "./Task"

const TaskList = () =>{

    const tasks = [
        {
            name:"Buy a new laptop",
            state:false

        },
        {
            name:"Complete a previous task",
            state:false

        },
        {
            name:"Create a video of youtube",
            state:false

        }
    ]

    return (
        <div>
            {tasks.map((item) => (
                <div>
                    <Task taskName={item.name} state={item.state}></Task>
                </div>
            )
            )}

        </div>
    )
}


export default TaskList;