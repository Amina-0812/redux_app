import React, { useState } from 'react';
//here we are importing dependencies from react and Redux
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

//as a first step we are declaring our function AddTask
const AddTask = () => {
  //we declare state variables with the useState hook to manage the name and description s tasks
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  //we use 'useDispatch' to get acess to the dispatch function from the Redux store
  const dispatch = useDispatch();

  //here's the function to handle the submission's form
  const handleSubmit = (e) => {
    e.preventDefault(); //preventing the default form submission's behavior
    //the next part is to check either task name or description is empty, if it's the case an alert pop up
    if (!name.trim() || !description.trim()) {
      alert('Please enter both task name and description.');
      return;
    }
    //we are here dispatching an action to add a new task with the and description to the Redux store
    dispatch(addTask(name, description));
    //we put the next 2 lines to clear the name and description variables after the task has been successfully added
    setName('');
    setDescription('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
     {/*here's the input field to enter the task name*/}
        <input
          type="text"
          placeholder="Add your today's task"
          value={name}
          onChange={(e) => setName(e.target.value)} //here we are updating the task name state on input change
        />
       {/*this is the input field to enter the task description*/}
        <input
          type="text"
          placeholder="Add a Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} //update the task's description state on input
        />
        {/* this is the submit button to add the task*/}
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
