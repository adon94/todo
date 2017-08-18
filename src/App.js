<<<<<<< HEAD

=======
>>>>>>> 48092f95db461000af31599b96f209669f4ca527
import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './RegisterScreens';
<<<<<<< HEAD
import  store  from './Redux/Store';
import ToDoView from './modules/ToDo/ToDoView';
import reducer from './Redux/Reducer'

registerScreens();

Navigation.startSingleScreenApp({
	screen: {
		screen: 'app.ToDoView',
		title: 'To Do List',
	},
=======
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'app.Home',
		title: 'Sample App',
	}
>>>>>>> 48092f95db461000af31599b96f209669f4ca527
});