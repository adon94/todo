import { loop, Cmd} from 'redux-loop';

import { pushNav, popNav } from '../Navigate/Navigate'
const NavigationState = () => ({
    navigationState: []
})

const initialState = NavigationState();

// export function navigatePush(props, screenId, title, todo) {
//     return {
//         type: "NAV_PUSH",
//         payload: {
//             props: props,
//             screenId: screenId,
//             title: title,
//             todo: todo
//         }
//     }
// }
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
            console.log(action.payload)
            return loop(
                {
                ...state},
                Cmd.run(pushNav, {args: [action.payload.props, action.payload.screenId,
                action,payload.todo]
        })    
            )
        // default: {
        //     return state
        // } add the pop
        case "NAV_POP": {
            if (tab.index === 0 || tab.routes.length === 1) return state;
            return loop(
                {
                ...state},
                Cmd.run(popNav, {args: [action.payload.props, action.payload.screenId,
                action,payload.todo]
        })
            )
        }
        default: {
            return state
            }
    }
}
    
