/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import ToDoView from './modules/ToDo/ToDoViewContainer';
import EditToDoView from './modules/ToDo/EditToDoContainer';
import store from './Redux/Store';
import { Provider } from 'react-redux';

export function registerScreens() {
		Navigation.registerComponent('app.ToDoView', () => ToDoView, store, Provider);
		Navigation.registerComponent('app.EditToDoView', () => EditToDoView, store, Provider);

}
