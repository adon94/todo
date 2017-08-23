import store from '../Store'

export function pushNav(payload) {
    console.log("inside push nav")
    console.log(payload.props)
    payload.props.navigator.push({
        screen: payload.screenId,
        title: payload.title
    })
}

export function popNav(props) {
    console.log("pop nav")
    props.navigator.pop()
}

function select(state) {
    return state.navigationState
}

function handleChange() {
    console.log(select(store.getState()));
}

export default function navigateListener() {
    store.subscribe(handleChange)
}

