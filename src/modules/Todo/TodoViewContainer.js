import  { connect } from 'react-redux';
import ToDoView from './ToDoView';
import {
    addTodo
 } from '../../Redux/ToDo/ToDoState'

export default connect(
    (state, props) => ({
        ...state.todoState
    }),
    (dispatch, props) => ({
        addTodo: (text) => {dispatch(addTodo(text))}
    })
)(ToDoView)