
import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './RegisterScreens';
import  store  from './Redux/Store';
import ToDoView from './modules/ToDo/ToDoView';
import reducer from './Redux/Reducer'
import navigationListener from './Redux/Navigate/Navigate'

registerScreens();
navigationListener();

Navigation.startSingleScreenApp({
	screen: {
		screen: 'app.ToDoView',
		title: 'To Do List',
	},
});