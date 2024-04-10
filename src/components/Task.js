import React, { useState } from 'react';
//importing the useDispatch hook from react redux to dispatch actions to redux store
import { useDispatch } from 'react-redux';
//importing action creator functions
import { editTask, toggleTask, deleteTask } from '../actions/taskActions';

//as a first step we are declaring our Task function that it takes task as a prop
const Task = ({ task }) => {
  //l'initialisation of the state consts with the useState hook to manage their states
  const [isEditing, setIsEditing] = useState(false); // false is the initial state value for the isEditing state which meas that the task is not being edited
  const [editedName, setEditedName] = useState(task.name); //here we have the task.name as the initial state value for the editedName state var, so the initial state to the name of the task can be edited and updated independemment from the original task
  const [editedDescription, setEditedDescription] = useState(task.description); //the initial value here id task.description, which means that this initializes the editedDescription state with the description of the task allowing it to be edit and updated
  const dispatch = useDispatch(); //the useDispatch hook help us acess to the dispatch function from the Redux store so this allows us to dispatch actions to update the redux store

  //this function is made to toggle the editing state of the task
  const handleToggleEdit = () => {
    setIsEditing(!isEditing); //the function updates the isEditing state to its opposite value meaning it allows to switch between editing and viewing modes by updating the isediting state accordingly
  };

 //this function handle changes to the edited name of the task 
  const handleEditNameChange = (e) => {
    setEditedName(e.target.value); //it updates the editedName state with the value entered in the input field for the task name (aka: responsible for updating the editName state whenever there's a change in the input field for the task name)
  };

//this one do the same job as the previous one but this time for the description field
  const handleEditDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

 //this function is made to save the edited task details 
  const handleSaveEdit = () => {
    if (!editedName.trim() || !editedDescription.trim()) return; //first it checks if both the edited name and description are not empty, and if they are not
    dispatch(editTask(task.id, editedName, editedDescription)); // it dispatch an action to edit task with the new updated details
    setIsEditing(false); //finally it sets the editing state to false which means that the editing is completed
  };

  //the next function is the one responsible to handle the suppression of the task
  const handleDelete = () => {
    dispatch(deleteTask(task.id)); //it dispatch an action to remove the task with the specefic ID from the redux store
  };


  //next we are returning the task component if the editing is true otherwise it display the task name and description with a check mark if the task is done and a button to edit and delete the task
  return (
    <div className="task">
      {isEditing ? (
        <div>
     {/*the inputs to edit the task name and description */}
          <input
            type="text"
            value={editedName}
            onChange={handleEditNameChange}
            className="edit-input"
          />
          <input
            type="text"
            value={editedDescription}
            onChange={handleEditDescriptionChange}
            className="edit-input"
          />
          <button onClick={handleSaveEdit} className="save-button">Save</button>
        </div>
      ) : (
        <div>
      {/* here we are displaying the task name and description sous forme d'un paragraph*/}
          <p>{editedName}</p>
          <p>{editedDescription}</p>
      {/*check mark for marking task as done*/}
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => dispatch(toggleTask(task.id))}
          />
       {/*buttons for editing and deleting task*/}
          <button onClick={handleToggleEdit} className="edit-button">Edit</button>
          <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;

//in conclusion this is the component that manage the display and the interaction for each task and responsible for the actions edit, mark as done, delete tasks made by users