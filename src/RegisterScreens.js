/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import ToDoView from './modules/ToDo/TodoViewContainer';
import SingleToDoView from './modules/SingleToDo/singleToDoViewContainer';
import store from './Redux/Store';

export function registerScreens() {
		Navigation.registerComponent('app.ToDoView', () => ToDoView, store, Provider);
		Navigation.registerComponent('app.SingleToDoView', () => SingleToDoView, store, Provider);
}
