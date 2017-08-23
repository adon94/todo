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