import store from '../Redux/Store'

export const listenForChanges = () =>{
    store.subscribe(()=>{
        console.log("Changes made to state");
    })
}




export const pushNav = (payload) => {
    console.log("inside push nav")
    console.log(payload.props)
    payload.props.navigator.push({
        screen: payload.screenId,
        title: payload.title
    })
}

export const popNav = (props) => {
    console.log("pop nav")
    props.navigator.pop()
}