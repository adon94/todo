
export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const EDIT_TODO = "EDIT_TODO"
export const SUBMIT_TODO = "SUBMIT_TODO"

import randIdGen from '../../utils/randIdGenerator'


const ToDoState = () => ({
    todoState: [],
    editTodoState: {},
})

const initialState = ToDoState();

export function addTodo(text) {
    var id = randIdGen();
    //nextTodoId = nextTodoId+1;
    return {
        type: ADD_TODO,
        payload: {
            text:text,
            id: id
        }
    }
}

export function removeTodo(index){
    //nextTodoId = nextTodoId-1;
    return {
        type: REMOVE_TODO,
        payload: index
    }
}

export function editTodo(todo){
    console.log(todo);
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

updateTodoItem = (array, action) =>{
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

// for(var i = 0; i<state.todoState.length; i++){
//     if(state.todoState[i].id === payload.id){
//         return payload.text
//     }
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
                 todoState: updateTodoItem(state.todoState, action)//state.todoState.slice(0,action.payload.id).concat([action.payload]).concat(state.todoState.slice(action.payload.id+1))

            }      
        }
        default: {
            return state
            
        }

    }

  

}
  
