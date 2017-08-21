
export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const SUBMIT_TODO = "SUBMIT_TODO"


const ToDoState = () => ({
    todoState: [],
    editTodoState: {}
})

const initialState = ToDoState();

var nextTodoId = -1;

export function addTodo(text) {
    nextTodoId = nextTodoId+1;
    return {
        type: ADD_TODO,
        payload: {
            text:text,
            id: nextTodoId
        }
    }
}

export function removeTodo(index){
    nextTodoId = nextTodoId-1;
    return {
        type: REMOVE_TODO,
        payload: index
    }
}

export function editTodo(todo){
    return {
        type: EDIT_TODO,
        payload: todo
    }
}

export function submitEditTodo(todo){
    return{
        type: SUBMIT_TODO,
        payload: todo
    }
}

// updateTodoItem = (array, action) =>{
//     return array.map( (item, index) => {
//         if(index !== action.payload.id) {
//             // This isn't the item we care about - keep it as-is
//             console.log("Not the item that needs to change: "+JSON.stringify(item));
//         }else{
//             console.log("This is the item that needs to change :"+JSON.stringify(item));
//             return {
//                     ...item,
//                     ...action.payload
//             };                  
//         }
//         // Otherwise, this is the one we want - return an updated value
//         // return {
//         //     // ...item,
//         //     // ...action.payload
//         // }; 
//     });
// }


stringIt = (object) =>{
    return JSON.stringify(object);
}




export default function ToDoStateReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO: {
            console.log(action.payload);
            return{
                ...state,
                todoState: state.todoState.concat(action.payload)
            }

        }
        case REMOVE_TODO: {
            console.log(action.payload);
            return{
                ...state,
                todoState: state.todoState.filter(({ id }) => id !== action.payload)
                
            }
        }
        case EDIT_TODO: {
            return{
                ...state,
                editTodoState: action.payload
            }
        }
        case SUBMIT_TODO: {
            //var array = updateTodoItem(state.todoState, action);
            console.log(this.stringIt(action.payload)+""+JSON.stringify(state.todoState));
            
            //var newTodoState = state.todoState.splice(action.payload.id, 0, action.payload)
            return{
                ...state,
                todoState: state.todoState.slice(0, action.payload.id).concat([action.payload]).concat(state.todoState.slice(action.payload.id+1))

            }      
        }
        default: {
            return state
            
        }

    }

  

}
  
