import { combineReducers } from 'redux';
import ToDoStateReducer from './ToDo/ToDoState';
import UserState from './User/UserState';
import NavigationStateReducer from './Navigation/NavigationState'

const reducers = {
    todoState: ToDoStateReducer,
    //navigationState: NavigationStateReducer
};

const namespacedReducer = combineReducers(
    reducers,
)

export default (state, action) => {
    return namespacedReducer(state || void 0, action)
}