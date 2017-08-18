const NavigationState = () => ({
    navigationState: []
})

const initialState = NavigationState();

export function navigatePush(props, screenId, title, todo) {
    return {
        type: "NAV_PUSH",
        payload: {
            props: props,
            screenId: screenId,
            title: title,
            todo: todo
        }
    }
}

// export function navigatePop() {
//     return {
//         type: "NAV_POP"
//     }
// }

export default function NavigationStateReducer(state = initialState, action) {
    switch (action.type) {
        case "NAV_PUSH": {
            console.log(action.payload)
            return {
                ...state,
                navigationState: action.payload.props.navigator.push({
                    screen: action.payload.screenId,
                    title: action.payload.title,
                    passProps: {todo: action.payload.todo}
                })
            }
        }
        default: {
            return state
        }
        // case NAV_POP: {
        //     if (tab.index === 0 || tab.routes.length === 1) return state;
        //     return {
        //         ...state,
        //         [state.key]: this.props.navigation.pop()
        //     }
        // }
    }
}