export function push(payload) {
    console.log("PUSHING", payload)

    payload.props.navigator.push({
        screen: payload.screenId, 
        title: payload.title, 
        passProps: {todo: payload.todo}
    });
}