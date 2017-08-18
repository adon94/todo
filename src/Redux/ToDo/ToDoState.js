
export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const EDIT_TODO = "EDIT_TODO"


const ToDoState = () => ({

    todoState: []
})

const initialState = ToDoState();

let nextTodoId = 0;

<<<<<<< HEAD
export function addTodoLAter(text) {
=======
export function addTodoNow(text) {
>>>>>>> Git tut
    return {
        type: ADD_TODO,
        payload: text

    }
}

export function removeTodo(todo, index) {
    return {
        type: REMOVE_TODO,
        payload: {
            todo,
            index
        }
    }
}

export function editTodo(todo, index) {
    return {
        type: EDIT_TODO,
        payload: {
            todo,
            index
        }
    }
}


export default function ToDoStateReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
<<<<<<< HEAD
                todoState: state.todoState.concat(action.payload)
=======
            
                    todoState: state.todoState.concat(action.payload),
                
            
>>>>>>> 9f38dea1a82ef363b988225c5424712290337dd3
            }
        }
        default: {
            return state

        }

    }



}

