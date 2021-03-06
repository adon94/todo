import { connect } from 'react-redux';
import ItemView from './ItemView';
import { navigatePop, navigatePush } from '../../Redux/Navigation/NavigationState'
import { editTodo, removeTodo, submitEditTodo } from '../../Redux/ToDo/ToDoState'

export default connect(
    (state, props) => ({
        ...state.todoState
    }),
    (dispatch, props) => ({
        return: (props) => { dispatch(navigatePop(props)) },
        removeTodo: (index) => dispatch(removeTodo(index)),
        submitEdit: (editedTodo) => dispatch(submitEditTodo(editedTodo)),
        push:(props, screenId, title) => dispatch(navigatePush(props, screenId, title))
    })
)(ItemView)