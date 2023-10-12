/* eslint-disable react/prop-types */
const Task = ({ taskName, state,description, onTaskFinished, onTaskDelete }) => {
    const handleTaskClick = () => {
      onTaskFinished();
      
    };


    const handleTaskClickDelete = () => {
      onTaskDelete();
      
    };
  
    const taskStyle = {
      textDecoration: state ? 'none' : 'line-through',
    };
  
    return (
      <>
        <input
          type="checkbox"
          value={taskName}
          onClick={handleTaskClick}
        />
        <label htmlFor={taskName} style={taskStyle}>
          {taskName}
        </label>
        <p>{description}</p>
        <button onClick={handleTaskClickDelete}>DELETE</button>
      </>
    );
  };
  

export default Task;