//here we are importing all the action's type const from the actionTypes file
import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS, DELETE_TASK} from './actionTypes';

//this action creator function named addTask, takes (description) as a prop
export const addTask = (name, description) => ({
  //here we have the type of action as ADDTASK
  type: ADD_TASK,
  //the payload means the data infos that come with the action
  payload: {
    name,
    description,
  },
});

//the next action creator function is the EDitTask and it takes both id and description as an argument
export const editTask = (id, description) => ({
  //its type is EDIT_TASK
  type: EDIT_TASK,
  //it defines the payload of the action and contains both id and description
  payload: {
    id,
    description,
  },
});


//action creator for switching between states task, it takes id as a parameter with the TOGGLE_TASK as a type and define a payload of the action containing the id's task
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  },
});

//action creator for filtering a task, it takes filterType as a parameter with the Filter_TASK as a type and define a payload of the action containing the filterType's task
export const filterTasks = (filterType) => ({
  type: FILTER_TASKS,
  payload: filterType,
});





//action creator for deleting a task, it takes id as a parameter with the DELETE_TASK as a type and define a payload of the action containing the id's task
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {
      id,
    },
  });
