import  { connect } from 'react-redux';
import ToDoView from './ToDoView';
import {
    addTodo,
    removeTodo,
    editTodo
 } from '../../Redux/ToDo/ToDoState';

export default connect(
    (state, props) => ({
        ...state.todoState
    }),
    dispatch => ({
        addTodo: (text) => dispatch(addTodo(text)),
        removeTodo: (index) => dispatch(removeTodo(index)),
        editTodo: (todo) => dispatch(editTodo(todo))        
    })
)(ToDoView)