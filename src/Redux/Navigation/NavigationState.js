import { pushNav, popNav, unsubscribe } from '../Navigate/Navigate'
import { loop, Cmd } from 'redux-loop'
import * as constants from '../../const'


const NavigationState = () => ({
    navigationState: []
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
        payload: {
            props: props
        }
    }
}


export default function NavigationStateReducer(state = initialState, action) {
    switch (action.type) {
        case "NAV_PUSH":
            //if(currentScreen === action.payload.screenId) return state;
            console.log(action.payload)
            return (
                {
                    ...state,
                    navigationState: {
                        screen: action.payload.screenId,
                        props: action.payload.props
                    }
                }
            )
        case "NAV_POP":
            console.log(state)
            return loop(
                { ...state },
                // Cmd.run(popNav, { args: [action.payload.props]})
            )
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