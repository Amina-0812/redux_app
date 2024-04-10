import React from 'react';
//importing the useSelectore from redux
import { useSelector } from 'react-redux';
import Task from './Task';


//here we are defining the function named ListTask
const ListTask = () => {
  //we are using the useSelector hook to access to the tasks array from the redux
  const tasks = useSelector((state) => state.tasks.tasks); 
  //this part state.tasks.tasks is the one responsible to access to the tasks array from redux store's state
  //the state refers to the global state which is managed by Redux
  //tasks reprents a section of the state where the tasks are matching with the part of state containing task-related data
  //the last tasks id the specific property that holds the array of tasks objects
  //--so, when state.tasks.tasks is used, it's fetching the array of tasks from the Redux store's state so it can be used in component to return or update tasks or any other one related operations




  //here we are returning the list of tasks by mapping over the array
  return (
    <div className="container">
      {/*we are here using the map functiuon to iterate over the tasks array so we create Task component for each task*/}
      {tasks.map((task) => (
        //each task component is going to receive a unique key based on its ID  and has the task data as a prop
        <Task key={task.id} task={task} className="task" />
      ))}
    </div>
  );
};

export default ListTask;