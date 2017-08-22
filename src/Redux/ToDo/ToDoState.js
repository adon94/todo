import { loop, Cmd } from 'redux-loop';

export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const EDIT_TODO = "EDIT_TODO"


const ToDoState = () => ({


    todoState: [],
    editTodoState: {}
})

const initialState = ToDoState();

let nextTodoId = -1;

export function addTodo(text) {
        nextTodoId = nextTodoId+1;
    return {
        type: ADD_TODO,
        payload: {
            text:text,
            id:nextTodoId
        }

    }
}

export function removeTodo(index) {
    return {
        type: REMOVE_TODO,
        payload: 
            index
        
    }
}

export function editTodo(todo) {
    return {
        type: EDIT_TODO,
        payload:todo
    }
}

export function addTodoFailure(error) {
    return {
        type: ADD_TODO_FAILURE,
        payload: {
            error
        }
    }
}

/* Reducer Async */
//Need to have an initial state
    // function reducer(state = initialState,action)

/* Reducer Async */
//Need to have an initial state
    export default function ToDoStateReducer(state = initialState, action) {
        switch (action.type){
            
            case ADD_TODO: {
            console.log("Add todo: " + action.payload);
                return {
                    ...state,
                    todoState: state.todoState.concat(action.payload)
                }
            }
            case REMOVE_TODO: {
            console.log("Remove todo: " + action.payload);
            return{
                ...state,
                todoState: state.todoState.filter(({ id }) => id != action.payload)
                }
            }
            case EDIT_TODO: {
            console.log("Edit todo: " + action.payload);
                return {
                    ...state,
                    editTodoState: action.payload
                }
            }
           
        default: {
            return state
        }
    }
}
    

// export default function ToDoStateReducer(state = initialState, action) {
//     switch (action.type) {
//         case ADD_TODO: {
//             return {
//                 ...state,
//                 todoState: state.todoState.concat(action.payload)
//             }
//         }
//         case REMOVE_TODO: {
//             console.log(action.payload);
//             return{
//                 ...state,
//                 todoState: state.todoState.filter(({ id }) => id != action.payload)
//             }
//         }
//         case EDIT_TODO: {
//             console.log(action.payload);
//             return{
//                 ...state,
//                 editTodoState: action.payload
//             }

     
//     }

// }

