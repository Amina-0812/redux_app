//first we import the combineReducers from Redux so we combine multiple reducers into a single reducer
import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

//we define here rootReducer using the combineReducers function 
const rootReducer = combineReducers({ //so it will combines the taskReducer into a single reducer under 'tasks" key
  tasks: taskReducer, //the taskReducer will handle actions related to tasks and its state is accessed using 'tasks' key
});

export default rootReducer;


//in conclusion this component use the Redux's combineReducers to combine multiple reducers into a single one, so it combines the taskReducer that manage the tasks actions and state under a keyn "tasks"
//this combined reducer serves as the root reducer for the Redux store, providing a centralized way to manage the application's state related to tasks