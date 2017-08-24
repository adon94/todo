import { pushNav, popNav, unsubscribe } from '../Navigate/Navigate'
import { loop, Cmd } from 'redux-loop'

const NavigationState = () => ({
    navigationState: {
        screen: 'app.ToDoView',
        props: null,
        index: undefined
    }
})

const initialState = NavigationState();

export function navigatePush(props, screenId, title) {
    return {
        type: "NAV_PUSH",
        payload: {
            props: props,
            screenId: screenId,
            title: title
        }
    }
}

export function navigatePop(props) {
    return {
        type: "NAV_POP",
        payload: props
    }
}


export default function NavigationStateReducer(state = initialState, action) {
    switch (action.type) {
        case "NAV_PUSH":
            return {
                ...state,
                navigationState: {
                    screen: action.payload.screenId,
                    props: action.payload.props,
                    index: 1
                }
            }
        case "NAV_POP":
            return {
                ...state,
                navigationState: {
                    props: action.payload,
                    index: 0
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