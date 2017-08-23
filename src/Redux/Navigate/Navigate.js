import store from '../Store'

function pushNav(payload) {
    console.log("inside push nav")
    console.log(payload.props)
    payload.props.navigator.push({
        screen: payload.screen
    })
}

function popNav(props) {
    console.log("pop nav")
    props.navigator.pop()
}

function startApp(initialState) {
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
    console.log(navigationState.navigationState.props);
    if (navigationState.navigationState.props != null) {
        pushNav(navigationState.navigationState);
    } else {
        console.log("Tims logger")
    }
}

function navigateListener() {
    store.subscribe(handleChange)
}

export default navigateListener;