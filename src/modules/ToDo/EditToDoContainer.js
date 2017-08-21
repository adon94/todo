import  { connect } from 'react-redux';
import EditToDoView from './EditToDoView';
import {
    removeTodo,
    submitEditTodo
 } from '../../Redux/ToDo/ToDoState';

export default connect(
    (state, props) => ({
        ...state.todoState
    }),
    dispatch => ({
        removeTodo: (index) => dispatch(removeTodo(index)),
        submitEditTodo: (todo) => dispatch(submitEditTodo(todo))
    })
)(EditToDoView)