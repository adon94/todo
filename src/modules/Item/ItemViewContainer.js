import { connect } from 'react-redux';
import ItemView from './ItemView';
import { navigatePop, navigatePush } from '../../Redux/Navigation/NavigationState'
import { editTodo, removeTodo } from '../../Redux/ToDo/ToDoState'

export default connect(
    (state, props) => ({
        ...state.todoState
    }),
    (dispatch, props) => ({
        return: () => { dispatch(navigatePop(props)) },
        removeTodo: (index) => dispatch(removeTodo(index))
    })
)(ItemView)