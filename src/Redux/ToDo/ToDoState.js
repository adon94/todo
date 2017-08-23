import { loop, cmd} from 'redux-loop'
import randIdKey from '../../utils/randidGen'

    /*      Actions     */

export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const SUBMIT_EDIT_TODO = "SUBMIT_EDIT_TODO"

const ToDoState = () => ({
    todoState: [],
    editTodoState: {}
})

const initialState = ToDoState();

let nextTodoId = 0;

export function addTodo(text) {
var id = randIdKey()
    return {
        type: ADD_TODO,
        payload: {
            text: text,
            id: id
        }

    }
}

export function removeTodo(index) {
    return {
        type: REMOVE_TODO,
        payload: index
    }
}

export function editTodo(todo) {
    return {
        type: EDIT_TODO,
        payload: todo
    }
}
export function submitEditTodo(todo) {
    return {
        type: SUBMIT_EDIT_TODO,
        payload: todo
    }
}

export function updateTodoItem(array, action){
    return array.map( (item) => {
        if(item.id !== action.payload.id) {
            // This isn't the item we care about - keep it as-is
            console.log("Not the item that needs to change: "+JSON.stringify(item));
            return item
        }

        console.log("This is the item that needs to change :"+JSON.stringify(item)+" to "+JSON.stringify(action.payload));
            return {
                    ...item,
                    ...action.payload
            };                  
        // Otherwise, this is the one we want - return an updated value
        // return {
        //     // ...item,
        //     // ...action.payload
        // }; 
    });
}

export default function ToDoStateReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todoState: state.todoState.concat(action.payload)
            }
        }
        case REMOVE_TODO: {
            console.log(action.payload);
            return {
                ...state,
                todoState: state.todoState.filter(({ id }) => id !== action.payload)
            }
        }
        case EDIT_TODO: {
            console.log("inside edit todo "+action.payload);
            return {
                ...state,
                editTodoState: action.payload
            }
        }
        case SUBMIT_EDIT_TODO: {
            console.log(action.payload)
            return{
                ...state,
                todoState: updateTodoItem(state.todoState, action)
            }
        }
        // case EDIT_TODO: {
        //     return {
        //         ...state,
        //         todoState: state.todoState
        //     }
        // }
        default: {
            return state
        }
    }
}

