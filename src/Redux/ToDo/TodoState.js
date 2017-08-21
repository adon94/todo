export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const EDIT_TODO = "EDIT_TODO"


const ToDoState = () => ({

    todoState: []
})

const initialState = ToDoState();

let nextTodoId = 0;

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text,
        id : nextTodoId++
    }
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: {
            id
        }
    }
}

export function editTodo(todo, id) {
    return {
        type: EDIT_TODO,
        payload: {
            todo,
            id
        }
    }
}


export default function ToDoStateReducer(state = initialState, action) {
    let list;
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todoState: state.todoState.concat(action.payload)
            }
        }
        case REMOVE_TODO: {
            list = state.todoState.splice(0)
            const index = list.map(i => i.id).indexOf(action.id)
            list.splice(index, 1)
            return {
                ...state                
            }
        }
        default: {
            return state

        }
    }

}