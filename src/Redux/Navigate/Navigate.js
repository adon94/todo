import store from '../Store'
<<<<<<< HEAD

export function pushNav(payload) {
=======
import { Navigation } from 'react-native-navigation';

function pushNav(payload) {
>>>>>>> timsbranch
    console.log("inside push nav")
    payload.props.navigator.push({
        screen: payload.screen
    })
}

<<<<<<< HEAD
export function popNav(props) {
    console.log("pop nav")
    props.navigator.pop()
=======
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
>>>>>>> timsbranch
}

function select(state) {
    return state.navigationState
}

<<<<<<< HEAD
function handleChange() {
    console.log(select(store.getState()));
}

export default function navigateListener() {
    store.subscribe(handleChange)
}

=======
let navigationState;
function handleChange() {
    let prevNavState = navigationState;
    navigationState = select(store.getState());

    console.log(navigationState);
    if (prevNavState != navigationState) {
        if (navigationState === undefined) {
            startApp()
        } else {
            //console.log(navigationState.navigationState.index)
            if (navigationState.navigationState.index === 1) {
                pushNav(navigationState.navigationState);
            } else if (navigationState.navigationState.index === 0) {
                popNav(navigationState.navigationState)
            }
        }
    }

}

function navigateListener() {
    store.subscribe(handleChange)
}

export default navigateListener;
>>>>>>> timsbranch
