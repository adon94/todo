import store from '../Store';

export function pushNav(payload){
    console.log("inside push nav")
    console.log(payload.props)
    payload.props.navigator.push({
        screen: payload.screenId,
        title: payload.title
    })
}

export function popNav(props){
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
    console.log(select(store.getState()));
    console.log(navigationState.navigationState.props);
    if (navigationState.navigationState.props != null){
        pushNav(navigationState.navigationState);
    }
    else {
        console.log("Didnt Work fml")
    } 
}

function navigateListener(){
    store.subscribe(handleChange)
}

export default navigateListener;

// let unsubscribe = store.subscribe(handleChange)

// unsubscribe();