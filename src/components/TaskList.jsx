import { useState } from 'react';
import Task from './Task';
import { useForm } from 'react-hook-form';
import { useTasks } from '../hooks/useTasks';

const TaskList = () => {
  const [tasks, createTask, deleteTask, updatedTask] = useTasks();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      taskname: '',
    },
  });

  const handleInputNameChange = (event) => {
    const value = event.target.value;

    if (value.length < 3) {
      setError('taskname', {
        type: 'manual',
        message: 'The task name must be more than 3 characters long',
      });
    } else {
      clearErrors('taskname');
    }

    setName(value); // Actualiza el estado con el valor ingresado
  };

  const handleInputDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const create = () => {
    const newTask = {
      name: name,
      state: false,
      description: description,
    };

    createTask(newTask);
    setName(''); // Restablece el valor del campo de nombre después de crear la tarea
    setDescription(''); // Restablece el valor del campo de descripción
  };

  return (
    <div>
      {tasks.map((item, index) => (
        <div key={index}>
          <Task
            taskName={item.name}
            state={item.state}
            description={item.description}
            onTaskFinished={() => {
              updatedTask(index);
            }}
            onTaskDelete={() => {
              deleteTask(index);
            }}
          />
        </div>
      ))}
      <br />
      <form onSubmit={handleSubmit(create)}>
        <input
          {...register('taskname')}
          placeholder="task name"
          onChange={handleInputNameChange}
          value={name} // Enlaza el valor del campo al estado "name"
        />
        <br />
        {errors.taskname && <span style={{ color: 'red' }}>{errors.taskname.message}</span>}
        <br />
        <input
          placeholder="task description"
          onChange={handleInputDescriptionChange}
          value={description}
        />
        <br />
        <button>CREATE TASK</button>
      </form>
    </div>
  )
}
  

export default TaskList;
