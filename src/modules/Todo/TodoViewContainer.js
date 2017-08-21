import  { connect } from 'react-redux';
import ToDoView from './ToDoView';
import {
    addTodo,
    removeTodo
 } from '../../Redux/ToDo/ToDoState'

export default connect(
    (state) => ({
        ...state.todoState
    }),
    (dispatch) => ({
        addTodo: text => dispatch(addTodo(text)),
        removeTodo: id => dispatch(removeTodo(id))
    })
)(ToDoView)