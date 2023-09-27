const Task = ({taskName,state}) =>{

    return(
        <>
            <input type="checkbox" value={taskName}></input>
            <label for={taskName}>{taskName}</label>
        </>

    )
}

export default Task;