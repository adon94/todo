import { connect } from 'react-redux';
import ToDoView from './ToDoView';
import {
    addTodo,
    removeTodo,
    editTodo
} from '../../Redux/ToDo/ToDoState'
import {
    navigatePush
} from '../../Redux/Navigation/NavigationState'

export default connect(
    (state, props) => ({
        ...state.todoState
    }),
    (dispatch, props) => ({
        addTodo: (text) => { dispatch(addTodo(text)) },
        removeTodo: (index) => dispatch(removeTodo(index)),
        navigatePush: (props, screenId, title) => dispatch(navigatePush(props, screenId, title)),
        edit: (todo, props, screenId, title) => { 
            dispatch(editTodo(todo));
            dispatch(navigatePush(props, screenId, title))
         },
    })
)(ToDoView);