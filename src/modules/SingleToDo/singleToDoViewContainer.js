import  { connect } from 'react-redux';
import SingleToDoView from './SingleToDoView';
import {
    addTodo,
    removeTodo
 } from '../../Redux/ToDo/SingleToDoState'

export default connect(
    (state) => ({
        ...state.singleTodoState
    }),
    (dispatch) => ({
        // addTodo: text => dispatch(addTodo(text)),
        // removeTodo: id => dispatch(removeTodo(id))
    })
)(SingleToDoView)