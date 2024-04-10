import { createStore } from 'redux'; //it imports the creatStore function from redux
import rootReducer from '../reducers';

//the main reason from this code is to create a Redux store by passing the rootrecuder to the createstore functionn
const store = createStore(rootReducer);

export default store;

//the purpose of this component is to create a redux store for our app, this store combines all reducers into a single root reducer and we export it so the other parts of the app can use it to manage the app's state in center manner allowing components to access and update the state as needed using redux's state management capabilities
//we can also say that it's the central hub state management in the redux architecture of the app