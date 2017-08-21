import { combineReducers } from 'redux';

import UserState from './User/UserState';
import NavigationState from './Navigation/NavigationState'
import ToDoStateReducer from './ToDo/ToDoState'

const reducers = {
    todoState: ToDoStateReducer,
    navigationState : NavigationState
};

const namespacedReducer = combineReducers(
    reducers,
)

export default (state, action) => {
    return namespacedReducer(state || void 0, action)
}