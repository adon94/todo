const NavigationState = () => ({
    currentScreen: undefined,
    screenHistory: []
});

const initialState = NavigationState();

export const NAV_TAB = "NAV_TAB";
export const NAV_PUSH = "NAV_PUSH";
export const NAV_POP = "NAV_POP";
export const NAV_RESET = "NAV_RESET";

export function navigatePush(props, screenName) {
    return {
        type: NAV_PUSH,
        payload:{
            props: props,
            screenName: screenName
        }
    };
}

export function navigatePop(){
    return {
        type: NAV_POP
    }
}

export default function NavigationStateReducer(state = initialState, action){
    switch(action.type){
        case NAV_PUSH :
        if(state.key == action.state.key)
            return state;
        return {
            ...state,
            updateHistory: state.screenHistory.push(action.screenName),
            newState: action.payload.props.navigator.push({
                title: action.payload.screenName,
                screen: "app." + action.payload.screenName
            })
        }
        default:
        return state;
    }
}
