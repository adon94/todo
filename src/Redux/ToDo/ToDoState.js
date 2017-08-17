
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
        payload: text

    }
}

export function removeTodo(todo, index){
    return {
        type: REMOVE_TODO,
        payload: {
            todo,
            index
        }
    }
}

export function editTodo(todo, index){
    return {
        type: EDIT_TODO,
        payload: {
            todo,
            index
        }
    }
}


export default function ToDoStateReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO: {
            return {
                ...state,
            
                    todoState: state.todoState.concat(action.payload),
                
            
            }
        }
        default: {
            return state
            
        }

    }

  

}
  
