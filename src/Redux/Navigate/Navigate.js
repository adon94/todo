import store from '../Store'
import { Navigation } from 'react-native-navigation';

function pushNav(payload) {
    console.log("inside push nav")
    payload.props.navigator.push({
        screen: payload.screen
    })
}

function popNav(payload) {
    console.log("pop nav")
    payload.props.navigator.pop()
}

function startApp() {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'app.ToDoView',
            title: 'To Do List',
        },
    });
}

function select(state) {
    return state.navigationState
}

function handleChange() {
    let navigationState = select(store.getState());

    console.log(navigationState);

    if(navigationState === undefined){
        startApp()
    } else {
        //console.log(navigationState.navigationState.index)
        if (navigationState.navigationState.index === 1) {
            pushNav(navigationState.navigationState);
        } else if(navigationState.navigationState.index === 0){
            popNav(navigationState.navigationState)
        }
    }

    
    
}

function navigateListener() {
    store.subscribe(handleChange)
}

export default navigateListener;