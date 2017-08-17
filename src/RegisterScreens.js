/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import ToDoView from './modules/ToDo/ToDoView';
import store from './Redux/Store';
import { Provider } from 'react-redux';



export function registerScreens() {
		Navigation.registerComponent('app.ToDoView', () => ToDoView, store, Provider);
}
