export function pushNav(payload){
    console.log("inside push nav")
    console.log(payload.props)
    payload.props.navigator.push({
        screen: payload.screenId,
        title: payload.title,
        passProps: {todo: payload.todo}
    })
}

// navigationState: payload.props.navigator.push({
//     screen: payload.screenId,
//     title: payload.title,
//     passProps: {todo: payload.todo}
// })