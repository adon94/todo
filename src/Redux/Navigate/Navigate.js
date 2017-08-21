export function pushNav(props ,screenId, todo){
    console.log("inside push nav")
    console.log(props)
    props.navigator.push({
        screen: screenId,
        title: screenId,
        passProps: {todo: todo}
    })
}

// navigationState: payload.props.navigator.push({
//     screen: payload.screenId,
//     title: payload.title,
//     passProps: {todo: payload.todo}
// })