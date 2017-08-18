<<<<<<< HEAD
/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import ToDoView from './modules/ToDo/ToDoViewContainer';
import store from './Redux/Store';
import { Provider } from 'react-redux';

export function registerScreens() {
		Navigation.registerComponent('app.ToDoView', () => ToDoView, store, Provider);
}
=======
import { Navigation } from 'react-native-navigation';

import Todo from './modules/Todo/Todo'

export function registerScreens(){
    Navigation.registerComponent('app.Todo', () => Todo);
}
>>>>>>> 48092f95db461000af31599b96f209669f4ca527
