/* eslint-disable react/prop-types */
const Task = ({ taskName, state,description, onTaskFinished }) => {
    const handleTaskClick = () => {
      onTaskFinished();
      
    };
  
    const taskStyle = {
      textDecoration: state ? 'line-through' : 'none',
    };
  
    return (
      <>
        <input
          type="checkbox"
          value={taskName}
          onClick={handleTaskClick}
          disabled={state}
        />
        <label htmlFor={taskName} style={taskStyle}>
          {taskName}
        </label>
        <p>{description}</p>
      </>
    );
  };
  

export default Task;