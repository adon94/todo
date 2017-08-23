/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import ToDoView from './modules/ToDo/ToDoViewContainer';
import ItemView from './modules/Item/ItemViewContainer';
import AnotherPage from './modules/AnotherPage/AnotherPageContainer'
import store from './Redux/Store';
import { Provider } from 'react-redux';

export function registerScreens() {
		Navigation.registerComponent('app.ToDoView', () => ToDoView, store, Provider);
		Navigation.registerComponent('app.ItemView', () => ItemView, store, Provider);
		Navigation.registerComponent('app.AnotherPage', () => AnotherPage, store, Provider);
}
