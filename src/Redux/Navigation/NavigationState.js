import { pushNav } from '../Navigate/Navigate'
import { loop, Cmd } from 'redux-loop'

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
        case "NAV_PUSH": 
            console.log(action.payload)
            return loop(
                {...state},
            Cmd.run(pushNav, {args: [action.payload]
        })
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