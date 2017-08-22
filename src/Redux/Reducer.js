import { combineReducers } from 'redux-loop';
import ToDoStateReducer from './ToDo/ToDoState';
import UserState from './User/UserState';
import NavigationState from './Navigation/NavigationState'

const reducers = {
    todoState: ToDoStateReducer,
    navigationState: NavigationState
};

const namespacedReducer = combineReducers(
    reducers,
)

export default (state, action) => {
    return namespacedReducer(state || void 0, action)
}